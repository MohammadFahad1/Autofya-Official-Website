"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const pageViewIdRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(Date.now());
  const currentSectionRef = useRef<string>("");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Helper to get or generate session ID
  const getSessionId = () => {
    if (typeof window === "undefined") return "server_session";
    let sid = localStorage.getItem("autofya_session_id");
    if (!sid) {
      sid = "sess_" + Math.random().toString(36).substring(2) + "_" + Date.now();
      localStorage.setItem("autofya_session_id", sid);
    }
    return sid;
  };

  // Helper to send heartbeat / duration update
  const sendHeartbeat = (isLeaving = false) => {
    if (!pageViewIdRef.current) return;
    const durationSeconds = Math.max(0, Math.floor((Date.now() - startTimeRef.current) / 1000));

    const payload = JSON.stringify({
      page_view_id: pageViewIdRef.current,
      duration_seconds: durationSeconds,
      section_name: currentSectionRef.current || undefined,
    });

    if (isLeaving && typeof navigator !== "undefined" && navigator.sendBeacon) {
      const blob = new Blob([payload], { type: "application/json" });
      navigator.sendBeacon(`${API_BASE_URL}/analytics/track/`, blob);
    } else {
      fetch(`${API_BASE_URL}/analytics/track/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: payload,
      }).catch(() => {});
    }
  };

  // Track initial page view on route change
  useEffect(() => {
    // Don't track admin pages for user analytics
    if (pathname.startsWith("/admin")) return;

    // Send final heartbeat for previous page
    if (pageViewIdRef.current) {
      sendHeartbeat();
    }

    // Reset timer & refs for new page
    startTimeRef.current = Date.now();
    pageViewIdRef.current = null;
    currentSectionRef.current = "";

    const sessionId = getSessionId();
    const pageTitle = typeof document !== "undefined" ? document.title : "";

    fetch(`${API_BASE_URL}/analytics/track/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        session_id: sessionId,
        page_url: pathname,
        page_title: pageTitle,
        duration_seconds: 0,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success && data.page_view_id) {
          pageViewIdRef.current = data.page_view_id;
        }
      })
      .catch((err) => console.error("Analytics tracking error:", err));


    // Periodic Heartbeat every 5 seconds
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      sendHeartbeat();
    }, 5000);

    // Visibility change / tab blur / unload handler
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        sendHeartbeat(true);
      }
    };

    window.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("pagehide", () => sendHeartbeat(true));

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      window.removeEventListener("visibilitychange", handleVisibilityChange);
      sendHeartbeat(true);
    };
  }, [pathname]);

  // Section visibility tracking on scroll
  useEffect(() => {
    if (pathname.startsWith("/admin") || typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            currentSectionRef.current = entry.target.id;
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll("section[id], div[id]");
    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
