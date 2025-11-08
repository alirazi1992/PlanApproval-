"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function UploadModal({ onUpload }: { onUpload: (file: File) => Promise<void> }) {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  async function handleUpload() {
    if (file) {
      await onUpload(file);
      setOpen(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary">بارگذاری سند</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>بارگذاری سند</DialogTitle>
        <input type="file" onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
        <div className="flex justify-end gap-2 mt-4">
          <Button onClick={() => setOpen(false)} variant="ghost">
            انصراف
          </Button>
          <Button onClick={handleUpload} disabled={!file}>
            آپلود
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
