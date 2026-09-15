"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function InsurtechPage() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const featuredSolutions = [
    {
      title: "Insurance 360 App",
      desc: "Comprehensive self-service policy management platform for policyholders to manage coverage, request endorsements, download certificates, and file claims.",
    },
    {
      title: "Automated Claims Solution",
      desc: "End-to-end claims automation with AI image damage assessment, instant FNOL processing, automated fraud scoring, and fast-track payout triggers.",
    },
    {
      title: "Agent Onboarding Platform",
      desc: "Digital onboarding pipeline for agents and brokers with automated e-KYC, identity verification, background checks, and regulatory licensing tracking.",
    },
    {
      title: "Underwriting Automation",
      desc: "Real-time risk scoring algorithms, AI actuarial decision engines, and dynamic pricing rules for instant policy issuance without manual review.",
    },
    {
      title: "AI Conversational Assistant",
      desc: "24/7 virtual AI agent providing instant premium quotes, policy inquiries, claims status tracking, and automated customer support across web & mobile.",
    },
    {
      title: "Actuarial Modeling & Analytics",
      desc: "Advanced predictive analytics for loss ratio optimization, catastrophe risk modeling, customer retention forecasting, and portfolio profitability analysis.",
    },
  ];

  const clientPartners = [
    { name: "Delta Life", label: "Insurance Partner" },
    { name: "Guardian Life", label: "Life Insurance" },
    { name: "MetLife", label: "Global Insurance" },
  ];

  const provenResults = [
    { value: "70%", label: "Faster Claims Processing", desc: "Automated FNOL triage and instant claim approvals." },
    { value: "5,000+", label: "Active Agents Onboarded", desc: "Streamlined digital broker network across regions." },
    { value: "<2s", label: "Instant Quote Generation", desc: "Real-time underwriting calculations over microservices APIs." },
    { value: "~95%", label: "Customer Satisfaction", desc: "Seamless omni-channel self-service policy portals." },
  ];

  const challengesAndApproach = {
    challenges: [
      "Slow manual claims processing leading to customer dissatisfaction and churn.",
      "Paper-based, fragmented agent onboarding workflows with slow verification.",
      "High fraud risk and inaccurate manual underwriting risk assessments.",
      "Legacy monolithic core systems unable to integrate with modern digital channels.",
      "High operational cost per policy written due to manual administrative overhead.",
    ],
    approach: [
      "Automated AI-driven claims triage, visual damage scoring, and fraud detection.",
      "100% digital agent onboarding with automated e-KYC & licensing validation.",
      "Real-time API integrations with core insurance databases (Guidewire, Duck Creek).",
      "Cloud-native microservices architecture designed for infinite carrier scaling.",
      "Omni-channel self-service portals empowering policyholders 24/7.",
    ],
  };

  const deliverableTabs = [
    {
      title: "AI Powered Claims Processing",
      desc: "Automated FNOL reporting, OCR document extraction, visual damage classification, AI fraud detection, and automated payout execution.",
      bullets: [
        "First Notice of Loss (FNOL) Auto-Ingestion",
        "AI Image Damage Assessment & Repair Estimation",
        "Real-Time Fraud Risk Scoring Engine",
        "Straight-Through Processing (STP) Payouts",
      ],
    },
    {
      title: "Digital Policy Distribution",
      desc: "Multi-channel quote engine enabling seamless policy sales across direct-to-consumer web portals, mobile apps, and partner API aggregators.",
      bullets: [
        "Instant Dynamic Premium Quote Calculation",
        "Partner API Aggregator Integration",
        "Automated Electronic Policy Issuance (e-Policy)",
        "Flexible Payment Gateway Integrations",
      ],
    },
    {
      title: "Agent & Broker Portals",
      desc: "Digital portal giving brokers full visibility into lead tracking, quote creation, policy renewals, commission statements, and compliance status.",
      bullets: [
        "Self-Service Broker Dashboard & Lead Management",
        "Automated Commission Calculation & Payouts",
        "Digital Policy Renewal Reminders",
        "Agent Training & Compliance Tracking",
      ],
    },
    {
      title: "Core System Integration",
      desc: "Modernizing legacy insurance mainframes into cloud-native microservices with robust REST/GraphQL APIs for Guidewire, Duck Creek, and SAP.",
      bullets: [
        "Legacy Mainframe Modernization & API Wrappers",
        "Guidewire & Duck Creek Integration Connectors",
        "SOC2 & GDPR Compliant Data Encryption",
        "High-Availability Cloud Infrastructure Setup",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B1340] selection:bg-[#00a2ad] selection:text-white font-sans">
      {/* Global Header */}
      <Navbar />

      <main className="flex-1">
        {/* ========================================================= */}
        {/* 1. HERO SECTION (RADIAL DARK INSURTECH THEME)             */}
        {/* ========================================================= */}
        <section className="relative bg-[#060D20] text-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
          {/* Background Ambient Overlay */}
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="/capabilities_digital_trans.jpg"
              alt="Insurtech Solutions Background"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#060D20] via-[#060D20]/95 to-[#0B1A3A]/90 z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Content Box Overlay */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00a2ad] animate-pulse" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 uppercase tracking-wider">
                    Insurance Technology Solutions
                  </span>
                </div>

                <div className="bg-white/95 text-[#0B1340] p-8 sm:p-10 rounded-2xl shadow-2xl border border-slate-200 space-y-6">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1340] leading-tight">
                    AI-Driven Insurance Technology Solutions – <span className="text-[#00a2ad]">Modular, Proven, Enterprise Ready</span>
                  </h1>

                  <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
                    Empower your insurance ecosystem with digital underwriting, automated claims processing, AI policy administration, and omni-channel customer engagement. By Autofya.
                  </p>

                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                    <Link
                      href="/schedule"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FF9000] hover:bg-[#E68200] text-white font-bold text-base shadow-lg shadow-amber-900/30 transition-all hover:scale-[1.02] cursor-pointer"
                    >
                      <span>Talk to us</span>
                      <span className="text-xl">→</span>
                    </Link>
                    <a
                      href="#featured-solutions"
                      className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0B1340] font-bold text-base transition-all cursor-pointer"
                    >
                      <span>Explore Solutions</span>
                      <span>↓</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Hero Visual: Insurance App Dashboard Mockup */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-md lg:max-w-none">
                  <div className="relative rounded-2xl bg-slate-950 border border-white/20 p-5 shadow-2xl overflow-hidden font-mono">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-slate-400">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                        <span className="ml-2 text-slate-300">Autofya-Insurtech-Core.ts</span>
                      </div>
                      <span className="text-[10px] text-cyan-400 font-bold bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/30">
                        AUTOMATED UNDERWRITING
                      </span>
                    </div>

                    <div className="py-4 space-y-2 text-xs text-slate-300">
                      <p className="text-slate-400"># Policy 360 &amp; Claims Telemetry Engine</p>
                      <p className="text-cyan-300">await <span className="text-slate-100">autofyaClaims.processFNOL(claim_id);</span></p>
                      <p className="text-[#00a2ad]">✔ AI Fraud Risk Assessment: <span className="text-emerald-400 font-bold">LOW (0.02%)</span></p>
                      <p className="text-[#00a2ad]">✔ Damage Image Analysis: <span className="text-slate-100">CLASSIFIED</span></p>
                      <p className="text-emerald-400">✔ Straight-Through Payout Triggered: <span className="text-slate-100 font-bold">$2,450.00</span></p>
                    </div>

                    <div className="mt-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs flex items-center justify-between font-sans">
                      <span>🛡️ Digital Insurance Portal</span>
                      <span className="font-bold text-[#00a2ad]">STP Ready</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. FEATURED SOLUTIONS GRID                                */}
        {/* ========================================================= */}
        <section id="featured-solutions" className="py-24 bg-slate-50 border-b border-slate-200 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                Modular Insurance Platforms
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1340]">
                Featured Solutions
              </h2>
              <div className="w-20 h-1 bg-[#00a2ad] rounded-full mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredSolutions.map((sol, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-[#00a2ad] hover:shadow-xl transition-all duration-300 space-y-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-[#00a2ad] flex items-center justify-center font-black text-base group-hover:bg-[#00a2ad] group-hover:text-white transition-colors">
                    0{idx + 1}
                  </div>

                  <h3 className="text-xl font-bold text-[#0B1340] group-hover:text-[#00a2ad] transition-colors">
                    {sol.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {sol.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Client Partner Badges */}
            <div className="pt-8 border-t border-slate-200 flex flex-wrap items-center justify-center gap-10 opacity-80">
              {clientPartners.map((cp, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <span className="text-2xl font-black text-[#0B1340]">{cp.name}</span>
                  <span className="text-xs text-slate-400 font-semibold uppercase">{cp.label}</span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. PROVEN RESULTS (IMPACT METRICS GRID)                   */}
        {/* ========================================================= */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                Quantifiable Impact
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
                Proven Results
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {provenResults.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-center space-y-2 hover:border-[#00a2ad] transition-colors"
                >
                  <p className="text-4xl sm:text-5xl font-black text-[#0B1340]">{stat.value}</p>
                  <p className="text-base font-bold text-[#00a2ad]">{stat.label}</p>
                  <p className="text-xs text-slate-500 leading-relaxed">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. WHAT WE SOLVE (CHALLENGE VS OUR APPROACH)              */}
        {/* ========================================================= */}
        <section className="py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                Transformation Roadmap
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1340]">
                What We Solve
              </h2>
              <div className="w-20 h-1 bg-[#00a2ad] rounded-full mx-auto" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Left Column: The Challenge */}
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-red-500">
                    Industry Bottlenecks
                  </span>
                  <h3 className="text-2xl font-bold text-[#0B1340]">The Challenge</h3>
                </div>

                <div className="space-y-4">
                  {challengesAndApproach.challenges.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        ✕
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Our Approach */}
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                <div className="space-y-2">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#00a2ad]">
                    Autofya Innovation
                  </span>
                  <h3 className="text-2xl font-bold text-[#0B1340]">Our Approach</h3>
                </div>

                <div className="space-y-4">
                  {challengesAndApproach.approach.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. WHAT WE DELIVER (TABBED / CAPABILITY SPECTRUM)         */}
        {/* ========================================================= */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                Full Capability Spectrum
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1340]">
                What We Deliver
              </h2>
              <div className="w-20 h-1 bg-[#00a2ad] rounded-full mx-auto" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Tab Selector Left */}
              <div className="lg:col-span-5 space-y-2">
                {deliverableTabs.map((tab, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`w-full text-left p-5 rounded-2xl font-bold text-base transition-all cursor-pointer flex items-center justify-between ${
                      activeTab === idx
                        ? "bg-[#0B1340] text-white shadow-lg"
                        : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <span>{tab.title}</span>
                    <span className="text-lg">{activeTab === idx ? "→" : "›"}</span>
                  </button>
                ))}
              </div>

              {/* Active Tab Content Right */}
              <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200 space-y-6">
                <h3 className="text-2xl font-bold text-[#0B1340]">
                  {deliverableTabs[activeTab].title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {deliverableTabs[activeTab].desc}
                </p>

                <div className="space-y-3 pt-2 border-t border-slate-200">
                  {deliverableTabs[activeTab].bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-3 text-sm font-semibold text-[#0B1340]">
                      <span className="w-6 h-6 rounded-full bg-cyan-100 text-[#00a2ad] flex items-center justify-center text-xs font-bold">
                        ✓
                      </span>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. INSURANCE TECHNOLOGY SOLUTIONS SHOWCASE                 */}
        {/* ========================================================= */}
        <section className="py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
              
              {/* Image Left */}
              <div className="lg:col-span-6 relative h-80 sm:h-96 w-full">
                <Image
                  src="/cs_safety_at_sea.jpg"
                  alt="End-to-End Digital Insurance Ecosystem"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-transparent" />
              </div>

              {/* Text Content Right */}
              <div className="lg:col-span-6 p-8 sm:p-12 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00a2ad] bg-cyan-100 px-3 py-1 rounded-full">
                  Insurance Ecosystem
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1340] leading-tight">
                  End-to-End Digital Insurance Ecosystem
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Unify your policy administration, claims processing, and broker network under one cloud-native platform engineered by Autofya.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-2 border-t border-slate-200">
                  <div>
                    <p className="text-3xl font-black text-[#0B1340]">70%</p>
                    <p className="text-xs text-slate-500 font-medium">Faster Claims Settlement</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-[#00a2ad]">30%</p>
                    <p className="text-xs text-slate-500 font-medium">Reduction in Admin Costs</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 7. CALLOUT BANNER CARD                                   */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#0B1340] via-[#122268] to-[#0B1340] rounded-3xl border border-white/15 p-8 lg:p-14 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Callout Text Left */}
              <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
                <span className="text-xs uppercase tracking-widest font-extrabold text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/30">
                  Digital Insurance Modernization
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  Ready to Modernize Your Insurance Infrastructure?
                </h2>
                <p className="text-slate-300 text-base sm:text-lg max-w-2xl">
                  Connect with Autofya&apos;s Insurtech solution architects to automate claims processing, launch digital broker portals, or integrate AI underwriting decision engines.
                </p>

                <div className="pt-2">
                  <Link
                    href="/schedule"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FF9000] hover:bg-[#E68200] text-white font-bold text-base shadow-xl transition-all cursor-pointer hover:scale-105"
                  >
                    <span>Schedule an Insurtech Call</span>
                    <span className="text-xl">→</span>
                  </Link>
                </div>
              </div>

              {/* Team Graphic Right */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-full max-w-sm h-64 rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                  <Image
                    src="/company_team_group.jpg"
                    alt="Autofya Insurtech Squad"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-bold text-white">Autofya Insurtech Squad</p>
                    <p className="text-xs text-slate-300">Underwriting &amp; Claims Automation Engineers</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
