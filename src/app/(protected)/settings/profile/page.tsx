"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/features/auth/useAuth";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ProfilePage() {
  const { user } = useAuth();
  const [name, setName] = useState(user?.fullName || "");
  const [email, setEmail] = useState(user?.email || "");
  const { toast } = useToast();

  return (
    <Card className="max-w-xl">
      <CardHeader>
        <CardTitle>پروفایل</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label>نام و نام خانوادگی</Label>
          <Input value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <Label>ایمیل</Label>
          <Input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <Button onClick={() => toast({ title: "ذخیره شد" })}>ذخیره</Button>
      </CardContent>
    </Card>
  );
}
