"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WebMobileAppDevelopmentPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeTechTab, setActiveTechTab] = useState<string>("all");

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const servicesList = [
    "Cross platform mobile app development",
    "Native iOS and Android app development",
    "Custom web application development",
    "Enterprise mobile solutions",
    "Emerging tech & IoT integrations",
    "UI/UX Design & Prototyping",
    "App maintenance, QA & DevOps support",
  ];

  const techStack = [
    { name: "iOS (Swift)", category: "mobile", icon: "🍎" },
    { name: "Android (Kotlin)", category: "mobile", icon: "🤖" },
    { name: "React Native", category: "mobile", icon: "⚛️" },
    { name: "Flutter", category: "mobile", icon: "💙" },
    { name: "Next.js", category: "web", icon: "▲" },
    { name: "React.js", category: "web", icon: "⚛️" },
    { name: "Node.js", category: "backend", icon: "🟢" },
    { name: "Python / Django", category: "backend", icon: "🐍" },
    { name: "TypeScript", category: "web", icon: "📘" },
    { name: "GraphQL & REST", category: "backend", icon: "⚡" },
    { name: "AWS Cloud", category: "devops", icon: "☁️" },
    { name: "Docker & K8s", category: "devops", icon: "🐳" },
  ];

  const filteredTech =
    activeTechTab === "all"
      ? techStack
      : techStack.filter((t) => t.category === activeTechTab);

  const industriesList = [
    "Fintech & Digital Banking",
    "Healthcare & Life Sciences",
    "Retail & E-Commerce",
    "Education & EdTech",
    "Logistics & Supply Chain",
    "Automotive & Smart Mobility",
    "Real Estate & PropTech",
    "Media & Entertainment",
  ];

  const clientLogos = [
    { name: "MGM", label: "MGM Resorts" },
    { name: "Inovia", label: "Inovia Labs" },
    { name: "Grameenphone", label: "Grameenphone" },
    { name: "LalTeer", label: "Lal Teer Seed" },
    { name: "CityBank", label: "City Bank" },
    { name: "StandardChartered", label: "Standard Chartered" },
  ];

  const faqs = [
    {
      question: "What web & mobile app development services does Autofya offer?",
      answer:
        "Autofya delivers end-to-end custom software solutions, including native iOS (Swift) and Android (Kotlin) app development, cross-platform apps using Flutter and React Native, enterprise web applications built with Next.js & Node.js, microservices architecture, and cloud deployment.",
    },
    {
      question: "Which mobile platforms do you build for?",
      answer:
        "We build native iOS, native Android, and cross-platform apps. Cross-platform apps built with Flutter or React Native allow you to launch on both iOS and Android simultaneously with a single codebase, reducing time-to-market and cost.",
    },
    {
      question: "How long does it take to develop a custom web or mobile app?",
      answer:
        "Project timelines depend on feature complexity, UI design scope, and integration requirements. MVP projects typically take 6 to 10 weeks, while full enterprise web & mobile application suites range from 3 to 6 months. We work in 2-week Agile sprints to deliver continuous value.",
    },
    {
      question: "Do you provide ongoing app maintenance and post-launch support?",
      answer:
        "Yes! Autofya offers comprehensive post-launch support, including 24/7 server monitoring, performance optimization, security patches, OS updates (iOS/Android compliance), feature enhancements, and SLA-backed maintenance packages.",
    },
    {
      question: "How does Autofya protect client IP and sensitive data?",
      answer:
        "We enforce strict NDAs, zero-trust cloud security protocols, encrypted code repositories, and SOC2/GDPR compliance. All intellectual property, source code, and design assets belong 100% to your company upon project completion.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B1340] selection:bg-[#00a2ad] selection:text-white font-sans">
      {/* Navigation Bar */}
      <Navbar />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* HERO SECTION                                                             */}
        {/* ========================================================================= */}
        <section className="relative bg-[#0B1340] text-white py-20 lg:py-28 overflow-hidden">
          {/* Background Hero Image with dark gradient overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/hero_mobile_app_dev.jpg"
              alt="Web & Mobile App Development Background"
              fill
              className="object-cover opacity-25"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1340]/95 via-[#0B1340]/85 to-[#0B1340]/70" />
          </div>

          <div className="relative z-10 max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-block text-[#00a2ad] font-semibold text-sm sm:text-base tracking-wider mb-3 uppercase">
                Services &gt; App Development
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] mb-6 tracking-tight">
                Web & Mobile App Development
              </h1>
              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal mb-8 max-w-2xl">
                Empowering businesses with custom, high-performance web and mobile apps built for scale, seamless user experience, and digital growth.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/schedule"
                  className="px-8 py-3.5 rounded-full text-base font-bold bg-[#FF9000] hover:bg-[#E68200] text-white transition-all shadow-lg hover:shadow-orange-500/20 active:scale-95 cursor-pointer"
                >
                  Contact Us
                </Link>
                <a
                  href="#offered-services"
                  className="px-8 py-3.5 rounded-full text-base font-bold bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all border border-white/20 cursor-pointer"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* INTRO TEXT SECTION                                                       */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed font-normal">
              <div>
                <p>
                  In today's digital-first economy, mobile and web applications serve as the primary touchpoint between brands and their users. At <strong className="text-[#0B1340] font-bold">Autofya</strong>, we design and engineer modern application solutions that seamlessly integrate into complex business workflows, giving organizations a competitive edge across iOS, Android, and Web platforms.
                </p>
              </div>
              <div>
                <p>
                  From early-stage product discovery and wireframing to high-availability microservices backends, Autofya leverages cutting-edge technology stacks and AI-enhanced engineering workflows. Whether you need a native iOS app, cross-platform Flutter build, or enterprise web portal, our team ensures rapid, reliable delivery without compromising performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* OFFERED SERVICES SECTION                                                 */}
        {/* ========================================================================= */}
        <section id="offered-services" className="py-16 sm:py-24 bg-[#F8FAFC]">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Left Column Heading */}
              <div className="lg:col-span-5">
                <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-2">
                  What We Provide
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0B1340] leading-tight mb-5">
                  <span className="relative inline-block pb-3">
                    Offered
                    <span className="absolute bottom-0 left-0 w-16 h-1.5 bg-[#00a2ad] rounded-full" />
                  </span>{" "}
                  Services
                </h2>
                <p className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed">
                  Tailored web and mobile application engineering built by Autofya’s senior product strategists, UI/UX designers, and software engineers.
                </p>
              </div>

              {/* Right Column List with Arrows */}
              <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-3">
                {servicesList.map((service, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200/80 group cursor-pointer"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#00a2ad]/10 text-[#00a2ad] flex items-center justify-center font-bold text-sm shrink-0 group-hover:bg-[#00a2ad] group-hover:text-white transition-colors">
                      &gt;
                    </div>
                    <span className="text-base sm:text-lg font-semibold text-[#0B1340] group-hover:text-[#00a2ad] transition-colors leading-snug">
                      {service}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* TECHNOLOGIES WE USE SECTION                                              */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1340] mb-4">
                Technologies{" "}
                <span className="relative inline-block">
                  we use
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#00a2ad] rounded-full" />
                </span>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed">
                We harness proven frameworks, languages, and cloud services to ensure your application is secure, fast, and scalable.
              </p>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap justify-center gap-2.5 mt-8">
                {[
                  { id: "all", label: "All Tech" },
                  { id: "mobile", label: "Mobile" },
                  { id: "web", label: "Web" },
                  { id: "backend", label: "Backend" },
                  { id: "devops", label: "Cloud & DevOps" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTechTab(tab.id)}
                    className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-semibold transition-all cursor-pointer ${
                      activeTechTab === tab.id
                        ? "bg-[#0B1340] text-white shadow-md"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid of Technologies */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 lg:gap-6">
              {filteredTech.map((tech, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8FAFC] border border-slate-200/90 rounded-2xl p-6 flex flex-col items-center justify-center hover:border-[#00a2ad] hover:shadow-lg transition-all group cursor-pointer text-center"
                >
                  <span className="text-3xl sm:text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {tech.icon}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#0B1340]">
                    {tech.name}
                  </h3>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1">
                    {tech.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* INDUSTRIES SECTION                                                       */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 bg-[#F8FAFC]">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Side: Industries List */}
              <div className="lg:col-span-6">
                <span className="text-xs uppercase font-bold tracking-wider text-slate-400 block mb-2">
                  Target Sectors
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1340] mb-8">
                  Industries
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {industriesList.map((industry, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full bg-[#FF9000] shrink-0 shadow-sm" />
                      <span className="text-base sm:text-lg font-semibold text-[#0B1340]">
                        {industry}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Image Mockup */}
              <div className="lg:col-span-6">
                <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] bg-slate-200">
                  <Image
                    src="/mobile_app_industries.jpg"
                    alt="Industries Mobile App Mockup"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* WHO WE'VE WORKED WITH SECTION                                            */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1340] mb-12">
              Who we've worked with
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center opacity-85 hover:opacity-100 transition-opacity">
              {clientLogos.map((client, idx) => (
                <div
                  key={idx}
                  className="h-16 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center p-4 font-bold text-slate-700 text-sm sm:text-base hover:text-[#00a2ad] hover:border-[#00a2ad]/50 transition-colors shadow-sm"
                >
                  {client.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FEATURE SPLIT SECTIONS (2 CARDS)                                          */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 bg-[#F8FAFC] space-y-12">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* Split 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-sm">
              <div className="lg:col-span-6 space-y-5">
                <span className="text-xs sm:text-sm uppercase font-bold tracking-wider text-[#00a2ad] block">
                  Phase 01 &bull; Strategy & Design
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1340] leading-tight">
                  User-Centric UI/UX & Interactive Prototyping
                </h3>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  We turn ideas into clear visual wireframes and high-fidelity clickable prototypes. Autofya's design team ensures your app provides an intuitive user interface, smooth onboarding flows, and micro-interactions that boost retention.
                </p>
                <ul className="space-y-3 text-slate-800 text-base sm:text-lg font-semibold">
                  <li className="flex items-center gap-3">
                    <span className="text-[#00a2ad] text-lg">✓</span> User Journey & Wireframing
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#00a2ad] text-lg">✓</span> Figma Design Systems & Tokenization
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#00a2ad] text-lg">✓</span> Interactive Prototype Testing
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-md">
                  <Image
                    src="/team_wireframing.jpg"
                    alt="UI/UX Prototyping Team"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Split 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center bg-white p-8 sm:p-12 rounded-3xl border border-slate-200/90 shadow-sm mt-12">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-md">
                  <Image
                    src="/mobile_agile_dev.jpg"
                    alt="Agile Mobile Development"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
                <span className="text-xs sm:text-sm uppercase font-bold tracking-wider text-[#00a2ad] block">
                  Phase 02 &bull; Agile Engineering
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B1340] leading-tight">
                  High-Performance Code & Scalable Backend APIs
                </h3>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  Our engineers write maintainable, modular code adhering to clean architecture standards. We integrate secure REST & GraphQL APIs, real-time push notifications, offline storage, and cloud backend automation.
                </p>
                <ul className="space-y-3 text-slate-800 text-base sm:text-lg font-semibold">
                  <li className="flex items-center gap-3">
                    <span className="text-[#00a2ad] text-lg">✓</span> Automated Testing & CI/CD Pipelines
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#00a2ad] text-lg">✓</span> Zero-Trust Security & Data Encryption
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-[#00a2ad] text-lg">✓</span> 24/7 Cloud Maintenance & SLA Monitoring
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FREQUENTLY ASKED QUESTIONS (FAQ) SECTION                                  */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1340] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 text-base sm:text-lg lg:text-xl">
                Everything you need to know about starting your web or mobile app development project with Autofya.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Contact Card */}
              <div className="lg:col-span-5 bg-[#F8FAFC] border border-slate-200/90 rounded-3xl p-8 space-y-6">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0B1340]">
                  Have any questions in mind?
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Can't find the exact information you're looking for? Schedule a call with Autofya’s solutions architecture team today.
                </p>
                <Link
                  href="/schedule"
                  className="inline-block w-full text-center px-7 py-3.5 rounded-full text-base font-bold bg-[#FF9000] hover:bg-[#E68200] text-white transition-colors cursor-pointer shadow-md"
                >
                  Contact Us
                </Link>

                <div className="pt-5 border-t border-slate-200/90 space-y-3 text-sm sm:text-base text-slate-600">
                  <div>
                    <strong className="text-[#0B1340] block font-bold">Phone:</strong>
                    +880 1700-000000
                  </div>
                  <div>
                    <strong className="text-[#0B1340] block font-bold">Email:</strong>
                    contact@autofya.com
                  </div>
                  <div>
                    <strong className="text-[#0B1340] block font-bold">Global Headquarters:</strong>
                    Autofya Tower, Gulshan, Dhaka, Bangladesh
                  </div>
                </div>
              </div>

              {/* Right Accordion */}
              <div className="lg:col-span-7 space-y-4">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-slate-200/90 rounded-2xl overflow-hidden transition-all bg-white"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between p-5 sm:p-6 text-left font-extrabold text-base sm:text-lg lg:text-xl text-[#0B1340] hover:text-[#00a2ad] transition-colors cursor-pointer"
                      >
                        <span className="pr-4 leading-snug">{faq.question}</span>
                        <span className="text-xl text-[#00a2ad] font-bold shrink-0">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="p-5 sm:p-6 pt-0 text-slate-600 text-base sm:text-lg leading-relaxed border-t border-slate-100 bg-slate-50/50">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}

                <div className="pt-4 text-right">
                  <Link
                    href="/schedule"
                    className="inline-flex items-center text-base font-bold text-[#FF9000] hover:underline cursor-pointer"
                  >
                    View All FAQs &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* VIBRANT CALL TO ACTION BANNER                                             */}
        {/* ========================================================================= */}
        <section className="bg-[#00a2ad] py-14 text-white text-center">
          <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                Want to scale your business with custom Web & Mobile Apps?
              </h3>
              <p className="text-white/95 text-base sm:text-lg mt-1.5">
                Book a consultation with Autofya's technical architects today.
              </p>
            </div>
            <Link
              href="/schedule"
              className="px-8 py-3.5 rounded-full text-base font-bold bg-[#FF9000] hover:bg-[#E68200] text-white transition-all shadow-lg shrink-0 cursor-pointer"
            >
              Schedule a Call
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
