import * as React from "react";
import { cn } from "@/lib/axios";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "w-full h-10 rounded-md border px-3 text-sm bg-white dark:bg-slate-950",
      className
    )}
    {...props}
  />
));
Input.displayName = "Input";
