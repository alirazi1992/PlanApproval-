import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  if (username && password) {
    const roles = username === "admin"
      ? ["admin","technicalManager","unitManager"]
      : ["engineer"];

    const token = Buffer.from(`${username}|${roles.join(",")}`).toString("base64");

    const res = NextResponse.json({ ok: true });
    res.cookies.set("token", token, {
      httpOnly: true,
      secure: true,
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 8
    });
    return res;
  }

  return NextResponse.json({ ok: false, error: "invalid" }, { status: 401 });
}
