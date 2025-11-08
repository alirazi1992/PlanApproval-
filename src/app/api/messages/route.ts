import { NextRequest, NextResponse } from "next/server";

const msgs: Array<{ projectId: string; text: string; sender: string; at: string }> = [
  { projectId: "101", text: "لطفاً نسخه جدید نقشه را ارسال کنید.", sender: "مدیر فنی", at: new Date().toISOString() }
];

export async function GET(req: NextRequest) {
  const projectId = req.nextUrl.searchParams.get("projectId");
  return NextResponse.json({ items: msgs.filter((m) => m.projectId === projectId) });
}

export async function POST(req: NextRequest) {
  const { projectId, text, sender } = await req.json();
  const m = { projectId, text, sender, at: new Date().toISOString() };
  msgs.push(m);
  return NextResponse.json({ ok: true, item: m });
}
