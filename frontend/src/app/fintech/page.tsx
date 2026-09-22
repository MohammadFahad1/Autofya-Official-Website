"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScheduleModal } from "@/components/ScheduleModalContext";

export default function FintechPage() {
  const { openScheduleModal } = useScheduleModal();
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeCaseStudyFilter, setActiveCaseStudyFilter] = useState<string>("All");

  const solutionTabs = [
    {
      id: "digital-banking",
      title: "Digital Banking",
      heading: "Digital Banking Solutions",
      desc: "Build feature-rich mobile and web banking platforms with multi-currency support, instant transfers, core banking API integration, e-KYC, and real-time transaction monitoring.",
      features: [
        "Cloud-native core banking microservices architecture",
        "Multi-currency accounts & FX auto-conversion",
        "Biometric authentication & seamless e-KYC onboarding",
        "Open API gateway for third-party fintech integrations",
      ],
      badge: "Core Banking",
      statValue: "100K+",
      statLabel: "Daily Transactions",
    },
    {
      id: "payments-remittance",
      title: "Payments & Remittance",
      heading: "Cross-Border Payments & Remittance Engine",
      desc: "Empower global users with instant cross-border payments, multi-channel payout networks, ISO 20022 message compliance, and automated FX margin optimization.",
      features: [
        "SWIFT & ISO 20022 payment messaging protocol support",
        "Instant P2P & B2B payment settlement pipelines",
        "Automated foreign exchange risk & hedging controls",
        "Multi-tier merchant checkout SDKs for web & mobile",
      ],
      badge: "Global Payments",
      statValue: "<2s",
      statLabel: "Settlement Speed",
    },
    {
      id: "lending-credit",
      title: "Lending & Credit",
      heading: "Automated Loan Origination & Credit Scoring",
      desc: "Accelerate loan approvals with AI-driven credit scoring models, digital document verification, flexible BNPL (Buy-Now-Pay-Later) rules, and debt collection automation.",
      features: [
        "AI credit scoring engine using alternative data points",
        "Automated document OCR & bank statement parsing",
        "Flexible loan underwriting & risk tiering workflows",
        "Integrated debt recovery & repayment schedule tracking",
      ],
      badge: "Credit Tech",
      statValue: "4.5x",
      statLabel: "Faster Underwriting",
    },
    {
      id: "insurtech",
      title: "Insurtech",
      heading: "Digital Insurance & Claims Automation",
      desc: "Transform traditional insurance operations with instant policy issuance, automated claims FNOL triage, parametric risk underwriting, and agent portals.",
      features: [
        "Omni-channel self-service policyholder app",
        "AI image damage assessment & fast-track claim payouts",
        "Dynamic actuarial pricing & risk evaluation engines",
        "Broker and agency digital onboarding pipelines",
      ],
      badge: "Insurance 360",
      statValue: "70%",
      statLabel: "Faster Claims Triage",
    },
    {
      id: "wealth-tech",
      title: "Wealth Tech",
      heading: "Robo-Advisory & Investment Platforms",
      desc: "Provide retail and institutional investors with automated portfolio rebalancing, real-time market data analytics, stock/ETF trading, and fractional share investing.",
      features: [
        "Algorithmic portfolio allocation & robo-advisory engine",
        "Real-time WebSocket market ticker feed integration",
        "Fractional stock trading & dividend distribution",
        "Automated tax-loss harvesting & compliance reports",
      ],
      badge: "Capital Markets",
      statValue: "99.99%",
      statLabel: "Feed Uptime",
    },
    {
      id: "crypto-defi",
      title: "Crypto & DeFi",
      heading: "Web3 Infrastructure & Asset Tokenization",
      desc: "Bridge traditional finance with Web3 using secure multi-sig custody, stablecoin settlement gateways, asset tokenization engines, and smart contract audit systems.",
      features: [
        "MPC (Multi-Party Computation) non-custodial wallets",
        "Fiat-to-crypto & stablecoin payment gateways",
        "Smart contract creation & automated security auditing",
        "Tokenized asset issuance & compliance tracking",
      ],
      badge: "Web3 Finance",
      statValue: "Zero",
      statLabel: "Exploit Record",
    },
  ];

  const financialClients = [
    { name: "VISA", tag: "Payment Partner" },
    { name: "MASTERCARD", tag: "Card Issuer" },
    { name: "SWIFT", tag: "Messaging Protocol" },
    { name: "PAYPAL", tag: "Digital Payments" },
    { name: "CITY BANK", tag: "Banking Client" },
    { name: "EBL FINTECH", tag: "Financial Services" },
  ];

  const customCapabilities = [
    {
      id: "overview",
      title: "Digital Banking & Core Systems",
      desc: "Modernize legacy banking infrastructures with cloud-native microservices architecture, real-time ledger accounting, and 24/7 high-availability databases.",
      icon: "🏦",
      tag: "Core Infrastructure",
    },
    {
      id: "key-features",
      title: "Payment Gateway & Switch Integration",
      desc: "Fast, secure multi-currency payment integration supporting global card networks, EFTN, RTGS, QR merchant payments, and instant settlement channels.",
      icon: "💳",
      tag: "Payment Switch",
    },
    {
      id: "technology-architecture",
      title: "AI Fraud Detection & Risk Analytics",
      desc: "Machine learning algorithms to monitor transaction streams, detect anomalous pattern behavior, automate velocity checks, and block fraudulent activity in under 50ms.",
      icon: "🛡️",
      tag: "AI Security",
    },
    {
      id: "security-compliance",
      title: "RegTech & Automated Compliance",
      desc: "Stay fully compliant with PCI-DSS Level 1, GDPR, KYC/AML regulatory standards using automated identity verification, sanction screening, and audit trail logs.",
      icon: "📜",
      tag: "Regulatory Tech",
    },
    {
      id: "open-banking",
      title: "Open Banking & API Ecosystems",
      desc: "PSD2 and Open Banking compliant APIs enabling third-party fintech developers, embedded finance partnerships, and unified account aggregation.",
      icon: "🔌",
      tag: "API Economy",
    },
    {
      id: "case-studies",
      title: "Neobanking & Mobile Wallet Platforms",
      desc: "Feature-rich iOS and Android digital wallet applications with biometric login, QR payments, P2P transfers, bill pay, and push notifications.",
      icon: "📱",
      tag: "Mobile Apps",
    },
  ];

  const securityCards = [
    {
      title: "ISO 27001 Certified",
      desc: "Rigorous information security management system ensuring maximum data protection and confidentiality.",
      icon: "🔒",
    },
    {
      title: "PCI-DSS Level 1 Compliance",
      desc: "Highest level of payment security certification for cardholder data processing and storage.",
      icon: "💳",
    },
    {
      title: "Automated KYC & AML",
      desc: "Real-time sanction list screening, PEP checks, and biometric document verification pipelines.",
      icon: "👤",
    },
    {
      title: "256-Bit AES Encryption",
      desc: "Bank-grade data encryption across all transaction channels, both at rest and in transit.",
      icon: "🔐",
    },
    {
      title: "Zero-Trust Architecture",
      desc: "Granular access controls, mTLS authentication, and identity verification for every internal microservice.",
      icon: "🛡️",
    },
    {
      title: "Regulatory Audit Support",
      desc: "Comprehensive immutable audit log trails and automated compliance reporting for central bank audits.",
      icon: "📊",
    },
  ];

  const featuredProducts = [
    {
      code: "REMIT 23",
      title: "Autofya Remit - Cross-Border Money Transfer Engine",
      desc: "Enterprise-grade remittance software platform with automated FX rate engine, agent management network, instant payout integrations, and regulatory compliance rules.",
      features: ["Real-time FX margin optimization", "Multi-country payout network APIs", "Automated anti-fraud transaction checks"],
      accent: "from-cyan-500 to-blue-600",
    },
    {
      code: "WALLET 23",
      title: "Autofya Wallet - Next-Gen White-Label E-Wallet",
      desc: "Turnkey digital wallet solution for banks and telecom providers supporting QR merchant payments, micro-lending, instant P2P transfers, and loyalty rewards.",
      features: ["Biometric login & device binding", "Merchant QR payment settlement", "Micro-savings & interest engines"],
      accent: "from-blue-600 to-indigo-700",
    },
  ];

  const techStackCategories = [
    {
      name: "Backend & Microservices",
      items: ["Java / Spring Boot", "Node.js / TypeScript", "Go (Golang)", "Python / FastAPI"],
    },
    {
      name: "Frontend & Mobile",
      items: ["React / Next.js", "Flutter", "React Native", "Swift / Kotlin"],
    },
    {
      name: "Cloud & Infrastructure",
      items: ["AWS Fintech Cloud", "Microsoft Azure", "Google Cloud Platform", "Kubernetes & Docker"],
    },
    {
      name: "Security, Data & Event Streaming",
      items: ["PostgreSQL & CockroachDB", "Apache Kafka", "Redis Cache", "HashiCorp Vault"],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* TOP ANNOUNCEMENT BANNER */}
      <div className="bg-gradient-to-r from-[#00a2ad] via-[#0284c7] to-[#0f172a] text-white py-2.5 px-4 text-center text-xs sm:text-sm font-medium flex items-center justify-center gap-3 shadow-inner">
        <span>⚡ Talk to our fintech experts about building your enterprise financial platform.</span>
        <button
          onClick={() => openScheduleModal("Fintech & Digital Wallet")}
          className="bg-amber-400 hover:bg-amber-300 text-slate-950 px-3 py-1 rounded-full text-xs font-bold transition-all transform hover:scale-105 shadow-md"
        >
          Contact Us
        </button>
      </div>

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative bg-[#070E28] text-white pt-16 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
        {/* Abstract Background Tech Pattern */}
        <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 to-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Hero Left Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                Fintech
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-white">
                Launch Enterprise-Grade <br />
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-amber-300 bg-clip-text text-transparent">
                  Fintech Solutions
                </span>{" "}
                in Weeks
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                Accelerate your financial ecosystem with custom digital banking, payment processing, fraud prevention, and AI-driven fintech software engineered by Autofya for bank-grade scale and compliance.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => openScheduleModal("Fintech & Digital Wallet")}
                  className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-amber-400/20 transition-all text-base flex items-center gap-2 group cursor-pointer"
                >
                  <span>Schedule a Call</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
                <a
                  href="#solutions"
                  className="bg-slate-800/80 hover:bg-slate-800 text-white font-semibold px-7 py-4 rounded-xl border border-slate-700 hover:border-slate-500 transition-all text-base cursor-pointer"
                >
                  Explore Solutions
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1.5 text-slate-300">
                  <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  PCI-DSS Level 1 Ready
                </span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  ISO 27001 Certified
                </span>
                <span className="flex items-center gap-1.5 text-slate-300">
                  <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  99.99% Guaranteed SLA
                </span>
              </div>
            </div>

            {/* Hero Right Column - Video / Media Card Box */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl p-1.5 bg-gradient-to-b from-cyan-500/40 via-blue-600/20 to-slate-800/80 shadow-2xl backdrop-blur-xl">
                <div className="bg-[#0B1340] rounded-xl overflow-hidden border border-slate-700/60 p-5 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="ml-2 text-xs font-bold text-slate-300 uppercase tracking-wide">
                        FINTECH SOLUTIONS BY AUTOFYA
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-cyan-400 bg-cyan-950 px-2.5 py-0.5 rounded-full border border-cyan-800">
                      LIVE DEMO
                    </span>
                  </div>

                  <div className="relative w-full aspect-video rounded-lg overflow-hidden group cursor-pointer border border-slate-700/80">
                    <Image
                      src="/fintech_hero_thumb.jpg"
                      alt="Autofya Fintech Solutions Presentation"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-red-600 group-hover:bg-red-500 text-white flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-all border-2 border-white/80">
                        <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md p-3 rounded-lg border border-slate-700 flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-white leading-tight">
                          Enterprise Digital Banking Platform
                        </h4>
                        <p className="text-xs text-slate-400">Watch full architecture breakdown (3:45)</p>
                      </div>
                      <span className="text-xs font-bold text-amber-400">Autofya Tech</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-center pt-2">
                    <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                      <div className="text-lg font-bold text-cyan-400">$18.7B+</div>
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">Processed</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                      <div className="text-lg font-bold text-amber-400">5M+</div>
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">Active Users</div>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                      <div className="text-lg font-bold text-emerald-400">6 Weeks</div>
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">Avg Launch</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: ONE-STOP FINANCIAL TECHNOLOGY SOLUTION (INTERACTIVE TABBED DISPLAY) */}
      <section id="solutions" className="py-20 lg:py-28 bg-slate-50 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#00a2ad] font-extrabold text-sm uppercase tracking-widest block mb-2">
              Capabilities Ecosystem
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340] tracking-tight">
              One-Stop Financial Technology Solution
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              From retail banking to capital markets, we deliver end-to-end software solutions designed to transform financial operations and customer experience.
            </p>
          </div>

          {/* Pill Navigation Tabs */}
          <div className="flex items-center justify-start lg:justify-center overflow-x-auto gap-2 pb-4 mb-8 no-scrollbar">
            {solutionTabs.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(idx)}
                  className={`px-5 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 border ${
                    isActive
                      ? "bg-[#0B1340] text-white border-[#0B1340] shadow-lg shadow-blue-950/20"
                      : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100"
                  }`}
                >
                  <span className={`w-2 h-2 rounded-full ${isActive ? "bg-amber-400" : "bg-slate-400"}`}></span>
                  {tab.title}
                </button>
              );
            })}
          </div>

          {/* Active Tab Showcase Box */}
          {solutionTabs[activeTab] && (
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center transition-all">
              {/* Tab Left Info */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-50 text-[#00a2ad] text-xs font-bold uppercase tracking-wider">
                  <span>{solutionTabs[activeTab].badge}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1340]">
                  {solutionTabs[activeTab].heading}
                </h3>

                <p className="text-base text-slate-600 leading-relaxed">
                  {solutionTabs[activeTab].desc}
                </p>

                <div className="space-y-3 pt-2">
                  {solutionTabs[activeTab].features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-cyan-100 text-[#00a2ad] flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span className="text-sm font-medium text-slate-800">{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-4">
                  <button
                    onClick={() => openScheduleModal("Fintech & Digital Wallet")}
                    className="bg-[#00a2ad] hover:bg-[#008993] text-white font-bold px-6 py-3.5 rounded-xl shadow-md transition-all text-sm flex items-center gap-2 cursor-pointer"
                  >
                    <span>Request Custom Demo</span>
                    <span>→</span>
                  </button>
                </div>
              </div>

              {/* Tab Right Dynamic Visual Mockup */}
              <div className="lg:col-span-5">
                <div className="relative rounded-2xl bg-gradient-to-br from-[#0B1340] to-slate-900 p-8 text-white shadow-2xl border border-slate-800 space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                      SYSTEM ARCHITECTURE
                    </span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                  </div>

                  <div className="space-y-4">
                    <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between">
                      <div>
                        <div className="text-xs text-slate-400">Core Metric Performance</div>
                        <div className="text-2xl font-black text-amber-400">
                          {solutionTabs[activeTab].statValue}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-slate-400">SLA Metric</div>
                        <div className="text-xs font-bold text-cyan-400">
                          {solutionTabs[activeTab].statLabel}
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-2">
                      <div className="flex justify-between text-xs font-semibold text-slate-300">
                        <span>API Gateway Security</span>
                        <span className="text-emerald-400">Active (100%)</span>
                      </div>
                      <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-cyan-400 to-emerald-400 h-full w-full"></div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 space-y-2">
                      <div className="flex justify-between text-xs font-semibold text-slate-300">
                        <span>Microservice Latency</span>
                        <span className="text-cyan-400">&lt;12ms</span>
                      </div>
                      <div className="w-full bg-slate-700 h-2 rounded-full overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-400 to-cyan-400 h-full w-[85%]"></div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center text-[11px] text-slate-400 font-medium pt-2">
                    Autofya Financial Middleware Suite • PCI-DSS Certified
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 3: TRUSTED BY FINANCIAL INSTITUTIONS BANNER */}
      <section className="py-12 bg-[#0B1340] text-white border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">
            Trusted by 100+ Leading Financial Institutions & Fintech Innovators Worldwide
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {financialClients.map((client, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 rounded-xl py-4 px-3 text-center transition-all group"
              >
                <div className="text-base font-black tracking-wider text-slate-300 group-hover:text-cyan-400 transition-colors">
                  {client.name}
                </div>
                <div className="text-[10px] text-slate-500 font-medium uppercase mt-0.5">
                  {client.tag}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: FROM PROOF OF CONCEPT TO SCALE - CUSTOM FINTECH SOLUTIONS */}
      <section id="features" className="py-20 lg:py-28 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Sticky Sidebar Navigation */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6">
              <span className="text-[#00a2ad] font-extrabold text-sm uppercase tracking-widest block">
                End-to-End Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340] leading-tight">
                From Proof of Concept to Scale - Custom Fintech Solutions
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Engineering high-throughput, bank-compliant platforms tailored to your business model.
              </p>

              <div className="hidden lg:block pt-4 space-y-2 border-t border-slate-200">
                {customCapabilities.map((item) => (
                  <a
                    key={item.id}
                    href={`#cap-${item.id}`}
                    className="block py-2 text-sm font-semibold text-slate-600 hover:text-[#00a2ad] transition-colors border-l-2 border-transparent hover:border-[#00a2ad] pl-3"
                  >
                    {item.title}
                  </a>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => openScheduleModal("Fintech & Digital Wallet")}
                  className="w-full bg-[#0B1340] hover:bg-slate-900 text-white font-bold py-3.5 px-6 rounded-xl shadow-lg transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Discuss Your Project</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Right Feature Cards Vertical Grid */}
            <div className="lg:col-span-8 space-y-6">
              {customCapabilities.map((cap) => (
                <div
                  key={cap.id}
                  id={`cap-${cap.id}`}
                  className="bg-[#0B1340] text-white p-8 rounded-2xl border border-slate-800 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 text-2xl flex items-center justify-center border border-slate-700 group-hover:scale-110 transition-transform">
                      {cap.icon}
                    </div>
                    <span className="text-xs font-bold text-cyan-400 bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700">
                      {cap.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {cap.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: SUCCESS STORIES / CASE STUDY */}
      <section id="case-studies" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[#00a2ad] font-extrabold text-sm uppercase tracking-widest block mb-2">
                Proven Track Record
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340] tracking-tight">
                Success Stories
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              {["All", "Digital Wallet", "Banking", "Payments"].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveCaseStudyFilter(filter)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeCaseStudyFilter === filter
                      ? "bg-[#00a2ad] text-white"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Case Study Card */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Image Side */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-[420px] bg-gradient-to-br from-indigo-900 via-slate-900 to-slate-950 p-6 flex items-center justify-center">
              <div className="relative w-full h-full max-h-[360px] rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                <Image
                  src="/cs_digital_wallet.jpg"
                  alt="Digital Wallet Case Study"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Case Study Content */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-[#00a2ad] text-xs font-bold uppercase tracking-wider mb-4">
                  <span>FINTECH CASE STUDY</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1340] leading-snug">
                  Fueling Financial Inclusion through Digital Wallet Solutions
                </h3>

                <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                  Autofya engineered a high-throughput mobile e-wallet ecosystem supporting millions of daily retail transactions, instant P2P payments, QR merchant checkouts, and micro-savings programs for unbanked populations.
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 py-4 border-y border-slate-100">
                <div>
                  <div className="text-2xl font-black text-[#0B1340]">99.99%</div>
                  <div className="text-xs text-slate-500 font-medium">Uptime Guarantee</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-[#00a2ad]">3x</div>
                  <div className="text-xs text-slate-500 font-medium">Faster Settlement</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-amber-500">40%</div>
                  <div className="text-xs text-slate-500 font-medium">OpEx Reduction</div>
                </div>
              </div>

              <div>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center text-sm font-bold text-[#00a2ad] hover:text-[#008993] transition-colors group cursor-pointer"
                >
                  <span>Read Full Case Study</span>
                  <span className="ml-1.5 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: ENTERPRISE-GRADE SECURITY & COMPLIANCE FIRST */}
      <section className="py-20 lg:py-28 bg-[#070E28] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-cyan-400 font-extrabold text-sm uppercase tracking-widest block mb-2">
              Bank-Grade Trust
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Enterprise-Grade Security & Compliance First
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Bank-level encryption, multi-layered security protocols, and strict regulatory adherence built into every line of code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityCards.map((sec, idx) => (
              <div
                key={idx}
                className="bg-[#0B1340] border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="text-3xl mb-4">{sec.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {sec.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {sec.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: FEATURED AUTOFYA FINTECH PRODUCTS */}
      <section className="py-20 lg:py-28 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00a2ad] font-extrabold text-sm uppercase tracking-widest block mb-2">
              Turnkey Software Platforms
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340] tracking-tight">
              Featured Autofya Fintech Products
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 font-normal">
              Accelerate your time-to-market with our pre-built, white-label fintech platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProducts.map((prod, idx) => (
              <div
                key={idx}
                className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl flex flex-col justify-between space-y-6 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 bg-gradient-to-l from-cyan-500 to-blue-600 text-white font-black text-xs px-4 py-1.5 rounded-bl-xl tracking-wider">
                  {prod.code}
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {prod.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {prod.desc}
                  </p>

                  <div className="space-y-2 pt-2">
                    {prod.features.map((f, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                        <span className="text-cyan-400">❖</span>
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => openScheduleModal("Fintech & Digital Wallet")}
                    className="bg-[#00a2ad] hover:bg-[#008993] text-white font-bold text-xs px-5 py-2.5 rounded-lg transition-all cursor-pointer"
                  >
                    Request Product Demo
                  </button>
                  <span className="text-xs text-slate-400 font-medium">Autofya Proprietary</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: TECH STACK GRID */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1340]">
              Fintech Technology Stack
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Modern frameworks and infrastructure backing our financial deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStackCategories.map((cat, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <h4 className="text-sm font-bold text-[#0B1340] border-b border-slate-100 pb-2">
                  {cat.name}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, iIdx) => (
                    <span
                      key={iIdx}
                      className="bg-slate-100 text-slate-800 text-xs font-semibold px-2.5 py-1 rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9: CALL TO ACTION BANNER */}
      <section className="py-20 bg-[#0B1340] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ready to Build Your Next Fintech Product?
          </h2>
          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Partner with Autofya to accelerate your financial technology roadmap with enterprise-grade engineering, strict regulatory compliance, and rapid time-to-market.
          </p>
          <div className="pt-4">
            <button
              onClick={() => openScheduleModal("Fintech & Digital Wallet")}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-base px-9 py-4 rounded-xl shadow-xl transition-all transform hover:scale-105 cursor-pointer"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
