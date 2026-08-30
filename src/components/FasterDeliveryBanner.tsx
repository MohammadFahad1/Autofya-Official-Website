import React from "react";

export default function FasterDeliveryBanner() {
  return (
    <section className="py-12 bg-[#F8FAFC] border-y border-slate-200/60 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          
          {/* Left Block: 10X Faster Delivery with Vertical Cyan Bar */}
          <div className="lg:w-2/3 border-l-4 border-[#00A3AD] pl-6 py-1">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1340] tracking-tight mb-2">
              10X Faster Delivery
            </h3>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              Our world-class engineers leverage cutting-edge AI to deliver solutions 10X faster without compromising quality.
            </p>
          </div>

          {/* Right Blocks: IP Protection & Top 1% Talent Badges */}
          <div className="lg:w-1/3 flex items-center justify-start lg:justify-end gap-8 sm:gap-12 w-full lg:w-auto pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-200">
            
            {/* 100% IP Protection */}
            <div className="flex flex-col items-center text-center px-4 border-r lg:border-l lg:border-r-0 border-slate-200/80 lg:pl-10">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-[#00A3AD] mb-3">
                <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-sm sm:text-base font-bold text-[#0B1340] whitespace-nowrap">
                100% IP Protection
              </span>
            </div>

            {/* Top 1% Talent */}
            <div className="flex flex-col items-center text-center px-4 lg:border-l border-slate-200/80 lg:pl-10">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-[#00A3AD] mb-3">
                <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <span className="text-sm sm:text-base font-bold text-[#0B1340] whitespace-nowrap">
                Top 1% Talent
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
