"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ShopifyServicesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeStep, setActiveStep] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const solutions = [
    {
      id: "custom-design",
      title: "Custom Design & Development",
      description:
        "Custom Shopify themes tailored to your unique brand identity, optimized for desktop and mobile responsiveness with lightning-fast load times.",
      image: "/ecommerce_retail_app.jpg",
      bullets: [
        "Pixel-perfect theme development & Liquid/Next.js custom styling",
        "Mobile-first responsive layouts & touch-friendly UI design",
        "UX/UI optimization for maximum conversion rates",
        "Headless Shopify storefronts with Next.js & GraphQL",
        "Advanced search, mega menu, & custom filter logic",
      ],
      isReversed: false,
    },
    {
      id: "migration",
      title: "Shopify Migration with Zero Downtime",
      description:
        "Smoothly transition your e-commerce store from Magento, WooCommerce, BigCommerce, or legacy platforms to Shopify without losing data, traffic, or search rankings.",
      image: "/hero_ecommerce_dev.jpg",
      bullets: [
        "Complete data transfer (products, orders, customers & history)",
        "SEO preservation & 301 URL redirect mapping",
        "Zero business disruption & uninterrupted checkout",
        "Custom script & API re-integration",
        "Post-migration audit & performance testing",
      ],
      isReversed: true,
    },
    {
      id: "app-integration",
      title: "Custom App & API Integration",
      description:
        "Extend your Shopify capabilities with custom-built public/private apps, seamless third-party API integrations, and enterprise backend connections.",
      image: "/capabilities_digital_trans.jpg",
      bullets: [
        "Public and private Shopify app development (Node.js & React)",
        "ERP, CRM, WMS & POS system integrations",
        "Custom payment gateways & checkout UI extensions",
        "Automated inventory, tax & fulfillment sync",
        "Advanced analytics & reporting dashboards",
      ],
      isReversed: false,
    },
    {
      id: "shopify-plus",
      title: "Shopify Plus Enterprise Solutions",
      description:
        "Enterprise-grade e-commerce engineering for high-volume brands demanding sub-second speed, bank-grade security, and global scalability.",
      image: "/ecommerce_team_banner.jpg",
      bullets: [
        "Multi-store setup & internationalization (multi-currency & language)",
        "Custom B2B & wholesale portals with tiered pricing",
        "High-volume transaction optimization for flash sales",
        "Automated workflows with Shopify Flow & Launchpad",
        "Dedicated 24/7 technical monitoring & growth support",
      ],
      isReversed: true,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description:
        "We analyze your business goals, target audience, product taxonomy, competitor landscape, and technical requirements to create a high-converting Shopify roadmap.",
    },
    {
      step: "02",
      title: "Architecture & UX/UI Design",
      description:
        "Our design team creates mobile-first wireframes, intuitive buyer journeys, conversion-tuned product pages, and interactive store prototypes.",
    },
    {
      step: "03",
      title: "Development & Integration",
      description:
        "We build pixel-perfect Liquid themes or headless Next.js frontends, integrate APIs, set up custom apps, and configure backend workflows.",
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      description:
        "Rigorous testing across browsers, mobile devices, checkout security, speed performance, and stress-load scenarios before going live.",
    },
    {
      step: "05",
      title: "Launch & Ongoing Support",
      description:
        "Seamless store deployment with zero downtime, staff training, continuous Core Web Vitals monitoring, and ongoing feature development.",
    },
  ];

  const useCases = [
    {
      title: "D2C Fashion & Apparel",
      desc: "Immersive visual storefronts, lookbooks, size charts, variant swatches, and 1-click mobile checkouts.",
      icon: "👗",
      tag: "D2C Brands",
    },
    {
      title: "High-Volume Electronics",
      desc: "Complex product specifications, SKU bundles, warranty management, and fast faceted search filters.",
      icon: "💻",
      tag: "Consumer Tech",
    },
    {
      title: "B2B Wholesale Portals",
      desc: "Custom wholesale pricing tiers, bulk order matrices, net payment terms, and quick re-order features.",
      icon: "🏢",
      tag: "Enterprise B2B",
    },
    {
      title: "Global Subscription Stores",
      desc: "Recurring billing setup with Recharge/Bold, customizable subscription boxes, and customer portal management.",
      icon: "🔄",
      tag: "Subscriptions",
    },
    {
      title: "Omnichannel Commerce",
      desc: "Synchronizing Shopify POS, physical retail inventory, ERP backends, and online orders in real time.",
      icon: "🛍️",
      tag: "Retail & POS",
    },
  ];

  const capabilities = [
    {
      title: "Custom Storefront & Theme Development",
      desc: "Bespoke Shopify Liquid & Hydrogen themes designed to captivate your audience and reflect your brand identity.",
      icon: "🎨",
      gradient: "from-blue-500/20 via-blue-600/10 to-transparent",
      borderColor: "border-blue-500/30",
      iconBg: "bg-blue-600/20 text-blue-400",
    },
    {
      title: "Shopify Plus Enterprise Engineering",
      desc: "Scaling high-volume enterprise stores with multi-store support, checkout custom extensions, and B2B functionality.",
      icon: "🚀",
      gradient: "from-indigo-500/20 via-indigo-600/10 to-transparent",
      borderColor: "border-indigo-500/30",
      iconBg: "bg-indigo-600/20 text-indigo-400",
    },
    {
      title: "Public & Private App Development",
      desc: "Custom app solutions built using React, Node.js, and Shopify GraphQL Admin APIs tailored to your workflow.",
      icon: "🧩",
      gradient: "from-emerald-500/20 via-emerald-600/10 to-transparent",
      borderColor: "border-emerald-500/30",
      iconBg: "bg-emerald-600/20 text-emerald-400",
    },
    {
      title: "Seamless Platform Migration",
      desc: "Risk-free migration from Magento, WooCommerce, BigCommerce, or custom legacy setups with full SEO preservation.",
      icon: "🔄",
      gradient: "from-violet-500/20 via-violet-600/10 to-transparent",
      borderColor: "border-violet-500/30",
      iconBg: "bg-violet-600/20 text-violet-400",
    },
    {
      title: "Headless Shopify Architecture",
      desc: "Combining Shopify backend power with Next.js frontend speed for sub-second page loads and complete design freedom.",
      icon: "⚡",
      gradient: "from-amber-500/20 via-amber-600/10 to-transparent",
      borderColor: "border-amber-500/30",
      iconBg: "bg-amber-600/20 text-amber-400",
    },
    {
      title: "Omnichannel & POS Integration",
      desc: "Unifying online store, physical retail POS, inventory management, and ERP backends into a single single-source dashboard.",
      icon: "🏪",
      gradient: "from-sky-500/20 via-sky-600/10 to-transparent",
      borderColor: "border-sky-500/30",
      iconBg: "bg-sky-600/20 text-sky-400",
    },
    {
      title: "B2B & Wholesale Solutions",
      desc: "Enterprise B2B checkout, custom pricing tiers, bulk discounts, quote requests, and automated tax exemptions.",
      icon: "📊",
      gradient: "from-teal-500/20 via-teal-600/10 to-transparent",
      borderColor: "border-teal-500/30",
      iconBg: "bg-teal-600/20 text-teal-400",
    },
    {
      title: "Performance & Conversion Optimization",
      desc: "Core Web Vitals optimization, image compression, script audit, checkout funnel tuning, and speed enhancements.",
      icon: "📈",
      gradient: "from-rose-500/20 via-rose-600/10 to-transparent",
      borderColor: "border-rose-500/30",
      iconBg: "bg-rose-600/20 text-rose-400",
    },
    {
      title: "Checkout & Payment Customization",
      desc: "Custom checkout UI extensions, local payment gateway integrations, multi-currency display, and subscription flows.",
      icon: "💳",
      gradient: "from-purple-500/20 via-purple-600/10 to-transparent",
      borderColor: "border-purple-500/30",
      iconBg: "bg-purple-600/20 text-purple-400",
    },
    {
      title: "24/7 Store Support & SLA Maintenance",
      desc: "Dedicated ongoing technical support, proactive security monitoring, version updates, and rapid incident response.",
      icon: "🛡️",
      gradient: "from-orange-500/20 via-orange-600/10 to-transparent",
      borderColor: "border-orange-500/30",
      iconBg: "bg-orange-600/20 text-orange-400",
    },
  ];

  const caseStudies = [
    {
      title: "Scaling D2C Fashion Store Revenue by 180% with Headless Shopify Plus",
      metric: "+180% Revenue Growth",
      subMetric: "0.9s Mobile Page Load Speed",
      desc: "Autofya redesigned and built a headless Next.js + Shopify Plus storefront, doubling conversion rates and handling 50,000 concurrent peak holiday shoppers.",
      image: "/ecommerce_retail_app.jpg",
      tags: ["Headless Commerce", "Shopify Plus", "Fashion"],
    },
    {
      title: "Zero-Downtime Migration of 200,000+ SKUs from Magento to Shopify Plus",
      metric: "100% SEO Preservation",
      subMetric: "Zero Order Interruption",
      desc: "Migrated multi-brand catalog, customer order history, and 301 redirects to Shopify Plus in 8 weeks without losing organic search traffic.",
      image: "/hero_ecommerce_dev.jpg",
      tags: ["Magento Migration", "Shopify Plus", "Enterprise"],
    },
  ];

  const clientLogos = [
    "Unilever",
    "Domino's",
    "Grameenphone",
    "Apex Footwear",
    "Bata Global",
    "Standard Chartered",
    "Nestlé",
  ];

  const faqs = [
    {
      question: "Why should we choose Autofya for Shopify Development?",
      answer:
        "Autofya brings certified Shopify Plus developers, 15+ years of enterprise e-commerce experience, and a proven track record of scaling digital stores. We combine deep technical expertise in Liquid, Next.js, and GraphQL with high-conversion UI/UX design.",
    },
    {
      question: "Can Autofya help migrate our store to Shopify without losing SEO or data?",
      answer:
        "Yes! We specialize in zero-downtime store migrations from Magento, WooCommerce, BigCommerce, or custom platforms. We perform automated product/order data transfers, 301 URL redirect mapping, and customer account synchronization while preserving 100% of your search engine authority.",
    },
    {
      question: "What is Headless Shopify and do we need it?",
      answer:
        "Headless Shopify decouples your front-end customer interface (built with Next.js or React) from your back-end Shopify commerce engine. It provides sub-second page load times, total visual freedom, and superior mobile app performance—ideal for fast-growing or high-volume enterprise brands.",
    },
    {
      question: "How long does a custom Shopify store development take?",
      answer:
        "A custom Shopify theme development project typically takes 4 to 6 weeks. Complex Shopify Plus enterprise builds, headless architecture, or custom app integrations take 8 to 12 weeks, delivered in 2-week Agile sprints.",
    },
    {
      question: "Do you provide post-launch maintenance and support?",
      answer:
        "Yes, we offer 24/7 SLA-backed store support, proactive monitoring, speed audits, security updates, and continuous conversion rate optimization (CRO) packages.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B1340] selection:bg-[#00a2ad] selection:text-white font-sans">
      {/* Navigation Header */}
      <Navbar />

      <main className="flex-1">
        {/* ========================================================= */}
        {/* 1. HERO SECTION (DARK NAVY THEME MATCHING SCREENSHOT)       */}
        {/* ========================================================= */}
        <section className="relative bg-[#070D24] text-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
          {/* Subtle Background Glows */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#00a2ad]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              
              {/* Hero Text Left */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                {/* Badges */}
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/15">
                  <span className="w-6 h-6 rounded-full bg-[#95BF47] flex items-center justify-center font-bold text-xs text-white shadow-sm">
                    S
                  </span>
                  <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-200">
                    Official Shopify Partner &amp; Enterprise Specialists
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                  Commerce Without Limits, <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">
                    Powered by Shopify Expertise.
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
                  Transform your online store into a high-converting revenue engine with Autofya&apos;s certified Shopify developers. From custom themes to complex enterprise Shopify Plus migrations.
                </p>

                {/* CTA Buttons */}
                <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <Link
                    href="/schedule"
                    className="px-8 py-4 rounded-full bg-[#FF9000] hover:bg-[#E68200] text-white font-bold text-base shadow-lg shadow-amber-900/30 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer flex items-center gap-2"
                  >
                    <span>Talk to us</span>
                    <span className="text-xl">→</span>
                  </Link>
                  <a
                    href="#solutions"
                    className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-base backdrop-blur-md border border-white/20 transition-colors cursor-pointer"
                  >
                    Explore Solutions
                  </a>
                </div>

                {/* Quick Trust Indicators */}
                <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800 max-w-lg">
                  <div>
                    <p className="text-2xl lg:text-3xl font-extrabold text-amber-400">250+</p>
                    <p className="text-xs text-slate-400 font-medium">Shopify Stores Built</p>
                  </div>
                  <div>
                    <p className="text-2xl lg:text-3xl font-extrabold text-emerald-400">45%</p>
                    <p className="text-xs text-slate-400 font-medium">Avg. Conversion Boost</p>
                  </div>
                  <div>
                    <p className="text-2xl lg:text-3xl font-extrabold text-cyan-400">0%</p>
                    <p className="text-xs text-slate-400 font-medium">Downtime Migrations</p>
                  </div>
                </div>

              </div>

              {/* Hero Image Right (Smartphone & Desktop Mockup) */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-md lg:max-w-none">
                  
                  {/* Outer Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-emerald-500 rounded-3xl blur-2xl opacity-20" />
                  
                  {/* Hero Container Card */}
                  <div className="relative rounded-2xl bg-[#0D183D] border border-white/15 p-4 shadow-2xl overflow-hidden">
                    <div className="relative h-[360px] sm:h-[420px] rounded-xl overflow-hidden shadow-md">
                      <Image
                        src="/ecommerce_retail_app.jpg"
                        alt="Autofya Shopify Storefront Mockup"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        priority
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070D24] via-transparent to-transparent opacity-80" />
                      
                      {/* Floating Badge Card Over Image */}
                      <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl text-white">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-[#95BF47] flex items-center justify-center font-bold text-white shadow-md">
                            🛍️
                          </div>
                          <div>
                            <p className="text-xs text-emerald-400 font-bold uppercase tracking-wider">
                              Certified Shopify Experts
                            </p>
                            <p className="text-sm font-semibold text-white">
                              High-converting Shopify &amp; Plus Architecture
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
        {/* 2. TRUSTED BY CLIENTS LOGO BAR                            */}
        {/* ========================================================= */}
        <section className="bg-slate-50 py-10 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-6">
              Trusted by Clients Worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-75 grayscale hover:grayscale-0 transition-all">
              {clientLogos.map((brand, idx) => (
                <span
                  key={idx}
                  className="text-base sm:text-lg font-extrabold text-slate-700 hover:text-[#00a2ad] transition-colors cursor-default"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. SHOPIFY SOLUTIONS WE DELIVER (4 ALTERNATING BLOCKS)     */}
        {/* ========================================================= */}
        <section id="solutions" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad] bg-cyan-50 px-3 py-1 rounded-full border border-cyan-100">
                Core Offerings
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
                Shopify Solutions We Deliver
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                Tailored e-commerce solutions that drive sales, elevate user experience, and scale seamlessly with your growing business.
              </p>
            </div>

            {/* Alternating Solutions Grid */}
            <div className="space-y-20">
              {solutions.map((item, idx) => (
                <div
                  key={item.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${
                    item.isReversed ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content Column */}
                  <div
                    className={`lg:col-span-6 space-y-6 ${
                      item.isReversed ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="inline-flex items-center gap-2 text-xs font-bold text-[#00a2ad] uppercase tracking-wider">
                      <span className="w-2 h-2 rounded-full bg-[#00a2ad]" />
                      Solution 0{idx + 1}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1340]">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 text-base leading-relaxed">
                      {item.description}
                    </p>

                    {/* Bullet List */}
                    <ul className="space-y-3 pt-2">
                      {item.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5">
                            ✓
                          </span>
                          <span className="text-slate-700 text-sm font-medium">
                            {bullet}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="pt-4">
                      <Link
                        href="/schedule"
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#00a2ad] hover:text-[#0b1340] group cursor-pointer"
                      >
                        <span>Request a proposal</span>
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div
                    className={`lg:col-span-6 ${
                      item.isReversed ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
                      <div className="relative h-[320px] sm:h-[380px] w-full">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1340]/60 via-transparent to-transparent" />
                      </div>
                      
                      {/* Floating Badge */}
                      <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2 rounded-lg shadow-md border border-slate-100">
                        <p className="text-xs font-bold text-[#0B1340]">
                          {item.title}
                        </p>
                        <p className="text-[11px] text-slate-500">
                          Autofya Certified Engineering
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. HOW WE WORK WITH SHOPIFY CLIENTS (PROCESS TIMELINE)    */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Image Card */}
              <div className="lg:col-span-5 space-y-6">
                <span className="text-xs uppercase tracking-widest font-extrabold text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                  Agile Methodology
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                  How We Work with Shopify Clients
                </h2>
                <p className="text-slate-300 text-base leading-relaxed">
                  A battle-tested 5-step methodology that guarantees seamless execution, speed to market, and measurable ROI.
                </p>

                <div className="relative rounded-2xl overflow-hidden border border-white/15 shadow-2xl h-[300px]">
                  <Image
                    src="/ecommerce_team_banner.jpg"
                    alt="Autofya Shopify Engineering Team"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-lg font-bold text-white">Dedicated Shopify Squads</p>
                    <p className="text-xs text-slate-300">UX Designers • Liquid Developers • QA Specialists</p>
                  </div>
                </div>

                <Link
                  href="/schedule"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF9000] hover:bg-[#E68200] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                >
                  <span>Talk to us</span>
                  <span>→</span>
                </Link>
              </div>

              {/* Right Column: Interactive Process Steps */}
              <div className="lg:col-span-7 space-y-4">
                {processSteps.map((stepItem, idx) => {
                  const isActive = activeStep === idx;
                  return (
                    <div
                      key={stepItem.step}
                      onClick={() => setActiveStep(idx)}
                      className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                        isActive
                          ? "bg-white/10 border-amber-400/50 shadow-xl"
                          : "bg-white/5 border-white/10 hover:bg-white/10"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className="text-xl font-extrabold text-amber-400 font-mono">
                            {stepItem.step}
                          </span>
                          <h3 className="text-lg sm:text-xl font-bold text-white">
                            {stepItem.title}
                          </h3>
                        </div>
                        <span className="text-slate-400 text-sm">
                          {isActive ? "▲" : "▼"}
                        </span>
                      </div>

                      {isActive && (
                        <p className="mt-3 text-slate-300 text-sm leading-relaxed pl-10">
                          {stepItem.description}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. SHOPIFY USE CASES WE SUPPORT                           */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad] bg-cyan-50 px-3 py-1 rounded-full border border-cyan-100">
                Industry Versatility
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
                Shopify Use Cases We Support
              </h2>
              <p className="text-slate-600 text-base">
                Whether you operate a direct-to-consumer store or an enterprise B2B portal, Autofya builds scalable Shopify solutions tailored to your industry.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {useCases.map((uc, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{uc.icon}</span>
                    <span className="text-xs font-bold text-[#00a2ad] bg-cyan-50 px-2.5 py-1 rounded-md border border-cyan-100">
                      {uc.tag}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1340]">{uc.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{uc.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. INNOVATION & COMMERCIAL VALUE BANNER                   */}
        {/* ========================================================= */}
        <section className="bg-gradient-to-r from-[#0B1340] via-[#0E1A54] to-[#0B1340] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
              Innovation &amp; Commercial Value
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto text-base">
              We focus on performance metrics that directly impact your bottom line—speed, mobile conversion rates, and seamless checkout experiences.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto pt-4">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <p className="text-4xl font-extrabold text-amber-400 mb-1">45%+</p>
                <p className="text-sm font-semibold text-white">Average Conversion Rate Uplift</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <p className="text-4xl font-extrabold text-emerald-400 mb-1">&lt; 1.0s</p>
                <p className="text-sm font-semibold text-white">Sub-Second Mobile Load Times</p>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <p className="text-4xl font-extrabold text-cyan-400 mb-1">99.99%</p>
                <p className="text-sm font-semibold text-white">Uptime &amp; Zero Downtime Migrations</p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 7. SHOPIFY CAPABILITIES BY AUTOFYA (REBRANDED FROM IMAGE)  */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Title */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="text-xs uppercase tracking-widest font-extrabold text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/30">
                End-to-End Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Shopify Capabilities by Autofya
              </h2>
              <p className="text-slate-400 text-base sm:text-lg">
                Full-spectrum Shopify engineering expertise to help your store innovate, scale, and dominate your market.
              </p>
            </div>

            {/* 10 Capabilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className={`p-6 sm:p-8 rounded-2xl bg-slate-900/80 backdrop-blur-md border ${cap.borderColor} hover:border-amber-400/50 transition-all duration-300 group flex items-start gap-5`}
                >
                  <div className={`w-14 h-14 rounded-xl ${cap.iconBg} flex items-center justify-center text-2xl shrink-0 shadow-md group-hover:scale-110 transition-transform`}>
                    {cap.icon}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {cap.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {cap.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 8. CALLOUT BANNER / CONSULTATION                           */}
        {/* ========================================================= */}
        <section className="py-12 bg-gradient-to-r from-[#00a2ad] to-teal-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Ready to turn your Shopify store into a market leader?
              </h3>
              <p className="text-cyan-100 text-sm">
                Schedule a 30-minute free technical consultation with Autofya&apos;s Shopify architects.
              </p>
            </div>

            <Link
              href="/schedule"
              className="px-8 py-3.5 rounded-full bg-[#0B1340] hover:bg-[#121c5b] text-white font-bold text-sm shadow-xl transition-all whitespace-nowrap cursor-pointer"
            >
              Talk to us →
            </Link>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 9. SHOPIFY E-COMMERCE SUCCESS STORIES (CASE STUDIES)      */}
        {/* ========================================================= */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-4">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                  Proven Results
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
                  Shopify eCommerce Success Stories
                </h2>
              </div>
              <Link
                href="/schedule"
                className="text-sm font-bold text-[#00a2ad] hover:underline flex items-center gap-1"
              >
                View all case studies →
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((cs, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50 hover:shadow-xl transition-all group flex flex-col justify-between"
                >
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={cs.image}
                      alt={cs.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                      {cs.tags.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-bold bg-white/20 backdrop-blur-md text-white px-2.5 py-1 rounded-md border border-white/30"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-8 space-y-4 flex-1 flex flex-col justify-between">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-4">
                        <span className="text-xl font-extrabold text-emerald-600">
                          {cs.metric}
                        </span>
                        <span className="text-xs font-bold text-slate-500 bg-slate-200/80 px-2.5 py-1 rounded-full">
                          {cs.subMetric}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[#0B1340] group-hover:text-[#00a2ad] transition-colors">
                        {cs.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {cs.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-200">
                      <Link
                        href="/schedule"
                        className="text-xs font-bold text-[#0B1340] hover:text-[#00a2ad] flex items-center gap-1.5"
                      >
                        <span>Read full case study</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 10. FAQS SECTION                                          */}
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
