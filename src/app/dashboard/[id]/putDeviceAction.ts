"use server";

import { redirect } from "next/navigation";
import db from "../../../lib/db";

type TformUpdateDevice = {
  id: string;
  device: string;
  deviceType: string;
  serialNumber: string;
  userDevice: string;
  status: boolean;
  Qrcode: string;
  historys: string;
};

export default async function PutDeviceAction(formData: TformUpdateDevice) {
  const data = formData;

  console.log(data);

  const id = Number(data.id);

  let newStatus;

  if (!data.userDevice || !data.device || !data.serialNumber) {
    return {
      message: "Preencha todos os campos",
      success: false,
    };
  }

  if (data.status == true) {
    newStatus = true;
  } else if (data.status == undefined || data.status == false) {
    newStatus = false;
  }

  await db.devices.update({
    where: {
      id: id,
    },
    data: {
      userDevice: data.userDevice,
      device: data.device,
      deviceType: "",
      serialNumber: data.serialNumber,
      status: newStatus,
      Qrcode: `/${id}`,
    },
  });

  if (data.historys !== "") {
    await db.history.create({
      data: {
        devicesId: id,
        comments: data.historys,
      },
    });
  }

  return redirect("/dashboard");
}
