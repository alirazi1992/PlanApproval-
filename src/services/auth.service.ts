import { api } from "@/lib/axios";
import { LoginPayload } from "@/models/auth";

export async function loginReq(username: string, password: string) {
  const payload: LoginPayload = { username, password };
  await api.post("/api/auth/login", payload);
}

export async function logoutReq() {
  await api.post("/api/auth/logout");
}

export async function getMe() {
  const { data } = await api.get("/api/auth/me");
  return data as { user: any | null };
}
