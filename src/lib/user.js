import db from "./db"
import bcrypt from "bcrypt"

export async function findUserByCredentials(email, password) {
    const user = await db.user.findFirst({
        where: {
            email: email
        }
    })

    if (!user) {
        return null
    }

    const passwordMatch = bcrypt.compareSync(password, user.password)

    if (passwordMatch) {
        return {
            name: user.name,
            email: user.email
        }
    }

    return null
}