import React from "react";

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-[#00a2ad] text-white py-2.5 px-4 text-center text-sm font-medium flex items-center justify-center gap-2 relative z-50">
      <span className="flex items-center gap-1.5">
        <svg
          className="w-4 h-4 text-amber-300"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
        </svg>
        Take a look at our upcoming events & AI webinars
      </span>
      <a
        href="#events"
        className="inline-flex items-center gap-1 font-semibold underline underline-offset-4 hover:text-cyan-100 transition-colors ml-1"
      >
        See More
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  );
}
