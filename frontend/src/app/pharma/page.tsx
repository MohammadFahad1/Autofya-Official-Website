"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useScheduleModal } from "@/components/ScheduleModalContext";

export default function PharmaPage() {
  const { openScheduleModal } = useScheduleModal();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const pharmaSolutions = [
    {
      icon: "⚙️",
      title: "Omnichannel HCP Automation Suite",
      desc: "Empower healthcare commercial operations with an integrated HCP automation suite. Track rep activities, sample distributions, medical inquiries, and campaign analytics seamlessly across digital channels.",
      features: [
        "Automated sales rep territory management & routing",
        "Multi-channel HCP contact history & preferences",
        "E-signature capture for drug sample delivery",
      ],
      tag: "HCP Automation",
    },
    {
      icon: "💬",
      title: "Omnichannel Interaction & Knowledge Sharing",
      desc: "Enable two-way digital communication between medical science liaisons (MSLs), doctors, and pharmacists. Deliver compliant e-detailing content and digital webinars.",
      features: [
        "Interactive HTML5 e-detailing presentation builder",
        "Virtual advisory board & live medical webinar hosting",
        "Instant medical inquiry response dispatch system",
      ],
      tag: "Digital Engagement",
    },
    {
      icon: "📊",
      title: "Pharma ERP Suite",
      desc: "End-to-end ERP customized for pharmaceutical manufacturers and distributors. Manage batch tracking, cold-chain inventory, raw material procurement, and regulatory compliance.",
      features: [
        "Batch manufacturing records (BMR) automation",
        "GS1 barcode tracking & anti-counterfeiting verification",
        "Cold-chain temperature log monitoring & alerts",
      ],
      tag: "Operations & Supply",
    },
    {
      icon: "🛡️",
      title: "Pharmacovigilance & Safety Monitoring",
      desc: "AI-powered adverse event reporting and signal management system. Automatically parse clinical feedback, process ICSR reports, and ensure FDA 21 CFR Part 11 adherence.",
      features: [
        "AI automated adverse event literature screening",
        "E2B(R3) compliant safety reporting XML output",
        "Audit-ready signal evaluation & risk management workflows",
      ],
      tag: "Drug Safety",
    },
    {
      icon: "🎓",
      title: "LMS for Pharma",
      desc: "Specialized Learning Management System designed for pharma sales forces, medical reps, and compliance training. Track mandatory GxP and regulatory certifications.",
      features: [
        "Pre-built GxP, HIPAA, & FDA compliance course modules",
        "Interactive product knowledge assessment quizzes",
        "Automated re-certification reminders & audit trails",
      ],
      tag: "Training & Compliance",
    },
    {
      icon: "⚕️",
      title: "Doctor Engagement Platforms",
      desc: "Dedicated self-service portal for doctors to request sample drugs, access latest clinical trial data, attend medical symposia, and earn continuing medical education credits.",
      features: [
        "Digital sample request & fast doorstep dispatch",
        "On-demand access to medical research whitepapers",
        "Integrated CME point tracking & certificate issuance",
      ],
      tag: "Doctor Portal",
    },
  ];

  const faqs = [
    {
      q: "What types of software solutions do you build for pharmaceutical companies?",
      a: "Autofya builds end-to-end pharmaceutical software including Omnichannel HCP CRM suites, Pharmacovigilance & Adverse Event tracking software, Pharma ERP & Supply Chain management, Pharma LMS for sales rep compliance, Doctor Engagement Portals, and AI-assisted clinical trial management systems.",
    },
    {
      q: "How does your LMS help with regulatory compliance for pharma sales reps?",
      a: "Our Pharma LMS includes automated GxP, HIPAA, and FDA compliance tracking. It enforces mandatory training modules, logs tamper-proof digital signatures upon completion, generates automated compliance audit reports, and sends automated renewal alerts.",
    },
    {
      q: "Can you integrate our existing ERP/CRM with your HCP engagement platforms?",
      a: "Yes. Autofya provides robust REST and GraphQL API middleware connecting our HCP engagement portals with legacy ERPs (such as SAP, Oracle, Microsoft Dynamics) and CRMs (Veeva, Salesforce Health Cloud).",
    },
    {
      q: "Are your pharmaceutical solutions HIPAA and FDA 21 CFR Part 11 compliant?",
      a: "Absolutely. All Autofya pharma applications adhere strictly to HIPAA data privacy regulations, 256-bit AES data encryption, role-based access control (RBAC), and FDA 21 CFR Part 11 digital signature and audit trail standards.",
    },
    {
      q: "What is the average timeline to deploy a pharma software project?",
      a: "Turnkey platforms (such as our Pharma LMS or Doctor Portal) can be configured and launched in 4 to 6 weeks. Custom enterprise ERP or Pharmacovigilance platforms typically range from 8 to 14 weeks depending on scope.",
    },
    {
      q: "Do you provide ongoing technical support and maintenance for pharma clients?",
      a: "Yes, we offer 24/7 technical support, dedicated account managers, SLA-backed uptime monitoring (99.99%), regular security patch updates, and continuous regulatory compliance maintenance.",
    },
    {
      q: "How does AI assist in adverse event detection and pharmacovigilance?",
      a: "Our AI natural language processing (NLP) models scan clinical trial notes, doctor feedback, and medical literature to flag potential adverse drug reactions, automatically populating ICSR safety forms for rapid review.",
    },
  ];

  const hcpAvatars = [
    { name: "Dr. Sarah Jenkins", role: "Cardiologist", img: "/about_team_collaboration.jpg" },
    { name: "Dr. Michael Chen", role: "Oncologist", img: "/ai_development_collaboration.jpg" },
    { name: "Dr. Elena Rostova", role: "Pharmacologist", img: "/capabilities_staff_aug.jpg" },
    { name: "Dr. James Wilson", role: "Neurologist", img: "/capabilities_mvp_dev.jpg" },
    { name: "Dr. Anita Patel", role: "Clinical Researcher", img: "/hero_ai_engineer.jpg" },
    { name: "Dr. Robert Taylor", role: "Medical Director", img: "/hero_developer.jpg" },
    { name: "Dr. David Kim", role: "Pediatrician", img: "/mobile_agile_dev.jpg" },
    { name: "Dr. Maria Santos", role: "Endocrinologist", img: "/team_wireframing.jpg" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* TOP ANNOUNCEMENT BANNER */}
      <div className="bg-[#00a2ad] text-white py-2.5 px-4 text-center text-xs sm:text-sm font-medium flex items-center justify-center gap-3 shadow-sm">
        <span>⚡ Talk to our experts about your pharma requirements</span>
        <button
          onClick={() => openScheduleModal("Healthcare & LMS Solutions")}
          className="bg-amber-400 hover:bg-amber-300 text-slate-950 px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer"
        >
          Contact Us
        </button>
      </div>

      {/* NAVBAR */}
      <Navbar />

      {/* HERO SECTION - NO GRADIENTS */}
      <section className="bg-white text-slate-900 pt-16 pb-20 lg:pt-20 lg:pb-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0B1340] leading-tight">
              Pharma Solutions, Integration and <br />
              Products on comfort level
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto">
              Accelerating pharmaceutical innovation with custom software, LMS, ERP, and AI-driven compliance solutions tailored for global healthcare organizations.
            </p>
          </div>

          {/* Central Interconnected HCP Network Grid Visual */}
          <div className="mt-14 max-w-4xl mx-auto p-8 bg-slate-50 border border-slate-200 rounded-3xl space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
              {hcpAvatars.map((hcp, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center text-center space-y-2 hover:border-[#00a2ad] transition-all"
                >
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#00a2ad]">
                    <Image
                      src={hcp.img}
                      alt={hcp.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#0B1340]">{hcp.name}</h4>
                    <p className="text-[11px] text-[#00a2ad] font-semibold">{hcp.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-200 text-center">
              <p className="text-xs sm:text-sm font-bold text-slate-700">
                Interconnected healthcare professional ecosystem powered by Autofya Pharma Suite.
              </p>
            </div>
          </div>

          <div className="mt-10 max-w-3xl mx-auto text-center space-y-4">
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Our digital solutions are tailored to empower pharmaceutical companies to streamline clinical workflows, automate HCP engagement, and ensure strict HIPAA and FDA 21 CFR Part 11 regulatory compliance.
            </p>
            <div className="pt-2">
              <button
                onClick={() => openScheduleModal("Healthcare & LMS Solutions")}
                className="bg-[#00a2ad] hover:bg-[#008993] text-white font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-md cursor-pointer"
              >
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OVERVIEW - PHARMA SOLUTIONS */}
      <section id="solutions" className="py-20 lg:py-28 bg-slate-50 text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00a2ad] font-bold text-xs uppercase tracking-widest block mb-2">
              OVERVIEW
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
              Pharma Solutions
            </h2>
          </div>

          {/* 6 Solid Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pharmaSolutions.map((sol, idx) => (
              <div
                key={idx}
                className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 text-2xl flex items-center justify-center text-[#00a2ad] border border-slate-200">
                    {sol.icon}
                  </div>
                  <span className="text-xs font-bold text-[#00a2ad] bg-cyan-50 px-3 py-1 rounded-full border border-cyan-100">
                    {sol.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#0B1340]">
                  {sol.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {sol.desc}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {sol.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <span className="text-[#00a2ad]">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: CUSTOMER SUCCESS STORIES */}
      <section className="py-20 lg:py-28 bg-white text-slate-900 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340] tracking-tight">
              Our Customer Success Stories
            </h2>
          </div>

          <div className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Left Image Side */}
            <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-[400px] bg-slate-200 p-6 flex items-center justify-center">
              <div className="relative w-full h-full max-h-[360px] rounded-2xl overflow-hidden border border-slate-300">
                <Image
                  src="/capabilities_digital_trans.jpg"
                  alt="Diabetic Retinopathy Screening Case Study"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right Case Study Content */}
            <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-[#00a2ad] text-xs font-bold uppercase tracking-wider mb-4">
                  <span>HEALTHCARE PROFESSIONAL</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1340]">
                  Diabetic Retinopathy
                </h3>

                <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                  Autofya developed an AI-assisted diagnostic platform helping ophthalmologists and pharma researchers detect diabetic retinopathy early, streamlining patient triage and accelerating clinical trial screening protocols.
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-6 py-4 border-y border-slate-200">
                <div>
                  <div className="text-3xl font-black text-[#00a2ad]">100%</div>
                  <div className="text-xs text-slate-500 font-bold uppercase mt-1">Clinical Data Accuracy</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-[#0B1340]">99%</div>
                  <div className="text-xs text-slate-500 font-bold uppercase mt-1">Automated Screening</div>
                </div>
              </div>

              <div>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center text-sm font-bold text-[#00a2ad] hover:text-[#008993] transition-colors group cursor-pointer"
                >
                  <span>Read Full Story</span>
                  <span className="ml-1.5 transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 lg:py-28 bg-slate-50 text-slate-900 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Box */}
            <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-[#0B1340]">
                Ready to transform your pharma solutions with Autofya?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Have questions? Speak with our pharmaceutical domain experts to explore tailored software solutions for your organization.
              </p>
              <button
                onClick={() => openScheduleModal("Healthcare & LMS Solutions")}
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-sm cursor-pointer"
              >
                Schedule a Call
              </button>

              <div className="pt-6 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                <div className="font-bold text-slate-800">Contact Us</div>
                <div>Email: info@autofya.com</div>
                <div>Global Helpline: +1 (800) 555-AUTOFYA</div>
              </div>
            </div>

            {/* Right Accordion */}
            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-all"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-5 text-left font-bold text-[#0B1340] flex items-center justify-between gap-4 cursor-pointer text-sm sm:text-base hover:text-[#00a2ad] transition-colors"
                    >
                      <span>{faq.q}</span>
                      <span className="text-slate-400 text-lg font-normal">{isOpen ? "−" : "+"}</span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 font-normal">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>



      {/* SECTION 6: READY TO SCALE YOUR TEAM CTA (SOLID DARK BLUE) */}
      <section className="py-16 bg-[#070E28] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Scale Your Team?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Get in touch with our domain experts to discuss your pharmaceutical software requirements today.
          </p>
          <button
            onClick={() => openScheduleModal("Healthcare & LMS Solutions")}
            className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold px-8 py-3.5 rounded-xl text-sm transition-all shadow-md cursor-pointer"
          >
            Schedule a Call
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
