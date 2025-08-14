'use client'
import Form from "next/form";
import loginAction from "./loginAction";
import { useActionState } from "react";
import Link from "next/link";

export default function LoginForm() {

    const [state, formAction, isPending] = useActionState(loginAction, null)
    console.log(state)

    return (
        <>
            {state?.success == false && (
                <div className='flex flex-col bg-red-100 mb-6 border border-red-400 text-red-700 px-4 py-3 rounded relative' role='alert'>
                    <strong className='font-bold'>Error</strong>
                    <p className='block sm:inline'>{state?.message}</p>
                </div>
            )}
            <Form action={formAction} className="space-y-6">
                <div>
                    <label htmlFor="credentials-email" className="block text-sm/6 font-medium text-gray-100">
                        Email
                    </label>
                    <div className="mt-2">
                        <input
                            id="credentials-email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="credentials-password" className="block text-sm/6 font-medium text-gray-100">
                            Password
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                            id="credentials-password"
                            name="password"
                            type="password"
                            required
                            autoComplete="current-password"
                            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div>
                    <button
                        className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        Sign in
                    </button>
                </div>
            </Form>
            <p className="mt-6 text-sm/6">Caso não tenha se cadastrado, <Link href="/cadastro" className="text-indigo-500 font-semibold hover:text-indigo-400">Click Aqui</Link></p>
        </>
    )
}