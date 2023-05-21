import { User } from 'lucide-react'

import nlwLogo from '../assets/nlw-spacetime-logo.svg'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen bg-[url(../assets/bg-stars.svg)]">
      
      {/* left */}
      <div className="relative flex flex-col itens-start justify-between overflow-hidden border-r border-white/10 bg-cover px-28 py-16">
        
        {/* blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
        
        {/* stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
        
        {/* Sing in */}
        <a href="" className="flex items-center gap-3 top-0 text-left transition-colors hover:text-gray-50">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ">
            <User className="h-5 w-5 text-gray-500"/>
          </div>
          <p className="max-w-[140px] text-sm leading-snug" >
            <span className="underline " >Crie sua conta</span>
            e salve suas memórias!
          </p>
        </a>
        
        {/* Helo */}
        <div className="space-y-5" >
          <Image src={nlwLogo} alt="NLW Spacetime Logo" />
          <div className="max-w-[420px] space-y-1" >
            <h1 className="mt-5 text-5x1 font-bold leading-tight text-gray-50 ">
               Sua Capsula do tempo</h1>
            <p className="text-lg leading-relaxed ">
              Colecione momentos marcantes de sua jornada e compartilhe (se quiser) com o mundo!
            </p>
          </div>
          <a className="inline-block rounded-full bg-green-500 px-5 py-3 font-at text-sm uppercase leading-none text-black hover:bg-green-700" >
            CADASTRAR LEMBRANÇA
          </a>
        </div>

        {/* Copyrigth */}
        <div className="text-sm leading-relaxed text-gray-200">
          Feito com ❤️ na NLW da{' '}
          <a 
          target="_blank"
          rel="noreferrer"
          className="underline hover:text-gray-100"
          href="https://rocketseat.com.br"
          >Rocketseat</a>
        </div>

      </div>

      {/* right */}
      <div className="flex flex-col bg-cover p-16 bg-[url(../assets/bg-stars.svg)] ">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed w-[360px]">
            Você ainda nao registrou nenhuma lembrança, começe a{' '}
            <a href="" className="underline hover:text-gray-50">Criar agora</a>
          </p>
        </div>
      </div>

    </main>
      
  )
}
