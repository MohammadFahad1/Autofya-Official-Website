"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlockchainDevelopmentPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeEcosystemTab, setActiveEcosystemTab] = useState<string>("ethereum");

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const capabilities = [
    {
      title: "Smart Contract Engineering",
      desc: "Automated, audit-verified Solidity, Rust, and Vyper smart contracts for DeFi protocols, tokenomics, and automated agreements.",
      icon: "📜",
    },
    {
      title: "Public & Private Blockchain",
      desc: "Enterprise node deployments across Hyperledger Fabric, Ethereum L2s, Polygon, Solana, and Quorum private networks.",
      icon: "🔗",
    },
    {
      title: "Decentralized Apps (dApps)",
      desc: "High-speed Web3 frontend interfaces built with Next.js, Ethers.js, and Web3.js, featuring seamless wallet integrations.",
      icon: "⚡",
    },
    {
      title: "Tokenization & Asset Digitization",
      desc: "Real-World Asset (RWA) tokenization, NFT marketplaces, ERC-20 / ERC-721 token standards, and digital security tokens.",
      icon: "🪙",
    },
    {
      title: "Crypto Payment Gateways & Wallets",
      desc: "Non-custodial multi-chain wallet development, payment API integration, and fiat-to-crypto ramp onboarding.",
      icon: "💳",
    },
    {
      title: "Security Audits & Protocols",
      desc: "Rigorous smart contract auditing, vulnerability scanning, formal verification, and zero-knowledge (ZK) privacy solutions.",
      icon: "🛡️",
    },
  ];

  const customServices = [
    {
      title: "Smart Contract Audit & Dev",
      desc: "Security-first smart contract engineering and automated vulnerability scanning.",
      icon: "🔐",
    },
    {
      title: "DeFi Protocol Development",
      desc: "Decentralized exchanges (DEX), yield farming, liquidity pools, and staking protocols.",
      icon: "📈",
    },
    {
      title: "NFT & Marketplace Dev",
      desc: "Custom NFT minting engines, IPFS metadata hosting, and gas-optimized marketplaces.",
      icon: "🖼️",
    },
    {
      title: "Web3 dApp Frontend",
      desc: "Sub-second React/Next.js interfaces with RainbowKit, Wagmi, and WalletConnect.",
      icon: "💻",
    },
    {
      title: "Enterprise Ledger Systems",
      desc: "Hyperledger Fabric and Besu networks for permissioned supply chain tracking.",
      icon: "🏢",
    },
    {
      title: "Asset Tokenization (RWA)",
      desc: "Digitizing real estate, commodities, and private equity onto compliance-ready ledgers.",
      icon: "🏛️",
    },
    {
      title: "Custom Crypto Wallets",
      desc: "Secure MPC (Multi-Party Computation) and account abstraction (ERC-4337) wallets.",
      icon: "🔑",
    },
    {
      title: "Web3 & Tokenomics Consulting",
      desc: "Token economics design, regulatory compliance mapping, and protocol architecture.",
      icon: "🧠",
    },
  ];

  const ecosystems = [
    {
      id: "ethereum",
      name: "Ethereum",
      title: "Ethereum & L2 Scaling Solutions",
      desc: "Build EVM-compatible smart contracts, dApps, and Layer-2 scaling integrations using Arbitrum, Optimism, and Base.",
      badge: "EVM Standard",
    },
    {
      id: "hyperledger",
      name: "Hyperledger",
      title: "Hyperledger Fabric for Enterprise",
      desc: "Permissioned enterprise blockchain infrastructure with private channels, chaincode in Go/Node.js, and MSP identity governance.",
      badge: "Enterprise B2B",
    },
    {
      id: "polygon",
      name: "Polygon",
      title: "Polygon PoS & ZK-Rollups",
      desc: "Ultra-low gas fee micro-transactions, high-throughput dApps, and ZK-EVM zero-knowledge scaling solutions.",
      badge: "High Velocity",
    },
    {
      id: "solana",
      name: "Solana",
      title: "Solana High-Performance Protocol",
      desc: "Sub-second block times and ultra-fast transaction processing built in Rust for high-frequency trading and Web3 gaming.",
      badge: "High TPS",
    },
    {
      id: "chainlink",
      name: "Chainlink",
      title: "Chainlink Decentralized Oracles",
      desc: "Connecting on-chain smart contracts with off-chain real-world price feeds, API data, and Cross-Chain Interoperability Protocol (CCIP).",
      badge: "Oracles & CCIP",
    },
  ];

  const currentEcosystem =
    ecosystems.find((e) => e.id === activeEcosystemTab) || ecosystems[0];

  const clientLogos = [
    { name: "IEEE", label: "IEEE Blockchain" },
    { name: "Hyperledger", label: "Hyperledger Member" },
    { name: "Polygon", label: "Polygon Ecosystem" },
    { name: "Ethereum", label: "EVM Network" },
    { name: "Chainlink", label: "Chainlink Partner" },
    { name: "Solana", label: "Solana Foundation" },
  ];

  const faqs = [
    {
      question: "Why choose Autofya for Enterprise Blockchain & Web3 development?",
      answer:
        "Autofya brings certified blockchain architects, smart contract security auditors, and Web3 developers with deep experience in Ethereum, Hyperledger Fabric, Polygon, and Solana. We combine security-first smart contract engineering with sub-second Next.js frontends.",
    },
    {
      question: "What is the difference between Public and Private Enterprise Blockchains?",
      answer:
        "Public blockchains (Ethereum, Polygon, Solana) are open, permissionless networks ideal for DeFi, NFTs, and global dApps. Private blockchains (Hyperledger Fabric, Besu) are permissioned ledgers built for enterprises needing strict data privacy, role-based access control, and high transaction speeds without gas fees.",
    },
    {
      question: "How does Autofya ensure smart contract security?",
      answer:
        "Every smart contract written by Autofya undergoes static analysis, automated unit/fuzz testing (Hardhat/Foundry), manual code reviews by senior auditors, and formal verification before mainnet deployment to prevent reentrancy and logic vulnerabilities.",
    },
    {
      question: "What is Real World Asset (RWA) Tokenization?",
      answer:
        "RWA tokenization converts physical or traditional financial assets (real estate, fine art, private equity, debt) into digital tokens on a blockchain. This enables fractional ownership, 24/7 liquidity, automated compliance, and transparent provenance.",
    },
    {
      question: "How long does a custom Web3 or blockchain project take?",
      answer:
        "Smart contract audits or MVP dApp developments take 3 to 6 weeks. Complex enterprise Hyperledger setups, custom DeFi protocols, or multi-chain wallet ecosystems typically take 8 to 12 weeks, delivered in 2-week Agile sprints.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B1340] selection:bg-[#00a2ad] selection:text-white font-sans">
      {/* Header */}
      <Navbar />

      <main className="flex-1">
        {/* ========================================================= */}
        {/* 1. HERO SECTION (DARK NAVY WITH NODE NETWORK GRAPHIC)       */}
        {/* ========================================================= */}
        <section className="relative bg-[#070D24] text-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
          {/* Ambient Glow Overlays */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Text Content */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-[#00a2ad]/10 backdrop-blur-md px-4 py-2 rounded-full border border-[#00a2ad]/20">
                  <span className="w-2 h-2 rounded-full bg-[#00a2ad]" />
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-cyan-300">
                    Blockchain &amp; Web3 Engineering
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                  Enterprise Blockchain <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-orange-400 to-red-500">
                    Development Services
                  </span>
                </h1>

                <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
                  We design, build, and deploy secure decentralized solutions, smart contracts, Web3 dApps, and enterprise blockchain protocols for global institutions. By Autofya.
                </p>

                <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <Link
                    href="/schedule"
                    className="px-8 py-4 rounded-full bg-[#FF9000] hover:bg-[#E68200] text-white font-bold text-base shadow-lg shadow-amber-900/30 transition-all hover:scale-[1.02] cursor-pointer flex items-center gap-2"
                  >
                    <span>Talk to us</span>
                    <span className="text-xl">→</span>
                  </Link>
                  <a
                    href="#capabilities"
                    className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-base backdrop-blur-md border border-white/20 transition-colors cursor-pointer"
                  >
                    Explore Web3 Capabilities
                  </a>
                </div>

                {/* Quick Trust Highlights */}
                <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800 max-w-lg">
                  <div>
                    <p className="text-2xl lg:text-3xl font-extrabold text-amber-400">50+</p>
                    <p className="text-xs text-slate-400 font-medium">Web3 Projects Shipped</p>
                  </div>
                  <div>
                    <p className="text-2xl lg:text-3xl font-extrabold text-emerald-400">100%</p>
                    <p className="text-xs text-slate-400 font-medium">Audit Pass Rate</p>
                  </div>
                  <div>
                    <p className="text-2xl lg:text-3xl font-extrabold text-cyan-400">$1B+</p>
                    <p className="text-xs text-slate-400 font-medium">On-Chain Value Secured</p>
                  </div>
                </div>

              </div>

              {/* Right Hero Graphic */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-md lg:max-w-none">
                  <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-amber-500 rounded-3xl blur-2xl opacity-25" />
                  
                  <div className="relative rounded-2xl bg-[#0D183D] border border-white/15 p-4 shadow-2xl overflow-hidden">
                    <div className="relative h-[340px] sm:h-[400px] rounded-xl overflow-hidden shadow-md">
                      <Image
                        src="/capabilities_digital_trans.jpg"
                        alt="Autofya Blockchain Node Network Graphic"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070D24] via-transparent to-transparent opacity-90" />
                      
                      <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl text-white">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-red-600 flex items-center justify-center font-bold text-white shadow-md">
                            ⛓️
                          </div>
                          <div>
                            <p className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                              Multi-Chain Architecture
                            </p>
                            <p className="text-sm font-semibold text-white">
                              EVM • Solana • Hyperledger • Polygon
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. TRUSTED BY GLOBAL FINANCIAL INSTITUTIONS BAR            */}
        {/* ========================================================= */}
        <section className="bg-slate-50 py-10 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
              Trusted by Global Financial Institutions, Governments, and Web3 Ecosystems
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-80 hover:opacity-100 transition-all">
              {clientLogos.map((brand, idx) => (
                <div key={idx} className="text-center">
                  <span className="text-base sm:text-lg font-extrabold text-slate-700 hover:text-[#00a2ad] transition-colors cursor-default block">
                    {brand.name}
                  </span>
                  <span className="text-[10px] text-slate-400">{brand.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. TURNING BLOCKCHAIN COMPLEXITY INTO BUSINESS CAPABILITY  */}
        {/* ========================================================= */}
        <section id="capabilities" className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs uppercase tracking-widest font-extrabold text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/30">
                Core Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Turning Blockchain Complexity Into Business Capability
              </h2>
              <p className="text-slate-300 text-base sm:text-lg">
                Full-stack blockchain engineering designed for enterprise reliability, speed, and bank-grade security.
              </p>
            </div>

            {/* 6 Dark Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950 p-8 rounded-2xl border border-white/10 hover:border-amber-400/50 hover:shadow-2xl transition-all duration-300 space-y-4 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-3xl shadow-inner group-hover:scale-110 transition-transform">
                      {cap.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <span className="text-xs font-bold text-amber-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Learn more</span>
                      <span>→</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA Card */}
            <div className="bg-gradient-to-r from-[#0B1340] via-[#152368] to-[#0B1340] p-8 rounded-2xl border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
              <div className="space-y-1 text-center sm:text-left">
                <p className="text-xl font-extrabold text-white">Have a Web3 or Smart Contract Project in Mind?</p>
                <p className="text-xs text-slate-300">Consult with Autofya&apos;s senior blockchain architects today.</p>
              </div>
              <Link
                href="/schedule"
                className="px-6 py-3 rounded-full bg-[#FF9000] hover:bg-[#E68200] text-white font-bold text-sm shadow-md transition-all whitespace-nowrap cursor-pointer"
              >
                Talk to us →
              </Link>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. BLOCKCHAIN EXCELLENCE WITH AI (METRICS DISPLAY)         */}
        {/* ========================================================= */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Text & Visual */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad] bg-cyan-50 px-3 py-1 rounded-full border border-cyan-100">
                  Performance &amp; Security
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
                  Blockchain Excellence with AI
                </h2>
                <p className="text-slate-600 text-base leading-relaxed">
                  We integrate AI-assisted smart contract vulnerability auditing and automated gas optimization to deliver bulletproof protocol execution.
                </p>

                <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                  <Image
                    src="/hero_ai_engineer.jpg"
                    alt="AI Powered Blockchain Auditing"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1340]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-sm font-bold">AI Smart Contract Verification</p>
                    <p className="text-xs text-slate-300">Formal verification &amp; automated threat detection</p>
                  </div>
                </div>
              </div>

              {/* Right Metrics Grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 hover:shadow-md transition-all">
                  <p className="text-4xl font-extrabold text-emerald-600">100%</p>
                  <p className="text-sm font-bold text-[#0B1340]">Smart Contract Audit Pass Rate</p>
                  <p className="text-xs text-slate-500">Zero critical vulnerabilities across all mainnet deployments.</p>
                </div>

                <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 hover:shadow-md transition-all">
                  <p className="text-4xl font-extrabold text-blue-600">99.9%</p>
                  <p className="text-sm font-bold text-[#0B1340]">Transaction Reliability &amp; Uptime</p>
                  <p className="text-xs text-slate-500">High-availability node clusters and redundant RPC endpoints.</p>
                </div>

                <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 hover:shadow-md transition-all">
                  <p className="text-4xl font-extrabold text-amber-500">40%</p>
                  <p className="text-sm font-bold text-[#0B1340]">Gas Fee Efficiency Optimization</p>
                  <p className="text-xs text-slate-500">Optimized assembly byte-code and batching algorithms.</p>
                </div>

                <div className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 hover:shadow-md transition-all">
                  <p className="text-4xl font-extrabold text-purple-600">10M+</p>
                  <p className="text-sm font-bold text-[#0B1340]">On-Chain Transactions Processed</p>
                  <p className="text-xs text-slate-500">High-concurrency decentralized application backends.</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. LOOKING FOR CUSTOM BLOCKCHAIN DEVELOPMENT? (SERVICES)   */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                Full Spectrum Offerings
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
                Looking for Custom Blockchain Development?
              </h2>
              <p className="text-slate-600 text-base">
                From tokenomics design and smart contract writing to full dApp launch, Autofya offers modular Web3 services.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {customServices.map((srv, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:shadow-lg transition-all space-y-3 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <span className="text-3xl">{srv.icon}</span>
                    <h3 className="text-lg font-bold text-[#0B1340] group-hover:text-[#00a2ad] transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-xs font-bold text-[#00a2ad] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Explore</span>
                      <span>→</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. ECOSYSTEM & INTEGRATION SHOWCASE                       */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-950 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs uppercase tracking-widest font-extrabold text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/30">
                Protocols &amp; Ecosystems
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Ecosystem &amp; Integration
              </h2>
              <p className="text-slate-400 text-base">
                We build across leading public L1/L2 blockchains and enterprise permissioned ledgers.
              </p>
            </div>

            {/* Ecosystem Tabs */}
            <div className="flex items-center justify-start lg:justify-center gap-3 overflow-x-auto pb-4 scrollbar-none">
              {ecosystems.map((eco) => {
                const isActive = activeEcosystemTab === eco.id;
                return (
                  <button
                    key={eco.id}
                    onClick={() => setActiveEcosystemTab(eco.id)}
                    className={`px-6 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#FF9000] text-white shadow-lg shadow-amber-900/40 scale-105"
                        : "bg-white/10 hover:bg-white/20 text-slate-300 border border-white/10"
                    }`}
                  >
                    {eco.name}
                  </button>
                );
              })}
            </div>

            {/* Active Ecosystem Detail Box */}
            <div className="bg-slate-900 rounded-2xl border border-white/15 p-8 lg:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-md border border-amber-400/30 uppercase tracking-wider">
                  {currentEcosystem.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {currentEcosystem.title}
                </h3>
                <p className="text-slate-300 text-base leading-relaxed">
                  {currentEcosystem.desc}
                </p>
              </div>

              <div className="lg:col-span-4 flex justify-center">
                <Link
                  href="/schedule"
                  className="px-8 py-4 rounded-full bg-[#00a2ad] hover:bg-[#008791] text-white font-bold text-sm shadow-xl transition-all cursor-pointer whitespace-nowrap"
                >
                  Consult Protocol Specialist →
                </Link>
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
