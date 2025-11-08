"use client";
import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/axios";

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogPortal = DialogPrimitive.Portal;
export const DialogOverlay = ({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) => (
  <DialogPrimitive.Overlay className={cn("fixed inset-0 bg-black/40", className)} {...props} />
);
export const DialogContent = ({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content>) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      className={cn(
        "fixed inset-0 m-auto max-w-lg w-[90%] rounded-xl bg-white dark:bg-slate-900 p-4",
        className
      )}
      {...props}
    />
  </DialogPortal>
);
export const DialogTitle = ({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) => (
  <DialogPrimitive.Title className={cn("font-semibold", className)} {...props} />
);
export const DialogDescription = DialogPrimitive.Description;
