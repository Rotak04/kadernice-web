import Link from 'next/link'

export default function GDPR() {
  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#3A3A38] p-8 md:p-16 max-w-3xl mx-auto space-y-6">
      <Link href="/" className="text-xs uppercase tracking-widest text-stone-500 hover:text-black font-bold">
        ← Zpět na hlavní stránku
      </Link>
      <h1 className="text-3xl font-light uppercase tracking-wider text-stone-800 border-b border-stone-200 pb-4">
        Ochrana osobních údajů (GDPR)
      </h1>
      
      <div className="space-y-4 text-sm font-light leading-relaxed text-stone-600">
        <p><strong>1. Správce osobních údajů</strong><br />
        Správcem osobních údajů je Magda Kyšková (Kadeřnictví Magda), se sídlem 2. května 903, 742 13 Studénka, IČO: 48737704.</p>
        
        <p><strong>2. Rozsah a účel zpracování</strong><br />
        Osobní údaje (zejména jméno, telefonní číslo, e-mail) získávané při telefonické či osobní rezervaci slouží výhradně pro účely poskytování kadeřnických služeb a komunikace se zákazníkem ohledně termínu objednávky.</p>
        
        <p><strong>3. Doba uchování údajů</strong><br />
        Osobní údaje jsou uchovávány pouze po dobu nezbytně nutnou pro realizaci služby nebo po dobu vyžadovanou příslušnými právními předpisy.</p>
        
        <p><strong>4. Práva zákazníka</strong><br />
        Zákazník má právo na přístup k vlastním osobním údajům, jejich opravu, výmaz či omezení zpracování. S dotazy na zpracování osobních údajů se můžete obrátit na tel. +420 776 573 566.</p>
      </div>
    </div>
  )
}