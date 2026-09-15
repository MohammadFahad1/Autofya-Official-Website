"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAdminAuth } from "@/context/AdminAuthContext";

export default function AdminIndexPage() {
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAdminAuth();

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        router.replace("/admin/dashboard");
      } else {
        router.replace("/admin/login");
      }
    }
  }, [isAuthenticated, isLoading, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F172A] text-slate-100">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-[#00a2ad] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-sm font-medium text-slate-400">Redirecting to Admin Portal...</p>
      </div>
    </div>
  );
}
