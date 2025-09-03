import { redirect } from "next/navigation";
import { auth } from "../../auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  if (session) {
    return redirect("/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-6 p-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">
          Gerenciador de Dispositivos
        </h1>

        <div className="flex w-full max-w-md gap-4">
          <Button
            asChild
            variant="outline"
            className="flex-1 px-4 py-3 transition"
          >
            <Link href="/login">Login</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="flex-1 px-4 py-3 transition"
          >
            <Link href="/cadastro">Cadastro</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
