"use client";

import React, { createContext, useContext, useState } from "react";

type Toast = {
  id: number;
  title: string;
  description?: string;
  variant?: "default" | "destructive";
};
const ToastCtx = createContext<{
  toasts: Toast[];
  toast: (t: Omit<Toast, "id">) => void;
  remove: (id: number) => void;
} | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  function toast(t: Omit<Toast, "id">) {
    const id = Date.now();
    setToasts((s) => [...s, { id, ...t }]);
    setTimeout(() => remove(id), 3500);
  }
  function remove(id: number) {
    setToasts((s) => s.filter((x) => x.id !== id));
  }
  return (
    <ToastCtx.Provider value={{ toasts, toast, remove }}>
      {children}
      <div className="fixed bottom-4 left-4 space-y-2 z-50">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`min-w-[240px] rounded-md px-3 py-2 shadow ${t.variant === "destructive" ? "bg-red-600 text-white" : "bg-slate-800 text-white"}`}
          >
            <div className="font-semibold text-sm">{t.title}</div>
            {t.description && <div className="text-xs mt-1">{t.description}</div>}
          </div>
        ))}
      </div>
    </ToastCtx.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastCtx);
  if (!ctx) throw new Error("ToastProvider missing");
  return ctx;
}
