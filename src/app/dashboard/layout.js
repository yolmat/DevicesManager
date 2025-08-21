import Navbar from "./navbar"

export default function DashboardLayout({ children }) {
  return (
    <section className="min-h-full">
      <header as="nav" className="bg-gray-800 dark:bg-gray-800/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Navbar />
        </div>
      </header>

      {children}
    </section>
  )
}