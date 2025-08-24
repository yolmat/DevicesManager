'use server'

import { redirect } from "next/navigation"
import { headers } from "next/headers"

export default async function CreateDeviceAction(_prevState, formData) {
    const data = Object.fromEntries(Array.from(formData.entries()))
    console.log("Form data:", data)

    // Pega o host real da request
    const h = await headers()
    const host = h.get("host") // exemplo: msaraiva.dev.br ou localhost:3000
    const protocol = process.env.NODE_ENV === "production" ? "https" : "http"
    const baseUrl = `${protocol}://${host}`

    console.log("Base URL:", baseUrl)

    const res = await fetch(`${baseUrl}/api/devices/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
        cache: "no-store" // garante que sempre vai buscar o endpoint atualizado
    })

    const result = await res.json()
    console.log("API result:", result)

    if (result.success) {
        return redirect("/dashboard")
    }

    return { success: false, message: result.message }
}
