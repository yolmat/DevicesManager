import Devices from "./devices";

export default function Dashboard() {
  return (
    <>
      <div className="min-h-full">
        <header className="relative bg-background shadow-sm text-center sm:text-start dark:shadow-border">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-bold tracking-tight text-muted-foreground">
              Todos os dispositivos
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <Devices />
          </div>
        </main>
      </div>
    </>
  );
}
