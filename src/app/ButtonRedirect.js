'use client'

import { useRouter } from "next/navigation"

export default function ButtonRedirect({ children, onLink }) {

    const router = useRouter()
    const handleClick = () => {
        router.push(onLink)
    }

    return (
        <button onClick={handleClick} className="flex w-5/12 sm:w-50 justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >{children}</button>
    )
}