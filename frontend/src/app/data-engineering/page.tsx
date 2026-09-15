"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DataEngineeringPage() {
  const coreServices = [
    {
      icon: "⚡",
      title: "Data Engineering & Cloud Platforms",
      desc: "Scalable enterprise data pipelines, real-time stream ingestion (Kafka, Spark), cloud data warehouses (Snowflake, BigQuery, Redshift), and modern data lake architectures.",
    },
    {
      icon: "🛡️",
      title: "AI & ML Foundations & Governance",
      desc: "Preparing clean, validated, and compliant datasets for machine learning models, feature stores, automated data quality checks, and lineage tracking.",
    },
    {
      icon: "📊",
      title: "Analytics and BI",
      desc: "Interactive executive dashboards, self-service business intelligence (Tableau, PowerBI), data modeling, and automated real-time KPI reporting.",
    },
    {
      icon: "🗄️",
      title: "Database Design & Managed Services",
      desc: "Modernizing legacy SQL/NoSQL databases, cloud migrations, performance tuning, 24/7 DBA support, and high-availability multi-region clustering.",
    },
  ];

  const certifications = [
    "AWS Certified Data Analytics",
    "SnowPro Core Certified",
    "Microsoft Certified Azure Data Engineer",
    "Google Cloud Professional Data Engineer",
    "Databricks Certified Associate",
    "Apache Spark Developer Certified",
  ];

  const toolsList = [
    { name: "Snowflake", category: "Cloud Data Warehouse" },
    { name: "Databricks", category: "Lakehouse & Spark" },
    { name: "Apache Spark", category: "Distributed Compute" },
    { name: "Apache Kafka", category: "Event Streaming" },
    { name: "MongoDB", category: "NoSQL Database" },
    { name: "PostgreSQL", category: "Relational DB" },
    { name: "Tableau", category: "Business Intelligence" },
    { name: "PowerBI", category: "Analytics & Reports" },
    { name: "MS SQL Server", category: "Enterprise Database" },
    { name: "Oracle", category: "Database Infrastructure" },
  ];

  const industriesCovered = [
    { name: "Automotive", icon: "🚗" },
    { name: "Real Estate", icon: "🏢" },
    { name: "Pharmaceuticals", icon: "💊" },
    { name: "Healthcare", icon: "🏥" },
    { name: "Fintech & Banking", icon: "💳" },
    { name: "E-Commerce", icon: "🛒" },
    { name: "Retail", icon: "🛍️" },
    { name: "Logistics", icon: "🚚" },
  ];

  const trustedClients = [
    { name: "Nissan", label: "Automotive" },
    { name: "MetLife", label: "Insurance" },
    { name: "JTI", label: "Consumer Goods" },
    { name: "Siemens", label: "Technology" },
    { name: "Standard Chartered", label: "Banking" },
    { name: "Robi", label: "Telecom" },
  ];

  const whyAutofyaPillars = [
    {
      title: "Tech-First DNA",
      desc: "Deep hands-on expertise in modern data stacks, real-time streaming, distributed compute, and multi-cloud data engineering.",
    },
    {
      title: "AI-Ready Architecture",
      desc: "Future-proof data pipelines designed specifically to supply clean, structured data for LLMs and predictive ML models.",
    },
    {
      title: "Business-Centric ROI",
      desc: "Delivering clear data monetization, optimized cloud compute costs, and sub-second query performance.",
    },
    {
      title: "Global Credit Standards",
      desc: "Enterprise-grade security, GDPR compliance, SOC2 certification, role-based access control, and data encryption.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B1340] selection:bg-[#00a2ad] selection:text-white font-sans">
      {/* Global Header */}
      <Navbar />

      <main className="flex-1">
        {/* ========================================================= */}
        {/* 1. HERO SECTION (DARK NAVY DATA THEME)                     */}
        {/* ========================================================= */}
        <section className="relative bg-[#060D20] text-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
          {/* Ambient Background Graphic */}
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="/capabilities_digital_trans.jpg"
              alt="Data Engineering Platform Background"
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
                    Enterprise Data Engineering
                  </span>
                </div>

                <div className="bg-white/95 text-[#0B1340] p-8 sm:p-10 rounded-2xl shadow-2xl border border-slate-200 space-y-6">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1340] leading-tight">
                    AI-Ready Data Platforms for <span className="text-[#00a2ad]">Complex Enterprise Environments</span>
                  </h1>

                  <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
                    Turn data into decisions with scalable data pipelines, enterprise data governance, real-time analytics platforms, and cloud data warehousing. By Autofya.
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
                      href="#core-data-services"
                      className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0B1340] font-bold text-base transition-all cursor-pointer"
                    >
                      <span>Explore Services</span>
                      <span>↓</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Hero Visual: Video / Data Pipeline Card */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-md lg:max-w-none">
                  <div className="relative rounded-2xl bg-slate-950 border border-white/20 p-2 shadow-2xl overflow-hidden group cursor-pointer">
                    <div className="relative w-full h-72 rounded-xl overflow-hidden">
                      <Image
                        src="/company_video_thumb.jpg"
                        alt="Turn Data Into Decisions Video Thumbnail"
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors flex flex-col items-center justify-center space-y-3">
                        <div className="w-16 h-16 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                          <span className="text-2xl ml-1">►</span>
                        </div>
                        <span className="text-xs font-bold text-white uppercase tracking-wider bg-slate-900/80 px-3 py-1 rounded-full border border-white/20">
                          Watch Data Architecture Overview
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. TRUSTED CLIENT PARTNERS BAR                             */}
        {/* ========================================================= */}
        <section className="py-16 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-500">
              Trusted by Fast-Growing Tech Teams From Enterprise Companies
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center opacity-85 hover:opacity-100 transition-opacity">
              {trustedClients.map((client, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-sm text-center group cursor-default"
                >
                  <p className="text-base sm:text-lg font-black text-[#0B1340] group-hover:text-[#00a2ad] transition-colors">
                    {client.name}
                  </p>
                  <p className="text-[10px] text-slate-400 font-medium">
                    {client.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. OUR CORE DATA SERVICES                                  */}
        {/* ========================================================= */}
        <section id="core-data-services" className="py-24 bg-white border-b border-slate-200 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                End-to-End Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1340]">
                Our Core Data Services
              </h2>
              <div className="w-20 h-1 bg-[#00a2ad] rounded-full mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreServices.map((srv, idx) => (
                <div
                  key={idx}
                  className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-[#00a2ad] hover:bg-white hover:shadow-xl transition-all duration-300 space-y-4 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-2xl shadow-sm group-hover:scale-110 transition-transform">
                    {srv.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-[#0B1340] group-hover:text-[#00a2ad] transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. CERTIFICATIONS                                         */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                Verified Excellence
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
                Certifications
              </h2>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 max-w-5xl mx-auto">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="px-6 py-3.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs sm:text-sm font-bold text-[#0B1340] hover:border-[#00a2ad] hover:text-[#00a2ad] transition-colors"
                >
                  🏆 {cert}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. TOOLS THAT WE USE                                       */}
        {/* ========================================================= */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                Modern Data Stack
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
                Tools that We Use
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {toolsList.map((tool, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-[#00a2ad] shadow-sm hover:shadow-md transition-all text-center space-y-1 group"
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
        {/* 6. INDUSTRIES COVERED                                      */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                Domain Reach
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
                Industries Covered
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {industriesCovered.map((ind, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white border border-slate-200 hover:border-[#00a2ad] shadow-sm transition-all space-y-2"
                >
                  <span className="text-2xl block">{ind.icon}</span>
                  <p className="text-xs font-bold text-[#0B1340]">{ind.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 7. FEATURED CASE STUDY SHOWCASE                           */}
        {/* ========================================================= */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                  Proven Track Record
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
                  Case Studies
                </h2>
              </div>

              <Link
                href="/schedule"
                className="px-6 py-2.5 rounded-full bg-[#FF9000] hover:bg-[#E68200] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
              >
                View All Case Studies
              </Link>
            </div>

            <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
              
              {/* Image Left */}
              <div className="lg:col-span-6 relative h-80 sm:h-96 w-full">
                <Image
                  src="/cs_digital_wallet.jpg"
                  alt="Legacy Data Transformation for Global Insurance Provider"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-transparent" />
              </div>

              {/* Text Content Right */}
              <div className="lg:col-span-6 p-8 sm:p-12 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00a2ad] bg-cyan-100 px-3 py-1 rounded-full">
                  Financial Services &amp; Insurance
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1340] leading-tight">
                  Legacy Data Transformation for a Global Insurance Provider
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Autofya modernized legacy mainframe data pipelines into an automated real-time cloud data warehouse on Snowflake, reducing ETL processing time by 85% and enabling real-time claims risk analytics.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-2 border-t border-slate-200">
                  <div>
                    <p className="text-3xl font-black text-[#0B1340]">1TB+</p>
                    <p className="text-xs text-slate-500 font-medium">Daily Stream Data Ingested</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-[#00a2ad]">300+</p>
                    <p className="text-xs text-slate-500 font-medium">Automated Cloud ETL Pipelines</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 8. WHY AUTOFYA (4 VALUE PILLARS)                          */}
        {/* ========================================================= */}
        <section className="py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: 4 Value Pillars */}
              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-3">
                  <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                    The Autofya Difference
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
                    Why Autofya
                  </h2>
                  <p className="text-slate-600 text-base">
                    Partnering with Autofya means getting access to senior data engineers, modern cloud architectures, and enterprise data governance.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {whyAutofyaPillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2 hover:border-[#00a2ad] transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-cyan-100 text-[#00a2ad] flex items-center justify-center font-bold text-sm">
                        0{idx + 1}
                      </div>
                      <h3 className="text-lg font-bold text-[#0B1340]">
                        {pillar.title}
                      </h3>
                      <p className="text-slate-600 text-xs leading-relaxed">
                        {pillar.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Squad Image */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                  <Image
                    src="/company_team_group.jpg"
                    alt="Autofya Data Engineering Team"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D20]/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl text-[#0B1340]">
                    <p className="text-xs font-bold text-[#00a2ad] uppercase tracking-wider">
                      Autofya Data Engineers
                    </p>
                    <p className="text-sm font-semibold">
                      Senior Cloud Data Architects &amp; Analytics Specialists
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 9. CALLOUT BANNER CARD                                   */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#0B1340] via-[#122268] to-[#0B1340] rounded-3xl border border-white/15 p-8 lg:p-14 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Callout Text Left */}
              <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
                <span className="text-xs uppercase tracking-widest font-extrabold text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/30">
                  Modern Data Infrastructure
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  Ready to Scale Your Data Infrastructure?
                </h2>
                <p className="text-slate-300 text-base sm:text-lg max-w-2xl">
                  Connect with Autofya&apos;s data architects to audit your existing ETL pipelines, modernize legacy databases, or build AI-ready cloud data platforms.
                </p>

                <div className="pt-2">
                  <Link
                    href="/schedule"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FF9000] hover:bg-[#E68200] text-white font-bold text-base shadow-xl transition-all cursor-pointer hover:scale-105"
                  >
                    <span>Schedule a Call</span>
                    <span className="text-xl">→</span>
                  </Link>
                </div>
              </div>

              {/* Graphic Right */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-full max-w-sm h-64 rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                  <Image
                    src="/capabilities_digital_trans.jpg"
                    alt="Autofya Data Engineering Squad"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-bold text-white">Autofya Data Practice</p>
                    <p className="text-xs text-slate-300">Certified Snowflake &amp; Databricks Engineers</p>
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
