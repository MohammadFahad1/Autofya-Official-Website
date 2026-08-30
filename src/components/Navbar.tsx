"use client";

import React, { useState, useRef } from "react";
import AutofyaLogo from "./AutofyaLogo";

type MegaMenuKey = "Services" | "Industries" | "Products" | "Resources" | null;

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<MegaMenuKey>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menuName: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (menuName in megaMenus) {
      setActiveMegaMenu(menuName as MegaMenuKey);
    } else {
      setActiveMegaMenu(null);
    }
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 200);
  };

  const navLinks = [
    { name: "Services", hasDropdown: true },
    { name: "Industries", hasDropdown: true },
    { name: "Products", hasDropdown: true },
    { name: "Resources", hasDropdown: true },
    { name: "Global Offices", hasDropdown: false },
  ];

  const megaMenus = {
    Services: {
      banner: {
        title: "Top Services & Core Capabilities",
        description:
          "Custom software engineering, AI model integration, and cloud automation built for high enterprise scalability.",
        link: "#services",
        buttonText: "Explore All Services",
      },
      columns: [
        {
          title: "Software & Engineering",
          items: [
            { name: "Custom Software Development", desc: "Tailored enterprise web & cloud platforms", href: "#custom-software" },
            { name: "Web & Mobile App Development", desc: "Cross-platform iOS, Android & Next.js apps", href: "#mobile-apps" },
            { name: "Managed Services & DevOps", desc: "24/7 infrastructure, CI/CD & cloud monitoring", href: "#managed-services" },
            { name: "Enterprise Systems & ERP", desc: "Scalable backend architecture & SAP/ERP", href: "#enterprise-erp" },
          ],
        },
        {
          title: "AI & Data Science",
          items: [
            { name: "AI & Machine Learning Solutions", desc: "Predictive ML models, NLP & Computer Vision", href: "#ai-ml" },
            { name: "Neural Process Automation", desc: "Automate complex business logic with AI agents", href: "#ai-automation" },
            { name: "Data Analytics & BI Platforms", desc: "Real-time data pipelines & BI dashboards", href: "#data-analytics" },
            { name: "Generative AI & LLM Integration", desc: "Fine-tuned LLMs, RAG & custom chatbots", href: "#gen-ai" },
          ],
        },
        {
          title: "Cloud & Emerging Tech",
          items: [
            { name: "Cloud Infrastructure & AWS/Azure", desc: "Multi-cloud architecture & migration", href: "#cloud-infra" },
            { name: "Cybersecurity & ISO Compliance", desc: "ISO 27001 certified security & audit", href: "#security" },
            { name: "3D Modeling & AR/VR", desc: "Interactive 3D visuals & spatial computing", href: "#3d-modeling" },
            { name: "QA & Automated Testing", desc: "End-to-end automated testing suites", href: "#qa-testing" },
          ],
        },
      ],
    },
    Industries: {
      banner: {
        title: "Industries We Power with Innovation",
        description: "Delivering domain-specific software solutions for complex global industries.",
        link: "#industries",
        buttonText: "Explore All Industries",
      },
      columns: [
        {
          title: "Financial & Commerce",
          items: [
            { name: "FinTech & Banking Systems", desc: "Core banking, digital wallets & payment gateways", href: "#fintech" },
            { name: "E-Commerce & Retail Tech", desc: "Omnichannel e-commerce & headless platforms", href: "#ecommerce" },
            { name: "Insurance Tech (InsurTech)", desc: "Automated claims & policy management", href: "#insurtech" },
          ],
        },
        {
          title: "Healthcare & Telecom",
          items: [
            { name: "HealthTech & Medical Systems", desc: "HIPAA-compliant Telehealth & EHR platforms", href: "#healthtech" },
            { name: "Telecommunications & Connectivity", desc: "5G integration, OSS/BSS & network tools", href: "#telecom" },
            { name: "Supply Chain & Logistics", desc: "Real-time fleet tracking & warehouse AI", href: "#logistics" },
          ],
        },
        {
          title: "Enterprise & Media",
          items: [
            { name: "Automotive & Mobility Tech", desc: "Connected car software & fleet IoT", href: "#automotive" },
            { name: "Media & Entertainment", desc: "Streaming platforms, DRM & content engines", href: "#media" },
            { name: "Education & EdTech", desc: "Interactive LMS & virtual learning portals", href: "#edtech" },
          ],
        },
      ],
    },
    Products: {
      banner: {
        title: "Enterprise Products & Platforms",
        description: "Pre-built, scalable enterprise modules and white-label automation tools.",
        link: "#products",
        buttonText: "View All Products",
      },
      columns: [
        {
          title: "AI & Automation",
          items: [
            { name: "Autofya AI Agent Framework", desc: "Autonomous AI agents for enterprise operations", href: "#agent-framework" },
            { name: "Workflow Automator", desc: "Low-code business process automation suite", href: "#workflow-automator" },
            { name: "Intelligent Document Processor", desc: "OCR & LLM document parsing engine", href: "#doc-processor" },
          ],
        },
        {
          title: "Enterprise Accelerators",
          items: [
            { name: "Cloud Microservices Boilerplate", desc: "Production-ready Kubernetes & Docker core", href: "#cloud-boilerplate" },
            { name: "Customer Portal & Dashboard Kit", desc: "High-security admin & client dashboard", href: "#dashboard-kit" },
            { name: "Identity & Security Engine", desc: "OAuth2, SAML, & multi-tenant auth engine", href: "#auth-engine" },
          ],
        },
      ],
    },
    Resources: {
      banner: {
        title: "Knowledge Hub & Insights",
        description: "Case studies, whitepapers, tech blogs, and developer resources.",
        link: "#resources",
        buttonText: "Read Latest Insights",
      },
      columns: [
        {
          title: "Learn & Explore",
          items: [
            { name: "Tech Blogs & Articles", desc: "Expert guides on AI, Cloud, and Software", href: "#blog" },
            { name: "Case Studies & Client Stories", desc: "Real-world ROI and enterprise transformations", href: "#case-studies" },
            { name: "Whitepapers & E-Books", desc: "In-depth technical architecture research", href: "#whitepapers" },
          ],
        },
        {
          title: "Company & Events",
          items: [
            { name: "Upcoming AI Webinars & Events", desc: "Live sessions with senior architects", href: "#webinars" },
            { name: "News & Press Releases", desc: "Latest Autofya company updates & news", href: "#news" },
            { name: "Developer Documentation", desc: "API specs, SDKs, and developer guides", href: "#docs" },
          ],
        },
      ],
    },
  };

  return (
    <header
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all"
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <a href="#" className="flex items-center gap-2 focus:outline-none">
          <AutofyaLogo height={44} showTagline={true} />
        </a>

        {/* Middle: Navigation Links with Mega Dropdown triggers */}
        <nav className="hidden lg:flex items-center gap-8 h-full">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative h-full flex items-center cursor-pointer"
              onMouseEnter={() => handleMouseEnter(link.name)}
            >
              <button
                className={`flex items-center gap-1.5 text-sm font-semibold transition-colors py-2 ${
                  activeMegaMenu === link.name
                    ? "text-[#00A3AD]"
                    : "text-[#0B1340] hover:text-[#00A3AD]"
                }`}
              >
                {link.name}
                {link.hasDropdown && (
                  <svg
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                      activeMegaMenu === link.name
                        ? "text-[#00A3AD] rotate-180"
                        : "group-hover:text-[#00A3AD]"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </button>
            </div>
          ))}
        </nav>

        {/* Right: Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="#schedule"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold text-white bg-[#FF9000] hover:bg-[#E68200] active:scale-95 shadow-sm transition-all duration-200"
          >
            Schedule a Call
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MEGA DROPDOWN MENU PANEL (Brain Station 23 Design) */}
      {activeMegaMenu && activeMegaMenu in megaMenus && (
        <div
          className="absolute top-full left-0 w-full bg-white border-t-2 border-[#00A3AD] shadow-2xl z-50 animate-fadeIn"
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-12 gap-8">
              
              {/* Left Column: Featured Banner Box */}
              <div className="col-span-4 bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 bg-[#00A3AD]/10 text-[#00A3AD] text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
                    {activeMegaMenu} Overview
                  </span>
                  <h4 className="text-xl font-extrabold text-[#0B1340] mb-3">
                    {megaMenus[activeMegaMenu].banner.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {megaMenus[activeMegaMenu].banner.description}
                  </p>
                </div>

                <div>
                  <a
                    href={megaMenus[activeMegaMenu].banner.link}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#00A3AD] hover:text-[#0B1340] transition-colors"
                  >
                    {megaMenus[activeMegaMenu].banner.buttonText}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Columns: Categorized Mega Links */}
              <div className="col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-6">
                {megaMenus[activeMegaMenu].columns.map((col, colIdx) => (
                  <div key={colIdx} className="space-y-4">
                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-2">
                      {col.title}
                    </h5>
                    <ul className="space-y-3">
                      {col.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <a
                            href={item.href}
                            className="group block p-2 rounded-lg hover:bg-slate-50 transition-colors"
                          >
                            <div className="text-sm font-bold text-[#0B1340] group-hover:text-[#00A3AD] transition-colors">
                              {item.name}
                            </div>
                            <div className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                              {item.desc}
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="block py-2 text-base font-semibold text-[#0B1340] hover:text-[#00A3AD]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#schedule"
            className="block text-center w-full py-3 mt-4 rounded-full text-sm font-bold text-white bg-[#FF9000] hover:bg-[#E68200]"
          >
            Schedule a Call
          </a>
        </div>
      )}
    </header>
  );
}
