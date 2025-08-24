import db from "../../../../lib/db"
import { NextResponse } from "next/server"

export async function POST(req) {
    const data = await req.json()

    if (!data.userDevice || !data.deviceType || !data.device || !data.serialNumber) {
        return NextResponse.json({ success: false, message: "Preencha todos os campos" })
    }

    const exists = (await db.devices.findUnique({
        where: { serialNumber: data.serialNumber }
    })) !== null

    if (exists) {
        return NextResponse.json({ success: false, message: "Esse dispositivo já existe" })
    }

    await db.devices.create({
        data: {
            device: data.device,
            deviceType: data.deviceType,
            serialNumber: data.serialNumber,
            userDevice: data.userDevice,
            status: false,
            Qrcode: ""
        }
    })

    return NextResponse.json({ success: true })
}
