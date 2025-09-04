"use server";

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
      message: "Usuario já cadastrado",
      success: false,
    };
  }
  // Criar usuario caso não exista
  if (!user) {
    await db.user.create({
      data: {
        name: name,
        email: email,
        password: await bcrypt.hash(password, 10),
      },
    });

    return { success: true, message: "Usuario criado. Entre agora" };
  }

  return { success: false, message: "Algum erro aconteceu" };
}
