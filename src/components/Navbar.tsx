"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AutofyaLogo from "./AutofyaLogo";

type MegaMenuKey = "Services" | "Industries" | "Products" | "Resources" | null;

interface NavItem {
  name: string;
  hasDropdown: boolean;
  href?: string;
}

interface SidebarData {
  title: string;
  subtitle: string;
  items?: string[];
  caseStudy?: string;
  newsImage?: string;
  newsTitle?: string;
  newsLinkText?: string;
  newsLinkHref?: string;
}

interface CaseStudyRecommendation {
  image: string;
  title: string;
  description: string;
  linkHref?: string;
}

interface TestimonialData {
  ratingSource: string;
  ratingStars: number;
  quote: string;
  authorName: string;
  authorTitle: string;
  viewAllLink?: string;
}

interface ProductItem {
  name: string;
  href?: string;
  external?: boolean;
}

interface ProductCategoryGroup {
  category: string;
  items: (string | ProductItem)[];
}

interface StandardMegaMenu {
  sidebar: SidebarData;
  section1Title: string;
  section1Col1?: string[];
  section1Col2?: string[];
  showAllLink?: boolean;
  allLinkText?: string;
  section2Title?: string;
  section2Col?: string[];
  isCustomResources?: boolean;
  isCustomIndustries?: boolean;
  isCustomProducts?: boolean;
  insideItems?: string[];
  recognitionsItems?: string[];
  caseStudyRecommendations?: CaseStudyRecommendation[];
  industriesCol1?: string[];
  industriesCol2?: string[];
  testimonial?: TestimonialData;
  productsCol1?: ProductCategoryGroup;
  productsCol2?: ProductCategoryGroup[];
  productsCol3?: ProductCategoryGroup;
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<MegaMenuKey>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);

  // Close mega menu when clicking anywhere outside header
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveMegaMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavClick = (menuName: string) => {
    if (menuName in megaMenus) {
      const key = menuName as MegaMenuKey;
      if (activeMegaMenu === key) {
        setActiveMegaMenu(null);
      } else {
        setActiveMegaMenu(key);
      }
    } else {
      setActiveMegaMenu(null);
      const targetId = menuName.toLowerCase().replace(/\s+/g, "-");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks: NavItem[] = [
    { name: "Services", hasDropdown: true },
    { name: "Industries", hasDropdown: true },
    { name: "Products", hasDropdown: true },
    { name: "Resources", hasDropdown: true },
    { name: "Global Offices", hasDropdown: false },
  ];

  const megaMenus: Record<string, StandardMegaMenu> = {
    Services: {
      sidebar: {
        title: "Collaboration Models",
        subtitle: "AI-powered dev for 10X faster software delivery.",
        items: [
          "Staff Augmentation",
          "Managed Service",
          "Digital Transformation",
          "Technology Consulting",
          "MVP Development",
        ],
        caseStudy: "A Journey Towards Digital Excellence in Retail.",
      },
      section1Title: "Top Services",
      section1Col1: [
        "AI-DLC",
        "ML & AI Development",
        "Data Engineering",
        "Data Migration",
        "Business Intelligence",
        "Insurtech",
        "3D Modeling Services",
        "Game Studio",
      ],
      section1Col2: [
        "LMS Development",
        "Web & Mobile App Development",
        "eCommerce Development",
        "Adobe Experience Manager",
        "SharePoint Services",
        "Blockchain Development",
        "Shopify Services",
        "QA Testing & Automation",
      ],
      showAllLink: true,
      allLinkText: "All Services",
      section2Title: "Enterprise Focused",
      section2Col: [
        "Field Force Automation",
        "Banking Solutions",
        "Cloud Solutions",
        "Cyber Security",
        "ERP Development",
        "Data Science & Business Intelligence",
      ],
    },
    Industries: {
      isCustomIndustries: true,
      sidebar: {
        title: "Industries",
        subtitle:
          "We've delivered 2500+ projects across 130+ sectors. Experience in your industry? We have it.",
      },
      caseStudyRecommendations: [
        {
          image: "/cs_safety_at_sea.jpg",
          title: "Safety at Sea - Leveraging IoT for Strengthening Maritime Security",
          description: "Autofya developed an advanced IoT-based boat safety system",
          linkHref: "#case-study-safety-at-sea",
        },
        {
          image: "/cs_digital_wallet.jpg",
          title: "Fueling Financial Inclusion through Digital Wallet Solutions",
          description: "Digital wallet services are becoming increasingly popular as people",
          linkHref: "#case-study-digital-wallet",
        },
      ],
      section1Title: "Industries",
      industriesCol1: [
        "Fintech",
        "Pharma",
        "Telecom",
        "Real Estate",
        "Software/ITES",
        "e-Commerce",
      ],
      industriesCol2: [
        "Education",
        "Retail",
        "Automotive",
        "Startup",
        "Non-Profit",
      ],
    },
    Products: {
      isCustomProducts: true,
      sidebar: {
        title: "Products",
        subtitle:
          "Autofya delivers tailored digital solutions across fintech, healthcare, e-commerce, and more, empowering industries with innovation and expertise.",
      },
      testimonial: {
        ratingSource: "Clutch",
        ratingStars: 5,
        quote:
          "Autofya's resource augmentation transformed our development velocity. Their AI-powered approach delivered our fintech platform 8X faster than expected.",
        authorName: "Engr. Kamrul Hasan",
        authorTitle: "Founder & CEO",
        viewAllLink: "#testimonials",
      },
      section1Title: "Products",
      productsCol1: {
        category: "Fintech",
        items: [
          "Digital Banking Software",
          "E-wallet Software",
          "Digital Lending & Credit",
          "Insurance 360",
          "Cross Border Payments Solution",
        ],
      },
      productsCol2: [
        {
          category: "Healthcare",
          items: ["Omnizia", "Time2Publish"],
        },
        {
          category: "Mobility & Transport",
          items: [
            {
              name: "Safar BD (safarbd.com)",
              href: "https://safarbd.com",
              external: true,
            },
          ],
        },
        {
          category: "LMS",
          items: ["Proctoring Pro"],
        },
      ],
      productsCol3: {
        category: "AI Solution",
        items: ["NeuraFlow - Conversational AI Agent"],
      },
    },
    Resources: {
      isCustomResources: true,
      sidebar: {
        title: "About Autofya",
        subtitle: "Founded in 2020, we are a global AI software company powering digital transformation across industries.",
        newsImage: "/company_team_group.jpg",
        newsTitle: "Autofya's leadership promotes next-gen AI automation prowess at WEF 2025",
        newsLinkText: "About Us >",
        newsLinkHref: "/about",
      },
      section1Title: "Inside Autofya",
      insideItems: [
        "About Us",
        "Blog",
        "Case Studies",
        "Testimonial",
        "Career",
        "Contact",
        "Our Resources",
        "Investor Relations",
      ],
      section2Title: "Recognitions",
      recognitionsItems: [
        "Partners",
        "Enterprise-Grade Security",
        "Sustainability",
        "Media",
        "Join as Partner",
      ],
    },
  };

  const currentMenu = activeMegaMenu ? megaMenus[activeMegaMenu] : null;

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-[#FFFF] backdrop-blur-md border-b border-slate-100 transition-all"
    >
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setActiveMegaMenu(null);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center gap-2 focus:outline-none cursor-pointer"
        >
          <AutofyaLogo height={44} showTagline={true} />
        </a>

        {/* Middle: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 h-full">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative h-full flex items-center cursor-pointer"
            >
              {link.href ? (
                <Link
                  href={link.href}
                  onClick={() => setActiveMegaMenu(null)}
                  className="text-[15px] font-semibold text-[#0B1340] hover:text-[#00a2ad] transition-colors py-2 focus:outline-none cursor-pointer"
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  onClick={() => handleNavClick(link.name)}
                  className={`flex items-center gap-1.5 text-[15px] font-semibold transition-colors py-2 focus:outline-none cursor-pointer ${
                    activeMegaMenu === link.name
                      ? "text-[#00a2ad]"
                      : "text-[#0B1340] hover:text-[#00a2ad]"
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <svg
                      className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                        activeMegaMenu === link.name
                          ? "text-[#00a2ad] rotate-180"
                          : ""
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
              )}
            </div>
          ))}
        </nav>

        {/* Right: Action Button */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            href="/schedule"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-bold text-white bg-[#FF9000] hover:bg-[#E68200] active:scale-95 shadow-sm transition-all duration-200 cursor-pointer"
          >
            Schedule a Call
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none cursor-pointer"
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

      {/* MEGA DROPDOWN MENU PANEL WITH SMOOTH ANIMATION */}
      <div
        className={`absolute top-full left-0 w-full bg-white border-t border-slate-200/80 shadow-2xl z-50 transition-all duration-300 ease-in-out ${
          activeMegaMenu
            ? "opacity-100 translate-y-0 pointer-events-auto visible"
            : "opacity-0 -translate-y-3 pointer-events-none invisible"
        }`}
      >
        {currentMenu && (
          <div className="max-w-[1380px] mx-auto flex min-h-[380px]">
            
            {/* LEFT SIDEBAR COLUMN */}
            <div className="w-[360px] sm:w-[420px] shrink-0 bg-[#F8FAFC] p-8 border-r border-slate-200/60 flex flex-col justify-between">
              {currentMenu.isCustomIndustries ? (
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-[22px] sm:text-[24px] font-bold text-[#0B1340] mb-2.5">
                      {currentMenu.sidebar.title}
                    </h3>
                    <p className="text-[14px] text-slate-600 font-normal leading-relaxed mb-6">
                      {currentMenu.sidebar.subtitle}
                    </p>

                    <div className="border-t border-slate-200/80 pt-5">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="text-[15px] font-bold text-[#0B1340]">
                          Recommended Case Study
                        </h4>
                        <a
                          href="#case-studies"
                          onClick={() => setActiveMegaMenu(null)}
                          className="text-[13px] font-bold text-[#00a2ad] hover:underline cursor-pointer"
                        >
                          View All &gt;
                        </a>
                      </div>

                      <div className="space-y-4.5">
                        {currentMenu.caseStudyRecommendations?.map((item, idx) => (
                          <a
                            key={idx}
                            href={item.linkHref || "#case-studies"}
                            onClick={() => setActiveMegaMenu(null)}
                            className="flex gap-3.5 group items-start cursor-pointer"
                          >
                            <div className="relative w-28 h-20 rounded-lg overflow-hidden shrink-0 border border-slate-200 shadow-sm bg-slate-100">
                              <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>
                            <div className="flex flex-col flex-1 min-w-0">
                              <h5 className="text-[14px] font-bold text-[#0B1340] group-hover:text-[#00a2ad] transition-colors leading-snug line-clamp-2">
                                {item.title}
                              </h5>
                              <p className="text-[12px] text-slate-500 line-clamp-2 mt-1 leading-normal">
                                {item.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : currentMenu.isCustomProducts ? (
                <div className="flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-[22px] sm:text-[24px] font-bold text-[#0B1340] mb-2.5">
                      {currentMenu.sidebar.title}
                    </h3>
                    <p className="text-[14px] text-slate-600 font-normal leading-relaxed mb-6">
                      {currentMenu.sidebar.subtitle}
                    </p>

                    {currentMenu.testimonial && (
                      <div className="border-t border-slate-200/80 pt-5">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-[15px] font-bold text-[#0B1340]">
                            Testimonials
                          </h4>
                          <a
                            href={currentMenu.testimonial.viewAllLink || "#testimonials"}
                            onClick={() => setActiveMegaMenu(null)}
                            className="text-[13px] font-bold text-[#00a2ad] hover:underline cursor-pointer"
                          >
                            View All &gt;
                          </a>
                        </div>

                        {/* Clutch Rating */}
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-[10px] font-semibold text-slate-500 tracking-wider uppercase">
                            REVIEWED ON
                          </span>
                          <span className="text-[15px] font-black text-[#0B1340]">
                            Clutch
                          </span>
                          <div className="flex items-center text-[#E11D48] text-xs gap-0.5 ml-1">
                            ★★★★★
                          </div>
                        </div>

                        {/* Quote */}
                        <p className="text-[13px] text-slate-600 font-normal leading-relaxed mb-4">
                          &ldquo;{currentMenu.testimonial.quote}&rdquo;
                        </p>

                        {/* Author */}
                        <div>
                          <h5 className="text-[14px] font-bold text-[#0B1340]">
                            {currentMenu.testimonial.authorName}
                          </h5>
                          <p className="text-[12px] text-slate-500 font-normal">
                            {currentMenu.testimonial.authorTitle}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="text-[20px] font-bold text-[#0B1340] mb-1">
                    {currentMenu.sidebar.title}
                  </h3>
                  <p className="text-[13px] text-slate-500 font-normal leading-relaxed mb-6">
                    {currentMenu.sidebar.subtitle}
                  </p>

                  {currentMenu.sidebar.items && currentMenu.sidebar.items.length > 0 && (
                    <ul className="space-y-3.5">
                      {currentMenu.sidebar.items.map((item, iIdx) => (
                        <li key={iIdx}>
                          <a
                            href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                            onClick={() => setActiveMegaMenu(null)}
                            className="text-[15px] font-semibold text-[#0B1340] hover:text-[#00a2ad] transition-colors block cursor-pointer"
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}

              {/* Bottom Card for Resources or Standard Case Study */}
              {!currentMenu.isCustomIndustries && !currentMenu.isCustomProducts && (
                currentMenu.isCustomResources ? (
                  <div className="pt-5 border-t border-slate-200/80 mt-6">
                    <div className="flex items-center space-x-3">
                      {currentMenu.sidebar.newsImage && (
                        <div className="relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border border-slate-200 shadow-sm">
                          <Image
                            src={currentMenu.sidebar.newsImage}
                            alt="WEF 2025 Event"
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div className="flex flex-col">
                        <p className="text-[13px] font-semibold text-slate-800 leading-snug line-clamp-3 mb-1">
                          {currentMenu.sidebar.newsTitle}
                        </p>
                        <a
                          href={currentMenu.sidebar.newsLinkHref || "#about"}
                          onClick={() => setActiveMegaMenu(null)}
                          className="text-[12px] font-bold text-[#00a2ad] hover:underline cursor-pointer"
                        >
                          {currentMenu.sidebar.newsLinkText}
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="pt-6 border-t border-slate-200/80 mt-6">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-5 h-5 bg-[#E11D48] rounded text-white font-bold text-[9px] flex items-center justify-center">
                        ★
                      </div>
                      <span className="text-[12px] font-semibold text-slate-500">
                        Solution Partner
                      </span>
                    </div>
                    <p className="text-[13px] text-slate-700 leading-snug font-normal">
                      {currentMenu.sidebar.caseStudy}{" "}
                      <a
                        href="#case-studies"
                        onClick={() => setActiveMegaMenu(null)}
                        className="text-slate-900 font-medium underline hover:text-[#00a2ad] transition-colors cursor-pointer"
                      >
                        Read case study.
                      </a>
                    </p>
                  </div>
                )
              )}
            </div>

            {/* RIGHT MAIN COLUMNS */}
            {currentMenu.isCustomProducts ? (
              /* CUSTOM PRODUCTS DROPDOWN LAYOUT (MATCHING ATTACHED SCREENSHOT) */
              <div className="flex-1 bg-white p-8 sm:p-10 grid grid-cols-12 gap-8 items-start">
                {/* Column 1: Fintech */}
                <div className="col-span-4">
                  {currentMenu.productsCol1 && (
                    <div>
                      <h4 className="text-[17px] font-bold text-[#0B1340] flex items-center gap-2 mb-5">
                        <span className="text-[#00a2ad] text-sm">■</span> {currentMenu.productsCol1.category}
                      </h4>
                      <div className="space-y-3.5">
                        {currentMenu.productsCol1.items.map((item, idx) => {
                          const isObj = typeof item !== "string";
                          const name = isObj ? item.name : item;
                          const href = isObj ? item.href || "#" : `#${item.toLowerCase().replace(/\s+/g, "-")}`;
                          const isExt = isObj ? item.external : false;
                          return (
                            <a
                              key={idx}
                              href={href}
                              target={isExt ? "_blank" : undefined}
                              rel={isExt ? "noopener noreferrer" : undefined}
                              onClick={() => setActiveMegaMenu(null)}
                              className="text-[16px] font-semibold text-slate-700 hover:text-[#00a2ad] transition-colors block py-0.5 cursor-pointer flex items-center gap-1.5 group"
                            >
                              <span>{name}</span>
                              {isExt && (
                                <span className="text-xs text-slate-400 group-hover:text-[#00a2ad]">↗</span>
                              )}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* Column 2: Healthcare, Mobility & LMS */}
                <div className="col-span-4 space-y-6">
                  {currentMenu.productsCol2?.map((group, gIdx) => (
                    <div key={gIdx}>
                      <h4 className="text-[17px] font-bold text-[#0B1340] flex items-center gap-2 mb-3">
                        <span className="text-[#00a2ad] text-sm">■</span> {group.category}
                      </h4>
                      <div className="space-y-2.5">
                        {group.items.map((item, idx) => {
                          const isObj = typeof item !== "string";
                          const name = isObj ? item.name : item;
                          const href = isObj ? item.href || "#" : `#${item.toLowerCase().replace(/\s+/g, "-")}`;
                          const isExt = isObj ? item.external : false;
                          return (
                            <a
                              key={idx}
                              href={href}
                              target={isExt ? "_blank" : undefined}
                              rel={isExt ? "noopener noreferrer" : undefined}
                              onClick={() => setActiveMegaMenu(null)}
                              className="text-[16px] font-semibold text-slate-700 hover:text-[#00a2ad] transition-colors block py-0.5 cursor-pointer flex items-center gap-1.5 group"
                            >
                              <span>{name}</span>
                              {isExt && (
                                <span className="text-xs text-slate-400 group-hover:text-[#00a2ad]">↗</span>
                              )}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Column 3: AI Solution */}
                <div className="col-span-4">
                  {currentMenu.productsCol3 && (
                    <div>
                      <h4 className="text-[17px] font-bold text-[#0B1340] flex items-center gap-2 mb-5">
                        <span className="text-[#00a2ad] text-sm">■</span> {currentMenu.productsCol3.category}
                      </h4>
                      <div className="space-y-3.5">
                        {currentMenu.productsCol3.items.map((item, idx) => {
                          const isObj = typeof item !== "string";
                          const name = isObj ? item.name : item;
                          const href = isObj ? item.href || "#" : `#${item.toLowerCase().replace(/\s+/g, "-")}`;
                          const isExt = isObj ? item.external : false;
                          return (
                            <a
                              key={idx}
                              href={href}
                              target={isExt ? "_blank" : undefined}
                              rel={isExt ? "noopener noreferrer" : undefined}
                              onClick={() => setActiveMegaMenu(null)}
                              className="text-[16px] font-semibold text-slate-700 hover:text-[#00a2ad] transition-colors block py-0.5 cursor-pointer flex items-center gap-1.5 group"
                            >
                              <span>{name}</span>
                              {isExt && (
                                <span className="text-xs text-slate-400 group-hover:text-[#00a2ad]">↗</span>
                              )}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ) : currentMenu.isCustomIndustries ? (
              /* CUSTOM INDUSTRIES DROPDOWN LAYOUT (MATCHING ATTACHED SCREENSHOT) */
              <div className="flex-1 bg-white p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <h4 className="text-[17px] font-bold text-[#0B1340] flex items-center gap-2 mb-6">
                    <span className="text-[#00a2ad] text-sm">■</span> {currentMenu.section1Title}
                  </h4>

                  <div className="grid grid-cols-2 gap-x-16 gap-y-4 max-w-2xl">
                    <div className="space-y-3.5">
                      {currentMenu.industriesCol1?.map((item, idx) => (
                        <a
                          key={idx}
                          href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                          onClick={() => setActiveMegaMenu(null)}
                          className="text-[16px] font-semibold text-slate-700 hover:text-[#00a2ad] transition-colors block py-0.5 cursor-pointer"
                        >
                          {item}
                        </a>
                      ))}
                    </div>

                    <div className="space-y-3.5">
                      {currentMenu.industriesCol2?.map((item, idx) => (
                        <a
                          key={idx}
                          href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                          onClick={() => setActiveMegaMenu(null)}
                          className="text-[16px] font-semibold text-slate-700 hover:text-[#00a2ad] transition-colors block py-0.5 cursor-pointer"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-5 border-t border-slate-100">
                  <a
                    href="#industries"
                    onClick={() => setActiveMegaMenu(null)}
                    className="inline-flex items-center text-[16px] font-bold text-[#0B1340] hover:text-[#00a2ad] transition-colors group cursor-pointer"
                  >
                    <span>All Industries</span>
                    <span className="ml-1.5 transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            ) : currentMenu.isCustomResources ? (
              /* CUSTOM RESOURCES DROPDOWN LAYOUT */
              <div className="flex-1 bg-white p-8 sm:p-10 grid grid-cols-12 gap-8 items-start">
                
                {/* Column 1: Inside Autofya */}
                <div className="col-span-6">
                  <h4 className="text-[15px] font-bold text-[#00a2ad] flex items-center gap-2 mb-5">
                    <span className="text-[#00a2ad] text-xs">■</span> {currentMenu.section1Title}
                  </h4>
                  <div className="space-y-3.5">
                    {currentMenu.insideItems?.map((item, idx) => {
                      if (item === "About Us") {
                        return (
                          <Link
                            key={idx}
                            href="/about"
                            onClick={() => setActiveMegaMenu(null)}
                            className="text-[15px] font-medium text-slate-700 hover:text-[#00a2ad] transition-colors block py-0.5 cursor-pointer"
                          >
                            {item}
                          </Link>
                        );
                      }
                      return (
                        <a
                          key={idx}
                          href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                          onClick={() => setActiveMegaMenu(null)}
                          className="text-[15px] font-medium text-slate-700 hover:text-[#00a2ad] transition-colors block py-0.5 cursor-pointer"
                        >
                          {item}
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Column 2: Recognitions */}
                <div className="col-span-6 pl-4 border-l border-slate-100">
                  <h4 className="text-[15px] font-bold text-[#00a2ad] flex items-center gap-2 mb-5">
                    <span className="text-[#00a2ad] text-xs">■</span> {currentMenu.section2Title}
                  </h4>
                  <div className="space-y-3.5">
                    {currentMenu.recognitionsItems?.map((item, idx) => (
                      <a
                        key={idx}
                        href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                        onClick={() => setActiveMegaMenu(null)}
                        className="text-[15px] font-medium text-slate-700 hover:text-[#00a2ad] transition-colors block py-0.5 cursor-pointer"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            ) : (
              /* STANDARD MEGA DROPDOWN LAYOUT */
              <div className="flex-1 bg-white p-8 sm:p-10 grid grid-cols-12 gap-8 items-start">
                
                {/* Top Services Section (Col 8) */}
                <div className="col-span-8">
                  <h4 className="text-[15px] font-bold text-[#00a2ad] flex items-center gap-2 mb-5">
                    <span className="text-[#00a2ad] text-xs">■</span> {currentMenu.section1Title}
                  </h4>

                  <div className="grid grid-cols-2 gap-x-10 gap-y-3.5">
                    <div className="space-y-3">
                      {currentMenu.section1Col1?.map((item, idx) => (
                        <a
                          key={idx}
                          href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                          onClick={() => setActiveMegaMenu(null)}
                          className="text-[15px] font-medium text-slate-700 hover:text-[#00a2ad] transition-colors block py-0.5 cursor-pointer"
                        >
                          {item}
                        </a>
                      ))}
                    </div>

                    <div className="space-y-3">
                      {currentMenu.section1Col2?.map((item, idx) => (
                        <a
                          key={idx}
                          href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                          onClick={() => setActiveMegaMenu(null)}
                          className="text-[15px] font-medium text-slate-700 hover:text-[#00a2ad] transition-colors block py-0.5 cursor-pointer"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  </div>

                  {currentMenu.showAllLink && (
                    <div className="mt-8 pt-4 border-t border-slate-100">
                      <a
                        href="#services"
                        onClick={() => setActiveMegaMenu(null)}
                        className="inline-flex items-center text-[15px] font-bold text-[#0B1340] hover:text-[#00a2ad] transition-colors group cursor-pointer"
                      >
                        <span>{currentMenu.allLinkText}</span>
                        <span className="ml-1.5 transition-transform group-hover:translate-x-1">→</span>
                      </a>
                    </div>
                  )}
                </div>

                {/* Enterprise Focused Section (Col 4) */}
                <div className="col-span-4 pl-4 border-l border-slate-100">
                  <h4 className="text-[15px] font-bold text-[#00a2ad] flex items-center gap-2 mb-5">
                    <span className="text-[#00a2ad] text-xs">■</span> {currentMenu.section2Title}
                  </h4>

                  <div className="space-y-3.5">
                    {currentMenu.section2Col?.map((item, idx) => (
                      <a
                        key={idx}
                        href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                        onClick={() => setActiveMegaMenu(null)}
                        className="text-[15px] font-medium text-slate-700 hover:text-[#00a2ad] transition-colors block py-0.5 cursor-pointer"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            )}

          </div>
        )}
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            link.href ? (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-base font-semibold text-[#0B1340] hover:text-[#00a2ad] cursor-pointer"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={`#${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  const targetId = link.name.toLowerCase().replace(/\s+/g, "-");
                  const element = document.getElementById(targetId);
                  if (element) {
                    e.preventDefault();
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="block py-2 text-base font-semibold text-[#0B1340] hover:text-[#00a2ad] cursor-pointer"
              >
                {link.name}
              </a>
            )
          ))}
          <Link
            href="/schedule"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center w-full py-3 mt-4 rounded-full text-sm font-bold text-white bg-[#FF9000] hover:bg-[#E68200] cursor-pointer"
          >
            Schedule a Call
          </Link>
        </div>
      )}
    </header>
  );
}
