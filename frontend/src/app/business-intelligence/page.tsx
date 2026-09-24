"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BusinessIntelligencePage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const techStack = [
    { name: "Scikit-Learn", category: "ML Regression Models" },
    { name: "NumPy", category: "Scientific Computing" },
    { name: "Pandas", category: "Data Manipulation" },
    { name: "Flask", category: "API Microservice" },
    { name: "PowerBI", category: "Enterprise Dashboard" },
    { name: "Tableau", category: "Visual Analytics" },
    { name: "Apache Superset", category: "Open Source BI" },
    { name: "Snowflake", category: "Cloud Data Warehouse" },
    { name: "Python", category: "AI & Data Science" },
    { name: "SQL Server", category: "Relational Storage" },
  ];

  const biServices = [
    {
      title: "Executive BI & Real-Time Dashboards",
      desc: "Custom interactive dashboards (PowerBI, Tableau, Superset) aggregating enterprise metrics into sub-second visual reports for board-level decision making.",
    },
    {
      title: "Predictive AI Analytics & Time-Series Forecasting",
      desc: "Machine learning algorithms for stock price prediction, financial trend forecasting, revenue modeling, and market volatility risk management.",
    },
    {
      title: "Enterprise Data Warehouse Integration & ETL",
      desc: "Consolidating siloed business data into centralized cloud data warehouses (Snowflake, BigQuery, Redshift) with automated ETL data pipelines.",
    },
    {
      title: "Automated KPI Tracking & Anomaly Alerting",
      desc: "Real-time automated alerting triggered when operational KPIs, sales thresholds, or risk metrics deviate from baseline statistical expectations.",
    },
    {
      title: "Financial & Market Risk Analytics",
      desc: "Portfolio performance tracking, credit risk evaluation models, automated trade signals, and stock exchange trend analysis.",
    },
    {
      title: "Customer Behavior & Churn Analytics",
      desc: "Cohort analysis, customer lifetime value (CLV) modeling, purchase intent forecasting, and automated churn prevention recommendations.",
    },
  ];

  const faqs = [
    {
      question: "How does AI enhance traditional Business Intelligence (BI)?",
      answer:
        "Traditional BI reports past historical data. AI-enabled BI uses predictive machine learning models to forecast future trends, detect operational anomalies in real time, and recommend optimal strategic actions before market shifts occur.",
    },
    {
      question: "What sources can Autofya connect to for BI dashboards?",
      answer:
        "We connect to over 200+ enterprise data sources, including cloud data warehouses (Snowflake, BigQuery), SQL/NoSQL databases, CRM platforms (Salesforce, HubSpot), ERP systems (SAP, Oracle), and real-time REST/GraphQL APIs.",
    },
    {
      question: "How accurate are your AI predictive models for stock and financial trends?",
      answer:
        "Our data science team builds ensemble models using historical time-series data, technical indicators, and sentiment analysis. Models undergo rigorous backtesting and cross-validation to maximize prediction accuracy and minimize volatility risks.",
    },
    {
      question: "Can non-technical business users create custom BI reports?",
      answer:
        "Yes! We design self-service BI platforms with intuitive drag-and-drop interfaces and natural language query capabilities, allowing business managers to generate custom reports without writing SQL.",
    },
    {
      question: "How long does it take to implement an enterprise BI dashboard?",
      answer:
        "An initial executive dashboard or Proof of Concept (PoC) is typically delivered within 2 to 3 weeks. Full enterprise BI warehouse integration and predictive modeling range from 6 to 10 weeks.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B1340] selection:bg-[#00a2ad] selection:text-white font-sans">
      {/* Global Header */}
      <Navbar />

      <main className="flex-1">
        {/* ========================================================= */}
        {/* 1. HERO SECTION (STOCK MARKET TICKER THEME)                */}
        {/* ========================================================= */}
        <section className="relative bg-[#060D20] text-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
          {/* Market Ticker Graphic Background */}
          <div className="absolute inset-0 z-0 opacity-25">
            <Image
              src="/capabilities_digital_trans.jpg"
              alt="Stock Price Prediction Ticker Background"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#060D20] via-[#060D20]/95 to-[#0B1A3A]/90 z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Content Card (Overlay White Box matching screenshot layout) */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 uppercase tracking-wider">
                    Featured AI Solution &amp; BI Case Study
                  </span>
                </div>

                <div className="bg-white/95 text-[#0B1340] p-8 sm:p-10 rounded-2xl shadow-2xl border border-slate-200 space-y-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00a2ad]">
                    Case Study / Solution
                  </span>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1340] leading-tight">
                    Stock Price Prediction With AI (POC)
                  </h1>

                  <p className="text-slate-600 text-base sm:text-lg font-semibold">
                    Solution: AI &amp; ML Enabled Stock Price Prediction Model | Industry: Fintech, Retail &amp; Enterprise
                  </p>

                  <p className="text-slate-500 text-sm leading-relaxed font-normal">
                    Turn complex data streams into predictive market clarity. Powered by Autofya Business Intelligence &amp; AI Engineering.
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
                      href="#bi-problem-solution"
                      className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0B1340] font-bold text-base transition-all cursor-pointer"
                    >
                      <span>Explore Case Study</span>
                      <span>↓</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Hero Visual: Market Ticker Visual Card */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-md lg:max-w-none">
                  <div className="relative rounded-2xl bg-slate-950 border border-white/20 p-5 shadow-2xl overflow-hidden font-mono">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-slate-400">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                        <span className="ml-2 text-slate-300">Autofya-BI-StockPredictor.py</span>
                      </div>
                      <span className="text-[10px] text-amber-400 font-bold bg-amber-950 px-2 py-0.5 rounded border border-amber-500/30">
                        PREDICTIVE BI
                      </span>
                    </div>

                    <div className="py-4 space-y-2 text-xs text-slate-300">
                      <p className="text-slate-400"># Real-Time Stock Market Telemetry</p>
                      <p className="text-cyan-300">AAPL: <span className="text-emerald-400">$228.50 (+3.4%)</span> [Signal: BUY]</p>
                      <p className="text-cyan-300">NVDA: <span className="text-emerald-400">$134.20 (+5.1%)</span> [Signal: HOLD]</p>
                      <p className="text-cyan-300">MSFT: <span className="text-emerald-400">$448.10 (+2.8%)</span> [Signal: BUY]</p>
                      <p className="text-purple-400">linear_regression.fit<span className="text-slate-100">(historical_ticks)</span></p>
                      <p className="text-emerald-400">✔ Model Prediction Confidence: <span className="text-slate-100 font-bold">96.8%</span></p>
                    </div>

                    <div className="mt-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs flex items-center justify-between font-sans">
                      <span>📊 Business Intelligence Dashboard</span>
                      <span className="font-bold text-amber-400">Real-Time BI</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. PROBLEM, SOLUTION & BUSINESS IMPACT SECTION             */}
        {/* ========================================================= */}
        <section id="bi-problem-solution" className="py-24 bg-slate-50 border-b border-slate-200 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                AI-Driven Decision Making
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1340]">
                Demystifying Market Volatility
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                How many people are there who can easily predict the stock price before buying or selling a stock? For the general public, it moves on a series of historical trends. The model can learn the price tendencies of stocks through a time-series algorithm to predict the most probable market price.
              </p>
              <div className="w-20 h-1 bg-[#00a2ad] rounded-full mx-auto" />
            </div>

            {/* 3 Cards: Problem, Solution, Business Impact */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Problem Card */}
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:border-red-400 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-red-100 text-red-600 flex items-center justify-center font-extrabold text-lg">
                  ⚠
                </div>
                <h3 className="text-2xl font-bold text-[#0B1340]">Problem</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  It&apos;s a persistent challenge for humans to predict the most accurate &amp; available time to buy and sell a stock without analyzing a massive previous history of the price timeline manually.
                </p>
              </div>

              {/* Solution Card */}
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:border-[#00a2ad] transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-cyan-100 text-[#00a2ad] flex items-center justify-center font-extrabold text-lg">
                  ✦
                </div>
                <h3 className="text-2xl font-bold text-[#0B1340]">Solution</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Linear regression &amp; neural time-series models predict stock prices over any timeframe, enabling users to identify optimal entry/exit points and buy or sell stocks with highest probability of profit.
                </p>
              </div>

              {/* Business Impact Card */}
              <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:border-emerald-400 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-extrabold text-lg">
                  📈
                </div>
                <h3 className="text-2xl font-bold text-[#0B1340]">Business Impact</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  By predicting the appropriate time for stock exchange with an AI-enabled solution, trading firms and individual investors eliminate high-risk guesswork and operate with data-driven confidence.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. TECHNOLOGY USED SECTION (MATCHING SCREENSHOT GREY BAND) */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-800 text-white border-b border-slate-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-extrabold text-amber-400">
                Core Stack
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Technology Used
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-4">
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-900 border border-slate-700 hover:border-amber-400 shadow-sm transition-all text-center space-y-1 group"
                >
                  <p className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors">
                    {tech.name}
                  </p>
                  <p className="text-[10px] text-slate-400 font-medium">
                    {tech.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. OFFERED BI & PREDICTIVE ANALYTICS SERVICES              */}
        {/* ========================================================= */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                Full Spectrum BI
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1340]">
                Business Intelligence Services
              </h2>
              <div className="w-20 h-1 bg-[#00a2ad] rounded-full mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {biServices.map((srv, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#00a2ad] hover:bg-white hover:shadow-xl transition-all duration-300 space-y-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-100 text-[#00a2ad] flex items-center justify-center font-extrabold text-sm group-hover:bg-[#00a2ad] group-hover:text-white transition-colors">
                    0{idx + 1}
                  </div>

                  <h3 className="text-xl font-bold text-[#0B1340] group-hover:text-[#00a2ad] transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. WOULD YOU LIKE TO START A PROJECT WITH US? (BLUE BANNER)*/}
        {/* ========================================================= */}
        <section className="py-16 bg-[#008BB4] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Would you like to start a project with us?
              </h2>
              <p className="text-cyan-100 text-sm sm:text-base mt-1">
                Accelerate your decision-making with custom BI dashboards and AI predictive models.
              </p>
            </div>

            <Link
              href="/schedule"
              className="px-8 py-3.5 rounded-full bg-[#FF9000] hover:bg-[#E68200] text-white font-bold text-sm uppercase tracking-wider shadow-lg transition-all shrink-0 cursor-pointer hover:scale-105"
            >
              Schedule a Consultation
            </Link>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. FAQS SECTION                                         */}
        {/* ========================================================= */}
        <section className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                Got Questions?
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Contact Sidebar Box */}
              <div className="lg:col-span-4 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#0B1340] mb-2">
                    Still Have Questions?
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Can&apos;t find the answer you&apos;re looking for? Reach out to Autofya&apos;s BI architects directly.
                  </p>
                </div>

                <div className="space-y-3 pt-2 text-sm">
                  <div>
                    <span className="text-xs text-slate-400 font-bold uppercase block">Email Us</span>
                    <a href="mailto:info@autofya.com" className="text-[#00a2ad] font-semibold hover:underline">
                      info@autofya.com
                    </a>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-bold uppercase block">Call Us</span>
                    <span className="text-[#0B1340] font-semibold">
                      +1 606 773 7443
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/schedule"
                    className="block text-center w-full py-3 rounded-full bg-[#FF9000] hover:bg-[#E68200] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                  >
                    Schedule a Consultation
                  </Link>
                </div>
              </div>

              {/* Right Accordion FAQs */}
              <div className="lg:col-span-8 space-y-4">
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
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
