import Navbar from "../navbar"
import CreateDeviceForm from './createDeviceForm'

export default async function CreateDevice() {
    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">
                        Cadastrar dispositivo
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <CreateDeviceForm />
                </ div>
            </div>
        </>
    )
}