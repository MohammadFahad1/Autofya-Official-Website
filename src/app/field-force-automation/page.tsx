"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FieldForceAutomationPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeEcoTab, setActiveEcoTab] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const clientLogos = [
    { name: "Beacon Pharmaceuticals", logoText: "BEACON" },
    { name: "Marico International", logoText: "MARICO" },
    { name: "Square Group", logoText: "SQUARE" },
    { name: "Akij Food & Beverage", logoText: "AKIJ FOODS" },
    { name: "Edison Logistics", logoText: "EDISON" },
    { name: "Unilever FMCG", logoText: "UNILEVER" },
  ];

  const whyScaleFeatures = [
    {
      title: "Real-Time Field Attendance & Geofencing",
      desc: "Prevent proxy attendance with facial recognition and GPS boundary validation at client locations.",
      icon: "📍",
    },
    {
      title: "Smart Route & Visit Optimization",
      desc: "AI algorithms calculate optimal daily travel itineraries to maximize outlet visits and minimize mileage.",
      icon: "🗺️",
    },
    {
      title: "On-the-Go Order Booking & Invoicing",
      desc: "Field reps create orders, apply complex promotion schemes, and issue instant digital receipts offline.",
      icon: "📑",
    },
    {
      title: "Real-Time GPS & Territory Tracking",
      desc: "Gain live visibility into field movement, rep status, and territory coverage with breadcrumb trail logs.",
      icon: "🛰️",
    },
    {
      title: "Automated Lead & Pipeline Management",
      desc: "Capture new retail outlets and prospective clients directly from mobile apps into central CRM.",
      icon: "💼",
    },
    {
      title: "Instant Analytics & Field Reports",
      desc: "Replace end-of-day manual spreadsheets with automated, real-time executive dashboards.",
      icon: "📊",
    },
  ];

  const lifecycleSteps = [
    {
      step: "01",
      title: "Attendance & Shift Start",
      desc: "Facial verification & GPS geofenced check-in at territory start point.",
      icon: "🔐",
    },
    {
      step: "02",
      title: "Beat & Route Allocation",
      desc: "Automated daily store visit sequence based on priority and location.",
      icon: "📌",
    },
    {
      step: "03",
      title: "Outlet Check-In & Audit",
      desc: "GPS-verified arrival, store inventory audit, and competitor analysis.",
      icon: "🏬",
    },
    {
      step: "04",
      title: "Order Booking & Schemes",
      desc: "Instant digital order logging with dynamic trade discounts and promos.",
      icon: "🛒",
    },
    {
      step: "05",
      title: "Offline-to-Cloud Sync",
      desc: "Seamless background data sync when network reconnects, zero loss.",
      icon: "🔄",
    },
    {
      step: "06",
      title: "Executive Telemetry",
      desc: "Real-time target vs achievement analytics for management overview.",
      icon: "📈",
    },
  ];

  const ecosystemTabs = [
    {
      id: 0,
      title: "Attendance & Geofencing",
      subtitle: "Automated shift verification with 99.9% location accuracy",
      stats: [
        { label: "Punch Accuracy", val: "99.9%" },
        { label: "Proxy Prevention", val: "100%" },
        { label: "Check-in Time", val: "< 2 secs" },
      ],
      details: [
        "Facial biometric verification on Android & iOS mobile devices",
        "Geofenced boundary validation per retail store or client office",
        "Automated leave, late mark, and shift override approval workflows",
      ],
    },
    {
      id: 1,
      title: "Route & Beat Planner",
      subtitle: "Dynamic visit sequencing to reduce travel time by up to 35%",
      stats: [
        { label: "Mileage Saved", val: "35%" },
        { label: "Extra Visits / Day", val: "+4 Outlets" },
        { label: "Route Compliance", val: "96.4%" },
      ],
      details: [
        "AI-suggested visit sequences prioritized by order history & store size",
        "Interactive turn-by-turn navigation integrated with Google Maps / OSM",
        "Real-time route deviation alerts for area sales managers",
      ],
    },
    {
      id: 2,
      title: "Mobile Order Booking",
      subtitle: "Empower sales reps to close orders 50% faster in the field",
      stats: [
        { label: "Order Velocity", val: "50% Faster" },
        { label: "Scheme Match", val: "100% Auto" },
        { label: "Offline Mode", val: "Fully Supported" },
      ],
      details: [
        "Digital SKU catalog with real-time stock availability indicators",
        "Complex trade promotion, slab discount, and combo scheme engines",
        "Instant Bluetooth receipt printing or SMS / WhatsApp invoice sharing",
      ],
    },
    {
      id: 3,
      title: "Asset & Stock Tracking",
      subtitle: "Complete visibility over freezer, display rack & outlet inventory",
      stats: [
        { label: "Audit Speed", val: "3X Faster" },
        { label: "Asset Compliance", val: "98.2%" },
        { label: "Stock Accuracy", val: "99.5%" },
      ],
      details: [
        "Barcode / QR code scanning for physical asset verification at outlets",
        "On-shelf availability (OSA) and out-of-stock (OOS) real-time alerts",
        "Photo evidence capture with automated timestamp & location watermark",
      ],
    },
    {
      id: 4,
      title: "Expense & Mileage Audit",
      subtitle: "Automate daily travel claims and eliminate fraudulent expenses",
      stats: [
        { label: "Claim Audit", val: "Instant" },
        { label: "Fraud Reduction", val: "99%" },
        { label: "Processing Time", val: "-80%" },
      ],
      details: [
        "Automated distance calculation based on GPS breadcrumbs",
        "Receipt OCR scanning for meal, fuel, and lodging expense claims",
        "Multi-tier approval workflows integrated directly into payroll/ERP",
      ],
    },
    {
      id: 5,
      title: "Sales Analytics 360",
      subtitle: "Real-time decision telemetry for executives and supervisors",
      stats: [
        { label: "Live Telemetry", val: "Real-Time" },
        { label: "Territory Coverage", val: "100%" },
        { label: "Report Generation", val: "Automated" },
      ],
      details: [
        "Target vs Achievement leaderboards for field sales teams",
        "Heatmaps of retail store order volume and rep density",
        "Automated daily EOD performance digest sent directly to WhatsApp / Email",
      ],
    },
  ];

  const pillars = [
    {
      number: "01",
      title: "Real-Time Attendance & Geofencing",
      subtitle: "Zero-proxy attendance management tailored for high-density field teams.",
      desc: "Autofya Field Force Automation uses GPS geofencing and facial recognition to log attendance at designated customer locations. Field supervisors get real-time alerts for delayed visits, missed check-ins, or unauthorized location punches.",
      bullets: [
        "Facial recognition verification with anti-spoofing detection",
        "Configurable geofence radius per customer store (50m to 500m)",
        "Automated shift logging, break tracking, and overtime calculation",
      ],
      mockupType: "attendance",
    },
    {
      number: "02",
      title: "Smart Route & Visit Optimization",
      subtitle: "Maximize daily outlet coverage while minimizing fuel and travel costs.",
      desc: "Our route planner dynamically recalculates daily beat plans based on store priority, sales history, urgency, and live traffic. Field reps spend less time commuting and more time building relationships and taking orders.",
      bullets: [
        "Automated daily beat generation with turn-by-turn route sequencing",
        "GPS breadcrumb tracking with live velocity and halt duration alerts",
        "Flexible route re-assignment for emergency client visit requests",
      ],
      mockupType: "route",
    },
    {
      number: "03",
      title: "Dynamic Order Booking & Invoicing",
      subtitle: "Turn field reps into high-converting sales champions.",
      desc: "Equip your sales force with an offline-capable order entry system. Reps can browse interactive digital catalogs, apply multi-tier volume discounts, check credit limits, and issue instant order confirmations even in low-connectivity areas.",
      bullets: [
        "100% offline order creation with automatic background cloud sync",
        "Automated promotional scheme engine (BOGO, Slab Discounts, Trade Offers)",
        "Real-time credit limit checking and payment collection logging",
      ],
      mockupType: "order",
    },
    {
      number: "04",
      title: "Territory & Field Staff Tracking",
      subtitle: "Complete operational visibility over your entire distribution network.",
      desc: "Supervisors gain a unified live map dashboard showcasing rep positions, visit status, and active store audits. Detect idle reps, unvisited high-value stores, and coverage gaps before they impact monthly revenue targets.",
      bullets: [
        "Live interactive GIS map with real-time field rep status indicators",
        "Historical playback of rep travel routes and store halt durations",
        "Instant broadcast messaging and task dispatch to field teams",
      ],
      mockupType: "tracking",
    },
    {
      number: "05",
      title: "Executive Dashboards & Analytics",
      subtitle: "Data-driven insights to optimize field operations and drive revenue.",
      desc: "Synthesize thousands of daily field interactions into clear, actionable executive dashboards. Monitor KPI performance across territories, product lines, and individual sales reps with instant export capabilities.",
      bullets: [
        "Customizable dashboard widgets for revenue, visit count, and order conversion",
        "Automated scheduled PDF/Excel reports sent to management daily",
        "Predictive analytics for stock movement and sales target attainment",
      ],
      mockupType: "analytics",
    },
  ];

  const enterpriseClients = [
    {
      name: "Beacon Pharmaceuticals",
      metric: "+45% Daily Visit Frequency",
      quote: "Autofya transformed our medical rep field tracking. We expanded doctor visit coverage by 45% within 60 days.",
      author: "Director of Field Operations",
    },
    {
      name: "Marico International",
      metric: "30% Faster Order Processing",
      quote: "The offline order booking module completely eliminated order entry delays between retail outlets and our regional warehouses.",
      author: "Head of Commercial Logistics",
    },
    {
      name: "Square Group",
      metric: "99.8% Geofence Compliance",
      quote: "We achieved near perfect attendance accuracy across 1,200+ field reps operating in remote rural distribution zones.",
      author: "VP of Enterprise IT",
    },
    {
      name: "Akij Food & Beverage",
      metric: "35% Travel Cost Reduction",
      quote: "Smart route optimization helped our beverage distribution reps cover 4 additional outlets per day while cutting fuel expense.",
      author: "National Sales Manager",
    },
    {
      name: "Edison Logistics",
      metric: "100% Real-Time Visibility",
      quote: "Live territory tracking gave our managers complete operational transparency over daily field deliveries and client audits.",
      author: "Supply Chain Operations Lead",
    },
    {
      name: "Unilever Distribution",
      metric: "3.2X ROI in 6 Months",
      quote: "The automated promo scheme engine eliminated billing errors completely and boosted our average order size by 22%.",
      author: "Chief Commercial Officer",
    },
  ];

  const outcomes = [
    { val: "45%", label: "Increase in Daily Outlets Visited", desc: "Field reps cover more retail stores every day with automated beat routing." },
    { val: "60%", label: "Faster Order-to-Cash Cycle", desc: "Instant digital order transmission speeds up warehouse fulfillment and billing." },
    { val: "99%", label: "GPS Tracking Accuracy", desc: "High-precision location tracking ensures zero proxy punches or route deviations." },
    { val: "35%", label: "Lower Operational Overhead", desc: "Automated mileage claims and paperless reporting save significant administrative costs." },
    { val: "100%", label: "Manual Error Elimination", desc: "Automated trade scheme calculation prevents pricing and discount discrepancies." },
    { val: "24/7", label: "Real-Time Territory Control", desc: "Supervisors maintain full visibility over field rep locations and live visit status." },
  ];

  const integrations = [
    { name: "SAP S/4HANA", category: "ERP System" },
    { name: "Oracle Cloud ERP", category: "ERP System" },
    { name: "Odoo Enterprise", category: "Open ERP" },
    { name: "Salesforce CRM", category: "CRM Platform" },
    { name: "Microsoft Dynamics 365", category: "Enterprise Suite" },
    { name: "HubSpot CRM", category: "Sales CRM" },
  ];

  const aiIntelligence = [
    {
      title: "Predictive Route Optimization",
      desc: "AI engine predicts traffic patterns and optimal visit windows for every retail store.",
      icon: "🤖",
    },
    {
      title: "AI Order Recommender",
      desc: "Suggests high-margin products and re-order quantities based on store purchase history.",
      icon: "💡",
    },
    {
      title: "Attendance Anomaly Detection",
      desc: "Flags suspicious GPS spoofing attempts, mock location apps, and clock-in irregularities.",
      icon: "🛡️",
    },
    {
      title: "Automated Expense Audit",
      desc: "Scans uploaded fuel & meal receipts to detect duplicate claims and policy overages.",
      icon: "🔍",
    },
    {
      title: "Sales Target Forecasting",
      desc: "Machine learning model predicts end-of-month revenue outcomes per territory.",
      icon: "📉",
    },
    {
      title: "Voice-to-Text Field Reports",
      desc: "Field reps dictate visit notes in natural language, automatically summarized into CRM.",
      icon: "🎙️",
    },
  ];

  const faqs = [
    {
      q: "Does Autofya Field Force Automation work in offline or low-signal areas?",
      a: "Yes! Autofya is built with an offline-first architecture. Field reps can take attendance, perform store audits, and log complete sales orders without any active internet connection. All data is securely stored locally on the mobile device and automatically synchronized to the cloud as soon as network connectivity is restored.",
    },
    {
      q: "How does geofenced attendance prevent proxy clock-ins?",
      a: "Our app combines high-accuracy GPS coordinates with biometric facial recognition. When a sales rep attempts to clock in, the app verifies that their physical location falls within the pre-defined geofence boundary of the assigned store or territory while confirming identity through facial scanning. Mock location detection algorithms block any fake GPS attempts.",
    },
    {
      q: "Can Autofya integrate with our existing ERP (SAP, Oracle, Odoo)?",
      a: "Absolutely. Autofya provides robust REST APIs, webhook listeners, and pre-built enterprise connectors for SAP S/4HANA, Oracle ERP, Odoo, Salesforce, and Microsoft Dynamics 365. Master data like product SKUs, inventory levels, and customer profiles sync bi-directionally in real time.",
    },
    {
      q: "What mobile operating systems are supported?",
      a: "Autofya Field Force Automation offers native Android and iOS mobile applications optimized for both enterprise-grade rugged devices and standard smartphones. A web dashboard is also provided for managers and operational administrators.",
    },
    {
      q: "How long does enterprise deployment take?",
      a: "A standard enterprise pilot deployment takes 2 to 3 weeks, including ERP data mapping, territory setup, and admin training. Full multi-region rollout for thousands of field reps can be completed within 30 days.",
    },
    {
      q: "Is field rep location tracked outside of shift hours?",
      a: "No. Autofya respects employee privacy. GPS location tracking is active ONLY during official shift hours when a field rep has explicitly clocked in. Once the shift ends or the rep logs off, location tracking terminates automatically.",
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
                  ENTERPRISE FIELD FORCE AUTOMATION
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Commercial Field Force Automation at Scale
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Empower your field sales and service teams with real-time tracking, intelligent route optimization, automated attendance, offline order booking, and seamless enterprise ERP synchronization.
              </p>

              {/* Stats badges */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-[#111A4E] rounded-xl border border-slate-700/60 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#00a2ad]">45%</div>
                  <div className="text-xs text-slate-300 mt-0.5">Productivity Growth</div>
                </div>
                <div className="p-3 bg-[#111A4E] rounded-xl border border-slate-700/60 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">99.9%</div>
                  <div className="text-xs text-slate-300 mt-0.5">Attendance Accuracy</div>
                </div>
                <div className="p-3 bg-[#111A4E] rounded-xl border border-slate-700/60 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#00a2ad]">100%</div>
                  <div className="text-xs text-slate-300 mt-0.5">Offline Resilience</div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#contact"
                  className="px-7 py-3.5 bg-[#00a2ad] hover:bg-[#008a94] text-white font-bold text-base rounded-xl transition-all duration-200 shadow-md inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Schedule a Demo</span>
                  <span>→</span>
                </a>
                <a
                  href="#why-scale"
                  className="px-7 py-3.5 bg-[#111A4E] hover:bg-[#182366] text-slate-200 border border-slate-700 font-semibold text-base rounded-xl transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Features</span>
                </a>
              </div>
            </div>

            {/* Right Hero Visual (Dashboard & Mobile Mockup with Solid Colors) */}
            <div className="lg:col-span-6 relative">
              <div className="bg-[#111A4E] border border-slate-700/80 rounded-2xl p-5 shadow-2xl space-y-4">
                
                {/* Header Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-700/80">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                    <span className="ml-2 text-xs font-mono text-slate-400">autofya-field-control-v4.2</span>
                  </div>
                  <span className="px-2.5 py-0.5 bg-[#00a2ad]/20 text-[#00a2ad] text-xs font-semibold rounded">
                    LIVE TELEMETRY
                  </span>
                </div>

                {/* Dashboard Grid inside Mockup */}
                <div className="grid grid-cols-12 gap-4">
                  {/* Left Column: Live Map & Rep Status */}
                  <div className="col-span-7 bg-[#0B1340] p-4 rounded-xl border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-300">Territory Map (Zone A)</span>
                      <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded">
                        14 Reps Active
                      </span>
                    </div>

                    {/* Simulated Map Visual */}
                    <div className="h-32 bg-[#060C2C] rounded-lg relative overflow-hidden border border-slate-800 p-2 flex flex-col justify-between">
                      <div className="text-[10px] text-slate-400 font-mono">GPS GRID: 23.8103° N, 90.4125° E</div>
                      
                      {/* Rep Pin 1 */}
                      <div className="absolute top-6 left-12 flex items-center gap-1 bg-[#111A4E] px-2 py-1 rounded border border-[#00a2ad]">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="text-[10px] font-bold text-white">Rep #104 (In Store)</span>
                      </div>

                      {/* Rep Pin 2 */}
                      <div className="absolute bottom-4 right-8 flex items-center gap-1 bg-[#111A4E] px-2 py-1 rounded border border-amber-500">
                        <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                        <span className="text-[10px] font-bold text-white">Rep #88 (In Transit)</span>
                      </div>

                      <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono pt-4">
                        <span>Outlets Visited: 142</span>
                        <span>Orders Today: $34,800</span>
                      </div>
                    </div>

                    {/* Mini table */}
                    <div className="space-y-1.5 text-xs">
                      <div className="flex justify-between text-slate-400 text-[11px] pb-1 border-b border-slate-800 font-semibold">
                        <span>Field Rep</span>
                        <span>Status</span>
                        <span>Orders</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span className="font-semibold text-white">Rahim K.</span>
                        <span className="text-emerald-400">Check-in OK</span>
                        <span className="font-bold text-[#00a2ad]">$4,250</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span className="font-semibold text-white">Tanvir H.</span>
                        <span className="text-emerald-400">Check-in OK</span>
                        <span className="font-bold text-[#00a2ad]">$3,890</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Mobile App Preview */}
                  <div className="col-span-5 bg-[#060C2C] p-3 rounded-xl border border-slate-800 space-y-3">
                    <div className="text-center pb-2 border-b border-slate-800">
                      <div className="text-xs font-bold text-white">Rep Mobile App</div>
                      <div className="text-[10px] text-[#00a2ad] font-semibold">Offline Sync Active</div>
                    </div>

                    <div className="space-y-2">
                      <div className="p-2 bg-[#111A4E] rounded border border-slate-700 text-xs space-y-1">
                        <div className="text-[10px] text-slate-400 uppercase font-bold">Current Outlet</div>
                        <div className="font-bold text-white text-xs">Green Supermarket</div>
                        <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                          <span>✓ Geofence Verified</span>
                        </div>
                      </div>

                      <div className="p-2 bg-[#00a2ad]/20 border border-[#00a2ad]/40 rounded text-center cursor-pointer">
                        <div className="text-xs font-bold text-[#00a2ad]">+ Create New Order</div>
                        <div className="text-[10px] text-slate-300">12 SKUs Selected</div>
                      </div>

                      <div className="p-2 bg-[#111A4E] rounded border border-slate-800 text-[10px] text-slate-300 space-y-1">
                        <div className="flex justify-between">
                          <span>Order Subtotal:</span>
                          <span className="font-bold text-white">$1,450.00</span>
                        </div>
                        <div className="flex justify-between text-emerald-400">
                          <span>Trade Discount (10%):</span>
                          <span className="font-bold">-$145.00</span>
                        </div>
                        <div className="flex justify-between border-t border-slate-700 pt-1 font-bold text-white">
                          <span>Total Invoice:</span>
                          <span className="text-[#00a2ad]">$1,305.00</span>
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

      {/* ----------------- 2. CLIENT LOGO BAR ----------------- */}
      <section className="py-8 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold text-slate-500 uppercase tracking-widest mb-6">
            TRUSTED BY LEADING ENTERPRISES & COMMERCIAL FIELD TEAMS
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {clientLogos.map((client, idx) => (
              <div
                key={idx}
                className="h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center p-3 shadow-sm hover:border-[#00a2ad] transition-colors"
              >
                <span className="text-xs sm:text-sm font-black text-[#0B1340] tracking-wider">
                  {client.logoText}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 3. WHY FIELD FORCE AUTOMATION AT SCALE ----------------- */}
      <section id="why-scale" className="py-20 bg-[#0B1340] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
              WHY AUTOMATE FIELD OPERATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Why Field Force Automation at Scale
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Maximize field force productivity, eliminate manual reporting gaps, reduce travel overhead, and accelerate order fulfillment across all enterprise territories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyScaleFeatures.map((item, idx) => (
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

      {/* ----------------- 4. END-TO-END FIELD OPERATIONS LIFECYCLE ----------------- */}
      <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
              WORKFLOW EFFICIENCY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
              End-to-End Field Operations Lifecycle
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              A standardized, high-throughput mobile workflow connecting field sales reps, regional managers, and core ERP systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
            {lifecycleSteps.map((stepItem, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200 relative group hover:border-[#00a2ad] transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="w-12 h-12 rounded-xl bg-[#0B1340] text-[#00a2ad] font-bold text-lg flex items-center justify-center">
                    {stepItem.step}
                  </span>
                  <span className="text-3xl">{stepItem.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-[#0B1340] mb-2 group-hover:text-[#00a2ad] transition-colors">
                  {stepItem.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {stepItem.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 5. THE CORE ECOSYSTEM (INTERACTIVE TABS) ----------------- */}
      <section className="py-20 bg-[#0B1340] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
              MODULAR CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              The Core Ecosystem
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Select a core component to explore its features, key metrics, and enterprise workflow integration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Tab Selectors */}
            <div className="lg:col-span-4 space-y-2">
              {ecosystemTabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveEcoTab(idx)}
                  className={`w-full text-left p-4 rounded-xl font-bold text-sm sm:text-base transition-all duration-200 flex items-center justify-between border cursor-pointer ${
                    activeEcoTab === idx
                      ? "bg-[#00a2ad] text-white border-[#00a2ad] shadow-lg"
                      : "bg-[#111A4E] text-slate-300 border-slate-700/60 hover:bg-[#182366] hover:text-white"
                  }`}
                >
                  <span>{tab.title}</span>
                  <span className="text-xs">{activeEcoTab === idx ? "→" : "+"}</span>
                </button>
              ))}
            </div>

            {/* Right Column: Tab Content Display */}
            <div className="lg:col-span-8 bg-[#111A4E] p-8 rounded-2xl border border-slate-700/80 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {ecosystemTabs[activeEcoTab].title}
                </h3>
                <p className="text-slate-300 text-sm font-normal">
                  {ecosystemTabs[activeEcoTab].subtitle}
                </p>
              </div>

              {/* Stats highlights */}
              <div className="grid grid-cols-3 gap-4 pt-2">
                {ecosystemTabs[activeEcoTab].stats.map((st, sIdx) => (
                  <div key={sIdx} className="bg-[#0B1340] p-4 rounded-xl border border-slate-800">
                    <div className="text-xl sm:text-2xl font-bold text-[#00a2ad]">{st.val}</div>
                    <div className="text-xs text-slate-400 mt-1 font-medium">{st.label}</div>
                  </div>
                ))}
              </div>

              {/* Key Bullet List */}
              <div className="space-y-3 pt-4 border-t border-slate-700/80">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Key Module Functionalities
                </h4>
                <ul className="space-y-2.5">
                  {ecosystemTabs[activeEcoTab].details.map((dt, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-3 text-sm text-slate-200">
                      <span className="w-5 h-5 rounded-full bg-[#00a2ad]/20 text-[#00a2ad] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{dt}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ----------------- 6. FUNDAMENTAL PILLARS / PLATFORM FEATURES ----------------- */}
      <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
              DEEP DIVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
              Platform Features & Fundamental Pillars
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Explore how each pillar provides bulletproof accuracy, field efficiency, and operational control.
            </p>
          </div>

          {pillars.map((pillar, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Text Content */}
                <div className={`lg:col-span-6 space-y-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <span className="text-sm font-bold text-[#00a2ad] uppercase tracking-wider">
                    PILLAR {pillar.number}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1340]">
                    {pillar.title}
                  </h3>
                  <p className="text-base text-slate-700 font-semibold leading-snug">
                    {pillar.subtitle}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>

                  <ul className="space-y-3 pt-2">
                    {pillar.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3 text-sm text-slate-800 font-medium">
                        <span className="w-5 h-5 rounded-full bg-[#0B1340] text-[#00a2ad] font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                          ✓
                        </span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Mockup Box (Solid Colors) */}
                <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="bg-[#0B1340] rounded-2xl p-6 border border-slate-800 shadow-xl space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <div className="flex items-center space-x-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                        <span className="text-xs font-mono text-slate-300 ml-2">module_ref_0{idx + 1}</span>
                      </div>
                      <span className="px-2 py-0.5 bg-[#00a2ad] text-white text-[11px] font-bold rounded">
                        Autofya Verified
                      </span>
                    </div>

                    <div className="bg-[#111A4E] p-5 rounded-xl border border-slate-700 space-y-3">
                      <div className="text-xs font-bold text-white flex justify-between">
                        <span>{pillar.title} Dashboard</span>
                        <span className="text-[#00a2ad]">Active Engine</span>
                      </div>

                      <div className="space-y-2 text-xs text-slate-300">
                        <div className="p-3 bg-[#060C2C] rounded-lg border border-slate-800 flex justify-between items-center">
                          <div>
                            <div className="font-bold text-white">Territory Batch #409</div>
                            <div className="text-[11px] text-slate-400">120 Retail Outlets Assigned</div>
                          </div>
                          <span className="text-emerald-400 font-bold bg-emerald-950 px-2 py-1 rounded text-[11px]">
                            100% Synced
                          </span>
                        </div>

                        <div className="p-3 bg-[#060C2C] rounded-lg border border-slate-800 space-y-1">
                          <div className="flex justify-between text-[11px]">
                            <span className="text-slate-400">Target Progress</span>
                            <span className="text-[#00a2ad] font-bold">88% Achieved</span>
                          </div>
                          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                            <div className="bg-[#00a2ad] h-full w-[88%] rounded-full"></div>
                          </div>
                        </div>
                      </div>

                      <div className="pt-2 flex justify-between text-[11px] text-slate-400">
                        <span>Auto Backup: Enabled</span>
                        <span>Security: SOC-2 Compliant</span>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </section>

      {/* ----------------- 7. SECURE, SCALABLE, CONNECTED BANNER ----------------- */}
      <section className="py-16 bg-[#0B1340] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#111A4E] border border-[#00a2ad]/40 rounded-2xl p-8 sm:p-12 text-center space-y-8">
            <div className="max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
                ENTERPRISE READY
              </span>
              <h2 className="text-3xl font-extrabold text-white">
                Secure, Scalable, Connected
              </h2>
              <p className="text-sm sm:text-base text-slate-300">
                Built from the ground up for demanding high-frequency enterprise field environments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="p-6 bg-[#0B1340] rounded-xl border border-slate-800 space-y-3">
                <div className="text-2xl text-[#00a2ad]">🔒</div>
                <h3 className="text-lg font-bold text-white">Enterprise Security</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  SOC-2 compliant infrastructure with AES-256 data encryption in transit and at rest.
                </p>
              </div>

              <div className="p-6 bg-[#0B1340] rounded-xl border border-slate-800 space-y-3">
                <div className="text-2xl text-[#00a2ad]">⚡</div>
                <h3 className="text-lg font-bold text-white">Offline-First Engine</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Zero downtime even in remote dead zones. Automatic background data sync upon reconnect.
                </p>
              </div>

              <div className="p-6 bg-[#0B1340] rounded-xl border border-slate-800 space-y-3">
                <div className="text-2xl text-[#00a2ad]">🌐</div>
                <h3 className="text-lg font-bold text-white">99.99% Uptime SLA</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  High-availability multi-region architecture scaling up to 50,000+ active field reps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 8. TRUSTED BY LEADING ENTERPRISES ----------------- */}
      <section className="py-20 bg-[#F8FAFC] text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
              Trusted by Leading Enterprises
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Read how leading commercial enterprises leverage Autofya Field Force Automation to drive tangible ROI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseClients.map((client, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="font-extrabold text-[#0B1340] text-base">{client.name}</span>
                    <span className="text-xs font-bold text-[#00a2ad] bg-[#00a2ad]/10 px-2.5 py-1 rounded">
                      {client.metric}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed italic">
                    &ldquo;{client.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="text-xs font-bold text-[#0B1340]">{client.author}</div>
                  <div className="text-[11px] text-slate-500">Autofya Commercial Client</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 9. MEASURABLE OUTCOMES ----------------- */}
      <section className="py-20 bg-[#0B1340] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
              QUANTIFIABLE RESULTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Measurable Outcomes
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Transform qualitative field activity into quantitative business success.
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

      {/* ----------------- 10. ENTERPRISE INTEGRATIONS ----------------- */}
      <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
              ECOSYSTEM INTEGRATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
              Seamless Enterprise Integrations
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Connect field force automation directly with your existing enterprise ERPs, CRMs, and core systems.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] p-5 rounded-xl border border-slate-200 text-center space-y-2 hover:border-[#00a2ad] transition-colors"
              >
                <div className="text-base font-extrabold text-[#0B1340]">{item.name}</div>
                <div className="text-[11px] font-semibold text-[#00a2ad]">{item.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 11. NEXT-GENERATION INTELLIGENCE ----------------- */}
      <section className="py-20 bg-[#060C2C] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
              AI INNOVATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Next-Generation Intelligence
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Leverage AI-driven insights to predict field sales trends, detect attendance anomalies, and optimize territory allocation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiIntelligence.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#111A4E] p-8 rounded-2xl border border-slate-700/80 space-y-4 hover:border-[#00a2ad] transition-all"
              >
                <div className="text-3xl">{item.icon}</div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 12. CASE STUDIES SPOTLIGHT ----------------- */}
      <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B1340] rounded-3xl p-8 sm:p-12 text-white border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="px-3 py-1 bg-[#00a2ad] text-white text-xs font-bold rounded uppercase tracking-wider">
                FEATURED CASE STUDY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold leading-snug">
                How Autofya Digitized FMCG Distribution for 1,000+ Field Reps Across 12,000 Outlets
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                By replacing legacy paper forms with Autofya Field Force Automation, the client achieved complete visibility over daily store visits, reduced order entry errors to 0%, and accelerated monthly revenue collections.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="bg-[#111A4E] p-3 rounded-xl border border-slate-700 text-center">
                  <div className="text-xl font-bold text-[#00a2ad]">1,000+</div>
                  <div className="text-[11px] text-slate-400">Active Reps</div>
                </div>
                <div className="bg-[#111A4E] p-3 rounded-xl border border-slate-700 text-center">
                  <div className="text-xl font-bold text-white">12,000+</div>
                  <div className="text-[11px] text-slate-400">Outlets Covered</div>
                </div>
                <div className="bg-[#111A4E] p-3 rounded-xl border border-slate-700 text-center">
                  <div className="text-xl font-bold text-[#00a2ad]">3.2X</div>
                  <div className="text-[11px] text-slate-400">ROI Delivered</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#111A4E] p-6 rounded-2xl border border-slate-700 space-y-4">
              <h3 className="text-lg font-bold text-white">Key Implementation Results</h3>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-[#00a2ad] font-bold">✓</span>
                  <span>100% automated geofenced check-in across 6 distribution divisions.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00a2ad] font-bold">✓</span>
                  <span>Real-time SAP S/4HANA order injection via REST APIs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00a2ad] font-bold">✓</span>
                  <span>Eliminated 240+ hours of monthly manual reconciliation work.</span>
                </li>
              </ul>

              <div className="pt-2">
                <a
                  href="#contact"
                  className="block text-center py-3 bg-[#00a2ad] hover:bg-[#008a94] text-white font-bold text-xs rounded-xl transition-all"
                >
                  Request Full Case Study PDF
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- 13. FAQ & CONTACT CTA SECTION ----------------- */}
      <section id="contact" className="py-20 bg-[#0B1340]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-3xl font-extrabold text-white">
                Field Force Automation FAQ
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
                START YOUR TRANSFORMATIONAL JOURNEY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Ready to Scale Your Field Operations?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Schedule a personalized 1-on-1 demo with an Autofya field automation architect today.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for your interest! An Autofya solution architect will contact you shortly.");
              }}
              className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 text-left"
            >
              <input
                type="text"
                required
                placeholder="Your Full Name"
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
                  Schedule a Demo Now
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
