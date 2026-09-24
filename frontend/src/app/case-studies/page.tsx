"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScheduleModal } from "@/components/ScheduleModalContext";

interface CaseStudy {
  id: string;
  categories: string[];
  categoryString: string;
  title: string;
  headerBannerText: string;
  image: string;
  client: string;
  summary: string;
  stat1Value: string;
  stat1Label: string;
  stat2Value: string;
  stat2Label: string;
  challenge: string;
  solution: string;
  architecture: string;
  results: string;
}

const CATEGORIES = [
  "All",
  "AI & ML",
  "AI-DLC",
  "Cloud & DevOps",
  "Fintech",
  "Insurtech",
  "ERP & Retail",
  "IoT & Mobility",
  "Healthcare & Biotech",
  "Real Estate",
  "LMS & Education",
  "Media & Entertainment",
  "Cybersecurity",
  "Data Engineering",
];

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "jewelry-insurtech",
    categories: ["Insurtech", "Fintech", "ERP & Retail"],
    categoryString: "FinTech, Insurtech, Retail",
    title: "Jewelry Insurance Claims: Run 15,000+ Replacement Assessments on One Web Platform",
    headerBannerText: "How Autofya Built a Cloud Assessment Workspace for Canadian Jewelry Insurtech",
    image: "/capabilities_digital_trans.jpg",
    client: "Canadian Jewelry Claims Enterprise",
    summary:
      "Replaced fragmented manual appraisal spreadsheets with a cloud-native appraisal workspace featuring automated image verification, valuation risk modeling, and seamless multi-party approval workflows.",
    stat1Value: "15,000+",
    stat1Label: "Assessments Processed",
    stat2Value: "75%",
    stat2Label: "Faster Claim Approvals",
    challenge:
      "Paper-based appraisals and decentralized vendor channels caused 3-week delays in claim settlements, duplicate valuations, and elevated risk of insurance fraud.",
    solution:
      "Autofya delivered an integrated cloud web portal linking insurers, jewelers, and claimants with AI gem image verification, automated pricing databases, and instant claim tracking.",
    architecture:
      "Next.js 14 frontend, Python Django microservices, PostgreSQL, Amazon S3 encrypted document store, Auth0 multi-tenant security.",
    results:
      "Reduced claims turnaround time from 21 days to under 48 hours while successfully processing 15,000+ high-value appraisals with zero fraud incidents.",
  },
  {
    id: "shared-bus-mobility",
    categories: ["Cloud & DevOps", "IoT & Mobility", "Cybersecurity"],
    categoryString: "Transportation, IoT, Cloud",
    title: "Scaling Shared Bus Travel with Serverless Cloud Infrastructure",
    headerBannerText: "How Autofya Scaled Nationwide Shared Mobility with Serverless Microservices",
    image: "/cs_safety_at_sea.jpg",
    client: "National Shared Mobility & Bus Operator",
    summary:
      "Built an event-driven serverless ticketing, passenger tracking, and fleet telemetry microservices platform capable of scaling dynamically during rush hours with sub-50ms latency.",
    stat1Value: "5M+",
    stat1Label: "Monthly Passengers Serviced",
    stat2Value: "99.99%",
    stat2Label: "Cloud Infrastructure Uptime",
    challenge:
      "Peak morning commuting hours caused severe API latency spikes and ticket booking crashes on legacy monolithic servers, leading to revenue loss.",
    solution:
      "Autofya re-architected the entire backend to AWS Lambda serverless endpoints, Redis cluster caching, and dynamic QR ticketing APIs with auto-scaling gateways.",
    architecture:
      "AWS Lambda, DynamoDB, Redis Cloud, Node.js GraphQL API, WebSockets real-time bus tracking, Flutter Mobile Apps.",
    results:
      "Handled 5M+ monthly passengers seamlessly with 99.99% uptime during peak holiday rushes and reduced server hosting overhead by 60%.",
  },
  {
    id: "fleet-aidlc",
    categories: ["AI & ML", "AI-DLC", "IoT & Mobility"],
    categoryString: "AI-DLC, IoT, Transportation",
    title: "Engineering the Future of Fleet & Logistics Distribution with Autofya AI-DLC",
    headerBannerText: "How Autofya Transformed Commercial Fleet Operations with Predictive AI",
    image: "/hero_ai_engineer.jpg",
    client: "Global Logistics & Supply Chain Giant",
    summary:
      "Autofya implemented an autonomous AI-driven dynamic routing and predictive vehicle maintenance platform handling 50,000+ commercial transport vehicles across multi-region logistics corridors.",
    stat1Value: "45%",
    stat1Label: "Fuel Consumption Reduction",
    stat2Value: "99.8%",
    stat2Label: "On-Time Delivery Rate",
    challenge:
      "Legacy logistics tracking relied on manual dispatch and static GPS polling, resulting in high fuel wastage, route bottlenecks, and unpredictable vehicle engine downtime.",
    solution:
      "Autofya engineered an AI-DLC powered fleet platform with real-time IoT sensor telemetry, automated predictive maintenance algorithms, and multi-variable dynamic route optimization.",
    architecture:
      "Kafka real-time event streaming, Python PyTorch telemetry models, React dynamic map dashboard, microservices on AWS EKS.",
    results:
      "Achieved 45% lower fuel consumption, saved $3.2M in annual emergency maintenance, and elevated route dispatch efficiency to 99.8%.",
  },
  {
    id: "music-rights-aidlc",
    categories: ["AI & ML", "AI-DLC", "Media & Entertainment"],
    categoryString: "AI & ML, Media, Fintech",
    title: "Powering Music Rights & Royalty Licensing with Autofya AI-DLC",
    headerBannerText: "Automating Audio Fingerprinting & Micropayments for Global Rights Owners",
    image: "/hero_cloud_devops.jpg",
    client: "Global Media & Rights Catalog Corp",
    summary:
      "Built an AI audio-fingerprinting and automated royalty distribution engine capable of processing millions of streaming data points per minute with instant micropayments.",
    stat1Value: "100M+",
    stat1Label: "Audio Tracks Cataloged",
    stat2Value: "99.4%",
    stat2Label: "Copyright Matching Accuracy",
    challenge:
      "Unstructured audio metadata and untracked online streams led to millions in lost copyright royalties and delayed payments to independent music artists.",
    solution:
      "Autofya built deep-learning acoustic fingerprinting models that identify copyrighted audio across broadcast networks and calculate split royalties in real-time.",
    architecture:
      "PyTorch, FastAPI, ClickHouse Analytics, React Dashboard, AWS SQS, Smart Contracts for automated royalty split execution.",
    results:
      "Cataloged over 100M audio tracks with 99.4% matching accuracy, automating quarterly royalty payouts to 40,000+ creators.",
  },
  {
    id: "ispahani-erp",
    categories: ["ERP & Retail", "Data Engineering", "Cloud & DevOps"],
    categoryString: "ERP & Retail, Enterprise Supply Chain",
    title: "One ERP for Two Legacies: Digitizing Tea Auction-to-Retail & Textile Operations",
    headerBannerText: "Autofya Odoo ERP Transformation for Enterprise Tea & Textile Conglomerate",
    image: "/capabilities_mvp_dev.jpg",
    client: "Ispahani Group & Enterprise Textile Division",
    summary:
      "Consolidated 4 separate legacy ERP systems into a unified Odoo 17 Enterprise platform supporting tea auctions, warehouse distribution, retail POS, and financial reporting at enterprise scale.",
    stat1Value: "100%",
    stat1Label: "Real-Time Stock Telemetry",
    stat2Value: "40%",
    stat2Label: "Procurement Cycle Reduction",
    challenge:
      "Fragmented legacy software across tea plantations, processing plants, and retail stores led to stock inventory discrepancies and delayed financial auditing.",
    solution:
      "Autofya deployed a custom Odoo 17 ERP with automated auction bidding modules, multi-currency ledger consolidation, and barcode warehouse scanning.",
    architecture:
      "Odoo 17 Enterprise, Python, PostgreSQL, Docker, Redis, Next.js Custom BI Dashboards.",
    results:
      "Achieved 100% inventory visibility across 80+ distribution hubs and accelerated monthly financial consolidation by 40%.",
  },
  {
    id: "biz-simulation-aidlc",
    categories: ["AI & ML", "AI-DLC", "Fintech"],
    categoryString: "AI & ML, Fintech, Decision Science",
    title: "Accelerating Business Simulation Platform Development with Autofya AI-DLC",
    headerBannerText: "Empowering Enterprise Executives with Real-Time Predictive Market Modeling",
    image: "/ai_development_collaboration.jpg",
    client: "Apex Strategy & Decision Analytics",
    summary:
      "Engineered a cloud-based Monte Carlo financial simulation engine powered by Autofya AI-DLC, allowing corporate executives to simulate complex macroeconomic scenario models in seconds.",
    stat1Value: "12x",
    stat1Label: "Faster Scenario Execution",
    stat2Value: "98.2%",
    stat2Label: "Model Forecasting Precision",
    challenge:
      "Legacy financial forecasting tools required hours to compute stress-test matrices across dynamic interest rates and inflation variables.",
    solution:
      "Autofya leveraged GPU-accelerated computing pipelines and proprietary AI-DLC models to compute thousands of market scenario variations on demand.",
    architecture:
      "C++ CUDA backend bindings, Python FastAPI, WebAssembly client rendering, React, WebGL Interactive charts.",
    results:
      "Boosted scenario calculation speed by 12x, allowing executive leadership to test real-time risk matrices during strategy meetings.",
  },
  {
    id: "7thkeys-realestate",
    categories: ["Real Estate", "ERP & Retail", "Cybersecurity"],
    categoryString: "Real Estate, ERP, Asset Mgmt",
    title: "7th Keys: Securing High-Value Property Lifecycle Operations Through ERP Transformation",
    headerBannerText: "Autofya End-to-End ERP Modernization for Commercial Real Estate Giants",
    image: "/capabilities_managed_services.jpg",
    client: "7th Keys Properties & Asset Management",
    summary:
      "End-to-end ERP implementation covering commercial property leasing, tenant portals, IoT facility monitoring, and automated asset depreciation tracking.",
    stat1Value: "$500M+",
    stat1Label: "Real Estate Assets Managed",
    stat2Value: "65%",
    stat2Label: "Maintenance Downtime Reduction",
    challenge:
      "Tenant lease management and facility maintenance requests were handled manually via email, leading to vacant slot leaks and untracked vendor costs.",
    solution:
      "Autofya built a unified tenant self-service portal, automated lease invoicing engine, and smart maintenance ticketing workflow integrated directly into Odoo ERP.",
    architecture:
      "Odoo ERP, Node.js, React Native Mobile App, AWS KMS encryption, PostgreSQL.",
    results:
      "Successfully manages a $500M+ property portfolio while reducing maintenance turnaround times by 65%.",
  },
  {
    id: "lims-modernization",
    categories: ["Healthcare & Biotech", "Cloud & DevOps", "AI & ML"],
    categoryString: "Healthcare, Cloud, Biotech",
    title: "Incremental Modernization of Desktop Laboratory Information Management System (LIMS)",
    headerBannerText: "Migrating Legacy Desktop Bio-Lab Software into Web Cloud LIMS Workspace",
    image: "/about_team_collaboration.jpg",
    client: "European Biotech Research Institute",
    summary:
      "Migrated legacy desktop laboratory management software to a secure Web-based LIMS integrated with Nextflow AI pipelines and HIPAA-compliant patient data vaults.",
    stat1Value: "5x",
    stat1Label: "Faster Genomic Pipeline Run",
    stat2Value: "60%",
    stat2Label: "Reduction in Compute Costs",
    challenge:
      "Desktop-bound lab software limited researcher collaboration across partner laboratories in Germany, France, and Sweden.",
    solution:
      "Autofya executed a zero-downtime strangler-fig migration pattern, wrapping desktop C++ libraries in web microservices with modern web UIs and role-based access.",
    architecture:
      "Next.js, Python FastAPI, WebAssembly C++ wrappers, Kubernetes EKS, Amazon S3, Nextflow pipelines.",
    results:
      "Accelerated genomic sequencing analysis pipelines by 5x and enabled real-time multi-national research collaboration with zero data loss.",
  },
  {
    id: "city-bank-fintech",
    categories: ["Fintech", "Cloud & DevOps", "Cybersecurity"],
    categoryString: "Fintech, Banking, Cloud",
    title: "Next-Gen Digital Banking Core Platform for City Commercial Bank",
    headerBannerText: "Transforming Legacy Banking into High-Speed Cloud Microservices",
    image: "/cs_digital_wallet.jpg",
    client: "City Commercial Bank",
    summary:
      "Transforming legacy core banking infrastructure into a high-speed cloud-native microservices ecosystem serving over 10 million daily active transactions with bank-grade security.",
    stat1Value: "10M+",
    stat1Label: "Daily Active Transactions",
    stat2Value: "99.99%",
    stat2Label: "Core Banking System Uptime",
    challenge:
      "Monolithic core banking systems prevented rapid deployment of new mobile features and struggled under peak morning transfer spikes.",
    solution:
      "Autofya designed a microservices event mesh with PCI-DSS compliant encryption, automated fraud detection pipelines, and sub-second instant transfer APIs.",
    architecture:
      "Spring Boot Java microservices, Apache Kafka, HashiCorp Vault, Kubernetes EKS, PostgreSQL database clusters.",
    results:
      "Processes 10M+ daily transactions effortlessly with 99.99% system availability and 8x faster feature release velocity.",
  },
  {
    id: "iiitk-smart-campus",
    categories: ["AI & ML", "LMS & Education", "Cybersecurity"],
    categoryString: "AI & ML, Smart Campus, LMS",
    title: "Streamlining Campus Attendance & Access Control at IIITK with Facial Recognition",
    headerBannerText: "Edge AI Liveness Facial Recognition for Indian Institute of Information Technology",
    image: "/company_team_group.jpg",
    client: "Indian Institute of Information Technology Kottayam (IIITK)",
    summary:
      "Deployed edge AI cameras and liveness detection models across campus lecture halls for real-time automated student attendance tracking and access control.",
    stat1Value: "99.5%",
    stat1Label: "Facial Recognition Accuracy",
    stat2Value: "80%",
    stat2Label: "Administrative Time Saved",
    challenge:
      "Manual paper roll calls in 200+ student lecture halls wasted 15 minutes of every class period and suffered from proxy attendance.",
    solution:
      "Autofya engineered anti-spoofing liveness facial recognition models running on edge AI hardware integrated with IIITK's student LMS portal.",
    architecture:
      "PyTorch, OpenCV, TensorRT Edge AI, React LMS Dashboard, PostgreSQL, WebSockets.",
    results:
      "Reduced roll-call overhead to 0 seconds, eliminated proxy attendance, and achieved 99.5% accuracy across 3,000+ students.",
  },
  {
    id: "omnichannel-retail",
    categories: ["ERP & Retail", "Cloud & DevOps"],
    categoryString: "ERP & Retail, E-Commerce",
    title: "Automating Global Supply Chain with Autofya Odoo ERP & E-Commerce Integration",
    headerBannerText: "Real-Time Omnichannel Stock Sync & Automated Warehouse Fulfillment",
    image: "/ecommerce_retail_app.jpg",
    client: "Global Retail & Distribution Network",
    summary:
      "Integrated online e-commerce stores with Odoo ERP warehouse hubs for real-time order routing, automated inventory syncing, and predictive stock replenishment.",
    stat1Value: "45%",
    stat1Label: "Fulfillment Speed Increase",
    stat2Value: "100%",
    stat2Label: "Stock Accuracy Across Outlets",
    challenge:
      "Stockouts during flash sales due to delay between Shopify webstores and physical warehouse inventory systems.",
    solution:
      "Autofya built high-frequency bidirectional webhooks linking Shopify, custom webstores, and Odoo ERP for sub-second inventory sync.",
    architecture:
      "Shopify API, Odoo ERP, Next.js, Redis, AWS EventBridge, PostgreSQL.",
    results:
      "Eliminated overselling completely and boosted fulfillment speed by 45% across 12 distribution centers.",
  },
];

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);
  const { openScheduleModal } = useScheduleModal();

  // Filter case studies by category & search
  const filteredCaseStudies = useMemo(() => {
    return CASE_STUDIES.filter((study) => {
      const matchesCategory =
        selectedCategory === "All" ||
        study.categories.includes(selectedCategory);
      
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        study.title.toLowerCase().includes(q) ||
        study.summary.toLowerCase().includes(q) ||
        study.client.toLowerCase().includes(q) ||
        study.categoryString.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white text-[#0B1340] font-sans flex flex-col">
      {/* Top Main Navigation */}
      <Navbar />

      {/* ----------------- HERO HEADER SECTION ----------------- */}
      <section className="bg-[#060B27] text-white pt-32 pb-20 sm:pt-36 sm:pb-24 relative overflow-hidden">
        {/* Background Decorative Tech Lines */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#00a2ad]/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl"></div>
          <div className="w-full h-full bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
        </div>

        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Breadcrumb Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00a2ad]/10 border border-[#00a2ad]/30 text-[#00a2ad] text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00a2ad] animate-pulse"></span>
            Case Studies
          </div>

          {/* Main Title matching Brain Station 23 layout */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
            Proof that we deliver!
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg lg:text-xl font-normal leading-relaxed">
            We do not deliver outcomes. These case studies reflect how Autofya worked closely with clients to solve complex challenges, align strategy, and deliver scalable, high-performing products hand-in-hand.
          </p>
        </div>
      </section>

      {/* ----------------- MAIN SHOWCASE SECTION (FILTER + GRID) ----------------- */}
      <section className="py-16 sm:py-20 bg-white flex-1">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Search Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-100">
            <div>
              <h2 className="text-2xl font-bold text-[#0B1340]">
                Explore Autofya Client Stories ({filteredCaseStudies.length})
              </h2>
              <p className="text-slate-500 text-sm mt-0.5">
                Filter by industry category or search for specific technologies
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search case studies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#00a2ad] focus:ring-1 focus:ring-[#00a2ad] transition-all"
              />
              <svg
                className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 text-xs font-bold"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* ----------------- LEFT SIDEBAR: CATEGORY FILTERS ----------------- */}
            <div className="lg:col-span-3">
              <div className="sticky top-28 bg-slate-50/70 border border-slate-200/80 rounded-2xl p-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 px-3">
                  Categories
                </h3>
                
                <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-1.5 pb-2 lg:pb-0 scrollbar-none">
                  {CATEGORIES.map((category) => {
                    const isActive = selectedCategory === category;
                    const count =
                      category === "All"
                        ? CASE_STUDIES.length
                        : CASE_STUDIES.filter((cs) => cs.categories.includes(category)).length;

                    return (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all shrink-0 w-auto lg:w-full text-left cursor-pointer ${
                          isActive
                            ? "bg-[#F59E0B] text-white shadow-sm"
                            : "text-slate-600 hover:bg-slate-200/60 hover:text-slate-900"
                        }`}
                      >
                        <span>{category}</span>
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ml-2 ${
                            isActive
                              ? "bg-white/20 text-white"
                              : "bg-slate-200 text-slate-600"
                          }`}
                        >
                          {count}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ----------------- RIGHT GRID: CASE STUDY CARDS ----------------- */}
            <div className="lg:col-span-9">
              {filteredCaseStudies.length === 0 ? (
                <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                  <span className="text-4xl block mb-3">🔍</span>
                  <h3 className="text-lg font-bold text-slate-800">No case studies found</h3>
                  <p className="text-slate-500 text-sm mt-1 max-w-sm mx-auto">
                    Try clearing your search query or selecting a different industry category.
                  </p>
                  <button
                    onClick={() => {
                      setSelectedCategory("All");
                      setSearchQuery("");
                    }}
                    className="mt-4 px-5 py-2 rounded-full bg-[#00a2ad] text-white font-semibold text-xs hover:bg-[#00828a] transition-all cursor-pointer"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredCaseStudies.map((study) => (
                    <div
                      key={study.id}
                      className="group bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col overflow-hidden"
                    >
                      {/* Image Banner */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                        <Image
                          src={study.image}
                          alt={study.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, 40vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
                        
                        {/* Overlay Header Banner Text matching screenshot design */}
                        <div className="absolute bottom-3 left-4 right-4 text-white">
                          <span className="inline-block text-[11px] font-extrabold uppercase tracking-wider text-[#F59E0B] bg-slate-900/80 px-2.5 py-0.5 rounded border border-amber-500/30 mb-1.5">
                            {study.client}
                          </span>
                          <p className="text-xs font-semibold text-slate-200 line-clamp-2 drop-shadow">
                            {study.headerBannerText}
                          </p>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          {/* Tags */}
                          <div className="text-[11px] font-bold text-[#00a2ad] uppercase tracking-wider mb-2">
                            {study.categoryString}
                          </div>

                          {/* Title */}
                          <h3 className="text-lg font-bold text-[#0B1340] group-hover:text-[#00a2ad] transition-colors leading-snug mb-3">
                            {study.title}
                          </h3>

                          {/* Summary */}
                          <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-6">
                            {study.summary}
                          </p>
                        </div>

                        <div>
                          {/* Stats Preview Row */}
                          <div className="grid grid-cols-2 gap-4 py-3 px-4 bg-slate-50 rounded-xl border border-slate-100 mb-5">
                            <div>
                              <div className="text-xl font-bold text-[#00a2ad]">
                                {study.stat1Value}
                              </div>
                              <div className="text-[11px] text-slate-500 leading-tight">
                                {study.stat1Label}
                              </div>
                            </div>
                            <div>
                              <div className="text-xl font-bold text-[#00a2ad]">
                                {study.stat2Value}
                              </div>
                              <div className="text-[11px] text-slate-500 leading-tight">
                                {study.stat2Label}
                              </div>
                            </div>
                          </div>

                          {/* Read Full Case Study Button */}
                          <button
                            onClick={() => setActiveModalStudy(study)}
                            className="w-full flex items-center justify-between text-sm font-bold text-[#F59E0B] hover:text-[#D97706] pt-1 transition-colors group/btn cursor-pointer"
                          >
                            <span>Read full case study</span>
                            <span className="transition-transform group-hover/btn:translate-x-1">
                              →
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* ----------------- GLOBAL OFFICES SECTION (EXACT BRAIN STATION SCREENSHOT STYLE) ----------------- */}
      <section className="bg-[#0B1528] text-white py-20 border-t border-slate-800">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
            Global Offices
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            
            {/* Bangladesh */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shrink-0 text-xl">
                🇧🇩
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Bangladesh</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  House 6, Road 2, Block B, Niketan, Gulshan-1, Dhaka-1212
                </p>
                <a
                  href="mailto:info@autofya.com"
                  className="text-xs font-semibold text-[#00a2ad] hover:underline block mt-1"
                >
                  info@autofya.com
                </a>
              </div>
            </div>

            {/* USA */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shrink-0 text-xl">
                🇺🇸
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">USA</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  1209 North Orange St, Wilmington, DE 19801
                </p>
                <a
                  href="mailto:info@autofya.com"
                  className="text-xs font-semibold text-[#00a2ad] hover:underline block mt-1"
                >
                  info@autofya.com
                </a>
              </div>
            </div>

            {/* Germany */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shrink-0 text-xl">
                🇩🇪
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Germany</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Goethestr. 34, 60313 Frankfurt am Main
                </p>
                <a
                  href="mailto:sales@autofya.de"
                  className="text-xs font-semibold text-[#00a2ad] hover:underline block mt-1"
                >
                  sales@autofya.de
                </a>
              </div>
            </div>

            {/* UAE */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shrink-0 text-xl">
                🇦🇪
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">UAE</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  DSO-IFZA-9234, Dubai Silicon Oasis, Dubai
                </p>
                <a
                  href="mailto:info@autofya.com"
                  className="text-xs font-semibold text-[#00a2ad] hover:underline block mt-1"
                >
                  info@autofya.com
                </a>
              </div>
            </div>

            {/* Malaysia */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shrink-0 text-xl">
                🇲🇾
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Malaysia</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Level 15, Menara Sunrise, Mont Kiara, 50480 Kuala Lumpur
                </p>
                <a
                  href="mailto:info@autofya.com"
                  className="text-xs font-semibold text-[#00a2ad] hover:underline block mt-1"
                >
                  info@autofya.com
                </a>
              </div>
            </div>

            {/* Japan */}
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shrink-0 text-xl">
                🇯🇵
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Japan</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Shibuya Business Tower, 1-16-14 Shibuya, Tokyo 150-0002
                </p>
                <a
                  href="mailto:info@autofya.com"
                  className="text-xs font-semibold text-[#00a2ad] hover:underline block mt-1"
                >
                  info@autofya.com
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- READY TO SCALE YOUR TEAM CTA ----------------- */}
      <section className="bg-[#080E21] py-16 text-center border-t border-slate-800">
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900 via-[#0E1A38] to-slate-900 p-10 sm:p-14 rounded-3xl border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#F59E0B]/10 rounded-full blur-3xl"></div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 relative z-10">
              Ready to Scale Your Team with Autofya?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8 relative z-10 leading-relaxed">
              Let's discuss how our resource augmentation and AI-powered developers can bring speed and engineering excellence to your project delivery.
            </p>

            <button
              onClick={() => openScheduleModal("Staff Augmentation")}
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold text-base shadow-lg hover:shadow-amber-500/20 transition-all duration-200 relative z-10 cursor-pointer"
            >
              Assemble a Team →
            </button>
          </div>
        </div>
      </section>

      {/* ----------------- INTERACTIVE CASE STUDY DETAIL MODAL ----------------- */}
      {activeModalStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveModalStudy(null)}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-lg z-20 transition-colors cursor-pointer"
            >
              ✕
            </button>

            {/* Modal Banner */}
            <div className="relative h-64 sm:h-72 w-full bg-slate-900">
              <Image
                src={activeModalStudy.image}
                alt={activeModalStudy.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#F59E0B] bg-slate-900/90 px-3 py-1 rounded border border-amber-500/30 mb-2">
                  {activeModalStudy.client}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold leading-snug">
                  {activeModalStudy.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 text-[#0B1340]">
              
              {/* Stat Highlight Bar */}
              <div className="grid grid-cols-2 gap-6 p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                <div>
                  <div className="text-3xl font-extrabold text-[#00a2ad]">
                    {activeModalStudy.stat1Value}
                  </div>
                  <div className="text-xs font-medium text-slate-500 mt-1">
                    {activeModalStudy.stat1Label}
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-[#00a2ad]">
                    {activeModalStudy.stat2Value}
                  </div>
                  <div className="text-xs font-medium text-slate-500 mt-1">
                    {activeModalStudy.stat2Label}
                  </div>
                </div>
              </div>

              {/* The Challenge */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
                  The Client Challenge
                </h4>
                <p className="text-slate-700 text-base leading-relaxed">
                  {activeModalStudy.challenge}
                </p>
              </div>

              {/* Autofya Solution */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#00a2ad] mb-2">
                  Autofya Engineering Solution
                </h4>
                <p className="text-slate-700 text-base leading-relaxed">
                  {activeModalStudy.solution}
                </p>
              </div>

              {/* Tech Architecture */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Technology Stack & Architecture
                </h4>
                <div className="p-4 bg-slate-900 text-slate-200 rounded-xl text-xs sm:text-sm font-mono leading-relaxed border border-slate-800">
                  {activeModalStudy.architecture}
                </div>
              </div>

              {/* Business Results */}
              <div className="pt-2 border-t border-slate-100">
                <h4 className="text-sm font-bold uppercase tracking-wider text-amber-600 mb-2">
                  Quantifiable Business Results
                </h4>
                <p className="text-slate-800 font-semibold text-base leading-relaxed">
                  {activeModalStudy.results}
                </p>
              </div>

              {/* Modal CTA */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
                <button
                  onClick={() => {
                    setActiveModalStudy(null);
                    openScheduleModal("Staff Augmentation");
                  }}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold text-sm shadow transition-all cursor-pointer"
                >
                  Schedule a Consultation for Similar Projects →
                </button>
                <button
                  onClick={() => setActiveModalStudy(null)}
                  className="text-xs font-bold text-slate-500 hover:text-slate-800 cursor-pointer"
                >
                  Close Window
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Bottom Footer Navigation */}
      <Footer />
    </div>
  );
}
