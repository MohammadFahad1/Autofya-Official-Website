"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CyberSecurityPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const securityBadges = [
    { name: "ISO 27001", logoText: "ISO 27001 CERTIFIED" },
    { name: "SOC-2 TYPE II", logoText: "SOC-2 AUDITED" },
    { name: "PCI-DSS", logoText: "PCI-DSS COMPLIANT" },
    { name: "CISSP / OSCP", logoText: "CERTIFIED EXPERTS" },
    { name: "OWASP TOP 10", logoText: "OWASP AUDITED" },
    { name: "GDPR READY", logoText: "GDPR COMPLIANT" },
  ];

  const offerings = [
    {
      title: "Vulnerability Assessment & Penetration Testing (VAPT)",
      desc: "Identify and exploit security flaws across web apps, mobile solutions, APIs, and network endpoints before malicious attackers do.",
      icon: "🎯",
    },
    {
      title: "Security Operations Center (SOC) & 24/7 SIEM",
      desc: "Round-the-clock security monitoring, threat detection, log analysis, and automated incident triage powered by SIEM telemetry.",
      icon: "🖥️",
    },
    {
      title: "Zero-Trust Architecture & IAM Governance",
      desc: "Implement strict identity verification, role-based access control (RBAC), multi-factor authentication (MFA), and least-privilege network policies.",
      icon: "🔑",
    },
    {
      title: "Cloud Security Posture Management (CSPM)",
      desc: "Continuous security audits across AWS, Azure, and GCP environments to detect misconfigurations, open buckets, and compliance drift.",
      icon: "☁️",
    },
    {
      title: "Incident Response & Threat Hunting",
      desc: "Rapid containment of active security breaches, forensic root-cause analysis, malware isolation, and zero-day threat hunting.",
      icon: "🚨",
    },
    {
      title: "Regulatory Compliance Auditing",
      desc: "Prepare your enterprise for ISO 27001, SOC-2, HIPAA, PCI-DSS Level 1, and GDPR compliance certifications with full audit readiness.",
      icon: "📜",
    },
  ];

  const whyMattersPillars = [
    {
      title: "1. Mitigate Financial & Data Risks",
      desc: "Prevent multi-million dollar data breaches, ransomware demands, and intellectual property theft with proactive defensive security.",
      icon: "💰",
    },
    {
      title: "2. Regulatory & Compliance Standards",
      desc: "Meet mandatory central bank, GDPR, and international data privacy compliance requirements to avoid costly regulatory fines.",
      icon: "⚖️",
    },
    {
      title: "3. Business Continuity & Zero Downtime",
      desc: "Protect critical business operations, microservices, and databases against volumetric DDoS attacks and malicious disruptions.",
      icon: "🛡️",
    },
    {
      title: "4. Safeguard Brand Reputation",
      desc: "Maintain customer trust, partner confidence, and brand integrity by demonstrating uncompromised security resilience.",
      icon: "⭐",
    },
  ];

  const coreCapabilities = [
    {
      title: "Application & API Security Audits",
      desc: "Rigorous static (SAST) and dynamic (DAST) code security analysis to eliminate injection flaws, broken auth, and API vulnerabilities.",
      icon: "💻",
    },
    {
      title: "Cloud Infrastructure Hardening",
      desc: "Hardening cloud VPCs, Kubernetes clusters, Docker containers, and database encryption to build resilient defense-in-depth.",
      icon: "🔒",
    },
    {
      title: "Offensive Red Teaming & Ethical Hacking",
      desc: "Simulating real-world cyber attacks against physical and digital defenses to evaluate your security team's detection and response speed.",
      icon: "⚔️",
    },
    {
      title: "Managed Threat Detection & Response (MDR)",
      desc: "Proactive endpoint telemetry monitoring (EDR/XDR) that neutralizes suspicious malware and lateral movement within seconds.",
      icon: "📡",
    },
  ];

  const securityApproach = [
    {
      step: "01",
      title: "Employee Training & Awareness",
      desc: "Educate staff through simulated phishing campaigns, security hygiene workshops, and password policy enforcement.",
      icon: "🎓",
    },
    {
      step: "02",
      title: "Threat Assessment & Code Audit",
      desc: "Perform comprehensive automated and manual code audits, architecture reviews, and threat modeling.",
      icon: "🔍",
    },
    {
      step: "03",
      title: "Vulnerability Penetration Testing",
      desc: "Ethical hackers attempt controlled exploits across external networks, mobile apps, and internal endpoints.",
      icon: "⚡",
    },
    {
      step: "04",
      title: "Incident Mitigation & Hardening",
      desc: "Patch identified security flaws, reconfigure IAM access, and implement Zero-Trust network policies.",
      icon: "🛠️",
    },
    {
      step: "05",
      title: "Continuous Monitoring & Support",
      desc: "24/7 SOC SIEM monitoring, threat intelligence feeds, and automated patch management for ongoing resilience.",
      icon: "📊",
    },
  ];

  const whyPartner = [
    {
      title: "Certified Security Architects",
      desc: "Our security team holds top industry credentials including CISSP, CEH, OSCP, CISM, and AWS Certified Security Specialists.",
    },
    {
      title: "24/7 Active SOC Telemetry",
      desc: "Round-the-clock security operations monitoring with sub-5-minute mean time to detect (MTTD) and neutralize threats.",
    },
    {
      title: "Customized Threat Modeling",
      desc: "Security strategies tailored specifically to your tech stack, industry compliance demands, and risk appetite.",
    },
    {
      title: "Proven Enterprise Track Record",
      desc: "Zero security breaches recorded across 250+ enterprise client security assessments and managed deployments.",
    },
  ];

  const outcomes = [
    { val: "100%", label: "Threat Detection Rate", desc: "Comprehensive SOC monitoring capturing 100% of malicious network anomalies." },
    { val: "0", label: "Security Breaches", desc: "Zero successful external penetration breaches across our managed client systems." },
    { val: "< 5 Min", label: "Incident Response Time", desc: "Rapid Automated containment and SRE response upon threat detection." },
    { val: "100%", label: "ISO 27001 Audit Readiness", desc: "Guaranteed compliance documentation and audit readiness for certification." },
    { val: "24/7", label: "Active SOC Telemetry", desc: "Continuous SIEM log analysis, EDR endpoint monitoring, and threat hunting." },
    { val: "99.99%", label: "System Uptime & Resilience", desc: "DDoS mitigation and web application firewalls (WAF) ensuring high availability." },
  ];

  const faqs = [
    {
      q: "What is the difference between Vulnerability Assessment and Penetration Testing (VAPT)?",
      a: "A Vulnerability Assessment uses automated tools to scan your systems for known security flaws. Penetration Testing goes further by employing certified ethical hackers to actively attempt controlled exploits of those vulnerabilities, proving real-world risk and providing detailed remediation guidance.",
    },
    {
      q: "How often should our enterprise perform penetration testing?",
      a: "Industry standards (such as PCI-DSS and ISO 27001) recommend conducting penetration testing at least once a year, as well as whenever major code updates, architecture changes, or new network integrations are deployed.",
    },
    {
      q: "How does Autofya help prepare our organization for ISO 27001 or SOC-2 certification?",
      a: "Autofya conducts gap analyses, implements required technical security controls, drafts mandatory ISMS documentation, configures IAM role policies, and conducts mock audits to ensure your organization passes official certification on the first attempt.",
    },
    {
      q: "Can you monitor our cloud infrastructure 24/7?",
      a: "Yes. Our 24/7 Security Operations Center (SOC) integrates directly with AWS, Azure, GCP, and on-premise SIEM log streams to deliver round-the-clock threat detection, automated incident containment, and instant emergency alerting.",
    },
    {
      q: "What happens if a security incident occurs?",
      a: "Our Incident Response Team activates immediately upon an alert, containing affected endpoints, isolating compromised credentials, analyzing malware signatures, performing forensic root-cause analysis, and restoring secure operations under strict SLAs.",
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
                  ENTERPRISE CYBERSECURITY & COMPLIANCE
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Cyber Security Services
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Safeguard your digital assets, ensure regulatory compliance, and mitigate cyber threats with Autofya&apos;s end-to-end security audits, 24/7 SOC telemetry, penetration testing, and zero-trust architecture.
              </p>

              {/* Stats badges */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-[#111A4E] rounded-xl border border-slate-700/60 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#00a2ad]">CISSP / OSCP</div>
                  <div className="text-xs text-slate-300 mt-0.5">Certified Team</div>
                </div>
                <div className="p-3 bg-[#111A4E] rounded-xl border border-slate-700/60 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">ISO 27001</div>
                  <div className="text-xs text-slate-300 mt-0.5">Audited Standard</div>
                </div>
                <div className="p-3 bg-[#111A4E] rounded-xl border border-slate-700/60 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#00a2ad]">24/7 SOC</div>
                  <div className="text-xs text-slate-300 mt-0.5">SIEM Telemetry</div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#contact"
                  className="px-7 py-3.5 bg-[#00a2ad] hover:bg-[#008a94] text-white font-bold text-base rounded-xl transition-all duration-200 shadow-md inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Schedule a Security Audit</span>
                  <span>→</span>
                </a>
                <a
                  href="#offerings"
                  className="px-7 py-3.5 bg-[#111A4E] hover:bg-[#182366] text-slate-200 border border-slate-700 font-semibold text-base rounded-xl transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Offerings</span>
                </a>
              </div>
            </div>

            {/* Right Hero Visual (SOC Threat Radar Dashboard Mockup) */}
            <div className="lg:col-span-6 relative">
              <div className="bg-[#111A4E] border border-slate-700/80 rounded-2xl p-5 shadow-2xl space-y-4">
                
                {/* Header Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-700/80">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                    <span className="ml-2 text-xs font-mono text-slate-400">autofya-soc-shield-v8.4</span>
                  </div>
                  <span className="px-2.5 py-0.5 bg-[#00a2ad]/20 text-[#00a2ad] text-xs font-semibold rounded">
                    ACTIVE SOC SHIELD
                  </span>
                </div>

                {/* Dashboard Container inside Mockup */}
                <div className="grid grid-cols-12 gap-4">
                  {/* Left Column: Threat Radar */}
                  <div className="col-span-7 bg-[#0B1340] p-4 rounded-xl border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-300">Live SIEM Event Log</span>
                      <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded">
                        0 Active Breaches
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 bg-[#111A4E] rounded border border-slate-700 flex justify-between items-center">
                        <div>
                          <div className="font-bold text-white text-[11px]">DDoS Attack Intercepted</div>
                          <div className="text-[10px] text-slate-400">WAF Blocked 4.2 Gbps Vector</div>
                        </div>
                        <span className="text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded text-[10px]">
                          Blocked (0.01s)
                        </span>
                      </div>

                      <div className="p-2.5 bg-[#111A4E] rounded border border-slate-700 flex justify-between items-center">
                        <div>
                          <div className="font-bold text-white text-[11px]">API Key Rotation Scan</div>
                          <div className="text-[10px] text-slate-400">Zero Trust Access Check</div>
                        </div>
                        <span className="text-[#00a2ad] font-bold text-[10px]">
                          ✓ Verified
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Vulnerability Index */}
                  <div className="col-span-5 bg-[#060C2C] p-3 rounded-xl border border-slate-800 space-y-3">
                    <div className="text-center pb-2 border-b border-slate-800">
                      <div className="text-xs font-bold text-white">Security Rating</div>
                      <div className="text-2xl font-black text-[#00a2ad]">99 / 100</div>
                    </div>

                    <div className="space-y-2 text-[10px]">
                      <div className="p-2 bg-[#111A4E] rounded border border-slate-700 space-y-1">
                        <div className="text-slate-400 uppercase font-bold">VAPT Status</div>
                        <div className="text-emerald-400 font-bold">✓ Clean Patch Record</div>
                      </div>

                      <div className="p-2 bg-[#111A4E] rounded border border-slate-700 space-y-1">
                        <div className="text-slate-400 uppercase font-bold">ISO 27001 Controls</div>
                        <div className="text-white font-bold">114/114 Verified</div>
                      </div>

                      <div className="p-2 bg-[#00a2ad]/20 border border-[#00a2ad]/40 rounded text-center">
                        <div className="font-bold text-[#00a2ad]">Zero-Trust Active</div>
                        <div className="text-slate-300 text-[9px]">MTTD: &lt; 2 mins</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- 2. OUR OFFERINGS ----------------- */}
      <section id="offerings" className="py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
              DEFENSIVE & OFFENSIVE SECURITY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
              Our Offerings
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We offer end-to-end cybersecurity services tailored to protect web applications, cloud infrastructure, network backbones, and corporate data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerings.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200 hover:border-[#00a2ad] hover:shadow-xl transition-all duration-300 space-y-4 group"
              >
                <div className="w-14 h-14 bg-[#0B1340] rounded-xl flex items-center justify-center text-2xl mb-4 text-[#00a2ad]">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0B1340] group-hover:text-[#00a2ad] transition-colors">
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

      {/* ----------------- 3. WHY CYBER SECURITY MATTERS ----------------- */}
      <section className="py-20 bg-[#0B1340] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
              BUSINESS IMPERATIVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Why Cyber Security Matters
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              As cyber threats grow in complexity, proactive cybersecurity is no longer optional—it is a critical pillar of enterprise survival.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyMattersPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-[#111A4E] p-8 rounded-2xl border border-slate-700/80 space-y-3 hover:border-[#00a2ad] transition-all flex items-start gap-5"
              >
                <div className="text-4xl shrink-0 mt-1">{pillar.icon}</div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">{pillar.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 4. CORE CAPABILITIES ----------------- */}
      <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
              TECHNICAL EXCELLENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
              Core Capabilities
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Deep technical capabilities combining offensive ethical hacking with defensive cloud hardening.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreCapabilities.map((cap, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200 hover:border-[#00a2ad] transition-all space-y-3 text-center"
              >
                <div className="w-12 h-12 bg-[#0B1340] rounded-xl flex items-center justify-center text-2xl text-[#00a2ad] mx-auto">
                  {cap.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0B1340]">{cap.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 5. OUR SECURITY APPROACH ----------------- */}
      <section className="py-20 bg-[#060C2C] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
              5-STEP FRAMEWORK
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Our Security Approach
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              A structured, multi-phased methodology designed to assess, audit, remediate, and continuously protect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {securityApproach.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#111A4E] p-6 rounded-2xl border border-slate-700/80 flex flex-col justify-between space-y-4 hover:border-[#00a2ad] transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-lg bg-[#0B1340] text-[#00a2ad] font-bold text-sm flex items-center justify-center">
                      {step.step}
                    </span>
                    <span className="text-2xl">{step.icon}</span>
                  </div>
                  <h3 className="text-base font-bold text-white leading-snug">{step.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 6. WHY PARTNER WITH AUTOFYA ----------------- */}
      <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
              THE AUTOFYA DIFFERENCE
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
              Why Partner with Autofya
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Unmatched technical rigor, accredited security professionals, and rapid incident response guarantees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyPartner.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0B1340] p-8 rounded-2xl text-white space-y-4 border border-slate-800 shadow-lg"
              >
                <div className="w-8 h-8 rounded-lg bg-[#00a2ad] text-white font-bold text-sm flex items-center justify-center">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 7. COMPLIANCE & PROOF BAR ----------------- */}
      <section className="py-12 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">
            INTERNATIONAL SECURITY STANDARDS & COMPLIANCE FRAMEWORKS
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {securityBadges.map((badge, idx) => (
              <div
                key={idx}
                className="h-14 bg-white rounded-xl border border-slate-200 flex items-center justify-center p-3 shadow-sm hover:border-[#00a2ad] transition-colors"
              >
                <span className="text-xs font-black text-[#0B1340] tracking-wider text-center">
                  {badge.logoText}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 8. MEASURABLE OUTCOMES ----------------- */}
      <section className="py-20 bg-[#0B1340] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
              VERIFIABLE PROTECTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Measurable Security Outcomes
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Quantifiable metrics reflecting enterprise threat neutralization and audit readiness.
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

      {/* ----------------- 9. FAQ & CONTACT CTA SECTION ----------------- */}
      <section id="contact" className="py-20 bg-[#0B1340]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-3xl font-extrabold text-white">
                Cyber Security FAQ
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
                PROTECT YOUR DIGITAL ASSETS TODAY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Ready to Secure Your Enterprise Infrastructure?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Schedule a confidential consultation with an Autofya CISSP security architect for a comprehensive VAPT vulnerability audit.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! An Autofya cybersecurity architect will contact you shortly.");
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
                <option value="VAPT">Audit Focus: VAPT Penetration Testing</option>
                <option value="SOC">Audit Focus: 24/7 SOC / SIEM</option>
                <option value="ISO">Audit Focus: ISO 27001 / SOC-2 Compliance</option>
                <option value="Cloud">Audit Focus: Cloud Security (CSPM)</option>
              </select>
              <div className="sm:col-span-2 pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#00a2ad] hover:bg-[#008a94] text-white font-extrabold text-base rounded-xl transition-all duration-200 shadow-lg cursor-pointer"
                >
                  Schedule Security Audit Now
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
