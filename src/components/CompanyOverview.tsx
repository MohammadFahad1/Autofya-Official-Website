import React from "react";
import Image from "next/image";

export default function CompanyOverview() {
  return (
    <section className="py-24 bg-white font-sans border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Headline matching Brain Station 23 screenshot */}
        <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0B1340] leading-[1.18] tracking-tight mb-16 max-w-5xl">
          Founded in 2006, we are a global software company powering digital transformation across industries.
        </h2>

        {/* 3-Column Asymmetric Media & Info Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Paragraph Copy & Video Thumbnail Card */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Autofya drives global digital transformation, integrating AI across the development lifecycle—delivering software 10X faster and smarter.
            </p>

            {/* Video Thumbnail Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-md group cursor-pointer aspect-[16/10] border-2 border-slate-100">
              <Image
                src="/company_video_thumb.jpg"
                alt="Autofya Office Sign Video"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#00a2ad] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* MIDDLE COLUMN: Large Team Group Photo Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] sm:aspect-[1/1] border-4 border-white">
              <Image
                src="/company_team_group.jpg"
                alt="Autofya Global Software Engineering Team"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Global Accreditations & About Us CTA */}
          <div className="lg:col-span-3 flex flex-col justify-between h-full pt-4 lg:pt-0">
            <div>
              {/* Accreditations Icon */}
              <div className="w-10 h-10 rounded-xl bg-[#00a2ad]/10 flex items-center justify-center text-[#00a2ad] mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-[#00a2ad] mb-4 pb-2 border-b border-slate-100">
                Global Accreditations
              </h3>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                Certified in CMMI Level 3, and 8+ partners with AWS, Microsoft, Odoo
              </p>
            </div>

            <div>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#FF9000] hover:bg-[#E68200] active:scale-95 shadow-md transition-all"
              >
                About Us
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
