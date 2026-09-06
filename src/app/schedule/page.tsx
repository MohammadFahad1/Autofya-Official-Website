"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import AutofyaLogo from "@/components/AutofyaLogo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export interface CountryCodeOption {
  name: string;
  code: string;
  flag: string;
  iso: string;
}

const countryCodeOptions: CountryCodeOption[] = [
  { name: "United States", code: "+1", flag: "🇺🇸", iso: "us" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧", iso: "gb" },
  { name: "Germany", code: "+49", flag: "🇩🇪", iso: "de" },
  { name: "United Arab Emirates", code: "+971", flag: "🇦🇪", iso: "ae" },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦", iso: "sa" },
  { name: "Qatar", code: "+974", flag: "🇶🇦", iso: "qa" },
  { name: "Kuwait", code: "+965", flag: "🇰🇼", iso: "kw" },
  { name: "Oman", code: "+968", flag: "🇴🇲", iso: "om" },
  { name: "Bahrain", code: "+973", flag: "🇧🇭", iso: "bh" },
  { name: "Japan", code: "+81", flag: "🇯🇵", iso: "jp" },
  { name: "Singapore", code: "+65", flag: "🇸🇬", iso: "sg" },
  { name: "South Korea", code: "+82", flag: "🇰🇷", iso: "kr" },
  { name: "Hong Kong", code: "+852", flag: "🇭🇰", iso: "hk" },
  { name: "Taiwan", code: "+886", flag: "🇹🇼", iso: "tw" },
  { name: "Malaysia", code: "+60", flag: "🇲🇾", iso: "my" },
  { name: "China", code: "+86", flag: "🇨🇳", iso: "cn" },
  { name: "India", code: "+91", flag: "🇮🇳", iso: "in" },
  { name: "Thailand", code: "+66", flag: "🇹🇭", iso: "th" },
  { name: "Vietnam", code: "+84", flag: "🇻🇳", iso: "vn" },
  { name: "Indonesia", code: "+62", flag: "🇮🇩", iso: "id" },
  { name: "Philippines", code: "+63", flag: "🇵🇭", iso: "ph" },
  { name: "France", code: "+33", flag: "🇫🇷", iso: "fr" },
  { name: "Italy", code: "+39", flag: "🇮🇹", iso: "it" },
  { name: "Spain", code: "+34", flag: "🇪🇸", iso: "es" },
  { name: "Netherlands", code: "+31", flag: "🇳🇱", iso: "nl" },
  { name: "Switzerland", code: "+41", flag: "🇨🇭", iso: "ch" },
  { name: "Sweden", code: "+46", flag: "🇸🇪", iso: "se" },
  { name: "Norway", code: "+47", flag: "🇳🇴", iso: "no" },
  { name: "Denmark", code: "+45", flag: "🇩🇰", iso: "dk" },
  { name: "Finland", code: "+358", flag: "🇫🇮", iso: "fi" },
  { name: "Ireland", code: "+353", flag: "🇮🇪", iso: "ie" },
  { name: "Belgium", code: "+32", flag: "🇧🇪", iso: "be" },
  { name: "Austria", code: "+43", flag: "🇦🇹", iso: "at" },
  { name: "Poland", code: "+48", flag: "🇵🇱", iso: "pl" },
  { name: "Portugal", code: "+351", flag: "🇵🇹", iso: "pt" },
  { name: "Greece", code: "+30", flag: "🇬🇷", iso: "gr" },
  { name: "Czechia", code: "+420", flag: "🇨🇿", iso: "cz" },
  { name: "Hungary", code: "+36", flag: "🇭🇺", iso: "hu" },
  { name: "Romania", code: "+40", flag: "🇷🇴", iso: "ro" },
  { name: "Luxembourg", code: "+352", flag: "🇱🇺", iso: "lu" },
  { name: "Monaco", code: "+377", flag: "🇲🇨", iso: "mc" },
  { name: "Iceland", code: "+354", flag: "🇮🇸", iso: "is" },
  { name: "Estonia", code: "+372", flag: "🇪🇪", iso: "ee" },
  { name: "Latvia", code: "+371", flag: "🇱🇻", iso: "lv" },
  { name: "Lithuania", code: "+370", flag: "🇱🇹", iso: "lt" },
  { name: "Israel", code: "+972", flag: "🇮🇱", iso: "il" },
  { name: "Turkey", code: "+90", flag: "🇹🇷", iso: "tr" },
  { name: "Canada", code: "+1", flag: "🇨🇦", iso: "ca" },
  { name: "Australia", code: "+61", flag: "🇦🇺", iso: "au" },
  { name: "New Zealand", code: "+64", flag: "🇳🇿", iso: "nz" },
  { name: "Bangladesh", code: "+880", flag: "🇧🇩", iso: "bd" },
];

function CountryCodeSelect({
  value,
  onChange,
}: {
  value: string;
  onChange: (code: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedCountry =
    countryCodeOptions.find((c) => c.code === value) || countryCodeOptions[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredCountries = countryCodeOptions.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.code.includes(search)
  );

  return (
    <div ref={dropdownRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-2.5 rounded-lg border border-slate-300 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 focus:outline-none focus:border-[#00a2ad] flex items-center gap-2 cursor-pointer whitespace-nowrap h-full"
      >
        {/* Flag Image */}
        <img
          src={`https://flagcdn.com/w40/${selectedCountry.iso}.png`}
          alt={selectedCountry.name}
          className="w-5 h-3.5 object-cover rounded-[2px] border border-slate-200/80 shadow-xs shrink-0"
        />
        <span>{selectedCountry.code}</span>
        <span className="text-[10px] text-slate-400">▼</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-1 w-64 max-h-60 bg-white border border-slate-200 rounded-xl shadow-xl z-50 overflow-hidden flex flex-col animate-fadeIn">
          <div className="p-2 border-b border-slate-100 bg-slate-50">
            <input
              type="text"
              autoFocus
              placeholder="Search country or code..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-2.5 py-1.5 rounded-md border border-slate-300 text-xs focus:outline-none focus:border-[#00a2ad] bg-white font-medium text-slate-800"
            />
          </div>

          <div className="overflow-y-auto max-h-48 divide-y divide-slate-50">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((c, idx) => (
                <button
                  key={`${c.code}-${c.name}-${idx}`}
                  type="button"
                  onClick={() => {
                    onChange(c.code);
                    setIsOpen(false);
                    setSearch("");
                  }}
                  className={`w-full px-3 py-2 text-left text-xs flex items-center justify-between hover:bg-[#00a2ad]/10 transition-colors cursor-pointer ${
                    value === c.code && selectedCountry.name === c.name
                      ? "bg-[#00a2ad]/5 font-bold text-[#00a2ad]"
                      : "text-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-2.5 truncate">
                    <img
                      src={`https://flagcdn.com/w40/${c.iso}.png`}
                      alt={c.name}
                      className="w-5 h-3.5 object-cover rounded-[2px] border border-slate-200/80 shadow-xs shrink-0"
                    />
                    <span className="truncate font-semibold">{c.name}</span>
                  </div>
                  <span className="text-slate-400 font-mono text-[11px] shrink-0 ml-2">{c.code}</span>
                </button>
              ))
            ) : (
              <div className="p-3 text-xs text-slate-400 text-center">No countries found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export interface TimezoneOption {
  label: string;
  name: string;
  offset: number; // Offset relative to UTC in hours
  code: string;
}

const timezones: TimezoneOption[] = [
  { label: "🌐 Asia/Dhaka (BDT, GMT+6)", name: "Asia/Dhaka", offset: 6, code: "BDT" },
  { label: "🌐 UTC / GMT (GMT+0)", name: "UTC", offset: 0, code: "UTC" },
  { label: "🌐 US/Eastern (EDT, GMT-4)", name: "America/New_York", offset: -4, code: "EDT" },
  { label: "🌐 US/Pacific (PDT, GMT-7)", name: "America/Los_Angeles", offset: -7, code: "PDT" },
  { label: "🌐 Europe/London (BST, GMT+1)", name: "Europe/London", offset: 1, code: "BST" },
  { label: "🌐 Europe/Berlin (CEST, GMT+2)", name: "Europe/Berlin", offset: 2, code: "CEST" },
  { label: "🌐 Asia/Dubai (GST, GMT+4)", name: "Asia/Dubai", offset: 4, code: "GST" },
  { label: "🌐 Asia/Tokyo (JST, GMT+9)", name: "Asia/Tokyo", offset: 9, code: "JST" },
  { label: "🌐 Australia/Sydney (AEST, GMT+10)", name: "Australia/Sydney", offset: 10, code: "AEST" },
];

// Base Availability Window: 4:00 PM to 12:00 AM BDT (GMT+6)
// Corresponds to 10:00 AM to 6:00 PM UTC
const baseUtcSlots = [
  { hour: 10, minute: 0 },
  { hour: 10, minute: 30 },
  { hour: 11, minute: 0 },
  { hour: 11, minute: 30 },
  { hour: 12, minute: 0 },
  { hour: 12, minute: 30 },
  { hour: 13, minute: 0 },
  { hour: 13, minute: 30 },
  { hour: 14, minute: 0 },
  { hour: 14, minute: 30 },
  { hour: 15, minute: 0 },
  { hour: 15, minute: 30 },
  { hour: 16, minute: 0 },
  { hour: 16, minute: 30 },
  { hour: 17, minute: 0 },
  { hour: 17, minute: 30 },
];

const getFormattedSlotTime = (slot: { hour: number; minute: number }, offset: number) => {
  let totalMinutes = slot.hour * 60 + slot.minute + offset * 60;
  totalMinutes = (totalMinutes + 1440) % 1440;

  const h24 = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;

  const period = h24 >= 12 ? "pm" : "am";
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  const mStr = m < 10 ? `0${m}` : `${m}`;

  return `${h12}:${mStr}${period}`;
};

export default function SchedulePage() {
  const today = new Date();
  // Calendar & Slot State initialized dynamically
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDay, setSelectedDay] = useState<number | null>(today.getDate());
  const [selectedTzIdx, setSelectedTzIdx] = useState(0);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [activeSlotForNext, setActiveSlotForNext] = useState<string | null>(null);

  const selectedTz = timezones[selectedTzIdx];

  // Days in selected month & Monday-based offset
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayIndex = (new Date(currentYear, currentMonth, 1).getDay() + 6) % 7;

  // Navigation validation
  const canGoPrevMonth =
    currentYear > today.getFullYear() ||
    (currentYear === today.getFullYear() && currentMonth > today.getMonth());

  // Past Date Check
  const isPastDate = (day: number) => {
    const startOfToday = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const cellDate = new Date(currentYear, currentMonth, day);
    return cellDate < startOfToday;
  };

  // Booked Slot Generator (deterministic per month/day)
  const isSlotBooked = (day: number, slotIdx: number) => {
    const seed = (currentYear * 365 + (currentMonth + 1) * 31 + day * 17 + slotIdx * 11) % 10;
    return seed === 1 || seed === 4 || seed === 7;
  };

  // Flow Step: 1 = Date/Time, 2 = Form Details, 3 = Confirmation
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [showAddGuests, setShowAddGuests] = useState(false);
  const [guestEmails, setGuestEmails] = useState<string[]>([""]);
  const [countryCode, setCountryCode] = useState("+1");
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
    if (!canGoPrevMonth) return;
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
      timeSlot: activeSlotForNext || "04:00pm BDT",
      timezone: selectedTz.name,
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
  const dateObj = selectedDay ? new Date(currentYear, currentMonth, selectedDay) : null;
  const dayOfWeekName = dateObj ? dateObj.toLocaleDateString("en-US", { weekday: "long" }) : "";
  const formattedSelectedDate = selectedDay
    ? `${dayOfWeekName}, ${monthNames[currentMonth]} ${selectedDay}, ${currentYear}`
    : "Select a Date";

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0B1340] font-sans">
      <Navbar />

      <main className="flex-1 py-10 sm:py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        {/* MAIN CALENDLY-STYLE WIDGET CARD */}
        <div className="w-full max-w-[1060px] bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden flex flex-col md:flex-row transition-all duration-300">
          
          {/* LEFT SIDEBAR PANEL */}
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
                    <span>{selectedTz.name} ({selectedTz.code})</span>
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
                        disabled={!canGoPrevMonth}
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-colors ${
                          !canGoPrevMonth
                            ? "text-slate-300 cursor-not-allowed"
                            : "hover:bg-slate-100 text-slate-600 cursor-pointer"
                        }`}
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
                      {Array.from({ length: firstDayIndex }).map((_, idx) => (
                        <span key={`blank-${idx}`} className="p-2"></span>
                      ))}
                      
                      {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
                        const isSelected = selectedDay === day;
                        const disabled = isPastDate(day);

                        return (
                          <button
                            key={day}
                            type="button"
                            disabled={disabled}
                            onClick={() => {
                              if (disabled) return;
                              setSelectedDay(day);
                              setActiveSlotForNext(null);
                            }}
                            className={`w-9 h-9 mx-auto rounded-full flex items-center justify-center transition-all ${
                              disabled
                                ? "text-slate-300 bg-slate-50 cursor-not-allowed line-through opacity-40"
                                : isSelected
                                ? "bg-[#00a2ad] text-white font-bold shadow-md cursor-pointer"
                                : "text-slate-700 hover:bg-[#00a2ad]/10 hover:text-[#00a2ad] cursor-pointer font-semibold"
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
                      <select
                        value={selectedTzIdx}
                        onChange={(e) => {
                          setSelectedTzIdx(Number(e.target.value));
                          setActiveSlotForNext(null);
                        }}
                        className="w-full p-2.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-none focus:border-[#00a2ad] bg-white cursor-pointer"
                      >
                        {timezones.map((tz, idx) => (
                          <option key={idx} value={idx}>
                            {tz.label}
                          </option>
                        ))}
                      </select>
                    </div>

                  </div>

                  {/* TIME SLOTS COLUMN */}
                  {selectedDay && (
                    <div className="flex-1 w-full border-t lg:border-t-0 lg:border-l border-slate-200/80 pt-6 lg:pt-0 lg:pl-8">
                      <h4 className="text-sm font-bold text-slate-600 mb-4">
                        {formattedSelectedDate}
                      </h4>

                      <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-2 scrollbar-thin">
                        {baseUtcSlots.map((baseSlot, slotIdx) => {
                          const slotTimeStr = getFormattedSlotTime(baseSlot, selectedTz.offset);
                          const slotLabel = `${slotTimeStr} ${selectedTz.code}`;
                          const booked = isSlotBooked(selectedDay, slotIdx);
                          const isActive = activeSlotForNext === slotLabel;

                          if (booked) {
                            return (
                              <div
                                key={slotIdx}
                                className="w-full py-3 px-4 rounded-lg border border-slate-200 bg-slate-100/90 text-slate-400 font-semibold text-xs flex items-center justify-between cursor-not-allowed opacity-70 select-none"
                              >
                                <span className="line-through">{slotTimeStr}</span>
                                <span className="text-[10px] font-bold bg-slate-200 text-slate-500 px-2 py-0.5 rounded-full uppercase tracking-wider">
                                  Booked
                                </span>
                              </div>
                            );
                          }

                          return (
                            <div key={slotIdx} className="flex items-center gap-2">
                              {isActive ? (
                                <div className="flex items-center gap-2 w-full animate-fadeIn">
                                  <button
                                    type="button"
                                    className="flex-1 py-3 px-4 rounded-lg bg-slate-500 text-white font-bold text-xs text-center shadow-inner cursor-default"
                                  >
                                    {slotLabel}
                                  </button>
                                  <button
                                    type="button"
                                    onClick={() => setStep(2)}
                                    className="flex-1 py-3 px-4 rounded-lg bg-[#00a2ad] hover:bg-[#008f99] text-white font-bold text-xs text-center shadow-md transition-all cursor-pointer"
                                  >
                                    Next
                                  </button>
                                </div>
                              ) : (
                                <button
                                  type="button"
                                  onClick={() => setActiveSlotForNext(slotLabel)}
                                  className="w-full py-3 px-4 rounded-lg border border-[#00a2ad]/60 text-[#00a2ad] font-bold text-xs hover:border-[#00a2ad] hover:bg-[#00a2ad]/5 transition-all text-center cursor-pointer"
                                >
                                  {slotTimeStr}
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
                      <CountryCodeSelect
                        value={countryCode}
                        onChange={setCountryCode}
                      />
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
                      <option value="Under $5,000">Under $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
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
