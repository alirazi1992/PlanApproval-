"use client";

import { Button } from "@/components/ui/button";
import { UploadModal } from "@/components/modals/upload-modal";
import { useToast } from "@/hooks/use-toast";

export function ProjectHeader() {
  const { toast } = useToast();

  async function onUpload(file: File) {
    toast({ title: "فایل دریافت شد", description: file.name });
  }

  return (
    <div className="flex items-center justify-between">
      <h2 className="text-xl font-semibold">پروژه‌ها</h2>
      <div className="flex items-center gap-2">
        <UploadModal onUpload={onUpload} />
        <Button
          onClick={() => toast({ title: "پروژه جدید", description: "ایجاد پروژه در نسخه بعدی" })}
        >
          پروژه جدید
        </Button>
      </div>
    </div>
  );
}
