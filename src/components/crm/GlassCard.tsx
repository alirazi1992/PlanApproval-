import type { HTMLAttributes } from "react";
import { cn } from "@/lib/axios";

export function GlassCard({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      className={cn(
        "rounded-3xl border border-white/60 bg-white/70 p-5 shadow-[0_10px_40px_-20px_rgb(0,0,0,0.25)] backdrop-blur",
        "dark:bg-slate-900/40 dark:border-white/10",
        className
      )}
    />
  );
}
