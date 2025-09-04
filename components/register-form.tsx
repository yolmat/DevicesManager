"use client";
import { cn } from "@/src/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import registerAction from "@/src/app/(auth)/cadastro/registerAction";
import Link from "next/link";
import { Alert, AlertTitle } from "./ui/alert";
import { AlertCircleIcon } from "lucide-react";
import { useState } from "react";
import { redirect } from "next/navigation";
import { useAlert } from "@/src/app/context/AlertContext";

type TformRegister = {
  name: string;
  email: string;
  password: string;
};

type TResult = {
  success: boolean;
  message: string;
};

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const { showAlert } = useAlert();

  const [successForm, setSuccessForm] = useState<TResult>();

  const form = useForm<TformRegister>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function handleSubmitRegister(data: TformRegister) {
    const result = await registerAction(data.name, data.email, data.password);
    setSuccessForm(result);
    showAlert(result.message, result.success, 4000);
  }

  return (
    <Form {...form}>
      <form
        className={cn("flex flex-col gap-6", className)}
        onSubmit={form.handleSubmit(handleSubmitRegister)}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Crie sua conta</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Digite as informações abaixo para criar uma conta
          </p>
        </div>
        <div className="grid gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="grid gap-3">
                <FormLabel htmlFor="name">Nome</FormLabel>
                <FormControl>
                  <Input
                    id="name"
                    type="name"
                    placeholder="Mateus Souza"
                    required
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="grid gap-3">
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    type="email"
                    placeholder="exemplo@email.com"
                    required
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="grid gap-3">
                <FormLabel htmlFor="email">Senha</FormLabel>
                <FormControl>
                  <Input
                    id="password"
                    type="password"
                    placeholder="********"
                    required
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          {successForm?.success === false ? (
            <Alert variant="destructive">
              <AlertCircleIcon />
              <AlertTitle>{successForm.message}</AlertTitle>
            </Alert>
          ) : null}

          <Button type="submit" className="w-full">
            Cadastrar
          </Button>
          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-background text-muted-foreground relative z-10 px-2">
              Ou continue aqui
            </span>
          </div>
        </div>
        <div className="text-center text-sm">
          Já tem uma conta?{" "}
          <Link href="/login" className="underline underline-offset-4">
            Aperta aqui
          </Link>
        </div>
      </form>
      {successForm?.success === true ? redirect("/login") : null}
    </Form>
  );
}
