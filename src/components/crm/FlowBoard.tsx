import { GlassCard } from "./GlassCard";
import { cn } from "@/lib/axios";

type FlowItem = { title: string; accent?: "dark" | "default" };
type Column = { title: string; items: FlowItem[] };

export function FlowBoard({ columns }: { columns: Column[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      {columns.map((col, idx) => (
        <FlowColumn
          key={idx}
          title={col.title}
          items={col.items}
          showRightConnector={idx < columns.length - 1}
        />
      ))}
    </div>
  );
}

function FlowColumn({
  title,
  items,
  showRightConnector,
}: {
  title: string;
  items: FlowItem[];
  showRightConnector?: boolean;
}) {
  return (
    <GlassCard className="relative">
      <div className="mb-3 text-sm font-semibold text-slate-700">{title}</div>
      <div className="space-y-3">
        {items.map((it, i) => (
          <div key={i} className="relative">
            <StepCard title={it.title} accent={it.accent} />
            {/* vertical dotted connection */}
            {i < items.length - 1 && (
              <div className="absolute left-4 top-full h-3 w-px -translate-x-1/2 bg-gradient-to-b from-slate-300 to-transparent dark:from-slate-700"></div>
            )}
          </div>
        ))}
      </div>

      {/* curved connector to next column */}
      {showRightConnector && (
        <svg
          className="pointer-events-none absolute right-[-24px] top-14 hidden h-40 w-12 lg:block"
          viewBox="0 0 48 160"
          fill="none"
        >
          <path
            d="M2 2 C 40 40, 40 120, 2 158"
            stroke="rgba(15,23,42,0.15)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      )}
    </GlassCard>
  );
}

function StepCard({ title, accent = "default" }: { title: string; accent?: "dark" | "default" }) {
  const dark = accent === "dark";
  return (
    <div
      className={cn(
        "flex items-center justify-between rounded-2xl border bg-white/70 px-3 py-3 shadow-sm backdrop-blur",
        "dark:bg-slate-900/40",
        dark && "bg-slate-900 text-white shadow-md dark:bg-slate-800"
      )}
    >
      <div className={cn("text-sm", dark ? "text-white" : "text-slate-700")}>{title}</div>
      <div className="flex items-center gap-2">
        <span className="inline-block h-8 w-8 rounded-full border bg-white/70 shadow-sm" />
        <span className="inline-block h-8 w-8 rounded-full border bg-white/70 shadow-sm" />
        <span className="inline-block h-8 w-8 rounded-full border bg-white/70 shadow-sm" />
      </div>
    </div>
  );
}
