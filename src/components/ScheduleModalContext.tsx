"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface ScheduleModalContextType {
  isModalOpen: boolean;
  openScheduleModal: (service?: string) => void;
  closeScheduleModal: () => void;
}

const ScheduleModalContext = createContext<ScheduleModalContextType>({
  isModalOpen: false,
  openScheduleModal: () => {},
  closeScheduleModal: () => {},
});

export const useScheduleModal = () => useContext(ScheduleModalContext);

const SERVICES = [
  { id: "ai-ml", name: "AI & Machine Learning", icon: "🤖" },
  { id: "staff-aug", name: "Staff Augmentation", icon: "🚀" },
  { id: "web-mobile", name: "Custom Software & Web/Mobile Apps", icon: "💻" },
  { id: "fintech", name: "Fintech & Digital Wallet", icon: "💳" },
  { id: "health-lms", name: "Healthcare & LMS Solutions", icon: "🏥" },
  { id: "other", name: "General Technology Inquiry", icon: "💬" },
];

const TIME_SLOTS = [
  "09:30 AM",
  "11:00 AM",
  "01:30 PM",
  "03:00 PM",
  "04:30 PM",
  "06:00 PM",
];

// Helper to generate next 7 weekdays
function getUpcomingDays() {
  const days = [];
  const today = new Date();
  let count = 0;
  let offset = 0;

  while (count < 7) {
    const d = new Date(today);
    d.setDate(today.getDate() + offset);
    offset++;
    // Exclude weekends if desired, or include all days
    days.push({
      fullDate: d.toISOString().split("T")[0],
      dayName: d.toLocaleDateString("en-US", { weekday: "short" }),
      monthDay: d.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    });
    count++;
  }
  return days;
}

export function ScheduleModalProvider({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(SERVICES[0].name);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form inputs
  const [fullName, setFullName] = useState("");
  const [workEmail, setWorkEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const daysList = getUpcomingDays();

  useEffect(() => {
    if (daysList.length > 0 && !selectedDate) {
      setSelectedDate(daysList[0].fullDate);
    }
  }, []);

  const openScheduleModal = (serviceName?: string) => {
    if (serviceName) {
      const match = SERVICES.find(
        (s) => s.name.toLowerCase().includes(serviceName.toLowerCase()) || s.id === serviceName
      );
      if (match) setSelectedService(match.name);
    }
    setStep(1);
    setIsModalOpen(true);
  };

  const closeScheduleModal = () => {
    setIsModalOpen(false);
  };

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isModalOpen) {
        closeScheduleModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  const handleStep1Next = () => {
    if (!selectedTime) {
      setErrors({ time: "Please pick a time slot to continue." });
      return;
    }
    setErrors({});
    setStep(2);
  };

  const handleSubmitBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) newErrors.fullName = "Full Name is required";
    if (!workEmail.trim() || !workEmail.includes("@")) newErrors.workEmail = "Valid Work Email is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Simulated API call payload (ready for dynamic backend integration)
    const bookingPayload = {
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      fullName,
      workEmail,
      phone,
      company,
      message,
      submittedAt: new Date().toISOString(),
    };

    console.log("🚀 [Autofya Scheduling System] Booking Payload:", bookingPayload);

    // Simulate backend response delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setStep(3);
  };

  const resetForm = () => {
    setStep(1);
    setFullName("");
    setWorkEmail("");
    setPhone("");
    setCompany("");
    setMessage("");
    setSelectedTime("");
    setIsModalOpen(false);
  };

  return (
    <ScheduleModalContext.Provider
      value={{ isModalOpen, openScheduleModal, closeScheduleModal }}
    >
      {children}

      {/* OVERLAY MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#0B1340]/70 backdrop-blur-md transition-opacity duration-300 animate-fadeIn">
          {/* Backdrop Click */}
          <div
            className="fixed inset-0"
            onClick={closeScheduleModal}
            aria-hidden="true"
          />

          {/* MODAL CARD */}
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-8 font-sans">
            
            {/* Modal Header */}
            <div className="bg-[#0B1340] text-white p-6 sm:p-8 flex items-center justify-between border-b border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-[#00a2ad] text-xs sm:text-sm font-bold uppercase tracking-wider mb-1">
                  <span>📅</span> Autofya Scheduling System
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  {step === 3 ? "Meeting Scheduled!" : "Schedule a 30-Min Strategy Call"}
                </h3>
              </div>
              <button
                onClick={closeScheduleModal}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer focus:outline-none"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            {/* STEP PROGRESS INDICATOR */}
            {step !== 3 && (
              <div className="bg-slate-50 px-6 sm:px-8 py-3 border-b border-slate-200 flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-600">
                <div className="flex items-center gap-2">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      step === 1 ? "bg-[#00a2ad] text-white" : "bg-emerald-500 text-white"
                    }`}
                  >
                    {step > 1 ? "✓" : "1"}
                  </span>
                  <span className={step === 1 ? "text-[#0B1340] font-bold" : ""}>
                    1. Select Service & Time
                  </span>
                </div>
                <div className="w-12 h-0.5 bg-slate-200" />
                <div className="flex items-center gap-2">
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                      step === 2 ? "bg-[#00a2ad] text-white" : "bg-slate-200 text-slate-500"
                    }`}
                  >
                    2
                  </span>
                  <span className={step === 2 ? "text-[#0B1340] font-bold" : ""}>
                    2. Contact Details
                  </span>
                </div>
              </div>
            )}

            {/* MODAL BODY */}
            <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
              
              {/* STEP 1: SERVICE & TIME */}
              {step === 1 && (
                <div className="space-y-6">
                  
                  {/* Select Service */}
                  <div>
                    <label className="block text-sm font-bold text-[#0B1340] mb-2.5">
                      Select Topic / Service Area
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {SERVICES.map((srv) => (
                        <button
                          key={srv.id}
                          type="button"
                          onClick={() => setSelectedService(srv.name)}
                          className={`flex items-center gap-3 p-3 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                            selectedService === srv.name
                              ? "border-[#00a2ad] bg-[#00a2ad]/10 text-[#00a2ad] ring-2 ring-[#00a2ad]/30"
                              : "border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                          }`}
                        >
                          <span className="text-lg">{srv.icon}</span>
                          <span className="truncate">{srv.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Select Date */}
                  <div>
                    <label className="block text-sm font-bold text-[#0B1340] mb-2.5">
                      Select Meeting Date
                    </label>
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
                      {daysList.map((d) => (
                        <button
                          key={d.fullDate}
                          type="button"
                          onClick={() => setSelectedDate(d.fullDate)}
                          className={`shrink-0 flex flex-col items-center justify-center w-20 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                            selectedDate === d.fullDate
                              ? "border-[#00a2ad] bg-[#00a2ad] text-white shadow-md"
                              : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          <span className="opacity-80 text-[11px] uppercase">{d.dayName}</span>
                          <span className="text-sm font-bold mt-0.5">{d.monthDay}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Select Time Slot */}
                  <div>
                    <label className="block text-sm font-bold text-[#0B1340] mb-2.5">
                      Available Time Slots
                    </label>
                    <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                      {TIME_SLOTS.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => {
                            setSelectedTime(t);
                            setErrors({});
                          }}
                          className={`py-2 px-1 rounded-lg border text-center text-xs font-bold transition-all cursor-pointer ${
                            selectedTime === t
                              ? "border-[#00a2ad] bg-[#00a2ad] text-white shadow-sm"
                              : "border-slate-200 bg-white text-slate-700 hover:border-[#00a2ad]/50 hover:bg-[#00a2ad]/5"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                    {errors.time && (
                      <p className="text-xs text-rose-500 font-semibold mt-2">
                        ⚠️ {errors.time}
                      </p>
                    )}
                  </div>

                  {/* Next Action */}
                  <div className="pt-4 border-t border-slate-100 flex justify-end">
                    <button
                      type="button"
                      onClick={handleStep1Next}
                      className="px-8 py-3 rounded-full bg-[#00a2ad] hover:bg-[#008f99] text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <span>Continue to Contact Details</span>
                      <span>→</span>
                    </button>
                  </div>

                </div>
              )}

              {/* STEP 2: CONTACT DETAILS */}
              {step === 2 && (
                <form onSubmit={handleSubmitBooking} className="space-y-4">
                  <div className="bg-[#00a2ad]/10 p-3.5 rounded-xl border border-[#00a2ad]/20 text-xs text-[#0B1340] flex items-center justify-between mb-4">
                    <div>
                      <span className="font-bold text-[#00a2ad]">Topic:</span> {selectedService}
                    </div>
                    <div className="font-semibold">
                      🗓 {selectedDate} at {selectedTime}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0B1340] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="John Doe"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-medium focus:outline-none transition-colors ${
                          errors.fullName ? "border-rose-500 bg-rose-50" : "border-slate-200 focus:border-[#00a2ad]"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-rose-500 mt-0.5">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0B1340] mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        value={workEmail}
                        onChange={(e) => setWorkEmail(e.target.value)}
                        placeholder="john@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-medium focus:outline-none transition-colors ${
                          errors.workEmail ? "border-rose-500 bg-rose-50" : "border-slate-200 focus:border-[#00a2ad]"
                        }`}
                      />
                      {errors.workEmail && (
                        <p className="text-[11px] text-rose-500 mt-0.5">{errors.workEmail}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#0B1340] mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:border-[#00a2ad]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0B1340] mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Acme Corp"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:border-[#00a2ad]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0B1340] mb-1">
                      Project Notes / Requirements (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Briefly describe your project goals, team size requirements, or timeline..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm font-medium focus:outline-none focus:border-[#00a2ad] resize-none"
                    />
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-2.5 rounded-full border border-slate-200 text-slate-700 hover:bg-slate-100 font-bold text-xs sm:text-sm cursor-pointer transition-colors"
                    >
                      ← Back
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 rounded-full bg-[#FF9000] hover:bg-[#E68200] text-white font-bold text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Scheduling...</span>
                        </>
                      ) : (
                        <span>Confirm Meeting Request</span>
                      )}
                    </button>
                  </div>
                </form>
              )}

              {/* STEP 3: SUCCESS CONFIRMATION */}
              {step === 3 && (
                <div className="text-center py-6 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-3xl shadow-inner">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-[#0B1340] mb-1">
                      Thank You, {fullName}!
                    </h4>
                    <p className="text-slate-600 text-sm max-w-md mx-auto">
                      Your meeting request has been logged in our system. A calendar invite & confirmation email will be sent to <span className="font-bold text-[#0B1340]">{workEmail}</span>.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 max-w-md mx-auto text-left text-xs space-y-2 text-slate-700">
                    <div className="flex justify-between border-b border-slate-200/80 pb-2">
                      <span className="font-semibold text-slate-500">Service:</span>
                      <span className="font-bold text-[#0B1340]">{selectedService}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200/80 pb-2">
                      <span className="font-semibold text-slate-500">Date & Time:</span>
                      <span className="font-bold text-[#0B1340]">{selectedDate} at {selectedTime}</span>
                    </div>
                    {company && (
                      <div className="flex justify-between">
                        <span className="font-semibold text-slate-500">Company:</span>
                        <span className="font-bold text-[#0B1340]">{company}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-8 py-3 rounded-full bg-[#00a2ad] hover:bg-[#008f99] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                    >
                      Done
                    </button>
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>
      )}
    </ScheduleModalContext.Provider>
  );
}
