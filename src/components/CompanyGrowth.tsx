"use client";

import React, { useState } from "react";

interface GrowthData {
  year: string;
  employees: number;
  label: string;
}

const growthData: GrowthData[] = [
  { year: "2023", employees: 5, label: "5 Team Members" },
  { year: "2024", employees: 28, label: "28 Team Members" },
  { year: "2025", employees: 62, label: "62 Team Members" },
  { year: "2026", employees: 97, label: "97 Team Members" },
];

export default function CompanyGrowth() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const maxEmployees = 100;
  const yTicks = [0, 20, 40, 60, 80, 100];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-white border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT COLUMN - TEXT CONTENT */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1340] leading-tight tracking-tight mb-6">
              Company Growth
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              From 2023 to 2026, the company has expanded rapidly from a founding
              team of 5 to 97 talents, evolving to become a leading Software
              Development & IT Service Provider. We have expanded our global reach
              and built an outstanding reputation in the course of our journey.
            </p>
          </div>

          {/* RIGHT COLUMN - GROWTH CHART GRAPH */}
          <div className="lg:col-span-7">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-slate-50/80 border border-slate-200/80 shadow-sm transition-all duration-300">
              {/* CHART HEADER */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#00a2ad]">
                  Team Expansion Trajectory (5 → 97)
                </span>
                <span className="text-xs font-semibold text-slate-500 bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
                  2023 - 2026
                </span>
              </div>

              {/* BAR CHART DISPLAY */}
              <div className="relative flex items-stretch h-[320px] sm:h-[380px] pt-4 pb-8 pl-12 sm:pl-14 pr-4">
                {/* Y-AXIS LABEL */}
                <div className="absolute left-1 top-1/2 -translate-y-1/2 -rotate-90 origin-center text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest pointer-events-none whitespace-nowrap">
                  Employee Numbers
                </div>

                {/* Y-AXIS GRID LINES & TICKS */}
                <div className="absolute inset-x-12 sm:inset-x-14 top-4 bottom-8 flex flex-col justify-between pointer-events-none">
                  {yTicks
                    .slice()
                    .reverse()
                    .map((tick) => (
                      <div key={tick} className="relative flex items-center w-full">
                        <span className="absolute -left-9 text-[11px] font-semibold text-slate-400">
                          {tick}
                        </span>
                        <div className="w-full border-b border-slate-200/80 border-dashed" />
                      </div>
                    ))}
                </div>

                {/* BARS CONTAINER */}
                <div className="relative z-10 flex-1 flex items-end justify-around h-full">
                  {growthData.map((item, idx) => {
                    const heightPercent = Math.max(
                      (item.employees / maxEmployees) * 100,
                      4
                    );
                    const isHovered = hoveredIdx === idx;

                    return (
                      <div
                        key={item.year}
                        onMouseEnter={() => setHoveredIdx(idx)}
                        onMouseLeave={() => setHoveredIdx(null)}
                        className="group relative flex flex-col items-center h-full justify-end w-12 sm:w-16 md:w-20 cursor-pointer"
                      >
                        {/* HOVER TOOLTIP */}
                        {isHovered && (
                          <div className="absolute -top-12 z-20 px-3 py-1.5 rounded-lg bg-[#0B1340] text-white text-xs font-bold shadow-lg whitespace-nowrap transition-all">
                            {item.label}
                          </div>
                        )}

                        {/* BAR WITH GRADIENT & HOVER ANIMATION */}
                        <div
                          className={`w-full rounded-t-xl transition-all duration-500 bg-gradient-to-t ${
                            isHovered
                              ? "from-[#007f88] to-[#00d5e2] shadow-md scale-y-[1.02]"
                              : "from-[#00a2ad] to-[#2cd6e4]"
                          }`}
                          style={{ height: `${heightPercent}%` }}
                        />

                        {/* X-AXIS YEAR LABEL */}
                        <div className="absolute -bottom-7 text-xs sm:text-sm font-bold text-slate-600 group-hover:text-[#00a2ad] transition-colors">
                          {item.year}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* X-AXIS BOTTOM LABEL */}
              <div className="text-center mt-4 text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-wider">
                Calendar Years
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
