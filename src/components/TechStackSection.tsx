import React from "react";

export default function TechStackSection() {
  const row1 = [
    "ReactJs",
    "NextJs",
    "Python",
    "Django",
    "FastAPI",
    "GoLang",
    "NodeJs",
    "ExpressJs",
    "PostgresQL",
    "MongoDB",
    "Redis",
    "AI Agents",
    "RAG",
    "Automation",
  ];

  const row2 = [
    "Flutter",
    "React Native",
    "Javascript",
    "PHP",
    "MySQL",
    "Wordpress",
    "Celery",
    "Docker",
    "Kubernetes",
    "AWS",
    "Terraform",
    "Github Actions",
    "Jenkins",
    "Ansible",
    "N8N",
    "Zapier",
  ];

  // Tripled array for completely seamless 100% marquee loop
  const marqueeRow1 = [...row1, ...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2, ...row2];

  return (
    <section className="py-24 bg-[#0B1340] text-white font-sans overflow-hidden border-t border-[#1E2E62]/40">
      {/* Container Bounded Wrapper */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Title matching Brain Station 23 screenshot */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-3">
            Yes! We cover your tech stack.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-normal max-w-xl mx-auto">
            Our 150+ team has expertise in almost every programming language.
          </p>
        </div>

        {/* CONTINUOUS MARQUEE ROWS BOUNDED WITHIN CONTAINER */}
        <div className="space-y-6 sm:space-y-8 py-2 overflow-hidden relative">
          
          {/* Row 1: Scrolling Left */}
          <div className="relative w-full overflow-hidden">
            <div className="animate-marquee items-center">
              {marqueeRow1.map((item, idx) => (
                <span
                  key={`${item}-${idx}`}
                  className="font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-white hover:text-[#00A3AD] transition-colors cursor-pointer px-6 sm:px-10 py-3 whitespace-nowrap select-none opacity-95 hover:opacity-100 tracking-tight"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Row 2: Scrolling Right */}
          <div className="relative w-full overflow-hidden">
            <div className="animate-marquee-reverse items-center">
              {marqueeRow2.map((item, idx) => (
                <span
                  key={`${item}-${idx}`}
                  className="font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-white hover:text-[#00A3AD] transition-colors cursor-pointer px-6 sm:px-10 py-3 whitespace-nowrap select-none opacity-95 hover:opacity-100 tracking-tight"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
