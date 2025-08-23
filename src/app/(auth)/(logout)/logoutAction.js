'use server'

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default async function logoutAction() {
    if ((await cookies()).get("__Secure-authjs.session-token")) {
        (await cookies()).delete("__Secure-authjs.session-token")
    }

    if ((await cookies()).get("authjs.session-token")) {
        (await cookies()).delete("authjs.session-token")
    }

    return redirect('/')
}