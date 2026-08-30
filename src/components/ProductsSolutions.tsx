import React from "react";

export default function ProductsSolutions() {
  const products = [
    {
      title: "Proctoring Pro — Online Exam Monitoring & Integrity",
      description:
        "Conduct secure, scalable online exams with real-time monitoring, identity verification, and easy integration with Moodle.",
      link: "#proctoring-pro",
    },
    {
      title: "Autofya Wallet — Digital Wallet & Payment Systems",
      description:
        "Go live in 15 days with P2P transfers, merchant payments, QR transactions, and enterprise-grade security.",
      link: "#autofya-wallet",
    },
    {
      title: "Remity — Cross-Border Payments",
      description:
        "Launch international money transfer services in 30 days with multi-currency wallets, real-time FX, and secure compliance.",
      link: "#remity",
    },
    {
      title: "PocketEdge — Digital Lending & Credit",
      description:
        "Offer branded loan services instantly with automated credit scoring, digital origination, and AI-driven fraud protection.",
      link: "#pocketedge",
    },
    {
      title: "Omnizia — Pharma HCP Activation Suite",
      description:
        "Enable smart, data-driven pharma campaigns with predictive analytics and repeatable cross-channel insights.",
      link: "#omnizia",
    },
    {
      title: "Insurance Tech Solutions",
      description:
        "Modernize underwriting, claims, and policy management with AI and data analytics for personalized, scalable insurance products.",
      link: "#insurance-tech",
    },
  ];

  return (
    <section className="py-24 bg-[#0B1340] text-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Subtitle */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Products & Solutions
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            Accelerating Digital Transformation Across Banking, FinTech, EdTech, Pharma, and Enterprise Operations
          </p>
        </div>

        {/* 2-Column Grid of Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {products.map((item, index) => (
            <div
              key={index}
              className="space-y-3 border-b border-[#1E2E62]/60 pb-8 last:border-0 md:last:border-b-0"
            >
              <h3 className="text-2xl font-bold text-white leading-snug hover:text-[#FF9000] transition-colors cursor-pointer">
                {item.title}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {item.description}
              </p>
              <div className="pt-2">
                <a
                  href={item.link}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#FF9000] hover:underline"
                >
                  Learn More
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
