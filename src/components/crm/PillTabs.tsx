"use client";

import { useState } from "react";
import { cn } from "@/lib/axios";

export function PillTabs({ tabs, defaultActive }: { tabs: string[]; defaultActive?: string }) {
  const [active, setActive] = useState(defaultActive ?? tabs[0]);
  return (
    <div className="inline-flex items-center gap-2 rounded-full border bg-white/60 p-1 shadow-sm backdrop-blur">
      {tabs.map((t) => {
        const isActive = t === active;
        return (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm transition",
              isActive ? "bg-black text-white shadow" : "text-slate-600 hover:bg-white"
            )}
          >
            {t}
          </button>
        );
      })}
    </div>
  );
}
