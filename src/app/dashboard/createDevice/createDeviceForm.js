'use client'

import Form from "next/form"
import { useActionState } from "react"
import CreateDeviceAction from './createDeviceAction'

export default function CreateDeviceForm() {
    const [state, formAction, isPending] = useActionState(CreateDeviceAction, null)

    return (
        <Form action={formAction} className="space-y-6">

            <div>
                <label htmlFor="userDevice" className="block text-sm/6 font-medium text-gray-100">
                    Usuario do dispositivo
                </label>
                <div className="mt-2">
                    <input
                        id="userDevice"
                        name="userDevice"
                        type="text"
                        required
                        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="device" className="block text-sm/6 font-medium text-gray-100">
                    Dispositivo
                </label>
                <div className="mt-2">
                    <input
                        id="device"
                        name="device"
                        type="text"
                        required
                        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="deviceType" className="block text-sm/6 font-medium text-gray-100">
                    Tipo do dispositivo
                </label>
                <div className="mt-2">
                    <input
                        id="deviceType"
                        name="deviceType"
                        type="text"
                        required
                        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="serialNumber" className="block text-sm/6 font-medium text-gray-100">
                    Numero do Serial
                </label>
                <div className="mt-2">
                    <input
                        id="serialNumber"
                        name="serialNumber"
                        type="text"
                        required
                        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                    />
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    disabled={isPending}
                    className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                    {isPending ? "Criando..." : "Criar"}
                </button>
            </div>

            {state?.message && (
                <p className={`mt-2 text-sm ${state.success ? "text-green-500" : "text-red-500"}`}>
                    {state.message}
                </p>
            )}

        </Form>
    )
}
