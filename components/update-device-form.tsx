"use client";
import { cn } from "@/src/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import UpdateDeviceAction from "@/src/app/dashboard/[id]/putDeviceAction";
import { Checkbox } from "./ui/checkbox";
import { Textarea } from "./ui/textarea";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ParamValue } from "next/dist/server/request/params";
import { Link } from "lucide-react";

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

type Thistorys = {
  id: string;
  comments: string;
};

export function UpdateDevideForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const { id } = useParams();

  const router = useRouter();

  const [data, setData] = useState<TformUpdateDevice | null>(null);
  const [historys, setHistorys] = useState<Thistorys[]>([]);

  const form = useForm<TformUpdateDevice>({
    defaultValues: {
      id: String(id),
      device: "",
      serialNumber: "",
      userDevice: "",
      status: false,
      Qrcode: "",
      historys: "",
    },
  });

  useEffect(() => {
    async function fetchDevides() {
      try {
        const resDevice = await fetch(`/api/device/${id}`);
        const resHistory = await fetch(`/api/historys/${id}`);

        if (!resDevice.ok) throw new Error("erro ao busca dispositivo");

        const device: TformUpdateDevice = await resDevice.json();
        const history = await resHistory.json();

        console.log(device);

        setHistorys(history);

        setData(device);

        form.reset(device);
      } catch (e) {
        console.log(e);
      }
    }

    fetchDevides();
  }, [id, form]);

  async function handleSubmitUpdate(data: TformUpdateDevice) {
    UpdateDeviceAction(data);
  }

  const handleQrcode = (link: ParamValue) => {
    router.push(`/dashboard/qrcode/${link}`);
  };

  return (
    <Form {...form}>
      <form
        className={cn("flex flex-col gap-6", className)}
        onSubmit={form.handleSubmit(handleSubmitUpdate)}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Dados do Dispositivo </h1>
          <p className="text-muted-foreground text-sm text-balance">
            Veja os dados do dispositivo ... abaixo. Caso queira modificar
            alguma informação, digite nos campos determinados
          </p>
        </div>
        <div className="grid gap-6">
          <FormField
            control={form.control}
            name="userDevice"
            render={({ field }) => (
              <FormItem className="grid gap-3">
                <FormLabel htmlFor="userDevice">Usuario do Dispotivo</FormLabel>
                <FormControl>
                  <Input
                    id="userDevice"
                    type="text"
                    placeholder="Mateus Saraiva"
                    required
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="device"
            render={({ field }) => (
              <FormItem className="grid gap-3">
                <FormLabel htmlFor="device">Dispositivo</FormLabel>
                <FormControl>
                  <Input
                    id="device"
                    type="text"
                    placeholder="Notebook Dell - Intel i5"
                    required
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="serialNumber"
            render={({ field }) => (
              <FormItem className="grid gap-3">
                <FormLabel htmlFor="serialNumber">Numero de Serie</FormLabel>
                <FormControl>
                  <Input
                    id="serialNumber"
                    type="text"
                    placeholder="8K4J2ZQ"
                    required
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                <FormLabel htmlFor="status">Status:</FormLabel>
                <FormControl>
                  <Checkbox
                    id="status"
                    checked={field.value}
                    onCheckedChange={(checked) =>
                      field.onChange(checked === true)
                    }
                  />
                </FormControl>
                {field.value == false ? (
                  <FormLabel>Offline</FormLabel>
                ) : (
                  <FormLabel>Online</FormLabel>
                )}
              </FormItem>
            )}
          />
          <div className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4">
            <label>Qrcode:</label>
            <Link onClick={() => handleQrcode(id)}>Disponivel</Link>
          </div>

          <FormField
            control={form.control}
            name="historys"
            render={({ field }) => (
              <FormItem className="grid gap-3">
                <FormLabel htmlFor="historys">Historico</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Adicione um novo historico"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          {historys.map((history) => (
            <div key={history.id} className="grid gap-1">
              <Textarea
                placeholder={history.comments}
                className="resize-none"
                disabled
              />
            </div>
          ))}
          <Button type="submit" className="w-full">
            Atualizar Informações
          </Button>
        </div>
      </form>
    </Form>
  );
}
