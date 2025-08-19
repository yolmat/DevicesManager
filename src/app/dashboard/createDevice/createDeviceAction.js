'use server'

import db from "../../../lib/db"

export default async function CreateDeviceAction(_prevState, formData) {

    const entries = Array.from(formData.entries())
    const data = Object.fromEntries(entries)

    console.log(data)

    if (!data.userDevice || !data.deviceType || !data.device || !data.serialNumber) {
        return {
            message: "Preencha todos os campos",
            success: false
        }
    }

    console.log(data.userDevice)
    console.log(data.deviceType)
    console.log(data.device)
    console.log(data.serialNumber)


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
            historys: ""
        }
    })

    return console.log("cadastrado")
}