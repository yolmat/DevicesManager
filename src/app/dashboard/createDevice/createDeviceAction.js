'use server'

import { redirect } from "next/navigation"
import db from "../../../lib/db"

export default async function CreateDeviceAction(_prevState, formData) {

    const entries = Array.from(formData.entries())
    const data = Object.fromEntries(entries)

    if (!data.userDevice || !data.deviceType || !data.device || !data.serialNumber) {
        return {
            message: "Preencha todos os campos",
            success: false
        }
    }

    const device = await db.devices.findUnique({
        where: {
            serialNumber: data.serialNumber
        }
    })

    if (device) {
        return {
            message: "esse usuario já existe",
            success: false
        }
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

    return redirect('/dashboard')
}