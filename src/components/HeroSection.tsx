"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Drag state
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const dragStartX = useRef<number | null>(null);

  const slideData = [
    {
      id: 0,
      title: "Scale Your Dev Team With",
      highlight: "Top 1% Global Talents",
      titleEnd: "in 4 Weeks",
      subtitle:
        "From startups to enterprises—build scalable, secure software with our 20+ years of expertise and ISO 27001-certified teams.",
      ctaText: "Hire Your Team Now",
      ctaLink: "#hire-team",
      badgeTop: { value: "20+", label: "Years of Experience" },
      badgeBottom: { value: "88%+", label: "Employee Retention" },
      imageTop: "/hero_developer.jpg",
      imageTopAlt: "Senior Software Developer & Tech Lead",
      imageBottom: "/hero_team_collaboration.jpg",
      imageBottomAlt: "Autofya Engineering Team Collaboration",
    },
    {
      id: 1,
      title: "Accelerate AI & Cloud Automation With",
      highlight: "Dedicated Tech Squads",
      titleEnd: "to Scale Faster",
      subtitle:
        "Deploy custom AI models, neural automation workflows, and high-performance microservices with world-class engineers.",
      ctaText: "Build Your AI Squad",
      ctaLink: "#build-squad",
      badgeTop: { value: "150+", label: "AI & Software Projects" },
      badgeBottom: { value: "99.4%", label: "On-Time Delivery" },
      imageTop: "/hero_ai_engineer.jpg",
      imageTopAlt: "AI Architect and Solution Engineer",
      imageBottom: "/hero_cloud_devops.jpg",
      imageBottomAlt: "Cloud DevOps and Infrastructure Team",
    },
  ];

  const goToSlide = useCallback(
    (index: number) => {
      setActiveSlide(index);
    },
    []
  );

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % slideData.length);
  }, [slideData.length]);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + slideData.length) % slideData.length);
  }, [slideData.length]);

  // Autoplay timer
  useEffect(() => {
    if (isDragging) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide, isDragging]);

  // Drag interaction handlers
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    dragStartX.current = clientX;
    setDragOffset(0);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging || dragStartX.current === null) return;
    const diff = clientX - dragStartX.current;
    setDragOffset(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    const threshold = 60; // minimum drag distance in px
    if (dragOffset < -threshold) {
      nextSlide();
    } else if (dragOffset > threshold) {
      prevSlide();
    }
    setIsDragging(false);
    setDragOffset(0);
    dragStartX.current = null;
  };

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] pt-10 pb-20 lg:pt-16 lg:pb-28 font-sans">
      {/* Background Decorator Lines (Matching Brain Station 23 Line Art) */}
      <div className="absolute inset-0 pointer-events-none opacity-25 overflow-hidden">
        <svg
          className="absolute right-0 top-0 w-full h-full text-slate-400"
          viewBox="0 0 1000 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M200 -100 Q600 200 1100 0 T1600 400"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M100 -50 Q500 250 1000 50 T1500 450"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M0 0 Q400 300 900 100 T1400 500"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M300 200 Q700 500 1200 300 T1700 700"
            stroke="#008494"
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity="0.5"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Slider Viewport Container */}
        <div
          className={`overflow-hidden select-none ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          onMouseDown={(e) => handleDragStart(e.clientX)}
          onMouseMove={(e) => handleDragMove(e.clientX)}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
          onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
          onTouchEnd={handleDragEnd}
        >
          {/* Horizontal Track (Brain Station 23 Slide Effect) */}
          <div
            className="flex w-full"
            style={{
              transform: `translateX(calc(-${activeSlide * 100}% + ${dragOffset}px))`,
              transition: isDragging
                ? "none"
                : "transform 650ms cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          >
            {slideData.map((slide) => (
              <div
                key={slide.id}
                className="w-full flex-shrink-0 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center px-1"
              >
                {/* LEFT COLUMN: Copy, Headline & CTA */}
                <div className="lg:col-span-6 flex flex-col justify-center text-left space-y-8">
                  <div className="space-y-6">
                    <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#0B1340] leading-[1.15] tracking-tight">
                      {slide.title}{" "}
                      <span className="text-[#00a2ad]">
                        {slide.highlight}
                      </span>{" "}
                      {slide.titleEnd}
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-xl">
                      {slide.subtitle}
                    </p>
                  </div>

                  {/* Solid Orange Pill CTA Button (Matching Brain Station 23) */}
                  <div className="pt-2">
                    <a
                      href={slide.ctaLink}
                      onClick={(e) => {
                        if (Math.abs(dragOffset) > 10) e.preventDefault();
                      }}
                      className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold text-white bg-[#FF9000] hover:bg-[#E68200] active:scale-95 shadow-md transition-all duration-200"
                    >
                      {slide.ctaText}
                    </a>
                  </div>

                  {/* Carousel Pagination Dots */}
                  <div className="flex items-center gap-3 pt-6">
                    {slideData.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          goToSlide(idx);
                        }}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          activeSlide === idx
                            ? "w-9 bg-[#0B1340]"
                            : "w-2.5 bg-slate-300 hover:bg-slate-400"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* RIGHT COLUMN: Asymmetric Image Cards & TRANSPARENT Stats Badges */}
                <div className="lg:col-span-6 relative mt-6 lg:mt-0">
                  
                  {/* Background Decorative SVG Lines framing images */}
                  <div className="absolute -inset-4 pointer-events-none z-0">
                    <svg className="w-full h-full opacity-30" viewBox="0 0 500 500">
                      <circle cx="250" cy="250" r="220" fill="none" stroke="#008494" strokeWidth="1" strokeDasharray="6 6" />
                      <circle cx="250" cy="250" r="180" fill="none" stroke="#0B1340" strokeWidth="1" opacity="0.3" />
                    </svg>
                  </div>

                  <div className="grid grid-cols-12 gap-4 sm:gap-6 relative z-10 items-center">

                    {/* TOP ROW */}

                    {/* Top Left TRANSPARENT Floating Badge */}
                    <div className="col-span-5 flex items-end justify-center pb-4">
                      <div className="bg-transparent border-0 shadow-none p-2 text-center w-full">
                        <div className="text-3xl sm:text-4xl font-extrabold text-[#0B1340] tracking-tight">
                          {slide.badgeTop.value}
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-slate-600 mt-1 whitespace-nowrap">
                          {slide.badgeTop.label}
                        </div>
                      </div>
                    </div>

                    {/* Top Right Image Card */}
                    <div className="col-span-7">
                      <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white group">
                        <div className="aspect-[4/3] relative">
                          <Image
                            src={slide.imageTop}
                            alt={slide.imageTopAlt}
                            fill
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* BOTTOM ROW */}

                    {/* Bottom Left Image Card */}
                    <div className="col-span-7">
                      <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white group">
                        <div className="aspect-[4/3] relative">
                          <Image
                            src={slide.imageBottom}
                            alt={slide.imageBottomAlt}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Bottom Right TRANSPARENT Floating Badge */}
                    <div className="col-span-5 flex items-start justify-center pt-4">
                      <div className="bg-transparent border-0 shadow-none p-2 text-center w-full">
                        <div className="text-3xl sm:text-4xl font-extrabold text-[#0B1340] tracking-tight">
                          {slide.badgeBottom.value}
                        </div>
                        <div className="text-xs sm:text-sm font-bold text-slate-600 mt-1 whitespace-nowrap">
                          {slide.badgeBottom.label}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
