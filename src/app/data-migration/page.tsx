"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function DataMigrationPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const offeredServices = [
    {
      title: "Cloud Data Migration (AWS, Azure, GCP)",
      desc: "Migrating enterprise databases, data warehouses, and application stores from legacy on-premise servers to AWS, Microsoft Azure, or Google Cloud.",
    },
    {
      title: "Database Migration & Schema Conversion",
      desc: "Automated schema translation, data type mapping, and stored procedure conversion between heterogeneous databases (e.g. Oracle/SQL Server to PostgreSQL/MySQL).",
    },
    {
      title: "On-Premise to Cloud Data Warehouse Migration",
      desc: "Transitioning legacy data warehouses (Teradata, Netezza, Exadata) to modern cloud platforms like Snowflake, BigQuery, and Databricks.",
    },
    {
      title: "Real-Time Continuous Data Replication (CDC)",
      desc: "Implementing Change Data Capture (CDC) pipelines for zero-downtime, continuous real-time data synchronization during phase-by-phase cutovers.",
    },
    {
      title: "Legacy Mainframe & ERP Data Extraction",
      desc: "Extracting, normalizing, and restructuring complex data structures from legacy IBM mainframes, SAP ERPs, and AS400 core business systems.",
    },
    {
      title: "Big Data Lake Migration (Hadoop to Cloud)",
      desc: "Modernizing legacy Apache Hadoop / HDFS clusters to scalable cloud object stores (AWS S3, Azure Data Lake Storage, GCP Cloud Storage).",
    },
    {
      title: "Automated Data Validation & Integrity Checks",
      desc: "Executing automated checksum, row-count, and field-level data reconciliation scripts to verify 100% data fidelity between source and target.",
    },
    {
      title: "Post-Migration Performance Optimization",
      desc: "Fine-tuning database indexing, partitioning strategies, materialization, and query execution plans for sub-second database performance.",
    },
    {
      title: "Data Cleansing & Schema Transformation",
      desc: "De-duplicating records, standardizing schema formats, and cleansing corrupted or legacy fields during the migration process.",
    },
    {
      title: "Data Security, Encryption & Compliance Audits",
      desc: "Enforcing end-to-end TLS encryption, data masking for PII, role-based access control (RBAC), and SOC2/GDPR compliance verification.",
    },
  ];

  const techStack = [
    { name: "AWS DMS", category: "Database Migration" },
    { name: "Azure Migration", category: "Cloud Database Service" },
    { name: "GCP Migration Engine", category: "Google Cloud Infra" },
    { name: "Fivetran", category: "Automated Data Integration" },
    { name: "Snowflake", category: "Cloud Data Warehouse" },
    { name: "Databricks", category: "Lakehouse & Spark" },
    { name: "PostgreSQL", category: "Target Database" },
    { name: "Oracle DB", category: "Legacy Database" },
    { name: "MongoDB", category: "NoSQL Migration" },
    { name: "Talend", category: "ETL & Integration" },
  ];

  const industriesList = [
    { name: "FINANCIAL SERVICES & BANKING", desc: "Core banking database migration, transaction history transfer, and zero-downtime cutover." },
    { name: "HEALTHCARE & LIFE SCIENCES", desc: "HIPAA-compliant EHR database migration, medical archive transfer, and audit logging." },
    { name: "E-COMMERCE & RETAIL", desc: "Catalog data migration, customer history sync, and payment gateway ledger transfer." },
    { name: "TELECOMMUNICATIONS", desc: "Multi-terabyte billing system migration, subscriber database sync, and network log transfer." },
    { name: "MANUFACTURING & LOGISTICS", desc: "ERP data extraction, supply chain inventory migration, and IoT telemetry transfer." },
    { name: "GOVERNMENT & PUBLIC SECTOR", desc: "Legacy record digitization, secure cloud migration, and strict compliance auditing." },
    { name: "ENERGY & UTILITIES", desc: "Smart meter telemetry data migration, asset management database modernization." },
    { name: "SAAS & MEDIA PLATFORMS", desc: "Multi-tenant tenant database consolidation and cloud data lake migration." },
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
      question: "How does Autofya ensure zero data loss during migration?",
      answer:
        "We utilize continuous Change Data Capture (CDC) and automated row-by-row checksum validation engines. Before cutover, automated reconciliation scripts verify data counts, hash signatures, and constraint rules between source and destination databases.",
    },
    {
      question: "Will our business operations experience downtime during data migration?",
      answer:
        "No! Autofya specializes in zero-downtime data migrations. We set up real-time CDC replication streams that keep the target database in sync with live production data. The final cutover takes place in seconds during scheduled low-traffic windows.",
    },
    {
      question: "How do you handle schema differences between legacy and target databases?",
      answer:
        "Our data architects use automated schema conversion tools combined with custom transformation scripts to map legacy data types, indexes, and stored procedures to modern cloud target schemas flawlessly.",
    },
    {
      question: "How long does an enterprise data migration project take?",
      answer:
        "Migration timelines depend on data volume, schema complexity, and legacy systems. Small-to-medium database migrations take 2 to 4 weeks, while complex multi-terabyte enterprise data warehouse migrations range from 6 to 12 weeks.",
    },
    {
      question: "Is our proprietary data secure during cloud migration?",
      answer:
        "Yes, 100%. Data in transit is protected using TLS 1.3 encryption, and data at rest is encrypted with AES-256. PII is automatically masked, and all engineers work inside isolated, SOC2-compliant secure environments.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B1340] selection:bg-[#00a2ad] selection:text-white font-sans">
      {/* Global Header */}
      <Navbar />

      <main className="flex-1">
        {/* ========================================================= */}
        {/* 1. HERO SECTION (DIGITAL DATA STREAM THEME)              */}
        {/* ========================================================= */}
        <section className="relative bg-[#060D20] text-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
          {/* Digital Stream Background */}
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="/capabilities_digital_trans.jpg"
              alt="Data Migration Services Background"
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
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 uppercase tracking-wider">
                    Enterprise Data Migration Practice
                  </span>
                </div>

                <div className="bg-white/95 text-[#0B1340] p-8 sm:p-10 rounded-2xl shadow-2xl border border-slate-200 space-y-6">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1340] leading-tight">
                    Data Migration <span className="text-[#00a2ad]">Services</span>
                  </h1>

                  <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
                    Seamless, secure, and zero-downtime data migration for modern enterprise systems. By Autofya.
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
                      href="#offered-services"
                      className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0B1340] font-bold text-base transition-all cursor-pointer"
                    >
                      <span>Explore Services</span>
                      <span>↓</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Hero Visual: Migration Telemetry Card */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-md lg:max-w-none">
                  <div className="relative rounded-2xl bg-slate-950 border border-white/20 p-5 shadow-2xl overflow-hidden font-mono">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-slate-400">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                        <span className="ml-2 text-slate-300">Autofya-CDC-Migrator.sh</span>
                      </div>
                      <span className="text-[10px] text-cyan-400 font-bold bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/30">
                        LIVE REPLICATION
                      </span>
                    </div>

                    <div className="py-4 space-y-2 text-xs text-slate-300">
                      <p className="text-slate-400"># Source: On-Premise Oracle 19c Mainframe</p>
                      <p className="text-slate-400"># Target: Snowflake Cloud Data Warehouse</p>
                      <p className="text-emerald-400">✔ Schema Conversion: <span className="text-slate-100">100% Completed</span></p>
                      <p className="text-cyan-300">✔ CDC Stream Synced: <span className="text-slate-100">5,420,000 Records / sec</span></p>
                      <p className="text-amber-400">✔ Data Validation Hash: <span className="text-slate-100">MATCH (0 Errors)</span></p>
                    </div>

                    <div className="mt-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs flex items-center justify-between font-sans">
                      <span>⚡ Zero Downtime Cutover</span>
                      <span className="font-bold text-emerald-400">100% Fidelity</span>
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
              <div className="w-16 h-16 rounded-2xl bg-cyan-600 text-white flex items-center justify-center shadow-lg font-bold text-2xl">
                ⇄
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-slate-700 text-base leading-relaxed max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-xl font-bold text-[#0B1340] border-b border-slate-100 pb-3">
                  De-Risking Enterprise Data Migration
                </h3>
                <p>
                  Migrating mission-critical enterprise databases and data warehouses is a complex engineering challenge. Without proper planning, data migrations run the risk of data loss, prolonged downtime, corrupted schemas, and compliance violations.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-xl font-bold text-[#0B1340] border-b border-slate-100 pb-3">
                  Autofya Migration Guarantee
                </h3>
                <p>
                  At Autofya, our data migration engineers utilize automated schema translation, Change Data Capture (CDC) streaming, and parallel run validation frameworks. We guarantee zero data loss and seamless cutovers for cloud data migrations.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. OFFERED SERVICES SECTION                                */}
        {/* ========================================================= */}
        <section id="offered-services" className="py-20 bg-white border-b border-slate-200 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Heading */}
              <div className="lg:col-span-5 space-y-4 sticky top-28">
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                  Migration Spectrum
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1340]">
                  Offered <br />
                  <span className="text-[#00a2ad]">Services</span>
                </h2>
                <div className="w-16 h-1 bg-[#00a2ad] rounded-full" />
                <p className="text-slate-600 text-base leading-relaxed">
                  End-to-end data migration services designed to modernize legacy database architecture with zero operational downtime.
                </p>
                <div className="pt-4">
                  <Link
                    href="/schedule"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B1340] hover:bg-[#15205b] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                  >
                    <span>Talk to Migration Lead</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Offered Services List */}
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
        {/* 4. TECHNOLOGIES WE USE                                    */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                Migration Stack
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
                Technologies we use
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200/90 hover:border-[#00a2ad] shadow-sm hover:shadow-md transition-all text-center space-y-1 group"
                >
                  <p className="text-lg font-bold text-[#0B1340] group-hover:text-[#00a2ad] transition-colors">
                    {tech.name}
                  </p>
                  <p className="text-xs font-semibold text-slate-400">
                    {tech.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. INDUSTRIES SECTION                                      */}
        {/* ========================================================= */}
        <section className="py-20 bg-white border-b border-slate-200">
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
                      className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 hover:shadow-md transition-all space-y-1"
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

              {/* Right Column: Cloud Hand Graphic */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                  <Image
                    src="/capabilities_digital_trans.jpg"
                    alt="Autofya Data Migration Cloud Hand Graphic"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D20]/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl text-[#0B1340]">
                    <p className="text-xs font-bold text-[#00a2ad] uppercase tracking-wider">
                      Cloud Migration Architecture
                    </p>
                    <p className="text-sm font-semibold">
                      Zero Data Loss &amp; Continuous CDC Sync
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. WHO WE'VE WORKED WITH                                   */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
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
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-[#00a2ad] transition-all text-center group cursor-default"
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
        {/* 7. FEATURE DEEP-DIVE #1 (TEXT LEFT, GRAPHIC RIGHT)        */}
        {/* ========================================================= */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Text */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                  Zero-Downtime CDC
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340] leading-tight">
                  Zero-Downtime Live CDC &amp; Automated Schema Translation
                </h2>
                <div className="w-16 h-1 bg-[#00a2ad] rounded-full" />
                
                <p className="text-slate-600 text-base leading-relaxed">
                  Eliminate business downtime. Autofya&apos;s data migration engineers deploy live Change Data Capture (CDC) pipelines that continuously mirror live source database changes to your new cloud environment in real time.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1340]">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</span>
                    <span>Automated Schema Translation &amp; Data Type Casting</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1340]">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</span>
                    <span>Continuous Real-Time Change Data Capture (CDC) Sync</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1340]">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</span>
                    <span>Automated Data Masking &amp; PII Anonymization</span>
                  </div>
                </div>
              </div>

              {/* Right Image */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-lg h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                  <Image
                    src="/hero_cloud_devops.jpg"
                    alt="Autofya Data Pipeline Migration Visualization"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D20]/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl text-[#0B1340]">
                    <p className="text-xs font-bold text-[#00a2ad] uppercase tracking-wider">
                      Real-Time Streaming
                    </p>
                    <p className="text-sm font-semibold">
                      Automated Pipeline Execution for Multi-Terabyte Migration
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 8. FEATURE DEEP-DIVE #2 (IMAGE LEFT, TEXT RIGHT)        */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Image */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-lg h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                  <Image
                    src="/hero_ai_engineer.jpg"
                    alt="Autofya Data Security & Verification"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060D20]/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl text-[#0B1340]">
                    <p className="text-xs font-bold text-[#00a2ad] uppercase tracking-wider">
                      Data Integrity Verification
                    </p>
                    <p className="text-sm font-semibold">
                      Automated Reconciliation &amp; Disaster Recovery Failover
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Text */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                  Enterprise Governance
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340] leading-tight">
                  Ensuring 100% Data Integrity &amp; Governance
                </h2>
                <div className="w-16 h-1 bg-[#00a2ad] rounded-full" />
                
                <p className="text-slate-600 text-base leading-relaxed">
                  We enforce automated post-migration reconciliation checks. Row count matches, sum hashes, and foreign key constraint validations are executed automatically before final DNS cutover.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1340]">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</span>
                    <span>Pre-Migration Readiness &amp; Dependency Graph Audits</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1340]">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</span>
                    <span>Automated Disaster Recovery Rollback Controls</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-semibold text-[#0B1340]">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold">✓</span>
                    <span>Compliance Auditing (GDPR, HIPAA, SOC2 Certified)</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 9. LET US HELP YOU WITH YOUR PROJECT BANNER               */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#0B1340] via-[#122268] to-[#0B1340] rounded-3xl border border-white/15 p-8 lg:p-14 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Callout Text Left */}
              <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
                <span className="text-xs uppercase tracking-widest font-extrabold text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/30">
                  Modernize Enterprise Databases
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  Let Us Help You With Your Data Migration Project
                </h2>
                <p className="text-slate-300 text-base sm:text-lg max-w-2xl">
                  Connect with Autofya&apos;s data migration architects to evaluate your legacy database architecture, plan zero-downtime cloud cutovers, or execute schema translations.
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
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-full max-w-sm h-64 rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                  <Image
                    src="/company_team_group.jpg"
                    alt="Autofya Data Migration Practice Team"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-bold text-white">Autofya Data Migration Squad</p>
                    <p className="text-xs text-slate-300">Database Architects &amp; CDC Specialists</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 10. FAQS SECTION                                         */}
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
                    Can&apos;t find the answer you&apos;re looking for? Reach out to our data migration leads directly.
                  </p>
                </div>

                <div className="space-y-3 pt-2 text-sm">
                  <div>
                    <span className="text-xs text-slate-400 font-bold uppercase block">Email Us</span>
                    <a href="mailto:sales@autofya.com" className="text-[#00a2ad] font-semibold hover:underline">
                      sales@autofya.com
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
