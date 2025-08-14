import RegisterForm from './registerForm'
import { redirect } from "next/navigation";
import { auth } from '../../../../auth';

export default async function Cadastro() {

    const session = await auth()
    if (session) {
        return redirect('/dashboard')
    }

    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
                        Cadastro
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <RegisterForm />
                </div>
            </div>
        </>
    )
}
