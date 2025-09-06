import { NextResponse } from "next/server";
import db from "../../../lib/db";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const myNumberStr = cookieStore.get("createId")?.value;
  const myNumber = Number(myNumberStr);

  try {
    const devices = await db.devices.findMany({
      where: {
        createdBy: myNumber,
      },
    });
    return NextResponse.json(devices);
  } catch (e) {
    return NextResponse.json(
      { error: "Dados não encontrados" },
      { status: 500 }
    );
  }
}
