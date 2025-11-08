import { User } from "@/models/user";
import { Action, permissions } from "./permissions";

export function can(user: User | null | undefined, action: Action): boolean {
  if (!user?.roles?.length) return false;
  for (const r of user.roles) {
    const key = r as keyof typeof permissions;
    const list = permissions[key];
    if (list?.includes(action)) return true;
  }
  return false;
}
