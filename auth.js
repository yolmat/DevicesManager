import { findUserByCredentials } from "@/lib/user"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [Credentials({
        credentials: {
            email: {},
            password: {}
        },
        authorize: async (credentials) => {
            console.log(credentials)

            // Procura usuario
            const user = await findUserByCredentials(credentials.email, credentials.password)

            return user
        }
    })],
})