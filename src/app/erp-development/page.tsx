"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ErpDevelopmentPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeIndustryTab, setActiveIndustryTab] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const industryTabs = [
    {
      title: "Retail & FMCG",
      subtitle: "Unified Point of Sale (POS), real-time inventory sync & e-commerce integration.",
      bullets: [
        "Multi-store POS synchronization with offline capability",
        "Automated re-order triggers based on safety stock levels",
        "Omnichannel integration with Shopify, WooCommerce, and custom web stores",
      ],
    },
    {
      title: "Manufacturing & Apparel",
      subtitle: "Complete Bill of Materials (BOM), shop floor control & production scheduling.",
      bullets: [
        "Multi-level BOM management and work center routing",
        "Material Requirements Planning (MRP) with real-time stock allocation",
        "Quality control checkpoints and batch barcode tracking",
      ],
    },
    {
      title: "Financial Services & Banking",
      subtitle: "Automated general ledger, asset audits, and regulatory financial reporting.",
      bullets: [
        "Multi-currency financial accounting with automated exchange rate sync",
        "Real-time profit & loss, balance sheet, and cash flow dashboards",
        "Bank reconciliation automation connecting directly to core banking APIs",
      ],
    },
    {
      title: "Healthcare & Logistics",
      subtitle: "Fleet management, pharmaceutical inventory, and automated procurement.",
      bullets: [
        "Expiry date & batch tracking for medical supplies and pharmaceuticals",
        "Automated purchase requisition and vendor quotation comparison",
        "Fleet tracking and delivery route optimization for logistics hubs",
      ],
    },
  ];

  const erpModules = [
    {
      title: "Sales & CRM Management",
      desc: "Lead pipeline tracking, automated sales quotation generation, customer contract management, and sales commission calculation.",
      icon: "💼",
    },
    {
      title: "Purchasing & Procurement",
      desc: "RFQs, purchase order automation, vendor evaluation scorecards, and automated purchase approval workflows.",
      icon: "🛒",
    },
    {
      title: "Inventory & Multi-Warehouse",
      desc: "Real-time stock valuation, double-entry inventory control, serial/lot number tracking, and automated stock transfers.",
      icon: "📦",
    },
    {
      title: "Manufacturing & BOM Planning",
      desc: "Master production schedule, work order management, capacity planning, and scrap/rework tracking.",
      icon: "⚙️",
    },
    {
      title: "Financial Accounting & Invoicing",
      desc: "Automated invoicing, accounts payable/receivable, asset management, tax engine compliance, and audit trails.",
      icon: "📊",
    },
    {
      title: "HR, Attendance & Payroll",
      desc: "Employee lifecycle management, biometric attendance sync, automated tax deductions, payslip generation, and leave approvals.",
      icon: "👥",
    },
    {
      title: "Point of Sale (POS) Systems",
      desc: "Fast touch-screen retail POS, customer loyalty programs, digital receipt generation, and offline sales logging.",
      icon: "🖥️",
    },
    {
      title: "Project & Task Management",
      desc: "Gantt charts, project timesheet tracking, resource allocation, and milestone billing for service enterprises.",
      icon: "📌",
    },
  ];

  const aiSolutions = [
    {
      title: "AI Inventory Demand Forecasting",
      desc: "Machine learning algorithms analyze past sales trends and seasonality to predict optimal SKU re-order points.",
      icon: "🤖",
    },
    {
      title: "Automated Financial Reconciliation",
      desc: "AI engine automatically matches bank statements with open invoices, flagging discrepancies in seconds.",
      icon: "💡",
    },
    {
      title: "Intelligent HR & Payroll Automation",
      desc: "Automates shift scheduling, overtime calculations, and leave approval workflows with zero manual errors.",
      icon: "⚡",
    },
    {
      title: "Smart Multi-Warehouse Supply Chain",
      desc: "Optimizes stock allocation across multiple fulfillment centers to cut shipping costs and delivery times.",
      icon: "🚚",
    },
  ];

  const trackRecordStats = [
    { label: "Odoo Partner", val: "Official Silver Partner", desc: "Certified Odoo consultants and implementation specialists." },
    { label: "ERP Engineers", val: "25+ Certified Developers", desc: "Deep technical expertise across Python, Odoo, SAP, and custom ERP systems." },
    { label: "Deployments", val: "50+ Successful Projects", desc: "Delivered complex enterprise ERPs across retail, manufacturing, and finance." },
    { label: "Experience", val: "10+ Years Expertise", desc: "Proven track record of digital transformation and legacy migration." },
  ];

  const clientLogos = [
    { name: "Square Group", logoText: "SQUARE" },
    { name: "Marico", logoText: "MARICO" },
    { name: "Akij Foods", logoText: "AKIJ FOODS" },
    { name: "Unilever", logoText: "UNILEVER" },
    { name: "Aarong", logoText: "AARONG" },
    { name: "BSRM", logoText: "BSRM" },
    { name: "EBL", logoText: "EBL FINTECH" },
    { name: "IDLC", logoText: "IDLC FINANCE" },
  ];

  const implementationProcess = [
    {
      step: "01",
      title: "Requirement Analysis & Gap Study",
      desc: "Comprehensive study of business workflows, legacy bottlenecks, and functional specification drafting.",
      icon: "📋",
    },
    {
      step: "02",
      title: "Customization & System Design",
      desc: "Architecting custom Odoo modules, database schemas, UI layouts, and business logic workflows.",
      icon: "🎨",
    },
    {
      step: "03",
      title: "Data Migration & Integration",
      desc: "Extracting, cleansing, and importing legacy master data with REST API connection to third-party tools.",
      icon: "🔄",
    },
    {
      step: "04",
      title: "UAT Testing & User Training",
      desc: "Rigorous user acceptance testing, role-based security validation, and hands-on staff training workshops.",
      icon: "🎓",
    },
    {
      step: "05",
      title: "Go-Live & 24/7 Support",
      desc: "Zero-downtime production deployment with dedicated SLA support, backup monitoring, and optimization.",
      icon: "🚀",
    },
  ];

  const integrations = [
    { name: "SAP S/4HANA", category: "Enterprise ERP" },
    { name: "Oracle Cloud ERP", category: "Core Database" },
    { name: "WooCommerce", category: "E-Commerce Platform" },
    { name: "Shopify", category: "Online Store" },
    { name: "Stripe", category: "Payment Gateway" },
    { name: "Salesforce CRM", category: "Sales CRM" },
    { name: "WhatsApp API", category: "Messaging" },
    { name: "REST / GraphQL", category: "Custom APIs" },
  ];

  const faqs = [
    {
      q: "Why should our enterprise choose Odoo ERP over legacy systems?",
      a: "Odoo offers a fully modular, open-source framework that eliminates expensive per-user license fees associated with traditional legacy ERPs. It allows enterprises to start with essential modules (like Inventory or Accounting) and seamlessly add Sales, MRP, or HR as the business grows, offering 100% customization flexibility.",
    },
    {
      q: "How does Autofya ensure zero data loss during legacy ERP migration?",
      a: "Our data migration process follows a strict 3-phase validation pipeline: Data Extraction & Audit, Automated Transformation & Cleansing, and Trial Migration with Sandbox Reconciliation. We perform dry-runs before final production cutover to guarantee 100% data integrity.",
    },
    {
      q: "Can custom modules be developed for our specific industry workflows?",
      a: "Absoluty. Autofya has a dedicated team of certified Python and Odoo developers who build tailored custom modules, custom reports, specialized dashboards, and bespoke business logic from scratch to match your exact operational requirements.",
    },
    {
      q: "What is the typical deployment timeline for an Enterprise Odoo ERP project?",
      a: "A standard core Odoo deployment (Sales, Purchasing, Inventory, Accounting) takes 8 to 12 weeks. Complex multi-factory manufacturing or multi-warehouse retail implementations usually range between 14 and 20 weeks, including UAT and staff training.",
    },
    {
      q: "Do you provide post-implementation support and SLA maintenance?",
      a: "Yes! Autofya offers flexible post-launch SLA contracts including 24/7 technical support, system health monitoring, version upgrade assistance, security patching, and ongoing user training.",
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
                  OFFICIAL ODOO & CUSTOM ERP PARTNER
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Your Trusted Enterprise ERP Partner, From Choice to Trust
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Empowering enterprise growth with custom Odoo &amp; SAP ERP solutions, automated multi-warehouse supply chain workflows, and real-time financial telemetry.
              </p>

              {/* Badges */}
              <div className="p-3 bg-[#111A4E] rounded-xl border border-slate-700/60 text-xs font-semibold text-slate-300 flex flex-wrap gap-3 items-center">
                <span className="text-[#00a2ad] font-bold">ISO 27001</span>
                <span>•</span>
                <span className="text-white font-bold">ISO 9001</span>
                <span>•</span>
                <span className="text-[#00a2ad] font-bold">CMMI Level 3</span>
                <span>•</span>
                <span className="text-emerald-400 font-bold">Official Odoo Partner</span>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#contact"
                  className="px-7 py-3.5 bg-[#00a2ad] hover:bg-[#008a94] text-white font-bold text-base rounded-xl transition-all duration-200 shadow-md inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Get a Free Demo</span>
                  <span>→</span>
                </a>
                <a
                  href="#features"
                  className="px-7 py-3.5 bg-[#111A4E] hover:bg-[#182366] text-slate-200 border border-slate-700 font-semibold text-base rounded-xl transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Modules</span>
                </a>
              </div>
            </div>

            {/* Right Hero Visual (ERP Dashboard Telemetry Mockup) */}
            <div className="lg:col-span-6 relative">
              <div className="bg-[#111A4E] border border-slate-700/80 rounded-2xl p-5 shadow-2xl space-y-4">
                
                {/* Header Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-700/80">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                    <span className="ml-2 text-xs font-mono text-slate-400">autofya-odoo-erp-v17.2</span>
                  </div>
                  <span className="px-2.5 py-0.5 bg-[#00a2ad]/20 text-[#00a2ad] text-xs font-semibold rounded">
                    ODOO ENTERPRISE
                  </span>
                </div>

                {/* Dashboard Container inside Mockup */}
                <div className="grid grid-cols-12 gap-4">
                  {/* Left Column: Financial Ledger & Inventory */}
                  <div className="col-span-7 bg-[#0B1340] p-4 rounded-xl border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-300">Executive Financial Ledger</span>
                      <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded">
                        Balanced (99.9%)
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 bg-[#111A4E] rounded border border-slate-700 space-y-1">
                        <div className="flex justify-between font-bold text-white text-[11px]">
                          <span>Monthly Revenue</span>
                          <span className="text-[#00a2ad]">$184,250.00</span>
                        </div>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-[#00a2ad] h-full w-[78%] rounded-full"></div>
                        </div>
                      </div>

                      <div className="p-2.5 bg-[#111A4E] rounded border border-slate-700 flex justify-between items-center">
                        <div>
                          <div className="font-bold text-white text-[11px]">PO #8820 (Raw Materials)</div>
                          <div className="text-[10px] text-slate-400">Approved → In Transit</div>
                        </div>
                        <span className="text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded text-[10px]">
                          Approved
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Multi-Warehouse Status */}
                  <div className="col-span-5 bg-[#060C2C] p-3 rounded-xl border border-slate-800 space-y-3">
                    <div className="text-center pb-2 border-b border-slate-800">
                      <div className="text-xs font-bold text-white">Warehouse Sync</div>
                      <div className="text-[10px] text-[#00a2ad] font-semibold">4 Hubs Connected</div>
                    </div>

                    <div className="space-y-2 text-[10px]">
                      <div className="p-2 bg-[#111A4E] rounded border border-slate-700 space-y-1">
                        <div className="text-slate-400 uppercase font-bold">Central Stock</div>
                        <div className="text-emerald-400 font-bold">✓ 14,800 Units</div>
                      </div>

                      <div className="p-2 bg-[#111A4E] rounded border border-slate-700 space-y-1">
                        <div className="text-slate-400 uppercase font-bold">AI Auto-Reorder</div>
                        <div className="text-white font-bold">Active (12 SKUs)</div>
                      </div>

                      <div className="p-2 bg-[#00a2ad]/20 border border-[#00a2ad]/40 rounded text-center">
                        <div className="font-bold text-[#00a2ad]">ISO 9001 Certified</div>
                        <div className="text-slate-300 text-[9px]">Zero Discrepancy</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- 2. CERTIFIED, RELIABLE, ACCOUNTABLE BAR ----------------- */}
      <section className="py-8 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center">
            {trackRecordStats.map((st, idx) => (
              <div key={idx} className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm space-y-1">
                <div className="text-xs font-bold text-[#00a2ad] uppercase tracking-wider">{st.label}</div>
                <div className="text-base sm:text-lg font-extrabold text-[#0B1340]">{st.val}</div>
                <div className="text-[11px] text-slate-500">{st.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 3. WHO RELIES ON US THE MOST (INDUSTRY TABS) ----------------- */}
      <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
              INDUSTRY SPECIFICSOLUTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
              Who Relies On Us The Most
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Customized Odoo &amp; Enterprise ERP workflows built to solve specific operational challenges across key verticals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Tab Selectors */}
            <div className="lg:col-span-4 space-y-2">
              {industryTabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndustryTab(idx)}
                  className={`w-full text-left p-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-200 flex items-center justify-between border cursor-pointer ${
                    activeIndustryTab === idx
                      ? "bg-[#0B1340] text-white border-[#0B1340] shadow-md"
                      : "bg-[#F8FAFC] text-slate-700 border-slate-200 hover:border-[#00a2ad]"
                  }`}
                >
                  <span>{tab.title}</span>
                  <span className="text-xs">{activeIndustryTab === idx ? "→" : "+"}</span>
                </button>
              ))}
            </div>

            {/* Tab Content Display */}
            <div className="lg:col-span-8 bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-[#0B1340] mb-2">
                  {industryTabs[activeIndustryTab].title}
                </h3>
                <p className="text-slate-600 text-sm font-medium">
                  {industryTabs[activeIndustryTab].subtitle}
                </p>
              </div>

              <ul className="space-y-3 pt-2">
                {industryTabs[activeIndustryTab].bullets.map((b, bIdx) => (
                  <li key={bIdx} className="flex items-start gap-3 text-sm text-slate-800 font-medium">
                    <span className="w-5 h-5 rounded-full bg-[#0B1340] text-[#00a2ad] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-slate-200">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-[#00a2ad] hover:bg-[#008a94] text-white font-bold text-xs rounded-xl transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Request Demo for {industryTabs[activeIndustryTab].title}</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 4. AI-ENHANCED ERP SOLUTIONS ----------------- */}
      <section className="py-20 bg-[#0B1340] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
              NEXT-GEN AUTOMATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              AI-Enhanced ERP Solutions
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Supercharge your enterprise business processes with intelligent automation, predictive demand forecasting, and automated inventory replenishment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiSolutions.map((ai, idx) => (
              <div
                key={idx}
                className="bg-[#111A4E] p-6 rounded-2xl border border-slate-700/80 space-y-4 hover:border-[#00a2ad] transition-all"
              >
                <div className="text-3xl">{ai.icon}</div>
                <h3 className="text-lg font-bold text-white">{ai.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {ai.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 5. ALL THE FEATURES UNDER ONE ROOF ----------------- */}
      <section id="features" className="py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
              FULL SUITE MODULES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
              All the Features Under One Roof
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              A complete suite of integrated ERP modules designed to streamline every department in your enterprise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {erpModules.map((mod, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200 hover:border-[#00a2ad] hover:shadow-lg transition-all space-y-3 group"
              >
                <div className="w-12 h-12 bg-[#0B1340] rounded-xl flex items-center justify-center text-2xl text-[#00a2ad]">
                  {mod.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0B1340] group-hover:text-[#00a2ad] transition-colors">
                  {mod.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {mod.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 6. TRUSTED BY INDUSTRY LEADERS ----------------- */}
      <section className="py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
              CLIENT PROOF
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1340]">
              Trusted by Industry Leaders
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
            {clientLogos.map((client, idx) => (
              <div
                key={idx}
                className="h-16 bg-white rounded-xl border border-slate-200 flex items-center justify-center p-3 shadow-sm hover:border-[#00a2ad] transition-colors"
              >
                <span className="text-xs sm:text-sm font-black text-[#0B1340] tracking-wider">
                  {client.logoText}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 7. OUR IMPLEMENTATION PROCESS ----------------- */}
      <section className="py-20 bg-[#0B1340] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
              METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Our Implementation Process
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              A structured 5-step delivery framework ensuring smooth Odoo deployment with zero business downtime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {implementationProcess.map((proc, idx) => (
              <div
                key={idx}
                className="bg-[#111A4E] p-6 rounded-2xl border border-slate-700/80 flex flex-col justify-between space-y-4 hover:border-[#00a2ad] transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-lg bg-[#0B1340] text-[#00a2ad] font-bold text-sm flex items-center justify-center">
                      {proc.step}
                    </span>
                    <span className="text-2xl">{proc.icon}</span>
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">{proc.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">{proc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 8. SEAMLESS 20+ INTEGRATIONS ----------------- */}
      <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
              ECOSYSTEM CONNECTIVITY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
              Seamless 20+ Integrations
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Connect your ERP with payment gateways, e-commerce stores, logistics APIs, and core enterprise systems.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {integrations.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] p-5 rounded-xl border border-slate-200 text-center space-y-1 hover:border-[#00a2ad] transition-colors"
              >
                <div className="text-base font-extrabold text-[#0B1340]">{item.name}</div>
                <div className="text-[11px] font-semibold text-[#00a2ad]">{item.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 9. FAQ & CONSULTATION FORM ----------------- */}
      <section id="contact" className="py-20 bg-[#0B1340]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-3xl font-extrabold text-white">
                ERP Development FAQ
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
                STREAMLINE YOUR ENTERPRISE TODAY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Ready to Transform Your Business Operations?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Book a 1-on-1 discovery consultation with an Autofya certified Odoo ERP architect.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! An Autofya certified ERP architect will contact you shortly.");
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
                placeholder="Company Name"
                className="px-4 py-3.5 bg-[#0B1340] border border-slate-700 rounded-xl text-white placeholder-slate-400 text-sm focus:outline-none focus:border-[#00a2ad]"
              />
              <select
                className="px-4 py-3.5 bg-[#0B1340] border border-slate-700 rounded-xl text-slate-300 text-sm focus:outline-none focus:border-[#00a2ad]"
              >
                <option value="Odoo">ERP Preference: Odoo Enterprise</option>
                <option value="Custom">ERP Preference: Custom Built ERP</option>
                <option value="SAP">ERP Preference: SAP Integration</option>
              </select>
              <div className="sm:col-span-2 pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#00a2ad] hover:bg-[#008a94] text-white font-extrabold text-base rounded-xl transition-all duration-200 shadow-lg cursor-pointer"
                >
                  Schedule ERP Consultation Now
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
