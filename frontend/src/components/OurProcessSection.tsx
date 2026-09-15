"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProcessStep {
  stepNumber: number;
  badgeTitle: string;
  heading: string;
  bullets: string[];
  renderIcon: () => React.ReactNode;
}

export default function OurProcessSection() {
  const steps: ProcessStep[] = [
    {
      stepNumber: 1,
      badgeTitle: "AI-Powered Discovery Audit",
      heading: "Zero-risk assessment, tailored roadmap",
      bullets: [
        "Free 60-min strategy session to analyze your tech stack",
        "AI-driven scoping tool estimates time/cost savings",
        "Receive a GDPR-compliant project blueprint",
      ],
      renderIcon: () => (
        <svg className="w-7 h-7 text-[#00a2ad]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M12 21a9 9 0 100-18 9 9 0 000 18z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M12 15a3 3 0 100-6 3 3 0 000 6z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M12 3v3m0 12v3M3 12h3m12 0h3"
          />
        </svg>
      ),
    },
    {
      stepNumber: 2,
      badgeTitle: "Hybrid Team Onboarding",
      heading: "Right talent + AI tools from day one",
      bullets: [
        "Match with vetted engineers (800+ experts)",
        "AI-augmented sprint planning for 30% faster kickoff",
        "Dedicated PM + automated progress dashboards",
      ],
      renderIcon: () => (
        <svg className="w-7 h-7 text-[#00a2ad]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      stepNumber: 3,
      badgeTitle: "Build with AI Guardrails",
      heading: "Code, test, deploy—smarter",
      bullets: [
        "AI pair-programming assistants (70% faster dev)",
        "Self-healing test suites (99.9% reliability)",
        "Real-time security and compliance checks",
      ],
      renderIcon: () => (
        <svg className="w-7 h-7 text-[#00a2ad]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      stepNumber: 4,
      badgeTitle: "Scale with Confidence",
      heading: "Your growth, automated",
      bullets: [
        "AI-optimized cloud deployment",
        "Continuous performance monitoring + predictive scaling",
        "90-day post-launch support with AI-driven analytics",
      ],
      renderIcon: () => (
        <svg className="w-7 h-7 text-[#00a2ad]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.75}
            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white text-[#0B1340] font-sans border-t border-slate-100">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Subtitle, CTA Button, Image */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#0B1340] tracking-[-0.03em] leading-[1.12] mb-5">
              Our Process: <br className="hidden sm:inline" />
              AI-Optimized, <br />
              Transparent, Scalable
            </h2>
            <p className="text-slate-600 text-lg sm:text-xl leading-[1.6] mb-7 max-w-md font-normal">
              We blend human expertise with AI precision—delivering faster outcomes without compromising security.
            </p>
            <div className="mb-10">
              <Link
                href="/schedule"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold text-base sm:text-lg shadow-sm transition-all duration-200 cursor-pointer"
              >
                Schedule a Call
              </Link>
            </div>

            {/* Featured Team Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-100 aspect-[4/3] w-full">
              <Image
                src="/company_team_group.jpg"
                alt="Autofya AI-Optimized Team Process"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Right Column: 4 Process Steps */}
          <div className="lg:col-span-7 space-y-12 sm:space-y-14">
            {steps.map((step) => (
              <div key={step.stepNumber} className="flex flex-col items-start group">
                {/* Step Icon */}
                <div className="mb-3.5 p-1">{step.renderIcon()}</div>

                {/* Step Badge */}
                <div className="flex items-center space-x-3 mb-3.5">
                  <span className="inline-flex items-center px-3 py-1 rounded-md text-sm sm:text-base font-bold bg-[#00a2ad]/10 text-[#00a2ad]">
                    Step {step.stepNumber}
                  </span>
                  <span className="text-sm sm:text-base font-semibold text-[#00a2ad]">
                    {step.badgeTitle}
                  </span>
                </div>

                {/* Step Heading */}
                <h3 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-[#0B1340] tracking-[-0.02em] leading-snug mb-4">
                  {step.heading}
                </h3>

                {/* Bullet Points */}
                <ul className="space-y-3 text-slate-600 text-base sm:text-lg font-normal pl-0">
                  {step.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start">
                      <span className="text-slate-400 mr-3 select-none text-lg">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
