import { redirect } from "next/navigation";
import { auth } from "../../auth";
import ButtonRedirect from "./ButtonRedirect"

export default async function Home() {

  const session = await auth()
  if (session) {
    return redirect('/dashboard')
  }

  return (
    <div className="font-sans flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-10 sm:p-20">
      <h1 className="font-bold text-3xl text-center">Gerenciador de <span className="text-indigo-500 hover:text-indigo-300">dispositivos</span></h1>

      <div className="flex flex-row items-center justify-center gap-10">
        <ButtonRedirect onLink="/login">Login</ButtonRedirect>
        <ButtonRedirect onLink="/cadastro">Cadastro</ButtonRedirect>
      </div>
    </div>
  );
}
