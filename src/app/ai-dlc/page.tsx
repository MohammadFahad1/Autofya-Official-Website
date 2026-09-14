"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AiDlcPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const overviewStats = [
    {
      value: "10X",
      label: "Faster Development",
      desc: "Accelerated sprint velocity through AI code generation and automated spec synthesis.",
    },
    {
      value: "40%",
      label: "Engineering Cost Savings",
      desc: "Reduced boilerplate overhead and streamlined resource allocation across product teams.",
    },
    {
      value: "99.9%",
      label: "Zero-Defect Reliability",
      desc: "Autonomous self-healing test suites and real-time AST static vulnerability scanning.",
    },
    {
      value: "24/7",
      label: "Continuous Pipelines",
      desc: "Predictive CI/CD deployment automation and continuous telemetry health monitoring.",
    },
  ];

  const corePillars = [
    {
      number: "01",
      title: "AI-Driven Requirements & Architecture",
      subtitle: "Transforming Ideas into Verified Specifications in Hours",
      desc: "Our AI engine analyzes business requirements, translates natural language into structured PRDs, generates UML domain models, and auto-maps microservice boundary contexts with human architect validation.",
      bullets: [
        "Automated User Story & Acceptance Criteria Synthesis",
        "AI Architecture Diagramming & Schema Modeling",
        "Instant Technical Feasibility & Security Gap Analysis",
      ],
    },
    {
      number: "02",
      title: "AI-Assisted Development & Smart Refactoring",
      subtitle: "10X Engineering Velocity with Human-in-the-Loop Oversight",
      desc: "Developers leverage custom-trained LLMs and context-aware coding assistants to write clean, type-safe, and modular code. AI handles repetitive boilerplate, enabling senior engineers to focus on core business logic.",
      bullets: [
        "Context-Aware Code Completion & Boilerplate Elimination",
        "Automated Code Refactoring & Anti-Pattern Detection",
        "Instant Inline Documentation & API Schema Generation",
      ],
    },
    {
      number: "03",
      title: "Autonomous Testing & Self-Healing QA",
      subtitle: "Zero-Defect Releases with Instant Test Case Synthesis",
      desc: "AI automatically generates unit, integration, and end-to-end Playwright test cases directly from feature specs. Self-healing algorithms update DOM selectors dynamically when UI code changes, eliminating test fragility.",
      bullets: [
        "Instant E2E & Unit Test Case Generation",
        "Self-Healing Locators & Visual Regression Auditing",
        "AI Load, Stress, and Edge-Case Vulnerability Simulation",
      ],
    },
    {
      number: "04",
      title: "AI DevOps, CI/CD & Continuous Telemetry",
      subtitle: "Autonomous Release Pipelines & Predictive Health",
      desc: "AI agents manage multi-cloud deployment manifests, evaluate deployment risk before release, monitor APM error logs in real time, and automatically trigger zero-downtime rollbacks if metrics degrade.",
      bullets: [
        "Predictive Deployment Pipeline Health Checks",
        "Autonomous Infrastructure-as-Code (IaC) Generation",
        "Real-Time Log Telemetry Anomaly Detection",
      ],
    },
  ];

  const aiBenefits = [
    {
      title: "10X Speed to Market",
      desc: "Cut software development cycles from months to weeks by augmenting engineering workflows with intelligent automation.",
      icon: "🚀",
    },
    {
      title: "Enterprise IP & Data Security",
      desc: "Your source code and proprietary IP remain strictly private inside dedicated SOC2-compliant enterprise AI sandboxes.",
      icon: "🔒",
    },
    {
      title: "40%+ Cost Efficiency",
      desc: "Maximize engineering ROI by automating routine tasks, code documentation, test creation, and bug triage.",
      icon: "⚡",
    },
    {
      title: "Scalable Modern Architecture",
      desc: "AI enforces clean code standards, modular microservice patterns, and comprehensive test coverage from day one.",
      icon: "🏗️",
    },
    {
      title: "Human-in-the-Loop Governance",
      desc: "Experienced Autofya senior architects oversee every line of code, ensuring institutional standards and compliance.",
      icon: "👨‍💻",
    },
    {
      title: "Continuous Code Health",
      desc: "Proactive AI code scanning constantly identifies tech debt, security vulnerabilities, and performance bottlenecks.",
      icon: "🛡️",
    },
  ];

  const sdlcComparison = [
    {
      stage: "1. Requirements & PRDs",
      traditional: "Manual documentation taking 3–6 weeks with ambiguous user stories.",
      autofya: "AI-generated PRDs & specifications in hours with full domain mapping.",
    },
    {
      stage: "2. Architecture & Design",
      traditional: "Siloed architectural reviews prone to overlooked edge cases.",
      autofya: "AI domain schema generation verified by Autofya Lead Architects.",
    },
    {
      stage: "3. Development Sprints",
      traditional: "Manual line-by-line coding with high repetitive boilerplate overhead.",
      autofya: "10X velocity with AI code assist, automated boilerplate, & smart refactoring.",
    },
    {
      stage: "4. Testing & Quality Assurance",
      traditional: "Fragile test automation scripts requiring constant manual maintenance.",
      autofya: "Self-healing AI test suites with instant zero-defect regression coverage.",
    },
    {
      stage: "5. DevOps & Deployment",
      traditional: "Manual CI/CD pipeline triggers and reactive downtime troubleshooting.",
      autofya: "Autonomous AI release pipelines with predictive anomaly detection.",
    },
    {
      stage: "6. Maintenance & Tech Debt",
      traditional: "Accumulating technical debt leading to slow refactoring and bug backlog.",
      autofya: "Continuous AI code health audits and automated security vulnerability patches.",
    },
  ];

  const techEcosystem = [
    { name: "OpenAI GPT-4o", category: "LLM Engine" },
    { name: "Anthropic Claude 3.5", category: "Reasoning & Code" },
    { name: "GitHub Copilot", category: "Code Assist" },
    { name: "Cursor / Windsurf", category: "AI IDE Integration" },
    { name: "LangChain & LlamaIndex", category: "AI Agentic Workflows" },
    { name: "Playwright & Cypress", category: "Self-Healing QA" },
    { name: "SonarQube & Snyk", category: "Static Code & Security" },
    { name: "Kubernetes & AWS Bedrock", category: "Cloud & AI Infra" },
  ];

  const useCases = [
    {
      title: "Fintech & Banking",
      desc: "Rapid deployment of secure core banking modules, automated PCI-DSS compliance audits, and AI fraud prevention microservices.",
    },
    {
      title: "Healthcare & MedTech",
      desc: "HIPAA-compliant software delivery, automated EHR integration testing, and intelligent patient workflow automation.",
    },
    {
      title: "E-Commerce & Retail",
      desc: "Sub-second checkout optimization, real-time inventory AI sync, and high-concurrency event load readiness.",
    },
    {
      title: "Logistics & Supply Chain",
      desc: "Dynamic route optimization engines, IoT telemetry integration, and automated fleet management portals.",
    },
    {
      title: "Enterprise SaaS & Cloud",
      desc: "Accelerating multi-tenant SaaS features, automated API contract testing, and cloud infrastructure optimization.",
    },
  ];

  const faqs = [
    {
      question: "What is AI-DLC and how does Autofya implement it?",
      answer:
        "AI-DLC (AI Software Development Life Cycle) is Autofya's proprietary methodology that embeds artificial intelligence across every stage of software engineering—from requirements synthesis and code generation to autonomous QA testing and predictive DevOps pipelines. It combines advanced AI automation with human expert oversight to deliver enterprise software 10X faster.",
    },
    {
      question: "Will human developers still oversee the code quality, architecture, and security?",
      answer:
        "Yes, absolutely! Human-in-the-Loop governance is a core pillar of Autofya AI-DLC. While AI handles code generation, boilerplate, and initial test synthesis, Autofya's senior solution architects and lead engineers review, validate, and approve every pull request to ensure high quality, security, and enterprise compliance.",
    },
    {
      question: "How does Autofya guarantee IP protection and source code confidentiality?",
      answer:
        "We enforce enterprise-grade security protocols. All AI models operate within isolated, SOC2-compliant sandboxes with zero external model training on your data. Your proprietary source code, credentials, and business logic remain 100% confidential and owned by your organization.",
    },
    {
      question: "Can AI-DLC be integrated into our existing codebase and team workflow?",
      answer:
        "Yes! Autofya AI-DLC is designed to seamlessly integrate with your existing technology stack, repositories (GitHub, GitLab, Bitbucket), issue trackers (Jira, Linear), and CI/CD pipelines. We can augment your existing engineering team or manage end-to-end product delivery.",
    },
    {
      question: "What measurable ROI and speed improvements can my company expect?",
      answer:
        "On average, organizations partnering with Autofya experience a 10X increase in development speed, up to 40% reduction in engineering operational costs, and near zero post-release defects due to our autonomous self-healing QA frameworks.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B1340] selection:bg-[#00a2ad] selection:text-white font-sans">
      {/* Global Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* ========================================================= */}
        {/* 1. HERO SECTION (DARK NAVY CODE IDE THEME)                */}
        {/* ========================================================= */}
        <section className="relative bg-[#060D20] text-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
          {/* Ambient Glow Background */}
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="/ai_development_collaboration.jpg"
              alt="AI-DLC Code IDE Background"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#060D20] via-[#060D20]/95 to-[#0B1A3A]/90 z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Hero Card (White Box Overlay matching design spec) */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00a2ad] animate-pulse" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 uppercase tracking-wider">
                    AI Software Development Life Cycle (AI-DLC)
                  </span>
                </div>

                <div className="bg-white/95 text-[#0B1340] p-8 sm:p-10 rounded-2xl shadow-2xl border border-slate-200 space-y-6">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1340] leading-tight">
                    Build software at <span className="text-[#00a2ad]">10X speed</span> with Autofya AI-DLC
                  </h1>

                  <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
                    We integrate AI across every stage of the software development lifecycle to deliver intelligent, scalable, and high-performance solutions.
                  </p>

                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                    <Link
                      href="/schedule"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FF9000] hover:bg-[#E68200] text-white font-bold text-base shadow-lg shadow-amber-900/30 transition-all hover:scale-[1.02] cursor-pointer"
                    >
                      <span>Talk to AI Lead</span>
                      <span className="text-xl">→</span>
                    </Link>
                    <a
                      href="#ai-dlc-pillars"
                      className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0B1340] font-bold text-base transition-all cursor-pointer"
                    >
                      <span>Explore Pillars</span>
                      <span>↓</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Hero Visual: Live AI Pipeline Visual Card */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-md lg:max-w-none">
                  <div className="relative rounded-2xl bg-slate-950 border border-white/20 p-5 shadow-2xl overflow-hidden font-mono">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-slate-400">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                        <span className="ml-2 text-slate-300">Autofya-AI-Pipeline.ts</span>
                      </div>
                      <span className="text-[10px] text-[#00a2ad] font-bold bg-[#00a2ad]/10 px-2 py-0.5 rounded border border-[#00a2ad]/30">
                        AI-DLC ACTIVE
                      </span>
                    </div>

                    <div className="py-4 space-y-2.5 text-xs text-slate-300 font-mono">
                      <p className="text-emerald-400">// 1. Requirement &amp; Architecture Synthesis</p>
                      <p className="pl-4 text-cyan-300">await <span className="text-slate-100">autofyaAI.generatePRD(&apos;Fintech Core Module&apos;);</span></p>
                      <p className="text-emerald-400">// 2. Code Generation &amp; Refactoring</p>
                      <p className="pl-4 text-cyan-300">await <span className="text-slate-100">autofyaAI.synthesizeMicroservices(&#123; speed: &apos;10X&apos; &#125;);</span></p>
                      <p className="text-emerald-400">// 3. Autonomous Self-Healing QA</p>
                      <p className="pl-4 text-purple-400">testSuite<span className="text-slate-100">.executeE2ECoverage(); // 100% Passed</span></p>
                      <p className="text-emerald-400">// 4. Zero-Downtime Deployment</p>
                      <p className="pl-4 text-amber-300">await <span className="text-slate-100">deployPipeline.releaseToProduction();</span></p>
                    </div>

                    <div className="mt-2 p-3 rounded-xl bg-gradient-to-r from-emerald-950 to-cyan-950 border border-emerald-500/40 text-emerald-300 text-xs flex items-center justify-between font-sans">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span className="font-semibold">Development Velocity</span>
                      </div>
                      <span className="font-bold text-white bg-emerald-600/60 px-2 py-0.5 rounded">10X Acceleration</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. OVERVIEW & METRICS GRID                                */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            {/* Impact Metric Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {overviewStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-[#00a2ad] hover:shadow-md transition-all space-y-3 group"
                >
                  <div className="text-4xl sm:text-5xl font-black text-[#0B1340] group-hover:text-[#00a2ad] transition-colors">
                    {stat.value}
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1340]">
                    {stat.label}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* 2-Column Text Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-slate-700 text-base leading-relaxed max-w-6xl mx-auto">
              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-100 text-[#00a2ad] flex items-center justify-center font-bold text-xl mb-2">
                  ⚡
                </div>
                <h3 className="text-2xl font-bold text-[#0B1340]">
                  Framework for AI Software Delivery
                </h3>
                <p className="text-slate-600">
                  Traditional software development life cycles are hampered by manual requirement gathering, repetitive boilerplate coding, fragile test scripts, and slow release approvals. AI-DLC redefines this paradigm by injecting intelligence into every phase.
                </p>
              </div>

              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-xl bg-amber-100 text-[#FF9000] flex items-center justify-center font-bold text-xl mb-2">
                  🛡️
                </div>
                <h3 className="text-2xl font-bold text-[#0B1340]">
                  Autofya AI-DLC Excellence
                </h3>
                <p className="text-slate-600">
                  At Autofya, our software engineers combine custom generative AI models with Human-in-the-Loop senior architect oversight. We build software faster, cleaner, and more securely—enabling enterprises to deliver products at unprecedented speed.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. THE 4 PILLARS OF AI-DLC                                 */}
        {/* ========================================================= */}
        <section id="ai-dlc-pillars" className="py-24 bg-white border-b border-slate-200 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                Lifecycle Architecture
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1340]">
                The 4 Pillars of AI-DLC
              </h2>
              <div className="w-20 h-1 bg-[#00a2ad] rounded-full mx-auto" />
              <p className="text-slate-600 text-base sm:text-lg">
                Discover how Autofya integrates AI across every phase of software creation to drive 10X development speed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {corePillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-200/90 hover:border-[#00a2ad] hover:bg-cyan-50/20 transition-all duration-300 flex flex-col justify-between group space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl sm:text-4xl font-black text-[#00a2ad] opacity-80 group-hover:opacity-100">
                        {pillar.number}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 bg-white px-3 py-1 rounded-full border border-slate-200">
                        Stage {idx + 1}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-[#0B1340] group-hover:text-[#00a2ad] transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-semibold text-[#00a2ad]">
                      {pillar.subtitle}
                    </p>

                    <p className="text-slate-600 text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200/80 space-y-2.5">
                    {pillar.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                        <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-[10px] shrink-0">
                          ✓
                        </span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. VISUAL DEEP-DIVE #1: REQUIREMENTS & ARCHITECTURE       */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Graphic Image */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-lg h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                  <Image
                    src="/hero_ai_engineer.jpg"
                    alt="Autofya AI Engineer Requirements & Architecture"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D20]/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl text-[#0B1340]">
                    <p className="text-xs font-bold text-[#00a2ad] uppercase tracking-wider">
                      AI Requirement Synthesis
                    </p>
                    <p className="text-sm font-semibold">
                      Automated Domain Specs &amp; Microservice Boundary Mapping
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Text Content */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                  Precision Prototyping
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340] leading-tight">
                  Accelerating Requirements, Architecture &amp; System Prototyping
                </h2>
                <div className="w-16 h-1 bg-[#00a2ad] rounded-full" />
                
                <p className="text-slate-600 text-base leading-relaxed">
                  In traditional software development, translating business goals into detailed technical specs takes weeks of back-and-forth meetings. Autofya AI-DLC uses specialized LLMs to convert natural language project requirements into production-ready specifications, database schemas, and API documentation in hours.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200">
                    <span className="w-7 h-7 rounded-lg bg-cyan-100 text-[#00a2ad] flex items-center justify-center font-bold text-sm shrink-0">
                      1
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-[#0B1340]">Instant PRD &amp; Schema Generation</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Automated extraction of user personas, acceptance criteria, and ERD schemas.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200">
                    <span className="w-7 h-7 rounded-lg bg-amber-100 text-[#FF9000] flex items-center justify-center font-bold text-sm shrink-0">
                      2
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-[#0B1340]">Human Architect Audit</h4>
                      <p className="text-xs text-slate-500 mt-0.5">Autofya Senior Architects review and refine AI domain models before sprint execution.</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. KEY BENEFITS OF AUTOFYA AI-DLC                          */}
        {/* ========================================================= */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                Enterprise Value
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1340]">
                Why Choose Autofya&apos;s AI-DLC?
              </h2>
              <div className="w-20 h-1 bg-[#00a2ad] rounded-full mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiBenefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-[#00a2ad] hover:bg-white hover:shadow-xl transition-all duration-300 space-y-4 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1340] group-hover:text-[#00a2ad] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. VISUAL DEEP-DIVE #2: AUTONOMOUS QA & DEPLOYMENT        */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Text Content */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                  Zero-Defect Engineering
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340] leading-tight">
                  Autonomous Testing &amp; Zero-Defect Delivery
                </h2>
                <div className="w-16 h-1 bg-[#00a2ad] rounded-full" />
                
                <p className="text-slate-600 text-base leading-relaxed">
                  Eliminate manual regression testing bottlenecks. Autofya AI-DLC automatically generates comprehensive Playwright and Cypress E2E test suites from feature specs. Our self-healing algorithms dynamically adjust test selectors when UI changes, ensuring zero broken pipelines.
                </p>

                <div className="space-y-3.5 pt-2">
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1340]">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</span>
                    <span>Self-Healing Playwright &amp; Cypress UI Locators</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1340]">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</span>
                    <span>AI Visual Regression &amp; Pixel-Match Auditing</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1340]">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</span>
                    <span>Continuous Static Security Vulnerability Scans</span>
                  </div>
                </div>
              </div>

              {/* Right Graphic Image */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-lg h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                  <Image
                    src="/hero_cloud_devops.jpg"
                    alt="Autofya Autonomous Testing & DevOps"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D20]/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl text-[#0B1340]">
                    <p className="text-xs font-bold text-[#00a2ad] uppercase tracking-wider">
                      Self-Healing Test Pipelines
                    </p>
                    <p className="text-sm font-semibold">
                      Predictive Release Quality &amp; Zero-Downtime Deployment
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 7. COMPARISON MATRIX: TRADITIONAL VS AUTOFYA AI-DLC       */}
        {/* ========================================================= */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                Direct Comparison
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1340]">
                Traditional SDLC vs Autofya AI-DLC
              </h2>
              <div className="w-20 h-1 bg-[#00a2ad] rounded-full mx-auto" />
            </div>

            {/* Responsive Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-lg">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-[#060D20] text-white text-sm sm:text-base font-bold">
                    <th className="py-5 px-6 border-b border-slate-800 w-1/4">Lifecycle Phase</th>
                    <th className="py-5 px-6 border-b border-slate-800 w-3/8 text-slate-300">Traditional SDLC</th>
                    <th className="py-5 px-6 border-b border-slate-800 w-3/8 bg-[#00a2ad] text-white font-extrabold">
                      Autofya AI-DLC (10X Speed)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                  {sdlcComparison.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                      <td className="py-4.5 px-6 font-bold text-[#0B1340]">
                        {row.stage}
                      </td>
                      <td className="py-4.5 px-6 text-slate-500 leading-relaxed">
                        {row.traditional}
                      </td>
                      <td className="py-4.5 px-6 font-semibold text-[#0B1340] bg-cyan-50/40 leading-relaxed border-l-2 border-[#00a2ad]">
                        <div className="flex items-start gap-2">
                          <span className="text-[#00a2ad] font-bold text-base">✦</span>
                          <span>{row.autofya}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 8. AI TECH STACK & ECOSYSTEM INTEGRATION                   */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                Technology Stack
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
                Supported AI Ecosystem &amp; Integrations
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {techEcosystem.map((tool, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#00a2ad] shadow-sm hover:shadow-md transition-all text-center space-y-1 group"
                >
                  <p className="text-lg font-bold text-[#0B1340] group-hover:text-[#00a2ad] transition-colors">
                    {tool.name}
                  </p>
                  <p className="text-xs font-semibold text-slate-400">
                    {tool.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 9. INDUSTRY APPLICATIONS                                   */}
        {/* ========================================================= */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center space-y-3">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                Domain Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
                AI-DLC Across Key Industries
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {useCases.map((uc, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#00a2ad] hover:shadow-md transition-all space-y-2"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#00a2ad]/10 text-[#00a2ad] font-extrabold text-sm flex items-center justify-center mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-bold text-[#0B1340]">{uc.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 10. CALLOUT BANNER CARD                                   */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#0B1340] via-[#122268] to-[#0B1340] rounded-3xl border border-white/15 p-8 lg:p-14 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Callout Text Left */}
              <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
                <span className="text-xs uppercase tracking-widest font-extrabold text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/30">
                  Transform Software Engineering
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  Ready to Accelerate Your Software Delivery with AI-DLC?
                </h2>
                <p className="text-slate-300 text-base sm:text-lg max-w-2xl">
                  Connect with Autofya&apos;s AI solution architects to integrate AI-DLC into your roadmap, build new products at 10X speed, or audit your development pipelines.
                </p>

                <div className="pt-2">
                  <Link
                    href="/schedule"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FF9000] hover:bg-[#E68200] text-white font-bold text-base shadow-xl transition-all cursor-pointer hover:scale-105"
                  >
                    <span>Schedule an AI-DLC Call</span>
                    <span className="text-xl">→</span>
                  </Link>
                </div>
              </div>

              {/* Graphic Right */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-full max-w-sm h-64 rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                  <Image
                    src="/company_team_group.jpg"
                    alt="Autofya AI Solutions Team"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-bold text-white">Autofya AI Solutions Team</p>
                    <p className="text-xs text-slate-300">Senior AI Architects &amp; Software Engineers</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 11. FAQS SECTION                                         */}
        {/* ========================================================= */}
        <section className="py-24 bg-slate-50 border-t border-slate-200">
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
                      className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-[#0B1340] text-base sm:text-lg hover:text-[#00a2ad] transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      <span className="text-[#00a2ad] font-extrabold text-xl shrink-0">
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

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
