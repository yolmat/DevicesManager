
import Link from "next/link";
import Form from 'next/form'
import logoutAction from '../(auth)/(logout)/logoutAction'


export default async function Navbar() {
    return (
        <div className="flex flex-row h-16 items-center justify-center gap-5">
            <Link href="/dashboard" className="text-gray-300 hover:bg-white/5 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Home</Link>
            <Form action={logoutAction}>
                <button className="text-gray-300 hover:bg-white/5 hover:text-white rounded-md px-3 py-2 text-sm font-medium hover:cursor-pointer">Logout</button>
            </Form>
        </div>

    )
}