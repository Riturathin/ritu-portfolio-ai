import { NextResponse } from "next/server";
import { ingestContent } from "@/lib/ingest";

export async function GET() {
    await ingestContent();
    return NextResponse.json({ message: "Ingestion complete" });
}