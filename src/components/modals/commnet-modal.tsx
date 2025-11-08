"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function CommentModal({ onAdd }: { onAdd: (text: string) => Promise<void> }) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  async function submit() {
    await onAdd(text);
    setText("");
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary">افزودن نظر</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>افزودن نظر</DialogTitle>
        <Textarea value={text} onChange={(e) => setText(e.target.value)} rows={5} />
        <div className="flex justify-end gap-2 mt-4">
          <Button variant="ghost" onClick={() => setOpen(false)}>
            انصراف
          </Button>
          <Button onClick={submit} disabled={!text.trim()}>
            ثبت
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
