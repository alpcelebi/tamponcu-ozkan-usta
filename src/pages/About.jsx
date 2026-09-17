import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  ShieldCheck,
  Award,
  Wrench,
  CreditCard,
  ExternalLink,
} from 'lucide-react'

export default function About({ onOpenQuote }) {
  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#090d16] text-slate-800 dark:text-slate-100 transition-colors duration-200">
      {/* Header Banner */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-500/20 text-xs font-bold uppercase tracking-wider">
          <Award className="w-4 h-4 text-amber-500" />
          <span>Hakkımızda & İletişim</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Tamponcu Özkan Usta Kimdir?
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          Uzun yıllara dayanan tecrübemiz ve güler yüzlü esnaf ahlakımızla, Mersin'de araç kaporta ve plastik kaynak alanında müşteri memnuniyetini en üst seviyede tutuyoruz.
        </p>
      </div>

      {/* Main Story & Values Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left: About Text */}
        <div className="lg:col-span-7 bg-white dark:bg-[#111827] p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-5 flex flex-col justify-between">
          <div className="space-y-4">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              Deneyim, Titizlik ve Orijinale Sadık İşçilik
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              <strong>Tamponcu Özkan Usta (Özkan Çetiner)</strong> olarak, Mersin Otoyol Otomotiv Sanayi Sitesi'nde faaliyet gösteriyoruz. Küçük bir çizikten kaza sonrası ağır kaporta hasarlarına, kırık far ayaklarından çatlamış tamponlara kadar tüm onarımları modern tekniklerle gerçekleştiriyoruz.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Amacımız sadece aracı onarmak değil; aracınızın fabrika çıkışındaki güvenlik ve estetik bütünlüğünü korurken, gereksiz parça değişimlerinin önüne geçerek bütçenizi korumaktır. Müşterilerimize verdiğimiz sözü zamanında tutmak en büyük ilkemizdir.
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-black text-amber-500">15+</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">Yıllık Tecrübe</div>
            </div>
            <div>
              <div className="text-2xl font-black text-amber-500">%100</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">İşçilik Garantisi</div>
            </div>
            <div>
              <div className="text-2xl font-black text-amber-500">5000+</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">Mutlu Müşteri</div>
            </div>
          </div>
        </div>

        {/* Right: 3 Value Pillars + Guarantee Seal */}
        <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/25 flex items-center gap-4">
            <img
              src="/img/craftsmanship_seal.jpg"
              alt="Usta İşçilik & Garanti Mührü"
              className="w-14 h-14 rounded-full border-2 border-amber-400/60 shadow-md shrink-0 object-cover"
            />
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">RESMİ STANDART</div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white">Usta İşçilik & Kalite Güvencesi</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">Tüm plastik kaynak ve kaporta operasyonları işçilik garantilidir.</p>
            </div>
          </div>

          {[
            {
              icon: <Award className="w-6 h-6 text-amber-500" />,
              title: 'Ustalık Belgesi',
              desc: 'Resmi ustalık ve yetkinlik sertifikalarına sahip deneyimli kadro ile kurallara uygun tamir.',
            },
            {
              icon: <ShieldCheck className="w-6 h-6 text-amber-500" />,
              title: 'İşçilik Garantisi',
              desc: 'Yaptığımız tüm plastik kaynak ve göçük düzeltme işlemlerinde sağlamlık ve dayanıklılık garantisi.',
            },
            {
              icon: <Wrench className="w-6 h-6 text-amber-500" />,
              title: 'Modern Ekipman',
              desc: 'Son sistem kaynak makineleri, lazerli doğrultma tezgâhları ve hassas fırın boya altyapısı.',
            },
          ].map((item, i) => (
            <div key={i} className="bg-white dark:bg-[#111827] p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-100 dark:border-amber-500/20 shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Map & Location Section */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">Atölye Konumumuz ve Yol Tarifi</h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Mersin Otoyol Otomotiv Sanayi Sitesi'ndeki atölyemize kolayca ulaşabilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Interactive Google Maps iframe */}
          <div className="lg:col-span-8 rounded-3xl overflow-hidden bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 min-h-[380px] shadow-sm relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1597.0385370692875!2d34.64431499361932!3d36.816672962739446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1527f3d0fde55277%3A0x1a7784e39715c5ef!2sTAMPONCU%20PLAST%C4%B0K%20KAYNAKC%C4%B0%20%C3%96ZKAN%20USTA%20OTOYOL%20OTOMOT%C4%B0V!5e0!3m2!1str!2str!4v1711219069867!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ minHeight: '380px', border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tamponcu Özkan Usta Konumu"
            />
          </div>

          {/* Contact Details Card */}
          <div className="lg:col-span-4 bg-white dark:bg-[#111827] p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">İletişim Bilgileri</h3>

              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block">Adres:</strong>
                    <span className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                      Otoyol Otomotiv Sanayi Sitesi, Akdeniz / Mersin
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block">Telefon:</strong>
                    <a
                      href="tel:+905323533063"
                      className="text-amber-600 dark:text-amber-400 font-bold hover:underline text-base"
                    >
                      0532 353 30 63
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 dark:text-white block">Çalışma Saatleri:</strong>
                    <span className="text-slate-600 dark:text-slate-300 text-xs">
                      Pazartesi - Cumartesi: 08:30 - 19:00
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-800">
              <a
                href="https://maps.google.com/?q=36.816672962739446,34.64431499361932"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition hover:scale-[1.02]"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Yol Tarifi Al (Google Maps)</span>
              </a>

              <a
                href="https://wa.me/905323533063?text=Merhaba%20Özkan%20Usta,%20atölyenize%20gelmek%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Konum İste</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Payment & Bank Details (Ziraat Bankası) */}
      <div className="bg-white dark:bg-[#111827] p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20">
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Ödeme & Havale Seçenekleri</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Nakit ve banka transferi (IBAN / FAST) ile kolay ödeme</p>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/20 text-xs font-bold w-fit">
            Güvenli Ödeme
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8 space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <p>
              Atölyemizde yapılan tüm işlemler için nakit ödemenin yanı sıra tüm bankalardan anında havale / FAST ile ödeme gerçekleştirebilirsiniz.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Uzak mesafeden yedek parça siparişlerinizde veya kapora gönderimlerinizde Ziraat Bankası kurumsal hesap bilgilerimizi kullanabilirsiniz.
            </p>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 font-mono space-y-1">
              <div><strong className="text-slate-900 dark:text-white">Alıcı:</strong> Özkan Çetiner (Tamponcu Özkan Usta)</div>
              <div><strong className="text-slate-900 dark:text-white">Banka:</strong> T.C. Ziraat Bankası</div>
              <div className="text-amber-700 dark:text-amber-400 font-bold">Detaylı IBAN bilgisi için WhatsApp üzerinden talep edebilirsiniz.</div>
            </div>
          </div>

          <div className="md:col-span-4 flex justify-center">
            <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md max-w-[240px] bg-white p-2">
              <img
                src="/img/ziraat.jpg"
                alt="Ziraat Bankası Ödeme Kartı"
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
