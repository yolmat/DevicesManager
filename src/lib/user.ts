"use server";
import db from "./db";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";

export async function findUserByCredentials(email: string, password: string) {
  const cookiesStore = await cookies();

  const user = await db.user.findFirst({
    where: {
      email: email,
    },
  });

  if (!user) {
    return null;
  }

  const passwordMatch = bcrypt.compareSync(password, user.password);

  if (passwordMatch) {
    cookiesStore.set("createId", user.id.toString(), {
      httpOnly: true,
      path: "/",
    });

    return {
      name: user.name,
      email: user.email,
    };
  }

  return null;
}
