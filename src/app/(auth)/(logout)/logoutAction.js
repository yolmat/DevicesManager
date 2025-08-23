'use server'

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function logoutAction() {
    (await cookies()).delete("__Secure-authjs.session-token")
    return redirect('/')
}