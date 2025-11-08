"use client";

import { useEffect, useState } from "react";
import { getProject } from "@/services/projects.service";
import { UploadModal } from "@/components/modals/upload-modal";
import { StatusModal } from "@/components/modals/status-modal";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";

export function DocumentList({ projectId }: { projectId: string }) {
  const [docs, setDocs] = useState<Array<any>>([]);
  const { toast } = useToast();

  async function load() {
    const proj = await getProject(projectId);
    setDocs(proj.documents || []);
  }
  useEffect(() => {
    load();
  }, [projectId]);

  async function onUpload(file: File) {
    const fd = new FormData();
    fd.append("file", file);
    await fetch(`/api/projects/${projectId}/documents`, { method: "POST", body: fd });
    toast({ title: "بارگذاری موفق", description: file.name });
    await load();
  }

  async function changeStatus(docId: string, status: string) {
    await fetch(`/api/documents/${docId}`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
      headers: { "Content-Type": "application/json" },
    });
    toast({ title: "وضعیت تغییر کرد", description: `سند ${docId} → ${status}` });
    await load();
  }

  return (
    <div className="space-y-3">
      <UploadModal onUpload={onUpload} />
      <div className="border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100 dark:bg-slate-800 text-sm">
            <tr>
              <th className="p-2 text-right">نام</th>
              <th className="p-2 text-right">نسخه</th>
              <th className="p-2 text-right">وضعیت</th>
              <th className="p-2 text-right">بررسی</th>
              <th className="p-2 text-right">تغییر وضعیت</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {docs.map((d) => (
              <tr key={d.id} className="border-b">
                <td className="p-2">{d.name}</td>
                <td className="p-2">{d.version}</td>
                <td className="p-2">{d.status}</td>
                <td className="p-2">
                  <Link className="underline" href={`/projects/${projectId}/documents/${d.id}`}>
                    باز کردن
                  </Link>
                </td>
                <td className="p-2">
                  <StatusModal onChange={(s) => changeStatus(d.id, s)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
