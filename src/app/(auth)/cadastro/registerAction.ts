"use server";

import { redirect } from "next/navigation";
import db from "@/src/lib/db";
import bcrypt from "bcrypt";

export default async function registerAction(
  name: string,
  email: string,
  password: string
) {
  // Passar todos os dados necessarios
  if (!name || !email || !password) {
    return {
      message: "Preencha todos os campos",
      success: false,
    };
  }

  // Se usuario existe
  const user = await db.user.findUnique({
    where: {
      email: email,
    },
  });

  if (user) {
    return {
      message: "esse usuario já existe",
      success: false,
    };
  }
  // Criar usuario caso não exista
  await db.user.create({
    data: {
      name: name,
      email: email,
      password: await bcrypt.hash(password, 10),
    },
  });

  return redirect("/login");
}
