"use client";

import React, { useState, useRef, useEffect } from "react";
import { convertPasteToFormattedHtml, convertMarkdownToHtml } from "@/lib/pasteHtmlUtils";

interface RichTextEditorProps {
  value: string;
  onChange: (newValue: string) => void;
  placeholder?: string;
  minHeight?: string;
  label?: string;
}

export default function RichTextEditor({
  value,
  onChange,
  placeholder = "Write your rich text article or paste content directly from ChatGPT, Notion, Word, or web pages...",
  minHeight = "380px",
  label = "Rich Text Content Editor",
}: RichTextEditorProps) {
  const [editorMode, setEditorMode] = useState<"visual" | "code" | "split" | "preview">("visual");
  const [pasteNotification, setPasteNotification] = useState<string | null>(null);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const visualContentRef = useRef<HTMLDivElement | null>(null);

  // Sync value into visual editable area when switching to visual mode
  useEffect(() => {
    if (visualContentRef.current && document.activeElement !== visualContentRef.current) {
      visualContentRef.current.innerHTML = value || "";
    }
  }, [value, editorMode]);

  // Handle Paste in Code / Textarea Mode
  const handleTextareaPaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    e.preventDefault();

    const { html, source } = convertPasteToFormattedHtml(e.clipboardData);
    if (!html) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const currentText = value;

    const newContent = currentText.substring(0, start) + html + currentText.substring(end);
    onChange(newContent);

    // Reposition cursor after inserted HTML
    setTimeout(() => {
      textarea.focus();
      const newPos = start + html.length;
      textarea.setSelectionRange(newPos, newPos);
    }, 20);

    const sourceLabel = source === "html" ? "ChatGPT / Web HTML" : source === "markdown" ? "Markdown" : "Text Paragraphs";
    showPasteToast(`✨ Formatted content automatically pasted from ${sourceLabel}!`);
  };

  // Handle Paste in Visual (contentEditable) Mode
  const handleVisualPaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    e.preventDefault();

    const { html, source } = convertPasteToFormattedHtml(e.clipboardData);
    if (!html) return;

    // Execute HTML insertion at cursor in contentEditable
    document.execCommand("insertHTML", false, html);

    // Update parent state with new HTML content
    if (visualContentRef.current) {
      onChange(visualContentRef.current.innerHTML);
    }

    const sourceLabel = source === "html" ? "ChatGPT / Web HTML" : source === "markdown" ? "Markdown" : "Text Paragraphs";
    showPasteToast(`✨ Formatted content automatically pasted from ${sourceLabel}!`);
  };

  const showPasteToast = (msg: string) => {
    setPasteNotification(msg);
    setTimeout(() => {
      setPasteNotification(null);
    }, 3500);
  };

  // Insert tag into Code mode
  const insertFormatTag = (openTag: string, closeTag: string = "", defaultText: string = "") => {
    if (editorMode === "visual" && visualContentRef.current) {
      visualContentRef.current.focus();
      document.execCommand("insertHTML", false, `${openTag}${defaultText}${closeTag}`);
      onChange(visualContentRef.current.innerHTML);
      return;
    }

    const textarea = textareaRef.current;
    if (!textarea) {
      onChange(value + `\n${openTag}${defaultText}${closeTag}`);
      return;
    }

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const currentText = value;
    const selectedText = currentText.substring(start, end) || defaultText;

    const replacement = `${openTag}${selectedText}${closeTag}`;
    const newContent = currentText.substring(0, start) + replacement + currentText.substring(end);

    onChange(newContent);

    setTimeout(() => {
      textarea.focus();
      const newCursorPos = start + openTag.length + selectedText.length;
      textarea.setSelectionRange(start + openTag.length, newCursorPos);
    }, 20);
  };

  // Explicit Clipboard Paste & Format Button
  const handleReadClipboardAndPaste = async () => {
    try {
      if (!navigator.clipboard) {
        alert("Clipboard access not supported in this browser. Please use Ctrl+V to paste.");
        return;
      }
      const clipboardText = await navigator.clipboard.readText();
      if (!clipboardText) {
        alert("Clipboard is empty.");
        return;
      }
      const convertedHtml = convertMarkdownToHtml(clipboardText);
      insertFormatTag(convertedHtml);
      showPasteToast("✨ Clipboard text formatted into clean HTML!");
    } catch (err) {
      alert("Please press Ctrl+V directly inside the editor to paste formatted text.");
    }
  };

  // Convert raw markdown in editor to clean HTML
  const handleConvertRawMarkdown = () => {
    if (!value || !value.trim()) return;
    const converted = convertMarkdownToHtml(value);
    onChange(converted);
    showPasteToast("🧹 Converted all raw Markdown syntax to clean HTML!");
  };

  // Toolbar Handlers
  const handleInsertLink = () => {
    const url = prompt("Enter link URL (e.g. https://autofya.com):", "https://");
    if (!url) return;
    const text = prompt("Enter link text:", "Click here");
    insertFormatTag(`<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-[#00a2ad] underline hover:text-[#008790]">`, "</a>", text || "Link");
  };

  const handleInsertImageFigure = () => {
    const url = prompt("Enter Image URL:", "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80");
    if (!url) return;
    const alt = prompt("Enter image description (alt text):", "Autofya AI platform diagram");
    const caption = prompt("Enter image caption text:", "Figure 1: Autofya system overview");
    const figureHtml = `\n<figure class="my-6 text-center">\n  <img src="${url}" alt="${alt || ''}" class="rounded-xl border border-slate-700 w-full max-h-[450px] object-cover shadow-lg mx-auto" />\n  ${caption ? `<figcaption class="text-xs text-slate-400 mt-2 italic font-mono">${caption}</figcaption>` : ''}\n</figure>\n`;
    insertFormatTag(figureHtml);
  };

  const handleInsertVideoEmbed = () => {
    const videoUrl = prompt("Enter YouTube / Video URL:", "https://www.youtube.com/embed/dQw4w9WgXcQ");
    if (!videoUrl) return;
    let embedUrl = videoUrl;
    if (videoUrl.includes("watch?v=")) {
      embedUrl = videoUrl.replace("watch?v=", "embed/");
    }
    const iframeHtml = `\n<div class="relative my-6 aspect-video w-full rounded-2xl overflow-hidden border border-slate-800 shadow-xl">\n  <iframe src="${embedUrl}" class="w-full h-full" allowfullscreen title="Embedded Video"></iframe>\n</div>\n`;
    insertFormatTag(iframeHtml);
  };

  const handleInsertCTAButton = () => {
    const labelText = prompt("Enter Button Text:", "Explore Autofya Platform →");
    if (!labelText) return;
    const targetUrl = prompt("Enter Button Destination Link:", "https://autofya.com/schedule");
    if (!targetUrl) return;
    const ctaHtml = `\n<div class="my-6 text-center">\n  <a href="${targetUrl}" target="_blank" rel="noopener noreferrer" class="inline-block px-8 py-3.5 rounded-xl bg-[#00a2ad] hover:bg-[#008790] text-white font-bold text-sm shadow-lg hover:shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5">\n    ${labelText}\n  </a>\n</div>\n`;
    insertFormatTag(ctaHtml);
  };

  const handleInsertTable = () => {
    const tableHtml = `\n<div class="overflow-x-auto my-6">\n  <table class="w-full border-collapse text-xs shadow-sm">\n    <thead>\n      <tr class="bg-slate-800 text-cyan-400">\n        <th class="border border-slate-700 p-2 text-left font-bold">Feature</th>\n        <th class="border border-slate-700 p-2 text-left font-bold">Capability</th>\n        <th class="border border-slate-700 p-2 text-left font-bold">Status</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr class="bg-slate-900/50">\n        <td class="border border-slate-800 p-2 text-slate-300">AI Automation</td>\n        <td class="border border-slate-800 p-2 text-slate-300">Multi-agent Workflows</td>\n        <td class="border border-slate-800 p-2 text-emerald-400 font-bold">Active</td>\n      </tr>\n      <tr class="bg-slate-900">\n        <td class="border border-slate-800 p-2 text-slate-300">Rich Formatting</td>\n        <td class="border border-slate-800 p-2 text-slate-300">ChatGPT & Web Paste</td>\n        <td class="border border-slate-800 p-2 text-emerald-400 font-bold">Active</td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n`;
    insertFormatTag(tableHtml);
  };

  return (
    <div className="w-full space-y-2 font-sans">
      {/* HEADER BAR & MODE SELECTOR */}
      <div className="flex flex-wrap items-center justify-between gap-2 p-2 bg-slate-950 border border-slate-800 rounded-xl">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider pl-1">
            {label}
          </span>
          <span className="px-2 py-0.5 text-[10px] font-extrabold bg-[#00a2ad]/20 text-[#00a2ad] border border-[#00a2ad]/30 rounded-full flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00a2ad] animate-pulse"></span>
            Smart Paste Active
          </span>
        </div>

        <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
          <button
            type="button"
            onClick={() => setEditorMode("visual")}
            className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
              editorMode === "visual" ? "bg-[#00a2ad] text-white shadow-xs" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            👁️ Visual (WYSIWYG)
          </button>
          <button
            type="button"
            onClick={() => setEditorMode("code")}
            className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
              editorMode === "code" ? "bg-[#00a2ad] text-white shadow-xs" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            &lt;/&gt; HTML Code
          </button>
          <button
            type="button"
            onClick={() => setEditorMode("split")}
            className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
              editorMode === "split" ? "bg-[#00a2ad] text-white shadow-xs" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            ⚡ Split Editor
          </button>
          <button
            type="button"
            onClick={() => setEditorMode("preview")}
            className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
              editorMode === "preview" ? "bg-[#00a2ad] text-white shadow-xs" : "text-slate-400 hover:text-slate-200"
            }`}
          >
            🖥️ Full Preview
          </button>
        </div>
      </div>

      {/* PASTE TOAST NOTIFICATION BANNER */}
      {pasteNotification && (
        <div className="p-2.5 bg-emerald-950/80 border border-emerald-500/40 rounded-xl text-emerald-300 text-xs font-bold flex items-center justify-between shadow-lg animate-fadeIn">
          <span>{pasteNotification}</span>
          <button
            type="button"
            onClick={() => setPasteNotification(null)}
            className="text-emerald-400 hover:text-white font-mono text-sm px-1.5"
          >
            ✕
          </button>
        </div>
      )}

      {/* FORMATTING TOOLBAR */}
      {editorMode !== "preview" && (
        <div className="space-y-1.5 bg-slate-950/80 p-2.5 rounded-xl border border-slate-800/80">
          {/* Group 1: Headings & Inline Styles */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider pr-1">Blocks:</span>
            <button
              type="button"
              onClick={() => insertFormatTag("<h2>", "</h2>", "Section Heading")}
              className="px-2.5 py-1 bg-slate-800 hover:bg-[#00a2ad] rounded text-xs font-bold text-white transition-colors"
              title="Heading 2"
            >
              H2
            </button>
            <button
              type="button"
              onClick={() => insertFormatTag("<h3>", "</h3>", "Sub-heading")}
              className="px-2.5 py-1 bg-slate-800 hover:bg-[#00a2ad] rounded text-xs font-bold text-white transition-colors"
              title="Heading 3"
            >
              H3
            </button>
            <button
              type="button"
              onClick={() => insertFormatTag("<h4>", "</h4>", "Minor Heading")}
              className="px-2.5 py-1 bg-slate-800 hover:bg-[#00a2ad] rounded text-xs font-bold text-white transition-colors"
              title="Heading 4"
            >
              H4
            </button>
            <button
              type="button"
              onClick={() => insertFormatTag("<p>", "</p>", "Paragraph text goes here...")}
              className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-bold text-slate-200 transition-colors"
              title="Standard Paragraph"
            >
              P
            </button>

            <div className="h-4 w-[1px] bg-slate-800 mx-1" />

            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider pr-1">Inline:</span>
            <button
              type="button"
              onClick={() => insertFormatTag("<strong>", "</strong>", "bold text")}
              className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-bold text-white transition-colors"
              title="Bold Text"
            >
              <strong>B</strong>
            </button>
            <button
              type="button"
              onClick={() => insertFormatTag("<em>", "</em>", "italic text")}
              className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-bold text-white italic transition-colors"
              title="Italic Text"
            >
              <em>I</em>
            </button>
            <button
              type="button"
              onClick={() => insertFormatTag("<u>", "</u>", "underlined text")}
              className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-bold text-white underline transition-colors"
              title="Underline Text"
            >
              <u>U</u>
            </button>
            <button
              type="button"
              onClick={() => insertFormatTag("<s>", "</s>", "strikethrough text")}
              className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-bold text-white line-through transition-colors"
              title="Strikethrough"
            >
              <s>S</s>
            </button>
            <button
              type="button"
              onClick={() => insertFormatTag('<code class="bg-slate-800 text-cyan-300 px-1.5 py-0.5 rounded font-mono text-xs">', "</code>", "const code = true;")}
              className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-mono text-cyan-300 transition-colors"
              title="Inline Code"
            >
              &lt;/&gt;
            </button>
            <button
              type="button"
              onClick={() => insertFormatTag("<mark>", "</mark>", "highlighted text")}
              className="px-2.5 py-1 bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 rounded text-xs font-bold transition-colors"
              title="Highlight Text"
            >
              Mark
            </button>

            <div className="h-4 w-[1px] bg-slate-800 mx-1" />

            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider pr-1">Lists & Quotes:</span>
            <button
              type="button"
              onClick={() => insertFormatTag('<ul class="list-disc pl-5 space-y-1 text-slate-300 my-4">\n  <li>First list item</li>\n  <li>Second list item</li>\n</ul>')}
              className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-bold text-slate-200 transition-colors"
              title="Unordered Bullet List"
            >
              • Bullet List
            </button>
            <button
              type="button"
              onClick={() => insertFormatTag('<ol class="list-decimal pl-5 space-y-1 text-slate-300 my-4">\n  <li>First step</li>\n  <li>Second step</li>\n</ol>')}
              className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-bold text-slate-200 transition-colors"
              title="Ordered Numbered List"
            >
              1. Numbered List
            </button>
            <button
              type="button"
              onClick={() => insertFormatTag('<blockquote class="border-l-4 border-[#00a2ad] bg-slate-950 p-4 rounded-r-xl italic text-slate-200 my-6">\n  "Key quote or insight goes here..."\n</blockquote>')}
              className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-bold text-cyan-300 transition-colors"
              title="Blockquote"
            >
              &quot; Quote
            </button>

            <div className="h-4 w-[1px] bg-slate-800 mx-1" />

            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider pr-1">Clipboard Tools:</span>
            <button
              type="button"
              onClick={handleReadClipboardAndPaste}
              className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-500/30 rounded text-xs font-bold transition-colors cursor-pointer"
              title="Read system clipboard and format as HTML"
            >
              📋 Format Clipboard
            </button>
            <button
              type="button"
              onClick={handleConvertRawMarkdown}
              className="px-2.5 py-1 bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 border border-purple-500/30 rounded text-xs font-bold transition-colors cursor-pointer"
              title="Convert any raw Markdown syntax in editor to clean HTML"
            >
              🧹 Convert Markdown
            </button>
          </div>

          {/* Group 2: Elements & Media */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1 border-t border-slate-900">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider pr-1">Media & Layout:</span>
            <button
              type="button"
              onClick={handleInsertLink}
              className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-bold text-cyan-400 transition-colors"
              title="Insert Hyperlink"
            >
              🔗 Link
            </button>
            <button
              type="button"
              onClick={handleInsertImageFigure}
              className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-bold text-amber-400 transition-colors"
              title="Insert Image Figure"
            >
              🖼️ Figure Image
            </button>
            <button
              type="button"
              onClick={handleInsertVideoEmbed}
              className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-bold text-rose-400 transition-colors"
              title="Insert Video Embed"
            >
              📹 Video Player
            </button>
            <button
              type="button"
              onClick={handleInsertTable}
              className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-bold text-blue-400 transition-colors"
              title="Insert Data Table"
            >
              📊 Data Table
            </button>

            <div className="h-4 w-[1px] bg-slate-800 mx-1" />

            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider pr-1">CTA & Divider:</span>
            <button
              type="button"
              onClick={handleInsertCTAButton}
              className="px-2.5 py-1 bg-[#00a2ad] hover:bg-[#008790] rounded text-xs font-bold text-white transition-colors shadow-xs"
              title="Insert Primary Call To Action Button"
            >
              🔘 Primary CTA Button
            </button>
            <button
              type="button"
              onClick={() => insertFormatTag('<hr class="my-8 border-slate-800" />')}
              className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-bold text-slate-300 transition-colors"
              title="Horizontal Line Divider"
            >
              — Divider Line
            </button>
          </div>
        </div>
      )}

      {/* EDITOR CANVAS AREA */}
      <div className="bg-slate-900 border border-slate-700 rounded-xl overflow-hidden shadow-inner">
        {/* VISUAL (WYSIWYG) EDITOR MODE */}
        {editorMode === "visual" && (
          <div className="p-4 bg-slate-900 min-h-[350px]">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Interactive Visual Canvas (Type or Paste ChatGPT Content)</span>
              <span className="text-cyan-400 font-mono text-[10px]">WYSIWYG Active</span>
            </div>
            <div
              ref={visualContentRef}
              contentEditable
              suppressContentEditableWarning
              onPaste={handleVisualPaste}
              onInput={() => {
                if (visualContentRef.current) {
                  onChange(visualContentRef.current.innerHTML);
                }
              }}
              style={{ minHeight }}
              className="w-full p-4 bg-slate-950 text-slate-100 rounded-xl border border-slate-800/80 focus:outline-none focus:ring-1 focus:ring-[#00a2ad] leading-relaxed overflow-y-auto max-h-[550px]
                [&>h1]:text-2xl [&>h1]:font-bold [&>h1]:text-white [&>h1]:mt-6 [&>h1]:mb-3
                [&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-5 [&>h2]:mb-2.5 [&>h2]:border-b [&>h2]:border-slate-800 [&>h2]:pb-1
                [&>h3]:text-lg [&>h3]:font-bold [&>h3]:text-[#00a2ad] [&>h3]:mt-4 [&>h3]:mb-2
                [&>h4]:text-base [&>h4]:font-bold [&>h4]:text-slate-300 [&>h4]:mt-3 [&>h4]:mb-2
                [&>p]:text-slate-300 [&>p]:leading-relaxed [&>p]:mb-3 [&>p]:text-xs
                [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1 [&>ul]:text-slate-300 [&>ul]:mb-3 [&>ul]:text-xs
                [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-1 [&>ol]:text-slate-300 [&>ol]:mb-3 [&>ol]:text-xs
                [&>blockquote]:border-l-4 [&>blockquote]:border-[#00a2ad] [&>blockquote]:bg-[#0F172A] [&>blockquote]:p-3 [&>blockquote]:rounded-r-xl [&>blockquote]:italic [&>blockquote]:text-slate-200 [&>blockquote]:my-3 [&>blockquote]:text-xs
                [&>img]:rounded-xl [&>img]:my-3 [&>img]:max-h-56 [&>img]:object-cover
                [&>mark]:bg-amber-400 [&>mark]:text-slate-900 [&>mark]:px-1 [&>mark]:rounded
                [&>pre]:bg-slate-950 [&>pre]:p-3 [&>pre]:rounded-xl [&>pre]:border [&>pre]:border-slate-800 [&>pre]:my-3 [&>pre]:overflow-x-auto [&>pre]:text-[11px]
                [&>table]:w-full [&>table]:border-collapse [&>table]:my-3 [&>table]:text-[11px]
                [&>table_th]:border [&>table_th]:border-slate-700 [&>table_th]:p-2 [&>table_th]:bg-slate-800 [&>table_th]:text-cyan-400
                [&>table_td]:border [&>table_td]:border-slate-800 [&>table_td]:p-2"
            />
          </div>
        )}

        {/* HTML CODE EDITOR MODE */}
        {editorMode === "code" && (
          <div className="p-4 bg-slate-900">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>HTML Source Code Input (Pasting converts ChatGPT / Markdown to HTML)</span>
              <span className="text-amber-400 font-mono text-[10px]">HTML Code Mode</span>
            </div>
            <textarea
              ref={textareaRef}
              rows={14}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              onPaste={handleTextareaPaste}
              placeholder={placeholder}
              style={{ minHeight }}
              className="w-full p-4 bg-slate-950 text-slate-100 font-mono text-xs leading-relaxed rounded-xl border border-slate-800 focus:outline-none focus:ring-1 focus:ring-[#00a2ad]"
            />
          </div>
        )}

        {/* SPLIT VIEW MODE */}
        {editorMode === "split" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-800 min-h-[420px]">
            <div className="p-3 bg-slate-900 flex flex-col">
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>HTML Code Input</span>
                <span className="text-slate-500 font-mono text-[10px]">Real-Time Sync</span>
              </div>
              <textarea
                ref={textareaRef}
                rows={14}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                onPaste={handleTextareaPaste}
                placeholder={placeholder}
                className="w-full flex-1 p-3 bg-slate-950 text-slate-100 font-mono text-xs leading-relaxed rounded-xl border border-slate-800/80 focus:outline-none focus:ring-1 focus:ring-[#00a2ad]"
              />
            </div>

            <div className="p-4 bg-[#070D1E] overflow-y-auto max-h-[500px]">
              <div className="text-[10px] font-bold text-[#00a2ad] uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00a2ad] animate-pulse"></span>
                Live Output Preview
              </div>
              <div
                dangerouslySetInnerHTML={{ __html: value || "<p class='text-slate-500 italic text-xs'>No content entered yet...</p>" }}
                className="prose prose-invert max-w-none 
                  [&>h1]:text-2xl [&>h1]:font-bold [&>h1]:text-white [&>h1]:mt-6 [&>h1]:mb-3
                  [&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-5 [&>h2]:mb-2.5 [&>h2]:border-b [&>h2]:border-slate-800 [&>h2]:pb-1
                  [&>h3]:text-lg [&>h3]:font-bold [&>h3]:text-[#00a2ad] [&>h3]:mt-4 [&>h3]:mb-2
                  [&>h4]:text-base [&>h4]:font-bold [&>h4]:text-slate-300 [&>h4]:mt-3 [&>h4]:mb-2
                  [&>p]:text-slate-300 [&>p]:leading-relaxed [&>p]:mb-3 [&>p]:text-xs
                  [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1 [&>ul]:text-slate-300 [&>ul]:mb-3 [&>ul]:text-xs
                  [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-1 [&>ol]:text-slate-300 [&>ol]:mb-3 [&>ol]:text-xs
                  [&>blockquote]:border-l-4 [&>blockquote]:border-[#00a2ad] [&>blockquote]:bg-[#0F172A] [&>blockquote]:p-3 [&>blockquote]:rounded-r-xl [&>blockquote]:italic [&>blockquote]:text-slate-200 [&>blockquote]:my-3 [&>blockquote]:text-xs
                  [&>img]:rounded-xl [&>img]:my-3 [&>img]:max-h-56 [&>img]:object-cover
                  [&>mark]:bg-amber-400 [&>mark]:text-slate-900 [&>mark]:px-1 [&>mark]:rounded
                  [&>pre]:bg-slate-950 [&>pre]:p-3 [&>pre]:rounded-xl [&>pre]:border [&>pre]:border-slate-800 [&>pre]:my-3 [&>pre]:overflow-x-auto [&>pre]:text-[11px]
                  [&>table]:w-full [&>table]:border-collapse [&>table]:my-3 [&>table]:text-[11px]
                  [&>table_th]:border [&>table_th]:border-slate-700 [&>table_th]:p-2 [&>table_th]:bg-slate-800 [&>table_th]:text-cyan-400
                  [&>table_td]:border [&>table_td]:border-slate-800 [&>table_td]:p-2"
              />
            </div>
          </div>
        )}

        {/* FULL PREVIEW MODE */}
        {editorMode === "preview" && (
          <div className="p-6 bg-[#070D1E] min-h-[380px] text-slate-200 overflow-y-auto max-h-[600px]">
            <div className="text-xs text-[#00a2ad] font-bold mb-4 uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-3">
              <span className="w-2 h-2 rounded-full bg-[#00a2ad] animate-pulse"></span>
              Full Article Output Preview
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: value || "<p class='text-slate-500 italic text-sm'>No content entered yet...</p>" }}
              className="prose prose-invert max-w-none 
                [&>h1]:text-3xl [&>h1]:font-extrabold [&>h1]:text-white [&>h1]:mt-8 [&>h1]:mb-4
                [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-8 [&>h2]:mb-3 [&>h2]:border-b [&>h2]:border-slate-800 [&>h2]:pb-2
                [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-[#00a2ad] [&>h3]:mt-6 [&>h3]:mb-3
                [&>h4]:text-lg [&>h4]:font-bold [&>h4]:text-slate-200 [&>h4]:mt-4 [&>h4]:mb-2
                [&>p]:text-slate-300 [&>p]:leading-relaxed [&>p]:mb-4 [&>p]:text-sm
                [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1.5 [&>ul]:text-slate-300 [&>ul]:mb-4 [&>ul]:text-sm
                [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-1.5 [&>ol]:text-slate-300 [&>ol]:mb-4 [&>ol]:text-sm
                [&>blockquote]:border-l-4 [&>blockquote]:border-[#00a2ad] [&>blockquote]:bg-[#0F172A] [&>blockquote]:p-4 [&>blockquote]:rounded-r-2xl [&>blockquote]:italic [&>blockquote]:text-slate-200 [&>blockquote]:my-6 [&>blockquote]:text-sm
                [&>img]:rounded-2xl [&>img]:my-6 [&>img]:max-h-96 [&>img]:object-cover [&>img]:shadow-xl
                [&>mark]:bg-amber-400 [&>mark]:text-slate-900 [&>mark]:px-1.5 [&>mark]:py-0.5 [&>mark]:rounded
                [&>pre]:bg-slate-950 [&>pre]:p-4 [&>pre]:rounded-2xl [&>pre]:border [&>pre]:border-slate-800 [&>pre]:my-6 [&>pre]:overflow-x-auto [&>pre]:shadow-lg
                [&>table]:w-full [&>table]:border-collapse [&>table]:my-6 [&>table]:text-xs [&>table]:shadow-lg
                [&>table_th]:border [&>table_th]:border-slate-700 [&>table_th]:p-3 [&>table_th]:bg-slate-800 [&>table_th]:text-cyan-400
                [&>table_td]:border [&>table_td]:border-slate-800 [&>table_td]:p-3"
            />
          </div>
        )}
      </div>
    </div>
  );
}
