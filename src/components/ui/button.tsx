import * as React from "react";
import { cn } from "@/lib/axios";

type BaseProps = {
  variant?: "default" | "secondary" | "destructive" | "ghost";
  href?: string; // if provided, render <a> styled as button
  className?: string;
  children?: React.ReactNode;
};

type ButtonProps =
  | (BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>)
  | (BaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement>);

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const { variant = "default", href, className, children, ...rest } = props as ButtonProps;

    const styles = {
      default: "bg-sky-600 hover:bg-sky-700 text-white",
      secondary: "bg-slate-200 hover:bg-slate-300 text-slate-900",
      destructive: "bg-red-600 hover:bg-red-700 text-white",
      ghost: "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800",
    }[variant];

    const classes = cn(
      "inline-flex items-center justify-center px-4 py-2 rounded-md text-sm transition focus:outline-none focus:ring-2 focus:ring-sky-500 disabled:opacity-60",
      styles,
      className
    );

    if (href) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
