import { NextRequest, NextResponse } from "next/server";

export async function PATCH(req: NextRequest, ctx: { params: { docId: string } }) {
  const { status } = await req.json();
  return NextResponse.json({ ok: true, id: ctx.params.docId, status });
}
