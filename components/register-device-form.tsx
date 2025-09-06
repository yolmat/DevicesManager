"use client";
import { cn } from "@/src/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import CreateDeviceAction from "@/src/app/dashboard/createDevice/createDeviceAction";

type TformRegisterDevice = {
  device: string;
  deviceType: string;
  serialNumber: string;
  userDevice: string;
  status: boolean;
  Qrcode: string;
  CreatorId: number;
};

export function RegisterDeviceForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const getCreatorId = async () => {
    const res = await fetch("/api/cookies", { credentials: "include" });
    const data = await res.json();
    return data.myNumber ?? 0; // se não existir cookie, retorna 0
  };

  const form = useForm<TformRegisterDevice>({
    defaultValues: {
      device: "",
      deviceType: "",
      serialNumber: "",
      userDevice: "",
      status: false,
      Qrcode: "",
      CreatorId: 0,
    },
  });

  async function handleSubmitLogin(data: TformRegisterDevice) {
    const creatorId = await getCreatorId();

    const payload = { ...data, CreatorId: creatorId };

    const result = await CreateDeviceAction(payload);

    console.log("Dispositivo criado:", result);
  }

  return (
    <Form {...form}>
      <form
        className={cn("flex flex-col gap-6", className)}
        onSubmit={form.handleSubmit(handleSubmitLogin)}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Crie um novo Dispositivo</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Digite as informações abaixo para criar um novo dipositivo.
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
          <Button type="submit" className="w-full">
            Entre
          </Button>
        </div>
      </form>
    </Form>
  );
}
