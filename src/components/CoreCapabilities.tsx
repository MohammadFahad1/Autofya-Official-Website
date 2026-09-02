import React from "react";
import Image from "next/image";

export default function CoreCapabilities() {
  return (
    <section className="py-20 bg-white border-b border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0B1340] tracking-tight leading-[1.15]">
              Drive Growth with Our <br />
              <span className="text-[#0B1340]">Core Capabilities</span>
            </h2>
          </div>
          <div>
            <a
              href="#services"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#00a2ad] hover:text-[#0B1340] transition-colors group"
            >
              Explore All Services
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Alternating 3x3 Bento Grid Layout (Exact Brain Station 23 Design) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          
          {/* ROW 1 */}

          {/* 1. Text Card: Staff Augmentation */}
          <div className="flex flex-col justify-center p-4 sm:p-6 bg-transparent group">
            <div className="w-12 h-12 rounded-2xl bg-[#00a2ad]/10 text-[#00a2ad] flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#0B1340] mb-3 group-hover:text-[#00a2ad] transition-colors">
              Staff Augmentation
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Instantly scale your team with vetted AI/cloud experts. Pay only for the talent you need, when you need it.
            </p>
          </div>

          {/* 2. Image Card: Staff Augmentation Photo */}
          <div className="relative rounded-3xl overflow-hidden shadow-md group min-h-[260px]">
            <Image
              src="/capabilities_staff_aug.jpg"
              alt="Staff Augmentation Engineer"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* 3. Text Card: Managed Services */}
          <div className="flex flex-col justify-center p-4 sm:p-6 bg-transparent group">
            <div className="w-12 h-12 rounded-2xl bg-[#00a2ad]/10 text-[#00a2ad] flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#0B1340] mb-3 group-hover:text-[#00a2ad] transition-colors">
              Managed Services
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              End-to-end support for your applications, infrastructure, and digital platforms—so you can shift focus from maintenance to innovation.
            </p>
          </div>

          {/* ROW 2 */}

          {/* 4. Image Card: MVP Dev Photo */}
          <div className="relative rounded-3xl overflow-hidden shadow-md group min-h-[260px]">
            <Image
              src="/capabilities_mvp_dev.jpg"
              alt="MVP Development Team"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* 5. Text Card: MVP Development */}
          <div className="flex flex-col justify-center p-4 sm:p-6 bg-transparent group">
            <div className="w-12 h-12 rounded-2xl bg-[#00a2ad]/10 text-[#00a2ad] flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#0B1340] mb-3 group-hover:text-[#00a2ad] transition-colors">
              MVP Development
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Launch market-ready MVPs in 8-12 weeks. AI-accelerated builds with 40% faster iteration cycles.
            </p>
          </div>

          {/* 6. Image Card: Managed Services Photo */}
          <div className="relative rounded-3xl overflow-hidden shadow-md group min-h-[260px]">
            <Image
              src="/capabilities_managed_services.jpg"
              alt="Managed Services Specialist"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* ROW 3 */}

          {/* 7. Text Card: Technology Consulting */}
          <div className="flex flex-col justify-center p-4 sm:p-6 bg-transparent group">
            <div className="w-12 h-12 rounded-2xl bg-[#00a2ad]/10 text-[#00a2ad] flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#0B1340] mb-3 group-hover:text-[#00a2ad] transition-colors">
              Technology Consulting
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Cut tech waste by 30% with our strategic audits. Align tools with business goals for maximum ROI.
            </p>
          </div>

          {/* 8. Image Card: Digital Transformation Photo */}
          <div className="relative rounded-3xl overflow-hidden shadow-md group min-h-[260px]">
            <Image
              src="/capabilities_digital_trans.jpg"
              alt="Digital Transformation Consulting Team"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* 9. Text Card: Digital Transformation */}
          <div className="flex flex-col justify-center p-4 sm:p-6 bg-transparent group">
            <div className="w-12 h-12 rounded-2xl bg-[#00a2ad]/10 text-[#00a2ad] flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#0B1340] mb-3 group-hover:text-[#00a2ad] transition-colors">
              Digital Transformation
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Modernize legacy systems with AI-driven automation. Achieve 50% operational efficiency gains.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
