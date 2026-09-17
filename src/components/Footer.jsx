import { Link } from 'react-router-dom'
import { Phone, MapPin, Clock, MessageCircle, ExternalLink, ShieldCheck } from 'lucide-react'

// Simple robust SVGs for brand icons
function InstagramIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function FacebookIcon({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-[#05080f] text-slate-300 border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="h-11 sm:h-12 w-16 sm:w-18 bg-black rounded-xl p-1 flex items-center justify-center border border-slate-800/80 shadow-sm overflow-hidden ring-1 ring-amber-400/20 shrink-0">
                <img
                  src="/logo/logo2.jpeg"
                  alt="Tamponcu Özkan Usta"
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-display font-black text-white leading-none">
                  TAMPONCU <span className="text-amber-400">ÖZKAN</span> USTA
                </h3>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className="text-[11px] text-slate-300 font-bold uppercase tracking-wider">
                    Özkan Çetiner
                  </span>
                  <span className="w-1 h-1 rounded-full bg-amber-400 shrink-0" />
                  <span className="text-[11px] text-amber-400 font-semibold">Mersin</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Mersin Otoyol Otomotiv bünyesinde kaporta düzeltme, plastik tampon kaynağı, fırın boya ve parça tedarikinde yüksek kalite standartlarında, garantili ve dürüst esnaf hizmeti veriyoruz.
            </p>
            <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold pt-1">
              <ShieldCheck className="w-4 h-4" /> Ustalık Belgeli & Garantili İşçilik
            </div>
          </div>

          {/* Col 2: Hızlı Bağlantılar */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" /> Hızlı Erişim
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Anasayfa', path: '/' },
                { name: 'Kaporta Onarım & Düzeltme', path: '/kaporta' },
                { name: 'Plastik Tampon Kaynağı', path: '/plastik-kaynak' },
                { name: 'Yedek Parça Satışı', path: '/yedek-parca' },
                { name: 'İletişim & Hakkımızda', path: '/hakkimizda' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-accent transition flex items-center gap-1.5"
                  >
                    <span className="text-accent/60">›</span> {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: İletişim & Adres */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" /> İletişim & Konum
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-200">Otoyol Otomotiv Sanayi Sitesi</p>
                  <p className="text-xs text-slate-400">Akdeniz / Mersin / Türkiye</p>
                  <a
                    href="https://maps.google.com/?q=36.816672962739446,34.64431499361932"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-accent hover:underline mt-1 font-medium"
                  >
                    Haritada Aç <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <div>
                  <a
                    href="tel:+905323533063"
                    className="text-white font-bold hover:text-accent transition text-base"
                  >
                    0532 353 30 63
                  </a>
                  <p className="text-[11px] text-slate-400">Hemen Ulaşın</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent shrink-0" />
                <div>
                  <p className="text-xs text-slate-200">Pazartesi - Cumartesi</p>
                  <p className="text-xs text-slate-400">08:30 - 19:00</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Sosyal Medya & WhatsApp */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" /> Bizi Takip Edin
            </h4>
            <p className="text-xs text-slate-400 mb-4">
              En son tamamladığımız araçların öncesi/sonrası fotoğraflarını ve güncel çalışmalarımızı sosyal medya hesaplarımızdan takip edebilirsiniz:
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/tamponcuozkanusta/?hl=tr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#E1306C] hover:border-transparent transition-all shadow-sm"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/tamponcu.ozkan.usta"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#1877F2] hover:border-transparent transition-all shadow-sm"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/905323533063"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#25D366] hover:border-transparent transition-all shadow-sm"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Local SEO keywords tags */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-wrap gap-2 text-[11px] text-slate-500">
          <span className="text-slate-400 font-semibold">Hizmet Bölgelerimiz:</span>
          <span>Mersin Kaportacı</span> •
          <span>Mersin Tampon Kaynağı</span> •
          <span>Mersin Plastik Kaynak</span> •
          <span>Otoyol Otomotiv Kaporta</span> •
          <span>Mersin Boyasız Göçük Düzeltme</span> •
          <span>Akdeniz Oto Kaporta</span> •
          <span>Toroslar Tampon Tamiri</span> •
          <span>Mezitli Oto Tamir</span> •
          <span>Yenişehir Plastik Kaynak</span>
        </div>

        {/* Bottom copyright */}
        <div className="mt-6 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Tamponcu Özkan Usta (Özkan Çetiner). Tüm hakları saklıdır.</p>
          <p className="text-slate-400">Mersin Araç Kaporta ve Plastik Kaynak Uzmanı</p>
        </div>
      </div>
    </footer>
  )
}
