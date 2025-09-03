"use client";

import { cn } from "@/src/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import Link from "next/link";
import { useRouter } from "next/navigation";

type TformLogin = {
  email: string;
  password: string;
};

type Props = {
  loginAction: (email: string, password: string) => Promise<any>;
  className?: string;
};

export function LoginFormClient({ loginAction, className }: Props) {
  const router = useRouter();

  const form = useForm<TformLogin>({
    defaultValues: { email: "", password: "" },
  });

  async function handleSubmitLogin(data: TformLogin) {
    const result = await loginAction(data.email, data.password);
    console.log(result);
    router.push("/dashboard");
  }

  return (
    <Form {...form}>
      <form
        className={cn("flex flex-col gap-6", className)}
        onSubmit={form.handleSubmit(handleSubmitLogin)}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Entre com a sua conta</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Digite seu e-mail abaixo para acessar sua conta
          </p>
        </div>

        <div className="grid gap-6">
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
                <div className="flex items-center">
                  <FormLabel htmlFor="password">Senha</FormLabel>
                  <a
                    href="#"
                    className="ml-auto text-sm underline-offset-4 hover:underline"
                  >
                    Esqueceu sua senha ?
                  </a>
                </div>
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

          <Button type="submit" className="w-full">
            Entre
          </Button>

          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
            <span className="bg-background text-muted-foreground relative z-10 px-2">
              Ou continue aqui
            </span>
          </div>
        </div>

        <div className="text-center text-sm mt-4">
          Ainda não tem uma conta?{" "}
          <Link href="/cadastro" className="underline underline-offset-4">
            Inscreva-se
          </Link>
        </div>
      </form>
    </Form>
  );
}
