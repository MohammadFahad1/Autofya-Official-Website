import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TrustedBy from "@/components/TrustedBy";
import CompanyOverview from "@/components/CompanyOverview";

export const metadata: Metadata = {
  title: "About Us | Brain Station 23",
  description:
    "BrainStation-23 is a leading software development company committed to delivering cutting-edge digital solutions that drive business growth and transformation since 2006.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B1340] selection:bg-[#00a2ad] selection:text-white">
      {/* Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* HERO BANNER SECTION (MATCHING SCREENSHOT)                                 */}
        {/* ========================================================================= */}
        <section className="relative bg-[#0B1340] py-16 sm:py-20 lg:py-24 overflow-hidden text-center text-white">
          {/* Concentric Circle Background SVG Ripples */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <svg
              width="900"
              height="900"
              viewBox="0 0 900 900"
              fill="none"
              className="w-[650px] h-[650px] sm:w-[850px] sm:h-[850px] text-[#00a2ad]"
            >
              <circle cx="450" cy="450" r="60" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="450" cy="450" r="110" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="450" cy="450" r="160" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="450" cy="450" r="210" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="450" cy="450" r="260" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="450" cy="450" r="310" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="450" cy="450" r="360" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="450" cy="450" r="410" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="450" cy="450" r="460" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-[#00a2ad] text-sm sm:text-base font-semibold tracking-wide block mb-3">
              About Us
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              About Brain Station 23
            </h1>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FIRST CONTENT SECTION (MATCHING SCREENSHOT)                               */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* LEFT COLUMN: Main Heading, Description, Mission & Vision */}
              <div className="lg:col-span-6 flex flex-col justify-center">
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0B1340] leading-[1.2] tracking-tight mb-6">
                  Innovating Digital Solutions Since 2006
                </h2>

                <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-10 font-normal">
                  BrainStation-23 is a leading software development company committed to delivering cutting-edge digital solutions that drive business growth and transformation.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-2">
                  {/* Our Mission */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0B1340] mb-3">
                      Our Mission
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      Your trusted companion for digital leadership by empowering people to achieve more with less
                    </p>
                  </div>

                  {/* Our Vision */}
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0B1340] mb-3">
                      Our Vision
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      To be the fastest digital transformation and innovation partner by engaging global talents thus creating positive impact.
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN: Team Image with Rounded Corners */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] sm:aspect-[1.2/1] border-4 border-white bg-slate-100">
                  <Image
                    src="/about_team_collaboration.jpg"
                    alt="BrainStation-23 team collaborating on software development"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* STATS & IMPACT COUNTER SECTION                                            */}
        {/* ========================================================================= */}
        <section className="py-16 bg-[#F8FAFC] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200/60">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00a2ad] mb-2">
                  700+
                </div>
                <div className="text-sm sm:text-base font-semibold text-slate-700">
                  Software Engineers & AI Talent
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200/60">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00a2ad] mb-2">
                  2500+
                </div>
                <div className="text-sm sm:text-base font-semibold text-slate-700">
                  Successful Projects Delivered
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200/60">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00a2ad] mb-2">
                  30+
                </div>
                <div className="text-sm sm:text-base font-semibold text-slate-700">
                  Countries Served Globally
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white shadow-sm border border-slate-200/60">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00a2ad] mb-2">
                  98%
                </div>
                <div className="text-sm sm:text-base font-semibold text-slate-700">
                  Client Retention & Satisfaction
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CORE VALUES SECTION                                                       */}
        {/* ========================================================================= */}
        <section className="py-20 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-[#00a2ad] text-sm font-bold uppercase tracking-wider block mb-2">
                What Drives Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
                Our Core Values
              </h2>
              <p className="text-slate-600 mt-4 text-base sm:text-lg">
                The principles that guide our work, our culture, and our long-term client partnerships.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/80 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#00a2ad]/10 flex items-center justify-center text-[#00a2ad] text-xl font-bold mb-6">
                  💡
                </div>
                <h3 className="text-xl font-bold text-[#0B1340] mb-3">
                  Innovation & Excellence
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  We continuously embrace next-gen AI, modern cloud architectures, and best-in-class engineering practices to deliver transformative software.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/80 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#00a2ad]/10 flex items-center justify-center text-[#00a2ad] text-xl font-bold mb-6">
                  🤝
                </div>
                <h3 className="text-xl font-bold text-[#0B1340] mb-3">
                  Integrity & Ownership
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  We act as a true strategic companion to our clients, prioritizing complete transparency, data security, and long-term business outcome commitment.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200/80 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-2xl bg-[#00a2ad]/10 flex items-center justify-center text-[#00a2ad] text-xl font-bold mb-6">
                  🌍
                </div>
                <h3 className="text-xl font-bold text-[#0B1340] mb-3">
                  Empowering People
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  By engaging world-class global talents and cultivating continuous learning, we empower teams to build solutions that create positive economic impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Overview & Accreditations */}
        <CompanyOverview />

        {/* Trusted By Brands Banner */}
        <TrustedBy />

        {/* ========================================================================= */}
        {/* CALL TO ACTION SECTION                                                    */}
        {/* ========================================================================= */}
        <section className="py-20 bg-[#0B1340] text-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 tracking-tight">
              Ready to Accelerate Your Digital Growth?
            </h2>
            <p className="text-slate-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Partner with BrainStation-23 for AI-driven software development, staff augmentation, and enterprise digital leadership.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/schedule"
                className="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold text-white bg-[#FF9000] hover:bg-[#E68200] active:scale-95 shadow-lg transition-all duration-200 text-center"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
