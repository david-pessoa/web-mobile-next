export const dynamic = "force-static";
import { NextResponse } from "next/server";
import data from "@/app/api/dados.json";

export async function GET() {
  return NextResponse.json(data.depoimentos)
}
