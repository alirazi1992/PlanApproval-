"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DocumentList } from "@/features/documents/DocumentList";
import { MessagePanel } from "@/features/chat/MessagePanel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CertificateView } from "@/features/certificate/CertificateView";

export default function ProjectWorkspacePage() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>فضای کاری پروژه #{id}</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-600">
          مدیریت اسناد، نظرات، جلسات، تاریخچه و گواهی‌ها
        </CardContent>
      </Card>

      <Tabs defaultValue="documents">
        <TabsList>
          <TabsTrigger value="documents">اسناد</TabsTrigger>
          <TabsTrigger value="comments">نظرات/مکاتبات</TabsTrigger>
          <TabsTrigger value="meetings">جلسات</TabsTrigger>
          <TabsTrigger value="history">تاریخچه</TabsTrigger>
          <TabsTrigger value="certificate">گواهی</TabsTrigger>
        </TabsList>

        <TabsContent value="documents">
          <DocumentList projectId={id} />
        </TabsContent>
        <TabsContent value="comments">
          <MessagePanel projectId={id} />
        </TabsContent>
        <TabsContent value="meetings">
          <div className="text-sm">(نمونه) جلسه بعدی: ۱۴۰۴/۰۹/۲۰ — لینک دعوت ارسال خواهد شد.</div>
        </TabsContent>
        <TabsContent value="history">
          <ul className="list-disc pr-5 text-sm">
            <li>ایجاد پروژه</li>
            <li>بارگذاری اسناد اولیه</li>
            <li>ویرایش نسخه ۱٫۱</li>
          </ul>
        </TabsContent>
        <TabsContent value="certificate">
          <CertificateView projectId={id} />
          <div className="mt-3 text-xs">
            مشاهده گواهی صادرشده یا آماده‌سازی برای امضاهای مرحله ۱ و ۲ —{" "}
            <Link className="underline" href={`/projects/${id}`}>
              بازگشت
            </Link>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
