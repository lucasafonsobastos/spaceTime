export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/* left */}
      <div className="relative flex flex-col itens-start justify-between overflow-hidden border-r border-white/10 bg-cover px-28 py-16">
        {/* blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
        {/* stripes */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
      </div>

      {/* right */}
      <div className="flex flex-col bg-cover p-16 bg-[url(../assets/bg-stars.svg)]">
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
