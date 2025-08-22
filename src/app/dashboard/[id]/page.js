'use client'

import { useParams } from 'next/navigation'
import { useActionState, useEffect, useState } from 'react'
import Form from 'next/form'
import TextareaAutosize from "react-textarea-autosize"
import PutDeviceAction from './putDeviceAction'

export default function Device() {

    const { id } = useParams()

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [status, setStatus] = useState(false)
    const [historys, setHistorys] = useState([])

    useEffect(() => {
        async function fetchDevices() {
            setLoading(true)
            try {
                const response = await fetch(`/api/device/${id}`)

                if (!response.ok) throw new Error('erro ao busca dispositivo')


                const device = await response.json()

                console.log(device)

                setData(device)
            } catch (e) {
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchDevices()

    }, [id])

    useEffect(() => {
        async function fetchHistory() {
            try {
                const response = await fetch(`/api/historys/${id}`)

                if (!response.ok) throw new Error('erro ao historico do dispositivo')

                const historys = await response.json()

                console.log(historys)

                setHistorys(historys)
            } catch (e) {
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchHistory()

    }, [id])

    const [state, formAction, isPeding] = useActionState(PutDeviceAction, null)

    return (
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <Form action={formAction} className="space-y-6">
                <input className="hidden" id="id" name="id" type='text' defaultValue={id} />
                <div>
                    <label htmlFor="credentials-email" className="block text-sm/6 font-bold text-gray-100">
                        Usuario do dispositivo
                    </label>
                    <div className="mt-2">
                        <input
                            id="userDevice"
                            name="userDevice"
                            type="text"
                            required
                            defaultValue={data.userDevice}
                            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="credentials-password" className="block text-sm/6 font-bold text-gray-100">
                            Dispositivo
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                            id="device"
                            name="device"
                            type="text"
                            required
                            defaultValue={data.device}
                            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="credentials-password" className="block text-sm/6 font-bold text-gray-100">
                            Tipo do dispositivo
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                            id="deviceType"
                            name="deviceType"
                            type="text"
                            required
                            defaultValue={data.deviceType}
                            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="credentials-password" className="block text-sm/6 font-bold text-gray-100">
                            Numero do Serial
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                            id="serialNumber"
                            name="serialNumber"
                            type="text"
                            required
                            defaultValue={data.serialNumber}
                            className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="credentials-password" className="block text-sm/6 font-bold text-gray-100">
                            Status
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                            id="status"
                            name="status"
                            type="checkbox"
                            checked={status}
                            onChange={(e) => setStatus(e.target.checked)}
                            className="rounded-md bg-white/5 px-3 py-1.5"
                        />
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="credentials-password" className="block text-sm/6 font-bold text-gray-100">
                            Historico
                        </label>
                    </div>
                    <div className="mt-2">

                        <TextareaAutosize
                            id="comment"
                            name="comment"
                            type="text"
                            minRows={2}
                            placeholder='Digite o seu novo historico'
                            className="block mt-4 w-full h-auto rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                        />

                        {historys.map((comments) => (
                            <TextareaAutosize
                                key={comments.id}
                                id={`comment${comments.id}`}
                                name={`comment${comments.id}`}
                                type="text"
                                minRows={2}
                                defaultValue={comments.comments}
                                className="block mt-4 w-full h-auto rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                            />
                        ))
                        }
                    </div>
                </div>

                <div className='mb-10'>
                    <button
                        className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                        Atualizar
                    </button>
                </div>
            </Form>
        </div>
    )
}