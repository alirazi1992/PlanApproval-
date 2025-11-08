"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "./useAuth";

export function Guard({ children }: { children: React.ReactNode }) {
  const { user, initialized } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (initialized && !user) router.replace("/login");
  }, [initialized, user, router]);

  if (!initialized) return <div className="p-8">در حال بارگذاری ...</div>;
  if (!user) return null;

  return <>{children}</>;
}
