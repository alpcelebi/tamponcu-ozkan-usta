import { MessageCircle, Phone, Sparkles } from 'lucide-react'

export default function FloatingActions({ onOpenQuote }) {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-none">
      {/* Quick Quote trigger pill */}
      <button
        onClick={onOpenQuote}
        className="pointer-events-auto hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 dark:bg-[#111827]/95 hover:bg-white dark:hover:bg-slate-800 text-sky-700 dark:text-sky-300 font-bold text-xs border border-sky-400/40 hover:border-sky-400 shadow-md backdrop-blur-md transition-all hover:scale-105 active:scale-95"
      >
        <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
        <span>Hızlı Teklif Al</span>
      </button>

      {/* Main Floating Action Buttons */}
      <div className="flex items-center gap-2 pointer-events-auto">
        {/* Phone Call Button */}
        <a
          href="tel:+905323533063"
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/15 text-slate-800 dark:text-white flex items-center justify-center shadow-md hover:border-amber-400 hover:text-amber-600 dark:hover:text-amber-400 transition-all hover:scale-105 active:scale-95"
          aria-label="Doğrudan Ara"
          title="0532 353 30 63"
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>

        {/* WhatsApp Button */}
        <div className="relative">
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/30 animate-ping opacity-60 pointer-events-none" />
          <a
            href="https://wa.me/905323533063?text=Merhaba%20Özkan%20Usta,%20aracımın%20hasar%20fotoğrafını%20iletiyorum.%20Fiyat%20öğrenebilir%20miyim?"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_4px_16px_rgba(37,211,102,0.35)] transition-all hover:scale-105 active:scale-95"
            aria-label="WhatsApp'tan Yaz"
            title="WhatsApp ile İletişime Geç"
          >
            <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
        </div>
      </div>
    </div>
  )
}
