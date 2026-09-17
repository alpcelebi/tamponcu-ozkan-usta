import { Award, Phone, MessageCircle, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react'

export default function MasterProfile() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <div className="inline-block px-3.5 py-1 rounded-full bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300 text-xs font-bold tracking-wider uppercase border border-amber-200 dark:border-amber-500/20">
          USTAMIZI TANIYIN
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Deneyim ve Güvenin Adresi: <span className="text-amber-500">Özkan Çetiner</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
          Mersin sanayisinde 15 yılı aşkın süredir dürüst esnaflık, titiz işçilik ve müşteri memnuniyeti ilkesiyle hizmet veriyoruz.
        </p>
      </div>

      <div className="rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden p-6 sm:p-10 lg:p-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Real Workshop Master Visual Card */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-square bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md">
              <img
                src="/img/img2.jpeg"
                alt="Tamponcu Özkan Usta - Atölye Çalışması"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-bold text-xs shadow-md mb-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>Resmi Ustalık Belgeli</span>
                </div>
                <h3 className="text-xl font-black text-white">Özkan Çetiner</h3>
                <p className="text-xs text-slate-200">Kurucu & Baş Usta • Mersin Otoyol Otomotiv</p>
              </div>
            </div>

            {/* Quick Location & Experience Strip */}
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-slate-700 dark:text-slate-300 font-semibold truncate">Mersin Akdeniz</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-slate-700 dark:text-slate-300 font-semibold truncate">15+ Yıl Tecrübe</span>
              </div>
            </div>
          </div>

          {/* Right: Bio, Core Values & Specialties */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <h3 className="text-2xl font-black text-slate-900 dark:text-white">
                "Aracınızı değiştirmek kolaydır, önemli olan orijinal değerini ve fabrika sağlamlığını korumaktır."
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                Mesleğe çıraklıktan başlayan ve 15 yılı aşkın süredir Mersin Otoyol Otomotiv Sanayi Sitesi'nde kendi atölyesini işleten <strong>Özkan Usta</strong>, özellikle modern araçların kırılan plastik tamponlarını, far ayaklarını ve kaza hasarlı kaporta gövdesini fabrikasyon kalitesinde onarmasıyla tanınır.
              </p>
            </div>

            {/* Specialties List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {[
                'Plastik Tampon & Radyatör Kaynağı',
                'Kaza Sonrası Panel & Çamurluk Doğrultma',
                'Bilgisayarlı Ton Eşleme & Fırın Boya',
                'Kırık Far Ayağı & Izgara Restorasyonu',
                'Boyasız Hassas Göçük Düzeltme',
                'Orijinal Çıkma Parça Tedariği',
              ].map((spec, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            {/* Direct Contact Triggers */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/905323533063?text=Merhaba%20Özkan%20Usta,%20aracımla%20ilgili%20danışmak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-all flex items-center gap-2 shadow-md hover:scale-[1.02] active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Özkan Usta'ya WhatsApp'tan Yaz</span>
              </a>

              <a
                href="tel:+905323533063"
                className="px-5 py-3 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white text-xs font-bold border border-slate-700 transition-all flex items-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>0532 353 30 63</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
