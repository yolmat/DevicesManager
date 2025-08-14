'use server'

import { isRedirectError } from "next/dist/client/components/redirect-error"
import { signIn } from "../../../../auth"

export default async function loginAction(prevState, formData) {

    try {
        await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirectTo: '/dashboard'
        })
        return { success: true }
    } catch (e) {

        if (isRedirectError(e)) {
            throw e
        }

        if (e.type == 'CredentialsSignin') {
            return { success: false, message: 'Credenciais incorretas' }
        }

        return { success: false, message: 'Algum erro aconteceu' }

    }
}