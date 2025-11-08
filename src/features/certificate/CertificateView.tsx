"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type Cert = {
  id: string;
  number: string;
  issuedAt: string;
  signedStage1: boolean;
  signedStage2: boolean;
  pdfUrl: string;
};

export function CertificateView({ projectId }: { projectId: string }) {
  const [cert, setCert] = useState<Cert | null>(null);

  useEffect(() => {
    fetch(`/api/certificates/${projectId}`)
      .then((r) => r.json())
      .then(setCert)
      .catch(() => setCert(null));
  }, [projectId]);

  if (!cert) return <div className="text-sm text-slate-500">گواهی موجود نیست.</div>;

  return (
    <div className="border rounded-lg p-4">
      <div className="text-sm">
        شماره گواهی: <b>{cert.number}</b>
      </div>
      <div className="text-sm">تاریخ صدور: {cert.issuedAt}</div>
      <div className="text-sm">
        امضای مدیر فنی (مرحله ۱): {cert.signedStage1 ? "انجام شد" : "انجام نشده"}
      </div>
      <div className="text-sm">
        امضای مدیر واحد (مرحله ۲): {cert.signedStage2 ? "انجام شد" : "انجام نشده"}
      </div>

      <div className="mt-3 flex gap-2">
        {/* Use Button with href instead of asChild */}
        <Button href={cert.pdfUrl}>دانلود PDF</Button>
        <Button variant="secondary">ارسال برای امضا</Button>
      </div>
    </div>
  );
}
