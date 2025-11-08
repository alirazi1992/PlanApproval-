"use client";

import React from "react";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { Guard } from "@/features/auth/guard";
import { ToastProvider } from "@/hooks/use-toast";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  return (
    <Guard>
      <ToastProvider>
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-[260px_1fr]">
          <Sidebar />
          <div className="flex flex-col">
            <Topbar />
            <main className="container-page">{children}</main>
          </div>
        </div>
      </ToastProvider>
    </Guard>
  );
}
