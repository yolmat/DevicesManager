import Navbar from "./navbar"
import { auth } from "../../../auth"
import { redirect } from "next/navigation"

export default async function DashboardLayout({ children }) {

  const session = await auth()
  if (!session) {
    return redirect('/')
  }

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