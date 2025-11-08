"use client";

import { useAuth } from "@/features/auth/useAuth";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Topbar() {
  const { user, logout } = useAuth();

  return (
    <header className="h-14 border-b bg-white/60 dark:bg-slate-900/50 backdrop-blur flex items-center justify-between px-4">
      <div className="text-sm text-slate-600">سامانه تأیید طرح و بررسی مدارک</div>
      <div className="flex items-center gap-2">
        <span className="text-sm">{user?.fullName}</span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">منو</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <a href="/settings/profile">پروفایل</a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="/settings/security">امنیت</a>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={logout}>خروج</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
