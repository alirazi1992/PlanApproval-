"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/axios";

const links = [
  { href: "/dashboard", label: "داشبورد" },
  { href: "/projects", label: "پروژه‌ها" },
  { href: "/settings/profile", label: "پروفایل" },
  { href: "/settings/security", label: "امنیت" },
];

export function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden md:flex h-screen sticky top-0 flex-col border-l bg-white/70 dark:bg-slate-900/60 backdrop-blur">
      <div className="p-4 border-b">
        <Link href="/dashboard" className="flex items-center justify-center">
          {/* using <img> to avoid next/image config */}
          <img src="/logo-asia.svg" alt="logo" className="h-10" />
        </Link>
      </div>
      <nav className="p-3 space-y-1">
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={cn(
              "block px-3 py-2 rounded-md text-sm hover:bg-sky-50 dark:hover:bg-slate-800",
              pathname.startsWith(l.href) && "bg-sky-100 dark:bg-slate-800"
            )}
          >
            {l.label}
          </Link>
        ))}
      </nav>
      <div className="mt-auto p-4 text-xs text-slate-500">
        © {new Date().getFullYear()} Asia Classification
      </div>
    </aside>
  );
}
