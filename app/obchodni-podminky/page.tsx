import Link from 'next/link'

export default function ObchodniPodminky() {
  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#3A3A38] p-8 md:p-16 max-w-3xl mx-auto space-y-6">
      <Link href="/" className="text-xs uppercase tracking-widest text-stone-500 hover:text-black font-bold">
        ← Zpět na hlavní stránku
      </Link>
      <h1 className="text-3xl font-light uppercase tracking-wider text-stone-800 border-b border-stone-200 pb-4">
        Všeobecné obchodní podmínky
      </h1>
      
      <div className="space-y-4 text-sm font-light leading-relaxed text-stone-600">
        <p><strong>1. Základní ustanovení</strong><br />
        Tyto obchodní podmínky upravují vztahy mezi poskytovatelem kadeřnických služeb (Magda Kyšková, Kadeřnictví Magda, IČO: 48737704) a zákazníkem.</p>
        
        <p><strong>2. Rezervace a zrušení termínu</strong><br />
        Rezervace termínu probíhá telefonicky. Pokud se nemůžete na sjednaný termín dostavit, prosíme o zrušení nebo přeplánování nejpozději 24 hodin předem.</p>
        
        <p><strong>3. Ceny a platby</strong><br />
        Ceny služeb se řídí platným ceníkem uvedeným na webových stránkách. Konečná cena může být upravena dle spotřeby materiálu a náročnosti úkonu po dohodě se zákazníkem.</p>
        
        <p><strong>4. Mimosoudní řešení sporů</strong><br />
        K mimosoudnímu řešení spotřebitelských sporů je příslušná Česká obchodní inspekce (<a href="https://www.coi.cz" target="_blank" rel="noopener noreferrer" className="underline">www.coi.cz</a>).</p>
      </div>
    </div>
  )
}