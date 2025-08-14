'use server'

import { signIn } from "../../../../auth"

export default async function loginAction(prevState, formData) {

    try {
        await signIn('credentials', {
            email: formData.get('email'),
            password: formData.get('password'),
            redirect: false
        })
        return { success: true }
    } catch (e) {
        if (e.type == 'CredentialsSignin') {
            return { success: false, message: 'Credenciais incorretas' }
        }

        return { success: false, message: 'Algum erro aconteceu' }

    }
}