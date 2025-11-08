"use client";

import { GlassCard } from "@/components/crm/GlassCard";
import { AvatarGroup } from "@/components/crm/AvatarGroup";
import { PillTabs } from "@/components/crm/PillTabs";
import { FlowBoard } from "@/components/crm/FlowBoard";
import { Card, CardContent } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="relative">
      {/* Floating spheres background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-16 -right-10 h-56 w-56 rounded-full bg-white/70 blur-2xl shadow-2xl" />
        <div className="absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-white/60 blur-2xl shadow-xl" />
        <div className="absolute top-1/3 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-slate-100/80 blur-xl" />
      </div>

      {/* Top header row */}
      <div className="mb-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <GlassCard className="lg:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs uppercase tracking-widest text-slate-500">
                Customer Journeys
              </div>
              <div className="mt-1 text-lg font-semibold">New Case Management</div>
            </div>
            <AvatarGroup
              people={[
                { name: "سارا", src: "" },
                { name: "حسین", src: "" },
                { name: "مینا", src: "" },
                { name: "رضا", src: "" },
                { name: "الهام", src: "" },
                { name: "امیر", src: "" },
              ]}
              maxVisible={8}
            />
          </div>
          <div className="mt-4">
            <PillTabs
              tabs={[
                "Relationship",
                "Opportunities",
                "Leads",
                "Calendar",
                "Cases",
                "Reports",
                "Quotes",
              ]}
              defaultActive="Cases"
            />
          </div>
        </GlassCard>

        <GlassCard>
          <div className="text-xs uppercase tracking-widest text-slate-500">Quick Actions</div>
          <div className="mt-3 grid grid-cols-4 gap-2">
            {["جستجو", "پیام", "اشتراک", "تنظیمات"].map((x) => (
              <button
                key={x}
                className="rounded-full border bg-white/60 px-3 py-2 text-sm shadow-sm backdrop-blur hover:bg-white"
              >
                {x}
              </button>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Main flow board (three rounded blocks with connectors) */}
      <FlowBoard
        columns={[
          {
            title: "Issue Identification",
            items: [
              { title: "Identify Issue Category" },
              { title: "Identify Issue Severity" },
              { title: "Identify Issue Impact" },
              { title: "Allocate to Resolution Team" },
              { title: "Advise Resolution Estimate" },
            ],
          },
          {
            title: "Technical Resolution",
            items: [
              { title: "Identify Issue Dependencies" },
              { title: "Identify Issue Resolution" },
              { title: "Estimate Resolution Time", accent: "dark" },
              { title: "Advise Resolution Estimate" },
              { title: "Customer Issue Resolved" },
            ],
          },
          {
            title: "New Tasks",
            items: [
              { title: "Problem Resolution" },
              { title: "Testing and Verification" },
              { title: "Customer Communication" },
              { title: "Customer Notification" },
              { title: "Customer Satisfaction" },
            ],
          },
        ]}
      />

      {/* Bottom analytics strip */}
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="bg-white/70 shadow-sm backdrop-blur">
          <CardContent className="p-4">
            <div className="text-sm font-semibold">Suggested Knowledge</div>
            <div className="mt-2 text-xs text-slate-500">
              نمایش اسناد و راهنماهای مرتبط با تیکت‌های اخیر
            </div>
          </CardContent>
        </Card>
        <Card className="bg-white/70 shadow-sm backdrop-blur">
          <CardContent className="p-4">
            <div className="text-sm font-semibold">Support Ticket Journey</div>
            <div className="mt-4 h-24 w-full rounded-xl bg-gradient-to-r from-sky-100 to-rose-100" />
          </CardContent>
        </Card>
        <Card className="bg-white/70 shadow-sm backdrop-blur">
          <CardContent className="p-4">
            <div className="text-sm font-semibold">New Tasks</div>
            <div className="mt-2 grid grid-cols-3 gap-2 text-xs">
              {["Create", "Assign", "Schedule"].map((x) => (
                <div key={x} className="rounded-lg border bg-white/60 p-3 text-center shadow-sm">
                  {x}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
