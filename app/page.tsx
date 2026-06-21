import Image from 'next/image'

export default function Home() {
  return (
    <div className="flex min-h-screen bg-[#FDFCF8]">

      {/* --- SIDEBAR (LEVÁ LIŠTA) --- */}
      <aside className="w-64 h-screen sticky top-0 border-r border-stone-200 flex flex-col p-10 bg-[#F7F5F0] z-50 text-[#3A3A38]">
        <div className="mb-12">
          <Image src="/logo2.png" alt="Logo Magda" width={350} height={350} priority className="object-contain" />
        </div>

        <nav className="flex flex-col space-y-6 uppercase text-[11px] tracking-[0.25em]">
          <a href="#domu" className="hover:text-stone-400 transition-colors border-b border-transparent hover:border-stone-300 w-fit pb-1 font-medium text-stone-600 italic">Domů</a>
          <a href="#sluzby" className="hover:text-stone-400 transition-colors border-b border-transparent hover:border-stone-300 w-fit pb-1 font-medium text-stone-600 italic">Ceník služeb</a>
          <a href="#informace" className="hover:text-stone-400 transition-colors border-b border-transparent hover:border-stone-300 w-fit pb-1 font-medium text-stone-600 italic">O salonu</a>
          <a href="#kontakt" className="hover:text-stone-400 transition-colors border-b border-transparent hover:border-stone-300 w-fit pb-1 font-medium text-stone-600 italic">Kontakt</a>
        </nav>

        <div className="mt-auto">
          <div className="w-12 h-[1px] bg-stone-400 mb-6"></div>
          <p className="text-[10px] text-stone-500 tracking-widest uppercase leading-loose font-bold">
            © 2026<br />Magda Salon<br />Studénka
          </p>
        </div>
      </aside>

      {/* --- HLAVNÍ OBSAH --- */}
      <main className="flex-1 overflow-x-hidden text-[#3A3A38]">

        {/* SEKCE: DOMŮ (FOTO ZOBRAZENO VŽDY) */}
        <section id="domu" className="min-h-screen flex items-center px-12 md:px-24 bg-[#FDFCF8] relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

            {/* LEVÁ STRANA: TEXT */}
            <div className="space-y-8">
              <span className="text-stone-400 uppercase tracking-[0.4em] text-xs block font-bold">
                Kadeřnictví Magda • Studénka
              </span>
              <h1 className="text-6xl md:text-8xl font-light tracking-tighter text-[#2C2C2A] leading-[1.1]">
                Váš styl, <br />
                <span className="italic text-stone-500 font-serif text-5xl md:text-7xl opacity-70">moje vášeň</span>
              </h1>
              <p className="max-w-lg text-stone-600 leading-relaxed text-lg font-light italic leading-loose">
                "V mém křesle se čas zastaví. Dopřejte si chvíli pro sebe a nechte své vlasy zazářit pod rukama profesionála."
              </p>
              <div className="pt-4">
                <a href="tel:+420776573566" className="bg-[#4A4A48] hover:bg-[#2C2C2A] text-white px-12 py-5 transition-all uppercase text-[10px] tracking-[0.3em] shadow-lg text-center border border-[#4A4A48] inline-block">
                  Rezervace: 776 573 566
                </a>
              </div>
            </div>

            {/* PRAVÁ STRANA: FOTKA ÚČESU (UPRAVENO: viditelná vždycky) */}
            <div className="relative h-[500px] lg:h-[650px] w-full block">
              <Image
                src="/fotovlasy.png"
                alt="Práce salonu Magda"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover shadow-2xl rounded-sm"
              />
            </div>
          </div>
        </section>

        {/* SEKCE: CENÍK */}
        <section id="sluzby" className="min-h-[80vh] bg-[#F4F2EE] flex flex-col justify-center px-12 md:px-24 py-24">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-light mb-20 uppercase tracking-[0.3em] pl-6 font-bold text-stone-600 border-l-4 border-stone-300">Ceník</h2>
            <div className="grid gap-y-10 text-stone-700 font-light">
              {[
                { jmeno: "STŘIH + FOUKÁNÍ", cena: "od 450,- Kč" },
                { jmeno: "MELÍRY + STŘIH + FOUKÁNÍ", cena: "od 880,- Kč" },
                { jmeno: "BARVENÍ + STŘIH + FOUKÁNÍ", cena: "od 880,- Kč" },
                { jmeno: "KOMBINOVANÉ BARVENÍ S MELÍREM + STŘIH + FOUKÁNÍ", cena: "od 1100,- Kč" }
              ].map((item, index) => (
                <div key={index} className="group relative">
                  <div className="flex justify-between items-baseline border-b border-stone-300 pb-4">
                    <span className="text-xl md:text-2xl group-hover:text-stone-400 transition-colors duration-300 tracking-tight">{item.jmeno}</span>
                    <span className="text-[#3A3A38] font-bold tracking-wider text-xl whitespace-nowrap ml-4">{item.cena}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16 p-8 bg-white/40 border border-white/60 italic text-sm text-stone-500 rounded-sm">
              * Ceny jsou orientační a odvíjejí se od délky a hustoty vlasů. Ráda vám cenu upřesním při konzultaci.
            </div>
          </div>
        </section>

        {/* SEKCE: O SALONU */}
        <section id="informace" className="min-h-screen bg-[#FDFCF8] flex flex-col justify-center px-12 md:px-24 py-24 text-stone-600">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative order-2 lg:order-1 w-full">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-[#F4F2EE] -z-10"></div>
              <div className="bg-stone-200 aspect-[4/5] w-full relative overflow-hidden shadow-2xl rounded-sm block">
                <Image
                  src="/salon.jpg"
                  alt="Interiér salonu Magda"
                  fill
                  priority // Přidáno pro vyřešení LCP varování
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-10 order-1 lg:order-2">
              <h2 className="text-4xl font-light uppercase tracking-[0.3em] text-stone-800">O salonu</h2>
              <p className="leading-[2] font-light text-xl italic font-serif text-stone-500">
                Vítejte v mém salonu ve Studénce, kde se krása snoubí s relaxací.
              </p>
              <p className="leading-[1.8] font-light text-lg">
                Zakládám si na preciznosti a používání kvalitní vlasové kosmetiky. Mým cílem je, aby každý střih či barva podtrhly vaši osobnost.
              </p>
              <ul className="space-y-6 pt-4">
                {["Individuální přístup", "Kvalitní kosmetika", "Odborné poradenství", "Klidné prostředí"].map((item) => (
                  <li key={item} className="flex items-center space-x-6 text-[11px] uppercase tracking-[0.3em] text-stone-500 font-bold">
                    <span className="w-10 h-[1px] bg-stone-400"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SEKCE: KONTAKT */}
        <section id="kontakt" className="min-h-screen bg-[#FDFCF8] flex flex-col justify-center px-12 md:px-24 py-24 border-t border-stone-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 text-[#3A3A38]">
            <div className="space-y-16">
              <div>
                <h2 className="text-4xl font-light mb-12 uppercase tracking-[0.3em] text-stone-700 font-bold">Kontakt</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-[11px] uppercase tracking-[0.3em] text-stone-400 mb-6 font-bold tracking-[0.4em]">Adresa</h3>
                    <p className="text-xl font-light leading-relaxed text-stone-600 italic border-l-2 border-stone-200 pl-4">
                      2. května 903<br />
                      742 13 STUDÉNKA
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[11px] uppercase tracking-[0.3em] text-stone-400 mb-6 font-bold tracking-[0.4em]">Rezervace</h3>
                    <a href="tel:+420776573566" className="text-3xl font-light tracking-widest text-stone-700">776 573 566</a>
                  </div>
                </div>
              </div>

              <div className="bg-[#F7F5F0] p-12 border border-stone-200 shadow-sm relative">
                <h3 className="text-[11px] uppercase tracking-[0.3em] text-stone-400 mb-10 font-bold">Provozní doba</h3>
                <div className="space-y-5 font-light text-stone-600">
                  <div className="flex justify-between border-b border-stone-200/60 pb-3">
                    <span className="text-sm uppercase tracking-wider">Pondělí</span>
                    <span className="text-stone-400 italic uppercase text-[10px] font-bold">Zavřeno</span>
                  </div>
                  {["Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"].map((day) => (
                    <div key={day} className="flex justify-between border-b border-stone-200/60 pb-3">
                      <span className="text-sm uppercase tracking-wider">{day}</span>
                      <span className="font-medium tracking-tighter">Na objednávku</span>
                    </div>
                  ))}
                  <div className="flex justify-between text-stone-400 italic mt-6 text-[10px] pt-2 uppercase font-bold">
                    <span>Neděle</span> <span>Zavřeno</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="relative flex-1">
                <div className="absolute -inset-4 border border-stone-200 -z-10 translate-x-3 translate-y-3"></div>
                <div className="overflow-hidden bg-stone-100 h-full relative shadow-lg rounded-sm min-h-[450px] block">
                  <Image
                    src="/venek.jpg"
                    alt="Exteriér salonu Magda"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=2.+května+903,+742+13+Studénka"
                target="_blank"
                className="h-24 bg-stone-800 text-white flex items-center justify-center hover:bg-stone-900 transition-all shadow-xl"
              >
                  <span className="text-[10px] uppercase tracking-[0.5em] font-bold">Otevřít navigaci v Mapách</span>
              </a>
            </div>
          </div>
        </section>

        <footer className="py-24 bg-[#F7F5F0] text-center border-t border-stone-200">
             <p className="text-[10px] text-stone-400 uppercase tracking-[0.5em] font-bold">Designováno pro Kadeřnictví Magda | Studénka 2026</p>
        </footer>
      </main>
    </div>
  )
}