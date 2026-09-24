"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
    industry: "",
    service: "",
    budget: "",
    projectDetails: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.autofya.com";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(`${API_BASE_URL}/bookings/contact/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company_name: formData.companyName,
          industry: formData.industry,
          service: formData.service,
          budget: formData.budget,
          project_details: formData.projectDetails,
        }),
      });
    } catch (err) {
      console.warn("Contact form API call notice:", err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B1340] selection:bg-[#00a2ad] selection:text-white">
      {/* Navbar Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* HERO BANNER SECTION                                                        */}
        {/* ========================================================================= */}
        <section className="relative bg-[#0B1340] pt-16 pb-24 sm:pt-20 sm:pb-32 lg:pt-24 lg:pb-36 overflow-hidden text-center text-white">
          {/* Concentric Circle Background SVG Ripples */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
            <svg
              width="900"
              height="900"
              viewBox="0 0 900 900"
              fill="none"
              className="w-[650px] h-[650px] sm:w-[850px] sm:h-[850px] text-[#00a2ad]"
            >
              <circle cx="450" cy="450" r="60" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="450" cy="450" r="110" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="450" cy="450" r="160" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="450" cy="450" r="210" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="450" cy="450" r="260" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="450" cy="450" r="310" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="450" cy="450" r="360" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="450" cy="450" r="410" stroke="currentColor" strokeWidth="1.2" />
              <circle cx="450" cy="450" r="460" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="text-[#00a2ad] text-sm sm:text-base font-semibold tracking-wide block mb-3">
              Contact Us
            </span>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4">
              Get in Touch – Your Vision, Our Expertise
            </h1>
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
              Have a project in mind? Our experts are just a message away. Let&apos;s collaborate to create cutting-edge solutions that drive growth.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FORM CONTAINER SECTION                                                    */}
        {/* ========================================================================= */}
        <section className="relative bg-slate-100/70 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* QUICK DIRECT CONTACT INFO CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {/* Email Card */}
              <a
                href="mailto:support@autofya.com"
                className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200/90 shadow-md hover:border-[#00a2ad] transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00a2ad]/10 text-[#00a2ad] flex items-center justify-center shrink-0 group-hover:bg-[#00a2ad] group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Email Us Direct</span>
                  <span className="text-base sm:text-lg font-bold text-[#0B1340] group-hover:text-[#00a2ad] transition-colors">support@autofya.com</span>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href="tel:+8801406792827"
                className="flex items-center gap-4 bg-white p-5 rounded-2xl border border-slate-200/90 shadow-md hover:border-[#00a2ad] transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00a2ad]/10 text-[#00a2ad] flex items-center justify-center shrink-0 group-hover:bg-[#00a2ad] group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Call Us Directly</span>
                  <span className="text-base sm:text-lg font-bold text-[#0B1340] group-hover:text-[#00a2ad] transition-colors">+8801406792827</span>
                </div>
              </a>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200/90 shadow-xl p-6 sm:p-10 lg:p-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1340] mb-8">
                Contact Us
              </h2>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-2xl font-bold text-emerald-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-emerald-700 text-base max-w-md mx-auto mb-6 leading-relaxed">
                    Your message has been submitted successfully. An Autofya specialist will review your request and reach out within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        phone: "",
                        companyName: "",
                        industry: "",
                        service: "",
                        budget: "",
                        projectDetails: "",
                      });
                    }}
                    className="px-6 py-2.5 bg-[#F59E0B] hover:bg-[#D97706] text-[#0B1340] font-bold rounded-full text-sm transition-colors cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Full Name */}
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Full Name *"
                      className="w-full bg-[#EDF2F7] border border-slate-300/80 rounded-lg px-4 py-3.5 text-slate-800 placeholder-slate-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00a2ad] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email *"
                      className="w-full bg-[#EDF2F7] border border-slate-300/80 rounded-lg px-4 py-3.5 text-slate-800 placeholder-slate-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00a2ad] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Phone Number */}
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone Number"
                      className="w-full bg-[#EDF2F7] border border-slate-300/80 rounded-lg px-4 py-3.5 text-slate-800 placeholder-slate-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00a2ad] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Company Name & Industry Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder="Company Name"
                        className="w-full bg-[#EDF2F7] border border-slate-300/80 rounded-lg px-4 py-3.5 text-slate-800 placeholder-slate-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00a2ad] focus:border-transparent transition-all"
                      />
                    </div>
                    <div>
                      <select
                        name="industry"
                        required
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full bg-[#EDF2F7] border border-slate-300/80 rounded-lg px-4 py-3.5 text-slate-700 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00a2ad] focus:border-transparent transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2364748B%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[right_1rem_center] bg-no-repeat pr-10 cursor-pointer"
                      >
                        <option value="" disabled>
                          Select Industry *
                        </option>
                        <option value="Fintech">Fintech</option>
                        <option value="Pharma & Healthcare">Pharma & Healthcare</option>
                        <option value="Telecom">Telecom</option>
                        <option value="Real Estate">Real Estate</option>
                        <option value="e-Commerce & Retail">e-Commerce & Retail</option>
                        <option value="Education & EdTech">Education & EdTech</option>
                        <option value="Automotive & Transport">Automotive & Transport</option>
                        <option value="Software / ITES">Software / ITES</option>
                        <option value="Startup">Startup</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Select Service & Select Budget Range Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <select
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-[#EDF2F7] border border-slate-300/80 rounded-lg px-4 py-3.5 text-slate-700 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00a2ad] focus:border-transparent transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2364748B%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[right_1rem_center] bg-no-repeat pr-10 cursor-pointer"
                      >
                        <option value="" disabled>
                          Select Service *
                        </option>
                        <option value="Staff Augmentation">Staff Augmentation</option>
                        <option value="AI-DLC & ML Engineering">AI-DLC & ML Engineering</option>
                        <option value="Custom Software Development">Custom Software Development</option>
                        <option value="Web & Mobile App Development">Web & Mobile App Development</option>
                        <option value="Data Engineering & BI">Data Engineering & BI</option>
                        <option value="Cloud Solutions & DevOps">Cloud Solutions & DevOps</option>
                        <option value="Cyber Security">Cyber Security</option>
                        <option value="QA Testing & Automation">QA Testing & Automation</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <select
                        name="budget"
                        required
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-[#EDF2F7] border border-slate-300/80 rounded-lg px-4 py-3.5 text-slate-700 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00a2ad] focus:border-transparent transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2364748B%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-[right_1rem_center] bg-no-repeat pr-10 cursor-pointer"
                      >
                        <option value="" disabled>
                          Select Budget Range *
                        </option>
                        <option value="< $10,000">&lt; $10,000</option>
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                        <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                        <option value="$100,000+">$100,000+</option>
                      </select>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <textarea
                      name="projectDetails"
                      required
                      rows={5}
                      value={formData.projectDetails}
                      onChange={handleChange}
                      placeholder="Project Details *"
                      className="w-full bg-[#EDF2F7] border border-slate-300/80 rounded-lg px-4 py-3.5 text-slate-800 placeholder-slate-500 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#00a2ad] focus:border-transparent transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="px-10 py-3 rounded-full bg-[#F59E0B] hover:bg-[#D97706] text-[#0B1340] font-extrabold text-base shadow-md transition-all duration-200 cursor-pointer disabled:opacity-50"
                    >
                      {loading ? "Submitting..." : "Submit"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* Footer includes Global Offices and Ready to Scale Your Team CTA Banner */}
      <Footer />
    </div>
  );
}
