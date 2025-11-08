import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, ctx: { params: { id: string } }) {
  const formData = await req.formData();
  const file = formData.get("file") as File | null;
  if (!file) return NextResponse.json({ ok: false }, { status: 400 });

  return NextResponse.json({
    ok: true,
    doc: { id: "new-doc", name: file.name, version: "1.0", status: "pending" }
  });
}
