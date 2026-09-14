"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function GameStudioPage() {
  const lifecycleSteps = [
    {
      step: "Plan",
      title: "Concept Art & Mechanics Prototyping",
      desc: "Creating initial Game Design Documents (GDD), narrative storyboards, concept art, graybox level blockouts, and core gameplay loop prototypes.",
    },
    {
      step: "Build",
      title: "Engine Engineering & 3D Production",
      desc: "Developing C++ / C# codebases in Unreal Engine 5 & Unity, sculpting 3D characters, crafting environmental VFX, and building multiplayer netcode.",
    },
    {
      step: "Operate",
      title: "Live-Ops, Analytics & Season Passes",
      desc: "Managing cloud game servers (AWS GameLift, Agones), real-time telemetry analytics, continuous season pass content drops, and community live ops.",
    },
  ];

  const services = [
    {
      title: "Full-Cycle Game Development",
      desc: "End-to-end game creation from pre-production GDDs and graybox prototyping to final multi-platform launch on PC, PS5, Xbox, Nintendo Switch, and Mobile.",
      image: "/capabilities_digital_trans.jpg",
      bullets: [
        "Unreal Engine 5 & Unity 3D Engineering",
        "Cross-Platform PC, Console & VR Build Deployment",
        "Multiplayer Authoritative Server Netcode",
      ],
    },
    {
      title: "Full Outsourcing & Co-Development",
      desc: "Augmenting AAA and AA game studios with dedicated co-development squads—including C++ engine developers, technical artists, and QA testers.",
      image: "/hero_ai_engineer.jpg",
      bullets: [
        "Dedicated AAA/AA Co-Development Squads",
        "Seamless Git & Perforce Repository Integration",
        "Flexible Resource Augmentation Models",
      ],
    },
    {
      title: "Environment & Art Production",
      desc: "Creating high-poly and low-poly 3D environments, modular building sets, PBR material texturing, dynamic lighting, and custom Niagara VFX.",
      image: "/hero_cloud_devops.jpg",
      bullets: [
        "Photorealistic 3D Environment Art & Level Props",
        "PBR Material Shaders & Dynamic Lighting",
        "Particle VFX & Niagara Shader Effects",
      ],
    },
    {
      title: "Concept Art & Character Design",
      desc: "2D concept art exploration, 3D digital character sculpting (ZBrush), retopology, skeleton rigging, and fluid motion-capture animations.",
      image: "/cs_digital_wallet.jpg",
      bullets: [
        "2D Concept Art & Character Design Sheets",
        "High-Poly Sculpting & Retopology Optimization",
        "Full Skeleton Rigging & Blendshape Animation",
      ],
    },
    {
      title: "Level Design & Gameplay Mechanics",
      desc: "Crafting intuitive level flows, combat mechanics tuning, AI NPC behavior trees, inventory systems, and in-game economic balancing.",
      image: "/cs_safety_at_sea.jpg",
      bullets: [
        "Graybox Level Layout & Pacing Design",
        "AI Behavior Trees & Boss Fight Scripting",
        "Game Economy Tuning & Progression Systems",
      ],
    },
  ];

  const platforms = [
    { name: "Unreal Engine 5", category: "Game Engine" },
    { name: "Unity 3D", category: "Cross-Platform" },
    { name: "Steam", category: "PC Gaming" },
    { name: "Epic Games Store", category: "PC Distribution" },
    { name: "Meta Quest VR", category: "Virtual Reality" },
    { name: "PlayStation 5", category: "Console" },
    { name: "Xbox Series X/S", category: "Console" },
    { name: "Nintendo Switch", category: "Handheld Console" },
  ];

  const recentGames = [
    {
      title: "Action Runner",
      category: "3D Platformer",
      platform: "PC & Mobile",
      image: "/hero_cloud_devops.jpg",
      desc: "Fast-paced 3D parkour action runner featuring real-time multiplayer leaderboard sync.",
    },
    {
      title: "Football VR",
      category: "VR Sports Simulator",
      platform: "Meta Quest 3",
      image: "/cs_safety_at_sea.jpg",
      desc: "Immersive virtual reality football physics simulation with haptic feedback.",
    },
    {
      title: "Frantic Runners",
      category: "Multiplayer Arena Runner",
      platform: "PC & Console",
      image: "/hero_ai_engineer.jpg",
      desc: "Chaotic 8-player online obstacle course runner with custom physics netcode.",
    },
    {
      title: "Secret Mission Team",
      category: "Tactical Stealth Shooter",
      platform: "Steam",
      image: "/capabilities_digital_trans.jpg",
      desc: "Co-op tactical squad shooter with dynamic lighting and AI enemy behavior trees.",
    },
    {
      title: "Cyber City 2099",
      category: "Sci-Fi RPG Adventure",
      platform: "PC & PS5",
      image: "/cs_digital_wallet.jpg",
      desc: "Open-world cyberpunk RPG with ray-traced lighting and branching narrative quests.",
    },
    {
      title: "Brave Bears Defense",
      category: "Strategy Tower Defense",
      platform: "Mobile & Web",
      image: "/company_team_group.jpg",
      desc: "Strategic 3D tower defense game with 50+ upgradeable hero skills and live-ops.",
    },
  ];

  const roadmapSteps = [
    { step: "01", name: "Concept & GDD", desc: "Game Design Document, artistic direction, & graybox prototype." },
    { step: "02", name: "Vertical Slice", desc: "Playable vertical slice build showcasing core gameplay loop." },
    { step: "03", name: "Alpha Release", desc: "Feature-complete build with full level assets & art production." },
    { step: "04", name: "Beta & Polish", desc: "Bug triage, performance profiling, netcode stress testing, & QA." },
    { step: "05", name: "Global Launch", desc: "Multi-platform store publishing on Steam, PS5, Xbox, & Switch." },
    { step: "06", name: "Live-Ops", desc: "Continuous season pass content drops, patch updates, & server ops." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B1340] selection:bg-[#00a2ad] selection:text-white font-sans">
      {/* Global Header */}
      <Navbar />

      <main className="flex-1">
        {/* ========================================================= */}
        {/* 1. HERO SECTION (CINEMATIC GAME WORLD THEME)               */}
        {/* ========================================================= */}
        <section className="relative bg-[#060D20] text-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
          {/* Cinematic Background Overlay */}
          <div className="absolute inset-0 z-0 opacity-30">
            <Image
              src="/capabilities_digital_trans.jpg"
              alt="Game Studio World Background"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#060D20] via-[#060D20]/95 to-[#0B1A3A]/90 z-0" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Content Box Overlay */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 uppercase tracking-wider">
                    Autofya Game Studio &amp; Interactive Engineering
                  </span>
                </div>

                <div className="bg-white/95 text-[#0B1340] p-8 sm:p-10 rounded-2xl shadow-2xl border border-slate-200 space-y-6">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1340] leading-tight">
                    From Páthos with Lágos, <span className="text-[#00a2ad]">We Build Worlds</span>
                  </h1>

                  <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
                    End-to-end game development, 3D art production, multiplayer network engineering, and cross-platform publishing. By Autofya.
                  </p>

                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                    <Link
                      href="/schedule"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FF9000] hover:bg-[#E68200] text-white font-bold text-base shadow-lg shadow-amber-900/30 transition-all hover:scale-[1.02] cursor-pointer"
                    >
                      <span>Talk to us</span>
                      <span className="text-xl">→</span>
                    </Link>
                    <a
                      href="#game-services"
                      className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0B1340] font-bold text-base transition-all cursor-pointer"
                    >
                      <span>Explore Services</span>
                      <span>↓</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Hero Visual: Live Game Engine Telemetry */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-md lg:max-w-none">
                  <div className="relative rounded-2xl bg-slate-950 border border-white/20 p-5 shadow-2xl overflow-hidden font-mono">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-slate-400">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                        <span className="ml-2 text-slate-300">Autofya-UnrealEngine5.cpp</span>
                      </div>
                      <span className="text-[10px] text-amber-400 font-bold bg-amber-950 px-2 py-0.5 rounded border border-amber-500/30">
                        UE5 ACTIVE
                      </span>
                    </div>

                    <div className="py-4 space-y-2 text-xs text-slate-300">
                      <p className="text-slate-400"># Unreal Engine 5 Nanite &amp; Lumen Telemetry</p>
                      <p className="text-cyan-300">void <span className="text-slate-100">AAutofyaGameMode::SpawnMultiplayerSquad()</span></p>
                      <p className="text-emerald-400">✔ Dedicated Server Netcode: <span className="text-slate-100 font-bold">CONNECTED</span></p>
                      <p className="text-emerald-400">✔ Nanite Triangle Count: <span className="text-slate-100 font-bold">14,200,000</span></p>
                      <p className="text-amber-400">✔ Target FPS (PS5 / Xbox): <span className="text-slate-100 font-bold">60 FPS Locked</span></p>
                    </div>

                    <div className="mt-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs flex items-center justify-between font-sans">
                      <span>🎮 Game Engine Architecture</span>
                      <span className="font-bold text-amber-400">UE5 / Unity</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. HOW WE BRING GAMES TO LIFE (3-STEP LIFECYCLE)          */}
        {/* ========================================================= */}
        <section className="py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                Full Lifecycle Studio
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1340]">
                How We Bring Games to Life
              </h2>
              <div className="w-20 h-1 bg-[#00a2ad] rounded-full mx-auto" />
              <p className="text-slate-600 text-base">
                Full lifecycle game engineering from concept prototyping to live ops scaling.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {lifecycleSteps.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm hover:border-[#00a2ad] hover:shadow-xl transition-all duration-300 space-y-4 group"
                >
                  <span className="text-xs font-black uppercase tracking-widest text-[#00a2ad] bg-cyan-100 px-3 py-1 rounded-full">
                    Step {idx + 1}: {item.step}
                  </span>

                  <h3 className="text-2xl font-bold text-[#0B1340] group-hover:text-[#00a2ad] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. OUR SERVICES (ALTERNATING VISUAL FEATURE BLOCKS)       */}
        {/* ========================================================= */}
        <section id="game-services" className="py-24 bg-white border-b border-slate-200 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
            
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                Core Capabilities
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1340]">
                Our Services
              </h2>
              <div className="w-20 h-1 bg-[#00a2ad] rounded-full mx-auto" />
            </div>

            <div className="space-y-16">
              {services.map((srv, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div
                    key={idx}
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 ${
                      isEven ? "" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Visual Graphic */}
                    <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200 group">
                        <Image
                          src={srv.image}
                          alt={srv.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 40vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`lg:col-span-7 space-y-4 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#00a2ad]">
                        Service 0{idx + 1}
                      </span>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1340]">
                        {srv.title}
                      </h3>

                      <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                        {srv.desc}
                      </p>

                      <div className="space-y-2.5 pt-2">
                        {srv.bullets.map((b, bIdx) => (
                          <div key={bIdx} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#0B1340]">
                            <span className="w-5 h-5 rounded-full bg-cyan-100 text-[#00a2ad] flex items-center justify-center text-xs font-bold shrink-0">
                              ✓
                            </span>
                            <span>{b}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. PLATFORMS WE SUPPORT                                   */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                Cross-Platform Deployment
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
                Platforms We Support
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {platforms.map((plat, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm text-center space-y-1 hover:border-[#00a2ad] transition-colors"
                >
                  <p className="text-sm font-bold text-[#0B1340]">{plat.name}</p>
                  <p className="text-[10px] text-slate-400 font-medium">{plat.category}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. OUR RECENT GAMES SHOWCASE GRID                         */}
        {/* ========================================================= */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                Published Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1340]">
                Our Recent Games
              </h2>
              <div className="w-20 h-1 bg-[#00a2ad] rounded-full mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentGames.map((game, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={game.image}
                      alt={game.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#0B1340]">
                      {game.platform}
                    </span>
                  </div>

                  <div className="p-6 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#00a2ad]">
                      {game.category}
                    </span>
                    <h3 className="text-xl font-bold text-[#0B1340]">
                      {game.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed">
                      {game.desc}
                    </p>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    <Link
                      href="/schedule"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#00a2ad] hover:underline"
                    >
                      <span>View Case Study</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. PROCESS & DELIVERY ROADMAP                             */}
        {/* ========================================================= */}
        <section className="py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                Production Pipeline
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1340]">
                Process &amp; Delivery Map
              </h2>
              <div className="w-20 h-1 bg-[#00a2ad] rounded-full mx-auto" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {roadmapSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center space-y-2 hover:border-[#00a2ad] transition-colors"
                >
                  <span className="w-8 h-8 rounded-full bg-cyan-100 text-[#00a2ad] font-black text-xs inline-flex items-center justify-center">
                    {step.step}
                  </span>
                  <h4 className="text-base font-bold text-[#0B1340]">{step.name}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 7. CALLOUT BANNER CARD                                   */}
        {/* ========================================================= */}
        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-[#0B1340] via-[#122268] to-[#0B1340] rounded-3xl border border-white/15 p-8 lg:p-14 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Callout Text Left */}
              <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
                <span className="text-xs uppercase tracking-widest font-extrabold text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/30">
                  Build Your Next Hit Game
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  Ready to Build Worlds With Autofya Game Studio?
                </h2>
                <p className="text-slate-300 text-base sm:text-lg max-w-2xl">
                  Connect with Autofya&apos;s game producers and Unreal Engine/Unity architects to prototype your game idea, augment your production team, or co-develop multi-platform titles.
                </p>

                <div className="pt-2">
                  <Link
                    href="/schedule"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FF9000] hover:bg-[#E68200] text-white font-bold text-base shadow-xl transition-all cursor-pointer hover:scale-105"
                  >
                    <span>Schedule a Game Studio Call</span>
                    <span className="text-xl">→</span>
                  </Link>
                </div>
              </div>

              {/* Team Graphic Right */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-full max-w-sm h-64 rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                  <Image
                    src="/company_team_group.jpg"
                    alt="Autofya Game Studio Squad"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-bold text-white">Autofya Game Studio Squad</p>
                    <p className="text-xs text-slate-300">UE5 Engineers &amp; 3D Game Artists</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
