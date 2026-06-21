import Image from 'next/image'

export default function Home() {
  return (
    // Změna: Na mobilu pod sebou (flex-col), na PC vedle sebe (lg:flex-row)
    <div className="flex flex-col lg:flex-row min-h-screen bg-[#FDFCF8]">

      {/* --- SIDEBAR / HORNÍ LIŠTA --- */}
      {/* Změna: Na mobilu w-full a statické, na PC w-64 a sticky na boku */}
      <aside className="w-full lg:w-64 h-auto lg:h-screen lg:sticky top-0 border-b lg:border-b-0 lg:border-r border-stone-200 flex flex-col items-center lg:items-stretch p-6 lg:p-10 bg-[#F7F5F0] z-50 text-[#3A3A38]">
        <div className="mb-6 lg:mb-12 max-w-[180px] lg:max-w-none">
          <Image src="/logo2.png" alt="Logo Magda" width={350} height={350} priority className="object-contain" />
        </div>

        {/* Změna: Na mobilu odkazy vedle sebe a skrolují horizontálně, pokud se nevejdou, na PC pod sebou */}
        <nav className="flex flex-row lg:flex-col justify-center lg:justify-start flex-wrap gap-4 lg:space-y-6 lg:gap-0 uppercase text-[10px] lg:text-[11px] tracking-[0.2em] lg:tracking-[0.25em] w-full text-center lg:text-left">
          <a href="#domu" className="hover:text-stone-400 transition-colors border-b border-transparent hover:border-stone-300 w-fit pb-1 font-medium text-stone-600 italic">Domů</a>
          <a href="#sluzby" className="hover:text-stone-400 transition-colors border-b border-transparent hover:border-stone-300 w-fit pb-1 font-medium text-stone-600 italic">Ceník služeb</a>
          <a href="#informace" className="hover:text-stone-400 transition-colors border-b border-transparent hover:border-stone-300 w-fit pb-1 font-medium text-stone-600 italic">O salonu</a>
          <a href="#kontakt" className="hover:text-stone-400 transition-colors border-b border-transparent hover:border-stone-300 w-fit pb-1 font-medium text-stone-600 italic">Kontakt</a>
        </nav>

        {/* Skryto na mobilu, viditelné pouze na PC */}
        <div className="hidden lg:block mt-auto">
          <div className="w-12 h-[1px] bg-stone-400 mb-6"></div>
          <p className="text-[10px] text-stone-500 tracking-widest uppercase leading-loose font-bold">
            © 2026<br />Magda Salon<br />Studénka
          </p>
        </div>
      </aside>

      {/* --- HLAVNÍ OBSAH --- */}
      <main className="flex-1 overflow-x-hidden text-[#3A3A38]">

        {/* SEKCE: DOMŮ */}
        {/* Změna: px-6 pro mobil, md:px-24 pro PC. py-12 na mobilu, ať to dýchá */}
        <section id="domu" className="min-h-screen flex items-center px-6 md:px-24 py-12 lg:py-0 bg-[#FDFCF8] relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

            {/* LEVÁ STRANA: TEXT */}
            {/* Změna: text-center na mobilu, lg:text-left pro PC */}
            <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
              <span className="text-stone-400 uppercase tracking-[0.3em] lg:tracking-[0.4em] text-[10px] lg:text-xs block font-bold">
                Kadeřnictví Magda • Studénka
              </span>
              {/* Změna: text-4xl na mobilu, text-6xl na tabletu, text-8xl na PC */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tighter text-[#2C2C2A] leading-[1.2] lg:leading-[1.1]">
                Váš styl, <br />
                <span className="italic text-stone-500 font-serif text-3xl sm:text-5xl md:text-7xl opacity-70">moje vášeň</span>
              </h1>
              <p className="max-w-lg mx-auto lg:mx-0 text-stone-600 leading-relaxed text-base lg:text-lg font-light italic">
                "V mém křesle se čas zastaví. Dopřejte si chvíli pro sebe a nechte své vlasy zazářit pod rukama profesionála."
              </p>
              <div className="pt-4">
                <a href="tel:+420776573566" className="bg-[#4A4A48] hover:bg-[#2C2C2A] text-white px-8 lg:px-12 py-4 lg:py-5 transition-all uppercase text-[10px] tracking-[0.3em] shadow-lg text-center border border-[#4A4A48] inline-block w-full sm:w-auto">
                  Rezervace: 776 573 566
                </a>
              </div>
            </div>

            {/* PRAVÁ STRANA: FOTKA ÚČESU */}
            {/* Změna: Menší výška na mobilu (h-[350px]), plná na PC */}
            <div className="relative h-[350px] sm:h-[500px] lg:h-[650px] w-full block">
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
        <section id="sluzby" className="min-h-[80vh] bg-[#F4F2EE] flex flex-col justify-center px-6 md:px-24 py-16 lg:py-24">
          <div className="max-w-3xl mx-auto lg:mx-0 w-full">
            {/* Změna: text-2xl/3xl na mobilu, posunuto mb-10 */}
            <h2 className="text-2xl sm:text-4xl font-light mb-10 lg:mb-20 uppercase tracking-[0.3em] pl-4 lg:pl-6 font-bold text-stone-600 border-l-4 border-stone-300">Ceník</h2>
            <div className="grid gap-y-8 lg:grid gap-y-10 text-stone-700 font-light">
              {[
                { jmeno: "STŘIH + FOUKÁNÍ", cena: "od 450,- Kč" },
                { jmeno: "MELÍRY + STŘIH + FOUKÁNÍ", cena: "od 880,- Kč" },
                { jmeno: "BARVENÍ + STŘIH + FOUKÁNÍ", cena: "od 880,- Kč" },
                { jmeno: "KOMBINOVANÉ BARVENÍ S MELÍREM + STŘIH + FOUKÁNÍ", cena: "od 1100,- Kč" }
              ].map((item, index) => (
                <div key={index} className="group relative">
                  {/* Změna: flex-col na úplně malých mobilech, jinak flex-row */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-baseline border-b border-stone-300 pb-4 gap-2 sm:gap-0">
                    <span className="text-lg md:text-2xl group-hover:text-stone-400 transition-colors duration-300 tracking-tight">{item.jmeno}</span>
                    <span className="text-[#3A3A38] font-bold tracking-wider text-lg md:text-xl whitespace-nowrap sm:ml-4">{item.cena}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 lg:mt-16 p-6 lg:p-8 bg-white/40 border border-white/60 italic text-xs lg:text-sm text-stone-500 rounded-sm">
              * Ceny jsou orientační a odvíjejí se od délky a hustoty vlasů. Ráda vám cenu upřesním při konzultaci.
            </div>
          </div>
        </section>

        {/* SEKCE: O SALONU */}
        <section id="informace" className="min-h-screen bg-[#FDFCF8] flex flex-col justify-center px-6 md:px-24 py-16 lg:py-24 text-stone-600">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Změna: Na mobilu fotka pod textem (order-2), na PC vlevo (lg:order-1) */}
            <div className="relative order-2 lg:order-1 w-full">
              <div className="hidden sm:block absolute -top-8 -left-8 w-64 h-64 bg-[#F4F2EE] -z-10"></div>
              <div className="bg-stone-200 aspect-[4/5] w-full relative overflow-hidden shadow-2xl rounded-sm block">
                <Image
                  src="/salon.jpg"
                  alt="Interiér salonu Magda"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 lg:space-y-10 order-1 lg:order-2">
              <h2 className="text-2xl sm:text-4xl font-light uppercase tracking-[0.3em] text-stone-800">O salonu</h2>
              <p className="leading-relaxed font-light text-lg lg:text-xl italic font-serif text-stone-500">
                Vítejte v mém salonu ve Studénce, kde se krása snoubí s relaxací.
              </p>
              <p className="leading-relaxed font-light text-base lg:text-lg">
                Zakládám si na preciznosti a používání kvalitní vlasové kosmetiky. Mým cílem je, aby každý střih či barva podtrhly vaši osobnost.
              </p>
              <ul className="space-y-4 lg:space-y-6 pt-2 lg:pt-4">
                {["Individuální přístup", "Kvalitní kosmetika", "Odborné poradenství", "Klidné prostředí"].map((item) => (
                  <li key={item} className="flex items-center space-x-4 lg:space-x-6 text-[10px] lg:text-[11px] uppercase tracking-[0.2em] lg:tracking-[0.3em] text-stone-500 font-bold">
                    <span className="w-8 lg:w-10 h-[1px] bg-stone-400"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SEKCE: KONTAKT */}
        <section id="kontakt" className="min-h-screen bg-[#FDFCF8] flex flex-col justify-center px-6 md:px-24 py-16 lg:py-24 border-t border-stone-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 text-[#3A3A38]">
            <div className="space-y-10 lg:space-y-16">
              <div>
                <h2 className="text-2xl sm:text-4xl font-light mb-8 lg:mb-12 uppercase tracking-[0.3em] text-stone-700 font-bold">Kontakt</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                  <div>
                    <h3 className="text-[10px] lg:text-[11px] uppercase tracking-[0.3em] text-stone-400 mb-3 lg:mb-6 font-bold">Adresa</h3>
                    <p className="text-lg lg:text-xl font-light leading-relaxed text-stone-600 italic border-l-2 border-stone-200 pl-4">
                      2. května 903<br />
                      742 13 STUDÉNKA
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[10px] lg:text-[11px] uppercase tracking-[0.3em] text-stone-400 mb-3 lg:mb-6 font-bold">Rezervace</h3>
                    <a href="tel:+420776573566" className="text-2xl lg:text-3xl font-light tracking-widest text-stone-700 block">776 573 566</a>
                  </div>
                </div>
              </div>

              {/* Provozní doba */}
              <div className="bg-[#F7F5F0] p-6 sm:p-12 border border-stone-200 shadow-sm relative">
                <h3 className="text-[10px] lg:text-[11px] uppercase tracking-[0.3em] text-stone-400 mb-6 lg:mb-10 font-bold">Provozní doba</h3>
                <div className="space-y-4 font-light text-stone-600">
                  <div className="flex justify-between border-b border-stone-200/60 pb-3">
                    <span className="text-sm uppercase tracking-wider">Pondělí</span>
                    <span className="text-stone-400 italic uppercase text-[10px] font-bold">Zavřeno</span>
                  </div>
                  {["Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"].map((day) => (
                    <div key={day} className="flex justify-between border-b border-stone-200/60 pb-3">
                      <span className="text-sm uppercase tracking-wider">{day}</span>
                      <span className="font-medium tracking-tighter text-sm">Na objednávku</span>
                    </div>
                  ))}
                  <div className="flex justify-between text-stone-400 italic mt-6 text-[10px] pt-2 uppercase font-bold">
                    <span>Neděle</span> <span>Zavřeno</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Fotka venku a tlačítko na mapu */}
            <div className="flex flex-col gap-6 lg:gap-8">
              <div className="relative flex-1 min-h-[300px] lg:min-h-[450px]">
                <div className="hidden sm:block absolute -inset-4 border border-stone-200 -z-10 translate-x-3 translate-y-3"></div>
                <div className="overflow-hidden bg-stone-100 h-full relative shadow-lg rounded-sm block">
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
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-16 lg:h-24 bg-stone-800 text-white flex items-center justify-center hover:bg-stone-900 transition-all shadow-xl rounded-sm"
              >
                  <span className="text-[10px] uppercase tracking-[0.3em] lg:tracking-[0.5em] font-bold px-4 text-center">Otevřít navigaci v Mapách</span>
              </a>
            </div>
          </div>
        </section>

        {/* MOBILNÍ PATIČKA */}
        <footer className="py-12 lg:py-24 bg-[#F7F5F0] text-center border-t border-stone-200 px-6">
             <p className="text-[9px] lg:text-[10px] text-stone-400 uppercase tracking-[0.3em] lg:tracking-[0.5em] font-bold leading-loose">Designováno pro Kadeřnictví Magda | Studénka 2026</p>
        </footer>
      </main>
    </div>
  )
}