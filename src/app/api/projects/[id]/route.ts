import { NextRequest, NextResponse } from "next/server";

const documents = {
  "101": [
    { id: "d1", name: "Plan-A.pdf", version: "1.0", status: "pending" },
    { id: "d2", name: "Calc-01.xlsx", version: "1.1", status: "in_review" }
  ],
  "102": [{ id: "d3", name: "Industrial-Design.dwg", version: "0.9", status: "rejected" }],
  "103": [{ id: "d4", name: "Offshore-Deck.pdf", version: "2.0", status: "approved" }]
} as Record<string, any[]>;

export async function GET(_req: NextRequest, ctx: { params: { id: string } }) {
  const id = ctx.params.id;
  return NextResponse.json({
    id,
    title: `پروژه ${id}`,
    documents: documents[id] ?? []
  });
}
