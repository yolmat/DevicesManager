import { NextRequest, NextResponse } from "next/server";
import db from "../../../../lib/db";

export async function GET(
  request: NextRequest,
  context: { params: { id: string } }
) {
  const id = context.params.id;

  try {
    const device = await db.devices.findFirst({
      where: {
        id: Number(id),
      },
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
