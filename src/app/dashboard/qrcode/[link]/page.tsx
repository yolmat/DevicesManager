"use client";

import { useEffect, useState } from "react";
import { useParams, usePathname, useSearchParams } from "next/navigation";
import QRCode from "react-qr-code";
import { Button } from "@/components/ui/button";

export default function Qrcode() {
  const params = useParams();

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [fullUrl, setFullUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = `${window.location.origin}/dashboard/${params.link}`;
      setFullUrl(url);
    }
  }, [pathname, searchParams]);

  const handleGenerate = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="grid place-items-center min-h-[calc(100vh-4rem)]">
      <div className="flex flex-col items-center gap-10">
        <p>{`${fullUrl}`}</p>
        <QRCode value={fullUrl} />
        <Button
          variant={"outline"}
          onClick={() =>
            handleGenerate(
              `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${fullUrl}`
            )
          }
        >
          Baixar QRCode
        </Button>
      </div>
    </div>
  );
}
