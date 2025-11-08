"use client";
import * as Dropdown from "@radix-ui/react-dropdown-menu";

export const DropdownMenu = Dropdown.Root;
export const DropdownMenuTrigger = Dropdown.Trigger;
export const DropdownMenuContent = (props: any) => (
  <Dropdown.Content
    className="bg-white dark:bg-slate-900 border rounded-md p-1 min-w-[160px]"
    {...props}
  />
);
export const DropdownMenuItem = (props: any) => (
  <Dropdown.Item
    className="px-3 py-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 text-sm"
    {...props}
  />
);
