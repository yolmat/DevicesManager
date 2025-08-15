
export default function Devices() {
    return (
        <ul role="list" className="divide-y divide-white/5">
            <li className="flex justify-around gap-x-6 py-5">
                <div className="flex min-w-0 gap-x-4">
                    <div className="min-w-0 flex-auto">
                        <p className="text-sm/6 font-semibold text-white">teste</p>
                        <p className="mt-1 truncate text-xs/5 text-gray-400">teste</p>
                    </div>
                </div>
                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-center">
                    <p className="text-sm/6 text-white">teste</p>
                    <p className="mt-1 text-xs/5 text-gray-400">
                        Last seen <time dateTime=""></time>
                    </p>
                    <div className="mt-1 flex items-center gap-x-1.5">
                        <div className="flex-none rounded-full bg-emerald-500/30 p-1">
                            <div className="size-1.5 rounded-full bg-emerald-500" />
                        </div>
                        <p className="text-xs/5 text-gray-400">Online</p>
                    </div>
                </div>
                <button className="text-gray-300 bg-gray-800 hover:bg-gray-800/70 active:bg-gray-800/50 hover:text-white rounded-md px-3 py-2 text-sm font-medium hover:cursor-pointer">Abrir Dispositivo</button>
            </li>
        </ul>
    )
}
