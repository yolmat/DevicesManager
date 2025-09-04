import Navbar from "./navbar";
import { auth } from "../../../auth";
import { redirect } from "next/navigation";
import { Toaster } from "@/components/ui/sonner";
import { AlertProvider } from "@/src/app/context/AlertContext";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session) {
    return redirect("/");
  }

  return (
    <section className="min-h-full">
      <header className="bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Navbar />
        </div>
      </header>
      <AlertProvider>
        <Toaster richColors />
        {children}
      </AlertProvider>
    </section>
  );
}
