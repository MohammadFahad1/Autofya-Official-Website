import type { Metadata } from "next";
import { AdminAuthProvider } from "@/context/AdminAuthContext";

export const metadata: Metadata = {
  title: "Admin Portal | Autofya",
  description: "Autofya Official Admin Dashboard and Management Portal",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminAuthProvider>
      <div className="min-h-screen bg-[#0F172A] text-slate-100 font-sans selection:bg-[#00a2ad] selection:text-white">
        {children}
      </div>
    </AdminAuthProvider>
  );
}
