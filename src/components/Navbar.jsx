import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X, Sparkles, Sun, Moon, MapPin } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { name: 'Anasayfa', path: '/' },
  { name: 'Kaporta Onarım', path: '/kaporta' },
  { name: 'Plastik Kaynak', path: '/plastik-kaynak' },
  { name: 'Yedek Parça', path: '/yedek-parca' },
  { name: 'İletişim & Hakkımızda', path: '/hakkimizda' },
]

export default function Navbar({ onOpenQuote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const { theme, toggleTheme, isDark } = useTheme()

  return (
    <header className="sticky top-0 z-40 w-full select-none bg-white/90 dark:bg-[#090d16]/90 backdrop-blur-md border-b border-slate-200/80 dark:border-white/10 shadow-xs dark:shadow-2xl transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Left: Brand Logo & Master Info Lockup */}
        <Link to="/" className="flex items-center gap-3 sm:gap-3.5 group shrink-0">
          <div className="shrink-0">
            <div className="h-11 sm:h-12 w-16 sm:w-18 bg-black rounded-xl p-1 flex items-center justify-center border border-slate-800/80 dark:border-white/10 shadow-sm overflow-hidden ring-1 ring-amber-400/20 group-hover:ring-amber-400 transition-all">
              <img
                src="/logo/logo2.jpeg"
                alt="Tamponcu Özkan Usta Logo"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="text-base sm:text-lg font-display font-black tracking-tight text-slate-900 dark:text-white leading-none flex items-center gap-1">
              <span>TAMPONCU</span>
              <span className="text-amber-500">ÖZKAN</span>
              <span>USTA</span>
            </div>
            <div className="flex items-center gap-2 mt-1.5">
              <span className="text-[11px] font-bold tracking-wider text-slate-600 dark:text-slate-300 uppercase">
                Özkan Çetiner
              </span>
              <span className="w-1 h-1 rounded-full bg-amber-500 shrink-0" />
              <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                <MapPin className="w-2.5 h-2.5 text-amber-500 shrink-0" />
                Mersin
              </span>
            </div>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links (Spaced & Clean) */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const active = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-150 ${
                  active
                    ? 'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 border border-amber-200/80 dark:border-amber-500/20 shadow-xs'
                    : 'text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        {/* Right: Actions Cluster (Separated with Divider, Gap & Visual Hierarchy) */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Vertical Divider separating Nav from Actions */}
          <div className="hidden lg:block h-6 w-px bg-slate-200 dark:bg-slate-800 mx-1" />

          {/* Theme Toggle Button (Light / Dark) */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 hover:border-amber-400/50 dark:hover:border-amber-400/50 shadow-xs transition-all duration-200 hover:scale-105 active:scale-95"
            title={isDark ? 'Açık Temaya Geç' : 'Koyu Temaya Geç'}
            aria-label="Tema değiştir"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400 transition-transform rotate-0 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-slate-700 transition-transform rotate-0 hover:-rotate-12" />
            )}
          </button>

          {/* Teklif Al Button (High-Contrast Vivid Gradient CTA) */}
          <button
            onClick={onOpenQuote}
            className="px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-300 hover:to-amber-500 text-slate-950 border border-amber-300 shadow-[0_2px_14px_rgba(245,158,11,0.4)] hover:shadow-[0_4px_18px_rgba(245,158,11,0.6)] transition-all flex items-center gap-1.5 hover:scale-105 active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>Teklif Al</span>
          </button>

          {/* Phone Call Button */}
          <a
            href="tel:+905323533063"
            className="px-4 py-2.5 rounded-xl text-sm font-display font-black tracking-wide bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 border border-slate-700 dark:border-slate-200 shadow-sm transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
          >
            <Phone className="w-4 h-4 text-amber-500" />
            <span>0532 353 30 63</span>
          </a>
        </div>

        {/* Mobile Header Right: Theme Toggle & Hamburger */}
        <div className="flex items-center gap-2 sm:hidden">
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            aria-label="Tema değiştir"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:text-amber-500 transition"
            aria-label="Menüyü aç/kapat"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/98 dark:bg-[#0f172a]/98 border-b border-slate-200 dark:border-white/10 overflow-hidden shadow-2xl backdrop-blur-xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => {
                const active = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-3 rounded-xl text-base font-semibold transition ${
                      active
                        ? 'bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 font-bold border border-amber-200/80 dark:border-amber-500/20'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-amber-500'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              })}

              {/* Mobile Quick Action Buttons */}
              <div className="pt-4 grid grid-cols-2 gap-2.5 border-t border-slate-100 dark:border-slate-800 mt-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onOpenQuote()
                  }}
                  className="py-3 px-3 rounded-xl text-xs font-bold uppercase tracking-wider bg-amber-50 dark:bg-amber-500/10 text-amber-900 dark:text-amber-300 border border-amber-200 dark:border-amber-500/30 text-center flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                  <span>Teklif Al</span>
                </button>
                <a
                  href="tel:+905323533063"
                  className="py-3 px-3 rounded-xl text-xs font-black uppercase tracking-wider bg-amber-400 hover:bg-amber-500 text-slate-950 text-center flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <Phone className="w-4 h-4" />
                  <span>0532 353 30 63</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
