"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BankingSolutionsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeTechCategory, setActiveTechCategory] = useState<string>("All");

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const bankClients = [
    { name: "AB Bank", logoText: "AB BANK" },
    { name: "City Bank", logoText: "CITY BANK" },
    { name: "IFIC Bank", logoText: "IFIC BANK" },
    { name: "United Commercial Bank", logoText: "UCB BANK" },
    { name: "Prime Bank", logoText: "PRIME BANK" },
    { name: "Eastern Bank", logoText: "EBL FINTECH" },
  ];

  const offeredServices = [
    {
      title: "Web & Internet Banking Platforms",
      desc: "High-security corporate and retail web banking portals built for frictionless multi-currency transfers, bill payments, and account statements.",
      icon: "🌐",
    },
    {
      title: "Core Banking Systems (CBS) Integration",
      desc: "Seamless integration, data migration, and API middleware layer connecting legacy core banking backends with modern digital channels.",
      icon: "🏦",
    },
    {
      title: "Mobile Financial Services (MFS) & E-Wallets",
      desc: "Next-gen iOS and Android e-wallet applications supporting P2P transfers, QR code merchant payments, mobile recharge, and micro-savings.",
      icon: "📱",
    },
    {
      title: "Digital Loan Origination Systems (LOS)",
      desc: "Automated credit scoring engines, digital KYC verification, document processing, and instant loan disbursement workflows.",
      icon: "📑",
    },
    {
      title: "Open Banking & API Gateways",
      desc: "PSD2-compliant secure Open Banking APIs enabling third-party fintech ecosystem integrations and embedded finance partnerships.",
      icon: "🔌",
    },
    {
      title: "Payment Gateway & Switch Integration",
      desc: "High-frequency payment processing pipelines integrating Visa, Mastercard, SWIFT, EFTN, RTGS, and instant settlement networks.",
      icon: "💳",
    },
    {
      title: "Card Management & Processing Systems",
      desc: "Comprehensive credit, debit, and prepaid card issuance, pin management, transaction authorization, and cardholder self-service portals.",
      icon: "🏧",
    },
    {
      title: "Cybersecurity Audit & Compliance",
      desc: "End-to-end vulnerability assessment, penetration testing, PCI-DSS Level 1 certification readiness, and ISO 27001 compliance auditing.",
      icon: "🛡️",
    },
    {
      title: "Robotic Process Automation (RPA) in Banking",
      desc: "Automating back-office reconciliation, cheque clearing, loan processing, compliance reporting, and customer onboarding tasks.",
      icon: "🤖",
    },
    {
      title: "Treasury & Cash Management Solutions",
      desc: "Real-time liquidity management, foreign exchange transaction tracking, corporate cash pooling, and automated sweep accounts.",
      icon: "📈",
    },
    {
      title: "Anti-Money Laundering (AML) & Automated KYC",
      desc: "Real-time sanction screening, PEP list matching, suspicious transaction monitoring, and biometric e-KYC verification pipelines.",
      icon: "🔍",
    },
    {
      title: "Wealth Management & Investment Portfolios",
      desc: "Robo-advisory engines, mutual fund trading portals, asset allocation dashboards, and real-time market data feed integration.",
      icon: "💼",
    },
  ];

  const technologies = [
    { name: "Java / Spring Boot", category: "Backend & Microservices" },
    { name: "Node.js / TypeScript", category: "API Middleware" },
    { name: "Python / FastApi", category: "AI & Risk Analytics" },
    { name: "React / Next.js", category: "Frontend & Portals" },
    { name: "Flutter / Swift / Kotlin", category: "Mobile Apps" },
    { name: "PostgreSQL / CockroachDB", category: "Databases" },
    { name: "Oracle DB / DB2", category: "Legacy Storage" },
    { name: "Apache Kafka", category: "Event Streaming" },
    { name: "Docker & Kubernetes", category: "Cloud & DevOps" },
    { name: "Redis / Memcached", category: "High-Speed Cache" },
    { name: "HashiCorp Vault", category: "Security & Secrets" },
    { name: "Prometheus & Grafana", category: "Monitoring & APM" },
  ];

  const sectors = [
    {
      title: "Commercial & Retail Banks",
      desc: "Modernize branchless banking, internet portals, and omni-channel customer experiences.",
      icon: "🏛️",
    },
    {
      title: "Financial Services & Asset Management",
      desc: "Automate portfolio management, fund accounting, and institutional trading gateways.",
      icon: "📊",
    },
    {
      title: "Banking & Fintech Solution Providers",
      desc: "Empower fintech founders to launch card programs, micro-lending, and digital wallets.",
      icon: "⚡",
    },
    {
      title: "Microfinance Institutions (MFIs)",
      desc: "Digitize field collection, mobile micro-loans, and paperless loan disbursements.",
      icon: "🤝",
    },
    {
      title: "Non-Banking Financial Companies (NBFCs)",
      desc: "Streamline lease financing, asset-backed credit evaluation, and compliance audits.",
      icon: "🏬",
    },
    {
      title: "Central Banks & Regulatory Bodies",
      desc: "Build automated regulatory reporting pipelines, RTGS monitoring, and audit trails.",
      icon: "📜",
    },
  ];

  const outcomes = [
    { val: "10M+", label: "Daily Financial Transactions", desc: "Engineered fault-tolerant transaction pipelines processing high transaction volumes effortlessly." },
    { val: "99.999%", label: "Core Banking Uptime", desc: "High-availability active-active microservices clusters with zero planned downtime." },
    { val: "70%", label: "Faster Loan Approvals", desc: "Automated digital credit scoring reduces loan processing time from days to under 5 minutes." },
    { val: "100%", label: "Regulatory Compliance Audit", desc: "Fully compliant with PCI-DSS Level 1, ISO 27001, OWASP Top 10, and central bank regulations." },
    { val: "85%", label: "Reduction in Fraud Incidents", desc: "Real-time AI transaction risk scoring detects and blocks unauthorized activity instantly." },
    { val: "24/7", label: "Real-Time Open Banking Sync", desc: "Bi-directional API gateways delivering sub-second balance checks and payment settlements." },
  ];

  const faqs = [
    {
      q: "How does Autofya ensure regulatory compliance and data security for banking software?",
      a: "All banking solutions developed by Autofya adhere strictly to international security standards, including PCI-DSS Level 1, ISO 27001, and SOC-2 Type II guidelines. We implement hardware security module (HSM) encryption, end-to-end payload encryption, multi-factor authentication (MFA), and zero-trust API architecture to protect sensitive financial data.",
    },
    {
      q: "Can you integrate new digital channels with legacy Core Banking Systems (CBS)?",
      a: "Yes. Autofya specializes in building decoupling API gateway layers and microservices wrappers around legacy core banking platforms like Finacle, Temenos T24, Flexcube, and custom mainframes. This allows financial institutions to launch modern mobile and web banking apps without touching fragile legacy core code.",
    },
    {
      q: "What is the typical timeline for developing a custom Mobile Banking App or E-Wallet?",
      a: "A feature-rich Enterprise Mobile Banking App or E-Wallet MVP usually takes 12 to 16 weeks from discovery to sandbox testing. Production launch timelines depend on core banking API readiness, third-party switch testing, and regulatory security audits.",
    },
    {
      q: "Do you offer post-launch 24/7 technical support and SLA maintenance?",
      a: "Yes. Autofya provides dedicated 24/7 L1/L2/L3 production engineering support, real-time APM telemetry monitoring, security patch management, and strict SLA guarantees up to 99.999% uptime for core banking workloads.",
    },
    {
      q: "How do you handle high-concurrency payment surges during peak hours?",
      a: "Our banking systems use event-driven microservice architectures built on Apache Kafka, Redis caching, and auto-scaling Kubernetes clusters. We perform extensive distributed load testing to ensure zero degradation even during peak festive billing hours.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0B1340] text-slate-100 font-sans">
      <Navbar />

      {/* ----------------- 1. HERO SECTION ----------------- */}
      <section className="relative pt-32 pb-20 bg-[#0B1340] overflow-hidden border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111A4E] border border-[#00a2ad]/30">
                <span className="w-2 h-2 rounded-full bg-[#00a2ad]"></span>
                <span className="text-xs font-bold tracking-widest text-[#00a2ad] uppercase">
                  FINANCIAL TECHNOLOGY & DIGITAL BANKING
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Banking & Financial Solutions
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Build, scale, and secure modern financial infrastructure. From core banking integration to digital wallets, instant credit scoring, and open banking API gateways.
              </p>

              {/* Stats badges */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-[#111A4E] rounded-xl border border-slate-700/60 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#00a2ad]">ISO 27001</div>
                  <div className="text-xs text-slate-300 mt-0.5">Certified Security</div>
                </div>
                <div className="p-3 bg-[#111A4E] rounded-xl border border-slate-700/60 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">PCI-DSS</div>
                  <div className="text-xs text-slate-300 mt-0.5">Level 1 Compliant</div>
                </div>
                <div className="p-3 bg-[#111A4E] rounded-xl border border-slate-700/60 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#00a2ad]">99.999%</div>
                  <div className="text-xs text-slate-300 mt-0.5">Core SLA Uptime</div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#contact"
                  className="px-7 py-3.5 bg-[#00a2ad] hover:bg-[#008a94] text-white font-bold text-base rounded-xl transition-all duration-200 shadow-md inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Talk to Banking Experts</span>
                  <span>→</span>
                </a>
                <a
                  href="#offered-services"
                  className="px-7 py-3.5 bg-[#111A4E] hover:bg-[#182366] text-slate-200 border border-slate-700 font-semibold text-base rounded-xl transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Services</span>
                </a>
              </div>
            </div>

            {/* Right Hero Visual (Digital Banking Telemetry Mockup) */}
            <div className="lg:col-span-6 relative">
              <div className="bg-[#111A4E] border border-slate-700/80 rounded-2xl p-5 shadow-2xl space-y-4">
                
                {/* Header Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-700/80">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                    <span className="ml-2 text-xs font-mono text-slate-400">autofya-cbs-gateway-v9.1</span>
                  </div>
                  <span className="px-2.5 py-0.5 bg-[#00a2ad]/20 text-[#00a2ad] text-xs font-semibold rounded">
                    ENCRYPTED NODE
                  </span>
                </div>

                {/* Dashboard Container inside Mockup */}
                <div className="grid grid-cols-12 gap-4">
                  {/* Left Column: Transaction Feed */}
                  <div className="col-span-7 bg-[#0B1340] p-4 rounded-xl border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-300">Live Transaction Stream</span>
                      <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded">
                        14,200 TPS Active
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 bg-[#111A4E] rounded border border-slate-700 flex justify-between items-center">
                        <div>
                          <div className="font-bold text-white">RTGS Settlement #8892</div>
                          <div className="text-[10px] text-slate-400">Core Bank A → Central Bank</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-emerald-400">+$250,000.00</div>
                          <div className="text-[9px] text-slate-400">0.04s Exec</div>
                        </div>
                      </div>

                      <div className="p-2.5 bg-[#111A4E] rounded border border-slate-700 flex justify-between items-center">
                        <div>
                          <div className="font-bold text-white">Mobile QR Merchant Payout</div>
                          <div className="text-[10px] text-slate-400">Wallet #40921 → Outlet Store</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-[#00a2ad]">+$1,280.00</div>
                          <div className="text-[9px] text-slate-400">0.01s Exec</div>
                        </div>
                      </div>

                      <div className="p-2.5 bg-[#111A4E] rounded border border-slate-700 flex justify-between items-center">
                        <div>
                          <div className="font-bold text-white">Digital Loan Origination</div>
                          <div className="text-[10px] text-slate-400">Micro-Credit #1042</div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-emerald-400">Approved ($5,000)</div>
                          <div className="text-[9px] text-slate-400">Auto Score: 780</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Security Status */}
                  <div className="col-span-5 bg-[#060C2C] p-3 rounded-xl border border-slate-800 space-y-3">
                    <div className="text-center pb-2 border-b border-slate-800">
                      <div className="text-xs font-bold text-white">Security & Audit</div>
                      <div className="text-[10px] text-[#00a2ad] font-semibold">Zero Fraud Detected</div>
                    </div>

                    <div className="space-y-2 text-[10px]">
                      <div className="p-2 bg-[#111A4E] rounded border border-slate-700 space-y-1">
                        <div className="text-slate-400 uppercase font-bold">HSM Key Rotation</div>
                        <div className="text-emerald-400 font-bold">✓ Active (256-bit AES)</div>
                      </div>

                      <div className="p-2 bg-[#111A4E] rounded border border-slate-700 space-y-1">
                        <div className="text-slate-400 uppercase font-bold">Open API Health</div>
                        <div className="text-white font-bold">99.999% Availability</div>
                      </div>

                      <div className="p-2 bg-[#00a2ad]/20 border border-[#00a2ad]/40 rounded text-center">
                        <div className="font-bold text-[#00a2ad]">PCI-DSS Audited</div>
                        <div className="text-slate-300 text-[9px]">Tokenized Data Vault</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- 2. OVERVIEW / VALUE PROPOSITION ----------------- */}
      <section className="py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
            DIGITAL BANKING EXCELLENCE
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1340] leading-snug">
            Empowering Modern Financial Institutions with Cloud-Native Banking Software
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            As customer expectations evolve, financial institutions require fast, resilient, and compliant technology stacks to remain competitive. Autofya builds custom internet banking applications, mobile wallets, digital loan origination engines, open banking microservices, and core banking middleware engineered for high transaction velocity and uncompromised security.
          </p>
        </div>
      </section>

      {/* ----------------- 3. OFFERED SERVICES ----------------- */}
      <section id="offered-services" className="py-20 bg-[#0B1340] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
              END-TO-END CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Offered Services
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Comprehensive software engineering and technical consulting tailored specifically for banks and financial institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offeredServices.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all duration-300 text-slate-900 group"
              >
                <div className="w-14 h-14 bg-[#0B1340] rounded-xl flex items-center justify-center text-2xl mb-6 text-[#00a2ad]">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0B1340] mb-3 group-hover:text-[#00a2ad] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 4. TECHNOLOGIES WE USE ----------------- */}
      <section className="py-20 bg-[#F8FAFC] text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
              ENTERPRISE STACK
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
              Technologies We Use
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We leverage battle-tested, high-performance technology stacks designed for mission-critical financial applications.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 text-center space-y-2 hover:border-[#00a2ad] shadow-sm transition-all"
              >
                <div className="w-10 h-10 bg-[#0B1340] rounded-xl flex items-center justify-center text-white font-bold text-sm mx-auto mb-3">
                  {tech.name.substring(0, 2)}
                </div>
                <h3 className="text-base font-bold text-[#0B1340]">{tech.name}</h3>
                <p className="text-xs font-semibold text-[#00a2ad]">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 5. INDUSTRIES / SECTORS SERVED ----------------- */}
      <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
              FINANCIAL DOMAINS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
              Financial Sectors We Serve
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Tailored software architectures designed for specific financial regulatory frameworks and operational models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sec, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200 hover:border-[#00a2ad] transition-all space-y-4 group"
              >
                <div className="text-4xl">{sec.icon}</div>
                <h3 className="text-xl font-bold text-[#0B1340] group-hover:text-[#00a2ad] transition-colors">
                  {sec.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {sec.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 6. CLIENT PROOF BAR ----------------- */}
      <section className="py-12 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-widest mb-8">
            TRUSTED BY INSTITUTIONAL BANKS & FINANCIAL INSTITUTIONS
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {bankClients.map((client, idx) => (
              <div
                key={idx}
                className="h-14 bg-white rounded-xl border border-slate-200 flex items-center justify-center p-3 shadow-sm hover:border-[#00a2ad] transition-colors"
              >
                <span className="text-xs sm:text-sm font-black text-[#0B1340] tracking-wider">
                  {client.logoText}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 7. SECURITY, COMPLIANCE & RESILIENCE BANNER ----------------- */}
      <section className="py-16 bg-[#0B1340] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#111A4E] border border-[#00a2ad]/40 rounded-2xl p-8 sm:p-12 text-center space-y-8">
            <div className="max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
                ZERO-TRUST ARCHITECTURE
              </span>
              <h2 className="text-3xl font-extrabold text-white">
                Bank-Grade Security & Governance
              </h2>
              <p className="text-sm sm:text-base text-slate-300">
                Protecting financial assets with multi-layered cryptography, hardware security modules, and strict compliance controls.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="p-6 bg-[#0B1340] rounded-xl border border-slate-800 space-y-3">
                <div className="text-2xl text-[#00a2ad]">🔐</div>
                <h3 className="text-lg font-bold text-white">PCI-DSS Level 1 & ISO 27001</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Full compliance auditing for credit card data vaulting, tokenization, and physical data center governance.
                </p>
              </div>

              <div className="p-6 bg-[#0B1340] rounded-xl border border-slate-800 space-y-3">
                <div className="text-2xl text-[#00a2ad]">⚡</div>
                <h3 className="text-lg font-bold text-white">99.999% Availability SLA</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Active-active multi-datacenter deployment ensure your banking channels remain online through hardware failures.
                </p>
              </div>

              <div className="p-6 bg-[#0B1340] rounded-xl border border-slate-800 space-y-3">
                <div className="text-2xl text-[#00a2ad]">🛡️</div>
                <h3 className="text-lg font-bold text-white">Real-Time Risk & Fraud Scoring</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Machine learning anomaly detection algorithms flag suspicious transfers and account takeover attempts in milliseconds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 8. MEASURABLE BANKING OUTCOMES ----------------- */}
      <section className="py-20 bg-[#060C2C] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
              PROVEN RESULTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Measurable Banking Outcomes
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Tangible performance metrics delivered across institutional banking deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {outcomes.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#111A4E] p-8 rounded-2xl border border-slate-700/80 space-y-3 hover:border-[#00a2ad] transition-all"
              >
                <div className="text-4xl font-extrabold text-[#00a2ad]">{item.val}</div>
                <h3 className="text-lg font-bold text-white">{item.label}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 9. CASE STUDY SPOTLIGHT ----------------- */}
      <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B1340] rounded-3xl p-8 sm:p-12 text-white border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3 py-1 bg-[#00a2ad] text-white text-xs font-bold rounded uppercase tracking-wider">
                FEATURED BANKING CASE STUDY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold leading-snug">
                Building a Next-Generation Digital Wallet Platform Processing $500M+ Annually
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Autofya architected and launched a cloud-native Mobile Financial Services (MFS) platform for a major commercial bank. The solution supported instant QR merchant payments, micro-savings, and seamless core banking API integration.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="bg-[#111A4E] p-3 rounded-xl border border-slate-700 text-center">
                  <div className="text-xl font-bold text-[#00a2ad]">5M+</div>
                  <div className="text-[11px] text-slate-400">Active Users</div>
                </div>
                <div className="bg-[#111A4E] p-3 rounded-xl border border-slate-700 text-center">
                  <div className="text-xl font-bold text-white">$500M+</div>
                  <div className="text-[11px] text-slate-400">Annual Volume</div>
                </div>
                <div className="bg-[#111A4E] p-3 rounded-xl border border-slate-700 text-center">
                  <div className="text-xl font-bold text-[#00a2ad]">99.999%</div>
                  <div className="text-[11px] text-slate-400">System Availability</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#111A4E] p-6 rounded-2xl border border-slate-700 space-y-4">
              <h3 className="text-lg font-bold text-white">Technical Highlights</h3>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#00a2ad] font-bold">✓</span>
                  <span>Event-driven Kafka microservices for sub-second P2P transfers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00a2ad] font-bold">✓</span>
                  <span>Biometric e-KYC integration reducing onboarding from 2 days to 3 minutes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00a2ad] font-bold">✓</span>
                  <span>Full PCI-DSS Level 1 compliance certification achieved on initial audit.</span>
                </li>
              </ul>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="block text-center py-3 bg-[#00a2ad] hover:bg-[#008a94] text-white font-bold text-xs rounded-xl transition-all"
                >
                  Schedule Technical Architecture Review
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- 10. FAQ & CONTACT CTA SECTION ----------------- */}
      <section id="contact" className="py-20 bg-[#0B1340]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-3xl font-extrabold text-white">
                Banking Solutions FAQ
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-[#111A4E] rounded-xl border border-slate-700/80 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left p-5 text-base font-bold text-white flex justify-between items-center cursor-pointer hover:text-[#00a2ad] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span className="text-[#00a2ad] text-lg font-bold ml-4">
                      {openFaqIndex === idx ? "−" : "+"}
                    </span>
                  </button>
                  {openFaqIndex === idx && (
                    <div className="px-5 pb-5 text-sm text-slate-300 leading-relaxed border-t border-slate-700/50 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Contact CTA Card */}
          <div className="bg-[#111A4E] rounded-3xl p-8 sm:p-12 border border-[#00a2ad]/40 text-center space-y-8 max-w-5xl mx-auto shadow-2xl">
            <div className="max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
                LET US HELP YOU WITH YOUR PROJECT
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Ready to Modernize Your Banking Technology?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Connect directly with an Autofya banking technology architect to discuss custom core integration, MFS apps, or open banking compliance.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! An Autofya banking solution architect will contact you shortly.");
              }}
              className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-left"
            >
              <input
                type="text"
                required
                placeholder="Full Name"
                className="px-4 py-3.5 bg-[#0B1340] border border-slate-700 rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#00a2ad]"
              />
              <input
                type="email"
                required
                placeholder="Work Email Address"
                className="px-4 py-3.5 bg-[#0B1340] border border-slate-700 rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#00a2ad]"
              />
              <input
                type="text"
                required
                placeholder="Institution / Bank Name"
                className="px-4 py-3.5 bg-[#0B1340] border border-slate-700 rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#00a2ad]"
              />
              <input
                type="tel"
                placeholder="Phone Number (Optional)"
                className="px-4 py-3.5 bg-[#0B1340] border border-slate-700 rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#00a2ad]"
              />
              <div className="sm:col-span-2 pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#00a2ad] hover:bg-[#008a94] text-white font-extrabold text-base rounded-xl transition-all duration-200 shadow-lg cursor-pointer"
                >
                  Request Consultation Now
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
