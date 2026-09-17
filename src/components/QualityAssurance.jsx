import { ShieldCheck, CheckCircle2, Award, Sparkles, Wrench, Flame } from 'lucide-react'

const standards = [
  {
    icon: <Wrench className="w-5 h-5 text-amber-500" />,
    title: 'Hammaddeye Birebir Uygun Kaynak',
    desc: 'Tamponun plastik türü (PP, ABS, vb.) analiz edilir. Aynı hammadde çubuklarıyla içten ve dıştan kaynatılarak esnekliği korunur.',
  },
  {
    icon: <Flame className="w-5 h-5 text-amber-500" />,
    title: 'Bilgisayarlı Renk Analizi & Fırın Boya',
    desc: 'Aracınızın fabrikasyon boya kodu birebir taranır. Güneş solması hesaba katılarak fırın ortamında sıfır ton farkıyla uygulanır.',
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-amber-500" />,
    title: 'Milimetrik Panel & Hat Hizalama',
    desc: 'Çamurluk, kaput, far ve tampon montaj tırnakları fabrikasyon ölçülerde yerine oturtulur; parça aralıklarında boşluk kalmaz.',
  },
  {
    icon: <CheckCircle2 className="w-5 h-5 text-amber-500" />,
    title: 'Teslimat Öncesi Kalite Kontrolü',
    desc: 'Kaynak mukavemeti, yüzey tesviyesi ve vernik parlaklığı son muayeneden geçirilir; aracınız garantili olarak teslim edilir.',
  },
]

export default function QualityAssurance({ onOpenQuote }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-[#0f172a] to-[#090d16] text-white border border-slate-800 shadow-2xl p-8 sm:p-12 lg:p-14 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute -right-24 -bottom-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -left-24 -top-24 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left / Top Text & Seal */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>KALİTE & İŞÇİLİK STANDARTLARI</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
              Garantili Onarım & <span className="text-amber-400">Titiz Usta</span> Güvencesi
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Tamponcu Özkan Usta olarak her aracı kendi aracımız gibi ele alıyoruz. Aracınızın fabrika çıkışındaki estetiğini, güvenlik dayanımını ve orijinal parça bütünlüğünü korumayı taahhüt ediyoruz.
            </p>

            {/* Seal & Badge Box */}
            <div className="p-4 rounded-2xl bg-white/5 border border-amber-400/20 backdrop-blur-md flex items-center gap-4">
              <img
                src="/img/craftsmanship_seal.jpg"
                alt="Usta İşçilik ve Garanti Mührü"
                className="w-16 h-16 rounded-full border-2 border-amber-400/60 shadow-lg shrink-0 object-cover"
              />
              <div className="space-y-0.5">
                <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">RESMİ SANAYİ STANDARDI</div>
                <div className="text-sm font-bold text-white">%100 Memnuniyet & İşçilik Garantisi</div>
                <div className="text-xs text-slate-400">Yapılan tüm işlemler ustalık belgesi güvencesindedir.</div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="px-6 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider transition-all flex items-center gap-2 hover:scale-[1.02] active:scale-95 shadow-lg"
              >
                <Sparkles className="w-4 h-4" />
                <span>Ücretsiz Hasar Danışmanlığı Al</span>
              </button>
            </div>
          </div>

          {/* Right 4 Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {standards.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-800/60 border border-slate-700/70 hover:border-amber-400/40 transition-all duration-300 space-y-3 backdrop-blur-sm group hover:-translate-y-0.5"
              >
                <div className="p-3 rounded-xl bg-amber-400/10 border border-amber-400/20 w-fit group-hover:bg-amber-400/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
