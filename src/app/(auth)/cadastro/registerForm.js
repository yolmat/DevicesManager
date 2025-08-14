'use client'
import Form from 'next/form'
import registerAction from './registerAction'
import { useActionState } from 'react'
import Link from 'next/link'


export default function RegisterForm() {

    const [state, formAction, isPeding] = useActionState(registerAction, null)

    return (
        <>
            {state?.success === false && (
                <div className='flex flex-col bg-red-100 mb-6 border border-red-400 text-red-700 px-4 py-3 rounded relative' role='alert'>
                    <strong className='font-bold'>Error</strong>
                    <p className='block sm:inline'>{state?.message}</p>
                </div>
            )}
            <Form action={formAction} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">
                        Name
                    </label>
                    <div className="mt-2">
                        <input
                            id="name"
                            name="name"
                            type="name"
                            required
                            autoComplete="name"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">
                        Email
                    </label>
                    <div className="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            autoComplete="email"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900 dark:text-gray-100">
                            Password
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            autoComplete="current-password"
                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 dark:bg-white/5 dark:text-white dark:outline-white/10 dark:placeholder:text-gray-500 dark:focus:outline-indigo-500"
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
                    >
                        Register
                    </button>
                </div>
            </Form>
            <p className="mt-6 text-sm/6">Caso já tenha se cadastrado, <Link href="/login" className="text-indigo-500 font-semibold hover:text-indigo-400">Click Aqui</Link></p>

        </>
    )
}