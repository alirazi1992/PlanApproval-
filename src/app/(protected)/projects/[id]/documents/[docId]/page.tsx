"use client";

import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ReviewToolbar } from "@/features/documents/ReviewToolbar";

export default function DocumentReviewPage() {
  const { id, docId } = useParams<{ id: string; docId: string }>();

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>
            بررسی سند #{docId} (پروژه #{id})
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-slate-600">
            پیش‌نمایش: (نمونه) اینجا تصویر/پی‌دی‌اف سند نمایش داده می‌شود.
          </p>
          <div className="h-64 border rounded-md bg-white dark:bg-slate-900 flex items-center justify-center">
            <span className="text-slate-400">PDF/DWG Preview (Mock)</span>
          </div>
          <ReviewToolbar projectId={id} docId={docId} />
        </CardContent>
      </Card>
    </div>
  );
}
