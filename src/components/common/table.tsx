import type { ReactNode } from "react";

export function Table({ children }: { children: ReactNode }) {
  return <table className="w-full border rounded-md overflow-hidden">{children}</table>;
}

export function THead({ children }: { children: ReactNode }) {
  return <thead className="bg-slate-100 dark:bg-slate-800 text-sm">{children}</thead>;
}

export function TBody({ children }: { children: ReactNode }) {
  return <tbody className="text-sm">{children}</tbody>;
}

export function TR({ children }: { children: ReactNode }) {
  return <tr className="border-b">{children}</tr>;
}

export function TH({ children }: { children: ReactNode }) {
  return <th className="px-3 py-2 text-right">{children}</th>;
}

export function TD({ children }: { children: ReactNode }) {
  return <td className="px-3 py-2">{children}</td>;
}
