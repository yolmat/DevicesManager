"use server";

import { isRedirectError } from "next/dist/client/components/redirect-error";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export default async function loginAction(email: string, passowrd: string) {
  try {
    await signIn("credentials", {
      email: email,
      password: passowrd,
      redirectTo: "/dashboard",
    });
    return { success: true };
  } catch (e) {
    if (isRedirectError(e)) throw e;

    if (e instanceof AuthError) {
      if (e.type === "CredentialsSignin") {
        return { success: false, message: "Credenciais incorretas" };
      }
    }

    return { success: false, message: "Algum erro aconteceu" };
  }
}
