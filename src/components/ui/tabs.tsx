"use client";

import * as TabsPrimitive from "@radix-ui/react-tabs";
import type { ComponentProps } from "react";
import { cn } from "@/lib/axios";

export const Tabs = TabsPrimitive.Root;

export function TabsList(props: ComponentProps<typeof TabsPrimitive.List>) {
  const { className, ...rest } = props;
  return (
    <TabsPrimitive.List
      className={cn("inline-flex items-center gap-1 border rounded-md p-1", className)}
      {...rest}
    />
  );
}

export function TabsTrigger(props: ComponentProps<typeof TabsPrimitive.Trigger>) {
  const { className, ...rest } = props;
  return (
    <TabsPrimitive.Trigger
      className={cn(
        "px-3 py-1 rounded-md data-[state=active]:bg-sky-600 data-[state=active]:text-white",
        className
      )}
      {...rest}
    />
  );
}

export function TabsContent(props: ComponentProps<typeof TabsPrimitive.Content>) {
  const { className, ...rest } = props;
  return <TabsPrimitive.Content className={cn("mt-3", className)} {...rest} />;
}
