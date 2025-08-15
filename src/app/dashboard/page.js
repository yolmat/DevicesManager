import { auth } from "../../../auth"
import { redirect } from "next/navigation"
import NavBar from "./navbar"
import Devices from './devices'

export default async function Dashboard() {

    const session = await auth()
    if (!session) {
        return redirect('/')
    }

    return (
        <>
            <div className="min-h-full">
                <header as="nav" className="bg-gray-800 dark:bg-gray-800/50">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <NavBar />
                    </div>
                </header>

                <header className="relative bg-white shadow-sm dark:bg-gray-800 dark:shadow-none dark:after:pointer-events-none dark:after:absolute dark:after:inset-x-0 dark:after:inset-y-0 dark:after:border-y dark:after:border-white/10">
                    <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Todos os dispositivos</h1>
                    </div>
                </header>
                <main>
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                        <Devices />
                    </div>
                </main>
            </div>
        </>
    )
}
