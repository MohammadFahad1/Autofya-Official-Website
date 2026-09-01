import React from "react";

interface BrandItem {
  id: string;
  name: string;
  renderLogo: () => React.ReactNode;
}

export default function BrandCollectiveSection() {
  const brands: BrandItem[] = [
    {
      id: "station23",
      name: "Station 23",
      renderLogo: () => (
        <div className="flex flex-col items-center justify-center text-center">
          <span className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight leading-none">
            Station <span className="text-[#00A3AD]">23</span>
          </span>
          <span className="text-[9px] font-medium text-slate-400 tracking-wider uppercase mt-1">
            Your Trusted Solution Partner
          </span>
        </div>
      ),
    },
    {
      id: "erp23",
      name: "ERP 23",
      renderLogo: () => (
        <div className="flex items-center space-x-2.5">
          {/* Globe / Network Icon */}
          <svg className="w-8 h-8 text-[#0084FF] shrink-0" viewBox="0 0 32 32" fill="currentColor">
            <path d="M16 2a14 14 0 100 28 14 14 0 000-28zm-2 24.93c-3.95-.49-7.07-3.61-7.56-7.56h15.12c-.49 3.95-3.61 7.07-7.56 7.56zm-7.56-11.43c.49-3.95 3.61-7.07 7.56-7.56v15.12c-3.95-.49-7.07-3.61-7.56-7.56zm17.12 0h-7.56V7.94c3.95.49 7.07 3.61 7.56 7.56z" />
          </svg>
          <div className="flex flex-col">
            <span className="text-2xl font-black text-[#0084FF] tracking-tighter leading-none">
              ERP<span className="font-extrabold">23</span>
            </span>
            <span className="text-[8px] font-bold text-slate-400 tracking-tight mt-0.5">
              Powered By <span className="text-slate-600 font-black">BRAIN STATION 23</span>
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "xr23",
      name: "XR 23",
      renderLogo: () => (
        <div className="flex items-center space-x-2.5">
          {/* VR Headset Icon */}
          <div className="w-9 h-9 rounded-full bg-[#00A3AD]/10 flex items-center justify-center shrink-0">
            <svg className="w-6 h-6 text-[#00A3AD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16M6 8v8m12-8v8M9 12h6"
              />
              <circle cx="9" cy="12" r="1.5" fill="currentColor" />
              <circle cx="15" cy="12" r="1.5" fill="currentColor" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-black text-[#00A3AD] tracking-tight leading-none">
              XR <span className="font-extrabold text-slate-800">23</span>
            </span>
            <span className="text-[9px] font-semibold text-slate-400 tracking-wider uppercase mt-0.5">
              Spatial & AR/VR
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "fintech23",
      name: "FINTECH 23",
      renderLogo: () => (
        <div className="flex items-center">
          <span className="text-2xl sm:text-[26px] font-black text-[#0284C7] tracking-tight">
            FINTECH <span className="text-[#0B1340]">23</span>
          </span>
        </div>
      ),
    },
    {
      id: "studio23",
      name: "STUDIO 23",
      renderLogo: () => (
        <div className="flex items-center space-x-1.5">
          <span className="text-2xl font-black text-slate-900 tracking-tighter uppercase">
            STUDIO
          </span>
          <div className="bg-slate-900 text-white font-black text-lg px-2 py-0.5 rounded tracking-tighter">
            23
          </div>
        </div>
      ),
    },
    {
      id: "learning23",
      name: "LEARNING 23",
      renderLogo: () => (
        <div className="flex items-center space-x-2.5">
          <svg className="w-7 h-7 text-[#2563EB] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
            />
          </svg>
          <span className="text-xl font-black text-[#2563EB] tracking-tight">
            LEARNING <span className="text-slate-800">23</span>
          </span>
        </div>
      ),
    },
    {
      id: "commerce23",
      name: "COMMERCE 23",
      renderLogo: () => (
        <div className="flex items-center space-x-2.5">
          <svg className="w-7 h-7 text-[#0D9488] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
          <span className="text-xl font-black text-[#0D9488] tracking-tight">
            COMMERCE <span className="text-slate-800">23</span>
          </span>
        </div>
      ),
    },
    {
      id: "cloud23",
      name: "CLOUD 23",
      renderLogo: () => (
        <div className="flex items-center space-x-2.5">
          <svg className="w-7 h-7 text-[#0284C7] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 15a4 4 0 004 4h9a5 5 0 001-9.9M13 15.9A4.5 4.5 0 0113 7a4.5 4.5 0 018.2 2.3A4.5 4.5 0 0118 15.9"
            />
          </svg>
          <span className="text-xl font-black text-[#0284C7] tracking-tight">
            CLOUD <span className="text-slate-800">23</span>
          </span>
        </div>
      ),
    },
  ];

  // Quadruple array to create seamless 100% smooth continuous marquee loop
  const marqueeItems = [...brands, ...brands, ...brands, ...brands];

  return (
    <section className="py-20 sm:py-24 bg-[#F8FAFC] text-[#0B1340] font-sans relative overflow-hidden border-t border-slate-200/60">
      {/* Header Container */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#0B1340] tracking-[-0.03em] leading-tight mb-4">
            The 23 Brand Collective
          </h2>
          <p className="text-slate-600 text-base sm:text-lg md:text-xl font-normal max-w-3xl mx-auto leading-relaxed">
            A portfolio of specialized brands driving innovation across Cloud, ERP, Learning, Commerce, XR, and Creative Technology.
          </p>
        </div>
      </div>

      {/* Bounded Slider Container matching Brain Station 23 layout */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full overflow-hidden py-4 rounded-2xl">
          {/* Left Fade Gradient */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC]/90 to-transparent z-10" />

          {/* Right Fade Gradient */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-36 bg-gradient-to-l from-[#F8FAFC] via-[#F8FAFC]/90 to-transparent z-10" />

          {/* Continuous Scrolling Marquee */}
          <div className="animate-marquee items-center">
            {marqueeItems.map((brand, idx) => (
              <div
                key={`${brand.id}-${idx}`}
                className="bg-white rounded-2xl border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md hover:border-slate-300 transition-all duration-300 flex items-center justify-center px-7 py-5 min-w-[210px] sm:min-w-[230px] h-[88px] mx-2.5 sm:mx-3 select-none shrink-0 group cursor-pointer"
              >
                {brand.renderLogo()}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
