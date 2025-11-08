import type { ReactNode } from "react";
import { cn } from "@/lib/axios";

type BadgeProps = {
  children: ReactNode;
  variant?: "default" | "success" | "warning" | "danger" | "outline";
  className?: string;
};

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const styles = {
    default: "bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-white",
    success: "bg-green-600 text-white",
    warning: "bg-amber-500 text-white",
    danger: "bg-red-600 text-white",
    outline:
      "border border-slate-300 text-slate-700 dark:text-white dark:border-slate-600 bg-transparent",
  }[variant];

  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 text-xs rounded-md select-none whitespace-nowrap",
        styles,
        className
      )}
    >
      {children}
    </span>
  );
}
