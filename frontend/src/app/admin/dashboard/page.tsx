"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAdminAuth } from "@/context/AdminAuthContext";
import AutofyaLogo from "@/components/AutofyaLogo";

interface UserItem {
  id: number;
  email: string;
  full_name: string | null;
  profile_picture: string | null;
  is_active: boolean;
  is_staff: boolean;
  is_superuser: boolean;
  role: "admin" | "user";
  created_at: string;
  last_login: string | null;
}

interface StatsData {
  total_users: number;
  active_users: number;
  inactive_users: number;
  staff_users: number;
  new_users_30d: number;
  chart_data: { month: string; count: number }[];
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export default function AdminDashboardPage() {
  const { token, adminUser, isAuthenticated, isLoading, logout } = useAdminAuth();
  const router = useRouter();

  // Navigation Tabs State
  const [activeTab, setActiveTab] = useState<"overview" | "users" | "analytics" | "settings" | "profile">("overview");

  // Dashboard Data State
  const [stats, setStats] = useState<StatsData | null>(null);
  const [users, setUsers] = useState<UserItem[]>([]);
  const [loadingData, setLoadingData] = useState(true);

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState<"all" | "admin" | "user">("all");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "inactive">("all");

  // UI States
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [editingUser, setEditingUser] = useState<UserItem | null>(null);
  const [deletingUser, setDeletingUser] = useState<UserItem | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Protect route
  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      router.push("/admin/login");
    }
  }, [isAuthenticated, isLoading, router]);

  // Fetch Dashboard Stats & Users
  useEffect(() => {
    if (token) {
      fetchDashboardData();
    }
  }, [token, roleFilter, statusFilter]);

  const fetchDashboardData = async () => {
    setLoadingData(true);
    try {
      // Fetch stats
      const statsRes = await fetch(`${API_BASE_URL}/auth/admin/stats/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const statsJson = await statsRes.json();
      if (statsJson.success) {
        setStats(statsJson.stats);
      }

      // Fetch users
      let url = `${API_BASE_URL}/auth/admin/users/?search=${encodeURIComponent(searchQuery)}`;
      if (roleFilter !== "all") url += `&role=${roleFilter}`;
      if (statusFilter !== "all") url += `&status=${statusFilter}`;

      const usersRes = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const usersJson = await usersRes.json();
      if (usersJson.success) {
        setUsers(usersJson.users);
      }
    } catch (err) {
      console.error("Error fetching admin data:", err);
    } finally {
      setLoadingData(false);
    }
  };

  // Trigger search
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchDashboardData();
  };

  // Handle Edit User Submit
  const handleSaveUserEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingUser || !token) return;

    setIsUpdating(true);
    setFeedbackMsg(null);

    try {
      const res = await fetch(`${API_BASE_URL}/auth/admin/users/${editingUser.id}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          full_name: editingUser.full_name,
          email: editingUser.email,
          is_active: editingUser.is_active,
          role: editingUser.role,
        }),
      });

      const json = await res.json();
      if (res.ok && json.success) {
        setFeedbackMsg({ type: "success", text: "User updated successfully." });
        setEditingUser(null);
        fetchDashboardData();
      } else {
        setFeedbackMsg({ type: "error", text: json.message || "Failed to update user." });
      }
    } catch (err) {
      setFeedbackMsg({ type: "error", text: "Server error occurred while updating user." });
    } finally {
      setIsUpdating(false);
    }
  };

  // Handle Delete User Confirm
  const handleDeleteUserConfirm = async () => {
    if (!deletingUser || !token) return;

    setIsUpdating(true);
    setFeedbackMsg(null);

    try {
      const res = await fetch(`${API_BASE_URL}/auth/admin/users/${deletingUser.id}/`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      const json = await res.json();
      if (res.ok && json.success) {
        setFeedbackMsg({ type: "success", text: "User account deleted successfully." });
        setDeletingUser(null);
        fetchDashboardData();
      } else {
        setFeedbackMsg({ type: "error", text: json.message || "Failed to delete user." });
      }
    } catch (err) {
      setFeedbackMsg({ type: "error", text: "Server error occurred while deleting user." });
    } finally {
      setIsUpdating(false);
    }
  };

  if (isLoading || !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0F172A] text-slate-100">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-[#00a2ad] border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm font-medium text-slate-400">Verifying Admin Permissions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex bg-[#0B132B] text-slate-100 font-sans antialiased selection:bg-[#00a2ad] selection:text-white">
      
      {/* ========================================== */}
      {/* SIDEBAR NAVIGATION                         */}
      {/* ========================================== */}
      <aside
        className={`${
          sidebarCollapsed ? "w-20" : "w-64"
        } shrink-0 bg-[#070D1E] border-r border-slate-800 flex flex-col justify-between transition-all duration-300 z-30 sticky top-0 h-screen`}
      >
        <div>
          {/* Sidebar Brand Header */}
          <div className="h-20 px-5 flex items-center justify-between border-b border-slate-800/80">
            {!sidebarCollapsed ? (
              <div className="flex items-center gap-2.5">
                <div className="bg-white px-2.5 py-1.5 rounded-xl shadow-sm inline-flex items-center justify-center">
                  <AutofyaLogo height={26} showTagline={false} />
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#00a2ad]/20 text-[#00a2ad] border border-[#00a2ad]/30 uppercase">
                  Admin
                </span>
              </div>
            ) : (
              <div className="w-10 h-10 rounded-xl bg-white p-1.5 flex items-center justify-center shadow-md">
                <AutofyaLogo height={20} showTagline={false} />
              </div>
            )}

            <button
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
              title="Toggle Sidebar"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {sidebarCollapsed ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                )}
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1.5">
            <button
              onClick={() => setActiveTab("overview")}
              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === "overview"
                  ? "bg-gradient-to-r from-[#00a2ad] to-[#00808a] text-white shadow-lg shadow-[#00a2ad]/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              {!sidebarCollapsed && <span>Dashboard Overview</span>}
            </button>

            <button
              onClick={() => setActiveTab("users")}
              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === "users"
                  ? "bg-gradient-to-r from-[#00a2ad] to-[#00808a] text-white shadow-lg shadow-[#00a2ad]/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              {!sidebarCollapsed && (
                <div className="flex items-center justify-between w-full">
                  <span>User Management</span>
                  {stats && (
                    <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-slate-800 text-slate-300">
                      {stats.total_users}
                    </span>
                  )}
                </div>
              )}
            </button>

            <button
              onClick={() => setActiveTab("analytics")}
              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === "analytics"
                  ? "bg-gradient-to-r from-[#00a2ad] to-[#00808a] text-white shadow-lg shadow-[#00a2ad]/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 012-2h2a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              {!sidebarCollapsed && <span>Analytics & Reports</span>}
            </button>

            <button
              onClick={() => setActiveTab("settings")}
              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                activeTab === "settings"
                  ? "bg-gradient-to-r from-[#00a2ad] to-[#00808a] text-white shadow-lg shadow-[#00a2ad]/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {!sidebarCollapsed && <span>System Settings</span>}
            </button>
          </nav>
        </div>

        {/* Sidebar Footer & Logout */}
        <div className="p-4 border-t border-slate-800">
          {!sidebarCollapsed && adminUser && (
            <div className="mb-4 p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#00a2ad] flex items-center justify-center font-bold text-white uppercase text-sm shrink-0">
                {adminUser.full_name ? adminUser.full_name.charAt(0) : adminUser.email.charAt(0)}
              </div>
              <div className="overflow-hidden">
                <p className="text-xs font-bold text-white truncate">
                  {adminUser.full_name || "Admin Account"}
                </p>
                <p className="text-[11px] text-slate-400 truncate">{adminUser.email}</p>
              </div>
            </div>
          )}

          <button
            onClick={logout}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/20 font-semibold text-xs transition-all cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            {!sidebarCollapsed && <span>Logout Account</span>}
          </button>
        </div>
      </aside>

      {/* ========================================== */}
      {/* MAIN CONTENT AREA                          */}
      {/* ========================================== */}
      <main className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        
        {/* Top Header Bar */}
        <header className="h-20 px-8 bg-[#070D1E]/80 backdrop-blur-md border-b border-slate-800 flex items-center justify-between sticky top-0 z-20">
          <div>
            <h1 className="text-xl font-bold text-white capitalize">
              {activeTab === "overview" && "Dashboard Overview"}
              {activeTab === "users" && "User Account Management"}
              {activeTab === "analytics" && "Platform Analytics & Growth"}
              {activeTab === "settings" && "System Settings"}
            </h1>
            <p className="text-xs text-slate-400 mt-0.5">
              Welcome back, {adminUser?.full_name || "Administrator"}. Here is your live platform status.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Live Status Pill */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Backend API Online
            </div>

            {/* Quick Refresh Button */}
            <button
              onClick={fetchDashboardData}
              disabled={loadingData}
              className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 border border-slate-700/60 transition-all cursor-pointer"
              title="Refresh Data"
            >
              <svg className={`w-4 h-4 ${loadingData ? "animate-spin" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
        </header>

        {/* Dashboard Content Container */}
        <div className="p-8 space-y-8 max-w-[1600px] w-full mx-auto">
          
          {/* Feedback Message */}
          {feedbackMsg && (
            <div
              className={`p-4 rounded-xl border text-sm flex items-center justify-between ${
                feedbackMsg.type === "success"
                  ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                  : "bg-rose-500/10 border-rose-500/30 text-rose-300"
              }`}
            >
              <span>{feedbackMsg.text}</span>
              <button onClick={() => setFeedbackMsg(null)} className="text-slate-400 hover:text-white">
                ✕
              </button>
            </div>
          )}

          {/* ========================================== */}
          {/* STATS OVERVIEW CARDS                       */}
          {/* ========================================== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: Total Users */}
            <div className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-xl relative overflow-hidden group hover:border-[#00a2ad]/50 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Registered Users</span>
                <div className="w-10 h-10 rounded-xl bg-[#00a2ad]/10 border border-[#00a2ad]/20 text-[#00a2ad] flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-extrabold text-white">
                {stats ? stats.total_users : "—"}
              </div>
              <div className="mt-2 text-xs text-emerald-400 font-medium flex items-center gap-1">
                <span>↑ {stats ? stats.new_users_30d : 0} new signups</span>
                <span className="text-slate-500">last 30 days</span>
              </div>
            </div>

            {/* Card 2: Active Accounts */}
            <div className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-xl relative overflow-hidden group hover:border-emerald-500/50 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Verified Users</span>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-extrabold text-white">
                {stats ? stats.active_users : "—"}
              </div>
              <div className="mt-2 text-xs text-slate-400 font-medium">
                {stats && stats.total_users > 0
                  ? `${Math.round((stats.active_users / stats.total_users) * 100)}% of total userbase`
                  : "No data"}
              </div>
            </div>

            {/* Card 3: Inactive / Pending */}
            <div className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-xl relative overflow-hidden group hover:border-amber-500/50 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Unverified Accounts</span>
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-extrabold text-white">
                {stats ? stats.inactive_users : "—"}
              </div>
              <div className="mt-2 text-xs text-amber-400 font-medium">
                Awaiting OTP email activation
              </div>
            </div>

            {/* Card 4: Staff & Admins */}
            <div className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-xl relative overflow-hidden group hover:border-purple-500/50 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Admin & Staff Accounts</span>
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-extrabold text-white">
                {stats ? stats.staff_users : "—"}
              </div>
              <div className="mt-2 text-xs text-purple-300 font-medium">
                Privileged administrative access
              </div>
            </div>

          </div>

          {/* ========================================== */}
          {/* USER REGISTRATION ANALYTICS CHART          */}
          {/* ========================================== */}
          {(activeTab === "overview" || activeTab === "analytics") && (
            <div className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-bold text-white">User Growth Analytics</h2>
                  <p className="text-xs text-slate-400">Monthly new user registrations over time</p>
                </div>
                <span className="px-3 py-1 rounded-lg bg-slate-800 text-xs font-semibold text-slate-300">
                  Last 6 Months
                </span>
              </div>

              {/* Visual SVG Chart */}
              <div className="h-56 w-full flex items-end justify-between gap-4 pt-8 px-4 border-b border-slate-800">
                {stats?.chart_data && stats.chart_data.length > 0 ? (
                  stats.chart_data.map((item, idx) => {
                    const maxCount = Math.max(...stats.chart_data.map((d) => d.count), 1);
                    const heightPercent = Math.max(Math.round((item.count / maxCount) * 100), 12);
                    return (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-2 h-full justify-end group">
                        <span className="text-xs font-bold text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          {item.count} users
                        </span>
                        <div
                          style={{ height: `${heightPercent}%` }}
                          className="w-full max-w-[60px] rounded-t-lg bg-gradient-to-t from-[#00a2ad]/30 to-[#00a2ad] group-hover:from-[#00b4c0] group-hover:to-cyan-400 transition-all duration-300 shadow-lg"
                        ></div>
                        <span className="text-xs font-semibold text-slate-400 mt-2">{item.month}</span>
                      </div>
                    );
                  })
                ) : (
                  <div className="w-full text-center text-slate-500 py-12 text-sm">
                    No historical chart data available.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ========================================== */}
          {/* USER MANAGEMENT DATA TABLE                 */}
          {/* ========================================== */}
          {(activeTab === "overview" || activeTab === "users") && (
            <div className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-xl space-y-6">
              
              {/* Header & Controls */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-white">Registered Users</h2>
                  <p className="text-xs text-slate-400">Manage accounts, status, and permissions</p>
                </div>

                <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                  {/* Search Bar */}
                  <form onSubmit={handleSearchSubmit} className="relative flex-1 sm:w-64">
                    <input
                      type="text"
                      placeholder="Search email or name..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 bg-slate-800/80 border border-slate-700 text-xs text-white rounded-xl focus:outline-none focus:border-[#00a2ad] placeholder:text-slate-500"
                    />
                    <svg className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </form>

                  {/* Role Filter */}
                  <select
                    value={roleFilter}
                    onChange={(e) => setRoleFilter(e.target.value as any)}
                    className="px-3 py-2 bg-slate-800/80 border border-slate-700 text-xs text-slate-300 rounded-xl focus:outline-none focus:border-[#00a2ad]"
                  >
                    <option value="all">All Roles</option>
                    <option value="admin">Admin / Staff</option>
                    <option value="user">Regular Users</option>
                  </select>

                  {/* Status Filter */}
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value as any)}
                    className="px-3 py-2 bg-slate-800/80 border border-slate-700 text-xs text-slate-300 rounded-xl focus:outline-none focus:border-[#00a2ad]"
                  >
                    <option value="all">All Statuses</option>
                    <option value="active">Active Only</option>
                    <option value="inactive">Inactive / Unverified</option>
                  </select>
                </div>
              </div>

              {/* Table Container */}
              <div className="overflow-x-auto rounded-xl border border-slate-800">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900/80 text-slate-400 text-[11px] font-bold uppercase tracking-wider border-b border-slate-800">
                      <th className="py-3.5 px-4">User</th>
                      <th className="py-3.5 px-4">Role</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4">Registered Date</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-xs text-slate-300">
                    {users.length > 0 ? (
                      users.map((user) => (
                        <tr key={user.id} className="hover:bg-slate-800/40 transition-colors">
                          {/* User Avatar & Name */}
                          <td className="py-3.5 px-4">
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-full bg-slate-700 flex items-center justify-center font-bold text-white text-xs shrink-0 overflow-hidden">
                                {user.profile_picture ? (
                                  <img src={user.profile_picture} alt="" className="w-full h-full object-cover" />
                                ) : user.full_name ? (
                                  user.full_name.charAt(0).toUpperCase()
                                ) : (
                                  user.email.charAt(0).toUpperCase()
                                )}
                              </div>
                              <div>
                                <p className="font-bold text-white">
                                  {user.full_name || "—"}
                                </p>
                                <p className="text-slate-400 text-[11px]">{user.email}</p>
                              </div>
                            </div>
                          </td>

                          {/* Role */}
                          <td className="py-3.5 px-4">
                            {user.role === "admin" ? (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-purple-500/10 text-purple-400 border border-purple-500/30 uppercase">
                                ★ Admin
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold bg-slate-800 text-slate-400 border border-slate-700">
                                User
                              </span>
                            )}
                          </td>

                          {/* Status */}
                          <td className="py-3.5 px-4">
                            {user.is_active ? (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                Active
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/30">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                                Unverified
                              </span>
                            )}
                          </td>

                          {/* Date */}
                          <td className="py-3.5 px-4 text-slate-400">
                            {new Date(user.created_at).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </td>

                          {/* Actions */}
                          <td className="py-3.5 px-4 text-right space-x-2">
                            <button
                              onClick={() => setEditingUser(user)}
                              className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 transition-colors cursor-pointer"
                            >
                              Edit
                            </button>

                            <button
                              onClick={() => setDeletingUser(user)}
                              disabled={adminUser?.user_id === user.id}
                              className="px-3 py-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 text-xs font-medium border border-rose-500/20 transition-colors cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="py-12 text-center text-slate-500">
                          {loadingData ? "Loading accounts..." : "No users matched your query."}
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Settings Tab Content Placeholder */}
          {activeTab === "settings" && (
            <div className="p-8 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-xl max-w-2xl">
              <h2 className="text-lg font-bold text-white mb-4">System Settings & Controls</h2>
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div>
                    <h3 className="text-sm font-semibold text-white">Require Email OTP Activation</h3>
                    <p className="text-xs text-slate-400">Newly registered users must verify their email via 6-digit OTP.</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5 accent-[#00a2ad] rounded cursor-pointer" />
                </div>

                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div>
                    <h3 className="text-sm font-semibold text-white">Allow Public Registration</h3>
                    <p className="text-xs text-slate-400">Enable or disable new user signups on the website.</p>
                  </div>
                  <input type="checkbox" defaultChecked className="w-5 h-5 accent-[#00a2ad] rounded cursor-pointer" />
                </div>
              </div>
            </div>
          )}

        </div>
      </main>

      {/* ========================================== */}
      {/* EDIT USER MODAL                            */}
      {/* ========================================== */}
      {editingUser && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0F172A] border border-slate-700 rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-lg font-bold text-white">Edit User Account</h3>
              <button onClick={() => setEditingUser(null)} className="text-slate-400 hover:text-white">
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveUserEdit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Full Name</label>
                <input
                  type="text"
                  value={editingUser.full_name || ""}
                  onChange={(e) => setEditingUser({ ...editingUser, full_name: e.target.value })}
                  className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-[#00a2ad]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Email Address</label>
                <input
                  type="email"
                  value={editingUser.email}
                  onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })}
                  className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-[#00a2ad]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Role</label>
                  <select
                    value={editingUser.role}
                    onChange={(e) => setEditingUser({ ...editingUser, role: e.target.value as any })}
                    className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-[#00a2ad]"
                  >
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-1">Status</label>
                  <select
                    value={editingUser.is_active ? "active" : "inactive"}
                    onChange={(e) => setEditingUser({ ...editingUser, is_active: e.target.value === "active" })}
                    className="w-full px-3 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-[#00a2ad]"
                  >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  </select>
                </div>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setEditingUser(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isUpdating}
                  className="px-4 py-2 rounded-xl bg-[#00a2ad] hover:bg-[#00808a] text-white text-xs font-bold shadow-lg"
                >
                  {isUpdating ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================== */}
      {/* DELETE CONFIRMATION MODAL                  */}
      {/* ========================================== */}
      {deletingUser && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0F172A] border border-rose-500/30 rounded-2xl max-w-sm w-full p-6 shadow-2xl space-y-4">
            <div className="w-12 h-12 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center mx-auto">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>

            <div className="text-center">
              <h3 className="text-base font-bold text-white">Delete User Account?</h3>
              <p className="text-xs text-slate-400 mt-1">
                Are you sure you want to delete <span className="text-rose-300 font-semibold">{deletingUser.email}</span>? This action cannot be undone.
              </p>
            </div>

            <div className="pt-3 flex items-center justify-center gap-3">
              <button
                onClick={() => setDeletingUser(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteUserConfirm}
                disabled={isUpdating}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-lg"
              >
                {isUpdating ? "Deleting..." : "Confirm Delete"}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
