"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/features/auth/useAuth";

type Msg = { projectId: string; text: string; sender: string; at: string };

export function MessagePanel({ projectId }: { projectId: string }) {
  const { user } = useAuth();
  const [items, setItems] = useState<Msg[]>([]);
  const [text, setText] = useState("");

  async function load() {
    const res = await fetch(`/api/messages?projectId=${projectId}`);
    const data = await res.json();
    setItems(data.items);
  }
  useEffect(() => {
    load();
  }, [projectId]);

  async function send() {
    if (!text.trim()) return;
    await fetch("/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ projectId, text, sender: user?.fullName || "کاربر" }),
    });
    setText("");
    await load();
  }

  return (
    <div className="space-y-3">
      <div className="border rounded-md p-3 h-64 overflow-auto bg-white dark:bg-slate-950">
        {items.map((m, i) => (
          <div key={i} className="text-sm mb-2">
            <b>{m.sender}:</b> {m.text}
            <span className="text-xs text-slate-500 mr-2">
              {new Date(m.at).toLocaleString("fa-IR")}
            </span>
          </div>
        ))}
        {!items.length && <div className="text-sm text-slate-500">پیامی وجود ندارد.</div>}
      </div>
      <div className="flex items-start gap-2">
        <Textarea rows={3} value={text} onChange={(e) => setText(e.target.value)} />
        <Button onClick={send}>ارسال</Button>
      </div>
    </div>
  );
}
