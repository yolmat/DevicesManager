'use server'

import { redirect } from "next/navigation"
import db from "../../../lib/db"
import bcrypt from "bcrypt"

export default async function registerAction(_prevState, formData) {

    const entries = Array.from(formData.entries())
    const data = Object.fromEntries(entries)

    // Passar todos os dados necessarios
    if (!data.name || !data.email || !data.password) {
        return {
            message: "Preencha todos os campos",
            success: false
        }
    }

    // Se usuario existe
    const user = await db.user.findUnique({
        where: {
            email: data.email
        }
    })

    if (user) {
        return {
            message: 'esse usuario já existe',
            success: false
        }
    }
    // Criar usuario caso não exista
    await db.user.create({
        data: {
            name: data.name,
            email: data.email,
            password: await bcrypt.hash(data.password, 10)
        }
    })

    return redirect('/Login')
}