"use client";

import React, { useState } from "react";
import AutofyaLogo from "./AutofyaLogo";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Services", hasDropdown: true },
    { name: "Industries", hasDropdown: true },
    { name: "Products", hasDropdown: true },
    { name: "Resources", hasDropdown: true },
    { name: "Global Offices", hasDropdown: false },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: Logo */}
        <a href="#" className="flex items-center gap-2 focus:outline-none">
          <AutofyaLogo height={44} showTagline={true} />
        </a>

        {/* Middle: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group cursor-pointer">
              <button className="flex items-center gap-1.5 text-sm font-semibold text-[#0B1340] hover:text-[#008494] transition-colors py-2">
                {link.name}
                {link.hasDropdown && (
                  <svg
                    className="w-4 h-4 text-slate-400 group-hover:text-[#008494] group-hover:rotate-180 transition-transform duration-200"
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="block py-2 text-base font-semibold text-[#0B1340] hover:text-[#00C4CC]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#schedule"
            className="block text-center w-full py-3 mt-4 rounded-full text-sm font-bold text-white bg-amber-500 hover:bg-amber-600"
          >
            Schedule a Call
          </a>
        </div>
      )}
    </header>
  );
}
