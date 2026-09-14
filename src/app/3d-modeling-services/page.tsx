"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ThreeDModelingServicesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const softwareStack = [
    { name: "KeyShot", category: "Photorealistic Rendering" },
    { name: "Blender", category: "3D Modeling & Animation" },
    { name: "Autodesk Maya", category: "3D Rigging & Sculpting" },
    { name: "Unity", category: "Real-Time WebGL & AR" },
    { name: "Unreal Engine 5", category: "Photorealistic Real-Time" },
    { name: "Substance 3D", category: "PBR Material Texturing" },
  ];

  const industryCards = [
    {
      title: "Mechanical & Industrial Engineering",
      desc: "Precision 3D CAD modeling of machinery, engine assemblies, robotics, and industrial manufacturing components for prototyping and simulation.",
      image: "/hero_ai_engineer.jpg",
      tag: "CAD / Industrial",
    },
    {
      title: "Architectural & Civil Modeling",
      desc: "Architectural BIM 3D modeling, photorealistic interior and exterior rendering, and urban master plan walkthrough animations.",
      image: "/capabilities_digital_trans.jpg",
      tag: "BIM / Architecture",
    },
    {
      title: "Aerospace & Defense Modeling",
      desc: "High-precision CAD models for aircraft components, defense equipment, telemetry simulation, and aerodynamic visualization.",
      image: "/hero_cloud_devops.jpg",
      tag: "Aerospace / CAD",
    },
    {
      title: "Automotive & Transportation",
      desc: "Class-A CAD surfacing for automotive body panels, chassis components, and interactive WebGL 3D EV showroom configurators.",
      image: "/cs_digital_wallet.jpg",
      tag: "Automotive / AR",
    },
  ];

  const renderingGrid = [
    {
      icon: "🖼️",
      title: "Hyper-Realistic Product Rendering",
      desc: "Studio lighting setup, PBR material shaders, and 8K ultra-HD product visual renders for e-commerce, marketing, and catalogs.",
    },
    {
      icon: "🎬",
      title: "3D Industrial & Technical Animation",
      desc: "Exploded view animations, assembly process walkthroughs, and mechanical motion graphics to demonstrate complex product mechanics.",
    },
    {
      icon: "👓",
      title: "Interactive AR/VR & Metaverse Assets",
      desc: "Optimized low-poly 3D models with baked PBR textures for WebGL, WebAR, Unity, Unreal Engine, and spatial computing apps.",
    },
    {
      icon: "🏛️",
      title: "Exterior & Interior Architectural Visualization",
      desc: "Ray-traced photorealistic lighting, material textures, camera paths, and 360-degree virtual tour renders.",
    },
    {
      icon: "👤",
      title: "3D Character & Asset Sculpting",
      desc: "High-poly digital sculpting, retopology, skeleton rigging, and facial blendshape animations for gaming and virtual avatars.",
    },
    {
      icon: "🔬",
      title: "Medical & Scientific 3D Visualization",
      desc: "Anatomic CAD modeling, medical device assembly walkthroughs, and cellular micro-process 3D scientific renders.",
    },
    {
      icon: "💡",
      title: "Industrial Lighting & PBR Texturing",
      desc: "Physically Based Rendering (PBR) material creation, custom procedural shaders, and HDRI studio lighting setups.",
    },
    {
      icon: "📐",
      title: "3D Scan Cleanup & Reverse Engineering",
      desc: "Point cloud scan cleanup, mesh retopology, surface reconstruction, and parametric CAD conversion from physical scans.",
    },
  ];

  const faqs = [
    {
      question: "What software formats do you deliver for 3D models (OBJ, FBX, STEP, GLTF)?",
      answer:
        "We deliver 3D assets in all industry-standard formats based on your requirements, including STEP/IGES (for CAD/CAM engineering), OBJ/FBX (for 3D software), and GLTF/GLB/USDZ (optimized for WebGL and mobile AR).",
    },
    {
      question: "How long does a custom 3D product rendering or animation take?",
      answer:
        "High-resolution 3D product renders are delivered within 3 to 5 business days. Complex 3D technical animations or interactive WebGL configurators take 2 to 4 weeks depending on detail and asset count.",
    },
    {
      question: "Can your 3D models be used in real-time WebGL, AR, or game engines (Unity, Unreal)?",
      answer:
        "Yes! Our 3D artists specialize in polygon reduction, UV unwrapping, PBR texture baking, and WebGL optimization to ensure 60 FPS real-time performance across browsers, mobile AR, Unity, and Unreal Engine.",
    },
    {
      question: "Do you provide 3D CAD modeling from 2D drawings or physical prototypes?",
      answer:
        "Yes! We can create accurate 3D CAD models directly from 2D engineering drawings, PDF schematics, concept sketches, or physical 3D scan point clouds.",
    },
    {
      question: "How does Autofya handle IP protection and NDA confidentiality for CAD designs?",
      answer:
        "Your proprietary CAD designs, blueprints, and 3D assets remain 100% your IP. We operate under strict mutual Non-Disclosure Agreements (NDAs) with encrypted file transfer protocols.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B1340] selection:bg-[#00a2ad] selection:text-white font-sans">
      {/* Global Header */}
      <Navbar />

      <main className="flex-1">
        {/* ========================================================= */}
        {/* 1. HERO SECTION (3D MESH WIREFRAME THEME)                 */}
        {/* ========================================================= */}
        <section className="relative bg-[#060D20] text-white pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden">
          {/* Wireframe Ambient Graphic Background */}
          <div className="absolute inset-0 z-0 opacity-20">
            <Image
              src="/capabilities_digital_trans.jpg"
              alt="3D Modeling Mesh Background"
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
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-200 uppercase tracking-wider">
                    3D Studio &amp; Spatial Engineering
                  </span>
                </div>

                <div className="bg-white/95 text-[#0B1340] p-8 sm:p-10 rounded-2xl shadow-2xl border border-slate-200 space-y-6">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0B1340] leading-tight">
                    3D Modelling &amp; Rendering Services for <span className="text-[#00a2ad]">Tomorrow&apos;s Industries</span>
                  </h1>

                  <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
                    Photorealistic 3D modeling, industrial CAD visualization, product rendering, AR/VR assets, and AI-driven 3D generation. By Autofya.
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
                      href="#complex-industries"
                      className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-[#0B1340] font-bold text-base transition-all cursor-pointer"
                    >
                      <span>Explore 3D Services</span>
                      <span>↓</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Hero Visual: 3D Telemetry Card */}
              <div className="lg:col-span-5 relative flex justify-center">
                <div className="relative w-full max-w-md lg:max-w-none">
                  <div className="relative rounded-2xl bg-slate-950 border border-white/20 p-5 shadow-2xl overflow-hidden font-mono">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-slate-400">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-amber-500 inline-block" />
                        <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                        <span className="ml-2 text-slate-300">Autofya-3D-Viewport.gltf</span>
                      </div>
                      <span className="text-[10px] text-cyan-400 font-bold bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/30">
                        8K RAY-TRACED
                      </span>
                    </div>

                    <div className="py-4 space-y-2 text-xs text-slate-300">
                      <p className="text-slate-400"># Real-Time PBR Shading Telemetry</p>
                      <p className="text-cyan-300">✔ Polygons: <span className="text-slate-100 font-bold">1,240,000 Triangles</span></p>
                      <p className="text-cyan-300">✔ Material Shader: <span className="text-slate-100">Anisotropic Metal PBR</span></p>
                      <p className="text-emerald-400">✔ Ray-Tracing FPS: <span className="text-[#00a2ad] font-bold">60 FPS (Sub-10ms)</span></p>
                      <p className="text-amber-400">✔ Export Formats: <span className="text-slate-100 font-bold">STEP, FBX, GLTF 2.0</span></p>
                    </div>

                    <div className="mt-2 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs flex items-center justify-between font-sans">
                      <span>🎨 Photorealistic 3D Render</span>
                      <span className="font-bold text-[#00a2ad]">Studio Ready</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. SOFTWARE TOOLING BAR                                   */}
        {/* ========================================================= */}
        <section className="py-16 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-500">
              Industry-Standard 3D Software Stack
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-center opacity-85 hover:opacity-100 transition-opacity">
              {softwareStack.map((sw, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-white border border-slate-200/80 shadow-sm text-center group cursor-default"
                >
                  <p className="text-base sm:text-lg font-black text-[#0B1340] group-hover:text-[#00a2ad] transition-colors">
                    {sw.name}
                  </p>
                  <p className="text-[10px] text-slate-400 font-medium">
                    {sw.category}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. 3D MODELING FOR COMPLEX INDUSTRIES                     */}
        {/* ========================================================= */}
        <section id="complex-industries" className="py-24 bg-white border-b border-slate-200 scroll-mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                Targeted Expertise
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1340]">
                3D Modeling Services for Complex Industries
              </h2>
              <div className="w-20 h-1 bg-[#00a2ad] rounded-full mx-auto" />
              <p className="text-slate-600 text-base">
                Precision 3D CAD modeling and rendering engineered for high-tech industries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industryCards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                >
                  <div className="relative h-64 w-full overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#0B1340]">
                      {card.tag}
                    </span>
                  </div>

                  <div className="p-8 space-y-3">
                    <h3 className="text-2xl font-bold text-[#0B1340] group-hover:text-[#00a2ad] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. 3D RENDERING SERVICES & INDUSTRIAL ANIMATION           */}
        {/* ========================================================= */}
        <section className="py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                Visual Spectrum
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B1340]">
                3D Rendering Services &amp; Industrial Animation
              </h2>
              <div className="w-20 h-1 bg-[#00a2ad] rounded-full mx-auto" />
              <p className="text-slate-600 text-base">
                Hyper-realistic rendering and 3D animation to showcase your products before manufacturing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {renderingGrid.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-[#00a2ad] hover:shadow-md transition-all space-y-3 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 text-[#00a2ad] flex items-center justify-center text-2xl group-hover:bg-[#00a2ad] group-hover:text-white transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#0B1340] group-hover:text-[#00a2ad] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. FEATURED PRODUCT SHOWCASE: 3D + AI: HOLOGUIDE AI       */}
        {/* ========================================================= */}
        <section className="py-24 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 text-white rounded-3xl border border-slate-800 p-8 sm:p-12 lg:p-14 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs uppercase tracking-widest font-extrabold text-amber-400 bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/30">
                  Global Innovation
                </span>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  3D + AI: HoloGuide AI
                </h2>

                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  Integrating generative AI with interactive 3D holograms to deliver AI-driven 3D virtual avatars and industrial maintenance guides for AR smart glasses and spatial web applications.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                    <p className="text-sm font-bold text-amber-400">Real-Time 3D Renders</p>
                    <p className="text-xs text-slate-300 mt-1">Sub-second WebGL holographic avatar streaming.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700">
                    <p className="text-sm font-bold text-cyan-400">Conversational AI Voice</p>
                    <p className="text-xs text-slate-300 mt-1">Multi-turn dialogue engine with CAD breakdown.</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-md h-72 sm:h-80 rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                  <Image
                    src="/hero_ai_engineer.jpg"
                    alt="3D AI HoloGuide Innovation"
                    fill
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-bold text-white">HoloGuide AI Spatial Avatar</p>
                    <p className="text-xs text-slate-300">Interactive 3D Holographic Assistance</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. COMPLEX STORIES, RENDERED SIMPLE (CASE STUDY SHOWCASE) */}
        {/* ========================================================= */}
        <section className="py-24 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                  Success Showcase
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
                  Complex Stories, Rendered Simple
                </h2>
              </div>

              <Link
                href="/schedule"
                className="px-6 py-2.5 rounded-full bg-[#FF9000] hover:bg-[#E68200] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
              >
                View 3D Portfolio
              </Link>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-12 items-center">
              
              {/* Image Left */}
              <div className="lg:col-span-6 relative h-80 sm:h-96 w-full">
                <Image
                  src="/cs_safety_at_sea.jpg"
                  alt="Automotive Interactive AR Showroom"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-transparent to-transparent" />
              </div>

              {/* Text Content Right */}
              <div className="lg:col-span-6 p-8 sm:p-12 space-y-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00a2ad] bg-cyan-100 px-3 py-1 rounded-full">
                  Automotive Configurator
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1340] leading-tight">
                  Automotive Interactive AR Showroom
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Autofya created a real-time WebGL 3D configurator for a leading automotive OEM, allowing customers to customize car colors, trim materials, and interior options in 8K photorealistic quality.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-2 border-t border-slate-200">
                  <div>
                    <p className="text-3xl font-black text-[#0B1340]">85%</p>
                    <p className="text-xs text-slate-500 font-medium">Increase in User Engagement</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-[#00a2ad]">99.8%</p>
                    <p className="text-xs text-slate-500 font-medium">Photorealistic Asset Accuracy</p>
                  </div>
                </div>
              </div>

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
                  3D &amp; Spatial Innovation
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  Ready to Elevate Your Product with Photorealistic 3D?
                </h2>
                <p className="text-slate-300 text-base sm:text-lg max-w-2xl">
                  Connect with Autofya&apos;s 3D solution architects to render your products, create industrial CAD animations, or build WebGL/AR configurators.
                </p>

                <div className="pt-2">
                  <Link
                    href="/schedule"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FF9000] hover:bg-[#E68200] text-white font-bold text-base shadow-xl transition-all cursor-pointer hover:scale-105"
                  >
                    <span>Schedule a 3D Consultation</span>
                    <span className="text-xl">→</span>
                  </Link>
                </div>
              </div>

              {/* Team Graphic Right */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-full max-w-sm h-64 rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                  <Image
                    src="/company_team_group.jpg"
                    alt="Autofya 3D Studio Squad"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-sm font-bold text-white">Autofya 3D Studio Squad</p>
                    <p className="text-xs text-slate-300">CAD Modeler &amp; Ray-Tracing Engineers</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 8. FAQS SECTION                                         */}
        {/* ========================================================= */}
        <section className="py-24 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-3">
              <span className="text-xs uppercase tracking-widest font-extrabold text-[#00a2ad]">
                Got Questions?
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B1340]">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Contact Sidebar Box */}
              <div className="lg:col-span-4 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-[#0B1340] mb-2">
                    Still Have Questions?
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Can&apos;t find the answer you&apos;re looking for? Reach out to our 3D solution architects directly.
                  </p>
                </div>

                <div className="space-y-3 pt-2 text-sm">
                  <div>
                    <span className="text-xs text-slate-400 font-bold uppercase block">Email Us</span>
                    <a href="mailto:sales@autofya.com" className="text-[#00a2ad] font-semibold hover:underline">
                      sales@autofya.com
                    </a>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-bold uppercase block">Call Us</span>
                    <span className="text-[#0B1340] font-semibold">
                      +1 606 773 7443
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    href="/schedule"
                    className="block text-center w-full py-3 rounded-full bg-[#FF9000] hover:bg-[#E68200] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                  >
                    Schedule a Consultation
                  </Link>
                </div>
              </div>

              {/* Right Accordion FAQs */}
              <div className="lg:col-span-8 space-y-4">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-all"
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-[#0B1340] text-base sm:text-lg hover:text-[#00a2ad] transition-colors cursor-pointer"
                      >
                        <span>{faq.question}</span>
                        <span className="text-[#00a2ad] font-extrabold text-xl shrink-0">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-4">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
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
