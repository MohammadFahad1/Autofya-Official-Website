"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SharePointServicesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const offeredServices = [
    {
      title: "Intranet Portal Development",
      desc: "Modern, responsive corporate intranet portals built on SharePoint Online for seamless internal communication, news publishing, and employee engagement.",
    },
    {
      title: "SharePoint Application Development",
      desc: "Custom SharePoint Framework (SPFx) web parts, React-based extensions, application pages, and tailored intranet tools.",
    },
    {
      title: "Systems Integration & Migration",
      desc: "Zero-downtime migration from legacy SharePoint (2013/2016/2019) or third-party ECMs to SharePoint Online & Microsoft 365.",
    },
    {
      title: "Workflow & Collaboration Automation",
      desc: "Streamlining business approval workflows, document routing, e-signatures, and cross-departmental collaboration.",
    },
    {
      title: "Document Management & Governance",
      desc: "Enterprise taxonomy, metadata tagging, version control, automated archiving, retention policies, and permission structures.",
    },
    {
      title: "Customization & Branding",
      desc: "Bespoke intranet UI/UX themes matching your corporate brand guidelines, custom navigation mega-menus, and mobile layout tuning.",
    },
    {
      title: "Power Automate & Power Apps Integration",
      desc: "Building low-code custom business applications, mobile forms, and automated cloud workflows directly tied to SharePoint lists.",
    },
    {
      title: "Performance Tuning & Security",
      desc: "SharePoint environment speed optimization, permission audit, Data Loss Prevention (DLP) configuration, and security compliance.",
    },
    {
      title: "Upgrades & Cloud Migration",
      desc: "Risk-free content transfer, 301 URL mapping, user profile synchronization, and Microsoft 365 cloud environment setup.",
    },
    {
      title: "SharePoint BI & Reporting Dashboards",
      desc: "Integrating Power BI with SharePoint data sources for real-time executive dashboards, analytics, and departmental KPIs.",
    },
  ];

  const industriesList = [
    { name: "BANK & FIN TECH INDUSTRIES", desc: "Secure document vaults, compliance audit trails, and automated loan approval workflows." },
    { name: "TELECOMMUNICATION INDUSTRIES", desc: "Enterprise knowledge hubs, vendor portals, and high-concurrency document governance." },
    { name: "SERVICE INDUSTRIES", desc: "Client collaboration portals, project management dashboards, and automated invoicing." },
    { name: "RETAIL INDUSTRIES", desc: "Store operations intranet, product catalog management, and supplier communication hubs." },
    { name: "PHARMACEUTICAL INDUSTRIES", desc: "SOP document management, FDA/GMP compliance auditing, and research collaboration portals." },
    { name: "HEALTHCARE & LIFE SCIENCES", desc: "HIPAA-compliant document sharing, medical staff portals, and policy repositories." },
    { name: "MANUFACTURING & LOGISTICS", desc: "Supply chain documentation, inventory tracking lists, and ISO compliance workflows." },
    { name: "EDUCATION & GOVERNMENT", desc: "Faculty intranet portals, grant application processing, and secure citizen document archives." },
  ];

  const clientLogos = [
    { name: "Robi", label: "Robi Axiata" },
    { name: "UCB", label: "United Commercial Bank" },
    { name: "City Bank", label: "The City Bank Ltd" },
    { name: "Marks & Spencer", label: "M&S Retail" },
    { name: "HSBC", label: "HSBC Bank" },
    { name: "Grameenphone", label: "Grameenphone" },
  ];

  const faqs = [
    {
      question: "Why choose SharePoint for enterprise collaboration and intranet?",
      answer:
        "Microsoft SharePoint is the global gold standard for enterprise intranet portals and document management. It seamlessly integrates with Microsoft 365, Teams, and Power Platform to provide enterprise-grade security, granular permissions, automated workflows, and centralized knowledge sharing.",
    },
    {
      question: "What SharePoint development services does Autofya offer?",
      answer:
        "Autofya delivers end-to-end SharePoint services, including custom SharePoint Framework (SPFx) web part development, intranet UI/UX branding, migration from legacy on-premise SharePoint to SharePoint Online, Power Automate/Power Apps integrations, and 24/7 SLA maintenance.",
    },
    {
      question: "Can Autofya help migrate our documents and legacy intranet to SharePoint Online?",
      answer:
        "Yes! We specialize in zero-downtime content migrations from legacy SharePoint versions (2013, 2016, 2019) or file servers/Lotus Notes/OpenText to SharePoint Online. We ensure full metadata preservation, URL mapping, and security permission structures.",
    },
    {
      question: "How does Power Automate and Power Apps enhance SharePoint?",
      answer:
        "Power Apps enables building custom mobile and desktop forms tied directly to SharePoint lists, while Power Automate automates multi-level approval workflows, email notifications, document generation, and external system syncs without expensive custom code.",
    },
    {
      question: "What support and SLA packages do you provide for SharePoint environments?",
      answer:
        "Autofya provides 24/7 SLA support, user access governance audits, performance tuning, dispatcher caching optimization, Microsoft 365 license management, and continuous feature enhancements.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B1340] selection:bg-[#00a2ad] selection:text-white font-sans">
      {/* Header */}
      <Navbar />

      <main className="flex-1">
        {/* ========================================================= */}
        {/* 1. HERO SECTION (BLUE CORPORATE COLLABORATION THEME)       */}
        {/* ========================================================= */}
        <section className="relative bg-[#071D49] text-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
          {/* Hero Background Visual */}
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="/hero_cloud_devops.jpg"
              alt="SharePoint Enterprise Background"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#071D49] via-[#071D49]/90 to-[#0A2E6E]/80 z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Content Box (Matching Screenshot Card Overlay) */}
              <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <span className="w-5 h-5 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center font-bold text-xs">
                    S
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 uppercase tracking-wider">
                    Microsoft Certified Gold Partner
                  </span>
                </div>

                <div className="bg-white/95 text-[#0B1340] p-8 sm:p-10 rounded-2xl shadow-2xl border border-slate-200 space-y-6">
                  <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0B1340]">
                    SharePoint
                  </h1>

                  <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
                    Empowering businesses with modern intranet portals, document management, and seamless enterprise collaboration. By Autofya engineers.
                  </p>

                  <div className="pt-2">
                    <Link
                      href="/schedule"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FF9000] hover:bg-[#E68200] text-white font-bold text-base shadow-lg shadow-amber-900/30 transition-all hover:scale-[1.02] cursor-pointer"
                    >
                      <span>Talk to us</span>
                      <span className="text-xl">→</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Hero Graphic */}
              <div className="lg:col-span-6 relative flex justify-center">
                <div className="relative w-full max-w-md lg:max-w-none">
                  <div className="relative rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 p-4 shadow-2xl overflow-hidden">
                    <div className="relative h-[320px] sm:h-[380px] rounded-xl overflow-hidden shadow-inner">
                      <Image
                        src="/hero_developer.jpg"
                        alt="Autofya SharePoint Intranet Dashboard"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071D49] via-transparent to-transparent opacity-80" />
                      
                      <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-xl text-white">
                        <p className="text-xs text-cyan-300 font-bold uppercase tracking-wider">
                          SharePoint Online &amp; Office 365
                        </p>
                        <p className="text-sm font-semibold text-white">
                          Custom SPFx Web Parts &amp; Automated Workflows
                        </p>
                      </div>
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
                S
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-slate-700 text-base leading-relaxed max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-xl font-bold text-[#0B1340] border-b border-slate-100 pb-3">
                  Enterprise Collaboration Hub
                </h3>
                <p>
                  SharePoint has transformed business collaboration by serving as a secure hub for document management, team workflows, intranet portals, and enterprise knowledge sharing across Microsoft 365 environments.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-xl font-bold text-[#0B1340] border-b border-slate-100 pb-3">
                  Autofya Microsoft Practice
                </h3>
                <p>
                  At Autofya, our team of certified Microsoft SharePoint consultants and engineers deliver tailored SharePoint Online, Office 365, and hybrid deployment solutions—enabling your workforce to communicate, share, and collaborate efficiently.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. OFFERED SERVICES SECTION (MATCHING SCREENSHOT LAYOUT)   */}
        {/* ========================================================= */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Column: Heading */}
              <div className="lg:col-span-5 space-y-4 sticky top-28">
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                  Capabilities
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1340]">
                  Offered <br />
                  <span className="text-[#00a2ad]">Services</span>
                </h2>
                <div className="w-16 h-1 bg-[#00a2ad] rounded-full" />
                <p className="text-slate-600 text-base leading-relaxed">
                  End-to-end SharePoint consulting, intranet engineering, and Microsoft 365 integration services designed for modern enterprises.
                </p>
                <div className="pt-4">
                  <Link
                    href="/schedule"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B1340] hover:bg-[#15205b] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                  >
                    <span>Talk to SharePoint Architect</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Offered Services List with Arrow Bullets */}
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
        {/* 4. INDUSTRIES SECTION (CHECKLIST + TEAM IMAGE RIGHT)       */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Heading & Checklist */}
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                    Industry Expertise
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
                      className="p-4 rounded-xl bg-white border border-slate-200/80 hover:shadow-md transition-all space-y-1"
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

              {/* Right Column: Feature Image */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-slate-200 group">
                  <Image
                    src="/team_wireframing.jpg"
                    alt="Autofya SharePoint Team Collaboration"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071D49]/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl text-[#0B1340]">
                    <p className="text-xs font-bold text-[#00a2ad] uppercase tracking-wider">
                      Enterprise Compliance &amp; Security
                    </p>
                    <p className="text-sm font-semibold">
                      Custom SharePoint Solutions for Regulated Verticals
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. WHO WE'VE WORKED WITH (CLIENT LOGO SLIDER BAR)          */}
        {/* ========================================================= */}
        <section className="py-20 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                Enterprise Clients
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
                Who we&apos;ve worked with
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center opacity-85 hover:opacity-100 transition-opacity">
              {clientLogos.map((client, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#00a2ad] transition-all text-center group cursor-default"
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
        {/* 6. WOULD YOU LIKE TO START A PROJECT WITH US? CALLOUT      */}
        {/* ========================================================= */}
        <section className="py-14 bg-gradient-to-r from-[#00a2ad] via-teal-700 to-[#0B1340] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Would you like to start a project with us?
              </h3>
              <p className="text-cyan-100 text-sm">
                Get in touch with Autofya&apos;s SharePoint architects to discuss your custom intranet or migration goals.
              </p>
            </div>

            <Link
              href="/schedule"
              className="px-8 py-4 rounded-full bg-[#FF9000] hover:bg-[#E68200] text-white font-bold text-sm shadow-xl transition-all whitespace-nowrap cursor-pointer hover:scale-105"
            >
              Talk to us →
            </Link>
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
