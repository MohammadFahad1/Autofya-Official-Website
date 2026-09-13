"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function QaTestingAutomationPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const offeredServices = [
    {
      title: "Functional Testing",
      desc: "Comprehensive manual and automated functional validation to ensure every software requirement and business logic flow executes flawlessly.",
    },
    {
      title: "Compatibility Testing",
      desc: "Cross-browser, cross-OS, and multi-device matrix testing to guarantee consistent UI rendering and functional stability across all platforms.",
    },
    {
      title: "Performance & Stress Testing",
      desc: "Load, stress, spike, and endurance testing using JMeter and k6 to identify bottlenecks and ensure 99.99% system availability under peak traffic.",
    },
    {
      title: "Automation Testing",
      desc: "Building robust, scalable test automation frameworks using Playwright, Cypress, and Selenium for continuous regression coverage.",
    },
    {
      title: "Security Testing & Vulnerability Audit",
      desc: "OWASP Top 10 vulnerability scanning, penetration testing, authentication audits, and data privacy compliance verification.",
    },
    {
      title: "API & Microservices Testing",
      desc: "Automated API contract validation, REST/GraphQL performance testing, and end-to-end microservices integration tests.",
    },
    {
      title: "Mobile App QA (iOS & Android)",
      desc: "Native iOS and Android app testing using Appium and real-device testing clouds for network bandwidth, battery, and UI touch behavior.",
    },
    {
      title: "Regression Testing & CI/CD QA",
      desc: "Integrating automated test suites into GitHub Actions, GitLab CI, or Jenkins pipelines for immediate feedback on every code commit.",
    },
  ];

  const industriesList = [
    { name: "E-COMMERCE", desc: "Checkout funnel testing, payment gateway validation, and high-concurrency flash sale load testing." },
    { name: "E-LEARNING", desc: "SCORM course player QA, video streaming stability, and live classroom integration testing." },
    { name: "GAMING", desc: "Cross-platform frame-rate testing, physics engine QA, and multi-player synchronization testing." },
    { name: "HEALTHCARE", desc: "HIPAA compliance audit, EHR data integrity, and medical device software validation." },
    { name: "SOCIAL MEDIA / WEB 2.0", desc: "Real-time feed performance, push notification QA, and high-concurrency socket testing." },
    { name: "FINTECH & BANKING", desc: "Transaction precision, security penetration audits, and core banking API compliance." },
    { name: "TELECOMMUNICATIONS", desc: "Billing engine verification, self-service portal QA, and network API stress testing." },
    { name: "MANUFACTURING", desc: "IoT sensor telemetry QA, ERP integration testing, and supply chain software audits." },
    { name: "RETAIL", desc: "POS software sync, inventory barcode scanner testing, and omnichannel order fulfillment QA." },
    { name: "FINANCIAL INSTITUTIONS", desc: "Risk assessment algorithm verification, audit trail logging, and regulatory reporting QA." },
    { name: "TRANSPORT & LOGISTICS", desc: "GPS tracking accuracy, driver app testing, and automated dispatch system verification." },
  ];

  const clientLogos = [
    { name: "Robi", label: "Robi Axiata" },
    { name: "Grameenphone", label: "Grameenphone" },
    { name: "ACI", label: "ACI Limited" },
    { name: "City Bank", label: "The City Bank Ltd" },
    { name: "Unipart", label: "Unipart Group" },
    { name: "MetLife", label: "MetLife Insurance" },
  ];

  const faqs = [
    {
      question: "Why is Software Testing and Quality Assurance crucial before product release?",
      answer:
        "Rigorous Quality Assurance (QA) identifies software defects early, preventing costly post-launch bugs, security breaches, and user churn. It guarantees system reliability, sub-second load times, and compliance with industry standards.",
    },
    {
      question: "What QA and Test Automation tools does Autofya use?",
      answer:
        "We utilize industry-leading open-source and enterprise testing tools, including Playwright, Cypress, Selenium, Appium (mobile), JMeter/k6 (performance), Postman (API), SonarQube (static analysis), and OWASP ZAP (security scanning).",
    },
    {
      question: "Are Autofya's QA engineers certified?",
      answer:
        "Yes! Autofya's software testing practice consists of ISTQB-certified (International Software Testing Qualifications Board) QA engineers, test automation architects, and security auditing specialists.",
    },
    {
      question: "How does Autofya integrate QA into our existing CI/CD development pipeline?",
      answer:
        "We embed automated smoke and regression test suites directly into your CI/CD workflow (GitHub Actions, GitLab, Jenkins, Bitbucket). Tests execute automatically on every pull request or nightly build, preventing broken code from reaching production.",
    },
    {
      question: "What testing services do you recommend for an existing legacy application?",
      answer:
        "For legacy platforms, we recommend starting with a comprehensive QA audit, followed by functional regression mapping, API security testing, and building an automated end-to-end test suite to safely enable future feature deployments.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B1340] selection:bg-[#00a2ad] selection:text-white font-sans">
      {/* Navbar Header */}
      <Navbar />

      <main className="flex-1">
        {/* ========================================================= */}
        {/* 1. HERO SECTION (DARK CODE IDE BACKGROUND THEME)            */}
        {/* ========================================================= */}
        <section className="relative bg-[#060D20] text-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
          {/* Ambient Glow & Code BG */}
          <div className="absolute inset-0 z-0 opacity-15">
            <Image
              src="/capabilities_digital_trans.jpg"
              alt="QA Code IDE Background"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#060D20] via-[#060D20]/95 to-[#0B1A3A]/90 z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Content Card (Matching Screenshot Box Overlay) */}
              <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 uppercase tracking-wider">
                    ISTQB Certified QA Engineering
                  </span>
                </div>

                <div className="bg-white/95 text-[#0B1340] p-8 sm:p-10 rounded-2xl shadow-2xl border border-slate-200 space-y-6">
                  <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0B1340]">
                    Software Testing
                  </h1>

                  <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
                    Delivering bug-free, high-performance software through automated, manual, and performance testing excellence. By Autofya.
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

              {/* Right Hero Visual: Code Editor Card */}
              <div className="lg:col-span-6 relative flex justify-center">
                <div className="relative w-full max-w-md lg:max-w-none">
                  <div className="relative rounded-2xl bg-slate-950 border border-white/20 p-4 shadow-2xl overflow-hidden font-mono">
                    <div className="flex items-center gap-2 pb-3 border-b border-white/10 text-xs text-slate-400">
                      <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                      <span className="ml-2 text-slate-300">playwright.test.ts — Autofya QA Suite</span>
                    </div>

                    <div className="p-4 space-y-2 text-xs text-slate-300 overflow-hidden">
                      <p className="text-purple-400">test<span className="text-slate-200">(&apos;Verify 100% Checkout Execution&apos;, async (&#123; page &#125;) =&gt; &#123;</span></p>
                      <p className="pl-4 text-cyan-300">await <span className="text-slate-200">page.goto(&apos;https://app.autofya.com&apos;);</span></p>
                      <p className="pl-4 text-cyan-300">await <span className="text-slate-200">expect(page).toHavePerformanceScore(0.99);</span></p>
                      <p className="pl-4 text-emerald-400">// ✓ Automated Test Suite Passed (0 Defects Found)</p>
                      <p className="text-purple-400">&#125;);</p>
                    </div>

                    <div className="mt-4 p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs flex items-center justify-between font-sans">
                      <span>✓ 2,450 Automated Tests Executed</span>
                      <span className="font-bold">100% Passed</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. OVERVIEW SECTION (2-COLUMN TEXT)                        */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-lg font-bold text-2xl">
                QA
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-slate-700 text-base leading-relaxed max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-xl font-bold text-[#0B1340] border-b border-slate-100 pb-3">
                  Critical Quality Assurance
                </h3>
                <p>
                  Software testing plays a critical role in modern software engineering. Rigorous quality assurance reduces failure risks, speeds up time-to-market, and guarantees a seamless end-user experience across web applications, mobile apps, and enterprise platforms.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-xl font-bold text-[#0B1340] border-b border-slate-100 pb-3">
                  Autofya QA Practice
                </h3>
                <p>
                  At Autofya, our ISTQB-certified QA engineering team provides end-to-end software testing services—ranging from automated regression and API testing (Cypress, Playwright, Selenium) to load stress testing, security audits, and continuous CI/CD pipeline integration.
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
                  Testing Spectrum
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1340]">
                  Offered <br />
                  <span className="text-[#00a2ad]">Services</span>
                </h2>
                <div className="w-16 h-1 bg-[#00a2ad] rounded-full" />
                <p className="text-slate-600 text-base leading-relaxed">
                  Full-coverage software testing and test automation services engineered to ensure total platform security and performance.
                </p>
                <div className="pt-4">
                  <Link
                    href="/schedule"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B1340] hover:bg-[#15205b] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                  >
                    <span>Talk to QA Lead</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Offered Services List with Arrow Bullets */}
              <div className="lg:col-span-7 space-y-4">
                {offeredServices.map((srv, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#00a2ad] hover:bg-cyan-50/30 transition-all duration-300 group flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-cyan-100 text-[#00a2ad] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5 group-hover:bg-[#00a2ad] group-hover:text-white transition-colors">
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
        {/* 4. INDUSTRIES SECTION (CHECKLIST + CODE GRAPHIC RIGHT)     */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Heading & Checklist */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                    Industry Domains
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
                    Industries
                  </h2>
                  <div className="w-16 h-1 bg-[#00a2ad] rounded-full" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {industriesList.map((ind, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white border border-slate-200/80 hover:shadow-md transition-all space-y-1"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0">
                          ✓
                        </span>
                        <h3 className="text-xs font-extrabold text-[#0B1340] tracking-wide">
                          {ind.name}
                        </h3>
                      </div>
                      <p className="text-slate-500 text-[11px] leading-relaxed pl-7">
                        {ind.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Code Editor Image */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                  <Image
                    src="/hero_ai_engineer.jpg"
                    alt="Autofya QA Automated Code Screen"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D20]/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl text-[#0B1340]">
                    <p className="text-xs font-bold text-[#00a2ad] uppercase tracking-wider">
                      Automated Quality Assurance
                    </p>
                    <p className="text-sm font-semibold">
                      Continuous Regression &amp; Load Testing Pipelines
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. WHO WE'VE WORKED WITH (CLIENT LOGO BAR)                 */}
        {/* ========================================================= */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                Global Partners
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
                Who we&apos;ve worked with
              </h2>
            </div>

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
        {/* 6. LET US HELP YOU WITH YOUR PROJECT CALLOUT CARD          */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#0B1340] via-[#122268] to-[#0B1340] rounded-3xl border border-white/15 p-8 lg:p-14 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Callout Text Left */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <span className="text-xs uppercase tracking-widest font-extrabold text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/30">
                  Guarantee Software Excellence
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  Let Us Help You With Your Project
                </h2>
                <p className="text-slate-300 text-base sm:text-lg max-w-xl">
                  Connect with Autofya&apos;s ISTQB-certified QA leads to audit your existing test coverage, automate regression pipelines, or perform load testing.
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
                    src="/company_team_group.jpg"
                    alt="Autofya QA Engineers & Consultants"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-bold text-white">Dedicated QA Squads</p>
                    <p className="text-xs text-slate-300">Automation Engineers &amp; Security Auditors</p>
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
