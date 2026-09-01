import React from "react";
import Image from "next/image";

export default function JoinOurTeamSection() {
  return (
    <section className="py-20 sm:py-24 bg-[#0B1340] text-white font-sans overflow-hidden border-t border-[#1E2E62]/40 relative">
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text & CTA Button */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <h2 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-[-0.03em] leading-tight mb-4">
              Join Our Team
            </h2>
            <p className="text-slate-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-8 max-w-md">
              We always welcome talented professionals to strengthen our team.
            </p>
            <div>
              <a
                href="#careers"
                className="inline-flex items-center justify-center px-7 py-3 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-[#0B1340] font-bold text-base sm:text-lg shadow-md transition-all duration-200"
              >
                Visit Career
              </a>
            </div>
          </div>

          {/* Right Column: Group Team Image */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 aspect-[16/10] w-full">
              <Image
                src="/company_team_group.jpg"
                alt="Autofya Team Members Collaborating"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
