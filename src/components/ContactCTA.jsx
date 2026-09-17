import { Phone, MessageCircle, MapPin, ArrowRight, Clock } from 'lucide-react'

export default function ContactCTA({ onOpenQuote }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-32">
      <div className="rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl p-8 sm:p-14 lg:p-16 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14 space-y-3 relative z-10">
          <div className="inline-block px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold tracking-wider uppercase">
            HIZLI İLETİŞİM & TEKLİF
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Aracınızın Hasarı İçin <span className="text-amber-400">Hemen Bilgi Alın</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Fotoğraf gönderin, 10 dakika içinde net fiyat ve teslimat süresini bildirelim.
          </p>
        </div>

        {/* 3 Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
          {/* 1. Phone Card */}
          <a
            href="tel:+905323533063"
            className="p-6 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between space-y-4 group shadow-lg"
          >
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 w-fit group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  Telefon ile Ulaşın
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Özkan Usta ile doğrudan görüşüp randevu ve hasar danışmanlığı alın.
                </p>
              </div>
            </div>
            <div className="pt-2 flex items-center justify-between text-sm font-bold text-amber-400">
              <span>0532 353 30 63</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* 2. WhatsApp Card */}
          <a
            href="https://wa.me/905323533063?text=Merhaba%20Özkan%20Usta,%20aracımın%20hasar%20fotoğrafını%20gönderiyorum.%20Fiyat%20öğrenebilir%20miyim?"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 hover:border-[#25D366]/60 transition-all duration-300 flex flex-col justify-between space-y-4 group shadow-lg"
          >
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] w-fit group-hover:scale-110 transition-transform">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-[#25D366] transition-colors">
                  WhatsApp ile Hasar Gönder
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Hasarın 2-3 fotoğrafını iletin, aynı gün net ve sürprizsiz fiyat verelim.
                </p>
              </div>
            </div>
            <div className="pt-2 flex items-center justify-between text-sm font-bold text-[#25D366]">
              <span>Fotoğraf Gönder</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* 3. Maps / Location Card */}
          <a
            href="https://maps.google.com/?q=36.816672962739446,34.64431499361932"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-2xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 hover:border-amber-400/50 transition-all duration-300 flex flex-col justify-between space-y-4 group shadow-lg"
          >
            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 w-fit group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  Atölye Yol Tarifi Al
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Mersin Otoyol Otomotiv Sanayi Sitesi'ndeki atölyemize navigasyon ile gelin.
                </p>
              </div>
            </div>
            <div className="pt-2 flex items-center justify-between text-sm font-bold text-amber-400">
              <span>Haritada Aç</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>

        {/* Working Hours Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-400 flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>Pazartesi - Cumartesi: 08:30 - 19:00</span>
          </div>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span>Pazar Günleri Acil Hasar Çağrısı İçin Telefonla Bilgi Alabilirsiniz</span>
        </div>
      </div>
    </section>
  )
}
