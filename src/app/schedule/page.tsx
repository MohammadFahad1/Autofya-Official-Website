"use client";

import React, { useState } from "react";
import Link from "next/link";
import AutofyaLogo from "@/components/AutofyaLogo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SchedulePage() {
  // Calendar & Slot State
  const [currentMonth, setCurrentMonth] = useState(8); // September (0-indexed: 8)
  const [currentYear, setCurrentYear] = useState(2026);
  const [selectedDay, setSelectedDay] = useState<number | null>(18);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [activeSlotForNext, setActiveSlotForNext] = useState<string | null>("1:30am");

  // Flow Step: 1 = Date/Time, 2 = Form Details, 3 = Confirmation
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showAddGuests, setShowAddGuests] = useState(false);
  const [guestEmails, setGuestEmails] = useState<string[]>([""]);
  const [countryCode, setCountryCode] = useState("+880");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [role, setRole] = useState("");
  const [situation, setSituation] = useState("");
  const [investmentRange, setInvestmentRange] = useState("");
  const [engagementType, setEngagementType] = useState("");
  const [outcomes, setOutcomes] = useState<string[]>([]);
  const [hearAboutUs, setHearAboutUs] = useState("");
  const [mustWorkNotes, setMustWorkNotes] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const timeSlots = [
    "12:00am", "12:30am", "1:00am", "1:30am", "2:00am", "2:30am",
    "3:00am", "3:30am", "4:00am", "10:00am", "10:30am", "11:00am",
    "02:00pm", "03:30pm", "05:00pm"
  ];

  const outcomeOptions = [
    "Launch a new digital product/ecommerce platform",
    "Modernise or scale an existing system",
    "Integrate payments / Fintech capabilities",
    "Implement ERP / internal operations system",
    "Add AI / automation to operations",
    "Cyber Security",
    "Extend an existing team (staff augmentation)",
    "Other",
    "Not sure yet - need guidance",
  ];

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleOutcomeToggle = (option: string) => {
    if (outcomes.includes(option)) {
      setOutcomes(outcomes.filter((o) => o !== option));
    } else {
      setOutcomes([...outcomes, option]);
    }
  };

  const handleAddGuestField = () => {
    setGuestEmails([...guestEmails, ""]);
  };

  const handleGuestEmailChange = (index: number, val: string) => {
    const updated = [...guestEmails];
    updated[index] = val;
    setGuestEmails(updated);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!name.trim()) errors.name = "Name is required";
    if (!email.trim() || !email.includes("@")) errors.email = "Valid email is required";
    if (!phone.trim()) errors.phone = "Phone number is required";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setIsSubmitting(true);

    const bookingPayload = {
      meetingTitle: "Autofya Meeting — 30 Minute Meeting",
      date: `${monthNames[currentMonth]} ${selectedDay}, ${currentYear}`,
      timeSlot: activeSlotForNext || "1:30am",
      name,
      email,
      guestEmails: guestEmails.filter((g) => g.trim().length > 0),
      phone: `${countryCode} ${phone}`,
      companyName,
      role,
      situation,
      investmentRange,
      engagementType,
      outcomes,
      hearAboutUs,
      mustWorkNotes,
      submittedAt: new Date().toISOString(),
    };

    console.log("🚀 [Autofya Booking Submitted]:", bookingPayload);

    // Simulate backend response
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setStep(3);
  };

  // Format date display for right sidebar & step 2
  const formattedSelectedDate = selectedDay
    ? `Friday, ${monthNames[currentMonth]} ${selectedDay}, ${currentYear}`
    : "Select a Date";

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0B1340] font-sans">
      <Navbar />

      <main className="flex-1 py-10 sm:py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        {/* MAIN CALENDLY-STYLE WIDGET CARD */}
        <div className="w-full max-w-[1060px] bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden flex flex-col md:flex-row transition-all duration-300">
          
          {/* LEFT SIDEBAR PANEL (Matching Screenshot 1 & 2) */}
          <div className="w-full md:w-[320px] lg:w-[360px] p-6 sm:p-8 border-b md:border-b-0 md:border-r border-slate-200/80 bg-white flex flex-col justify-between shrink-0">
            <div>
              {/* Logo */}
              <div className="mb-6">
                <AutofyaLogo height={38} showTagline={false} />
              </div>

              {/* Title & Duration */}
              <div className="mb-6">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Autofya Meeting
                </span>
                <h2 className="text-2xl font-bold text-[#0B1340] tracking-tight mb-4">
                  30 Minute Meeting
                </h2>

                <div className="space-y-3 text-sm text-slate-600 font-medium">
                  <div className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>30 min</span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <svg className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span className="leading-snug">Web conferencing details provided upon confirmation.</span>
                  </div>

                  {/* Chosen Date/Time in Step 2 */}
                  {step >= 2 && activeSlotForNext && (
                    <div className="flex items-start gap-2.5 text-[#00a2ad] font-bold">
                      <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="leading-snug">
                        {activeSlotForNext} - {formattedSelectedDate}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-2.5 text-xs text-slate-500">
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h1.5a2.5 2.5 0 002.5-2.5V7.865M19 19.5V18a2 2 0 00-2-2h-1.5a2.5 2.5 0 01-2.5-2.5V11" />
                    </svg>
                    <span>Asia/Dhaka</span>
                  </div>
                </div>
              </div>

              {/* Introductory Paragraph */}
              <div className="text-xs text-slate-600 space-y-3 border-t border-slate-100 pt-5 leading-relaxed">
                <p>Hello,</p>
                <p className="font-bold text-[#0B1340]">
                  Thanks for your interest in Autofya.
                </p>
                <p>
                  This call is intended to understand your business context, decision timeline, and desired outcomes so we can assess fit and come prepared with relevant guidance. The more context you share in advance, the more focused and valuable the discussion will be for you.
                </p>
              </div>
            </div>

            {/* Bottom Links */}
            <div className="pt-6 border-t border-slate-100 mt-6 flex items-center gap-4 text-xs text-slate-400 font-medium">
              <button type="button" className="hover:underline hover:text-slate-600">Cookie settings</button>
              <span>•</span>
              <button type="button" className="hover:underline hover:text-slate-600">Privacy Policy</button>
            </div>
          </div>

          {/* RIGHT PANEL (Main Content) */}
          <div className="flex-1 p-6 sm:p-8 lg:p-10 bg-white">
            
            {/* STEP 1: SELECT A DATE & TIME */}
            {step === 1 && (
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B1340] mb-6">
                  Select a Date & Time
                </h3>

                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  
                  {/* CALENDAR COLUMN */}
                  <div className="w-full lg:w-[320px] shrink-0">
                    
                    {/* Month Header Navigation */}
                    <div className="flex items-center justify-between mb-4 px-2">
                      <button
                        type="button"
                        onClick={handlePrevMonth}
                        className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-600 font-bold transition-colors cursor-pointer"
                        aria-label="Previous month"
                      >
                        ‹
                      </button>
                      <span className="text-sm font-bold text-[#0B1340]">
                        {monthNames[currentMonth]} {currentYear}
                      </span>
                      <button
                        type="button"
                        onClick={handleNextMonth}
                        className="w-8 h-8 rounded-full hover:bg-slate-100 flex items-center justify-center text-slate-600 font-bold transition-colors cursor-pointer"
                        aria-label="Next month"
                      >
                        ›
                      </button>
                    </div>

                    {/* Days of Week Header */}
                    <div className="grid grid-cols-7 text-center text-xs font-semibold text-slate-400 mb-2">
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                      <span>Sun</span>
                    </div>

                    {/* Calendar Days Grid */}
                    <div className="grid grid-cols-7 gap-1 text-center text-sm font-semibold">
                      {/* Blank offset slots for month alignment */}
                      <span className="p-2 text-slate-300"></span>
                      <span className="p-2 text-slate-300"></span>
                      
                      {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
                        const isSelected = selectedDay === day;
                        return (
                          <button
                            key={day}
                            type="button"
                            onClick={() => {
                              setSelectedDay(day);
                              setActiveSlotForNext(null);
                            }}
                            className={`w-9 h-9 mx-auto rounded-full flex items-center justify-center transition-all cursor-pointer ${
                              isSelected
                                ? "bg-[#00a2ad] text-white font-bold shadow-md"
                                : "text-slate-700 hover:bg-[#00a2ad]/10 hover:text-[#00a2ad]"
                            }`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>

                    {/* Timezone Selector Dropdown */}
                    <div className="mt-8 pt-4 border-t border-slate-100">
                      <label className="block text-xs font-bold text-slate-500 mb-1.5">
                        Time zone
                      </label>
                      <select className="w-full p-2.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-none focus:border-[#00a2ad] bg-white cursor-pointer">
                        <option>🌐 Asia/Dhaka (9:44pm)</option>
                        <option>🌐 UTC / GMT (+00:00)</option>
                        <option>🌐 US/Eastern (EDT)</option>
                        <option>🌐 US/Pacific (PDT)</option>
                        <option>🌐 Europe/London (BST)</option>
                      </select>
                    </div>

                  </div>

                  {/* TIME SLOTS COLUMN (Matching Screenshot 1 Right Column) */}
                  {selectedDay && (
                    <div className="flex-1 w-full border-t lg:border-t-0 lg:border-l border-slate-200/80 pt-6 lg:pt-0 lg:pl-8">
                      <h4 className="text-sm font-bold text-slate-600 mb-4">
                        {formattedSelectedDate}
                      </h4>

                      <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-2 scrollbar-thin">
                        {timeSlots.map((slot) => {
                          const isActive = activeSlotForNext === slot;
                          return (
                            <div key={slot} className="flex items-center gap-2">
                              {isActive ? (
                                <div className="flex items-center gap-2 w-full animate-fadeIn">
                                  <button
                                    type="button"
                                    className="flex-1 py-3 px-4 rounded-lg bg-slate-500 text-white font-bold text-sm text-center shadow-inner cursor-default"
                                  >
                                    {slot}
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => setStep(2)}
                                    className="flex-1 py-3 px-4 rounded-lg bg-[#00a2ad] hover:bg-[#008f99] text-white font-bold text-sm text-center shadow-md transition-all cursor-pointer"
                                  >
                                    Next
                                  </button>
                                </div>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => setActiveSlotForNext(slot)}
                                  className="w-full py-3 px-4 rounded-lg border border-[#00a2ad]/60 text-[#00a2ad] font-bold text-sm hover:border-[#00a2ad] hover:bg-[#00a2ad]/5 transition-all text-center cursor-pointer"
                                >
                                  {slot}
                                </button>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                </div>
              </div>
            )}

            {/* STEP 2: ENTER DETAILS FORM (Matching Screenshot 2) */}
            {step === 2 && (
              <div>
                {/* Back Button */}
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-9 h-9 rounded-full border border-slate-200 hover:bg-slate-100 text-[#00a2ad] font-bold flex items-center justify-center mb-6 transition-colors cursor-pointer"
                  aria-label="Go back to date & time selection"
                >
                  ←
                </button>

                <h3 className="text-xl sm:text-2xl font-bold text-[#0B1340] mb-6">
                  Enter Details
                </h3>

                <form onSubmit={handleFormSubmit} className="space-y-5">
                  
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#0B1340] mb-1.5">
                      Name *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm font-medium focus:outline-none transition-colors ${
                        formErrors.name ? "border-rose-500 bg-rose-50" : "border-slate-300 focus:border-[#00a2ad]"
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-[11px] text-rose-500 mt-1">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-[#0B1340] mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm font-medium focus:outline-none transition-colors ${
                        formErrors.email ? "border-rose-500 bg-rose-50" : "border-slate-300 focus:border-[#00a2ad]"
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-[11px] text-rose-500 mt-1">{formErrors.email}</p>
                    )}

                    {!showAddGuests ? (
                      <button
                        type="button"
                        onClick={() => setShowAddGuests(true)}
                        className="mt-2 text-xs font-bold text-[#00a2ad] border border-[#00a2ad] px-3 py-1 rounded-full hover:bg-[#00a2ad]/10 transition-colors cursor-pointer"
                      >
                        Add guests
                      </button>
                    ) : (
                      <div className="mt-3 space-y-2 border-l-2 border-[#00a2ad] pl-3">
                        <label className="block text-xs font-semibold text-slate-600">
                          Guest Email(s)
                        </label>
                        {guestEmails.map((gEmail, gIdx) => (
                          <input
                            key={gIdx}
                            type="email"
                            placeholder="guest@example.com"
                            value={gEmail}
                            onChange={(e) => handleGuestEmailChange(gIdx, e.target.value)}
                            className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs focus:outline-none focus:border-[#00a2ad]"
                          />
                        ))}
                        <button
                          type="button"
                          onClick={handleAddGuestField}
                          className="text-[11px] font-bold text-[#00a2ad] hover:underline cursor-pointer"
                        >
                          + Add another guest
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-[#0B1340] mb-1.5">
                      Phone *
                    </label>
                    <div className="flex gap-2">
                      <select
                        value={countryCode}
                        onChange={(e) => setCountryCode(e.target.value)}
                        className="px-3 py-2.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-700 bg-white focus:outline-none focus:border-[#00a2ad]"
                      >
                        <option value="+880">🇧🇩 +880</option>
                        <option value="+1">🇺🇸 +1</option>
                        <option value="+44">🇬🇧 +44</option>
                        <option value="+49">🇩🇪 +49</option>
                        <option value="+971">🇦🇪 +971</option>
                        <option value="+81">🇯🇵 +81</option>
                      </select>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="1700000000"
                        className={`flex-1 px-3.5 py-2.5 rounded-lg border text-sm font-medium focus:outline-none transition-colors ${
                          formErrors.phone ? "border-rose-500 bg-rose-50" : "border-slate-300 focus:border-[#00a2ad]"
                        }`}
                      />
                    </div>
                    {formErrors.phone && (
                      <p className="text-[11px] text-rose-500 mt-1">{formErrors.phone}</p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-xs font-bold text-[#0B1340] mb-1.5">
                      Company Name (If you&apos;re early-stage, just write &ldquo;New Venture&rdquo;)
                    </label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm font-medium focus:outline-none focus:border-[#00a2ad]"
                    />
                  </div>

                  {/* Your Role */}
                  <div>
                    <label className="block text-xs font-bold text-[#0B1340] mb-1.5">
                      Your Role *
                    </label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm font-medium text-slate-700 bg-white focus:outline-none focus:border-[#00a2ad]"
                    >
                      <option value="">Select...</option>
                      <option value="Founder / CEO / C-Level">Founder / CEO / C-Level</option>
                      <option value="VP / Director of Technology">VP / Director of Technology</option>
                      <option value="Engineering Manager / Tech Lead">Engineering Manager / Tech Lead</option>
                      <option value="Product Manager / Project Lead">Product Manager / Project Lead</option>
                      <option value="Consultant / Advisor">Consultant / Advisor</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* What best describes your situation? */}
                  <div>
                    <label className="block text-xs font-bold text-[#0B1340] mb-1.5">
                      What best describes your situation? *
                    </label>
                    <select
                      value={situation}
                      onChange={(e) => setSituation(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm font-medium text-slate-700 bg-white focus:outline-none focus:border-[#00a2ad]"
                    >
                      <option value="">Select...</option>
                      <option value="Need dedicated software engineering team">Need dedicated software engineering team</option>
                      <option value="Need staff augmentation / extra developers">Need staff augmentation / extra developers</option>
                      <option value="Building a new MVP or digital product">Building a new MVP or digital product</option>
                      <option value="Modernizing existing legacy platform">Modernizing existing legacy platform</option>
                      <option value="Integrating AI & Automation capabilities">Integrating AI & Automation capabilities</option>
                    </select>
                  </div>

                  {/* Estimated Investment range */}
                  <div>
                    <label className="block text-xs font-bold text-[#0B1340] mb-1.5">
                      Estimated Investment range for this initiative *
                    </label>
                    <select
                      value={investmentRange}
                      onChange={(e) => setInvestmentRange(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm font-medium text-slate-700 bg-white focus:outline-none focus:border-[#00a2ad]"
                    >
                      <option value="">Select...</option>
                      <option value="Under $10,000">Under $10,000</option>
                      <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                      <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                      <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                      <option value="$100,000+">$100,000+</option>
                    </select>
                  </div>

                  {/* Type of preferred engagement */}
                  <div>
                    <label className="block text-xs font-bold text-[#0B1340] mb-1.5">
                      Type of preferred engagement *
                    </label>
                    <select
                      value={engagementType}
                      onChange={(e) => setEngagementType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm font-medium text-slate-700 bg-white focus:outline-none focus:border-[#00a2ad]"
                    >
                      <option value="">Select...</option>
                      <option value="Dedicated Team">Dedicated Team</option>
                      <option value="Staff Augmentation">Staff Augmentation</option>
                      <option value="Time & Material">Time & Material</option>
                      <option value="Fixed Price Project">Fixed Price Project</option>
                    </select>
                  </div>

                  {/* What outcome are you trying to achieve? (Checkboxes) */}
                  <div>
                    <label className="block text-xs font-bold text-[#0B1340] mb-2">
                      What outcome are you trying to achieve? *
                    </label>
                    <div className="space-y-2 text-xs font-medium text-slate-700">
                      {outcomeOptions.map((option, idx) => (
                        <label key={idx} className="flex items-start gap-2.5 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={outcomes.includes(option)}
                            onChange={() => handleOutcomeToggle(option)}
                            className="mt-0.5 rounded border-slate-300 text-[#00a2ad] focus:ring-[#00a2ad] cursor-pointer"
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* How did you hear about us? */}
                  <div>
                    <label className="block text-xs font-bold text-[#0B1340] mb-1.5">
                      How did you hear about us? *
                    </label>
                    <select
                      value={hearAboutUs}
                      onChange={(e) => setHearAboutUs(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm font-medium text-slate-700 bg-white focus:outline-none focus:border-[#00a2ad]"
                    >
                      <option value="">Select...</option>
                      <option value="Google Search">Google Search</option>
                      <option value="LinkedIn">LinkedIn</option>
                      <option value="Referral / Recommendation">Referral / Recommendation</option>
                      <option value="News / Media">News / Media</option>
                      <option value="Event / Webinar">Event / Webinar</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* If this is a serious initiative... */}
                  <div>
                    <label className="block text-xs font-bold text-[#0B1340] mb-1.5 leading-relaxed">
                      If this is a serious initiative, what&apos;s the one thing that must work for you? (Example: &ldquo;Reduce support costs&rdquo;, &ldquo;Launch in 90 days&rdquo;, &ldquo;Replace manual operations&rdquo;)
                    </label>
                    <textarea
                      rows={3}
                      value={mustWorkNotes}
                      onChange={(e) => setMustWorkNotes(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm font-medium focus:outline-none focus:border-[#00a2ad] resize-none"
                    />
                  </div>

                  {/* Terms Note & Schedule Event Button */}
                  <div className="pt-4 border-t border-slate-100 space-y-4">
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      By proceeding, you confirm that you have read and agree to Autofya&apos;s Terms and Privacy Notice.
                    </p>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3.5 rounded-full bg-[#00a2ad] hover:bg-[#008f99] text-white font-bold text-sm shadow-md transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? "Submitting..." : "Schedule Event"}
                    </button>
                  </div>

                </form>
              </div>
            )}

            {/* STEP 3: SUCCESS CONFIRMATION SCREEN */}
            {step === 3 && (
              <div className="text-center py-10 space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-3xl shadow-inner">
                  ✓
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0B1340] mb-2">
                    You are scheduled
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto">
                    A calendar invitation has been sent to your email address <span className="font-bold text-[#0B1340]">{email}</span>.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 max-w-md mx-auto text-left text-xs space-y-2.5 text-slate-700">
                  <div className="flex justify-between border-b border-slate-200/80 pb-2">
                    <span className="font-semibold text-slate-500">Event:</span>
                    <span className="font-bold text-[#0B1340]">Autofya Meeting — 30 Min</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200/80 pb-2">
                    <span className="font-semibold text-slate-500">Date & Time:</span>
                    <span className="font-bold text-[#0B1340]">{activeSlotForNext} - {formattedSelectedDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-slate-500">Name:</span>
                    <span className="font-bold text-[#0B1340]">{name}</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-center gap-4">
                  <Link
                    href="/"
                    className="px-8 py-3 rounded-full bg-[#00a2ad] hover:bg-[#008f99] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                  >
                    Return to Home
                  </Link>
                </div>
              </div>
            )}

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
