import { MessageCircle, Phone, Sparkles } from 'lucide-react'

export default function FloatingActions({ onOpenQuote }) {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Quick Quote trigger pill */}
      <button
        onClick={onOpenQuote}
        className="pointer-events-auto hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/95 dark:bg-[#111827]/95 hover:bg-slate-50 dark:hover:bg-[#1a2336] text-amber-700 dark:text-amber-300 font-bold text-xs border border-amber-300 dark:border-amber-500/30 shadow-xl backdrop-blur-md transition-all hover:scale-105"
      >
        <Sparkles className="w-4 h-4 text-amber-500 animate-pulse" />
        <span>Fiyat Teklifi Al</span>
      </button>

      {/* Main Floating Action Buttons */}
      <div className="flex items-center gap-2.5 pointer-events-auto">
        {/* Phone Call Button */}
        <a
          href="tel:+905323533063"
          className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/15 text-slate-800 dark:text-white flex items-center justify-center shadow-lg hover:border-amber-400 hover:text-amber-600 dark:hover:text-amber-400 transition-all hover:scale-110 active:scale-95"
          aria-label="Doğrudan Ara"
          title="0532 353 30 63"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* WhatsApp Button with Glow Pulse */}
        <div className="relative">
          <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping opacity-75 pointer-events-none" />
          <a
            href="https://wa.me/905323533063?text=Merhaba%20Özkan%20Usta,%20aracımın%20hasar%20fotoğrafını%20iletiyorum.%20Fiyat%20öğrenebilir%20miyim?"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.4)] transition-all hover:scale-110 active:scale-95"
            aria-label="WhatsApp'tan Yaz"
            title="WhatsApp ile İletişime Geç"
          >
            <MessageCircle className="w-7 h-7" />
          </a>
        </div>
      </div>
    </div>
  )
}
