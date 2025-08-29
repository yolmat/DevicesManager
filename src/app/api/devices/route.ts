import { NextResponse } from "next/server";
import db from "../../../lib/db";

export async function GET() {

    try {
        const devices = await db.devices.findMany()
        return NextResponse.json(devices)
    } catch (e) {
        return NextResponse.json({ error: 'Dados não encontrados' }, { status: 500 })
    }
}