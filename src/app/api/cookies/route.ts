import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const myNumberStr = cookieStore.get("createId")?.value;
  const myNumber = myNumberStr ? Number(myNumberStr) : null;
  return NextResponse.json({ myNumber });
}
