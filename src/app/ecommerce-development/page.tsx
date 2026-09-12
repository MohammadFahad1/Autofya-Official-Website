"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function EcommerceDevelopmentPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeProductTab, setActiveProductTab] = useState<string>("popular");

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const services = [
    {
      title: "Store Setup & Custom Design",
      desc: "Tailored Shopify & web storefronts with conversion-optimized UI/UX, responsive layouts, and brand identity integration.",
      bgGradient: "from-blue-600 via-blue-700 to-indigo-900",
      icon: "🛒",
    },
    {
      title: "Shopify & Headless Customization",
      desc: "Custom Liquid & Next.js storefronts, bespoke features, checkout extensions, and high-speed headless commerce APIs.",
      bgGradient: "from-emerald-600 via-teal-700 to-emerald-950",
      icon: "🛍️",
    },
    {
      title: "eCommerce App & Plugin Dev",
      desc: "Bespoke Shopify apps, custom plugins, payment gateway integrations, inventory sync, and ERP/CRM connections.",
      bgGradient: "from-[#0F172A] via-[#1E293B] to-[#090D16]",
      icon: "⚙️",
    },
    {
      title: "Shopify Plus & Platform Migration",
      desc: "Zero-downtime data migration from Magento, WooCommerce, BigCommerce, or legacy platforms to Shopify Plus.",
      bgGradient: "from-purple-900 via-indigo-900 to-slate-950",
      icon: "🚀",
    },
  ];

  const products = [
    {
      id: "mobile-app",
      category: "popular",
      title: "Mobile Shopping App for Shopify",
      desc: "Turn your store into a native iOS and Android mobile app with push notifications and instant 1-click checkout.",
      badge: "Best Seller",
      image: "/ecommerce_retail_app.jpg",
    },
    {
      id: "b2b-portal",
      category: "popular",
      title: "B2B Wholesale & Enterprise Portal",
      desc: "Advanced wholesale features including tiered volume pricing, customer group rules, tax exempts, and quick order sheets.",
      badge: "Popular",
      image: "/hero_ecommerce_dev.jpg",
    },
    {
      id: "multi-vendor",
      category: "featured",
      title: "Multi-Vendor Marketplace Extension",
      desc: "Transform your single store into an Amazon-style multi-seller marketplace with vendor dashboards and automated split payments.",
      badge: "Featured",
      image: "/ecommerce_team_banner.jpg",
    },
    {
      id: "payment-gateway",
      category: "new",
      title: "Custom Payment & Shipping Gateway Suite",
      desc: "Seamless local and international payment gateway integrations with automated currency conversion and tax rules.",
      badge: "New Release",
      image: "/hero_ecommerce_dev.jpg",
    },
  ];

  const filteredProducts =
    activeProductTab === "all"
      ? products
      : products.filter(
          (p) => p.category === activeProductTab || activeProductTab === "popular"
        );

  const testimonials = [
    {
      quote:
        "Autofya transformed our online store velocity. Their headless Shopify Plus setup increased our mobile conversions by 42% and reduced page load speed under 1.2s.",
      author: "Robert Chen",
      role: "VP of Digital Commerce",
      rating: 5,
      company: "Nordic Retail Global",
    },
    {
      quote:
        "Migrating 150,000+ SKUs from legacy Magento to Shopify Plus was daunting, but Autofya executed zero-downtime migration with perfect SEO preservation.",
      author: "Sarah Jenkins",
      role: "E-Commerce Director",
      rating: 5,
      company: "Aura Home Goods",
    },
  ];

  const globalOffices = [
    { country: "USA", flag: "🇺🇸", city: "New York & San Francisco" },
    { country: "Germany", flag: "🇩🇪", city: "Frankfurt" },
    { country: "UAE", flag: "🇦🇪", city: "Dubai" },
    { country: "United Kingdom", flag: "🇬🇧", city: "London" },
    { country: "Bangladesh", flag: "🇧🇩", city: "Dhaka (HQ)" },
    { country: "Netherlands", flag: "🇳🇱", city: "Amsterdam" },
  ];

  const faqs = [
    {
      question: "Why choose Autofya for Shopify and eCommerce development?",
      answer:
        "Autofya brings 15+ years of enterprise eCommerce experience, certified Shopify developers, and a proven track record of building high-scale storefronts. We focus on page speed, mobile UX, high conversion rates, and seamless backend API integrations.",
    },
    {
      question: "How long does a custom eCommerce store build take?",
      answer:
        "Standard Shopify custom theme setup takes 4 to 6 weeks. Headless eCommerce portals and complex multi-vendor or enterprise B2B builds typically range from 8 to 14 weeks, delivered in 2-week Agile sprints.",
    },
    {
      question: "What is Headless eCommerce and why should I consider it?",
      answer:
        "Headless eCommerce decouples your front-end customer interface (built with Next.js or React) from the back-end commerce engine (Shopify Plus / BigCommerce). This delivers sub-second page load times, total UI design freedom, and superior mobile app performance.",
    },
    {
      question: "Can Autofya migrate my store without losing SEO rankings or customer data?",
      answer:
        "Yes! We specialize in zero-downtime migrations from Magento, WooCommerce, BigCommerce, or custom legacy systems to Shopify Plus. We handle 301 URL redirects, customer account mapping, order history transfers, and SEO metadata integrity.",
    },
    {
      question: "Do you offer post-launch maintenance and conversion optimization?",
      answer:
        "Absolutely. Autofya provides 24/7 technical monitoring, seasonal sales traffic preparation (Black Friday / Cyber Monday tuning), security patches, speed audits, and continuous conversion rate optimization (CRO).",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B1340] selection:bg-[#00a2ad] selection:text-white font-sans">
      {/* Navigation Bar */}
      <Navbar />

      {/* Top Green Announcement Sub-bar */}
      <div className="bg-[#052e21] text-emerald-300 py-2.5 px-4 text-center text-xs sm:text-sm font-semibold tracking-wide border-b border-emerald-800/40">
        <span className="inline-flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Autofya Certified eCommerce Experts &bull; Shopify Gold Partner &bull; 15+ Years Enterprise Experience
        </span>
      </div>

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* HERO SECTION (DARK EMERALD GRADIENT)                                      */}
        {/* ========================================================================= */}
        <section className="relative bg-gradient-to-br from-[#063326] via-[#094735] to-[#042118] text-white py-20 lg:py-28 overflow-hidden">
          {/* Background overlay image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero_ecommerce_dev.jpg"
              alt="eCommerce Storefront Dashboard"
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#063326]/90 via-[#063326]/80 to-[#042118]/95" />
          </div>

          <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl text-center sm:text-left">
              <span className="inline-block text-emerald-400 font-bold text-sm sm:text-base tracking-wider mb-4 uppercase">
                Services &gt; eCommerce Engineering
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] mb-6 tracking-tight">
                Expert Shopify <span className="text-emerald-400 italic font-semibold">Development</span> Services
              </h1>
              <p className="text-lg sm:text-xl text-emerald-100/90 leading-relaxed font-normal mb-8 max-w-2xl">
                From custom storefronts and headless commerce to enterprise Shopify Plus migration, Autofya builds scalable, high-converting digital stores.
              </p>
              <div className="flex flex-wrap items-center gap-4 justify-center sm:justify-start">
                <Link
                  href="/schedule"
                  className="px-8 py-3.5 rounded-full text-base font-bold bg-white text-[#063326] hover:bg-emerald-300 transition-all shadow-lg hover:shadow-emerald-500/20 active:scale-95 cursor-pointer"
                >
                  Get a Free Consultation
                </Link>
                <a
                  href="#services-grid"
                  className="px-8 py-3.5 rounded-full text-base font-bold bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all border border-white/20 cursor-pointer"
                >
                  Explore Services
                </a>
              </div>
            </div>

            {/* 4 STATS METRICS BAR */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-emerald-800/60">
              <div className="bg-white/5 backdrop-blur-md border border-emerald-700/40 rounded-2xl p-6 text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-300 mb-1">
                  15+
                </div>
                <div className="text-xs sm:text-sm text-emerald-100 font-medium">
                  Years eCommerce Experience
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-emerald-700/40 rounded-2xl p-6 text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-300 mb-1">
                  150+
                </div>
                <div className="text-xs sm:text-sm text-emerald-100 font-medium">
                  Certified eCommerce Engineers
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-emerald-700/40 rounded-2xl p-6 text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-300 mb-1">
                  124+
                </div>
                <div className="text-xs sm:text-sm text-emerald-100 font-medium">
                  Enterprise Stores Delivered
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-emerald-700/40 rounded-2xl p-6 text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-extrabold text-emerald-300 mb-1">
                  255K+
                </div>
                <div className="text-xs sm:text-sm text-emerald-100 font-medium">
                  Active Daily Store Users
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* OUR SERVICES GRID SECTION                                                */}
        {/* ========================================================================= */}
        <section id="services-grid" className="py-20 sm:py-28 bg-[#F8FAFC]">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-2">
                What We Build
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1340]">
                OUR SERVICES
              </h2>
              <p className="text-slate-600 text-base sm:text-lg mt-3">
                Comprehensive eCommerce development tailored to boost revenue, speed, and conversion rates.
              </p>
            </div>

            {/* 4 FEATURED SERVICE GRADIENT CARDS (MATCHING REFERENCE SCREENSHOT) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {services.map((srv, idx) => (
                <div
                  key={idx}
                  className={`relative rounded-3xl p-8 text-white bg-gradient-to-b ${srv.bgGradient} shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between min-h-[340px] group cursor-pointer border border-white/10`}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md text-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {srv.icon}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 leading-snug">
                      {srv.title}
                    </h3>
                    <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                      {srv.desc}
                    </p>
                  </div>

                  <div className="pt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300 group-hover:translate-x-1 transition-transform">
                    <span>Explore Solution</span>
                    <span>&rarr;</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CERTIFICATIONS & PARTNER BADGES BANNER                                   */}
        {/* ========================================================================= */}
        <section className="py-12 bg-white border-y border-slate-200/80">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between gap-8">
              <div className="flex flex-wrap items-center gap-8 opacity-85">
                <span className="font-extrabold text-[#0B1340] text-sm uppercase tracking-wider">
                  Supported Platforms:
                </span>
                <span className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-extrabold text-emerald-700">
                  Shopify Plus
                </span>
                <span className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-extrabold text-orange-600">
                  Magento
                </span>
                <span className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-extrabold text-purple-700">
                  WooCommerce
                </span>
                <span className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-extrabold text-blue-600">
                  BigCommerce
                </span>
                <span className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-extrabold text-slate-800">
                  Odoo ERP
                </span>
              </div>

              <div className="flex items-center gap-6 text-slate-700 text-xs sm:text-sm font-semibold">
                <div>
                  <strong className="text-[#0B1340] text-base block">100+</strong>
                  Custom Store Extensions
                </div>
                <div className="h-8 w-px bg-slate-200" />
                <div>
                  <strong className="text-[#0B1340] text-base block">04</strong>
                  Platform Certifications
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CLIENT SUCCESS STORIES                                                   */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1340]">
                Client Success Stories
              </h2>
              <p className="text-slate-600 text-base sm:text-lg mt-3">
                See how Autofya empowers global brands with scalable online store architecture.
              </p>
            </div>

            {/* Video Showcase Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-950 aspect-[16/9] max-w-4xl mx-auto border-4 border-white">
              <Image
                src="/hero_ecommerce_dev.jpg"
                alt="Client Success Story Video Thumbnail"
                fill
                className="object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col items-center justify-center text-center p-8">
                <div className="w-20 h-20 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-transform mb-6">
                  <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-2">
                  A PARTNERSHIP BUILT TO LAST
                </h3>
                <p className="text-emerald-300 font-semibold text-base sm:text-lg">
                  Watch our client testimonial & digital store growth story
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* MOST POPULAR STORE PRODUCTS & EXTENSIONS                                 */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 bg-[#F8FAFC]">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-14">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-1">
                  Ready-to-Deploy Solutions
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
                  Featured eCommerce Solutions
                </h2>
              </div>

              {/* Tabs Filter */}
              <div className="flex flex-wrap gap-2">
                {[
                  { id: "popular", label: "POPULAR" },
                  { id: "featured", label: "FEATURED" },
                  { id: "new", label: "NEW RELEASES" },
                  { id: "all", label: "ALL PRODUCTS" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveProductTab(tab.id)}
                    className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                      activeProductTab === tab.id
                        ? "bg-[#0B1340] text-white shadow-md"
                        : "bg-white text-slate-600 hover:bg-slate-200 border border-slate-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="relative h-56 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={prod.image}
                      alt={prod.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-extrabold px-3 py-1.5 rounded-full shadow-md">
                      {prod.badge}
                    </span>
                  </div>

                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#0B1340] mb-3">
                        {prod.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                        {prod.desc}
                      </p>
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                      <Link
                        href="/schedule"
                        className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[#0B1340] hover:bg-[#00a2ad] text-white transition-colors cursor-pointer"
                      >
                        Live Demo
                      </Link>
                      <Link
                        href="/schedule"
                        className="px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors cursor-pointer"
                      >
                        Learn More &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* TESTIMONIALS SECTION                                                     */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 bg-[#00a2ad] text-white">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-extrabold tracking-wider text-white/80 block mb-2">
                Client Feedback
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                TESTIMONIALS
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((t, idx) => (
                <div
                  key={idx}
                  className="bg-white text-[#0B1340] rounded-3xl p-8 sm:p-10 shadow-xl space-y-6"
                >
                  <div className="flex items-center gap-1 text-amber-400 text-xl">
                    {"★".repeat(t.rating)}
                  </div>
                  <p className="text-base sm:text-lg leading-relaxed text-slate-700 italic">
                    "{t.quote}"
                  </p>
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <h4 className="font-extrabold text-lg text-[#0B1340]">
                        {t.author}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-500 font-medium">
                        {t.role} &bull; {t.company}
                      </p>
                    </div>
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">
                      Verified Review
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* RETAIL CASE STUDY HIGHLIGHT                                              */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#F8FAFC] rounded-3xl border border-slate-200/80 p-8 sm:p-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider inline-block">
                  Case Study
                </span>
                <h3 className="text-2xl sm:text-4xl font-extrabold text-[#0B1340] leading-tight">
                  Empowering Superstores: A Journey Towards Digital Excellence in Retail
                </h3>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  How Autofya built an integrated retail superstore web application, inventory synchronization engine, and high-speed mobile shopping app for enterprise superstores.
                </p>
                <div>
                  <Link
                    href="/schedule"
                    className="px-8 py-3.5 rounded-full text-base font-bold bg-[#FF9000] hover:bg-[#E68200] text-white transition-colors inline-block cursor-pointer"
                  >
                    Read Case Study
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-200 shadow-xl border-4 border-white">
                  <Image
                    src="/ecommerce_retail_app.jpg"
                    alt="Retail Mobile App Superstore Case Study"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* GLOBAL OFFICES & CAPABILITIES                                            */}
        {/* ========================================================================= */}
        <section className="py-16 bg-[#F8FAFC] border-y border-slate-200/80">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-4">
                <h3 className="text-2xl font-extrabold text-[#0B1340] mb-2">
                  OUR GLOBAL PRESENCE
                </h3>
                <p className="text-sm text-slate-600">
                  Autofya delivers enterprise eCommerce solutions across 6+ regional office hubs worldwide.
                </p>
              </div>

              <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {globalOffices.map((off, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-4 rounded-xl border border-slate-200/80 flex items-center gap-3 shadow-sm"
                  >
                    <span className="text-2xl">{off.flag}</span>
                    <div>
                      <h4 className="font-bold text-sm text-[#0B1340]">
                        {off.country}
                      </h4>
                      <p className="text-xs text-slate-500">{off.city}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* LARGE TEAM & CULTURE BANNER (WITH AUTOFYA OVERLAY)                       */}
        {/* ========================================================================= */}
        <section className="relative py-24 sm:py-32 bg-slate-950 text-white overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/ecommerce_team_banner.jpg"
              alt="Autofya Enterprise eCommerce Team"
              fill
              className="object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" />
          </div>

          <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-10">
            <div>
              <span className="text-4xl sm:text-6xl font-black tracking-widest text-white/30 block mb-2">
                AUTOFYA
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight max-w-2xl">
                Ready to Scale Your eCommerce Store?
              </h2>
              <p className="text-lg text-slate-200 max-w-xl mt-4">
                Partner with our certified Shopify Plus & Headless eCommerce developers to double your online revenue.
              </p>
            </div>

            <div>
              <Link
                href="/schedule"
                className="px-9 py-4 rounded-full text-lg font-bold bg-[#FF9000] hover:bg-[#E68200] text-white transition-all shadow-xl inline-block cursor-pointer"
              >
                Schedule a Call
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FREQUENTLY ASKED QUESTIONS (FAQ) SECTION                                  */}
        {/* ========================================================================= */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1340]">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 text-base sm:text-lg mt-3">
                Everything you need to know about building or migrating your store with Autofya.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200/90 rounded-2xl overflow-hidden transition-all bg-white"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between p-6 text-left font-extrabold text-base sm:text-lg lg:text-xl text-[#0B1340] hover:text-[#00a2ad] transition-colors cursor-pointer"
                    >
                      <span className="pr-4 leading-snug">{faq.question}</span>
                      <span className="text-xl text-[#00a2ad] font-bold shrink-0">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="p-6 pt-0 text-slate-600 text-base sm:text-lg leading-relaxed border-t border-slate-100 bg-slate-50/50">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="pt-6 text-center">
                <Link
                  href="/schedule"
                  className="px-8 py-3 rounded-full text-sm font-bold bg-[#0B1340] hover:bg-[#00a2ad] text-white transition-colors inline-block cursor-pointer"
                >
                  View All FAQs
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* NEWSLETTER BANNER                                                        */}
        {/* ========================================================================= */}
        <section className="bg-[#052e21] text-white py-14 border-t border-emerald-800/40">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Subscribe to eCommerce Growth Insights
              </h3>
              <p className="text-emerald-200/80 text-sm sm:text-base mt-1">
                Get monthly store optimization tips, headless trends, and strategy playbooks.
              </p>
            </div>

            <div className="flex w-full md:w-auto max-w-md items-center gap-2">
              <input
                type="email"
                placeholder="Enter your work email..."
                className="w-full px-5 py-3.5 rounded-full bg-white/10 text-white placeholder-emerald-200/60 border border-emerald-600/50 focus:outline-none focus:border-emerald-400 text-sm"
              />
              <button className="px-6 py-3.5 rounded-full bg-[#FF9000] hover:bg-[#E68200] text-white font-bold text-sm shrink-0 cursor-pointer transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
