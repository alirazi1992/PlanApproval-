import { NextRequest, NextResponse } from "next/server";

const store: Array<{ projectId: string; text: string; at: string; by: string }> = [];

export async function GET(req: NextRequest) {
  const projectId = req.nextUrl.searchParams.get("projectId");
  return NextResponse.json({ items: store.filter((m) => m.projectId === projectId) });
}

export async function POST(req: NextRequest) {
  const { projectId, text, by } = await req.json();
  const item = { projectId, text, by, at: new Date().toISOString() };
  store.push(item);
  return NextResponse.json({ ok: true, item });
}
