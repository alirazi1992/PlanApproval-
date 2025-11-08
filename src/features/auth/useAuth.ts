"use client";

import { create } from "zustand";
import { getMe, loginReq, logoutReq } from "@/services/auth.service";
import { User } from "@/models/user";

type AuthState = {
  user: User | null;
  loading: boolean;
  initialized: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  refresh: () => Promise<void>;
};

export const useAuth = create<AuthState>((set, get) => ({
  user: null,
  loading: false,
  initialized: false,
  login: async (username, password) => {
    set({ loading: true });
    await loginReq(username, password);
    await get().refresh();
    set({ loading: false });
  },
  logout: async () => {
    set({ loading: true });
    await logoutReq();
    set({ user: null, loading: false });
  },
  refresh: async () => {
    const { user } = await getMe();
    set({ user: user ?? null, initialized: true });
  }
}));

if (typeof window !== "undefined") {
  useAuth.getState().refresh().catch(() => {});
}

export { useAuth as default };
