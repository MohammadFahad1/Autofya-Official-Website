import React from "react";

export default function IndustriesSection() {
  const industries = [
    {
      title: "EdTech",
      description:
        "LMS solutions built with Moodle: live classes, assessments, compliance & reporting to empower learners.",
      icon: (
        <svg className="w-8 h-8 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      link: "#edtech",
    },
    {
      title: "Fintech",
      description:
        "Secure, scalable fintech & blockchain platforms built to transform payments, lending, and risk management.",
      icon: (
        <svg className="w-8 h-8 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: "#fintech",
    },
    {
      title: "E-Commerce",
      description:
        "Transform your store with certified nopCommerce themes, plugins & custom apps for speed, UX & conversion.",
      icon: (
        <svg className="w-8 h-8 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      link: "#ecommerce",
    },
    {
      title: "Pharma",
      description:
        "Regulation-first pharma & healthcare software: compliant platforms supporting HCPs, education & analytics.",
      icon: (
        <svg className="w-8 h-8 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      link: "#pharma",
    },
    {
      title: "Telecom",
      description:
        "Enterprise-grade telecom applications that scale securely to serve millions with reliability & speed.",
      icon: (
        <svg className="w-8 h-8 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
      link: "#telecom",
    },
    {
      title: "Retail",
      description:
        "Smart retail systems streamlining inventory, customer journeys & omnichannel sales for business growth.",
      icon: (
        <svg className="w-8 h-8 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      link: "#retail",
    },
    {
      title: "Software/ITES",
      description:
        "Cutting-edge custom software & IT-enabled solutions solving complex problems with innovation & agility.",
      icon: (
        <svg className="w-8 h-8 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      link: "#software-ites",
    },
    {
      title: "Startups",
      description:
        "Lean, fast-moving digital builds for startups: MVPs, product-market fit & scalable tech from day one.",
      icon: (
        <svg className="w-8 h-8 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
      ),
      link: "#startups",
    },
  ];

  return (
    <section className="py-24 bg-[#0B1340] text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Industries We Power <br />
            with Innovation
          </h2>
        </div>

        {/* 3x3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industries.map((item) => (
            <div
              key={item.title}
              className="bg-[#14224D] border border-[#1E2E62]/60 rounded-2xl p-8 flex flex-col justify-between hover:border-[#FF9000]/60 transition-colors group"
            >
              <div>
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#FF9000] transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div>
                <a
                  href={item.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF9000] hover:underline"
                >
                  Learn More
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}

          {/* 9th Card: Call-to-Action Card */}
          <div className="bg-[#14224D] border border-[#1E2E62]/60 rounded-2xl p-8 flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              Is your industry here?
            </h3>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#FF9000] hover:bg-[#E68200] active:scale-95 shadow-md transition-all"
            >
              Let&apos;s Talk
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
