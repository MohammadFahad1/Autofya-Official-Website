"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export interface AdminUser {
  user_id: number;
  full_name: string | null;
  email: string;
  role: string;
  profile_picture: string | null;
}

interface AdminAuthContextType {
  token: string | null;
  adminUser: AdminUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, pass: string) => Promise<{ success: boolean; message: string }>;
  logout: () => void;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "https://api.autofya.com";

const AdminAuthContext = createContext<AdminAuthContextType>({
  token: null,
  adminUser: null,
  isAuthenticated: false,
  isLoading: true,
  login: async () => ({ success: false, message: "" }),
  logout: () => {},
});

export const AdminAuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [adminUser, setAdminUser] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check localStorage on mount
    const savedToken = localStorage.getItem("autofya_admin_token");
    const savedUser = localStorage.getItem("autofya_admin_user");

    if (savedToken && savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        if (parsedUser.role === "admin") {
          setToken(savedToken);
          setAdminUser(parsedUser);
        } else {
          localStorage.removeItem("autofya_admin_token");
          localStorage.removeItem("autofya_admin_user");
        }
      } catch (err) {
        localStorage.removeItem("autofya_admin_token");
        localStorage.removeItem("autofya_admin_user");
      }
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const res = await fetch(`${API_BASE_URL}/auth/login/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        return {
          success: false,
          message: data.message || "Invalid credentials provided.",
        };
      }

      if (data.role !== "admin") {
        return {
          success: false,
          message: "Access Denied: Account does not have administrator privileges.",
        };
      }

      const userObj: AdminUser = {
        user_id: data.user_id,
        full_name: data.full_name,
        email: data.email,
        role: data.role,
        profile_picture: data.profile_picture,
      };

      setToken(data.access);
      setAdminUser(userObj);

      localStorage.setItem("autofya_admin_token", data.access);
      localStorage.setItem("autofya_admin_user", JSON.stringify(userObj));

      return { success: true, message: "Login successful" };
    } catch (err: any) {
      return {
        success: false,
        message: "Failed to connect to authentication server. Please try again.",
      };
    }
  };

  const logout = () => {
    setToken(null);
    setAdminUser(null);
    localStorage.removeItem("autofya_admin_token");
    localStorage.removeItem("autofya_admin_user");
    router.push("/admin/login");
  };

  return (
    <AdminAuthContext.Provider
      value={{
        token,
        adminUser,
        isAuthenticated: !!token && !!adminUser,
        isLoading,
        login,
        logout,
      }}
    >
      {children}
    </AdminAuthContext.Provider>
  );
};

export const useAdminAuth = () => useContext(AdminAuthContext);
