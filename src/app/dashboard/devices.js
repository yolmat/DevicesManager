'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Devices() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const router = useRouter()

    useEffect(() => {
        async function fetchDevices() {
            setLoading(true)
            try {
                const response = await fetch('/api/devices')
                if (!response.ok) throw new Error('erro ao buscas dispositivos')

                const devices = await response.json()

                setData(devices)
            } catch (e) {
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchDevices()

    }, [])

    const handleClick = (id) => {
        router.push(`/dashboard/${id}`)
    }

    return (
        <ul role="list" className="divide-y divide-white/5">
            {data.map((device) => (
                <li key={device.id} className="relative flex items-center justify-between gap-x-6 py-5">
                    <div className="flex text-start min-w-0 gap-x-4">
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm/6 font-semibold text-white">{device.device}</p>
                            <p className="mt-1 truncate text-xs/5 text-gray-400">{device.serialNumber}</p>
                        </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-center">
                        <p className="text-sm/6 text-white">{device.userDevice}</p>
                        <p className="mt-1 text-xs/5 text-gray-400">
                            Ultima Atualização <time dateTime="">{device.updatedAt ? new Date(device.updatedAt).toLocaleString() : "Desconhecido"}</time>
                        </p>

                        {!device.status ?

                            <div className="mt-1 flex items-center gap-x-1.5">
                                <div className="flex-none rounded-full bg-red-500/30 p-1">
                                    <div className="size-1.5 rounded-full bg-red-500" />
                                </div>
                                <p className="text-xs/5 text-gray-400">Offline</p>
                            </div>

                            :

                            <div className="mt-1 flex items-center gap-x-1.5">
                                <div className="flex-none rounded-full bg-emerald-500/30 p-1">
                                    <div className="size-1.5 rounded-full bg-emerald-500" />
                                </div>
                                <p className="text-xs/5 text-gray-400">Online</p>
                            </div>

                        }


                    </div>
                    <div className='flex justify-end'>
                        <button
                            onClick={() => handleClick(device.id)}
                            className="text-gray-300 bg-gray-800 hover:bg-gray-800/70 active:bg-gray-800/50 hover:text-white rounded-md px-3 py-2 text-sm font-medium hover:cursor-pointer">
                            Abrir Dispositivo
                        </button>
                    </div>
                </li>
            ))}

        </ ul>
    )
}
