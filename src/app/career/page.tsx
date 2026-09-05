"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AutofyaLogo from "@/components/AutofyaLogo";

interface JobPosition {
  id: string;
  title: string;
  category: string;
  type: string;
  datePosted: string;
  vacancies: number;
}

const openPositions: JobPosition[] = [
  {
    id: "ai-ml-engineer",
    title: "Senior AI/ML Engineer",
    category: "AI & Machine Learning",
    type: "Full-time",
    datePosted: "05 Sep, 2026",
    vacancies: 2,
  },
  {
    id: "fullstack-developer",
    title: "Full Stack Next.js Developer",
    category: "Software Engineering",
    type: "Full-time",
    datePosted: "04 Sep, 2026",
    vacancies: 3,
  },
  {
    id: "cloud-devops-engineer",
    title: "Senior Cloud & DevOps Engineer",
    category: "Cloud & Infrastructure",
    type: "Full-time",
    datePosted: "02 Sep, 2026",
    vacancies: 1,
  },
  {
    id: "product-designer",
    title: "Product Designer (UI/UX)",
    category: "Product & Design",
    type: "Full-time",
    datePosted: "01 Sep, 2026",
    vacancies: 2,
  },
  {
    id: "project-manager",
    title: "Technical Project Manager",
    category: "Agile Leadership",
    type: "Full-time",
    datePosted: "28 Aug, 2026",
    vacancies: 1,
  },
];

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [appliedSuccess, setAppliedSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "",
    coverNote: "",
  });

  const handleApplyClick = (job: JobPosition) => {
    setSelectedJob(job);
    setAppliedSuccess(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAppliedSuccess(true);
    setTimeout(() => {
      setSelectedJob(null);
      setAppliedSuccess(false);
      setFormData({ name: "", email: "", portfolio: "", coverNote: "" });
    }, 2500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0B1340] selection:bg-[#00a2ad] selection:text-white">
      {/* Navbar */}
      <Navbar />

      <main className="flex-1 pb-20">
        {/* ========================================================================= */}
        {/* TOP COVER BANNER                                                          */}
        {/* ========================================================================= */}
        <section className="relative w-full h-[280px] sm:h-[360px] lg:h-[420px] bg-[#0B1340] overflow-hidden">
          <Image
            src="/company_team_group.jpg"
            alt="Autofya Headquarters & Culture"
            fill
            sizes="100vw"
            priority
            loading="eager"
            className="object-cover opacity-60 brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1340]/90 via-[#0B1340]/40 to-transparent" />
          
          <div className="relative z-10 max-w-6xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight drop-shadow-md">
              Careers at <span className="text-[#00a2ad]">Autofya</span>
            </h1>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* COMPANY PROFILE CARD (MATCHING SCREENSHOT)                                */}
        {/* ========================================================================= */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 sm:-mt-24 relative z-20">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border border-slate-200/80 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
              {/* COMPANY NAME & VERIFIED BADGE */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#fff] flex items-center justify-center p-1 shadow-md shrink-0">
                  <Image src="/favicon.png" width={256} height={256} alt="Autofya Favicon" unoptimized />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1340]">
                      Autofya
                    </h2>
                    <span className="w-5 h-5 rounded-full bg-[#00a2ad] text-white flex items-center justify-center text-xs font-bold shadow-xs">
                      ✓
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-0.5">
                    Software Development & AI Innovation Partner
                  </p>
                </div>
              </div>

              {/* EXPLORE WEBSITE BUTTON */}
              <div>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-[#00a2ad] hover:bg-[#008a94] active:scale-95 shadow-sm transition-all duration-200"
                >
                  Explore Company Website
                </Link>
              </div>
            </div>

            {/* DESCRIPTION */}
            <div className="pt-6">
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Founded in 2023, Autofya is a leading software development company committed to delivering cutting-edge digital solutions, Next.js web platforms, AI engineering, and cloud transformation. We foster an inclusive, high-impact engineering culture where global talent thrives.
              </p>

              {/* CONTACT INFORMATION */}
              <div className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm font-medium text-slate-700">
                <div>
                  <span className="font-bold text-[#0B1340]">Contact Us: </span>
                  <a
                    href="mailto:contact@autofya.com"
                    className="text-[#00a2ad] hover:underline font-semibold"
                  >
                    contact@autofya.com
                  </a>
                </div>
                <div>
                  <span className="font-bold text-[#0B1340]">Phone Number: </span>
                  <span className="text-slate-600 font-semibold">+880 1700 000000</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* OPEN JOB POSITIONS SECTION (MATCHING SCREENSHOT)                          */}
        {/* ========================================================================= */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl sm:text-3xl">💼</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1340]">
              Open Job Positions
            </h3>
          </div>

          <div className="space-y-4">
            {openPositions.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 hover:shadow-md hover:border-[#00a2ad]/40 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                {/* LEFT: JOB TITLE & BADGES */}
                <div className="flex-1">
                  <h4 className="text-lg sm:text-xl font-extrabold text-[#0B1340] mb-2 group-hover:text-[#00a2ad] transition-colors">
                    {job.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 text-xs">
                    <span className="font-semibold text-slate-500">Autofya</span>
                    <span className="text-slate-300">•</span>
                    <span className="px-2.5 py-0.5 rounded-md bg-[#00a2ad]/10 text-[#00a2ad] font-bold">
                      {job.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 font-semibold">
                      {job.type}
                    </span>
                  </div>
                </div>

                {/* MIDDLE: DATE & VACANCIES */}
                <div className="flex sm:flex-col items-center sm:items-end justify-between text-xs text-slate-500 gap-1 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
                  <div className="font-medium">{job.datePosted}</div>
                  <div className="font-bold text-[#0B1340]">
                    No of Vacancies: {job.vacancies}
                  </div>
                </div>

                {/* RIGHT: APPLY NOW BUTTON */}
                <div className="pt-2 sm:pt-0">
                  <button
                    onClick={() => handleApplyClick(job)}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#00a2ad] hover:bg-[#008a94] active:scale-95 shadow-sm transition-all duration-200 cursor-pointer text-center"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* LIFE AT AUTOFYA SECTION (MATCHING SCREENSHOT)                             */}
        {/* ========================================================================= */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-24">
          <div className="flex items-center gap-3 mb-8">
            <span className="text-2xl sm:text-3xl">🚀</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1340]">
              Life at Autofya
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* LEFT FEATURE CARD */}
            <div className="lg:col-span-6 relative rounded-3xl overflow-hidden shadow-md group min-h-[340px] sm:min-h-[400px] border border-slate-200/80 bg-slate-900">
              <Image
                src="/hero_ai_engineer.jpg"
                alt="Young Business Leaders in South Asia 2025"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1340] via-[#0B1340]/40 to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-white">
                <span className="px-3 py-1 rounded-full bg-[#00a2ad] text-white text-xs font-extrabold uppercase tracking-wider mb-3 inline-block">
                  Recognition 2025
                </span>
                <h4 className="text-xl sm:text-2xl font-extrabold leading-snug">
                  Young Tech Leaders in South Asia 2025
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm mt-2 font-normal">
                  Empowering top software engineers and AI pioneers to build global digital solutions.
                </p>
              </div>
            </div>

            {/* RIGHT 2x2 PHOTO GALLERY GRID */}
            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="relative h-44 sm:h-48 rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 group bg-slate-100">
                <Image
                  src="/about_team_collaboration.jpg"
                  alt="Team Collaboration"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="relative h-44 sm:h-48 rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 group bg-slate-100">
                <Image
                  src="/ai_development_collaboration.jpg"
                  alt="AI Hackathon"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="relative h-44 sm:h-48 rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 group bg-slate-100">
                <Image
                  src="/hero_team_collaboration.jpg"
                  alt="Office Culture"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="relative h-44 sm:h-48 rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 group bg-slate-100">
                <Image
                  src="/company_team_group.jpg"
                  alt="Team Celebration"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* JOB APPLICATION MODAL                                                     */}
        {/* ========================================================================= */}
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1340]/60 backdrop-blur-xs animate-fade-in">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl border border-slate-200 relative">
              <button
                onClick={() => setSelectedJob(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 text-xl font-bold p-1 cursor-pointer"
              >
                ✕
              </button>

              {appliedSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                    ✓
                  </div>
                  <h4 className="text-2xl font-extrabold text-[#0B1340] mb-2">
                    Application Submitted!
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Thank you for applying for the{" "}
                    <strong className="text-[#0B1340]">{selectedJob.title}</strong> role at Autofya. Our recruitment team will review your application shortly.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#00a2ad]">
                      Job Application
                    </span>
                    <h4 className="text-xl sm:text-2xl font-extrabold text-[#0B1340] mt-1">
                      {selectedJob.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      {selectedJob.category} • {selectedJob.type}
                    </p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#00a2ad] focus:ring-1 focus:ring-[#00a2ad]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#00a2ad] focus:ring-1 focus:ring-[#00a2ad]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        LinkedIn / Portfolio URL
                      </label>
                      <input
                        type="url"
                        value={formData.portfolio}
                        onChange={(e) =>
                          setFormData({ ...formData, portfolio: e.target.value })
                        }
                        placeholder="https://linkedin.com/in/username"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#00a2ad] focus:ring-1 focus:ring-[#00a2ad]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Short Cover Note
                      </label>
                      <textarea
                        rows={3}
                        value={formData.coverNote}
                        onChange={(e) =>
                          setFormData({ ...formData, coverNote: e.target.value })
                        }
                        placeholder="Tell us briefly why you'd be a great fit..."
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#00a2ad] focus:ring-1 focus:ring-[#00a2ad]"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3 rounded-xl font-bold text-sm text-white bg-[#00a2ad] hover:bg-[#008a94] active:scale-95 shadow-md transition-all cursor-pointer"
                      >
                        Submit Application
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
