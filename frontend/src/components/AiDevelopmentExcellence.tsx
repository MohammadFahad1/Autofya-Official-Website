import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AiDevelopmentExcellence() {
  const metrics = [
    {
      stat: "70%",
      badge: "/ Faster Development",
      title: "Intelligent Coding",
      description:
        "AI-powered code synthesis and auto-completion reduce manual effort while maintaining enterprise-grade standards.",
    },
    {
      stat: "99.9%",
      badge: "/ Defect-Free Releases",
      title: "Bulletproof QA",
      description:
        "Self-learning test suites detect bugs early, with automated fixes for flawless deployments.",
    },
    {
      stat: "40%",
      badge: "/ Higher Efficiency",
      title: "Peak Performance",
      description:
        "ML algorithms optimize resource allocation, predict scaling needs, and eliminate bottlenecks in real-time.",
    },
    {
      stat: "90%",
      badge: "/ Faster Deployments",
      title: "Zero-Downtime DevOps",
      description:
        "AI-driven CI/CD pipelines automate rollbacks and canary releases for seamless updates.",
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAFC] font-sans border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: Headline, Copy, CTA & Robot Photo */}
          <div className="lg:col-span-6 flex flex-col space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0B1340] leading-[1.12] tracking-tight">
                AI-Driven <br />
                Development <br />
                Excellence
              </h2>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-lg">
                We integrate cutting-edge AI across the development lifecycle—delivering solutions 10X faster with unmatched reliability. Our engineers augment human expertise with AI to automate, optimize, and future-proof your software.
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <Link
                href="/schedule"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#FF9000] hover:bg-[#E68200] active:scale-95 shadow-md transition-all cursor-pointer"
              >
                Schedule a Call
              </Link>
            </div>

            {/* Featured Photo Card */}
            <div className="pt-4">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] sm:aspect-[14/10]">
                <Image
                  src="/ai_development_collaboration.jpg"
                  alt="Humanoid AI Collaborating with Software Engineers"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Stack of 4 Metric Value Proposition Cards */}
          <div className="lg:col-span-6 space-y-10 pt-2 lg:pt-0">
            {metrics.map((item, index) => (
              <div key={index} className="space-y-2 border-b border-slate-200/60 pb-8 last:border-0 last:pb-0">
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl sm:text-6xl font-light text-[#00a2ad] tracking-tight">
                    {item.stat}
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#00a2ad] uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#0B1340] pt-1">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
