import React from "react";
import Image from "next/image";
import AutofyaLogo from "./AutofyaLogo";

interface Office {
  country: string;
  address: string;
  email: string;
  phone?: string;
  renderSkyline: () => React.ReactNode;
}

export default function Footer() {
  const offices: Office[] = [
    {
      country: "Bangladesh",
      address: "8th Floor, 2 Bir Uttam AK Khandakar Road, Mohakhali C/A,Dhaka 1212, Bangladesh",
      email: "sales@autofya.com",
      phone: "+8809610-902323",
      renderSkyline: () => (
        <svg viewBox="0 0 160 100" className="w-36 sm:w-44 h-auto text-slate-500/80 stroke-current fill-none stroke-[1.25]" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 90h140M20 94h120M35 97h90" opacity="0.4" />
          <path d="M25 85V55l5-5 5 5v30M27 50h6M35 85V40l8-8 8 8v45M43 32v-5M47 85V60l6-6 6 6v25" />
          <path d="M60 85V45c0-10 15-10 15 0v40" />
          <path d="M80 85L95 20l15 65M85 85L95 30l10 55M90 85L95 42l5 43" />
          <path d="M115 85V48h18v37M120 54h8M120 62h8M120 70h8" />
          <path d="M135 85V38h20v47M140 44h10M140 52h10M140 60h10M140 68h10" />
          <path d="M5 85h150" />
        </svg>
      ),
    },
    {
      country: "USA",
      address: "7426 Alban Station Blvd, Suite a101, Springfield, VA 22150",
      email: "sales@autofya.com",
      phone: "+1 606 773 7443",
      renderSkyline: () => (
        <svg viewBox="0 0 160 100" className="w-36 sm:w-44 h-auto text-slate-500/80 stroke-current fill-none stroke-[1.25]" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 90h140M20 94h120" opacity="0.4" />
          <path d="M20 85l3-25h8l3 25M27 60V35m-3 5l3-10 3 10M27 25l-2-6 4 2 4-2-2 6" />
          <path d="M35 85V55l25 15V85M35 55l25 30M60 70l25-15v30M85 55l-25 30" />
          <path d="M90 85V30h16v55M98 30V15M94 38h8M94 46h8M94 54h8M94 62h8" />
          <path d="M110 85V42h18v43M115 48h8M115 56h8M115 64h8" />
          <path d="M130 85V25l10-8 10 8v60M135 32h10M135 40h10M135 48h10M135 56h10M135 64h10" />
          <path d="M5 85h150" />
        </svg>
      ),
    },
    {
      country: "Germany",
      address: "Bad Zwischenahn",
      email: "sales@autofya.de",
      phone: "+4944036999839",
      renderSkyline: () => (
        <svg viewBox="0 0 160 100" className="w-36 sm:w-44 h-auto text-slate-500/80 stroke-current fill-none stroke-[1.25]" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 90h140M25 94h110" opacity="0.4" />
          <path d="M20 85V45l10-30 10 30v40M30 15v-5M40 85V45l10-30 10 30v40M50 15v-5M25 60h30M30 75h20" />
          <path d="M75 85V35c-5 0-8-5-8-10s3-10 8-10 8 5 8 10-3 10-8 10v50M75 15V8" />
          <path d="M95 85V50h25v35M100 85V60h15v25M97 55h21" />
          <path d="M125 85V38h25v47M130 45h15M130 53h15M130 61h15M130 69h15" />
          <path d="M5 85h150" />
        </svg>
      ),
    },
    {
      country: "UAE",
      address: "903, Damac XL Tower, Business Bay, P.O. Box: 29544, Dubai, UAE.",
      email: "sales@autofya.com",
      phone: "+971 42420223",
      renderSkyline: () => (
        <svg viewBox="0 0 160 100" className="w-36 sm:w-44 h-auto text-slate-500/80 stroke-current fill-none stroke-[1.25]" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 90h140M30 94h100" opacity="0.4" />
          <path d="M20 85V35c15 0 25 15 25 50M20 50h23M20 65h24" />
          <path d="M55 85V40h20v45M60 45h10v35H60z" />
          <path d="M90 85V45l5-15 5-15V5M95 5v-3M87 60h16M85 72h20" />
          <path d="M115 85V35l15 10v40M132 85V48h18v37M136 54h10M136 62h10" />
          <path d="M5 85h150" />
        </svg>
      ),
    },
    {
      country: "Malaysia",
      address: "Level 9, Integra Tower, The Intermark, No. 348, Jalan Tun Razak, 50400 Kuala Lumpur, Malaysia",
      email: "sales@autofya.com",
      phone: "+601111708999",
      renderSkyline: () => (
        <svg viewBox="0 0 160 100" className="w-36 sm:w-44 h-auto text-slate-500/80 stroke-current fill-none stroke-[1.25]" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 90h140M20 94h120" opacity="0.4" />
          <path d="M30 85V30l8-15 8 15v55M38 15V8M30 40h16M30 55h16M30 70h16" />
          <path d="M46 52h18" />
          <path d="M64 85V30l8-15 8 15v55M72 15V8M64 40h16M64 55h16M64 70h16" />
          <path d="M100 85V35c-4 0-6-3-6-6s2-6 6-6 6 3 6 6-2 6-6 6v50M100 23V10" />
          <path d="M115 85V42h18v43M120 48h8M120 56h8M120 64h8" />
          <path d="M135 85V32h20v53M140 38h10M140 46h10M140 54h10M140 62h10" />
          <path d="M5 85h150" />
        </svg>
      ),
    },
    {
      country: "Japan",
      address: "Daishin Akiyama Building 3F, THE HUB Shinagawa #324 2-3-1 Konan, Minato-ku, Tokyo 108-0075",
      email: "sales@autofya.com",
      renderSkyline: () => (
        <svg viewBox="0 0 160 100" className="w-36 sm:w-44 h-auto text-slate-500/80 stroke-current fill-none stroke-[1.25]" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 90h140M30 94h100" opacity="0.4" />
          <path d="M15 85c20-25 35-35 45-35s25 10 45 35" />
          <path d="M52 57l8 6 8-6" />
          <path d="M20 85V65M36 85V65M16 63h24M18 68h20" />
          <path d="M105 85V40M98 80h14M96 70h18M94 60h22M92 50h26M90 40h30M105 40V30" />
          <path d="M130 85L142 20l12 65M142 20V8M134 65h16M137 48h10" />
          <path d="M5 85h150" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#0B1528] text-white font-sans border-t border-slate-800/80">
      
      {/* GLOBAL OFFICES SECTION - EXACT BRAIN STATION 23 DESIGN */}
      <div className="py-20 sm:py-24 border-b border-slate-800/60">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-white tracking-tight mb-12 sm:mb-16">
            Global Offices
          </h2>

          {/* 2-Column Grid of Offices */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 lg:gap-x-20 lg:gap-y-16">
            {offices.map((office, idx) => (
              <div key={idx} className="flex items-start space-x-6 sm:space-x-8 group">
                
                {/* Left: City Skyline Graphic */}
                <div className="shrink-0 pt-1">
                  {office.renderSkyline()}
                </div>

                {/* Right: Office Text Details */}
                <div className="flex flex-col text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-2">
                    {office.country}
                  </h3>
                  
                  <p className="text-slate-300 text-sm leading-relaxed mb-3 max-w-sm font-normal">
                    {office.address}
                  </p>

                  <a
                    href={`mailto:${office.email}`}
                    className="text-[#00a2ad] hover:text-[#33b5be] text-sm font-medium hover:underline block mb-1 transition-colors"
                  >
                    {office.email}
                  </a>

                  {office.phone && (
                    <span className="text-[#00a2ad] text-sm font-medium">
                      {office.phone}
                    </span>
                  )}
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

      {/* READY TO SCALE YOUR TEAM? CTA BANNER CARD */}
      <div className="py-16 sm:py-20 bg-[#0B1528] border-b border-slate-800/60">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#1A2942] rounded-3xl border border-slate-700/50 p-10 sm:p-14 lg:p-16 text-center max-w-7xl mx-auto shadow-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-bold text-white tracking-tight leading-tight mb-4">
              Ready to Scale Your Team?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto mb-8">
              Let's discuss how our resource augmentation and AI-powered development can accelerate your project delivery.
            </p>
            <div>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-[#0B1340] font-bold text-base sm:text-lg shadow-md transition-all duration-200"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER NAVIGATION - MATCHING SCREENSHOT EXACTLY */}
      <div className="py-16 sm:py-20 bg-[#0B1528]">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            
            {/* Column 1: Brand Info */}
            <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-6">
              <div className="mb-4 bg-white p-2 rounded-lg">
                <AutofyaLogo height={44} />
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-sm font-normal">
                AI-ready software service company specializing in resource augmentation. We deliver 10X faster solutions for startups, SMEs, and Enterprises across Fintech, Pharma, Retail & Distribution.
              </p>
              
              {/* Social Icons */}
              <div className="flex items-center space-x-8 sm:space-x-10 text-white text-3xl sm:text-[32px]">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-[#00a2ad] transition-colors font-extrabold">
                  f
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-[#00a2ad] transition-colors font-extrabold">
                  in
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="X" className="hover:text-[#00a2ad] transition-colors font-extrabold">
                  X
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-[#00a2ad] transition-colors font-extrabold text-2xl sm:text-3xl">
                  ►
                </a>
                <a href="https://medium.com" target="_blank" rel="noreferrer" aria-label="Medium" className="hover:text-[#00a2ad] transition-colors font-extrabold">
                  M
                </a>
              </div>
            </div>

            {/* Column 2: Industries (2 Sub-columns) */}
            <div className="lg:col-span-4">
              <h4 className="text-[#F59E0B] text-lg font-bold mb-4">
                Industries
              </h4>
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:text-base text-slate-200">
                <div className="space-y-3">
                  <p><a href="#fintech" className="hover:text-white transition-colors">Fintech</a></p>
                  <p><a href="#pharma" className="hover:text-white transition-colors">Pharma</a></p>
                  <p><a href="#telecom" className="hover:text-white transition-colors">Telecom</a></p>
                  <p><a href="#realestate" className="hover:text-white transition-colors">Real Estate</a></p>
                  <p><a href="#software" className="hover:text-white transition-colors">Software/ITES</a></p>
                </div>
                <div className="space-y-3">
                  <p><a href="#ecommerce" className="hover:text-white transition-colors">e-Commerce</a></p>
                  <p><a href="#education" className="hover:text-white transition-colors">Education</a></p>
                  <p><a href="#retail" className="hover:text-white transition-colors">Retail</a></p>
                  <p><a href="#automotive" className="hover:text-white transition-colors">Automotive</a></p>
                  <p><a href="#startup" className="hover:text-white transition-colors">Startup</a></p>
                </div>
              </div>
            </div>

            {/* Column 3: Company */}
            <div className="lg:col-span-2">
              <h4 className="text-[#F59E0B] text-lg font-bold mb-4">
                Company
              </h4>
              <ul className="space-y-3 text-sm sm:text-base text-slate-200">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#career" className="hover:text-white transition-colors">Career</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Column 4: Resources */}
            <div className="lg:col-span-2">
              <h4 className="text-[#F59E0B] text-lg font-bold mb-4">
                Resources
              </h4>
              <ul className="space-y-3 text-sm sm:text-base text-slate-200">
                <li><a href="#awards" className="hover:text-white transition-colors">Certifications & Awards</a></li>
                <li><a href="#partners" className="hover:text-white transition-colors">Partners</a></li>
                <li><a href="#security" className="hover:text-white transition-colors">Enterprise-Grade Security</a></li>
                <li><a href="#sustainability" className="hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#events" className="hover:text-white transition-colors">Events</a></li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* COMPLIANCE & PARTNERSHIPS ROW */}
      <div className="py-10 bg-[#0B1528] border-t border-slate-800/80">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            {/* Compliance */}
            <div>
              <span className="text-slate-200 text-sm font-semibold block mb-4">Compliance:</span>
              <div className="flex items-center space-x-6 sm:space-x-8">
                {/* GDPR */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center mb-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-xs sm:text-sm text-slate-300 font-medium flex items-center gap-1">
                    <span className="text-[#00a2ad]">•</span> GDPR
                  </span>
                </div>

                {/* ISO 27001 */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center mb-1 text-xs font-bold text-center leading-tight">
                    ISO
                  </div>
                  <span className="text-xs sm:text-sm text-slate-300 font-medium flex items-center gap-1">
                    <span className="text-[#00a2ad]">•</span> ISO
                  </span>
                </div>

                {/* ISO 9001 */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center mb-1 text-xs font-bold text-center leading-tight">
                    ISO
                  </div>
                  <span className="text-xs sm:text-sm text-slate-300 font-medium flex items-center gap-1">
                    <span className="text-[#00a2ad]">•</span> ISO
                  </span>
                </div>

                {/* CMMI */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center mb-1 text-xs font-bold text-center leading-tight">
                    CMMI
                  </div>
                  <span className="text-xs sm:text-sm text-slate-300 font-medium flex items-center gap-1">
                    <span className="text-[#00a2ad]">•</span> CMMI
                  </span>
                </div>
              </div>
            </div>

            {/* Partnerships */}
            <div>
              <span className="text-slate-200 text-sm font-semibold block mb-4">Partnerships:</span>
              <div className="flex items-center space-x-6 sm:space-x-8 text-white font-bold text-base sm:text-lg">
                <span className="flex items-center gap-1.5"><span className="text-[#00a2ad]">■</span> Microsoft</span>
                <span className="font-extrabold tracking-tight">aws</span>
                <span className="font-semibold italic">moodle</span>
                <span className="text-xs sm:text-sm font-medium border border-slate-600 px-2.5 py-1 rounded">Google Cloud Partner</span>
                <span className="font-bold text-[#00a2ad]">salesforce</span>
                <span className="text-xs sm:text-sm text-slate-300">Certified Partner</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* RECOGNIZED BY ROW */}
      <div className="py-10 bg-[#0B1528] border-t border-slate-800/80">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-slate-200 text-sm font-semibold block mb-4">Recognized by:</span>
          <div className="flex flex-wrap items-center justify-between gap-6 text-white">
            {/* Clutch */}
            <div className="flex items-center space-x-2">
              <span className="text-xs sm:text-sm text-slate-400 uppercase font-semibold">REVIEWED ON</span>
              <span className="text-xl font-black tracking-tight">Clutch</span>
              <span className="text-amber-400 text-sm">★★★★★</span>
              <span className="text-xs sm:text-sm text-slate-400 font-semibold">21 REVIEWS</span>
            </div>

            {/* BASIS */}
            <div className="text-base font-black tracking-wider text-slate-300">
              BASIS
            </div>

            {/* FORTUNE 100 */}
            <div className="text-base font-bold tracking-tight text-slate-300">
              FORTUNE <span className="font-black text-white">100</span>
            </div>

            {/* Inc 5000 */}
            <div className="text-base font-bold text-slate-300">
              Inc. <span className="font-black text-white">5000</span>
            </div>

            {/* EY Entrepreneur */}
            <div className="text-xs sm:text-sm font-semibold text-slate-300">
              EY Entrepreneur Of The Year
            </div>

            {/* CMMI */}
            <div className="text-xs sm:text-sm font-bold text-slate-400">
              CMMI
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT BAR */}
      <div className="bg-[#0B1528] py-6 border-t border-slate-800/80 text-sm text-slate-300">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div>
            © {new Date().getFullYear()} Autofya. All rights reserved.
          </div>
          <div>
            <a href="#privacy" className="text-white hover:underline font-medium">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
}
