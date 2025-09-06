"use server";

import { signOut } from "@/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function logoutAction() {
  const cookiesStore = await cookies();

  cookiesStore.delete("createId");

  await signOut();

  return redirect("/");
}
