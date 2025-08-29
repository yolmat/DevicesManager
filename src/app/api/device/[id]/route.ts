import { NextRequest, NextResponse } from "next/server";
import db from "../../../../lib/db";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
): Promise<NextResponse> {
  const { id } = await params;

  try {
    const device = await db.devices.findFirst({
      where: { id: Number(id) },
    });

    if (!device) {
      return NextResponse.json(
        { error: "dispositivo não encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json(device);
  } catch (e) {
    return NextResponse.json(
      { error: "Dados não encontrados" },
      { status: 500 }
    );
  }
}
