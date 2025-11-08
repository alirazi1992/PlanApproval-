"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export default function SecurityPage() {
  const { toast } = useToast();

  return (
    <div className="grid gap-6 max-w-3xl">
      <Card>
        <CardHeader>
          <CardTitle>تغییر رمز عبور</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <Label>رمز عبور فعلی</Label>
            <Input type="password" />
          </div>
          <div>
            <Label>رمز عبور جدید</Label>
            <Input type="password" />
          </div>
          <Button onClick={() => toast({ title: "رمز عبور به‌روزرسانی شد" })}>ذخیره</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>احراز هویت دومرحله‌ای (2FA)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-slate-600">فعالسازی 2FA برای امنیت بیشتر حساب.</p>
          <Button variant="secondary" onClick={() => toast({ title: "2FA فعال شد" })}>
            فعال‌سازی 2FA
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
