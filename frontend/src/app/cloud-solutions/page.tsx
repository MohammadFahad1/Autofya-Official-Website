"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CloudSolutionsPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const cloudPartners = [
    { name: "Amazon Web Services", logoText: "AWS ADVANCED PARTNER" },
    { name: "Microsoft Azure", logoText: "AZURE GOLD PARTNER" },
    { name: "Google Cloud", logoText: "GCP PREMIER PARTNER" },
    { name: "HashiCorp", logoText: "HASHICORP TERRAFORM" },
    { name: "Kubernetes", logoText: "KUBERNETES EKS/AKS" },
    { name: "Docker", logoText: "DOCKER ENTERPRISE" },
  ];

  const industryVerticals = [
    { name: "Fintech", icon: "💳", desc: "High-security PCI-DSS compliant cloud infrastructure." },
    { name: "Telco", icon: "📡", desc: "Ultra-low latency edge computing and microservices." },
    { name: "Manufacturing", icon: "🏭", desc: "IoT data pipelines and cloud telemetry hubs." },
    { name: "Media", icon: "🎬", desc: "High-throughput video streaming and CDN orchestration." },
    { name: "HealthCare", icon: "🏥", desc: "HIPAA-compliant encrypted cloud data vaults." },
    { name: "Retail", icon: "🛒", desc: "Auto-scaling infrastructure for peak e-commerce sales." },
  ];

  const offeredServices = [
    {
      title: "Cloud Migration & Modernization",
      desc: "Rehost, refactor, or rearchitect workloads to the cloud using industry-standard 6Rs methodology with zero downtime.",
      icon: "🚀",
    },
    {
      title: "AWS, Azure & GCP Architecture",
      desc: "Multi-cloud and hybrid infrastructure design optimized for high availability, fault tolerance, and security compliance.",
      icon: "☁️",
    },
    {
      title: "DevOps & Automated CI/CD Pipelines",
      desc: "Streamline software delivery with automated build, test, and zero-downtime deployment pipelines (GitLab, GitHub Actions, Jenkins).",
      icon: "🔄",
    },
    {
      title: "Kubernetes (EKS / AKS / GKE) Orchestration",
      desc: "Production-grade container management, service mesh setup (Istio), auto-scaling, and microservice cluster health monitoring.",
      icon: "📦",
    },
    {
      title: "Infrastructure as Code (IaC)",
      desc: "Automate multi-cloud environment provisioning using Terraform, CloudFormation, and Pulumi for reproducible deployments.",
      icon: "🛠️",
    },
    {
      title: "FinOps & Cloud Cost Optimization",
      desc: "Audit cloud bills, identify idle resources, optimize reserved instances, and cut monthly cloud spend by 30% to 50%.",
      icon: "💰",
    },
    {
      title: "Serverless & Microservices Architecture",
      desc: "Deconstruct monolithic codebases into event-driven AWS Lambda, Azure Functions, and microservices for maximum agility.",
      icon: "⚡",
    },
    {
      title: "Cloud Security, IAM & Compliance",
      desc: "Implement Zero-Trust architecture, identity management (IAM), automated vulnerability scanning, and SOC-2 / HIPAA compliance.",
      icon: "🛡️",
    },
    {
      title: "Disaster Recovery & Multi-Region Backup",
      desc: "Build automated failover mechanisms, multi-region database replication, and near-zero RPO/RTO disaster recovery blueprints.",
      icon: "💾",
    },
    {
      title: "24/7 Managed Cloud & SRE Support",
      desc: "Dedicated Site Reliability Engineers (SRE) managing cloud health, incident response, and SLA maintenance 24 hours a day.",
      icon: "🎧",
    },
    {
      title: "Observability & APM Telemetry",
      desc: "Full-stack monitoring dashboards using Prometheus, Grafana, Datadog, and New Relic for sub-second anomaly detection.",
      icon: "📊",
    },
    {
      title: "Hybrid & Multi-Cloud Connectivity",
      desc: "Establish secure VPN, DirectConnect, and ExpressRoute links connecting on-premise data centers to public cloud environments.",
      icon: "🌐",
    },
  ];

  const caseStudies = [
    {
      title: "Modernizing TCO Microservices With Amazon EKS",
      category: "Container Modernization",
      desc: "Rearchitected a monolithic platform into Kubernetes microservices on AWS EKS, reducing cloud operational costs by 40% and increasing deployment frequency by 5X.",
      metrics: ["40% Cost Savings", "5X Deployment Speed", "99.99% Uptime"],
    },
    {
      title: "Enabling DevOps For E-Commerce On AWS",
      category: "E-Commerce Auto-Scaling",
      desc: "Engineered automated CI/CD pipelines and dynamic auto-scaling clusters for a major retail platform, seamlessly handling 10X traffic spikes during flash sales.",
      metrics: ["10X Traffic Capacity", "Zero Downtime", "Sub-second Load"],
    },
    {
      title: "Maximizing Value: Cost Optimization Strategies",
      category: "FinOps Audit",
      desc: "Conducted a comprehensive FinOps audit across 200+ cloud instances, implementing automated right-sizing and spot instance policies that saved over $350K annually.",
      metrics: ["$350K Annual Savings", "35% Idle Cut", "Instant ROI"],
    },
  ];

  const lifecycle = [
    {
      step: "01",
      title: "Assess & Strategy",
      desc: "Audit existing infrastructure, evaluate 6Rs cloud readiness, and build TCO business case.",
      icon: "📋",
    },
    {
      step: "02",
      title: "Architecture Blueprint",
      desc: "Design well-architected multi-cloud topology, security guardrails, and network VPCs.",
      icon: "🏗️",
    },
    {
      step: "03",
      title: "IaC & CI/CD Automation",
      desc: "Write modular Terraform code and set up zero-downtime deployment pipelines.",
      icon: "⚙️",
    },
    {
      step: "04",
      title: "Zero-Downtime Migration",
      desc: "Execute database & application migration with automated cutover and rollback safety.",
      icon: "🚚",
    },
    {
      step: "05",
      title: "FinOps & Security Audit",
      desc: "Optimize resource allocation, enable SOC-2 compliance controls, and enforce cost alerts.",
      icon: "🔒",
    },
    {
      step: "06",
      title: "24/7 Managed SRE",
      desc: "Continuous APM telemetry monitoring, incident response, and proactive cloud management.",
      icon: "📈",
    },
  ];

  const outcomes = [
    { val: "50%", label: "Average Cloud Cost Savings", desc: "Through FinOps rightsizing, reserved instances, and automated workload scheduling." },
    { val: "99.99%", label: "System Availability SLA", desc: "High-availability multi-AZ architectures with automated self-healing clusters." },
    { val: "10X", label: "Faster Release Frequency", desc: "Automated CI/CD pipelines cut code deployment times from days to under 10 minutes." },
    { val: "0 Min", label: "Unplanned Migration Downtime", desc: "Seamless database replication and blue-green deployment cutover strategies." },
    { val: "100%", label: "Automated Security Audit", desc: "Continuous vulnerability scanning and IAM policy auditing matching SOC-2 standards." },
    { val: "24/7", label: "Real-Time SRE Monitoring", desc: "Round-the-clock site reliability engineers ensuring mission-critical system health." },
  ];

  const faqs = [
    {
      q: "How does Autofya ensure zero downtime during cloud migration?",
      a: "We utilize blue-green deployment strategies, canary releases, and real-time database CDC (Change Data Capture) replication tools like AWS DMS or Debezium. This ensures that application traffic is switched seamlessly to the cloud with zero interruption to active end-users.",
    },
    {
      q: "Can Autofya help optimize our existing high AWS/Azure monthly bill?",
      a: "Yes! Our FinOps audit service analyzes your cloud infrastructure spend, identifies unattached storage volumes, right-sizes over-provisioned instances, recommends Savings Plans/Reserved Instances, and implements automated spot instance policies to cut cloud costs by 30% to 50%.",
    },
    {
      q: "Which cloud providers do you support?",
      a: "Autofya is an enterprise-certified partner for Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). We also specialize in multi-cloud architectures and hybrid cloud connections combining on-premise servers with public cloud infrastructure.",
    },
    {
      q: "What is Infrastructure as Code (IaC) and why is it important?",
      a: "Infrastructure as Code allows your team to define cloud servers, databases, networks, and firewalls in version-controlled code files using tools like Terraform or Pulumi. This eliminates manual configuration errors, allows instant disaster recovery, and enables rapid creation of identical staging and production environments.",
    },
    {
      q: "What does 24/7 Managed SRE support include?",
      a: "Our 24/7 Managed Site Reliability Engineering includes round-the-clock APM telemetry monitoring, automated alert triage, incident escalation, security patch management, backup verification, and quarterly disaster recovery drills.",
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
                  ENTERPRISE CLOUD ARCHITECTURE & DEVOPS
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                We Expedite and De-Risk Your Move to The Cloud
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Accelerate digital growth, lower infrastructure costs, and achieve 99.99% system resilience with Autofya&apos;s end-to-end cloud consulting, migration, Kubernetes orchestration, and 24/7 managed DevOps services.
              </p>

              {/* Stats badges */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-[#111A4E] rounded-xl border border-slate-700/60 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#00a2ad]">AWS</div>
                  <div className="text-xs text-slate-300 mt-0.5">Advanced Partner</div>
                </div>
                <div className="p-3 bg-[#111A4E] rounded-xl border border-slate-700/60 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">AZURE</div>
                  <div className="text-xs text-slate-300 mt-0.5">Gold Partner</div>
                </div>
                <div className="p-3 bg-[#111A4E] rounded-xl border border-slate-700/60 text-center">
                  <div className="text-xl sm:text-2xl font-bold text-[#00a2ad]">50%</div>
                  <div className="text-xs text-slate-300 mt-0.5">Cost Savings</div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="#contact"
                  className="px-7 py-3.5 bg-[#00a2ad] hover:bg-[#008a94] text-white font-bold text-base rounded-xl transition-all duration-200 shadow-md inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Schedule a Cloud Audit</span>
                  <span>→</span>
                </a>
                <a
                  href="#offered-services"
                  className="px-7 py-3.5 bg-[#111A4E] hover:bg-[#182366] text-slate-200 border border-slate-700 font-semibold text-base rounded-xl transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Capabilities</span>
                </a>
              </div>
            </div>

            {/* Right Hero Visual (Multi-Cloud Infrastructure Telemetry Mockup) */}
            <div className="lg:col-span-6 relative">
              <div className="bg-[#111A4E] border border-slate-700/80 rounded-2xl p-5 shadow-2xl space-y-4">
                
                {/* Header Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-700/80">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                    <span className="ml-2 text-xs font-mono text-slate-400">autofya-cloud-sre-v6.8</span>
                  </div>
                  <span className="px-2.5 py-0.5 bg-[#00a2ad]/20 text-[#00a2ad] text-xs font-semibold rounded">
                    MULTI-CLOUD LIVE
                  </span>
                </div>

                {/* Dashboard Container inside Mockup */}
                <div className="grid grid-cols-12 gap-4">
                  {/* Left Column: Kubernetes & Infrastructure Cluster */}
                  <div className="col-span-7 bg-[#0B1340] p-4 rounded-xl border border-slate-800 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-300">AWS EKS Cluster (Production)</span>
                      <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded">
                        48 Pods Healthy
                      </span>
                    </div>

                    <div className="space-y-2 text-xs">
                      <div className="p-2.5 bg-[#111A4E] rounded border border-slate-700 space-y-1">
                        <div className="flex justify-between font-bold text-white text-[11px]">
                          <span>Microservices Fleet</span>
                          <span className="text-[#00a2ad]">Auto-Scaled (3x)</span>
                        </div>
                        <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-[#00a2ad] h-full w-[42%] rounded-full"></div>
                        </div>
                        <div className="flex justify-between text-[9px] text-slate-400">
                          <span>CPU: 42% Utilized</span>
                          <span>RAM: 58% Utilized</span>
                        </div>
                      </div>

                      <div className="p-2.5 bg-[#111A4E] rounded border border-slate-700 flex justify-between items-center">
                        <div>
                          <div className="font-bold text-white text-[11px]">CI/CD Pipeline #4092</div>
                          <div className="text-[10px] text-slate-400">GitLab → EKS Blue-Green</div>
                        </div>
                        <span className="text-emerald-400 font-bold bg-emerald-950 px-2 py-0.5 rounded text-[10px]">
                          ✓ Passed (2.4m)
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: FinOps & Security Status */}
                  <div className="col-span-5 bg-[#060C2C] p-3 rounded-xl border border-slate-800 space-y-3">
                    <div className="text-center pb-2 border-b border-slate-800">
                      <div className="text-xs font-bold text-white">FinOps & Governance</div>
                      <div className="text-[10px] text-[#00a2ad] font-semibold">38% Spend Reduced</div>
                    </div>

                    <div className="space-y-2 text-[10px]">
                      <div className="p-2 bg-[#111A4E] rounded border border-slate-700 space-y-1">
                        <div className="text-slate-400 uppercase font-bold">IaC State</div>
                        <div className="text-emerald-400 font-bold">✓ Terraform Synced</div>
                      </div>

                      <div className="p-2 bg-[#111A4E] rounded border border-slate-700 space-y-1">
                        <div className="text-slate-400 uppercase font-bold">SOC-2 Audit Scan</div>
                        <div className="text-white font-bold">0 Vulnerabilities</div>
                      </div>

                      <div className="p-2 bg-[#00a2ad]/20 border border-[#00a2ad]/40 rounded text-center">
                        <div className="font-bold text-[#00a2ad]">24/7 SRE Active</div>
                        <div className="text-slate-300 text-[9px]">SLA: 99.99%</div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- 2. CORE OVERVIEW & VALUE PROPOSITION ----------------- */}
      <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
                GLOBAL CLOUD CONSULTING PARTNER
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1340] leading-snug">
                As a Global Advanced Cloud Partner, Autofya offers Enterprises, SMBs to startups cloud consultancy, adoption, and managed services.
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-normal">
                We are a cloud partner that is fast, precise, innovative, and agile with solutions that offer 24/7 support &amp; monitoring for our services. We have tailored cloud solutions for all key industry verticals.
              </p>
              <div className="pt-2">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-[#0B1340] hover:bg-[#111A4E] text-white font-bold text-sm rounded-xl transition-all inline-flex items-center gap-2 cursor-pointer"
                >
                  <span>Talk to Our Cloud Architects</span>
                  <span>→</span>
                </a>
              </div>
            </div>

            {/* Industry Verticals Grid */}
            <div className="lg:col-span-5 bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200 space-y-4">
              <h3 className="text-lg font-bold text-[#0B1340] border-b border-slate-200 pb-3">
                Tailored Cloud Solutions Across Verticals
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {industryVerticals.map((ind, idx) => (
                  <div key={idx} className="p-3 bg-white rounded-xl border border-slate-200 space-y-1">
                    <div className="text-xl">{ind.icon}</div>
                    <div className="font-bold text-[#0B1340] text-sm">{ind.name}</div>
                    <div className="text-[11px] text-slate-500 line-clamp-2">{ind.desc}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ----------------- 3. OFFERED CLOUD SERVICES ----------------- */}
      <section id="offered-services" className="py-20 bg-[#0B1340] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
              END-TO-END CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Offered Cloud Services
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              From initial readiness assessment to automated DevOps, FinOps optimization, and 24/7 SRE managed operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offeredServices.map((item, idx) => (
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

      {/* ----------------- 4. FEATURED CASE STUDIES / SUCCESS STORIES ----------------- */}
      <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
              PROVEN SUCCESS STORIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
              Happy clients are the indicator of project success.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Learn how we have helped our partners in defining their problem and adopting the right tech solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200 flex flex-col justify-between space-y-6 hover:border-[#00a2ad] transition-all group"
              >
                <div className="space-y-4">
                  <span className="px-3 py-1 bg-[#0B1340] text-[#00a2ad] text-xs font-bold rounded uppercase">
                    {cs.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#0B1340] group-hover:text-[#00a2ad] transition-colors leading-snug">
                    {cs.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {cs.desc}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-200">
                  <div className="flex flex-wrap gap-2">
                    {cs.metrics.map((m, mIdx) => (
                      <span key={mIdx} className="text-xs font-bold text-[#00a2ad] bg-white border border-slate-200 px-2.5 py-1 rounded">
                        {m}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1340] hover:text-[#00a2ad] transition-colors"
                  >
                    <span>Read Full Story</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 5. CLOUD PARTNERS & KEY CLIENTS PROOF BAR ----------------- */}
      <section className="py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1340]">
              Key Clients &amp; Ecosystem Partners
            </h2>
            <p className="text-sm text-slate-500 font-semibold">
              Who believe in us as their partners for continuous success...
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {cloudPartners.map((partner, idx) => (
              <div
                key={idx}
                className="h-16 bg-white rounded-xl border border-slate-200 flex items-center justify-center p-3 shadow-sm hover:border-[#00a2ad] transition-colors"
              >
                <span className="text-xs font-black text-[#0B1340] tracking-wider text-center">
                  {partner.logoText}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 6. CLOUD OPERATIONS LIFECYCLE WORKFLOW ----------------- */}
      <section className="py-20 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
              STRUCTURED ADOPTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
              Cloud Operations Lifecycle
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              A battle-tested cloud migration and DevOps framework designed to de-risk enterprise adoption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lifecycle.map((lc, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200 relative group hover:border-[#00a2ad] transition-all"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="w-12 h-12 rounded-xl bg-[#0B1340] text-[#00a2ad] font-bold text-lg flex items-center justify-center">
                    {lc.step}
                  </span>
                  <span className="text-3xl">{lc.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-[#0B1340] mb-2 group-hover:text-[#00a2ad] transition-colors">
                  {lc.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {lc.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------- 7. MEASURABLE CLOUD OUTCOMES ----------------- */}
      <section className="py-20 bg-[#0B1340] border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
              TANGIBLE METRICS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Measurable Cloud Outcomes
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Quantifiable performance and cost improvements delivered to our enterprise cloud clients.
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

      {/* ----------------- 8. FAQ & CONTACT CTA SECTION ----------------- */}
      <section id="contact" className="py-20 bg-[#0B1340]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-3">
              <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-widest">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-3xl font-extrabold text-white">
                Cloud Solutions FAQ
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
                DE-RISK YOUR CLOUD TRANSFORMATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Ready to Expedite Your Move to The Cloud?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Connect directly with an Autofya senior cloud architect to schedule a complimentary infrastructure audit and FinOps review.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you! An Autofya cloud architect will contact you shortly.");
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
                <option value="AWS">Primary Cloud: AWS</option>
                <option value="Azure">Primary Cloud: Azure</option>
                <option value="GCP">Primary Cloud: GCP</option>
                <option value="Hybrid">Hybrid / Multi-Cloud</option>
              </select>
              <div className="sm:col-span-2 pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#00a2ad] hover:bg-[#008a94] text-white font-extrabold text-base rounded-xl transition-all duration-200 shadow-lg cursor-pointer"
                >
                  Schedule Free Cloud Audit Now
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
