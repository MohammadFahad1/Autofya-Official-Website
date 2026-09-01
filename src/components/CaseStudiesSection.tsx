"use client";

import React, { useState } from "react";
import Image from "next/image";

interface CaseStudy {
  id: string;
  tabLabel: string;
  logoBg: string;
  category: string;
  title: string;
  description: string;
  image: string;
  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
  renderLogo: () => React.ReactNode;
}

export default function CaseStudiesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const caseStudies: CaseStudy[] = [
    {
      id: "iiitk",
      tabLabel: "IIITK",
      logoBg: "bg-emerald-50",
      category: "AI & ML, LMS",
      title: "Streamlining Attendance at IIITK with Facial Recognition",
      description:
        "The Indian Institute of Information Technology, Kottayam (IIITK) is an autonomous engineering institute located in Valavoor, Palai, Kottayam District, Kerala, India.",
      image: "/hero_ai_engineer.jpg",
      stat1Value: "80%",
      stat1Label: "Processing Time Reduced",
      stat2Value: "99.5%",
      stat2Label: "Facial Recognition Accuracy Rate",
      renderLogo: () => (
        <div className="flex items-center space-x-1.5 text-[#0D9488]">
          <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <div className="flex flex-col text-left">
            <span className="text-[10px] font-black leading-tight text-slate-800">IIITK</span>
            <span className="text-[7px] text-slate-500 font-medium leading-none">Kottayam</span>
          </div>
        </div>
      ),
    },
    {
      id: "citybank",
      tabLabel: "City Bank",
      logoBg: "bg-red-50",
      category: "FINTECH, CLOUD",
      title: "Next-Gen Digital Banking Platform for City Bank",
      description:
        "Transforming legacy core banking infrastructure into a high-speed cloud-native microservices ecosystem serving over 10 million daily active transactions.",
      image: "/capabilities_digital_trans.jpg",
      stat1Value: "10M+",
      stat1Label: "Daily Transactions Processed",
      stat2Value: "99.99%",
      stat2Label: "Core Banking System Uptime",
      renderLogo: () => (
        <div className="flex items-center space-x-1 text-[#E11D48]">
          <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13.5h-13L12 6.5z" />
          </svg>
          <span className="text-xs font-black tracking-tighter text-[#E11D48]">city bank</span>
        </div>
      ),
    },
    {
      id: "biotech",
      tabLabel: "European Biotechnology",
      logoBg: "bg-amber-50",
      category: "HEALTHTECH, AI",
      title: "AI-Powered Genomic Data Analysis & Pipeline",
      description:
        "Accelerating life science research and drug discovery workflows through automated deep learning models and scalable cloud computing pipelines.",
      image: "/ai_development_collaboration.jpg",
      stat1Value: "5x",
      stat1Label: "Faster Pipeline Execution",
      stat2Value: "60%",
      stat2Label: "Reduction in Compute Overhead",
      renderLogo: () => (
        <div className="flex items-center space-x-1.5 text-slate-800">
          <svg className="w-5 h-5 text-[#D97706] shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.93V18h-2v-1.07A7.002 7.002 0 015.07 13H4v-2h1.07A7.002 7.002 0 0111 5.07V4h2v1.07A7.002 7.002 0 0118.93 11H20v2h-1.07A7.002 7.002 0 0113 16.93z" />
          </svg>
          <div className="flex flex-col text-left leading-tight">
            <span className="text-[9px] font-bold text-slate-800">European</span>
            <span className="text-[8px] text-slate-600">Biotechnology</span>
          </div>
        </div>
      ),
    },
    {
      id: "retail",
      tabLabel: "Retail ERP",
      logoBg: "bg-slate-100",
      category: "ERP, COMMERCE",
      title: "Automating Global Supply Chain with Odoo ERP",
      description:
        "Empowering multi-region enterprise retail networks with automated inventory forecasting, real-time telemetry, and seamless warehouse operations.",
      image: "/capabilities_mvp_dev.jpg",
      stat1Value: "45%",
      stat1Label: "Fulfillment Speed Increase",
      stat2Value: "100%",
      stat2Label: "Real-Time Stock Accuracy",
      renderLogo: () => (
        <div className="flex items-center space-x-1">
          <div className="w-5 h-5 bg-slate-900 rounded text-white font-bold text-[10px] flex items-center justify-center">
            23
          </div>
          <span className="text-[11px] font-black text-slate-900 tracking-tighter">RETAIL</span>
        </div>
      ),
    },
  ];

  const current = caseStudies[activeTab];

  return (
    <section className="py-20 sm:py-24 bg-white text-[#0B1340] font-sans border-t border-slate-100">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#0B1340] tracking-[-0.03em] leading-tight mb-3">
              Case Studies
            </h2>
            <p className="text-slate-600 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              Check out our case studies that show how innovative solutions transformed businesses.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <a
              href="#case-studies"
              className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold text-sm sm:text-base shadow-sm transition-all duration-200"
            >
              See all Case Studies
            </a>
          </div>
        </div>

        {/* Tab Buttons Row */}
        <div className="flex items-center space-x-4 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {caseStudies.map((study, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={study.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center justify-center w-36 h-20 px-4 rounded-xl transition-all duration-200 shrink-0 ${
                  isActive
                    ? "bg-white border-t border-x border-slate-200/80 border-b-[3px] border-b-[#0284C7]"
                    : "bg-[#F1F5F9]/70 border border-slate-200/60 hover:bg-white hover:border-slate-300"
                }`}
              >
                {study.renderLogo()}
              </button>
            );
          })}
        </div>

        {/* Case Study Content Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Featured Image */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-md border border-slate-100 aspect-[4/3] w-full bg-slate-900">
            <Image
              src={current.image}
              alt={current.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right: Case Study Info */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Category Tag */}
            <span className="text-[#0284C7] font-semibold text-sm sm:text-base tracking-wide uppercase mb-2">
              {current.category}
            </span>

            {/* Case Study Title */}
            <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0B1340] tracking-[-0.02em] leading-[1.25] mb-4">
              {current.title}
            </h3>

            {/* Description */}
            <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed mb-6">
              {current.description}
            </p>

            {/* View Case Study Link */}
            <div className="mb-8">
              <a
                href={`#case-study-${current.id}`}
                className="inline-flex items-center text-[#F59E0B] hover:text-[#D97706] font-bold text-base sm:text-lg transition-colors group"
              >
                <span>View Case Study</span>
                <span className="ml-1.5 transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Divider Line */}
            <div className="border-t border-slate-200/70 pt-6">
              <div className="grid grid-cols-2 gap-6 sm:gap-10">
                
                {/* Stat 1 */}
                <div>
                  <div className="text-4xl sm:text-5xl font-light text-[#0284C7] tracking-tight">
                    {current.stat1Value}
                  </div>
                  <div className="text-slate-500 text-sm sm:text-base font-normal mt-1">
                    {current.stat1Label}
                  </div>
                </div>

                {/* Stat 2 */}
                <div>
                  <div className="text-4xl sm:text-5xl font-light text-[#0284C7] tracking-tight">
                    {current.stat2Value}
                  </div>
                  <div className="text-slate-500 text-sm sm:text-base font-normal mt-1">
                    {current.stat2Label}
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
