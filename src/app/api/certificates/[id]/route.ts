import { NextResponse } from "next/server";

export async function GET(_: Request, ctx: { params: { id: string } }) {
  return NextResponse.json({
    id: ctx.params.id,
    number: "ACS-2025-0001",
    issuedAt: "2025-10-10",
    signedStage1: true,
    signedStage2: false,
    pdfUrl: "/api/certificates/mock.pdf"
  });
}
