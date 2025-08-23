'use client'

import { useEffect, useState } from "react"
import { useParams, usePathname, useSearchParams } from "next/navigation"
import QRCode from "react-qr-code"

export default function Qrcode() {

    const params = useParams()

    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [fullUrl, setFullUrl] = useState("")

    useEffect(() => {
        if (typeof window !== "undefined") {
            const url = `${window.location.origin}/dashboard/${params.link}`
            setFullUrl(url)
        }
    }, [pathname, searchParams])

    const handleGenerate = (url) => {
        window.open(url, '_blank')
    }

    return (
        <div className="grid place-items-center min-h-[calc(100vh-4rem)] bg-gray-800/30">
            <div className="flex flex-col items-center gap-10">
                <p>{`${fullUrl}`}</p>
                <QRCode value={fullUrl} />
                <button className="text-gray-300 bg-gray-800 hover:bg-gray-800/70 active:bg-gray-800/50 hover:text-white rounded-md px-3 py-2 text-sm font-medium hover:cursor-pointer" onClick={() => handleGenerate(`https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${fullUrl}`)}>Baixar QRCode</button>
            </div>
        </div>
    )
}
