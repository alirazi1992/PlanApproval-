"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ToastProvider, useToast } from "@/hooks/use-toast";
import { useAuth } from "@/features/auth/useAuth";

export default function LoginPage() {
  return (
    <ToastProvider>
      <LoginView />
    </ToastProvider>
  );
}

function LoginView() {
  const router = useRouter();
  const params = useSearchParams();
  const redirectTo = params.get("redirect") || "/dashboard";
  const { toast } = useToast();
  const { login } = useAuth();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      await login(username, password);
      toast({ title: "ورود موفق", description: "به سامانه خوش آمدید." });
      router.replace(redirectTo);
    } catch {
      toast({
        title: "خطا",
        description: "نام کاربری یا رمز عبور نادرست است.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-slate-100 dark:from-[#0b1220] dark:to-slate-900">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="flex items-center gap-3">
          <Image src="/logo-asia.svg" width={160} height={40} alt="Asia Classification" />
          <CardTitle className="text-center w-full">
            ورود به سامانه تأیید طرح و بررسی مدارک
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={onSubmit}>
            <div className="space-y-2">
              <Label htmlFor="username">نام کاربری</Label>
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">رمز عبور</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              ورود
            </Button>
          </form>
          <p className="text-xs text-center mt-3 text-slate-500">
            نقش‌ها و سطوح دسترسی بر اساس RBAC اعمال می‌گردد.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
