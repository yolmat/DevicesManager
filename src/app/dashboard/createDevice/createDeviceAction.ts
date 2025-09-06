"use server";

import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function CreateDeviceAction(DataForm: object) {
  const data = DataForm;

  console.log(data);

  const h = await headers();
  const host = h.get("host");
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const baseUrl = `${protocol}://${host}`;

  const res = await fetch(`${baseUrl}/api/devices/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  console.log(result);

  if (result.success) {
    return redirect("/dashboard");
  }

  return { success: false, message: result.message };
}
