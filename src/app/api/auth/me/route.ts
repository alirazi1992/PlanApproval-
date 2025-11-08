import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  if (!token) return NextResponse.json({ user: null });

  const decoded = Buffer.from(token, "base64").toString("utf-8");
  const [username, rolesRaw] = decoded.split("|");
  const roles = rolesRaw?.split(",") ?? ["engineer"];

  const user = {
    id: "u1",
    username,
    fullName: username === "admin" ? "مدیر سامانه" : "کاربر فنی",
    email: `${username}@asiaclass.org`,
    roles
  };

  return NextResponse.json({ user });
}
