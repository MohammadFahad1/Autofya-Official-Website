"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AdobeExperienceManagerPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const offeredServices = [
    {
      title: "AEM Development & Implementation",
      desc: "End-to-end AEM Sites setup, custom architecture, Core Components integration, and scalable Java/OSGi backend service engineering.",
    },
    {
      title: "AEM Component & Template Design",
      desc: "Pixel-perfect HTL/Sightly components, editable templates, responsive Grid layouts, and modular design systems for content authors.",
    },
    {
      title: "AEM Migration & Cloud Upgrades",
      desc: "Seamless upgrades to AEM as a Cloud Service (AEMaCS) or legacy on-premise migrations with zero data loss and automated URL redirects.",
    },
    {
      title: "AEM Assets (DAM) Setup & Optimization",
      desc: "Enterprise Digital Asset Management configuration, automated metadata tagging, smart crop, dynamic media workflows, and brand portals.",
    },
    {
      title: "AEM Managed Services & Maintenance",
      desc: "24/7 SLA-backed application monitoring, security hotfix updates, dispatcher optimization, and performance tuning.",
    },
    {
      title: "Multi-Site & Multi-Language Management",
      desc: "Global Multi-Site Manager (MSM) architecture, localized language copy workflows, and centralized brand governance.",
    },
    {
      title: "Cloud Manager & DevOps Integration",
      desc: "Automated CI/CD deployment pipelines, Adobe Cloud Manager integration, unit test automation, and code quality gates.",
    },
    {
      title: "Personalization & Adobe Target Integration",
      desc: "Connecting AEM Experience Fragments with Adobe Target and Adobe Analytics for dynamic audience segmentation and A/B testing.",
    },
  ];

  const industriesList = [
    { name: "HEALTHCARE", desc: "HIPAA-compliant patient portals, doctor locators, and pharmaceutical content distribution." },
    { name: "FINANCIAL SERVICES", desc: "Secure digital banking portals, mortgage calculators, and compliant regulatory publishing." },
    { name: "TELECOMMUNICATIONS", desc: "High-volume customer self-service portals, plan selectors, and omnichannel commerce." },
    { name: "MEDIA AND ENTERTAINMENT", desc: "Rich media streaming hubs, digital asset delivery, and high-concurrency content portals." },
    { name: "E-COMMERCE & RETAIL", desc: "Shoppable Experience Fragments, catalog sync with Adobe Commerce (Magento), and dynamic product assets." },
    { name: "EDUCATION", desc: "Multi-campus university websites, student enrollment portals, and faculty directory management." },
    { name: "HIGH TECH", desc: "Developer documentation portals, global SaaS product websites, and localized product launches." },
    { name: "MANUFACTURING", desc: "B2B distributor portals, complex product spec catalogs, and multi-language technical documentation." },
    { name: "GOVERNMENT & PUBLIC SECTOR", desc: "Accessible (WCAG 2.1 AAA) public agency portals, citizen service forms, and secure document vaults." },
    { name: "TRAVEL AND HOSPITALITY", desc: "Immersive hotel booking portals, destination guides, dynamic pricing displays, and loyalty portals." },
  ];

  const clientLogos = [
    { name: "BT", label: "British Telecom" },
    { name: "MGM", label: "MGM Resorts" },
    { name: "Unilever", label: "Unilever Global" },
    { name: "HSBC", label: "HSBC Bank" },
    { name: "Domino's", label: "Domino's Pizza" },
    { name: "Standard Chartered", label: "Standard Chartered" },
  ];

  const faqs = [
    {
      question: "Why choose Adobe Experience Manager (AEM) for enterprise digital experience?",
      answer:
        "Adobe Experience Manager (AEM) is the industry-leading Content Management System (CMS) recognized by Gartner and Forrester. It combines web content management (Sites) with enterprise Digital Asset Management (Assets), enabling global brands to deliver personalized, omni-channel digital experiences at massive scale.",
    },
    {
      question: "What AEM development services does Autofya provide?",
      answer:
        "Autofya delivers full-lifecycle AEM services including custom HTL component design, OSGi Java backend development, AEM as a Cloud Service (AEMaCS) migrations, Multi-Site Manager (MSM) setups, Adobe Target/Analytics integration, and 24/7 SLA managed support.",
    },
    {
      question: "Can Autofya assist with migrating our existing CMS or older AEM to AEM Cloud Service?",
      answer:
        "Yes! We specialize in zero-downtime migrations from legacy CMS platforms (Sitecore, Drupal, WordPress, SharePoint) or on-premise AEM 6.x to AEM as a Cloud Service. We handle asset migration, content mapping, custom code refactoring, and dispatcher configuration.",
    },
    {
      question: "How does Autofya ensure code quality and deployment efficiency for AEM?",
      answer:
        "We utilize Adobe Cloud Manager CI/CD pipelines with automated unit testing, SonarQube static code analysis, and strict dispatcher caching rules to ensure optimal page performance, sub-second load times, and bank-grade security.",
    },
    {
      question: "What maintenance and SLA support packages do you offer for AEM?",
      answer:
        "We provide dedicated 24/7 SLA-backed managed services, proactive dispatcher monitoring, routine security hotfix deployments, content author support, and continuous performance optimization.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B1340] selection:bg-[#00a2ad] selection:text-white font-sans">
      {/* Navbar Header */}
      <Navbar />

      <main className="flex-1">
        {/* ========================================================= */}
        {/* 1. HERO SECTION (POLYGONAL BLUE GRADIENT MATCHING IMAGE)    */}
        {/* ========================================================= */}
        <section className="relative bg-gradient-to-r from-[#0F4C81] via-[#1E50A2] to-[#0A2540] text-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
          {/* Subtle Geometric Overlays */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-[#00a2ad]/10 clip-path-polygon opacity-40 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Devices Mockup */}
              <div className="lg:col-span-6 relative flex justify-center order-2 lg:order-1">
                <div className="relative w-full max-w-lg">
                  {/* Outer Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-3xl blur-2xl opacity-30" />

                  {/* Device Container */}
                  <div className="relative rounded-2xl bg-slate-900/90 border border-white/20 p-4 shadow-2xl overflow-hidden">
                    <div className="relative h-[320px] sm:h-[380px] rounded-xl overflow-hidden shadow-inner">
                      <Image
                        src="/capabilities_digital_trans.jpg"
                        alt="Autofya AEM Dashboard & Multi-Device Screen Preview"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-transparent to-transparent" />
                      
                      {/* Floating Overlay Badge */}
                      <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl text-white">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold text-lg shadow-md">
                            A
                          </div>
                          <div>
                            <p className="text-xs text-amber-300 font-bold uppercase tracking-wider">
                              Adobe Partner Engineering
                            </p>
                            <p className="text-sm font-semibold text-white">
                              Enterprise AEM Sites &amp; Assets (DAM)
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>

              {/* Right Content Card (Matching Screenshot Box Overlay) */}
              <div className="lg:col-span-6 space-y-6 text-center lg:text-left order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 uppercase tracking-wider">
                    Enterprise Content Management
                  </span>
                </div>

                <div className="bg-white/95 text-[#0B1340] p-8 sm:p-10 rounded-2xl shadow-2xl border border-slate-200 space-y-6">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1340] leading-tight">
                    Adobe Experience Manager (AEM)
                  </h1>

                  <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
                    Building powerful, scalable digital experience management platforms for enterprise brands. Certified AEM architects and developers by Autofya.
                  </p>

                  <div className="pt-2">
                    <Link
                      href="/schedule"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FF9000] hover:bg-[#E68200] text-white font-bold text-base shadow-lg shadow-amber-900/30 transition-all hover:scale-[1.02] cursor-pointer"
                    >
                      <span>Talk to us</span>
                      <span className="text-xl">→</span>
                    </Link>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. OVERVIEW / INTRO SECTION (2-COLUMN TEXT + LOGO)          */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Logo Header */}
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-red-600 via-amber-600 to-orange-500 text-white flex items-center justify-center shadow-xl border-4 border-white">
                <span className="text-4xl font-extrabold tracking-tighter">AEM</span>
              </div>
            </div>

            {/* 2 Column Description */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-slate-700 text-base leading-relaxed max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-xl font-bold text-[#0B1340] border-b border-slate-100 pb-3">
                  Enterprise Experience Platform
                </h3>
                <p>
                  Adobe Experience Manager (AEM) is an enterprise-grade Content Management Solution for building websites, mobile apps, and digital forms. It seamlessly combines Digital Asset Management (DAM) with Web Content Management (WCM) to deliver personalized customer experiences at scale.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-xl font-bold text-[#0B1340] border-b border-slate-100 pb-3">
                  Autofya Certified Engineering
                </h3>
                <p>
                  At Autofya, our team of certified AEM architects and developers provide end-to-end AEM services—from initial implementation, Cloud Service migrations, and custom HTL component development to multi-site management and 24/7 SLA managed support.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. OFFERED SERVICES SECTION (MATCHING SCREENSHOT LAYOUT)   */}
        {/* ========================================================= */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Heading */}
              <div className="lg:col-span-5 space-y-4 sticky top-28">
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                  What We Do
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1340]">
                  Offered <br />
                  <span className="text-[#00a2ad]">Services</span>
                </h2>
                <div className="w-16 h-1 bg-[#00a2ad] rounded-full" />
                <p className="text-slate-600 text-base leading-relaxed">
                  Comprehensive AEM engineering solutions tailored to accelerate digital publishing, optimize brand workflows, and scale globally.
                </p>
                <div className="pt-4">
                  <Link
                    href="/schedule"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B1340] hover:bg-[#15205b] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                  >
                    <span>Consult with AEM Architect</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Services List with Arrow Bullets */}
              <div className="lg:col-span-7 space-y-4">
                {offeredServices.map((srv, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#00a2ad] hover:bg-cyan-50/30 transition-all duration-300 group flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-[#00a2ad] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 group-hover:bg-[#00a2ad] group-hover:text-white transition-colors">
                      ›
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-[#0B1340] group-hover:text-[#00a2ad] transition-colors">
                        {srv.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. INDUSTRIES SECTION (MATCHING SCREENSHOT LAYOUT)         */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Heading */}
              <div className="lg:col-span-5 space-y-4 sticky top-28">
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                  Domain Expertise
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1340]">
                  Industries
                </h2>
                <div className="w-16 h-1 bg-[#00a2ad] rounded-full" />
                <p className="text-slate-600 text-base leading-relaxed">
                  We deploy AEM solutions engineered specifically for complex compliance, multi-region branding, and high-concurrency traffic requirements.
                </p>
              </div>

              {/* Right Column: Industries Checklist Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {industriesList.map((ind, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-xl bg-white border border-slate-200/80 hover:shadow-md transition-all space-y-2 flex flex-col justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0">
                        ✓
                      </span>
                      <h3 className="text-sm font-extrabold text-[#0B1340] tracking-wide">
                        {ind.name}
                      </h3>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed pl-8">
                      {ind.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. WHO WE'VE WORKED WITH (CLIENT LOGO DISPLAY)             */}
        {/* ========================================================= */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                Enterprise Partners
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
                Who we&apos;ve worked with
              </h2>
            </div>

            {/* Featured Logos Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center opacity-85 hover:opacity-100 transition-opacity">
              {clientLogos.map((client, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#00a2ad] transition-all text-center group cursor-default"
                >
                  <p className="text-lg sm:text-xl font-black text-[#0B1340] group-hover:text-[#00a2ad] transition-colors">
                    {client.name}
                  </p>
                  <p className="text-[11px] text-slate-400 font-medium">
                    {client.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. LET US HELP YOU WITH YOUR PROJECT (CALLOUT CARD)        */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#0B1340] via-[#122268] to-[#0B1340] rounded-3xl border border-white/15 p-8 lg:p-14 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Callout Text Left */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <span className="text-xs uppercase tracking-widest font-extrabold text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/30">
                  Collaborate with Experts
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  Let Us Help You With Your Project
                </h2>
                <p className="text-slate-300 text-base sm:text-lg max-w-xl">
                  Whether you are planning a new AEM implementation, migrating to AEM Cloud Service, or optimizing existing components, our certified engineers are ready.
                </p>

                <div className="pt-2">
                  <Link
                    href="/schedule"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FF9000] hover:bg-[#E68200] text-white font-bold text-base shadow-xl transition-all cursor-pointer hover:scale-105"
                  >
                    <span>Talk to us</span>
                    <span className="text-xl">→</span>
                  </Link>
                </div>
              </div>

              {/* Team Graphic Right */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md h-72 rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                  <Image
                    src="/about_team_collaboration.jpg"
                    alt="Autofya AEM Consultants & Engineering Team"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-bold text-white">Dedicated AEM Practice Lead</p>
                    <p className="text-xs text-slate-300">Certified Architects &amp; HTL Component Developers</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 7. FAQS SECTION                                          */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                Got Questions?
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-[#0B1340] text-base sm:text-lg hover:text-[#00a2ad] transition-colors"
                    >
                      <span>{faq.question}</span>
                      <span className="text-slate-400 font-extrabold text-xl shrink-0">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* Footer & Global Offices */}
      <Footer />
    </div>
  );
}
