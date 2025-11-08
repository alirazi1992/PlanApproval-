"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function StatusModal({ onChange }: { onChange: (status: string) => Promise<void> }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("in_review");

  async function submit() {
    await onChange(status);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary">تغییر وضعیت</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>وضعیت سند</DialogTitle>
        <select
          className="border rounded-md px-3 py-2 mt-2 w-full bg-white dark:bg-slate-900"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="pending">در انتظار</option>
          <option value="in_review">در حال بررسی</option>
          <option value="approved">تأیید شده</option>
          <option value="rejected">رد شده</option>
        </select>
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="ghost" onClick={() => setOpen(false)}>
            بستن
          </Button>
          <Button onClick={submit}>اعمال</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
