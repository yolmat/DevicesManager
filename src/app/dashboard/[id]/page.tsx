"use client";

import { useParams } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import PutDeviceAction from "./putDeviceAction";
import { UpdateDevideForm } from "@/components/update-device-form";

export default function Device() {
  /*
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [status, setStatus] = useState(false);
  const [historys, setHistorys] = useState([]);

  useEffect(() => {
    async function fetchDevices() {
      setLoading(true);
      try {
        const response = await fetch(`/api/device/${id}`);

        if (!response.ok) throw new Error("erro ao busca dispositivo");

        const device = await response.json();

        console.log(device);

        setData(device);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchDevices();
  }, [id]);

  useEffect(() => {
    async function fetchHistory() {
      try {
        const response = await fetch(`/api/historys/${id}`);

        if (!response.ok) throw new Error("erro ao historico do dispositivo");

        const historys = await response.json();

        console.log(historys);

        setHistorys(historys);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchHistory();
  }, [id]);

  const [state, formAction, isPeding] = useActionState(PutDeviceAction, null);
*/
  return (
    <div className="grid">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <UpdateDevideForm />
          </div>
        </div>
      </div>
    </div>
  );
}
