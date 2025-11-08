"use client";

import { Button } from "@/components/ui/button";
import { CommentModal } from "@/components/modals/commnet-modal";
import { useToast } from "@/hooks/use-toast";
import { can } from "@/lib/rbac";
import { useAuth } from "@/features/auth/useAuth";

export function ReviewToolbar({ projectId, docId }: { projectId: string; docId: string }) {
  const { user } = useAuth();
  const { toast } = useToast();

  async function addComment(text: string) {
    await fetch("/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ projectId, text, by: user?.fullName || "کاربر" }),
    });
    toast({ title: "نظر ثبت شد" });
  }

  return (
    <div className="flex flex-wrap gap-2">
      {can(user, "review") && (
        <Button onClick={() => toast({ title: "علامت‌گذاری در حال بررسی" })}>در حال بررسی</Button>
      )}
      {can(user, "approve_stage_1") && (
        <Button onClick={() => toast({ title: "تأیید مرحله ۱" })}>تأیید مرحله ۱</Button>
      )}
      {can(user, "approve_stage_2") && (
        <Button onClick={() => toast({ title: "تأیید مرحله ۲" })}>تأیید مرحله ۲</Button>
      )}
      {can(user, "issue_certificate") && (
        <Button onClick={() => toast({ title: "صدور گواهی" })}>صدور گواهی</Button>
      )}
      <CommentModal onAdd={addComment} />
    </div>
  );
}
