
import Link from "next/link";
import Form from 'next/form'
import logoutAction from '../(auth)/(logout)/logoutAction'


export default async function Navbar() {
    return (
        <div className="flex flex-row h-16 items-center justify-center gap-5">
            <Link href="/dashboard" className="text-muted-foreground hover:bg-input hover:text-muted-foreground/90 rounded-md px-3 py-2 text-sm font-medium">Home</Link>
            <Link href="/dashboard/createDevice" className="text-muted-foreground hover:bg-input hover:text-muted-foreground/90 rounded-md px-3 py-2 text-sm font-medium">Criar Dispositivo</Link>
            <Form action={logoutAction}>
                <button className="text-muted-foreground hover:bg-input hover:text-muted-foreground/90 rounded-md px-3 py-2 text-sm font-medium hover:cursor-pointer">Sair</button>
            </Form>
        </div>
    )
}