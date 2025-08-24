'use server'

import { redirect } from "next/navigation"

export default async function CreateDeviceAction(_prevState, formData) {
    const data = Object.fromEntries(Array.from(formData.entries()))

    console.log(data)

    // Resolve base URL automaticamente
    const baseUrl = process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000"

    console.log(baseUrl)

    const res = await fetch(`${baseUrl}/api/devices/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    })

    console.log(res)


    const result = await res.json()

    console.log(result)

    if (result.success) {
        return redirect("/dashboard")
    }

    if (!result.success) {
        return { success: false, message: result.message }
    }


}
