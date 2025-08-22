'use server'

import { redirect } from "next/navigation"
import db from "../../../lib/db"

export default async function PutDeviceAction(_prevState, formData) {

    const entries = Array.from(formData.entries())
    const data = Object.fromEntries(entries)
    const id = Number(data.id)
    let newStatus

    if (!data.userDevice || !data.device || !data.deviceType || !data.serialNumber) {
        return {
            message: "Preencha todos os campos",
            success: false
        }
    }

    if (data.status == "on") {
        newStatus = true
    } else if (data.status == undefined) {
        newStatus = false
    }

    await db.devices.update({
        where: {
            id: id
        },
        data: {
            userDevice: data.userDevice,
            device: data.device,
            deviceType: data.deviceType,
            serialNumber: data.serialNumber,
            status: newStatus
        }
    })

    if (data.comment !== "") {
        await db.history.create({
            data: {
                devicesId: id,
                comments: data.comment
            }
        })
    }
}