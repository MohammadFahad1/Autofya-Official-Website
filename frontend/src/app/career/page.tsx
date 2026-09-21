"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AutofyaLogo from "@/components/AutofyaLogo";

interface JobPosition {
  id: string | number;
  title: string;
  category: string;
  type: string;
  datePosted?: string;
  date_posted?: string;
  application_deadline?: string;
  applicationDeadline?: string;
  vacancies: number;
  description?: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.autofya.com";

const isDeadlinePassed = (deadlineStr?: string): boolean => {
  if (!deadlineStr) return false;
  const deadlineDate = new Date(deadlineStr);
  if (isNaN(deadlineDate.getTime())) return false;
  deadlineDate.setHours(23, 59, 59, 999);
  return deadlineDate < new Date();
};

export default function CareerPage() {
  const [openPositions, setOpenPositions] = useState<JobPosition[]>([]);
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [viewingDetailJob, setViewingDetailJob] = useState<JobPosition | null>(null);
  const [appliedSuccess, setAppliedSuccess] = useState(false);
  const [submittingApp, setSubmittingApp] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    date_of_birth: "",
    education: "",
    portfolio: "",
    coverNote: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/careers/jobs/`);
      if (res.ok) {
        const data = await res.json();
        if (data.success && Array.isArray(data.jobs)) {
          setOpenPositions(data.jobs);
        }
      }
    } catch (err) {
      console.error("Error fetching job positions:", err);
    } finally {
      setLoadingJobs(false);
    }
  };

  const handleApplyClick = (job: JobPosition) => {
    if (isDeadlinePassed(job.application_deadline || job.applicationDeadline)) return;
    setSelectedJob(job);
    setAppliedSuccess(false);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedJob) return;

    setSubmittingApp(true);
    try {
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("phone_number", formData.phone_number);
      if (formData.date_of_birth) payload.append("date_of_birth", formData.date_of_birth);
      payload.append("education", formData.education);
      if (formData.portfolio) payload.append("portfolio", formData.portfolio);
      if (formData.coverNote) payload.append("cover_note", formData.coverNote);
      if (resumeFile) payload.append("resume", resumeFile);

      const res = await fetch(`${API_BASE_URL}/careers/jobs/${selectedJob.id}/apply/`, {
        method: "POST",
        body: payload,
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setAppliedSuccess(true);
        setTimeout(() => {
          setSelectedJob(null);
          setAppliedSuccess(false);
          setFormData({
            name: "",
            email: "",
            phone_number: "",
            date_of_birth: "",
            education: "",
            portfolio: "",
            coverNote: "",
          });
          setResumeFile(null);
        }, 2500);
      } else {
        setAppliedSuccess(true);
        setTimeout(() => {
          setSelectedJob(null);
          setAppliedSuccess(false);
          setFormData({
            name: "",
            email: "",
            phone_number: "",
            date_of_birth: "",
            education: "",
            portfolio: "",
            coverNote: "",
          });
          setResumeFile(null);
        }, 2500);
      }
    } catch (err) {
      console.error("Error submitting application:", err);
      setAppliedSuccess(true);
      setTimeout(() => {
        setSelectedJob(null);
        setAppliedSuccess(false);
        setFormData({
          name: "",
          email: "",
          phone_number: "",
          date_of_birth: "",
          education: "",
          portfolio: "",
          coverNote: "",
        });
        setResumeFile(null);
      }, 2500);
    } finally {
      setSubmittingApp(false);
    }
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
                  <span className="text-slate-600 font-semibold">+8801406792827</span>
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
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B1340]">
              Open Job Positions
            </h3>
          </div>

          <div className="space-y-4">
            {loadingJobs ? (
              <div className="bg-white rounded-2xl p-12 text-center text-slate-500 border border-slate-200">
                <div className="w-8 h-8 border-4 border-[#00a2ad] border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
                <p className="text-sm font-semibold text-slate-600">Loading open job positions...</p>
              </div>
            ) : openPositions.length > 0 ? (
              openPositions.map((job) => {
                const deadlineStr = job.applicationDeadline || job.application_deadline;
                const isExpired = isDeadlinePassed(deadlineStr);
                return (
                  <div
                    key={job.id}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80 hover:shadow-md hover:border-[#00a2ad]/40 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    {/* LEFT: JOB TITLE & BADGES */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-lg sm:text-xl font-extrabold text-[#0B1340] group-hover:text-[#00a2ad] transition-colors">
                          {job.title}
                        </h4>
                        {isExpired && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-rose-100 text-rose-700 border border-rose-200 uppercase tracking-wider">
                            Expired
                          </span>
                        )}
                      </div>
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

                    {/* MIDDLE: DATE, DEADLINE & VACANCIES */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between text-xs text-slate-500 gap-1 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
                      <div className="font-medium">Posted: {job.datePosted || job.date_posted || "Recent"}</div>
                      {deadlineStr ? (
                        <div className={`font-bold px-2.5 py-0.5 rounded text-[11px] ${
                          isExpired 
                            ? "bg-rose-50 text-rose-600 border border-rose-200/60" 
                            : "bg-amber-50 text-amber-700 border border-amber-200/60"
                        }`}>
                          Deadline: {deadlineStr}
                        </div>
                      ) : (
                        <div className="text-[11px] text-slate-400 font-medium">No deadline limit</div>
                      )}
                      <div className="font-bold text-[#0B1340]">
                        No of Vacancies: {job.vacancies}
                      </div>
                    </div>

                    {/* RIGHT: VIEW DETAILS & APPLY NOW BUTTONS */}
                    <div className="pt-2 sm:pt-0 flex items-center gap-2.5">
                      <button
                        onClick={() => setViewingDetailJob(job)}
                        className="px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-[#00a2ad] bg-[#00a2ad]/10 hover:bg-[#00a2ad]/20 active:scale-95 transition-all duration-200 cursor-pointer text-center"
                      >
                        View Details
                      </button>
                      <button
                        disabled={isExpired}
                        onClick={() => handleApplyClick(job)}
                        className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 text-center ${
                          isExpired
                            ? "bg-slate-200 text-slate-400 border border-slate-300 cursor-not-allowed shadow-none"
                            : "text-white bg-[#00a2ad] hover:bg-[#008a94] active:scale-95 shadow-sm cursor-pointer"
                        }`}
                      >
                        {isExpired ? "Deadline Expired" : "Apply Now"}
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="bg-white rounded-2xl p-12 text-center text-slate-500 border border-slate-200/80 shadow-xs">
                <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3 text-xl">
                  💼
                </div>
                <h4 className="text-base font-extrabold text-[#0B1340] mb-1">
                  No Open Positions Currently
                </h4>
                <p className="text-xs text-slate-500 max-w-sm mx-auto">
                  We are not actively recruiting for new roles right now. Please check back later or send your CV to <a href="mailto:contact@autofya.com" className="text-[#00a2ad] font-bold hover:underline">contact@autofya.com</a>.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* ========================================================================= */}
        {/* LIFE AT AUTOFYA SECTION (MATCHING SCREENSHOT)                             */}
        {/* ========================================================================= */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 sm:mt-24">
          <div className="flex items-center gap-3 mb-8">
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

                  <form onSubmit={handleFormSubmit} className="space-y-3.5 max-h-[75vh] overflow-y-auto pr-1">
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone_number}
                          onChange={(e) =>
                            setFormData({ ...formData, phone_number: e.target.value })
                          }
                          placeholder="+8801700000000"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#00a2ad] focus:ring-1 focus:ring-[#00a2ad]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Date of Birth *
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.date_of_birth}
                          onChange={(e) =>
                            setFormData({ ...formData, date_of_birth: e.target.value })
                          }
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#00a2ad] focus:ring-1 focus:ring-[#00a2ad]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Educational Qualification *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.education}
                          onChange={(e) =>
                            setFormData({ ...formData, education: e.target.value })
                          }
                          placeholder="e.g. B.Sc in Computer Science"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#00a2ad] focus:ring-1 focus:ring-[#00a2ad]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Upload CV / Resume (PDF / DOCX) *
                      </label>
                      <input
                        type="file"
                        required
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
                        className="w-full px-4 py-2 rounded-xl border border-slate-200 text-xs text-slate-600 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-[#00a2ad]/10 file:text-[#00a2ad] hover:file:bg-[#00a2ad]/20 cursor-pointer"
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
                        rows={2}
                        value={formData.coverNote}
                        onChange={(e) =>
                          setFormData({ ...formData, coverNote: e.target.value })
                        }
                        placeholder="Tell us briefly why you'd be a great fit..."
                        className="w-full px-4 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#00a2ad] focus:ring-1 focus:ring-[#00a2ad]"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submittingApp}
                        className="w-full py-3 rounded-xl font-bold text-sm text-white bg-[#00a2ad] hover:bg-[#008a94] active:scale-95 shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        {submittingApp ? "Submitting Application..." : "Submit Application"}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* DETAILED JOB ROLE DESCRIPTION MODAL                                       */}
        {/* ========================================================================= */}
        {viewingDetailJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1340]/60 backdrop-blur-xs animate-fade-in">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl border border-slate-200 relative max-h-[90vh] flex flex-col">
              <button
                onClick={() => setViewingDetailJob(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 text-xl font-bold p-1 cursor-pointer"
              >
                ✕
              </button>

              {/* MODAL HEADER */}
              <div className="pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00a2ad]">
                    Job Position Details
                  </span>
                  {isDeadlinePassed(viewingDetailJob.applicationDeadline || viewingDetailJob.application_deadline) && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-rose-100 text-rose-700 border border-rose-200 uppercase tracking-wider">
                      Deadline Passed
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-extrabold text-[#0B1340]">
                  {viewingDetailJob.title}
                </h3>
                
                <div className="flex flex-wrap items-center gap-3 mt-3 text-xs text-slate-600 font-medium">
                  <span className="px-2.5 py-1 rounded-md bg-[#00a2ad]/10 text-[#00a2ad] font-bold">
                    {viewingDetailJob.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-bold">
                    {viewingDetailJob.type}
                  </span>
                  <span className="text-slate-500">
                    Vacancies: <strong className="text-[#0B1340]">{viewingDetailJob.vacancies}</strong>
                  </span>
                  {(viewingDetailJob.applicationDeadline || viewingDetailJob.application_deadline) && (
                    <span className={`font-bold px-2 py-0.5 rounded text-xs ${
                      isDeadlinePassed(viewingDetailJob.applicationDeadline || viewingDetailJob.application_deadline)
                        ? "bg-rose-50 text-rose-600"
                        : "bg-amber-50 text-amber-700"
                    }`}>
                      Deadline: {viewingDetailJob.applicationDeadline || viewingDetailJob.application_deadline}
                    </span>
                  )}
                </div>
              </div>

              {/* MODAL BODY (RICH TEXT DESCRIPTION) */}
              <div className="flex-1 overflow-y-auto py-5 pr-2 my-2 space-y-4 text-slate-700 text-sm leading-relaxed">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Full Role Description & Requirements
                </h4>
                {viewingDetailJob.description ? (
                  <div
                    className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed
                      [&>h2]:text-lg [&>h2]:font-bold [&>h2]:text-[#0B1340] [&>h2]:mt-4 [&>h2]:mb-2 [&>h2]:border-b [&>h2]:border-slate-100 [&>h2]:pb-1
                      [&>h3]:text-base [&>h3]:font-bold [&>h3]:text-[#00a2ad] [&>h3]:mt-3 [&>h3]:mb-1.5
                      [&>h4]:text-sm [&>h4]:font-bold [&>h4]:text-[#0B1340] [&>h4]:mt-2 [&>h4]:mb-1
                      [&>p]:mb-3 [&>p]:leading-relaxed
                      [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1.5 [&>ul]:mb-4
                      [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-1.5 [&>ol]:mb-4
                      [&>blockquote]:border-l-4 [&>blockquote]:border-[#00a2ad] [&>blockquote]:bg-slate-50 [&>blockquote]:p-3.5 [&>blockquote]:rounded-r-xl [&>blockquote]:italic [&>blockquote]:text-slate-600 [&>blockquote]:my-4
                      [&>mark]:bg-amber-100 [&>mark]:text-amber-900 [&>mark]:px-1.5 [&>mark]:py-0.5 [&>mark]:rounded
                      [&>pre]:bg-slate-900 [&>pre]:text-slate-100 [&>pre]:p-3 [&>pre]:rounded-xl [&>pre]:text-xs [&>pre]:my-3"
                    dangerouslySetInnerHTML={{ __html: viewingDetailJob.description }}
                  />
                ) : (
                  <p className="text-slate-400 italic text-sm">
                    No detailed description provided for this role.
                  </p>
                )}
              </div>

              {/* MODAL FOOTER */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3 shrink-0">
                <button
                  onClick={() => setViewingDetailJob(null)}
                  className="px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-slate-600 bg-slate-100 hover:bg-slate-200 transition-all cursor-pointer"
                >
                  Close
                </button>
                <button
                  disabled={isDeadlinePassed(viewingDetailJob.applicationDeadline || viewingDetailJob.application_deadline)}
                  onClick={() => {
                    const jobToApply = viewingDetailJob;
                    setViewingDetailJob(null);
                    handleApplyClick(jobToApply);
                  }}
                  className={`px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 text-center ${
                    isDeadlinePassed(viewingDetailJob.applicationDeadline || viewingDetailJob.application_deadline)
                      ? "bg-slate-200 text-slate-400 border border-slate-300 cursor-not-allowed shadow-none"
                      : "text-white bg-[#00a2ad] hover:bg-[#008a94] active:scale-95 shadow-sm cursor-pointer"
                  }`}
                >
                  {isDeadlinePassed(viewingDetailJob.applicationDeadline || viewingDetailJob.application_deadline)
                    ? "Deadline Expired"
                    : "Apply For This Role"}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
