"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LmsDevelopmentPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activePluginTab, setActivePluginTab] = useState<string>("proctoring");

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const lmsFeatures = [
    {
      title: "Dynamic Dashboard & User Experience",
      icon: "📊",
      bullets: [
        "Role-based learner & instructor views",
        "Drag & drop course builder and navigation",
        "Custom theme branding & responsive UI",
        "Multi-language & accessibility compliance",
      ],
    },
    {
      title: "Course & Content Management",
      icon: "📚",
      bullets: [
        "SCORM & xAPI content package support",
        "Multimedia lesson & video hosting",
        "Interactive quiz & assignment creation",
        "Automated grading & feedback systems",
      ],
    },
    {
      title: "Communication & Collaboration",
      icon: "💬",
      bullets: [
        "Discussion forums & group chats",
        "Live webinar integrations (Zoom, Teams)",
        "Automated email & push notifications",
        "Peer-to-peer student messaging",
      ],
    },
    {
      title: "Reporting & Analytics",
      icon: "📈",
      bullets: [
        "Learner progress & engagement tracking",
        "Custom certificate & badge generation",
        "Attendance & completion reports",
        "Predictive learning analytics dashboards",
      ],
    },
    {
      title: "Secure Monitoring & Access Control",
      icon: "🔒",
      bullets: [
        "Single Sign-On (SSO / OAuth / SAML)",
        "Role-based access governance & security",
        "Data encryption & GDPR compliance",
        "Audit logs & security monitoring",
      ],
    },
    {
      title: "Content Delivery & Storage",
      icon: "☁️",
      bullets: [
        "High-speed cloud storage & CDN integration",
        "Mobile offline course access",
        "Adaptive video streaming quality",
        "Automatic version control & backups",
      ],
    },
    {
      title: "Live Classes & Scheduling",
      icon: "📅",
      bullets: [
        "Virtual classroom integration",
        "Calendar & exam event scheduling",
        "Automated attendance logging",
        "Reminders & class notification alerts",
      ],
    },
    {
      title: "Assessment, Evaluation & Certification",
      icon: "🎓",
      bullets: [
        "AI-powered proctoring integrations",
        "Automated certificate generation",
        "Integrated plagiarism checking tools",
        "Competency mapping & skill badges",
      ],
    },
  ];

  const pluginsData = [
    {
      id: "proctoring",
      name: "Proctoring Pro",
      title: "Proctoring Pro",
      description:
        "AI-assisted automated exam proctoring plugin for Moodle LMS. Features webcam verification, facial recognition, screen locking, audio monitoring, and instant anti-cheating report generation for online high-stakes exams.",
      badge: "AI Powered",
      image: "/ecommerce_retail_app.jpg",
      bullets: [
        "Facial recognition & identity verification",
        "Browser lockdown & multi-screen detection",
        "AI suspicious movement flags & recording",
        "Real-time proctor dashboard & PDF audit logs",
      ],
    },
    {
      id: "anti-cheating",
      name: "Anti-Cheating Shield",
      title: "Anti-Cheating Shield Plugin",
      description:
        "Advanced exam security plugin that blocks copy-pasting, restricts tab switching, disables screenshot shortcuts, and randomizes question/answer choices during assessments.",
      badge: "Security",
      image: "/hero_ecommerce_dev.jpg",
      bullets: [
        "Copy-paste & right-click restriction",
        "Browser tab & background app monitor",
        "Question pool randomizer",
        "IP subnet & location lock",
      ],
    },
    {
      id: "custom-quiz",
      name: "Custom Quiz Builder",
      title: "Custom Quiz & Assessment Suite",
      description:
        "Flexible quiz engine supporting 15+ question types including drag-and-drop, audio response, coding blocks, matching, and timed adaptive test formats.",
      badge: "Assessment",
      image: "/capabilities_digital_trans.jpg",
      bullets: [
        "15+ interactive question types",
        "Adaptive difficulty progression",
        "Instant automated grading & feedback",
        "Question bank categorization",
      ],
    },
    {
      id: "attendance-sync",
      name: "Attendance Sync",
      title: "Automated Attendance & HR Sync",
      description:
        "Automates student and employee attendance logging across live virtual sessions, physical classroom QR codes, and enterprise HRIS software.",
      badge: "Automation",
      image: "/ecommerce_team_banner.jpg",
      bullets: [
        "QR code mobile attendance scan",
        "Zoom & Teams meeting duration sync",
        "Automated attendance threshold warnings",
        "Exportable Excel/PDF attendance logs",
      ],
    },
    {
      id: "analytics",
      name: "Analytics Dashboard",
      title: "Executive Learning Analytics",
      description:
        "Comprehensive BI dashboard presenting course completion velocity, drop-out risk indicators, learner retention charts, and quiz difficulty metrics.",
      badge: "Analytics",
      image: "/hero_ai_engineer.jpg",
      bullets: [
        "Real-time learner progress charts",
        "At-risk student detection alerts",
        "Departmental performance benchmarks",
        "Scheduled email executive summaries",
      ],
    },
    {
      id: "certificate",
      name: "Certificate Builder",
      title: "Dynamic Certificate & Badge Generator",
      description:
        "Design custom branded PDF completion certificates with dynamic student tags, QR code verification links, and Open Badges 2.0 digital verification.",
      badge: "Certification",
      image: "/company_team_group.jpg",
      bullets: [
        "Drag & drop certificate template editor",
        "QR code authenticity verification link",
        "Open Badges 2.0 compliance",
        "LinkedIn direct share integration",
      ],
    },
    {
      id: "zoom-teams",
      name: "Zoom / Teams Sync",
      title: "Virtual Classroom Integration",
      description:
        "Seamlessly schedule, launch, and record Zoom and Microsoft Teams live lectures directly inside Moodle course modules with automated attendance tracking.",
      badge: "Live Class",
      image: "/team_wireframing.jpg",
      bullets: [
        "1-click live lecture join from Moodle",
        "Automatic cloud recording upload to course",
        "Attendance duration auto-credit",
        "Calendar schedule synchronization",
      ],
    },
    {
      id: "payment",
      name: "Payment Gateways",
      title: "E-Commerce & Course Monetization",
      description:
        "Monetize your Moodle courses with integrated global and local payment gateways including Stripe, PayPal, SSLCommerz, and subscription billing.",
      badge: "E-Commerce",
      image: "/cs_digital_wallet.jpg",
      bullets: [
        "Stripe, PayPal & local mobile gateway support",
        "Subscription & course bundle pricing",
        "Discount coupon code engine",
        "Automated tax invoice generation",
      ],
    },
  ];

  const currentPlugin =
    pluginsData.find((p) => p.id === activePluginTab) || pluginsData[0];

  const processSteps = [
    {
      step: "01",
      title: "Assessment & Planning",
      description:
        "We evaluate your institution or enterprise learning goals, user capacity, SCORM content requirements, and infrastructure needs to design an optimal Moodle architecture.",
    },
    {
      step: "02",
      title: "Deployment & Configuration",
      description:
        "Installing and customizing Moodle on high-performance cloud servers, setting up custom themes, configuring SSO, and integrating required plugins.",
    },
    {
      step: "03",
      title: "Go-Live & Exam Support",
      description:
        "Conducting stress load testing, training faculty and administrators, setting up exam proctoring workflows, and providing real-time support during launch.",
    },
    {
      step: "04",
      title: "Ongoing Ownership",
      description:
        "Providing SLA-backed 24/7 technical support, routine database optimizations, security patch updates, Moodle core upgrades, and feature expansions.",
    },
  ];

  const partnerLogos = [
    "UCB",
    "HSBC",
    "BRAC Bank",
    "Standard Chartered",
    "City Bank",
    "Grameenphone",
    "MGM Resorts",
  ];

  const faqs = [
    {
      question: "Why choose Moodle LMS for institutional or enterprise learning?",
      answer:
        "Moodle is the world's most flexible, open-source Learning Management System trusted by 300M+ users. It offers complete data ownership, unlimited customization, SCORM/xAPI compliance, and cost-effective scaling without per-user licensing fees.",
    },
    {
      question: "What is Proctoring Pro and how does AI proctoring work?",
      answer:
        "Proctoring Pro is our custom AI-powered Moodle plugin that monitors online examinations. It uses facial recognition to verify student identity, locks down browser tabs, tracks eye/head movements via webcam, detects background voices, and flags suspicious behavior in real-time.",
    },
    {
      question: "Can Autofya customize our existing Moodle platform theme and plugins?",
      answer:
        "Yes! We specialize in custom Moodle Liquid/PHP theme development, UI/UX overhauls, custom plugin creation, payment gateway integrations, and seamless migration from legacy platforms or older Moodle versions.",
    },
    {
      question: "How long does a Moodle LMS deployment take?",
      answer:
        "Standard Moodle cloud setup and theme customization take 2 to 4 weeks. Custom plugin development, complex SIS/ERP integrations, or large-scale university migrations typically take 6 to 10 weeks.",
    },
    {
      question: "Do you offer post-deployment maintenance and SLA support?",
      answer:
        "Yes, Autofya provides 24/7 SLA maintenance packages including server monitoring, automated database backups, security patches, Moodle core updates, and live exam helpdesk support.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B1340] selection:bg-[#00a2ad] selection:text-white font-sans">
      {/* Header */}
      <Navbar />

      <main className="flex-1">
        {/* ========================================================= */}
        {/* 1. HERO SECTION (MATCHING SCREENSHOT HERO & MOODLE BADGE)  */}
        {/* ========================================================= */}
        <section className="relative bg-[#070D24] text-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
          {/* Subtle Background Radial Glow */}
          <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#00a2ad]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Left Text Content */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                {/* LMS Tag */}
                <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-blue-400/20">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                    LMS &amp; EdTech
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                  Enterprise Grade <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-cyan-400 to-teal-400">
                    Moodle LMS &amp; Proctoring Services
                  </span>
                </h1>

                {/* Subheading */}
                <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
                  Secure, scalable, feature-rich learning management solutions for educational institutions and enterprise workforce training. Powered by Autofya engineering.
                </p>

                {/* Badges & Moodle Partner */}
                <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <div className="inline-flex items-center gap-2.5 bg-amber-500/10 border border-amber-400/30 px-4 py-2 rounded-full text-amber-300 font-bold text-xs">
                    <span className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-extrabold text-[10px]">
                      M
                    </span>
                    <span>Moodle Partner &amp; Integration Specialists</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <Link
                    href="/schedule"
                    className="px-8 py-4 rounded-full bg-[#FF9000] hover:bg-[#E68200] text-white font-bold text-base shadow-lg shadow-amber-900/30 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer flex items-center gap-2"
                  >
                    <span>Talk to us</span>
                    <span className="text-xl">→</span>
                  </Link>
                  <a
                    href="#features"
                    className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-base backdrop-blur-md border border-white/20 transition-colors cursor-pointer"
                  >
                    View Features
                  </a>
                </div>

                {/* Stats */}
                <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800 max-w-lg">
                  <div>
                    <p className="text-2xl lg:text-3xl font-extrabold text-cyan-400">100k+</p>
                    <p className="text-xs text-slate-400 font-medium">Active Learners</p>
                  </div>
                  <div>
                    <p className="text-2xl lg:text-3xl font-extrabold text-[#95BF47]">99.9%</p>
                    <p className="text-xs text-slate-400 font-medium">Exam Uptime</p>
                  </div>
                  <div>
                    <p className="text-2xl lg:text-3xl font-extrabold text-amber-400">50+</p>
                    <p className="text-xs text-slate-400 font-medium">Plugins Built</p>
                  </div>
                </div>

              </div>

              {/* Right Hero Visual: Proctoring Pro Card */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-md lg:max-w-none">
                  
                  {/* Outer Ambient Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-25" />
                  
                  {/* Proctoring Card Container */}
                  <div className="relative rounded-2xl bg-[#0D183D] border border-white/15 p-4 shadow-2xl overflow-hidden">
                    <div className="relative h-[340px] sm:h-[380px] rounded-xl overflow-hidden shadow-md group">
                      <Image
                        src="/ecommerce_retail_app.jpg"
                        alt="Autofya Proctoring Pro Preview"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070D24] via-[#070D24]/40 to-transparent opacity-90" />
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-red-600/90 text-white flex items-center justify-center text-2xl shadow-xl border border-white/30 hover:scale-110 transition-transform cursor-pointer">
                          ▶
                        </div>
                      </div>

                      {/* Top Header Overlay */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        <span className="text-xs font-bold bg-blue-600/90 text-white px-3 py-1 rounded-md border border-white/20">
                          PROCTORING PRO
                        </span>
                        <span className="text-xs font-semibold bg-emerald-500/80 text-white px-2.5 py-1 rounded-md flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                          Live AI Active
                        </span>
                      </div>

                      {/* Bottom Info Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl text-white">
                        <div className="space-y-1">
                          <p className="text-sm font-bold text-white flex items-center justify-between">
                            <span>Webcam &amp; Screen AI Proctoring</span>
                            <span className="text-xs text-amber-400 font-semibold">99.8% Accuracy</span>
                          </p>
                          <p className="text-xs text-slate-300">
                            Facial recognition, tab lockdown, and anti-cheating audit reports.
                          </p>
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
        {/* 2. FEATURES OF OUR MOODLE LMS (8 DARK NAVY CARDS GRID)     */}
        {/* ========================================================= */}
        <section id="features" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad] bg-cyan-50 px-3 py-1 rounded-full border border-cyan-100">
                Core System Modules
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
                Features of our Moodle LMS
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                Engineered for maximum accessibility, security, and student engagement across universities, schools, and corporate enterprises.
              </p>
            </div>

            {/* 8 Feature Cards Grid (Dark Navy Matching Screenshot) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {lmsFeatures.map((feat, idx) => (
                <div
                  key={idx}
                  className="bg-[#0D183D] text-white p-6 sm:p-7 rounded-2xl border border-slate-800 shadow-xl hover:shadow-2xl hover:border-cyan-500/50 transition-all duration-300 space-y-4 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform">
                      {feat.icon}
                    </div>

                    <h3 className="text-lg font-bold text-white leading-snug group-hover:text-cyan-300 transition-colors">
                      {feat.title}
                    </h3>

                    <ul className="space-y-2.5 pt-2 border-t border-white/10">
                      {feat.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <span className="text-cyan-400 font-bold mt-0.5">•</span>
                          <span className="leading-snug">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <span className="text-[11px] font-semibold text-slate-400 group-hover:text-cyan-400 transition-colors flex items-center gap-1">
                      <span>Module 0{idx + 1}</span>
                      <span>→</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. MOODLE READY PLUGINS (INTERACTIVE TABBED SHOWCASE)     */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            
            {/* Title */}
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs uppercase tracking-widest font-extrabold text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/30">
                Extension Ecosystem
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Moodle Ready Plugins
              </h2>
              <p className="text-slate-300 text-base">
                Supercharge your Moodle instance with Autofya&apos;s pre-built, production-tested plugin suite.
              </p>
            </div>

            {/* Filter Tabs Horizontal Bar */}
            <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 scrollbar-none">
              {pluginsData.map((plug) => {
                const isActive = activePluginTab === plug.id;
                return (
                  <button
                    key={plug.id}
                    onClick={() => setActivePluginTab(plug.id)}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                      isActive
                        ? "bg-[#FF9000] text-white shadow-lg shadow-amber-900/40 scale-105"
                        : "bg-white/10 hover:bg-white/20 text-slate-300 border border-white/10"
                    }`}
                  >
                    {plug.name}
                  </button>
                );
              })}
            </div>

            {/* Active Plugin Showcase Box (Matching Screenshot Box Layout) */}
            <div className="bg-slate-950 rounded-2xl border border-white/15 p-8 lg:p-12 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Plugin Detail Left */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-md border border-amber-400/30 uppercase tracking-wider">
                  <span>★</span>
                  <span>{currentPlugin.badge}</span>
                </div>

                <h3 className="text-3xl font-extrabold text-white">
                  {currentPlugin.title}
                </h3>

                <p className="text-slate-300 text-base leading-relaxed">
                  {currentPlugin.description}
                </p>

                {/* Bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {currentPlugin.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2.5 text-xs font-medium text-slate-200 bg-white/5 p-3 rounded-xl border border-white/10">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <Link
                    href="/schedule"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                  >
                    <span>Request Plugin Demo</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Plugin Box Visual Right (Mockup) */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm h-72 rounded-2xl bg-gradient-to-tr from-blue-900 via-indigo-900 to-slate-900 border border-blue-400/30 p-6 flex flex-col justify-between shadow-2xl overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl" />
                  
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                      Moodle Plugin
                    </span>
                    <span className="text-xs font-extrabold bg-blue-600 text-white px-2.5 py-1 rounded-md">
                      v4.2 Ready
                    </span>
                  </div>

                  <div className="space-y-2 relative z-10">
                    <p className="text-2xl font-black text-white group-hover:text-cyan-300 transition-colors">
                      {currentPlugin.title}
                    </p>
                    <p className="text-xs text-slate-300">
                      Seamless installation &amp; 1-click Moodle admin config.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/20 flex items-center justify-between text-xs text-slate-300">
                    <span>Autofya Certified</span>
                    <span className="text-amber-400 font-bold">PROCTORING PRO PLUS</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. TRUSTED BY FAST MOVING TECH TEAMS (CLIENT LOGO BAR)     */}
        {/* ========================================================= */}
        <section className="bg-slate-950 py-12 border-t border-b border-slate-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
              Trusted by Fast-Moving Tech Teams — From Startups to Enterprises
            </p>

            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80 hover:opacity-100 transition-all">
              {partnerLogos.map((logo, idx) => (
                <span
                  key={idx}
                  className="text-base sm:text-xl font-extrabold text-slate-300 hover:text-cyan-400 transition-colors cursor-default"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. HOW WE WORK (PROCESS TIMELINE)                         */}
        {/* ========================================================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad] bg-cyan-50 px-3 py-1 rounded-full border border-cyan-100">
                Execution Model
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
                How We Work
              </h2>
              <p className="text-slate-600 text-base">
                From initial requirement mapping to ongoing support, our structured approach ensures a seamless Moodle deployment.
              </p>
            </div>

            {/* Timeline Steps (Matching Screenshot Vertical Steps) */}
            <div className="max-w-4xl mx-auto space-y-8">
              {processSteps.map((stepItem, idx) => (
                <div
                  key={stepItem.step}
                  className="relative p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#00a2ad] hover:shadow-lg transition-all flex flex-col md:flex-row items-start gap-6 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#0B1340] text-amber-400 font-mono font-extrabold text-xl flex items-center justify-center shrink-0 shadow-md group-hover:bg-[#00a2ad] group-hover:text-white transition-colors">
                    {stepItem.step}
                  </div>

                  <div className="space-y-2 flex-1">
                    <h3 className="text-xl font-extrabold text-[#0B1340] group-hover:text-[#00a2ad] transition-colors">
                      {stepItem.title}
                    </h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {stepItem.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. READY TO SCALE YOUR TEAM? CALLOUT BANNER               */}
        {/* ========================================================= */}
        <section className="py-16 bg-[#070D24] text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 bg-slate-900/90 border border-white/15 p-10 lg:p-14 rounded-3xl shadow-2xl relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl" />
            
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Ready to Scale Your Learning Platform?
            </h2>
            <p className="text-slate-300 max-w-xl mx-auto text-base">
              Learn how our Moodle specialists and Proctoring Pro engineers can transform your institution or enterprise training platform.
            </p>

            <div>
              <Link
                href="/schedule"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FF9000] hover:bg-[#E68200] text-white font-bold text-base shadow-xl transition-all cursor-pointer hover:scale-105"
              >
                <span>Talk to us</span>
                <span>→</span>
              </Link>
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
