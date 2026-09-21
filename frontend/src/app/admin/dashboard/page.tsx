"use client";

import React, { useState, useEffect, useRef } from "react";
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

interface BookingItem {
  id: number;
  meeting_title: string;
  date: string;
  time_slot: string;
  timezone: string;
  name: string;
  email: string;
  guest_emails: string[];
  phone: string;
  company_name: string | null;
  role: string | null;
  situation: string | null;
  investment_range: string | null;
  engagement_type: string | null;
  outcomes: string[];
  hear_about_us: string | null;
  must_work_notes: string | null;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  admin_notes: string | null;
  created_at: string;
}

interface BookingStatsData {
  total_bookings: number;
  pending_bookings: number;
  confirmed_bookings: number;
  completed_bookings: number;
  cancelled_bookings: number;
}

interface AnalyticsStats {
  total_pageviews: number;
  unique_visitors: number;
  total_time_spent_seconds: number;
  avg_dwell_time_seconds: number;
  top_pages: {
    page_url: string;
    total_views: number;
    unique_visitors: number;
    total_duration: number;
    avg_duration: number;
  }[];
  device_stats: {
    desktop: number;
    mobile: number;
    tablet: number;
  };
}

interface VisitorLogItem {
  id: number;
  session_id: string;
  ip_address: string;
  user_agent: string | null;
  device_type: string;
  page_url: string;
  page_title: string | null;
  section_name: string | null;
  duration_seconds: number;
  user_email: string | null;
  user_name: string | null;
  is_live?: boolean;
  created_at: string;
  updated_at: string;
}

interface AdminCategoryItem {
  id: number;
  name: string;
  slug: string;
  description: string | null;
  posts_count: number;
  created_at: string;
}

interface AdminBlogPostItem {
  id: number;
  title: string;
  slug: string;
  category: AdminCategoryItem;
  author_name: string;
  featured_image: string | null;
  featured_image_url: string | null;
  image: string;
  excerpt: string;
  content: string;
  reading_time_minutes: number;
  views_count: number;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

interface AdminJobPosition {
  id: number;
  title: string;
  category: string;
  type: string;
  date_posted: string | null;
  datePosted?: string;
  application_deadline: string | null;
  applicationDeadline?: string | null;
  vacancies: number;
  description: string | null;
  is_active: boolean;
  applications_count: number;
  created_at: string;
  updated_at: string;
}

interface AdminJobApplication {
  id: number;
  job: number;
  job_title: string;
  name: string;
  email: string;
  phone_number: string | null;
  date_of_birth: string | null;
  education: string | null;
  resume: string | null;
  resume_url: string | null;
  portfolio: string | null;
  cover_note: string | null;
  status: "pending" | "reviewed" | "accepted" | "rejected";
  created_at: string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.autofya.com";


export default function AdminDashboardPage() {
  const { token, adminUser, isAuthenticated, isLoading, logout } = useAdminAuth();
  const router = useRouter();

  // Navigation Tabs State
  const [activeTab, setActiveTab] = useState<"overview" | "users" | "bookings" | "analytics" | "blogs" | "careers" | "marketing" | "settings" | "profile">("overview");

  // Batch Marketing Email Broadcast State
  const [batchRecipients, setBatchRecipients] = useState("");
  const [batchSubject, setBatchSubject] = useState("");
  const [batchMessage, setBatchMessage] = useState("");
  const [batchButtonText, setBatchButtonText] = useState("Explore Autofya Platform →");
  const [batchButtonUrl, setBatchButtonUrl] = useState("https://autofya.com/schedule");
  const [isSendingBatch, setIsSendingBatch] = useState(false);
  const [emailPreviewTab, setEmailPreviewTab] = useState<"edit" | "preview">("edit");

  // User Dashboard Data State
  const [stats, setStats] = useState<StatsData | null>(null);
  const [users, setUsers] = useState<UserItem[]>([]);
  const [loadingData, setLoadingData] = useState(true);

  // Booking Data State
  const [bookings, setBookings] = useState<BookingItem[]>([]);
  const [bookingStats, setBookingStats] = useState<BookingStatsData | null>(null);
  const [bookingSearch, setBookingSearch] = useState("");
  const [bookingStatusFilter, setBookingStatusFilter] = useState<string>("all");
  const [selectedBooking, setSelectedBooking] = useState<BookingItem | null>(null);
  const [deletingBooking, setDeletingBooking] = useState<BookingItem | null>(null);

  // Send Direct Email State
  const [emailingBooking, setEmailingBooking] = useState<BookingItem | null>(null);
  const [emailSubject, setEmailSubject] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [isSendingEmail, setIsSendingEmail] = useState(false);

  // User Filters & Search
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState<"all" | "admin" | "user">("all");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "inactive">("all");

  // Analytics & Traffic Tracking State
  const [analyticsStats, setAnalyticsStats] = useState<AnalyticsStats | null>(null);
  const [visitorLogs, setVisitorLogs] = useState<VisitorLogItem[]>([]);
  const [analyticsSearch, setAnalyticsSearch] = useState("");
  const [logsPage, setLogsPage] = useState(1);
  const [logsTotalPages, setLogsTotalPages] = useState(1);
  const [logsTotalCount, setLogsTotalCount] = useState(0);

  // Blog CMS State
  const [cmsCategories, setCmsCategories] = useState<AdminCategoryItem[]>([]);
  const [cmsPosts, setCmsPosts] = useState<AdminBlogPostItem[]>([]);
  const [cmsSearch, setCmsSearch] = useState("");
  const [cmsCategoryFilter, setCmsCategoryFilter] = useState("");
  const [cmsLoading, setCmsLoading] = useState(false);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  const [categoryNameInput, setCategoryNameInput] = useState("");
  const [categoryDescInput, setCategoryDescInput] = useState("");
  const [editingCategory, setEditingCategory] = useState<AdminCategoryItem | null>(null);

  // Careers & Job Posts CMS State
  const [cmsJobs, setCmsJobs] = useState<AdminJobPosition[]>([]);
  const [cmsJobStats, setCmsJobStats] = useState<{ total_jobs: number; active_jobs: number; total_applications: number } | null>(null);
  const [cmsJobSearch, setCmsJobSearch] = useState("");
  const [cmsJobsLoading, setCmsJobsLoading] = useState(false);
  const [showJobModal, setShowJobModal] = useState(false);
  const [editingJob, setEditingJob] = useState<AdminJobPosition | null>(null);
  const [jobForm, setJobForm] = useState({
    title: "",
    category: "AI & Machine Learning",
    type: "Full-time",
    date_posted: "",
    application_deadline: "",
    vacancies: 1,
    description: "",
    is_active: true,
  });
  const [deletingJob, setDeletingJob] = useState<AdminJobPosition | null>(null);
  const [jobDescTab, setJobDescTab] = useState<"edit" | "preview">("edit");

  const insertJobFormatTag = (openTag: string, closeTag: string = "") => {
    const textarea = document.getElementById("job_description_editor") as HTMLTextAreaElement | null;
    if (!textarea) {
      setJobForm((prev) => ({
        ...prev,
        description: prev.description + openTag + closeTag,
      }));
      return;
    }
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selectedText = text.substring(start, end);
    const replacement = openTag + selectedText + closeTag;
    const newText = text.substring(0, start) + replacement + text.substring(end);
    setJobForm((prev) => ({ ...prev, description: newText }));
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + openTag.length, start + openTag.length + selectedText.length);
    }, 5);
  };

  // Job Applications View State
  const [jobApplications, setJobApplications] = useState<AdminJobApplication[]>([]);
  const [selectedJobForApps, setSelectedJobForApps] = useState<AdminJobPosition | null>(null);
  const [showApplicationsModal, setShowApplicationsModal] = useState(false);
  const [loadingApps, setLoadingApps] = useState(false);

  // Article Modal & Editor State
  const [showArticleModal, setShowArticleModal] = useState(false);
  const [editingArticle, setEditingArticle] = useState<AdminBlogPostItem | null>(null);
  const [articleForm, setArticleForm] = useState({
    title: "",
    category_id: 0,
    author_name: "Autofya Team",
    featured_image_url: "",
    excerpt: "",
    content: "",
    reading_time_minutes: 5,
    is_published: true,
  });
  const [editorTab, setEditorTab] = useState<"visual" | "split" | "preview">("visual");
  const editorTextareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [deletingArticle, setDeletingArticle] = useState<AdminBlogPostItem | null>(null);

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

  // Fetch Dashboard Stats, Users, Bookings, Visitor Analytics, Blog CMS, & Careers
  useEffect(() => {
    if (token) {
      fetchDashboardData();
      fetchBookingData();
      fetchAnalyticsData();
      fetchCMSData();
      fetchJobsData();
    }
  }, [token, roleFilter, statusFilter, bookingStatusFilter, analyticsSearch, cmsSearch, cmsCategoryFilter, cmsJobSearch, activeTab]);

  const formatDuration = (seconds: number) => {
    if (!seconds || seconds <= 0) return "0s";
    const totalSecs = Math.round(seconds);
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    if (mins === 0) return `${secs}s`;
    return `${mins}m ${secs}s`;
  };


  const fetchAnalyticsData = async (pageToFetch?: number) => {
    if (!token) return;
    const targetPage = pageToFetch || logsPage;
    try {
      const statsRes = await fetch(`${API_BASE_URL}/analytics/admin/stats/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const statsJson = await statsRes.json();
      if (statsJson.success) {
        setAnalyticsStats(statsJson.stats);
      }

      let logsUrl = `${API_BASE_URL}/analytics/admin/logs/?search=${encodeURIComponent(analyticsSearch)}&page=${targetPage}&page_size=10`;
      const logsRes = await fetch(logsUrl, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const logsJson = await logsRes.json();
      if (logsJson.success) {
        setVisitorLogs(logsJson.logs);
        setLogsTotalPages(logsJson.total_pages || 1);
        setLogsTotalCount(logsJson.count || 0);
        setLogsPage(logsJson.current_page || 1);
      }
    } catch (err) {
      console.error("Error fetching analytics data:", err);
    }
  };

  const fetchCMSData = async () => {
    if (!token) return;
    setCmsLoading(true);
    try {
      const catRes = await fetch(`${API_BASE_URL}/blogs/admin/categories/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const catData = await catRes.json();
      if (catData.success) {
        setCmsCategories(catData.categories);
      }

      let postUrl = `${API_BASE_URL}/blogs/admin/posts/?search=${encodeURIComponent(cmsSearch)}`;
      if (cmsCategoryFilter) {
        postUrl += `&category_id=${cmsCategoryFilter}`;
      }
      const postRes = await fetch(postUrl, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const postData = await postRes.json();
      if (postData.success) {
        setCmsPosts(postData.posts);
      }
    } catch (err) {
      console.error("Error fetching CMS data:", err);
    } finally {
      setCmsLoading(false);
    }
  };

  const fetchJobsData = async () => {
    if (!token) return;
    setCmsJobsLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/careers/admin/jobs/?search=${encodeURIComponent(cmsJobSearch)}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success) {
        setCmsJobs(data.jobs);
        setCmsJobStats(data.stats);
      }
    } catch (err) {
      console.error("Error fetching admin jobs data:", err);
    } finally {
      setCmsJobsLoading(false);
    }
  };

  const handleOpenNewJobModal = () => {
    setEditingJob(null);
    setJobForm({
      title: "",
      category: "Software Engineering",
      type: "Full-time",
      date_posted: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
      application_deadline: "",
      vacancies: 1,
      description: "",
      is_active: true,
    });
    setJobDescTab("edit");
    setShowJobModal(true);
  };

  const handleOpenEditJobModal = (job: AdminJobPosition) => {
    setEditingJob(job);
    setJobForm({
      title: job.title,
      category: job.category,
      type: job.type,
      date_posted: job.date_posted || "",
      application_deadline: job.application_deadline || "",
      vacancies: job.vacancies,
      description: job.description || "",
      is_active: job.is_active,
    });
    setJobDescTab("edit");
    setShowJobModal(true);
  };

  const handleSaveJob = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!jobForm.title.trim() || !jobForm.category.trim()) {
      setFeedbackMsg({ type: "error", text: "Please enter Job Title and Category." });
      return;
    }
    setIsUpdating(true);
    try {
      const url = editingJob
        ? `${API_BASE_URL}/careers/admin/jobs/${editingJob.id}/`
        : `${API_BASE_URL}/careers/admin/jobs/`;
      const method = editingJob ? "PATCH" : "POST";
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(jobForm),
      });
      const data = await res.json();
      if (data.success) {
        setFeedbackMsg({ type: "success", text: data.message || "Job position saved successfully." });
        setShowJobModal(false);
        fetchJobsData();
      } else {
        setFeedbackMsg({ type: "error", text: JSON.stringify(data.message) });
      }
    } catch (err: any) {
      setFeedbackMsg({ type: "error", text: err.message || "Failed to save job position." });
    } finally {
      setIsUpdating(false);
    }
  };

  const handleToggleJobActive = async (job: AdminJobPosition) => {
    try {
      const res = await fetch(`${API_BASE_URL}/careers/admin/jobs/${job.id}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ is_active: !job.is_active }),
      });
      const data = await res.json();
      if (data.success) {
        setFeedbackMsg({
          type: "success",
          text: `Job position "${job.title}" ${!job.is_active ? "activated" : "deactivated"}.`,
        });
        fetchJobsData();
      }
    } catch (err) {
      console.error("Error toggling job active status:", err);
    }
  };

  const handleDeleteJobConfirm = async () => {
    if (!deletingJob) return;
    setIsUpdating(true);
    try {
      const res = await fetch(`${API_BASE_URL}/careers/admin/jobs/${deletingJob.id}/`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success) {
        setFeedbackMsg({ type: "success", text: "Job position deleted." });
        setDeletingJob(null);
        fetchJobsData();
      }
    } catch (err) {
      console.error("Error deleting job position:", err);
    } finally {
      setIsUpdating(false);
    }
  };

  const handleViewApplications = async (job?: AdminJobPosition) => {
    setSelectedJobForApps(job || null);
    setShowApplicationsModal(true);
    setLoadingApps(true);
    try {
      let url = `${API_BASE_URL}/careers/admin/applications/`;
      if (job) {
        url += `?job_id=${job.id}`;
      }
      const res = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success) {
        setJobApplications(data.applications);
      }
    } catch (err) {
      console.error("Error fetching job applications:", err);
    } finally {
      setLoadingApps(false);
    }
  };

  const handleUpdateAppStatus = async (appId: number, status: string) => {
    try {
      const res = await fetch(`${API_BASE_URL}/careers/admin/applications/${appId}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });
      const data = await res.json();
      if (data.success) {
        setFeedbackMsg({ type: "success", text: "Application status updated." });
        handleViewApplications(selectedJobForApps || undefined);
      }
    } catch (err) {
      console.error("Error updating application status:", err);
    }
  };

  const handleSaveCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!categoryNameInput.trim()) return;
    setIsUpdating(true);
    try {
      const url = editingCategory
        ? `${API_BASE_URL}/blogs/admin/categories/${editingCategory.id}/`
        : `${API_BASE_URL}/blogs/admin/categories/`;
      const method = editingCategory ? "PATCH" : "POST";
      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: categoryNameInput,
          description: categoryDescInput,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setFeedbackMsg({ type: "success", text: data.message || "Category saved successfully." });
        setCategoryNameInput("");
        setCategoryDescInput("");
        setEditingCategory(null);
        fetchCMSData();
      } else {
        setFeedbackMsg({ type: "error", text: JSON.stringify(data.message) });
      }
    } catch (err: any) {
      setFeedbackMsg({ type: "error", text: err.message || "Failed to save category." });
    } finally {
      setIsUpdating(false);
    }
  };

  const handleDeleteCategory = async (catId: number) => {
    if (!confirm("Are you sure you want to delete this category?")) return;
    try {
      const res = await fetch(`${API_BASE_URL}/blogs/admin/categories/${catId}/`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success) {
        setFeedbackMsg({ type: "success", text: "Category deleted." });
        fetchCMSData();
      }
    } catch (err) {
      console.error("Error deleting category:", err);
    }
  };

  const [articleImageFile, setArticleImageFile] = useState<File | null>(null);

  const handleOpenNewArticleModal = () => {
    setEditingArticle(null);
    setArticleImageFile(null);
    setArticleForm({
      title: "",
      category_id: cmsCategories.length > 0 ? cmsCategories[0].id : 0,
      author_name: adminUser?.full_name || "Autofya Team",
      featured_image_url: "",
      excerpt: "",
      content: "<h2>Introduction</h2>\n<p>Write your article content here...</p>",
      reading_time_minutes: 5,
      is_published: true,
    });
    setEditorTab("visual");
    setShowArticleModal(true);
  };

  const handleOpenEditArticleModal = (post: AdminBlogPostItem) => {
    setEditingArticle(post);
    setArticleImageFile(null);
    setArticleForm({
      title: post.title,
      category_id: post.category?.id || 0,
      author_name: post.author_name || "Autofya Team",
      featured_image_url: post.featured_image_url || "",
      excerpt: post.excerpt || "",
      content: post.content || "",
      reading_time_minutes: post.reading_time_minutes || 5,
      is_published: post.is_published,
    });
    setEditorTab("visual");
    setShowArticleModal(true);
  };

  const handleSaveArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!articleForm.title.trim() || !articleForm.category_id || !articleForm.content.trim()) {
      setFeedbackMsg({ type: "error", text: "Please fill in Title, Category, and Article Content." });
      return;
    }
    setIsUpdating(true);
    try {
      const url = editingArticle
        ? `${API_BASE_URL}/blogs/admin/posts/${editingArticle.id}/`
        : `${API_BASE_URL}/blogs/admin/posts/`;
      const method = editingArticle ? "PATCH" : "POST";

      let body: FormData | string;
      let headers: Record<string, string> = { Authorization: `Bearer ${token}` };

      if (articleImageFile) {
        const formData = new FormData();
        formData.append("title", articleForm.title);
        formData.append("category_id", String(articleForm.category_id));
        formData.append("author_name", articleForm.author_name);
        formData.append("excerpt", articleForm.excerpt);
        formData.append("content", articleForm.content);
        formData.append("reading_time_minutes", String(articleForm.reading_time_minutes));
        formData.append("is_published", String(articleForm.is_published));
        formData.append("featured_image", articleImageFile);
        if (articleForm.featured_image_url) {
          formData.append("featured_image_url", articleForm.featured_image_url);
        }
        body = formData;
      } else {
        headers["Content-Type"] = "application/json";
        body = JSON.stringify(articleForm);
      }

      const res = await fetch(url, { method, headers, body });
      const data = await res.json();
      if (data.success) {
        setFeedbackMsg({ type: "success", text: data.message || "Article saved successfully." });
        setShowArticleModal(false);
        setArticleImageFile(null);
        fetchCMSData();
      } else {
        setFeedbackMsg({ type: "error", text: JSON.stringify(data.message) });
      }
    } catch (err: any) {
      setFeedbackMsg({ type: "error", text: err.message || "Failed to save article." });
    } finally {
      setIsUpdating(false);
    }
  };

  const handleTogglePublish = async (post: AdminBlogPostItem) => {
    try {
      const res = await fetch(`${API_BASE_URL}/blogs/admin/posts/${post.id}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ is_published: !post.is_published }),
      });
      const data = await res.json();
      if (data.success) {
        setFeedbackMsg({
          type: "success",
          text: `Article "${post.title}" ${!post.is_published ? "published" : "set to draft"}.`,
        });
        fetchCMSData();
      }
    } catch (err) {
      console.error("Error toggling publish:", err);
    }
  };

  const handleDeleteArticleConfirm = async () => {
    if (!deletingArticle) return;
    setIsUpdating(true);
    try {
      const res = await fetch(`${API_BASE_URL}/blogs/admin/posts/${deletingArticle.id}/`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success) {
        setFeedbackMsg({ type: "success", text: "Article deleted." });
        setDeletingArticle(null);
        fetchCMSData();
      }
    } catch (err) {
      console.error("Error deleting article:", err);
    } finally {
      setIsUpdating(false);
    }
  };

  const insertFormatTag = (openTag: string, closeTag: string = "", defaultText: string = "") => {
    const textarea = editorTextareaRef.current;
    if (!textarea) {
      setArticleForm((prev) => ({
        ...prev,
        content: prev.content + `\n${openTag}${defaultText}${closeTag}`,
      }));
      return;
    }

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const currentText = articleForm.content;
    const selectedText = currentText.substring(start, end) || defaultText;

    const replacement = `${openTag}${selectedText}${closeTag}`;
    const newContent = currentText.substring(0, start) + replacement + currentText.substring(end);

    setArticleForm((prev) => ({ ...prev, content: newContent }));

    setTimeout(() => {
      textarea.focus();
      const newCursorPos = start + openTag.length + selectedText.length;
      textarea.setSelectionRange(start + openTag.length, newCursorPos);
    }, 50);
  };

  const handleInsertLink = () => {
    const url = prompt("Enter hyperlink URL (e.g. https://autofya.com/docs):", "https://");
    if (!url) return;
    const text = prompt("Enter link display text:", "Click here to read more");
    insertFormatTag(`<a href="${url}" target="_blank" rel="noopener noreferrer" class="text-[#00a2ad] underline hover:text-[#008790]">`, "</a>", text || "Link");
  };

  const handleInsertImageFigure = () => {
    const url = prompt("Enter image URL:", "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80");
    if (!url) return;
    const alt = prompt("Enter alt description:", "Illustration of AI automation platform");
    const caption = prompt("Enter image caption text:", "Figure 1: Autofya architecture overview");
    const figureHtml = `\n<figure class="my-6 text-center">\n  <img src="${url}" alt="${alt || ''}" class="rounded-xl border border-slate-700 w-full max-h-[450px] object-cover shadow-lg mx-auto" />\n  ${caption ? `<figcaption class="text-xs text-slate-400 mt-2 italic font-mono">${caption}</figcaption>` : ''}\n</figure>\n`;
    insertFormatTag(figureHtml);
  };

  const handleInsertVideoEmbed = () => {
    const videoUrl = prompt("Enter YouTube / Vimeo Video URL or Embed Link:", "https://www.youtube.com/embed/dQw4w9WgXcQ");
    if (!videoUrl) return;
    let finalEmbedUrl = videoUrl;
    if (videoUrl.includes("watch?v=")) {
      finalEmbedUrl = videoUrl.replace("watch?v=", "embed/");
    }
    const videoHtml = `\n<div class="relative w-full aspect-video my-6 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">\n  <iframe src="${finalEmbedUrl}" title="Video player" class="absolute top-0 left-0 w-full h-full border-0" allowfullscreen></iframe>\n</div>\n`;
    insertFormatTag(videoHtml);
  };

  const handleInsertCodeBlock = () => {
    const lang = prompt("Enter programming language (javascript, python, html, json, sql, bash):", "javascript") || "javascript";
    const codeSnippet = `\n<pre class="bg-slate-950 p-4 rounded-xl border border-slate-800 my-4 font-mono text-xs text-emerald-400 overflow-x-auto"><code class="language-${lang}">// ${lang.toUpperCase()} Code Example\nfunction executePipeline() {\n  console.log("Running Autofya AI Agent Task...");\n}</code></pre>\n`;
    insertFormatTag(codeSnippet);
  };

  const handleInsertTable = () => {
    const rowsStr = prompt("Enter number of table rows:", "3");
    const colsStr = prompt("Enter number of table columns:", "3");
    const rows = parseInt(rowsStr || "3", 10);
    const cols = parseInt(colsStr || "3", 10);
    if (isNaN(rows) || isNaN(cols)) return;

    let headers = "";
    for (let c = 1; c <= cols; c++) {
      headers += `        <th class="p-3 border border-slate-700 bg-slate-800/90 text-[#00a2ad] text-xs font-bold uppercase tracking-wider text-left">Header ${c}</th>\n`;
    }
    let bodyRows = "";
    for (let r = 1; r <= rows; r++) {
      bodyRows += "      <tr class=\"hover:bg-slate-800/40 transition-colors\">\n";
      for (let c = 1; c <= cols; c++) {
        bodyRows += `        <td class="p-3 border border-slate-800 text-xs text-slate-300 font-medium">Row ${r} Col ${c}</td>\n`;
      }
      bodyRows += "      </tr>\n";
    }

    const tableHtml = `\n<div class="overflow-x-auto my-6 rounded-xl border border-slate-800 shadow-lg">\n  <table class="w-full border-collapse text-left">\n    <thead>\n      <tr>\n${headers}      </tr>\n    </thead>\n    <tbody>\n${bodyRows}    </tbody>\n  </table>\n</div>\n`;
    insertFormatTag(tableHtml);
  };

  const handleInsertCTAButton = () => {
    const text = prompt("Enter CTA Button text:", "Get Started Free →");
    if (!text) return;
    const link = prompt("Enter target URL:", "https://autofya.com/contact");
    if (!link) return;
    const ctaHtml = `\n<div class="my-6 text-center">\n  <a href="${link}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-[#00a2ad] to-[#008790] text-white font-bold text-sm shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5">\n    ${text}\n  </a>\n</div>\n`;
    insertFormatTag(ctaHtml);
  };

  const handleInsertAccordion = () => {
    const title = prompt("Enter FAQ / Collapsible Question:", "How does Autofya AI work?");
    if (!title) return;
    const content = prompt("Enter Answer / Detail text:", "Autofya automates your software development workflows through intelligent agent pipelines...");
    const accordionHtml = `\n<details class="my-4 p-4 bg-slate-900/90 rounded-xl border border-slate-800 group transition-all">\n  <summary class="font-bold text-sm text-cyan-400 cursor-pointer list-none flex items-center justify-between">\n    <span>❓ ${title}</span>\n    <span class="text-xs text-slate-400 group-open:rotate-180 transition-transform">▼</span>\n  </summary>\n  <p class="mt-3 text-xs text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">${content || 'Details here...'}</p>\n</details>\n`;
    insertFormatTag(accordionHtml);
  };

  const handleInsertStatsCard = () => {
    const statsHtml = `\n<div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">\n  <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center shadow-lg">\n    <div class="text-2xl font-extrabold text-[#00a2ad]">99.9%</div>\n    <div class="text-xs text-slate-400 mt-1">Uptime SLA</div>\n  </div>\n  <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center shadow-lg">\n    <div class="text-2xl font-extrabold text-cyan-400">10x</div>\n    <div class="text-xs text-slate-400 mt-1">Speed Advantage</div>\n  </div>\n  <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center shadow-lg">\n    <div class="text-2xl font-extrabold text-amber-400">50,000+</div>\n    <div class="text-xs text-slate-400 mt-1">Workflows Automated</div>\n  </div>\n</div>\n`;
    insertFormatTag(statsHtml);
  };

  const handleLoadSampleTemplate = () => {
    if (articleForm.content.trim() && !confirm("Replace current editor content with full sample blog article template?")) {
      return;
    }
    const sampleHtml = `<p class="lead text-lg text-slate-200">Artificial Intelligence is revolutionizing enterprise software development. Learn how Autofya empowers teams to automate complex coding tasks at scale.</p>

<h2>1. Introduction to Next-Gen Automation</h2>
<p>Modern engineering organizations face mounting pressure to deliver software faster without sacrificing security or code quality. By leveraging intelligent autonomous agent systems, developers can focus on core architecture while repetitive boilerplate is handled automatically.</p>

<div class="p-4 rounded-xl border-l-4 border-cyan-500 bg-cyan-950/20 my-6">
  <strong class="text-cyan-400 block mb-1">💡 Key Insight</strong>
  <p class="text-xs text-slate-300">Automating integration test pipelines reduces regression cycles by up to 75% across large multi-repo codebases.</p>
</div>

<h2>2. Key Performance Metrics</h2>
<p>Below is a comparative breakdown of traditional development workflows vs Autofya-accelerated pipelines:</p>

<div class="overflow-x-auto my-6 rounded-xl border border-slate-800 shadow-lg">
  <table class="w-full border-collapse text-left">
    <thead>
      <tr>
        <th class="p-3 border border-slate-700 bg-slate-800/90 text-[#00a2ad] text-xs font-bold uppercase tracking-wider">Metric</th>
        <th class="p-3 border border-slate-700 bg-slate-800/90 text-[#00a2ad] text-xs font-bold uppercase tracking-wider">Manual Process</th>
        <th class="p-3 border border-slate-700 bg-slate-800/90 text-[#00a2ad] text-xs font-bold uppercase tracking-wider">Autofya AI Workflow</th>
      </tr>
    </thead>
    <tbody>
      <tr class="hover:bg-slate-800/40 transition-colors">
        <td class="p-3 border border-slate-800 text-xs text-slate-200 font-semibold">Boilerplate Generation</td>
        <td class="p-3 border border-slate-800 text-xs text-slate-400">4 - 6 Hours</td>
        <td class="p-3 border border-slate-800 text-xs text-cyan-400 font-bold">&lt; 30 Seconds</td>
      </tr>
      <tr class="hover:bg-slate-800/40 transition-colors">
        <td class="p-3 border border-slate-800 text-xs text-slate-200 font-semibold">API Test Suite Coverage</td>
        <td class="p-3 border border-slate-800 text-xs text-slate-400">Manual Scripting</td>
        <td class="p-3 border border-slate-800 text-xs text-cyan-400 font-bold">100% Automated</td>
      </tr>
    </tbody>
  </table>
</div>

<h2>3. Code Example: Autonomous Execution</h2>
<p>Here is how easy it is to initialize an automated task runner using our standard SDK:</p>

<pre class="bg-slate-950 p-4 rounded-xl border border-slate-800 my-4 font-mono text-xs text-emerald-400 overflow-x-auto"><code class="language-javascript">// Initialize Autofya Autonomous Engine
import { AutofyaAgent } from "@autofya/sdk";

const agent = new AutofyaAgent({ apiKey: process.env.AUTOFYA_KEY });
const result = await agent.runTask("Optimize database queries and add indexing");
console.log("Task Status:", result.status);</code></pre>

<h2>4. Frequently Asked Questions</h2>
<details class="my-4 p-4 bg-slate-900/90 rounded-xl border border-slate-800 group transition-all">
  <summary class="font-bold text-sm text-cyan-400 cursor-pointer list-none flex items-center justify-between">
    <span>❓ How does Autofya handle security and privacy?</span>
    <span class="text-xs text-slate-400 group-open:rotate-180 transition-transform">▼</span>
  </summary>
  <p class="mt-3 text-xs text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">All code analysis runs within dedicated, isolated sandbox environments with zero persistent storage of proprietary customer logic.</p>
</details>

<div class="my-8 text-center">
  <a href="https://autofya.com/contact" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-[#00a2ad] to-[#008790] text-white font-bold text-sm shadow-lg hover:shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5">
    Schedule a Demo with Autofya Engineers →
  </a>
</div>`;

    setArticleForm((prev) => ({ ...prev, content: sampleHtml }));
  };



  const fetchDashboardData = async () => {
    setLoadingData(true);
    try {
      // Fetch user stats
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
      console.error("Error fetching admin user data:", err);
    } finally {
      setLoadingData(false);
    }
  };

  const fetchBookingData = async () => {
    try {
      // Fetch booking stats
      const statsRes = await fetch(`${API_BASE_URL}/bookings/admin/stats/`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const statsJson = await statsRes.json();
      if (statsJson.success) {
        setBookingStats(statsJson.stats);
      }

      // Fetch bookings list
      let url = `${API_BASE_URL}/bookings/admin/?search=${encodeURIComponent(bookingSearch)}`;
      if (bookingStatusFilter !== "all") url += `&status=${bookingStatusFilter}`;

      const res = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const json = await res.json();
      if (json.success) {
        setBookings(json.bookings);
      }
    } catch (err) {
      console.error("Error fetching admin booking data:", err);
    }
  };

  // Trigger User Search
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchDashboardData();
  };

  // Trigger Booking Search
  const handleBookingSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchBookingData();
  };

  // Handle Save User Edit
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

  // Update Booking Status / Admin Notes
  const handleUpdateBookingStatus = async (
    bookingId: number,
    newStatus: string,
    adminNotes?: string
  ) => {
    if (!token) return;
    setIsUpdating(true);
    setFeedbackMsg(null);

    try {
      const bodyPayload: any = { status: newStatus };
      if (adminNotes !== undefined) bodyPayload.admin_notes = adminNotes;

      const res = await fetch(`${API_BASE_URL}/bookings/admin/${bookingId}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bodyPayload),
      });

      const json = await res.json();
      if (res.ok && json.success) {
        setFeedbackMsg({ type: "success", text: `Booking status updated to ${newStatus}.` });
        if (selectedBooking && selectedBooking.id === bookingId) {
          setSelectedBooking(json.booking);
        }
        fetchBookingData();
      } else {
        setFeedbackMsg({ type: "error", text: json.message || "Failed to update booking status." });
      }
    } catch (err) {
      setFeedbackMsg({ type: "error", text: "Server error while updating booking." });
    } finally {
      setIsUpdating(false);
    }
  };

  // Delete Booking Confirm
  const handleDeleteBookingConfirm = async () => {
    if (!deletingBooking || !token) return;

    setIsUpdating(true);
    setFeedbackMsg(null);

    try {
      const res = await fetch(`${API_BASE_URL}/bookings/admin/${deletingBooking.id}/`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      const json = await res.json();
      if (res.ok && json.success) {
        setFeedbackMsg({ type: "success", text: "Booking deleted successfully." });
        setDeletingBooking(null);
        if (selectedBooking?.id === deletingBooking.id) setSelectedBooking(null);
        fetchBookingData();
      } else {
        setFeedbackMsg({ type: "error", text: json.message || "Failed to delete booking." });
      }
    } catch (err) {
      setFeedbackMsg({ type: "error", text: "Server error while deleting booking." });
    } finally {
      setIsUpdating(false);
    }
  };

  // Send Custom Email to Booking Client
  const handleSendCustomEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailingBooking || !token) return;

    if (!emailSubject.trim() || !emailMessage.trim()) {
      setFeedbackMsg({ type: "error", text: "Please provide both Subject and Message." });
      return;
    }

    setIsSendingEmail(true);
    setFeedbackMsg(null);

    try {
      const res = await fetch(`${API_BASE_URL}/bookings/admin/${emailingBooking.id}/send-email/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          subject: emailSubject,
          message: emailMessage,
        }),
      });

      const json = await res.json();
      if (res.ok && json.success) {
        setFeedbackMsg({ type: "success", text: `Email sent to ${emailingBooking.email} successfully!` });
        setEmailingBooking(null);
        setEmailSubject("");
        setEmailMessage("");
      } else {
        setFeedbackMsg({ type: "error", text: json.message || "Failed to send email." });
      }
    } catch (err) {
      setFeedbackMsg({ type: "error", text: "Server error occurred while sending email." });
    } finally {
      setIsSendingEmail(false);
    }
  };

  // Import all booking client emails
  const handleLoadClientEmails = () => {
    if (!bookings || bookings.length === 0) {
      setFeedbackMsg({ type: "error", text: "No booking client emails available to import." });
      return;
    }
    const uniqueEmails = Array.from(new Set(bookings.map((b) => b.email).filter(Boolean)));
    setBatchRecipients(uniqueEmails.join(", "));
    setFeedbackMsg({ type: "success", text: `Imported ${uniqueEmails.length} unique client email address(es).` });
  };

  // Send Marketing Batch Broadcast Email
  const handleSendBatchEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;

    if (!batchRecipients.trim() || !batchSubject.trim() || !batchMessage.trim()) {
      setFeedbackMsg({ type: "error", text: "Please enter Recipients, Subject, and Message." });
      return;
    }

    setIsSendingBatch(true);
    setFeedbackMsg(null);

    try {
      const res = await fetch(`${API_BASE_URL}/bookings/admin/send-batch-email/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          recipients: batchRecipients,
          subject: batchSubject,
          message: batchMessage,
          button_text: batchButtonText,
          button_url: batchButtonUrl,
        }),
      });

      const json = await res.json();
      if (res.ok && json.success) {
        setFeedbackMsg({ type: "success", text: json.message || "Marketing email batch dispatched successfully!" });
        setBatchRecipients("");
        setBatchSubject("");
        setBatchMessage("");
      } else {
        setFeedbackMsg({ type: "error", text: json.message || "Failed to send marketing batch emails." });
      }
    } catch (err) {
      setFeedbackMsg({ type: "error", text: "Server error occurred while sending batch emails." });
    } finally {
      setIsSendingBatch(false);
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
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors cursor-pointer"
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
              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
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

            {/* Bookings Tab */}
            <button
              onClick={() => setActiveTab("bookings")}
              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "bookings"
                  ? "bg-gradient-to-r from-[#00a2ad] to-[#00808a] text-white shadow-lg shadow-[#00a2ad]/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {!sidebarCollapsed && (
                <div className="flex items-center justify-between w-full">
                  <span>Schedule Bookings</span>
                  {bookingStats && bookingStats.pending_bookings > 0 && (
                    <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-amber-500 text-black animate-pulse">
                      {bookingStats.pending_bookings}
                    </span>
                  )}
                </div>
              )}
            </button>

            <button
              onClick={() => setActiveTab("users")}
              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
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
                  <span>User Accounts</span>
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
              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "analytics"
                  ? "bg-gradient-to-r from-[#00a2ad] to-[#00808a] text-white shadow-lg shadow-[#00a2ad]/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 012-2h2a2 2 0 012 2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              {!sidebarCollapsed && <span>Analytics & Growth</span>}
            </button>

            {/* Blog CMS Tab */}
            <button
              onClick={() => setActiveTab("blogs")}
              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "blogs"
                  ? "bg-gradient-to-r from-[#00a2ad] to-[#00808a] text-white shadow-lg shadow-[#00a2ad]/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              {!sidebarCollapsed && (
                <div className="flex items-center justify-between w-full">
                  <span>Blog CMS</span>
                  {cmsPosts.length > 0 && (
                    <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-[#00a2ad]/20 text-[#00a2ad]">
                      {cmsPosts.length}
                    </span>
                  )}
                </div>
              )}
            </button>

            {/* Careers & Jobs Tab */}
            <button
              onClick={() => setActiveTab("careers")}
              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "careers"
                  ? "bg-gradient-to-r from-[#00a2ad] to-[#00808a] text-white shadow-lg shadow-[#00a2ad]/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {!sidebarCollapsed && (
                <div className="flex items-center justify-between w-full">
                  <span>Careers & Jobs</span>
                  {cmsJobStats && cmsJobStats.total_jobs > 0 && (
                    <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-[#00a2ad]/20 text-[#00a2ad]">
                      {cmsJobStats.total_jobs}
                    </span>
                  )}
                </div>
              )}
            </button>

            {/* Marketing Email Broadcast Tab */}
            <button
              onClick={() => setActiveTab("marketing")}
              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                activeTab === "marketing"
                  ? "bg-gradient-to-r from-[#00a2ad] to-[#00808a] text-white shadow-lg shadow-[#00a2ad]/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/50"
              }`}
            >
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {!sidebarCollapsed && <span>Marketing Broadcast</span>}
            </button>

            <button
              onClick={() => setActiveTab("settings")}
              className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
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
              {activeTab === "bookings" && "Schedule Call Bookings"}
              {activeTab === "users" && "User Account Management"}
              {activeTab === "analytics" && "Platform Analytics & Growth"}
              {activeTab === "blogs" && "Blog Article CMS"}
              {activeTab === "careers" && "Careers & Job Openings CMS"}
              {activeTab === "marketing" && "Marketing Email Broadcast"}
              {activeTab === "settings" && "System Settings"}
            </h1>
            <p className="text-xs text-slate-400 mt-0.5">
              Welcome back, {adminUser?.full_name || "Administrator"}. Here is your live platform status.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Backend API Online
            </div>

            <button
              onClick={() => {
                fetchDashboardData();
                fetchBookingData();
                fetchAnalyticsData();
              }}
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
            
            {/* Card 1: Total Bookings */}
            <div
              onClick={() => setActiveTab("bookings")}
              className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-xl relative overflow-hidden group hover:border-[#00a2ad]/50 transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Schedule Bookings</span>
                <div className="w-10 h-10 rounded-xl bg-[#00a2ad]/10 border border-[#00a2ad]/20 text-[#00a2ad] flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-extrabold text-white">
                {bookingStats ? bookingStats.total_bookings : 0}
              </div>
              <div className="mt-2 text-xs text-amber-400 font-medium flex items-center gap-1">
                <span>{bookingStats ? bookingStats.pending_bookings : 0} pending review</span>
              </div>
            </div>

            {/* Card 2: Total Users */}
            <div
              onClick={() => setActiveTab("users")}
              className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-xl relative overflow-hidden group hover:border-blue-500/50 transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Registered Users</span>
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-extrabold text-white">
                {stats ? stats.total_users : "—"}
              </div>
              <div className="mt-2 text-xs text-emerald-400 font-medium">
                ↑ {stats ? stats.new_users_30d : 0} signups last 30d
              </div>
            </div>

            {/* Card 3: Active Verified Users */}
            <div className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-xl relative overflow-hidden group hover:border-emerald-500/50 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Verified Accounts</span>
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
                  ? `${Math.round((stats.active_users / stats.total_users) * 100)}% of userbase`
                  : "No data"}
              </div>
            </div>

            {/* Card 4: Confirmed Meetings */}
            <div className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-xl relative overflow-hidden group hover:border-purple-500/50 transition-all">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Confirmed Meetings</span>
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              <div className="text-3xl font-extrabold text-white">
                {bookingStats ? bookingStats.confirmed_bookings : 0}
              </div>
              <div className="mt-2 text-xs text-purple-300 font-medium">
                Ready for consultation call
              </div>
            </div>

          </div>

          {/* ========================================== */}
          {/* SCHEDULE BOOKINGS MANAGEMENT SECTION       */}
          {/* ========================================== */}
          {(activeTab === "overview" || activeTab === "bookings") && (
            <div className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-xl space-y-6">
              
              {/* Header & Controls */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <span>Schedule Call Bookings</span>
                    {bookingStats && bookingStats.pending_bookings > 0 && (
                      <span className="px-2 py-0.5 rounded-full text-xs font-extrabold bg-amber-500/20 text-amber-400 border border-amber-500/30">
                        {bookingStats.pending_bookings} Action Required
                      </span>
                    )}
                  </h2>
                  <p className="text-xs text-slate-400">Incoming consultation booking requests from prospective clients</p>
                </div>

                <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                  {/* Search Bar */}
                  <form onSubmit={handleBookingSearchSubmit} className="relative flex-1 sm:w-64">
                    <input
                      type="text"
                      placeholder="Search name, email, company..."
                      value={bookingSearch}
                      onChange={(e) => setBookingSearch(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 bg-slate-800/80 border border-slate-700 text-xs text-white rounded-xl focus:outline-none focus:border-[#00a2ad] placeholder:text-slate-500"
                    />
                    <svg className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </form>

                  {/* Booking Status Filter */}
                  <select
                    value={bookingStatusFilter}
                    onChange={(e) => setBookingStatusFilter(e.target.value)}
                    className="px-3 py-2 bg-slate-800/80 border border-slate-700 text-xs text-slate-300 rounded-xl focus:outline-none focus:border-[#00a2ad] cursor-pointer"
                  >
                    <option value="all">All Bookings ({bookingStats?.total_bookings || 0})</option>
                    <option value="pending">Pending ({bookingStats?.pending_bookings || 0})</option>
                    <option value="confirmed">Confirmed ({bookingStats?.confirmed_bookings || 0})</option>
                    <option value="completed">Completed ({bookingStats?.completed_bookings || 0})</option>
                    <option value="cancelled">Cancelled ({bookingStats?.cancelled_bookings || 0})</option>
                  </select>
                </div>
              </div>

              {/* Bookings Table Container */}
              <div className="overflow-x-auto rounded-xl border border-slate-800">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-900/80 text-slate-400 text-[11px] font-bold uppercase tracking-wider border-b border-slate-800">
                      <th className="py-3.5 px-4">Client Contact</th>
                      <th className="py-3.5 px-4">Meeting Date & Time</th>
                      <th className="py-3.5 px-4">Company / Role</th>
                      <th className="py-3.5 px-4">Budget Range</th>
                      <th className="py-3.5 px-4">Status</th>
                      <th className="py-3.5 px-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-xs text-slate-300">
                    {bookings.length > 0 ? (
                      bookings.map((booking) => (
                        <tr key={booking.id} className="hover:bg-slate-800/40 transition-colors">
                          
                          {/* Client Name & Phone */}
                          <td className="py-3.5 px-4">
                            <div>
                              <p className="font-bold text-white text-sm">{booking.name}</p>
                              <p className="text-[#00a2ad] text-xs font-semibold">{booking.email}</p>
                              <p className="text-slate-400 text-[11px]">{booking.phone}</p>
                            </div>
                          </td>

                          {/* Date & Slot */}
                          <td className="py-3.5 px-4">
                            <div>
                              <p className="font-bold text-white">{booking.date}</p>
                              <p className="text-amber-400 text-xs font-semibold">{booking.time_slot}</p>
                              <p className="text-slate-400 text-[11px]">{booking.timezone}</p>
                            </div>
                          </td>

                          {/* Company / Role */}
                          <td className="py-3.5 px-4">
                            <p className="font-semibold text-slate-200">{booking.company_name || "N/A"}</p>
                            <p className="text-slate-400 text-[11px]">{booking.role || "N/A"}</p>
                          </td>

                          {/* Budget & Engagement */}
                          <td className="py-3.5 px-4">
                            <p className="font-bold text-emerald-400">{booking.investment_range || "N/A"}</p>
                            <p className="text-slate-400 text-[11px]">{booking.engagement_type || "N/A"}</p>
                          </td>

                          {/* Status Badge */}
                          <td className="py-3.5 px-4">
                            {booking.status === "pending" && (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-amber-500/15 text-amber-400 border border-amber-500/30 uppercase">
                                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping"></span>
                                Pending
                              </span>
                            )}
                            {booking.status === "confirmed" && (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-blue-500/15 text-blue-400 border border-blue-500/30 uppercase">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                                Confirmed
                              </span>
                            )}
                            {booking.status === "completed" && (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 uppercase">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                Completed
                              </span>
                            )}
                            {booking.status === "cancelled" && (
                              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-rose-500/15 text-rose-400 border border-rose-500/30 uppercase">
                                <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                                Cancelled
                              </span>
                            )}
                          </td>

                          {/* Actions */}
                          <td className="py-3.5 px-4 text-right space-x-2">
                            <button
                              onClick={() => {
                                setEmailingBooking(booking);
                                setEmailSubject(`Message regarding your consultation call: ${booking.meeting_title}`);
                                setEmailMessage("");
                              }}
                              className="px-3 py-1.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-bold transition-colors cursor-pointer"
                              title="Send Email to Client"
                            >
                              ✉ Send Email
                            </button>

                            <button
                              onClick={() => setSelectedBooking(booking)}
                              className="px-3 py-1.5 rounded-lg bg-[#00a2ad]/20 hover:bg-[#00a2ad]/30 text-[#00a2ad] border border-[#00a2ad]/40 text-xs font-bold transition-colors cursor-pointer"
                            >
                              View Details
                            </button>

                            <button
                              onClick={() => setDeletingBooking(booking)}
                              className="px-3 py-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 text-xs font-medium border border-rose-500/20 transition-colors cursor-pointer"
                            >
                              Delete
                            </button>
                          </td>

                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="py-12 text-center text-slate-500">
                          No schedule call bookings found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ========================================== */}
          {/* USER MANAGEMENT DATA TABLE                 */}
          {/* ========================================== */}
          {activeTab === "users" && (
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

                          <td className="py-3.5 px-4 text-slate-400">
                            {new Date(user.created_at).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </td>

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
          {/* VISITOR TRAFFIC & PAGE DWELL TIME ANALYTICS*/}
          {/* ========================================== */}
          {(activeTab === "overview" || activeTab === "analytics") && (
            <div className="space-y-8">
              
              {/* Analytics KPI Header Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="p-5 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-xl">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Total Page Views</div>
                  <div className="text-2xl font-extrabold text-white">{analyticsStats?.total_pageviews || 0}</div>
                  <p className="text-[11px] text-cyan-400 mt-1 font-medium">All page visits logged</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-xl">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Unique Visitor IPs</div>
                  <div className="text-2xl font-extrabold text-emerald-400">{analyticsStats?.unique_visitors || 0}</div>
                  <p className="text-[11px] text-slate-400 mt-1 font-medium">Distinct IP addresses</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-xl">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Avg Stay Duration</div>
                  <div className="text-2xl font-extrabold text-amber-400">
                    {formatDuration(analyticsStats?.avg_dwell_time_seconds || 0)}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 font-medium">Average dwell time per page</p>
                </div>

                <div className="p-5 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-xl">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Top Visited Page</div>
                  <div className="text-lg font-bold text-[#00a2ad] truncate">
                    {analyticsStats?.top_pages && analyticsStats.top_pages.length > 0
                      ? analyticsStats.top_pages[0].page_url
                      : "—"}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-1 font-medium">
                    {analyticsStats?.top_pages && analyticsStats.top_pages.length > 0
                      ? `${analyticsStats.top_pages[0].total_views} visits`
                      : "No traffic data"}
                  </p>
                </div>
              </div>

              {/* MOST VISITED PAGES TABLE */}
              <div className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-xl space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <span>🔥 Most Visited Pages & Dwell Time</span>
                    </h2>
                    <p className="text-xs text-slate-400">Pages with highest traffic and average user stay duration</p>
                  </div>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-800">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-900/80 text-slate-400 text-[11px] font-bold uppercase tracking-wider border-b border-slate-800">
                        <th className="py-3 px-4">Rank</th>
                        <th className="py-3 px-4">Page URL / Path</th>
                        <th className="py-3 px-4">Total Pageviews</th>
                        <th className="py-3 px-4">Unique Visitors (IPs)</th>
                        <th className="py-3 px-4">Avg Stay Duration</th>
                        <th className="py-3 px-4">Traffic Share</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-xs text-slate-300">
                      {analyticsStats?.top_pages && analyticsStats.top_pages.length > 0 ? (
                        analyticsStats.top_pages.map((pg, idx) => {
                          const maxViews = Math.max(...analyticsStats.top_pages.map((p) => p.total_views), 1);
                          const sharePct = Math.round((pg.total_views / maxViews) * 100);
                          return (
                            <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                              <td className="py-3 px-4 font-bold text-slate-500">#{idx + 1}</td>
                              <td className="py-3 px-4">
                                <span className="font-bold text-white font-mono">{pg.page_url}</span>
                              </td>
                              <td className="py-3 px-4 font-extrabold text-[#00a2ad]">{pg.total_views}</td>
                              <td className="py-3 px-4 font-semibold text-emerald-400">{pg.unique_visitors} IPs</td>
                              <td className="py-3 px-4 font-bold text-amber-400">{formatDuration(pg.avg_duration)}</td>
                              <td className="py-3 px-4 w-48">
                                <div className="flex items-center gap-2">
                                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                                    <div
                                      style={{ width: `${sharePct}%` }}
                                      className="bg-gradient-to-r from-[#00a2ad] to-cyan-400 h-full rounded-full"
                                    ></div>
                                  </div>
                                  <span className="text-[10px] text-slate-400 font-bold">{sharePct}%</span>
                                </div>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr>
                          <td colSpan={6} className="py-8 text-center text-slate-500">
                            No page traffic logs available yet.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* VISITOR IP & ACTIVITY LOG TABLE */}
              <div className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-xl space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <span>🌐 Visitor IP & Real-Time Activity Log</span>
                    </h2>
                    <p className="text-xs text-slate-400">Detailed record of visitor IP addresses, pages visited, sections, and stay duration</p>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <div className="relative flex-1 sm:w-72">
                      <input
                        type="text"
                        placeholder="Search IP, User email, Page..."
                        value={analyticsSearch}
                        onChange={(e) => setAnalyticsSearch(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 bg-slate-800/80 border border-slate-700 text-xs text-white rounded-xl focus:outline-none focus:border-[#00a2ad] placeholder:text-slate-500"
                      />
                      <svg className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>

                    <button
                      onClick={() => fetchAnalyticsData()}
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#00a2ad]/10 hover:bg-[#00a2ad]/20 text-[#00a2ad] border border-[#00a2ad]/30 text-xs font-bold transition-all cursor-pointer shrink-0"
                      title="Refresh Visitor Activity Logs"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <span>Refresh Logs</span>
                    </button>
                  </div>

                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-800">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-900/80 text-slate-400 text-[11px] font-bold uppercase tracking-wider border-b border-slate-800">
                        <th className="py-3 px-4">Live Status</th>
                        <th className="py-3 px-4">Visitor IP Address</th>
                        <th className="py-3 px-4">User / Session</th>
                        <th className="py-3 px-4">Page & Section Currently On</th>
                        <th className="py-3 px-4">Stay Duration</th>
                        <th className="py-3 px-4">Device / OS</th>
                        <th className="py-3 px-4 text-right">Timestamp</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-xs text-slate-300">
                      {visitorLogs.length > 0 ? (
                        visitorLogs.map((log) => (
                          <tr key={log.id} className="hover:bg-slate-800/40 transition-colors">
                            
                            {/* Live Status Badge */}
                            <td className="py-3 px-4">
                              {log.is_live ? (
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-extrabold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 uppercase animate-pulse">
                                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                  LIVE NOW
                                </span>
                              ) : (
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-slate-800/80 text-slate-400 border border-slate-700/60 uppercase">
                                  Visited
                                </span>
                              )}
                            </td>

                            {/* Visitor IP */}
                            <td className="py-3 px-4 font-mono font-bold text-cyan-400">
                              {log.ip_address}
                            </td>

                            {/* User / Session */}
                            <td className="py-3 px-4">
                              {log.user_email ? (
                                <div>
                                  <p className="font-bold text-white">{log.user_name || "User"}</p>
                                  <p className="text-[#00a2ad] text-[11px]">{log.user_email}</p>
                                </div>
                              ) : (
                                <span className="text-slate-500 font-mono text-[11px] truncate block max-w-[140px]">
                                  {log.session_id}
                                </span>
                              )}
                            </td>

                            {/* Page & Section Currently On */}
                            <td className="py-3 px-4">
                              {log.is_live ? (
                                <div>
                                  <p className="font-bold text-white font-mono flex items-center gap-1.5">
                                    <span className="text-emerald-400 text-xs">Currently on:</span>
                                    <span>{log.page_url}</span>
                                  </p>
                                  {log.section_name && (
                                    <p className="text-amber-300 font-mono text-[11px] font-semibold">
                                      Active Section: #{log.section_name}
                                    </p>
                                  )}
                                </div>
                              ) : (
                                <div>
                                  <p className="font-bold text-slate-200 font-mono">{log.page_url}</p>
                                  {log.section_name && (
                                    <p className="text-slate-400 font-mono text-[11px]">
                                      Section: #{log.section_name}
                                    </p>
                                  )}
                                </div>
                              )}
                            </td>

                            {/* Stay Duration */}
                            <td className="py-3 px-4">
                              <span className="px-2 py-1 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20 font-bold">
                                {formatDuration(log.duration_seconds)}
                              </span>
                            </td>

                            {/* Device */}
                            <td className="py-3 px-4 capitalize text-slate-400">
                              {log.device_type}
                            </td>

                            {/* Timestamp */}
                            <td className="py-3 px-4 text-right text-slate-400 text-[11px]">
                              {new Date(log.created_at).toLocaleString("en-US", {
                                month: "short",
                                day: "numeric",
                                hour: "2-digit",
                                minute: "2-digit",
                                second: "2-digit",
                              })}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={7} className="py-12 text-center text-slate-500">
                            No visitor activity logs found.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                {/* Pagination Controls */}
                {logsTotalPages > 1 && (
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800 text-xs text-slate-400">
                    <div>
                      Showing Page <span className="font-bold text-white">{logsPage}</span> of{" "}
                      <span className="font-bold text-white">{logsTotalPages}</span> ({logsTotalCount} total visitor logs)
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          if (logsPage > 1) {
                            const newPg = logsPage - 1;
                            setLogsPage(newPg);
                            fetchAnalyticsData(newPg);
                          }
                        }}
                        disabled={logsPage <= 1}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 disabled:opacity-40 disabled:cursor-not-allowed font-semibold transition-colors cursor-pointer"
                      >
                        ← Previous
                      </button>

                      <div className="flex items-center gap-1">
                        {Array.from({ length: logsTotalPages }, (_, i) => i + 1)
                          .filter((p) => p === 1 || p === logsTotalPages || Math.abs(p - logsPage) <= 2)
                          .map((p, idx, arr) => (
                            <React.Fragment key={p}>
                              {idx > 0 && arr[idx - 1] !== p - 1 && <span className="px-1 text-slate-500">...</span>}
                              <button
                                onClick={() => {
                                  setLogsPage(p);
                                  fetchAnalyticsData(p);
                                }}
                                className={`w-7 h-7 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                                  logsPage === p
                                    ? "bg-[#00a2ad] text-white shadow-md"
                                    : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
                                }`}
                              >
                                {p}
                              </button>
                            </React.Fragment>
                          ))}
                      </div>

                      <button
                        onClick={() => {
                          if (logsPage < logsTotalPages) {
                            const newPg = logsPage + 1;
                            setLogsPage(newPg);
                            fetchAnalyticsData(newPg);
                          }
                        }}
                        disabled={logsPage >= logsTotalPages}
                        className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 disabled:opacity-40 disabled:cursor-not-allowed font-semibold transition-colors cursor-pointer"
                      >
                        Next →
                      </button>
                    </div>
                  </div>
                )}

              </div>

            </div>
          )}


          {/* ========================================== */}
          {/* BLOG CMS TAB CONTENT                        */}
          {/* ========================================== */}
          {activeTab === "blogs" && (
            <div className="space-y-8">
              
              {/* Top Stats Overview Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="p-5 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-xl flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Articles</p>
                    <h3 className="text-2xl font-black text-white mt-1">{cmsPosts.length}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-[#00a2ad]/10 text-[#00a2ad] flex items-center justify-center font-bold">
                    📝
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-xl flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Published</p>
                    <h3 className="text-2xl font-black text-emerald-400 mt-1">
                      {cmsPosts.filter((p) => p.is_published).length}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold">
                    ✓
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-xl flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Categories</p>
                    <h3 className="text-2xl font-black text-amber-400 mt-1">{cmsCategories.length}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold">
                    🏷️
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-xl flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Article Views</p>
                    <h3 className="text-2xl font-black text-cyan-400 mt-1">
                      {cmsPosts.reduce((sum, p) => sum + (p.views_count || 0), 0)}
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center font-bold">
                    👁️
                  </div>
                </div>
              </div>

              {/* Action Toolbar & Filters */}
              <div className="p-6 rounded-2xl bg-[#0F172A] border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex flex-1 flex-col sm:flex-row items-center gap-3">
                  <div className="relative flex-1 w-full">
                    <svg className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      type="text"
                      value={cmsSearch}
                      onChange={(e) => setCmsSearch(e.target.value)}
                      placeholder="Search articles by title or keyword..."
                      className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#00a2ad]"
                    />
                  </div>

                  <select
                    value={cmsCategoryFilter}
                    onChange={(e) => setCmsCategoryFilter(e.target.value)}
                    className="w-full sm:w-48 bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-2 text-xs text-slate-300 focus:outline-none focus:border-[#00a2ad]"
                  >
                    <option value="">All Categories</option>
                    {cmsCategories.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name} ({c.posts_count})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setShowCategoryModal(true)}
                    className="px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>🏷️ Manage Categories</span>
                  </button>

                  <button
                    onClick={handleOpenNewArticleModal}
                    className="px-4 py-2.5 rounded-xl bg-[#00a2ad] hover:bg-[#008790] text-white text-xs font-bold transition-all shadow-lg cursor-pointer flex items-center gap-2"
                  >
                    <span>✍️ Create New Article</span>
                  </button>
                </div>
              </div>

              {/* Articles Data Table */}
              <div className="rounded-2xl bg-[#0F172A] border border-slate-800 shadow-xl overflow-hidden">
                <div className="p-5 border-b border-slate-800 flex items-center justify-between">
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <span>Articles Collection</span>
                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#00a2ad]/20 text-[#00a2ad]">
                      {cmsPosts.length} posts
                    </span>
                  </h3>
                  {cmsLoading && <span className="text-xs text-[#00a2ad] animate-pulse">Loading articles...</span>}
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-900/80 text-slate-400 text-[11px] font-bold uppercase tracking-wider border-b border-slate-800">
                        <th className="py-3 px-4">Article</th>
                        <th className="py-3 px-4">Category</th>
                        <th className="py-3 px-4">Author</th>
                        <th className="py-3 px-4">Read Time</th>
                        <th className="py-3 px-4">Views</th>
                        <th className="py-3 px-4">Published Status</th>
                        <th className="py-3 px-4 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-xs text-slate-300">
                      {cmsPosts.length > 0 ? (
                        cmsPosts.map((post) => (
                          <tr key={post.id} className="hover:bg-slate-800/40 transition-colors">
                            
                            {/* Article Title & Cover */}
                            <td className="py-3.5 px-4 max-w-sm">
                              <div className="flex items-center gap-3">
                                <div className="w-14 h-10 rounded-lg overflow-hidden bg-slate-900 shrink-0 border border-slate-800">
                                  <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80";
                                    }}
                                  />
                                </div>
                                <div className="min-w-0">
                                  <h4 className="font-bold text-white text-sm line-clamp-1 hover:text-[#00a2ad]">
                                    {post.title}
                                  </h4>
                                  <p className="text-[11px] text-slate-500 font-mono line-clamp-1">/{post.slug}</p>
                                </div>
                              </div>
                            </td>

                            {/* Category */}
                            <td className="py-3.5 px-4">
                              <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-[#00a2ad]/15 text-[#00a2ad] border border-[#00a2ad]/30">
                                {post.category?.name || "General"}
                              </span>
                            </td>

                            {/* Author */}
                            <td className="py-3.5 px-4 font-semibold text-slate-200">
                              {post.author_name}
                            </td>

                            {/* Read Time */}
                            <td className="py-3.5 px-4 text-slate-400">
                              {post.reading_time_minutes} min
                            </td>

                            {/* Views */}
                            <td className="py-3.5 px-4 font-mono font-bold text-cyan-400">
                              {post.views_count}
                            </td>

                            {/* Toggle Publish Status */}
                            <td className="py-3.5 px-4">
                              <button
                                onClick={() => handleTogglePublish(post)}
                                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                                  post.is_published
                                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30"
                                    : "bg-amber-500/20 text-amber-400 border border-amber-500/40 hover:bg-amber-500/30"
                                }`}
                              >
                                <span>{post.is_published ? "✓ Published" : "⏳ Draft"}</span>
                              </button>
                            </td>

                            {/* Actions */}
                            <td className="py-3.5 px-4 text-right space-x-2">
                              <button
                                onClick={() => handleOpenEditArticleModal(post)}
                                className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold cursor-pointer"
                              >
                                ✏️ Edit
                              </button>

                              <button
                                onClick={() => setDeletingArticle(post)}
                                className="px-2.5 py-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-semibold cursor-pointer"
                              >
                                🗑️ Delete
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={7} className="py-12 text-center text-slate-500">
                            No articles found matching filters.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}


          {/* ========================================== */}
          {/* CAREERS & JOB POSITIONS CMS TAB CONTENT   */}
          {/* ========================================== */}
          {activeTab === "careers" && (
            <div className="space-y-8">
              
              {/* Header Banner */}
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#070D1E] via-[#0F172A] to-[#00a2ad]/20 border border-slate-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#00a2ad]/20 text-[#00a2ad] border border-[#00a2ad]/30 uppercase tracking-wider">
                      Careers & Recruitment CMS
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Autofya Careers</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Job Openings & Applicant Manager
                  </h2>
                  <p className="text-sm text-slate-300 max-w-2xl mt-1 leading-relaxed">
                    Create, edit, toggle, and publish job positions for your career portal. Review incoming candidates and job applications.
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => handleViewApplications()}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>👥 View All Applicants ({cmsJobStats?.total_applications || 0})</span>
                  </button>

                  <button
                    onClick={handleOpenNewJobModal}
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#00a2ad] to-[#008790] hover:from-[#00b4c0] hover:to-[#009ca6] text-white text-xs font-bold shadow-lg hover:shadow-cyan-500/25 transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span>+ Add New Job Position</span>
                  </button>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-5 rounded-xl bg-[#0F172A] border border-slate-800">
                  <div className="text-xs text-slate-400 font-semibold uppercase">Total Listed Jobs</div>
                  <div className="text-2xl font-extrabold text-white mt-1">{cmsJobStats?.total_jobs || cmsJobs.length}</div>
                </div>

                <div className="p-5 rounded-xl bg-[#0F172A] border border-slate-800">
                  <div className="text-xs text-slate-400 font-semibold uppercase">Active Open Positions</div>
                  <div className="text-2xl font-extrabold text-emerald-400 mt-1">{cmsJobStats?.active_jobs || cmsJobs.filter(j => j.is_active).length}</div>
                </div>

                <div className="p-5 rounded-xl bg-[#0F172A] border border-slate-800">
                  <div className="text-xs text-slate-400 font-semibold uppercase">Total Applications Received</div>
                  <div className="text-2xl font-extrabold text-[#00a2ad] mt-1">{cmsJobStats?.total_applications || 0}</div>
                </div>
              </div>

              {/* Job Listings Table */}
              <div className="bg-[#0F172A] rounded-2xl border border-slate-800 shadow-xl overflow-hidden">
                <div className="p-4 sm:p-6 border-b border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="relative w-full sm:w-80">
                    <input
                      type="text"
                      placeholder="Search job title, category..."
                      value={cmsJobSearch}
                      onChange={(e) => setCmsJobSearch(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#00a2ad]"
                    />
                    <svg className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-800 bg-slate-900/60 text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                        <th className="py-3.5 px-6">Job Title</th>
                        <th className="py-3.5 px-4">Category</th>
                        <th className="py-3.5 px-4">Type</th>
                        <th className="py-3.5 px-4">Vacancies</th>
                        <th className="py-3.5 px-4">Date Posted</th>
                        <th className="py-3.5 px-4">Deadline</th>
                        <th className="py-3.5 px-4 text-center">Applicants</th>
                        <th className="py-3.5 px-4 text-center">Status</th>
                        <th className="py-3.5 px-6 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800 text-xs">
                      {cmsJobsLoading ? (
                        <tr>
                          <td colSpan={9} className="py-12 text-center text-slate-400">
                            Loading job positions...
                          </td>
                        </tr>
                      ) : cmsJobs.length > 0 ? (
                        cmsJobs.map((job) => (
                          <tr key={job.id} className="hover:bg-slate-900/40 transition-colors">
                            <td className="py-4 px-6 font-bold text-white">
                              {job.title}
                            </td>
                            <td className="py-4 px-4 text-slate-300">
                              <span className="px-2.5 py-1 rounded-md bg-[#00a2ad]/10 text-[#00a2ad] font-bold">
                                {job.category}
                              </span>
                            </td>
                            <td className="py-4 px-4 text-slate-300">{job.type}</td>
                            <td className="py-4 px-4 font-semibold text-white">{job.vacancies}</td>
                            <td className="py-4 px-4 text-slate-400">{job.date_posted || job.datePosted || "Recent"}</td>
                            <td className="py-4 px-4 font-semibold text-rose-400">
                              {job.application_deadline || job.applicationDeadline || "No limit"}
                            </td>
                            <td className="py-4 px-4 text-center">
                              <button
                                onClick={() => handleViewApplications(job)}
                                className="px-3 py-1 rounded-full bg-slate-800 hover:bg-[#00a2ad]/20 text-[#00a2ad] font-bold text-xs transition-colors cursor-pointer"
                              >
                                {job.applications_count || 0} Candidate(s)
                              </button>
                            </td>
                            <td className="py-4 px-4 text-center">
                              <button
                                onClick={() => handleToggleJobActive(job)}
                                className={`px-2.5 py-1 rounded-full text-[11px] font-bold transition-all cursor-pointer ${
                                  job.is_active
                                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 hover:bg-emerald-500/30"
                                    : "bg-slate-800 text-slate-400 border border-slate-700 hover:bg-slate-700"
                                }`}
                              >
                                {job.is_active ? "✓ Active" : "⏸ Hidden"}
                              </button>
                            </td>
                            <td className="py-4 px-6 text-right space-x-2">
                              <button
                                onClick={() => handleOpenEditJobModal(job)}
                                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold cursor-pointer"
                              >
                                ✏️ Edit
                              </button>
                              <button
                                onClick={() => setDeletingJob(job)}
                                className="px-3 py-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-semibold cursor-pointer"
                              >
                                🗑️ Delete
                              </button>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={8} className="py-12 text-center text-slate-500">
                            No job positions found. Click "+ Add New Job Position" to create one.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}


          {/* ========================================== */}
          {/* MARKETING BROADCAST EMAIL TAB CONTENT     */}
          {/* ========================================== */}
          {activeTab === "marketing" && (
            <div className="space-y-8">
              
              {/* Header Banner */}
              <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#070D1E] via-[#0F172A] to-[#00a2ad]/20 border border-slate-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#00a2ad]/20 text-[#00a2ad] border border-[#00a2ad]/30 uppercase tracking-wider">
                      Marketing & Communications
                    </span>
                    <span className="text-xs text-slate-400 font-mono">Autofya Pad Branding</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    Batch Email Broadcast Studio
                  </h2>
                  <p className="text-sm text-slate-300 max-w-2xl mt-1 leading-relaxed">
                    Compose and send custom HTML marketing emails formatted on Autofya’s official letterhead pad to single or bulk client email addresses.
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => setEmailPreviewTab("edit")}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      emailPreviewTab === "edit"
                        ? "bg-[#00a2ad] text-white shadow-lg"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    }`}
                  >
                    ✏️ Compose Studio
                  </button>
                  <button
                    onClick={() => setEmailPreviewTab("preview")}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      emailPreviewTab === "preview"
                        ? "bg-[#00a2ad] text-white shadow-lg"
                        : "bg-slate-800 text-slate-300 hover:bg-slate-700"
                    }`}
                  >
                    👁️ Live Pad Preview
                  </button>
                </div>
              </div>

              {emailPreviewTab === "edit" ? (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Composer Controls */}
                  <form onSubmit={handleSendBatchEmail} className="lg:col-span-7 bg-[#0F172A] p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6">
                    
                    {/* Recipients */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                          Recipient Email Address(es) *
                        </label>
                        <button
                          type="button"
                          onClick={handleLoadClientEmails}
                          className="text-[11px] font-bold text-[#00a2ad] hover:underline cursor-pointer flex items-center gap-1"
                        >
                          <span>📥 Import All Client Emails ({bookings.length})</span>
                        </button>
                      </div>
                      <textarea
                        rows={3}
                        required
                        value={batchRecipients}
                        onChange={(e) => setBatchRecipients(e.target.value)}
                        placeholder="Enter email addresses separated by commas or newlines (e.g. client1@company.com, client2@enterprise.io)..."
                        className="w-full p-3.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-xs font-mono focus:outline-none focus:border-[#00a2ad]"
                      />
                      <p className="text-[11px] text-slate-500 mt-1">
                        Enter a single email address or multiple emails separated by commas or line breaks.
                      </p>
                    </div>

                    {/* Email Subject */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Email Subject Line *
                      </label>
                      <input
                        type="text"
                        required
                        value={batchSubject}
                        onChange={(e) => setBatchSubject(e.target.value)}
                        placeholder="e.g. Exclusive Update: Next-Gen AI Automation Platform by Autofya"
                        className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm font-semibold focus:outline-none focus:border-[#00a2ad]"
                      />
                    </div>

                    {/* Message Body */}
                    <div>
                      <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                        Message Content (Autofya Letterhead Body) *
                      </label>
                      <textarea
                        rows={8}
                        required
                        value={batchMessage}
                        onChange={(e) => setBatchMessage(e.target.value)}
                        placeholder="Write your email body here. Paragraphs and line breaks will be formatted on the Autofya pad..."
                        className="w-full p-4 bg-slate-900 border border-slate-700 rounded-xl text-white text-xs leading-relaxed focus:outline-none focus:border-[#00a2ad]"
                      />
                    </div>

                    {/* Optional Call To Action Button */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
                      <div>
                        <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">
                          Action Button Label (Optional)
                        </label>
                        <input
                          type="text"
                          value={batchButtonText}
                          onChange={(e) => setBatchButtonText(e.target.value)}
                          placeholder="Explore Products →"
                          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-xs focus:outline-none focus:border-[#00a2ad]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-bold text-slate-400 uppercase mb-1">
                          Action Button Target URL
                        </label>
                        <input
                          type="url"
                          value={batchButtonUrl}
                          onChange={(e) => setBatchButtonUrl(e.target.value)}
                          placeholder="https://autofya.com/schedule"
                          className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white text-xs focus:outline-none focus:border-[#00a2ad]"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setEmailPreviewTab("preview")}
                        className="px-4 py-2.5 rounded-xl border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 text-xs font-bold cursor-pointer"
                      >
                        Preview Autofya Letterhead
                      </button>

                      <button
                        type="submit"
                        disabled={isSendingBatch}
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00a2ad] to-[#008790] hover:from-[#00b4c0] hover:to-[#009ca6] text-white font-bold text-sm shadow-xl hover:shadow-cyan-500/20 disabled:opacity-50 cursor-pointer flex items-center gap-2"
                      >
                        {isSendingBatch ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>Dispatching Email Batch...</span>
                          </>
                        ) : (
                          <>
                            <span>🚀 Send Marketing Broadcast</span>
                          </>
                        )}
                      </button>
                    </div>

                  </form>

                  {/* Right Column: Live Letterhead Interactive Pad Preview */}
                  <div className="lg:col-span-5 bg-slate-900 p-4 sm:p-6 rounded-2xl border border-slate-800 shadow-xl space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        Live Pad Preview
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono">autofya.com</span>
                    </div>

                    {/* Letterhead Render Simulation */}
                    <div className="bg-[#f4f7f6] p-4 rounded-xl border border-slate-200/50 shadow-inner max-h-[600px] overflow-y-auto text-slate-800">
                      <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200/60 max-w-md mx-auto text-left">
                        
                        {/* Header */}
                        <div className="bg-[#00a2ad] p-6 text-center">
                          <div className="bg-white px-5 py-2 rounded-xl inline-block shadow-md mb-2">
                            <AutofyaLogo height={28} showTagline={false} />
                          </div>
                          <h3 className="text-base font-extrabold text-white mt-1 leading-snug">
                            {batchSubject || "Subject Line Preview"}
                          </h3>
                          <p className="text-[10px] text-white/90 font-bold uppercase tracking-wider mt-1">
                            Official Announcement • Autofya Inc.
                          </p>
                        </div>

                        {/* Message Body */}
                        <div className="p-6 text-xs text-slate-700 leading-relaxed whitespace-pre-wrap">
                          {batchMessage || "Your marketing message body will be displayed here formatted on Autofya's official pad..."}

                          {batchButtonUrl && (
                            <div className="text-center mt-6 mb-2">
                              <span className="inline-block bg-[#00a2ad] text-white font-bold text-xs px-6 py-2.5 rounded-full shadow-md">
                                {batchButtonText || "Explore Autofya Platform →"}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Footer */}
                        <div className="bg-slate-50 p-4 border-t border-slate-100 text-center text-[10px] text-slate-400">
                          <p className="font-bold text-slate-600">Autofya — Next-Gen AI & Software Engineering Platform</p>
                          <p className="mt-1">&copy; 2026 Autofya Inc. All rights reserved.</p>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              ) : (
                /* FULL PREVIEW TAB */
                <div className="bg-slate-900 p-6 sm:p-10 rounded-2xl border border-slate-800 shadow-xl flex justify-center">
                  <div className="bg-[#f4f7f6] p-6 sm:p-10 rounded-2xl border border-slate-200/50 shadow-2xl max-w-2xl w-full text-slate-800">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-slate-200 text-left">
                      
                      {/* Header */}
                      <div className="bg-[#00a2ad] p-8 text-center">
                        <div className="bg-white px-6 py-2.5 rounded-xl inline-block shadow-lg mb-3">
                          <AutofyaLogo height={36} showTagline={false} />
                        </div>
                        <h2 className="text-xl font-extrabold text-white leading-snug">
                          {batchSubject || "Subject Line Preview"}
                        </h2>
                        <p className="text-xs text-white/90 font-bold uppercase tracking-wider mt-1">
                          Official Announcement • Autofya Inc.
                        </p>
                      </div>

                      {/* Message Body */}
                      <div className="p-8 text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                        {batchMessage || "Your marketing message body will be displayed here formatted on Autofya's official letterhead pad..."}

                        {batchButtonUrl && (
                          <div className="text-center mt-8 mb-4">
                            <a
                              href={batchButtonUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block bg-[#00a2ad] text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-lg"
                            >
                              {batchButtonText || "Explore Autofya Platform →"}
                            </a>
                          </div>
                        )}
                      </div>

                      {/* Footer */}
                      <div className="bg-slate-50 p-6 border-t border-slate-100 text-center text-xs text-slate-400">
                        <p className="font-bold text-slate-600">Autofya — Next-Gen AI & Software Engineering Platform</p>
                        <p className="mt-1 text-slate-500">Delivering scalable AI solutions, enterprise microservices, & automated workflows.</p>
                        <p className="mt-2 text-[11px] text-slate-400">&copy; 2026 Autofya Inc. All rights reserved.</p>
                      </div>

                    </div>
                  </div>
                </div>
              )}

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
      {/* VIEW BOOKING DETAILS MODAL                 */}
      {/* ========================================== */}
      {selectedBooking && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0F172A] border border-slate-700 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-wider block mb-1">
                  Schedule Booking Details
                </span>
                <h3 className="text-xl font-bold text-white">{selectedBooking.meeting_title}</h3>
              </div>
              <button onClick={() => setSelectedBooking(null)} className="text-slate-400 hover:text-white text-lg">
                ✕
              </button>
            </div>

            {/* Quick Status Buttons */}
            <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-900 border border-slate-800">
              <span className="text-xs font-bold text-slate-400 mr-2 uppercase">Set Status:</span>
              {(['pending', 'confirmed', 'completed', 'cancelled'] as const).map((st) => (
                <button
                  key={st}
                  onClick={() => handleUpdateBookingStatus(selectedBooking.id, st, selectedBooking.admin_notes || "")}
                  disabled={isUpdating}
                  className={`px-3 py-1 rounded-lg text-xs font-bold capitalize transition-all cursor-pointer ${
                    selectedBooking.status === st
                      ? st === 'pending'
                        ? 'bg-amber-500 text-black shadow-md'
                        : st === 'confirmed'
                        ? 'bg-blue-600 text-white shadow-md'
                        : st === 'completed'
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'bg-rose-600 text-white shadow-md'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-slate-500 font-semibold">Client Name</span>
                <p className="font-bold text-white text-sm">{selectedBooking.name}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-slate-500 font-semibold">Email & Phone</span>
                <p className="font-bold text-[#00a2ad]">{selectedBooking.email}</p>
                <p className="text-slate-300 font-mono">{selectedBooking.phone}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-slate-500 font-semibold">Meeting Date & Time</span>
                <p className="font-bold text-white">{selectedBooking.date}</p>
                <p className="text-amber-400 font-semibold">{selectedBooking.time_slot} ({selectedBooking.timezone})</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-slate-500 font-semibold">Company & Role</span>
                <p className="font-bold text-white">{selectedBooking.company_name || "N/A"}</p>
                <p className="text-slate-300">{selectedBooking.role || "N/A"}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-slate-500 font-semibold">Budget Range</span>
                <p className="font-bold text-emerald-400">{selectedBooking.investment_range || "N/A"}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-slate-500 font-semibold">Engagement Type</span>
                <p className="font-bold text-white">{selectedBooking.engagement_type || "N/A"}</p>
              </div>
            </div>

            {/* Situation & Notes */}
            <div className="space-y-3 text-xs">
              {selectedBooking.situation && (
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <span className="text-slate-500 font-semibold">Client Situation</span>
                  <p className="text-slate-200">{selectedBooking.situation}</p>
                </div>
              )}

              {selectedBooking.outcomes && selectedBooking.outcomes.length > 0 && (
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <span className="text-slate-500 font-semibold">Desired Outcomes</span>
                  <ul className="list-disc list-inside text-slate-300 space-y-0.5">
                    {selectedBooking.outcomes.map((oc, idx) => (
                      <li key={idx}>{oc}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedBooking.must_work_notes && (
                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                  <span className="text-slate-500 font-semibold">Must-Work Notes / Specific Requirements</span>
                  <p className="text-slate-200 whitespace-pre-wrap">{selectedBooking.must_work_notes}</p>
                </div>
              )}

              {/* Admin Internal Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1.5">
                  Admin Internal Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Add internal notes about this client call..."
                  value={selectedBooking.admin_notes || ""}
                  onChange={(e) => setSelectedBooking({ ...selectedBooking, admin_notes: e.target.value })}
                  className="w-full p-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs focus:outline-none focus:border-[#00a2ad] resize-none"
                />
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-slate-800">
              <button
                onClick={() => {
                  const target = selectedBooking;
                  setSelectedBooking(null);
                  setEmailingBooking(target);
                  setEmailSubject(`Message regarding your consultation call: ${target.meeting_title}`);
                  setEmailMessage("");
                }}
                className="px-4 py-2 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>✉</span> Send Email to Client
              </button>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedBooking(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => handleUpdateBookingStatus(selectedBooking.id, selectedBooking.status, selectedBooking.admin_notes || "")}
                  disabled={isUpdating}
                  className="px-5 py-2 rounded-xl bg-[#00a2ad] hover:bg-[#00808a] text-white text-xs font-bold shadow-lg cursor-pointer"
                >
                  {isUpdating ? "Saving..." : "Save Admin Notes"}
                </button>
              </div>
            </div>


          </div>
        </div>
      )}

      {/* ========================================== */}
      {/* SEND CUSTOM EMAIL MODAL                    */}
      {/* ========================================== */}
      {emailingBooking && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0F172A] border border-slate-700 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl space-y-6">
            
            <div className="flex items-start justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-1">
                  Direct Client Email
                </span>
                <h3 className="text-lg font-bold text-white">Send Email to {emailingBooking.name}</h3>
                <p className="text-xs text-slate-400 font-mono">{emailingBooking.email}</p>
              </div>
              <button onClick={() => setEmailingBooking(null)} className="text-slate-400 hover:text-white text-lg cursor-pointer">
                ✕
              </button>
            </div>

            <form onSubmit={handleSendCustomEmail} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                  placeholder="Enter email subject line..."
                  className="w-full p-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs focus:outline-none focus:border-emerald-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-1.5">
                  Message Content
                </label>
                <textarea
                  rows={6}
                  required
                  value={emailMessage}
                  onChange={(e) => setEmailMessage(e.target.value)}
                  placeholder="Type your message to the client here..."
                  className="w-full p-3 bg-slate-900 border border-slate-800 rounded-xl text-white text-xs focus:outline-none focus:border-emerald-500 resize-none"
                />
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setEmailingBooking(null)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSendingEmail}
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-lg cursor-pointer flex items-center gap-2"
                >
                  {isSendingEmail ? (
                    <>
                      <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      <span>Sending Email...</span>
                    </>
                  ) : (
                    <span>Send Email Now</span>
                  )}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

      {/* ========================================== */}
      {/* DELETE BOOKING MODAL                       */}
      {/* ========================================== */}
      {deletingBooking && (

        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0F172A] border border-rose-500/30 rounded-2xl max-w-sm w-full p-6 shadow-2xl space-y-4">
            <div className="w-12 h-12 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center mx-auto">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>

            <div className="text-center">
              <h3 className="text-base font-bold text-white">Delete Booking Record?</h3>
              <p className="text-xs text-slate-400 mt-1">
                Are you sure you want to delete booking for <span className="text-rose-300 font-semibold">{deletingBooking.name}</span> ({deletingBooking.email})?
              </p>
            </div>

            <div className="pt-3 flex items-center justify-center gap-3">
              <button
                onClick={() => setDeletingBooking(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteBookingConfirm}
                disabled={isUpdating}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-lg"
              >
                {isUpdating ? "Deleting..." : "Confirm Delete"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* EDIT USER MODAL */}
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

      {/* DELETE USER MODAL */}
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

      {/* ========================================== */}
      {/* CATEGORY MANAGER MODAL                     */}
      {/* ========================================== */}
      {showCategoryModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0F172A] border border-slate-700 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-wider block">Blog Categories</span>
                <h3 className="text-lg font-bold text-white">Manage Blog Categories</h3>
              </div>
              <button
                onClick={() => {
                  setShowCategoryModal(false);
                  setEditingCategory(null);
                  setCategoryNameInput("");
                  setCategoryDescInput("");
                }}
                className="text-slate-400 hover:text-white text-lg"
              >
                ✕
              </button>
            </div>

            {/* Category Form */}
            <form onSubmit={handleSaveCategory} className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-4">
              <h4 className="text-xs font-bold text-slate-300 uppercase">
                {editingCategory ? "Edit Category" : "Add New Category"}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-slate-400 font-semibold mb-1">Category Name *</label>
                  <input
                    type="text"
                    required
                    value={categoryNameInput}
                    onChange={(e) => setCategoryNameInput(e.target.value)}
                    placeholder="e.g. AI & Machine Learning"
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white text-xs focus:outline-none focus:border-[#00a2ad]"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-400 font-semibold mb-1">Description (Optional)</label>
                  <input
                    type="text"
                    value={categoryDescInput}
                    onChange={(e) => setCategoryDescInput(e.target.value)}
                    placeholder="Short topic overview..."
                    className="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-white text-xs focus:outline-none focus:border-[#00a2ad]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                {editingCategory && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditingCategory(null);
                      setCategoryNameInput("");
                      setCategoryDescInput("");
                    }}
                    className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-400 text-xs font-semibold"
                  >
                    Cancel Edit
                  </button>
                )}
                <button
                  type="submit"
                  disabled={isUpdating}
                  className="px-4 py-1.5 rounded-lg bg-[#00a2ad] hover:bg-[#008790] text-white text-xs font-bold shadow-md cursor-pointer"
                >
                  {isUpdating ? "Saving..." : editingCategory ? "Update Category" : "Add Category"}
                </button>
              </div>
            </form>

            {/* Categories Table */}
            <div className="rounded-xl border border-slate-800 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-slate-400 text-[11px] font-bold uppercase tracking-wider border-b border-slate-800">
                    <th className="py-2.5 px-4">Name</th>
                    <th className="py-2.5 px-4">Slug</th>
                    <th className="py-2.5 px-4">Articles Count</th>
                    <th className="py-2.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-xs text-slate-300">
                  {cmsCategories.length > 0 ? (
                    cmsCategories.map((cat) => (
                      <tr key={cat.id} className="hover:bg-slate-800/40">
                        <td className="py-3 px-4 font-bold text-white">{cat.name}</td>
                        <td className="py-3 px-4 text-slate-400 font-mono text-[11px]">{cat.slug}</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-bold">
                            {cat.posts_count} articles
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right space-x-2">
                          <button
                            type="button"
                            onClick={() => {
                              setEditingCategory(cat);
                              setCategoryNameInput(cat.name);
                              setCategoryDescInput(cat.description || "");
                            }}
                            className="text-[#00a2ad] hover:underline font-bold"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteCategory(cat.id)}
                            className="text-rose-400 hover:underline font-bold"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="py-6 text-center text-slate-500">
                        No categories created yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setShowCategoryModal(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================== */}
      {/* RICH TEXT ARTICLE COMPOSER MODAL           */}
      {/* ========================================== */}
      {showArticleModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0F172A] border border-slate-700 rounded-2xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl space-y-6 max-h-[92vh] overflow-y-auto">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-wider block">
                  {editingArticle ? "Article Editor" : "New Article Composer"}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {editingArticle ? `Edit: ${editingArticle.title}` : "Compose Rich Blog Article"}
                </h3>
              </div>
              <button
                onClick={() => setShowArticleModal(false)}
                className="text-slate-400 hover:text-white text-lg"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveArticle} className="space-y-6">
              
              {/* Form Metadata Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Article Title *</label>
                  <input
                    type="text"
                    required
                    value={articleForm.title}
                    onChange={(e) => setArticleForm({ ...articleForm, title: e.target.value })}
                    placeholder="e.g. Modern Software Architecture Trends in 2026"
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm font-semibold focus:outline-none focus:border-[#00a2ad]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Category *</label>
                  <select
                    required
                    value={articleForm.category_id}
                    onChange={(e) => setArticleForm({ ...articleForm, category_id: Number(e.target.value) })}
                    className="w-full px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-xs focus:outline-none focus:border-[#00a2ad]"
                  >
                    <option value={0}>Select Category...</option>
                    {cmsCategories.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Author Display Name</label>
                  <input
                    type="text"
                    value={articleForm.author_name}
                    onChange={(e) => setArticleForm({ ...articleForm, author_name: e.target.value })}
                    placeholder="Autofya Team"
                    className="w-full px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-xs focus:outline-none focus:border-[#00a2ad]"
                  />
                </div>

                <div className="sm:col-span-2 space-y-2 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                  <label className="block text-xs font-bold text-slate-300 uppercase">
                    Featured Cover Image (Upload File or Enter Image URL)
                  </label>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
                    <div>
                      <span className="text-[11px] text-slate-400 font-semibold block mb-1">📁 Upload Image File:</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => setArticleImageFile(e.target.files?.[0] || null)}
                        className="w-full text-xs text-slate-300 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-[#00a2ad] file:text-white hover:file:bg-[#008790] cursor-pointer"
                      />
                    </div>

                    <div>
                      <span className="text-[11px] text-slate-400 font-semibold block mb-1">🔗 Or Enter Image URL:</span>
                      <input
                        type="url"
                        value={articleForm.featured_image_url}
                        onChange={(e) => setArticleForm({ ...articleForm, featured_image_url: e.target.value })}
                        placeholder="https://images.unsplash.com/..."
                        className="w-full px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-lg text-white text-xs focus:outline-none focus:border-[#00a2ad]"
                      />
                    </div>
                  </div>

                  {/* Image Preview Thumbnail */}
                  {(articleImageFile || articleForm.featured_image_url || editingArticle?.image) && (
                    <div className="flex items-center gap-3 pt-2 border-t border-slate-800/80">
                      <div className="w-16 h-10 rounded-lg overflow-hidden border border-slate-700 bg-slate-950 shrink-0">
                        <img
                          src={
                            articleImageFile
                              ? URL.createObjectURL(articleImageFile)
                              : articleForm.featured_image_url || editingArticle?.image || ""
                          }
                          alt="Cover Preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-xs text-emerald-400 font-bold">
                        {articleImageFile ? `Selected file: ${articleImageFile.name}` : "Image Preview Ready"}
                      </span>
                    </div>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Excerpt / Summary *</label>
                  <textarea
                    rows={2}
                    required
                    value={articleForm.excerpt}
                    onChange={(e) => setArticleForm({ ...articleForm, excerpt: e.target.value })}
                    placeholder="Short 2-3 sentence summary displayed on card grids..."
                    className="w-full p-3 bg-slate-900 border border-slate-700 rounded-xl text-white text-xs focus:outline-none focus:border-[#00a2ad] resize-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-1">Estimated Reading Time (Minutes)</label>
                  <input
                    type="number"
                    min={1}
                    max={60}
                    value={articleForm.reading_time_minutes}
                    onChange={(e) => setArticleForm({ ...articleForm, reading_time_minutes: Number(e.target.value) })}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white text-xs focus:outline-none focus:border-[#00a2ad]"
                  />
                </div>

                <div className="flex items-center pt-5">
                  <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-white">
                    <input
                      type="checkbox"
                      checked={articleForm.is_published}
                      onChange={(e) => setArticleForm({ ...articleForm, is_published: e.target.checked })}
                      className="w-4 h-4 accent-[#00a2ad] rounded"
                    />
                    <span>Publish Immediately to Website</span>
                  </label>
                </div>
              </div>

              {/* RICH TEXT EDITOR SECTION */}
              <div className="border border-slate-800 rounded-2xl bg-slate-900 overflow-hidden shadow-2xl">
                
                {/* Top Header: View Modes & Stats & Quick Templates */}
                <div className="p-3 bg-slate-950 border-b border-slate-800 space-y-3">
                  
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800/80 pb-2.5">
                    
                    {/* Mode Switcher */}
                    <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800">
                      <button
                        type="button"
                        onClick={() => setEditorTab("visual")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                          editorTab === "visual" ? "bg-[#00a2ad] text-white shadow-md" : "text-slate-400 hover:text-white"
                        }`}
                      >
                        <span>✏️ Full Editor</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditorTab("split")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                          editorTab === "split" ? "bg-[#00a2ad] text-white shadow-md" : "text-slate-400 hover:text-white"
                        }`}
                      >
                        <span>🌓 Split View</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditorTab("preview")}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                          editorTab === "preview" ? "bg-[#00a2ad] text-white shadow-md" : "text-slate-400 hover:text-white"
                        }`}
                      >
                        <span>👁️ Full Preview</span>
                      </button>
                    </div>

                    {/* Template Loader & Quick Actions */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleLoadSampleTemplate}
                        className="px-2.5 py-1 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-bold transition-colors cursor-pointer flex items-center gap-1"
                        title="Load pre-designed professional blog article layout"
                      >
                        <span>⚡ Load Sample Template</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          if (confirm("Clear all editor content?")) setArticleForm((prev) => ({ ...prev, content: "" }));
                        }}
                        className="px-2 py-1 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-semibold transition-colors cursor-pointer"
                        title="Clear content"
                      >
                        Clear
                      </button>
                    </div>

                    {/* Word & Reading Metrics */}
                    <div className="flex items-center gap-4 text-[11px] text-slate-400 font-mono">
                      <span>Chars: <strong className="text-white">{articleForm.content.length}</strong></span>
                      <span>Words: <strong className="text-[#00a2ad]">{articleForm.content.trim() ? articleForm.content.trim().split(/\s+/).length : 0}</strong></span>
                      <span>Read Time: <strong className="text-amber-400">{Math.max(1, Math.ceil((articleForm.content.trim() ? articleForm.content.trim().split(/\s+/).length : 0) / 200))} min</strong></span>
                    </div>

                  </div>

                  {/* Multi-Row Category-Grouped Rich Toolbar */}
                  {editorTab !== "preview" && (
                    <div className="space-y-2 pt-1">
                      
                      {/* Toolbar Group 1: Typography & Alignments */}
                      <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/90 p-2 rounded-xl border border-slate-800/80">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider pr-1">Headings:</span>
                        <button
                          type="button"
                          onClick={() => insertFormatTag("<h1>", "</h1>", "Main Article Title")}
                          className="px-2.5 py-1 bg-slate-800 hover:bg-[#00a2ad] rounded text-xs font-bold text-white transition-colors"
                          title="Heading 1"
                        >
                          H1
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatTag("<h2>", "</h2>", "Section Title")}
                          className="px-2.5 py-1 bg-slate-800 hover:bg-[#00a2ad] rounded text-xs font-bold text-white transition-colors"
                          title="Heading 2"
                        >
                          H2
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatTag("<h3>", "</h3>", "Subsection Title")}
                          className="px-2.5 py-1 bg-slate-800 hover:bg-[#00a2ad] rounded text-xs font-bold text-white transition-colors"
                          title="Heading 3"
                        >
                          H3
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatTag("<h4>", "</h4>", "Minor Heading")}
                          className="px-2.5 py-1 bg-slate-800 hover:bg-[#00a2ad] rounded text-xs font-bold text-white transition-colors"
                          title="Heading 4"
                        >
                          H4
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatTag("<p>", "</p>", "Paragraph text goes here...")}
                          className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-bold text-slate-200 transition-colors"
                          title="Standard Paragraph"
                        >
                          P
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatTag('<p class="lead text-lg text-slate-200">', "</p>", "Introductory lead paragraph text...")}
                          className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-bold text-cyan-400 transition-colors"
                          title="Lead Intro Paragraph"
                        >
                          Lead P
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatTag('<small class="text-xs text-slate-400">', "</small>", "Fine print / small note")}
                          className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded text-[11px] text-slate-400"
                          title="Small Text"
                        >
                          Small
                        </button>

                        <div className="h-4 w-[1px] bg-slate-700 mx-1" />

                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider pr-1">Inline:</span>
                        <button
                          type="button"
                          onClick={() => insertFormatTag("<strong>", "</strong>", "bold text")}
                          className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-bold text-white transition-colors"
                          title="Bold Text"
                        >
                          <strong>B</strong>
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatTag("<em>", "</em>", "italic text")}
                          className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-bold text-white italic transition-colors"
                          title="Italic Text"
                        >
                          <em>I</em>
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatTag("<u>", "</u>", "underlined text")}
                          className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-bold text-white underline transition-colors"
                          title="Underline Text"
                        >
                          <u>U</u>
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatTag("<s>", "</s>", "strikethrough text")}
                          className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-bold text-white line-through transition-colors"
                          title="Strikethrough"
                        >
                          <s>S</s>
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatTag('<code class="bg-slate-800 text-cyan-300 px-1.5 py-0.5 rounded font-mono text-xs">', "</code>", "const code = true;")}
                          className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-mono text-cyan-300 transition-colors"
                          title="Inline Code"
                        >
                          &lt;/&gt;
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatTag("<mark>", "</mark>", "highlighted text")}
                          className="px-2.5 py-1 bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 rounded text-xs font-bold transition-colors"
                          title="Highlight Text"
                        >
                          Mark
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatTag("<sub>", "</sub>", "2")}
                          className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-[11px] font-bold text-slate-300"
                          title="Subscript"
                        >
                          X<sub>2</sub>
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatTag("<sup>", "</sup>", "2")}
                          className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-[11px] font-bold text-slate-300"
                          title="Superscript"
                        >
                          X<sup>2</sup>
                        </button>

                        <div className="h-4 w-[1px] bg-slate-700 mx-1" />

                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider pr-1">Align:</span>
                        <button
                          type="button"
                          onClick={() => insertFormatTag('<div class="text-left">', "</div>", "Left aligned content")}
                          className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs text-slate-300"
                          title="Align Left"
                        >
                          ⬅ Left
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatTag('<div class="text-center">', "</div>", "Center aligned content")}
                          className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs text-slate-300"
                          title="Align Center"
                        >
                          ↔ Center
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatTag('<div class="text-right">', "</div>", "Right aligned content")}
                          className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs text-slate-300"
                          title="Align Right"
                        >
                          ➡️ Right
                        </button>
                      </div>

                      {/* Toolbar Group 2: Lists, Quotes, Code Blocks & Tables */}
                      <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/90 p-2 rounded-xl border border-slate-800/80">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider pr-1">Lists & Blocks:</span>
                        <button
                          type="button"
                          onClick={() => insertFormatTag("<ul class=\"list-disc pl-5 space-y-1 text-slate-300 my-4\">\n  <li>First list item</li>\n  <li>Second list item</li>\n</ul>")}
                          className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-bold text-slate-200 transition-colors"
                          title="Unordered Bullet List"
                        >
                          • Bullet List
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatTag("<ol class=\"list-decimal pl-5 space-y-1 text-slate-300 my-4\">\n  <li>First step</li>\n  <li>Second step</li>\n</ol>")}
                          className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-bold text-slate-200 transition-colors"
                          title="Ordered Numbered List"
                        >
                          1. Numbered List
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatTag('<ul class="space-y-2 my-4 text-xs text-slate-300">\n  <li class="flex items-center gap-2"><span class="text-emerald-400 font-bold">✓</span> Completed task item</li>\n  <li class="flex items-center gap-2"><span class="text-slate-500">○</span> Pending task item</li>\n</ul>')}
                          className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-bold text-emerald-300 transition-colors"
                          title="Task Checklist"
                        >
                          ☑ Task Checklist
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatTag('<blockquote class="border-l-4 border-[#00a2ad] bg-slate-950 p-4 rounded-r-xl italic text-slate-200 my-6">\n  "Key quote or insight goes here..."\n</blockquote>')}
                          className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-bold text-cyan-300 transition-colors"
                          title="Blockquote"
                        >
                          &quot; Quote
                        </button>
                        <button
                          type="button"
                          onClick={handleInsertCodeBlock}
                          className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-mono text-emerald-400 transition-colors"
                          title="Formatted Code Block"
                        >
                          💻 Code Block
                        </button>
                        <button
                          type="button"
                          onClick={handleInsertTable}
                          className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-bold text-blue-400 transition-colors"
                          title="Generate Data Table"
                        >
                          📊 Table
                        </button>

                        <div className="h-4 w-[1px] bg-slate-700 mx-1" />

                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider pr-1">Callouts:</span>
                        <button
                          type="button"
                          onClick={() => insertFormatTag('<div class="p-4 rounded-xl border-l-4 border-cyan-500 bg-cyan-950/20 my-4 shadow-sm">\n  <strong class="text-cyan-400 block mb-1">💡 Pro Tip</strong>\n  <p class="text-xs text-slate-300">Important tip details go here...</p>\n</div>')}
                          className="px-2 py-1 bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 rounded text-xs font-bold transition-colors"
                          title="Pro Tip Box"
                        >
                          💡 Tip Box
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatTag('<div class="p-4 rounded-xl border-l-4 border-amber-500 bg-amber-950/20 my-4 shadow-sm">\n  <strong class="text-amber-400 block mb-1">⚠️ Warning</strong>\n  <p class="text-xs text-slate-300">Cautionary details go here...</p>\n</div>')}
                          className="px-2 py-1 bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 rounded text-xs font-bold transition-colors"
                          title="Warning Box"
                        >
                          ⚠️ Warning
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatTag('<div class="p-4 rounded-xl border-l-4 border-emerald-500 bg-emerald-950/20 my-4 shadow-sm">\n  <strong class="text-emerald-400 block mb-1">✅ Success Note</strong>\n  <p class="text-xs text-slate-300">Verified solution details...</p>\n</div>')}
                          className="px-2 py-1 bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 rounded text-xs font-bold transition-colors"
                          title="Success Box"
                        >
                          ✅ Success
                        </button>
                        <button
                          type="button"
                          onClick={handleInsertAccordion}
                          className="px-2 py-1 bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 rounded text-xs font-bold transition-colors"
                          title="Collapsible FAQ Accordion"
                        >
                          ❓ FAQ Accordion
                        </button>
                        <button
                          type="button"
                          onClick={handleInsertStatsCard}
                          className="px-2 py-1 bg-slate-800 text-amber-300 hover:bg-slate-700 rounded text-xs font-bold transition-colors"
                          title="3-Column Metrics Grid"
                        >
                          📈 Stat Cards
                        </button>
                      </div>

                      {/* Toolbar Group 3: Links, Embeds & CTAs */}
                      <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/90 p-2 rounded-xl border border-slate-800/80">
                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider pr-1">Media & Embeds:</span>
                        <button
                          type="button"
                          onClick={handleInsertLink}
                          className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-bold text-cyan-400 transition-colors"
                          title="Insert Hyperlink"
                        >
                          🔗 Hyperlink
                        </button>
                        <button
                          type="button"
                          onClick={handleInsertImageFigure}
                          className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-bold text-amber-400 transition-colors"
                          title="Insert Image Figure with Caption"
                        >
                          🖼️ Figure Image
                        </button>
                        <button
                          type="button"
                          onClick={handleInsertVideoEmbed}
                          className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-bold text-rose-400 transition-colors"
                          title="Insert YouTube / Video Player"
                        >
                          📹 Video Embed
                        </button>

                        <div className="h-4 w-[1px] bg-slate-700 mx-1" />

                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider pr-1">Actions & Dividers:</span>
                        <button
                          type="button"
                          onClick={handleInsertCTAButton}
                          className="px-2.5 py-1 bg-[#00a2ad] hover:bg-[#008790] rounded text-xs font-bold text-white transition-colors shadow"
                          title="Insert Primary Call To Action Button"
                        >
                          🔘 Primary CTA Button
                        </button>
                        <button
                          type="button"
                          onClick={() => insertFormatTag('<hr class="my-8 border-slate-800" />')}
                          className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 rounded text-xs font-bold text-slate-300 transition-colors"
                          title="Horizontal Divider"
                        >
                          — Divider Line
                        </button>
                      </div>

                    </div>
                  )}

                </div>

                {/* Editor Content Area */}
                {editorTab === "visual" && (
                  <textarea
                    ref={editorTextareaRef}
                    rows={16}
                    required
                    value={articleForm.content}
                    onChange={(e) => setArticleForm({ ...articleForm, content: e.target.value })}
                    placeholder="Compose rich HTML article content here... Highlighting text and clicking formatting toolbar buttons will wrap selected text directly."
                    className="w-full p-4 bg-slate-900 text-slate-100 font-mono text-xs leading-relaxed focus:outline-none focus:ring-1 focus:ring-[#00a2ad]"
                  />
                )}

                {editorTab === "split" && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-800 min-h-[420px]">
                    <div className="p-3 bg-slate-900 flex flex-col">
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                        <span>HTML Editor Input</span>
                        <span className="text-slate-500 font-mono text-[10px]">Real-time Sync</span>
                      </div>
                      <textarea
                        ref={editorTextareaRef}
                        rows={16}
                        required
                        value={articleForm.content}
                        onChange={(e) => setArticleForm({ ...articleForm, content: e.target.value })}
                        placeholder="Compose HTML content..."
                        className="w-full flex-1 p-3 bg-slate-950 text-slate-100 font-mono text-xs leading-relaxed rounded-xl border border-slate-800/80 focus:outline-none focus:ring-1 focus:ring-[#00a2ad]"
                      />
                    </div>
                    <div className="p-4 bg-[#070D1E] overflow-y-auto max-h-[500px]">
                      <div className="text-[11px] font-bold text-[#00a2ad] uppercase tracking-wider mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#00a2ad] animate-pulse"></span>
                        Live Preview Output
                      </div>
                      <div
                        dangerouslySetInnerHTML={{ __html: articleForm.content }}
                        className="prose prose-invert max-w-none 
                          [&>h1]:text-2xl [&>h1]:font-bold [&>h1]:text-white [&>h1]:mt-6 [&>h1]:mb-3
                          [&>h2]:text-xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-5 [&>h2]:mb-2.5 [&>h2]:border-b [&>h2]:border-slate-800 [&>h2]:pb-1
                          [&>h3]:text-lg [&>h3]:font-bold [&>h3]:text-[#00a2ad] [&>h3]:mt-4 [&>h3]:mb-2
                          [&>h4]:text-base [&>h4]:font-bold [&>h4]:text-slate-300 [&>h4]:mt-3 [&>h4]:mb-2
                          [&>p]:text-slate-300 [&>p]:leading-relaxed [&>p]:mb-3 [&>p]:text-xs
                          [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1 [&>ul]:text-slate-300 [&>ul]:mb-3 [&>ul]:text-xs
                          [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-1 [&>ol]:text-slate-300 [&>ol]:mb-3 [&>ol]:text-xs
                          [&>blockquote]:border-l-4 [&>blockquote]:border-[#00a2ad] [&>blockquote]:bg-[#0F172A] [&>blockquote]:p-3 [&>blockquote]:rounded-r-xl [&>blockquote]:italic [&>blockquote]:text-slate-200 [&>blockquote]:my-3 [&>blockquote]:text-xs
                          [&>img]:rounded-xl [&>img]:my-3 [&>img]:max-h-56 [&>img]:object-cover
                          [&>mark]:bg-amber-400 [&>mark]:text-slate-900 [&>mark]:px-1 [&>mark]:rounded
                          [&>pre]:bg-slate-950 [&>pre]:p-3 [&>pre]:rounded-xl [&>pre]:border [&>pre]:border-slate-800 [&>pre]:my-3 [&>pre]:overflow-x-auto [&>pre]:text-[11px]
                          [&>table]:w-full [&>table]:border-collapse [&>table]:my-3 [&>table]:text-[11px]
                          [&>table_th]:border [&>table_th]:border-slate-700 [&>table_th]:p-2 [&>table_th]:bg-slate-800 [&>table_th]:text-cyan-400
                          [&>table_td]:border [&>table_td]:border-slate-800 [&>table_td]:p-2"
                      />
                    </div>
                  </div>
                )}

                {editorTab === "preview" && (
                  <div className="p-6 bg-[#070D1E] min-h-[420px] border-t border-slate-800 text-slate-200">
                    <div className="text-xs text-[#00a2ad] font-bold mb-4 uppercase tracking-wider flex items-center gap-2 border-b border-slate-800 pb-3">
                      <span className="w-2 h-2 rounded-full bg-[#00a2ad] animate-pulse"></span>
                      Full Real-Time Article HTML Output Preview
                    </div>
                    <div
                      dangerouslySetInnerHTML={{ __html: articleForm.content }}
                      className="prose prose-invert max-w-none 
                        [&>h1]:text-3xl [&>h1]:font-extrabold [&>h1]:text-white [&>h1]:mt-8 [&>h1]:mb-4
                        [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-white [&>h2]:mt-8 [&>h2]:mb-3 [&>h2]:border-b [&>h2]:border-slate-800 [&>h2]:pb-2
                        [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-[#00a2ad] [&>h3]:mt-6 [&>h3]:mb-3
                        [&>h4]:text-lg [&>h4]:font-bold [&>h4]:text-slate-200 [&>h4]:mt-4 [&>h4]:mb-2
                        [&>p]:text-slate-300 [&>p]:leading-relaxed [&>p]:mb-4 [&>p]:text-sm
                        [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1.5 [&>ul]:text-slate-300 [&>ul]:mb-4 [&>ul]:text-sm
                        [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-1.5 [&>ol]:text-slate-300 [&>ol]:mb-4 [&>ol]:text-sm
                        [&>blockquote]:border-l-4 [&>blockquote]:border-[#00a2ad] [&>blockquote]:bg-[#0F172A] [&>blockquote]:p-4 [&>blockquote]:rounded-r-2xl [&>blockquote]:italic [&>blockquote]:text-slate-200 [&>blockquote]:my-6 [&>blockquote]:text-sm
                        [&>img]:rounded-2xl [&>img]:my-6 [&>img]:max-h-96 [&>img]:object-cover [&>img]:shadow-xl
                        [&>mark]:bg-amber-400 [&>mark]:text-slate-900 [&>mark]:px-1.5 [&>mark]:py-0.5 [&>mark]:rounded
                        [&>pre]:bg-slate-950 [&>pre]:p-4 [&>pre]:rounded-2xl [&>pre]:border [&>pre]:border-slate-800 [&>pre]:my-6 [&>pre]:overflow-x-auto [&>pre]:shadow-lg
                        [&>table]:w-full [&>table]:border-collapse [&>table]:my-6 [&>table]:text-xs [&>table]:shadow-lg
                        [&>table_th]:border [&>table_th]:border-slate-700 [&>table_th]:p-3 [&>table_th]:bg-slate-800 [&>table_th]:text-cyan-400
                        [&>table_td]:border [&>table_td]:border-slate-800 [&>table_td]:p-3"
                    />
                  </div>
                )}

              </div>

              {/* Modal Action Buttons */}
              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowArticleModal(false)}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isUpdating}
                  className="px-6 py-2.5 rounded-xl bg-[#00a2ad] hover:bg-[#008790] text-white text-xs font-bold shadow-lg cursor-pointer flex items-center gap-2"
                >
                  {isUpdating ? "Saving Article..." : editingArticle ? "Update Article" : "Save & Publish Article"}
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* ========================================== */}
      {/* DELETE ARTICLE MODAL                       */}
      {/* ========================================== */}
      {deletingArticle && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0F172A] border border-rose-500/30 rounded-2xl max-w-sm w-full p-6 shadow-2xl space-y-4">
            <div className="w-12 h-12 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center mx-auto">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>

            <div className="text-center">
              <h3 className="text-base font-bold text-white">Delete Blog Article?</h3>
              <p className="text-xs text-slate-400 mt-1">
                Are you sure you want to delete <span className="text-rose-300 font-semibold">&ldquo;{deletingArticle.title}&rdquo;</span>?
              </p>
            </div>

            <div className="pt-3 flex items-center justify-center gap-3">
              <button
                onClick={() => setDeletingArticle(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteArticleConfirm}
                disabled={isUpdating}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-lg"
              >
                {isUpdating ? "Deleting..." : "Confirm Delete"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================== */}
      {/* ADD / EDIT JOB POSITION MODAL              */}
      {/* ========================================== */}
      {showJobModal && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0F172A] border border-slate-700 rounded-2xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-wider block">
                  {editingJob ? "Edit Job Opening" : "Create New Job Opening"}
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  {editingJob ? "Update Job Details" : "New Job Position"}
                </h3>
              </div>
              <button onClick={() => setShowJobModal(false)} className="text-slate-400 hover:text-white text-lg cursor-pointer">
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveJob} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Job Position Title *
                </label>
                <input
                  type="text"
                  required
                  value={jobForm.title}
                  onChange={(e) => setJobForm({ ...jobForm, title: e.target.value })}
                  placeholder="e.g. Senior AI/ML Engineer"
                  className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-[#00a2ad]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Department / Category *
                  </label>
                  <input
                    type="text"
                    required
                    value={jobForm.category}
                    onChange={(e) => setJobForm({ ...jobForm, category: e.target.value })}
                    placeholder="e.g. AI & Machine Learning"
                    className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-[#00a2ad]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Job Type *
                  </label>
                  <select
                    value={jobForm.type}
                    onChange={(e) => setJobForm({ ...jobForm, type: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-[#00a2ad]"
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Remote">Remote</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    No. of Vacancies
                  </label>
                  <input
                    type="number"
                    min={1}
                    required
                    value={jobForm.vacancies}
                    onChange={(e) => setJobForm({ ...jobForm, vacancies: parseInt(e.target.value, 10) || 1 })}
                    className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-[#00a2ad]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Application Deadline
                  </label>
                  <input
                    type="date"
                    value={jobForm.application_deadline}
                    onChange={(e) => setJobForm({ ...jobForm, application_deadline: e.target.value })}
                    className="w-full px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-[#00a2ad]"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Detailed Job Description & Requirements (Rich Text HTML)
                  </label>
                  <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-lg border border-slate-800">
                    <button
                      type="button"
                      onClick={() => setJobDescTab("edit")}
                      className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                        jobDescTab === "edit"
                          ? "bg-[#00a2ad] text-white shadow-xs"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      ✏️ Edit
                    </button>
                    <button
                      type="button"
                      onClick={() => setJobDescTab("preview")}
                      className={`px-3 py-1 rounded-md text-xs font-bold transition-all cursor-pointer ${
                        jobDescTab === "preview"
                          ? "bg-[#00a2ad] text-white shadow-xs"
                          : "text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      👁️ Preview
                    </button>
                  </div>
                </div>

                {jobDescTab === "edit" ? (
                  <div className="space-y-2">
                    {/* TOOLBAR */}
                    <div className="flex flex-wrap items-center gap-1.5 p-2 bg-slate-900/90 border border-slate-800 rounded-xl text-xs">
                      <button
                        type="button"
                        onClick={() => insertJobFormatTag("<b>", "</b>")}
                        className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded cursor-pointer"
                        title="Bold"
                      >
                        B
                      </button>
                      <button
                        type="button"
                        onClick={() => insertJobFormatTag("<i>", "</i>")}
                        className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 italic font-serif rounded cursor-pointer"
                        title="Italic"
                      >
                        I
                      </button>
                      <button
                        type="button"
                        onClick={() => insertJobFormatTag("<h2>", "</h2>")}
                        className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-cyan-400 font-bold rounded cursor-pointer"
                        title="Heading 2"
                      >
                        H2
                      </button>
                      <button
                        type="button"
                        onClick={() => insertJobFormatTag("<h3>", "</h3>")}
                        className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-cyan-400 font-bold rounded cursor-pointer"
                        title="Heading 3"
                      >
                        H3
                      </button>
                      <button
                        type="button"
                        onClick={() => insertJobFormatTag("<ul>\n  <li>", "</li>\n  <li>Item 2</li>\n</ul>")}
                        className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded cursor-pointer"
                        title="Bullet List"
                      >
                        • Bullet List
                      </button>
                      <button
                        type="button"
                        onClick={() => insertJobFormatTag("<ol>\n  <li>", "</li>\n  <li>Step 2</li>\n</ol>")}
                        className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded cursor-pointer"
                        title="Numbered List"
                      >
                        1. Numbered List
                      </button>
                      <button
                        type="button"
                        onClick={() => insertJobFormatTag("<blockquote>", "</blockquote>")}
                        className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-amber-300 font-semibold rounded cursor-pointer"
                        title="Callout Box"
                      >
                        ❝ Quote / Box
                      </button>
                      <button
                        type="button"
                        onClick={() => insertJobFormatTag("<mark>", "</mark>")}
                        className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-yellow-400 font-semibold rounded cursor-pointer"
                        title="Highlight"
                      >
                        Highlight
                      </button>
                      <button
                        type="button"
                        onClick={() => insertJobFormatTag("<hr/>\n")}
                        className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-400 font-semibold rounded cursor-pointer"
                        title="Horizontal Line"
                      >
                        ― Line
                      </button>
                    </div>

                    <textarea
                      id="job_description_editor"
                      rows={8}
                      value={jobForm.description}
                      onChange={(e) => setJobForm({ ...jobForm, description: e.target.value })}
                      placeholder="Write detailed responsibilities, key requirements, tech stack, and benefits using HTML tags..."
                      className="w-full p-4 bg-slate-900 border border-slate-700 rounded-xl text-white text-xs font-mono leading-relaxed focus:outline-none focus:border-[#00a2ad]"
                    />
                  </div>
                ) : (
                  <div
                    className="w-full p-4 bg-slate-900 border border-slate-700 rounded-xl text-white text-xs leading-relaxed min-h-[220px] max-h-[350px] overflow-y-auto
                      [&>h2]:text-base [&>h2]:font-bold [&>h2]:text-cyan-400 [&>h2]:mt-3 [&>h2]:mb-1.5 [&>h2]:border-b [&>h2]:border-slate-800 [&>h2]:pb-1
                      [&>h3]:text-sm [&>h3]:font-bold [&>h3]:text-[#00a2ad] [&>h3]:mt-2.5 [&>h3]:mb-1
                      [&>p]:text-slate-300 [&>p]:leading-relaxed [&>p]:mb-2.5
                      [&>ul]:list-disc [&>ul]:pl-5 [&>ul]:space-y-1 [&>ul]:text-slate-300 [&>ul]:mb-3
                      [&>ol]:list-decimal [&>ol]:pl-5 [&>ol]:space-y-1 [&>ol]:text-slate-300 [&>ol]:mb-3
                      [&>blockquote]:border-l-4 [&>blockquote]:border-[#00a2ad] [&>blockquote]:bg-slate-950 [&>blockquote]:p-3 [&>blockquote]:rounded-r-lg [&>blockquote]:italic [&>blockquote]:text-slate-300 [&>blockquote]:my-3
                      [&>mark]:bg-amber-400 [&>mark]:text-slate-900 [&>mark]:px-1.5 [&>mark]:py-0.5 [&>mark]:rounded"
                    dangerouslySetInnerHTML={{
                      __html: jobForm.description || "<p class='text-slate-500 italic'>No description text entered yet. Switch to Edit tab to write job details.</p>",
                    }}
                  />
                )}
              </div>

              <div className="flex items-center gap-3 pt-2">
                <input
                  type="checkbox"
                  id="job_active_check"
                  checked={jobForm.is_active}
                  onChange={(e) => setJobForm({ ...jobForm, is_active: e.target.checked })}
                  className="w-4 h-4 accent-[#00a2ad] rounded cursor-pointer"
                />
                <label htmlFor="job_active_check" className="text-xs font-semibold text-slate-300 cursor-pointer">
                  Publish Job position actively on Career page
                </label>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowJobModal(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isUpdating}
                  className="px-5 py-2 rounded-xl bg-[#00a2ad] hover:bg-[#008790] text-white text-xs font-bold shadow-lg"
                >
                  {isUpdating ? "Saving..." : editingJob ? "Update Job Position" : "Create Job Position"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ========================================== */}
      {/* DELETE JOB POSITION MODAL                  */}
      {/* ========================================== */}
      {deletingJob && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0F172A] border border-rose-500/30 rounded-2xl max-w-sm w-full p-6 shadow-2xl space-y-4">
            <div className="w-12 h-12 rounded-full bg-rose-500/10 text-rose-400 flex items-center justify-center mx-auto">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>

            <div className="text-center">
              <h3 className="text-base font-bold text-white">Delete Job Position?</h3>
              <p className="text-xs text-slate-400 mt-1">
                Are you sure you want to delete <span className="text-rose-300 font-semibold">&ldquo;{deletingJob.title}&rdquo;</span>?
              </p>
            </div>

            <div className="pt-3 flex items-center justify-center gap-3">
              <button
                onClick={() => setDeletingJob(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteJobConfirm}
                disabled={isUpdating}
                className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-lg"
              >
                {isUpdating ? "Deleting..." : "Confirm Delete"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================== */}
      {/* JOB APPLICANTS REVIEW MODAL                */}
      {/* ========================================== */}
      {showApplicationsModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0F172A] border border-slate-700 rounded-2xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold text-[#00a2ad] uppercase tracking-wider block">
                  Candidates & Applications
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  {selectedJobForApps ? `Applicants for ${selectedJobForApps.title}` : "All Career Applicants"}
                </h3>
              </div>
              <button onClick={() => setShowApplicationsModal(false)} className="text-slate-400 hover:text-white text-lg">
                ✕
              </button>
            </div>

            {loadingApps ? (
              <div className="py-12 text-center text-slate-400">Loading applicants...</div>
            ) : jobApplications.length > 0 ? (
              <div className="space-y-4">
                {jobApplications.map((app) => (
                  <div key={app.id} className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-start justify-between gap-6 shadow-md">
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-base font-extrabold text-white">{app.name}</h4>
                        <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#00a2ad]/20 text-[#00a2ad] font-bold">
                          {app.job_title}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 pt-1">
                        <div>
                          <span className="font-semibold text-slate-400">Email: </span>
                          <a href={`mailto:${app.email}`} className="text-[#00a2ad] hover:underline font-bold">
                            {app.email}
                          </a>
                        </div>
                        {app.phone_number && (
                          <div>
                            <span className="font-semibold text-slate-400">Phone: </span>
                            <span className="font-mono text-white font-bold">{app.phone_number}</span>
                          </div>
                        )}
                        {app.date_of_birth && (
                          <div>
                            <span className="font-semibold text-slate-400">Date of Birth: </span>
                            <span className="text-slate-200">{app.date_of_birth}</span>
                          </div>
                        )}
                        {app.education && (
                          <div>
                            <span className="font-semibold text-slate-400">Education: </span>
                            <span className="text-emerald-400 font-bold">{app.education}</span>
                          </div>
                        )}
                      </div>

                      {app.portfolio && (
                        <p className="text-xs text-slate-400 pt-1">
                          <span className="font-semibold text-slate-400">Portfolio/LinkedIn: </span>
                          <a href={app.portfolio} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline font-medium">
                            {app.portfolio}
                          </a>
                        </p>
                      )}

                      {(app.resume_url || app.resume) && (
                        <div className="pt-2">
                          <a
                            href={app.resume_url || (app.resume ? `${API_BASE_URL}${app.resume}` : "#")}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-bold transition-all"
                          >
                            <span>📄 Download CV / Resume File</span>
                          </a>
                        </div>
                      )}

                      {app.cover_note && (
                        <div className="pt-2">
                          <p className="text-xs text-slate-300 italic bg-slate-950 p-3 rounded-xl border border-slate-800 leading-relaxed">
                            &ldquo;{app.cover_note}&rdquo;
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex sm:flex-col items-center sm:items-end justify-between gap-3 shrink-0">
                      <span className="text-[11px] text-slate-400 font-mono">
                        {new Date(app.created_at).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
                      </span>

                      <select
                        value={app.status}
                        onChange={(e) => handleUpdateAppStatus(app.id, e.target.value)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800 border cursor-pointer ${
                          app.status === "accepted"
                            ? "text-emerald-400 border-emerald-500/40"
                            : app.status === "reviewed"
                            ? "text-blue-400 border-blue-500/40"
                            : app.status === "rejected"
                            ? "text-rose-400 border-rose-500/40"
                            : "text-amber-400 border-amber-500/40"
                        }`}
                      >
                        <option value="pending">⏳ Pending</option>
                        <option value="reviewed">👀 Reviewed</option>
                        <option value="accepted">✅ Accepted</option>
                        <option value="rejected">❌ Rejected</option>
                      </select>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center text-slate-500">
                No job applications received yet for this position.
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
