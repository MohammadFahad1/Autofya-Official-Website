import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadershipValues from "@/components/LeadershipValues";

export const metadata: Metadata = {
  title: "About Us | Autofya",
  description:
    "Autofya is a leading software development company committed to delivering cutting-edge digital solutions that drive business growth and transformation since 2006.",
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
              About Autofya
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
                  Autofya is a leading software development company committed to delivering cutting-edge digital solutions that drive business growth and transformation.
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
                    alt="Autofya team collaborating on software development"
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
        {/* LEADERSHIP VALUES (OWNPATH) SECTION                                       */}
        {/* ========================================================================= */}
        <LeadershipValues />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
