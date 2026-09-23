/**
 * Utility functions for intercepting, cleaning, and converting copied clipboard content
 * from ChatGPT, Notion, Google Docs, Word, web pages, or Markdown into clean formatted HTML.
 */

/**
 * Converts Markdown string into clean, formatted HTML string
 */
export function convertMarkdownToHtml(markdown: string): string {
  if (!markdown || !markdown.trim()) return "";

  let lines = markdown.replace(/\r\n/g, "\n").split("\n");
  let inCodeBlock = false;
  let codeBlockLang = "";
  let codeBlockLines: string[] = [];

  let inList = false;
  let listType: "ul" | "ol" | null = null;

  let inTable = false;
  let tableHeaderParsed = false;
  let tableRows: string[][] = [];
  let tableHeaders: string[] = [];

  let resultHtml: string[] = [];

  const closeList = () => {
    if (inList && listType) {
      resultHtml.push(`</${listType}>`);
      inList = false;
      listType = null;
    }
  };

  const closeTable = () => {
    if (inTable) {
      let tHtml = '<div class="overflow-x-auto my-6"><table class="w-full border-collapse text-xs shadow-sm">\n';
      if (tableHeaders.length > 0) {
        tHtml += '  <thead>\n    <tr class="bg-slate-800 text-cyan-400">\n';
        tableHeaders.forEach((h) => {
          tHtml += `      <th class="border border-slate-700 p-2 text-left font-bold">${parseInlineFormatting(h)}</th>\n`;
        });
        tHtml += '    </tr>\n  </thead>\n';
      }
      tHtml += '  <tbody>\n';
      tableRows.forEach((row, idx) => {
        const bg = idx % 2 === 0 ? "bg-slate-900/50" : "bg-slate-900";
        tHtml += `    <tr class="${bg}">\n`;
        row.forEach((cell) => {
          tHtml += `      <td class="border border-slate-800 p-2 text-slate-300">${parseInlineFormatting(cell)}</td>\n`;
        });
        tHtml += '    </tr>\n';
      });
      tHtml += '  </tbody>\n</table></div>';
      resultHtml.push(tHtml);
      inTable = false;
      tableHeaderParsed = false;
      tableHeaders = [];
      tableRows = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Check code blocks ```lang
    if (line.trim().startsWith("```")) {
      closeList();
      closeTable();
      if (inCodeBlock) {
        // End code block
        const codeText = escapeHtml(codeBlockLines.join("\n"));
        resultHtml.push(
          `<pre class="bg-slate-950 text-slate-100 p-4 rounded-xl border border-slate-800 overflow-x-auto my-6 font-mono text-xs"><code>${codeText}</code></pre>`
        );
        inCodeBlock = false;
        codeBlockLines = [];
        codeBlockLang = "";
      } else {
        // Start code block
        inCodeBlock = true;
        codeBlockLang = line.trim().replace(/^```/, "").trim();
        codeBlockLines = [];
      }
      continue;
    }

    if (inCodeBlock) {
      codeBlockLines.push(line);
      continue;
    }

    const trimmed = line.trim();

    // Check empty line
    if (!trimmed) {
      closeList();
      closeTable();
      continue;
    }

    // Check Markdown Table row e.g. | Col 1 | Col 2 |
    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      closeList();
      const cells = trimmed
        .split("|")
        .slice(1, -1)
        .map((c) => c.trim());

      // Skip delimiter row like |---|---|
      if (cells.every((c) => /^:?-+:?$/.test(c))) {
        tableHeaderParsed = true;
        continue;
      }

      if (!inTable) {
        inTable = true;
        tableHeaders = cells;
      } else {
        if (!tableHeaderParsed) {
          tableHeaders = cells;
        } else {
          tableRows.push(cells);
        }
      }
      continue;
    } else {
      closeTable();
    }

    // Check Headings
    if (/^#{1,6}\s+/.test(trimmed)) {
      closeList();
      const match = trimmed.match(/^(#{1,6})\s+(.+)$/);
      if (match) {
        const level = match[1].length;
        const text = parseInlineFormatting(match[2]);
        const hTag = level === 1 ? "h1" : level === 2 ? "h2" : level === 3 ? "h3" : "h4";
        resultHtml.push(`<${hTag}>${text}</${hTag}>`);
        continue;
      }
    }

    // Check Blockquotes
    if (trimmed.startsWith("> ")) {
      closeList();
      const quoteContent = parseInlineFormatting(trimmed.substring(2).trim());
      resultHtml.push(`<blockquote>${quoteContent}</blockquote>`);
      continue;
    }

    // Check Horizontal Rules
    if (/^(-{3,}|\*{3,}|_{3,})$/.test(trimmed)) {
      closeList();
      resultHtml.push("<hr/>");
      continue;
    }

    // Check Unordered List (- item, * item, + item)
    const ulMatch = trimmed.match(/^[-*+]\s+(.+)$/);
    if (ulMatch) {
      if (!inList || listType !== "ul") {
        closeList();
        inList = true;
        listType = "ul";
        resultHtml.push('<ul class="list-disc pl-5 space-y-1 text-slate-300 my-4">');
      }
      resultHtml.push(`  <li>${parseInlineFormatting(ulMatch[1])}</li>`);
      continue;
    }

    // Check Ordered List (1. item)
    const olMatch = trimmed.match(/^\d+\.\s+(.+)$/);
    if (olMatch) {
      if (!inList || listType !== "ol") {
        closeList();
        inList = true;
        listType = "ol";
        resultHtml.push('<ol class="list-decimal pl-5 space-y-1 text-slate-300 my-4">');
      }
      resultHtml.push(`  <li>${parseInlineFormatting(olMatch[1])}</li>`);
      continue;
    }

    // Standard Paragraph
    closeList();
    resultHtml.push(`<p>${parseInlineFormatting(trimmed)}</p>`);
  }

  closeList();
  closeTable();

  return resultHtml.join("\n");
}

/**
 * Parses inline formatting syntax (bold, italic, inline code, links, images, mark, strikethrough)
 */
export function parseInlineFormatting(text: string): string {
  if (!text) return "";

  let formatted = text;

  // Images ![alt](url)
  formatted = formatted.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_match, alt, url) => {
    return `<img src="${url}" alt="${alt}" class="rounded-xl border border-slate-700 max-h-96 object-cover my-4" />`;
  });

  // Hyperlinks [text](url)
  formatted = formatted.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, linkText, url) => {
    return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-[#00a2ad] underline hover:text-[#008790]">${linkText}</a>`;
  });

  // Bold & Italic ***text*** or ___text___
  formatted = formatted.replace(/(\*\*\*|___)(.*?)\1/g, "<strong><em>$2</em></strong>");

  // Bold **text** or __text__
  formatted = formatted.replace(/(\*\*|__)(.*?)\1/g, "<strong>$2</strong>");

  // Italic *text* or _text_
  formatted = formatted.replace(/(\*|_)(.*?)\1/g, "em>$2</em>");

  // Strikethrough ~~text~~
  formatted = formatted.replace(/~~(.*?)~~/g, "<s>$1</s>");

  // Highlight ==text==
  formatted = formatted.replace(/==(.*?)==/g, "<mark>$1</mark>");

  // Inline Code `code`
  formatted = formatted.replace(/`([^`]+)`/g, '<code class="bg-slate-800 text-cyan-300 px-1.5 py-0.5 rounded font-mono text-xs">$1</code>');

  return formatted;
}

/**
 * Escapes HTML characters to prevent XSS in raw code blocks
 */
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Cleans and sanitizes raw HTML copied from web pages, ChatGPT, Notion, Google Docs, or Word.
 */
export function sanitizeAndCleanCopiedHtml(rawHtml: string): string {
  if (typeof window === "undefined" || !rawHtml) return rawHtml;

  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(rawHtml, "text/html");

    // Remove script, style, meta, link tags
    const elementsToRemove = doc.querySelectorAll("script, style, meta, link, noscript, svg, iframe:not([src*='youtube'])");
    elementsToRemove.forEach((el) => el.remove());

    const body = doc.body;
    cleanNode(body);

    let cleanedHtml = body.innerHTML.trim();

    // Remove empty wrapper divs if needed
    cleanedHtml = cleanedHtml.replace(/<div[^>]*>\s*<\/div>/gi, "");

    return cleanedHtml;
  } catch (err) {
    console.error("Error sanitizing copied HTML:", err);
    return rawHtml;
  }
}

/**
 * Recursively cleans DOM nodes for clean semantic rich text
 */
function cleanNode(node: Node) {
  const children = Array.from(node.childNodes);

  for (const child of children) {
    if (child.nodeType === Node.ELEMENT_NODE) {
      const el = child as HTMLElement;
      const tagName = el.tagName.toLowerCase();

      // Strip google docs / chatgpt unwanted wrapper classes & inline styles except essential attributes
      el.removeAttribute("style");
      el.removeAttribute("id");

      if (tagName === "a") {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener noreferrer");
        el.setAttribute("class", "text-[#00a2ad] underline hover:text-[#008790]");
      } else if (tagName === "strong" || tagName === "b") {
        // preserve
      } else if (tagName === "em" || tagName === "i") {
        // preserve
      } else if (tagName === "code") {
        if (el.parentElement?.tagName.toLowerCase() !== "pre") {
          el.setAttribute("class", "bg-slate-800 text-cyan-300 px-1.5 py-0.5 rounded font-mono text-xs");
        }
      } else if (tagName === "pre") {
        el.setAttribute("class", "bg-slate-950 text-slate-100 p-4 rounded-xl border border-slate-800 overflow-x-auto my-6 font-mono text-xs");
      } else if (tagName === "blockquote") {
        el.setAttribute("class", "border-l-4 border-[#00a2ad] bg-slate-950 p-4 rounded-r-xl italic text-slate-200 my-6");
      } else if (tagName === "ul") {
        el.setAttribute("class", "list-disc pl-5 space-y-1 text-slate-300 my-4");
      } else if (tagName === "ol") {
        el.setAttribute("class", "list-decimal pl-5 space-y-1 text-slate-300 my-4");
      } else if (tagName === "table") {
        el.setAttribute("class", "w-full border-collapse my-4 text-xs shadow-sm");
      } else if (tagName === "th") {
        el.setAttribute("class", "border border-slate-700 p-2 bg-slate-800 text-cyan-400 font-bold text-left");
      } else if (tagName === "td") {
        el.setAttribute("class", "border border-slate-800 p-2 text-slate-300");
      } else if (tagName === "img") {
        el.setAttribute("class", "rounded-xl border border-slate-700 max-h-96 object-cover my-4");
      }

      cleanNode(el);
    }
  }
}

/**
 * Main Clipboard Paste Handler
 * Reads clipboard data and automatically returns formatted HTML.
 */
export function convertPasteToFormattedHtml(clipboardData: DataTransfer): {
  html: string;
  source: "html" | "markdown" | "text";
} {
  const htmlData = clipboardData.getData("text/html");
  const plainData = clipboardData.getData("text/plain") || "";

  // 1. If HTML data exists (from ChatGPT web output, Notion, Google Docs, Word, web browser)
  if (htmlData && htmlData.trim()) {
    const cleaned = sanitizeAndCleanCopiedHtml(htmlData);
    if (cleaned && cleaned.trim()) {
      return { html: cleaned, source: "html" };
    }
  }

  // 2. Check if plain text looks like Markdown (common when copying from ChatGPT code blocks or markdown text)
  const isMarkdown =
    /^#{1,6}\s+/m.test(plainData) ||
    /^\s*[-*+]\s+/m.test(plainData) ||
    /^\s*\d+\.\s+/m.test(plainData) ||
    /```[\s\S]*?```/.test(plainData) ||
    /\*\*.*?\*\*/.test(plainData) ||
    /\[.*?\]\(.*?\)/.test(plainData) ||
    /^>\s+/m.test(plainData) ||
    /\|.*?\|.*?\|/.test(plainData);

  if (isMarkdown) {
    const convertedHtml = convertMarkdownToHtml(plainData);
    return { html: convertedHtml, source: "markdown" };
  }

  // 3. Plain text fallback: split double linebreaks into <p> paragraphs
  if (plainData.includes("\n")) {
    const paragraphs = plainData
      .split(/\n\s*\n/)
      .map((p) => p.trim())
      .filter(Boolean)
      .map((p) => `<p>${parseInlineFormatting(p.replace(/\n/g, "<br/>"))}</p>`);

    if (paragraphs.length > 0) {
      return { html: paragraphs.join("\n"), source: "text" };
    }
  }

  return { html: plainData ? `<p>${parseInlineFormatting(plainData)}</p>` : "", source: "text" };
}
