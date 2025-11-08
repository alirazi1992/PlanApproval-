import { NextResponse } from "next/server";

const projects = [
  { id: "101", title: "ساختمان ساحلی - اسکله A", department: "Marine", status: "in_review" },
  { id: "102", title: "مخزن صنعتی - پتروشیمی X", department: "Industrial", status: "pending" },
  { id: "103", title: "سکو دریایی - فاز B", department: "Offshore", status: "approved" }
];

export async function GET() {
  return NextResponse.json({ items: projects });
}
