"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

interface Device {
  id: string;
  device: string;
  serialNumber: string;
  userDevice?: string;
  updatedAt?: string;
  status?: boolean;
}

export default function Devices() {
  const [data, setData] = useState<Device[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const router = useRouter();

  useEffect(() => {
    async function fetchDevices() {
      setLoading(true);
      try {
        const response = await fetch("/api/devices");
        if (!response.ok) throw new Error("erro ao buscas dispositivos");

        const devices: Device[] = await response.json();

        setData(devices);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchDevices();
  }, []);

  const handleClick = (id: string) => {
    router.push(`/dashboard/${id}`);
  };

  return (
    <Table>
      <TableCaption className="gap-5">
        <p>
          Dispositivos adicionados ate o momento. Para criar mais dispositivos{" "}
          <Link
            href="/dashboard/createDevice"
            className="hover:text-muted-foreground/90 underline"
          >
            Click aqui
          </Link>
        </p>
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Usuario</TableHead>
          <TableHead className="max-sm:hidden">Dispositivo</TableHead>
          <TableHead>Numero de Serie</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="max-sm:hidden">Ultima atualização</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {data.map((device) => (
          <TableRow
            className="cursor-pointer"
            onClick={() => handleClick(device.id)}
            key={device.id}
          >
            <TableCell>{device.userDevice}</TableCell>
            <TableCell className="max-sm:hidden">{device.device}</TableCell>
            <TableCell>{device.serialNumber}</TableCell>
            <TableCell>
              {!device.status ? (
                <div className="mt-1 flex justify-center items-center gap-x-1.5">
                  <div className="rounded-full text-center bg-destructive/30 p-1">
                    <div className="size-1.5 rounded-full bg-destructive" />
                  </div>
                  <p>Offline</p>
                </div>
              ) : (
                <div className="mt-1 flex justify-center items-center gap-x-1.5">
                  <div className="rounded-full bg-chart-3/30 p-1">
                    <div className="size-1.5 rounded-full bg-chart-3" />
                  </div>
                  <p>Online</p>
                </div>
              )}
            </TableCell>
            <TableCell className="max-sm:hidden">{device.updatedAt}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
