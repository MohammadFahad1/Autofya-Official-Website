"use client";

import React, { useState } from "react";

interface BulletItem {
  label?: string;
  text: string;
}

interface ValueItem {
  id: string;
  title: string;
  subtitle: string;
  bullets: BulletItem[];
}

const leadershipValues: ValueItem[] = [
  {
    id: "ownership",
    title: "Ownership",
    subtitle: "Take responsibility and own the challenges",
    bullets: [
      {
        label: "Client partnership",
        text: "We consistently exceed client expectations and suggest better solutions.",
      },
      {
        label: "Grow people",
        text: "We hire, develop and care for people, being the best employer for them.",
      },
      {
        label: "Organizational ownership",
        text: "we love our organization and are frugal, innovative, and simplified for better results. Organizational success brings success for all.",
      },
    ],
  },
  {
    id: "passion",
    title: "Passion & Commitment",
    subtitle: "Be reliable, dedicated, and smart working",
    bullets: [
      {
        text: "We love what we do, and we do what we love.",
      },
      {
        text: "Passion enables us to learn and be curious.",
      },
      {
        text: "We strive to deliver what we commit, thus earning trust and respect.",
      },
    ],
  },
  {
    id: "agility",
    title: "Agility & Excellence",
    subtitle: "Deliver the best solutions, and stay agile beyond boundaries",
    bullets: [
      {
        text: "We strive for excellence; we lead by example.",
      },
      {
        text: "We plan agile, deliver results in a short cycle, and make continuous improvements.",
      },
      {
        text: "We strive relentlessly, and we take action for continuous improvement.",
      },
    ],
  },
  {
    id: "team-spirit",
    title: "Team Spirit",
    subtitle: "Be humble and value relationships.",
    bullets: [
      {
        text: "We stay humble and work as a team. Humility and empathy are at our core.",
      },
      {
        text: "Our success brings broader responsibilities and challenges. We live that expectation.",
      },
      {
        text: "We value relationships with our clients, employees, shareholders, and society; we continuously build on them.",
      },
    ],
  },
  {
    id: "honesty",
    title: "Honesty",
    subtitle: "Say what you think and do what you say",
    bullets: [
      {
        text: "In all our actions, we are always ethical and sincere.",
      },
      {
        text: "We share our views and concerns, even in disagreements – we strive to be the trusted advisor to our clients and colleagues.",
      },
      {
        text: "We are admired and respected for our integrity and fairness.",
      },
    ],
  },
];

const ownpathLetters = ["O", "W", "N", "P", "A", "T", "H"];

export default function LeadershipValues() {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#F8FAFC]/80 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* LEFT COLUMN - CENTER ALIGNED, FULL CONTENT HEIGHT */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full min-h-full items-center text-center">
            {/* CENTERED HEADING */}
            <div className="text-center w-full">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0B1340] leading-tight tracking-tight">
                Leadership <br />
                <span className="block mt-1 text-[#00a2ad]">Values</span>
              </h2>
            </div>

            {/* DESKTOP: VERTICALLY STACKED & CENTERED HUGE BOLD OWNPATH LETTERS */}
            <div className="hidden lg:flex flex-col justify-between items-center flex-1 w-full mt-8 py-4 min-h-[600px]">
              {ownpathLetters.map((letter, idx) => (
                <div
                  key={idx}
                  className="group relative flex items-center justify-center w-full cursor-default text-center"
                >
                  <span
                    className="text-7xl lg:text-8xl xl:text-9xl 2xl:text-[7.5rem] font-black tracking-widest uppercase select-none leading-none bg-clip-text text-transparent bg-cover transition-transform duration-300 group-hover:scale-125"
                    style={{
                      backgroundImage: `url('/company_team_group.jpg')`,
                      backgroundPosition: `${idx * 16}% center`,
                      backgroundSize: "600% auto",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      filter: "contrast(1.3) brightness(0.95)",
                    }}
                  >
                    {letter}
                  </span>
                </div>
              ))}
            </div>

            {/* MOBILE & TABLET: CENTERED HORIZONTAL OWNPATH WORDMARK */}
            <div className="flex lg:hidden mt-8 justify-center w-full overflow-x-auto pb-2">
              <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                {ownpathLetters.map((letter, idx) => (
                  <span
                    key={idx}
                    className="text-5xl sm:text-6xl font-black uppercase select-none bg-clip-text text-transparent bg-cover"
                    style={{
                      backgroundImage: `url('/company_team_group.jpg')`,
                      backgroundPosition: `${idx * 16}% center`,
                      backgroundSize: "600% auto",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      filter: "contrast(1.3) brightness(0.95)",
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - VALUE ITEMS LIST */}
          <div className="lg:col-span-7 flex flex-col space-y-12 sm:space-y-16 justify-between">
            {leadershipValues.map((item) => {
              const isActive = activeId === item.id;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveId(item.id)}
                  onMouseLeave={() => setActiveId(null)}
                  className={`group relative pl-6 sm:pl-8 border-l-2 transition-all duration-300 ${
                    isActive
                      ? "border-[#00a2ad] translate-x-1"
                      : "border-slate-200 hover:border-[#00a2ad]/60"
                  }`}
                >
                  {/* TITLE & SUBTITLE */}
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0B1340] leading-snug tracking-tight">
                    {item.title} –{" "}
                    <span className="font-semibold text-slate-700">
                      {item.subtitle}
                    </span>
                  </h3>

                  {/* BULLET POINTS */}
                  <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                    {item.bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start text-slate-600 text-sm sm:text-base leading-relaxed"
                      >
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00a2ad] mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300" />
                        <span>
                          {bullet.label && (
                            <strong className="font-semibold text-slate-800">
                              {bullet.label} –{" "}
                            </strong>
                          )}
                          {bullet.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
