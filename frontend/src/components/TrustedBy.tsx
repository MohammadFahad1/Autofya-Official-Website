import React from "react";
import Image from "next/image";

export default function TrustedBy() {
  // Brand items - replace image path when you add your custom logo files in public/brands/
  const brands = [
    { name: "Virtual Affairs", logo: "/brands/virtual-affairs.png", text: "Virtual Affairs" },
    { name: "vallie", logo: "/brands/vallie.png", text: "vallie", color: "text-[#E11D48]" },
    { name: "robi", logo: "/brands/robi.png", text: "robi", color: "text-[#E11D48]" },
    { name: "TENNANT", logo: "/brands/tennant.png", text: "TENNANT", color: "text-[#00a2ad]" },
    { name: "VEON", logo: "/brands/veon.png", text: "VEON", color: "text-[#F59E0B]" },
    { name: "SANOFI", logo: "/brands/sanofi.png", text: "SANOFI", color: "text-[#4A1E9E]" },
    { name: "telenor", logo: "/brands/telenor.png", text: "telenor", color: "text-[#00a2ad]" },
  ];

  // Duplicate list to achieve a 100% seamless infinite marquee loop
  const marqueeBrands = [...brands, ...brands, ...brands];

  return (
    <section className="py-14 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline matching Brain Station 23 screenshot layout */}
        <h3 className="text-2xl sm:text-[28px] font-extrabold text-[#0B1340] tracking-tight leading-snug mb-10">
          Trusted By Fast-Moving Tech Teams <br />
          From Startups to Enterprises
        </h3>

        {/* Marquee Track Container */}
        <div className="relative w-full overflow-hidden py-4">
          <div className="animate-marquee items-center gap-12 sm:gap-16">
            {marqueeBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex items-center justify-center min-w-[140px] px-4 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300 select-none cursor-pointer"
              >
                {/* Text Brand representation (fallback if image is missing) */}
                <span className={`text-xl sm:text-2xl font-extrabold tracking-wider ${brand.color || "text-[#0B1340]"}`}>
                  {brand.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
