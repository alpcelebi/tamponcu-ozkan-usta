import { useState, useMemo } from 'react'
import {
  Car,
  Search,
  MessageCircle,
  Phone,
  CheckCircle2,
  AlertCircle,
  Layers,
} from 'lucide-react'

const BRANDS = ['Tümü', 'Renault', 'Dacia', 'Fiat', 'Volkswagen', 'Chery', 'Mercedes-Benz']

const SAMPLE_PARTS = [
  {
    brand: 'Renault',
    category: 'Tampon & Panjur',
    title: 'Renault Megane / Clio / Symbol Ön ve Arka Tampon',
    desc: 'Orijinal çıkma ve garantili onarılmış tamponlar, sis farı çerçeveleri ve panjurlar.',
  },
  {
    brand: 'Dacia',
    category: 'Tampon & Dodik',
    title: 'Dacia Duster / Sandero / Stepway Plastik Aksam',
    desc: 'Duster çamurluk dodikleri, marşpiyeller, tampon ızgaraları ve difüzörler.',
  },
  {
    brand: 'Fiat',
    category: 'Kaporta & Tampon',
    title: 'Fiat Egea / Fiorino / Doblo Kaporta ve Tampon Parçaları',
    desc: 'Ön tampon demirleri, tampon ızgaraları, çamurluk davlumbazları ve panjurlar.',
  },
  {
    brand: 'Volkswagen',
    category: 'Tampon & Far Ayağı',
    title: 'Volkswagen Golf / Passat / Polo Tampon ve Izgara Grubu',
    desc: 'R-Line / standart tamponlar, far bağlantı ayakları, alt karlıklar ve braketler.',
  },
  {
    brand: 'Chery',
    category: 'Kaporta & Plastik',
    title: 'Chery Tiggo 7 / Tiggo 8 Pro / Omoda 5 Tampon ve Izgara',
    desc: 'Yeni nesil Chery modelleri için ön panjur, tampon parçaları ve radar braketleri.',
  },
  {
    brand: 'Mercedes-Benz',
    category: 'Tampon & Difüzör',
    title: 'Mercedes C / E / A Serisi AMG ve Standart Tampon Aksamı',
    desc: 'Ön tampon kaplamaları, AMG difüzörler, park sensör yuvaları ve tırnak takımları.',
  },
]

export default function YedekParca({ onOpenQuote }) {
  const [selectedBrand, setSelectedBrand] = useState('Tümü')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredParts = useMemo(() => {
    return SAMPLE_PARTS.filter((item) => {
      const matchBrand = selectedBrand === 'Tümü' || item.brand === selectedBrand
      const matchSearch =
        searchTerm.trim() === '' ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
      return matchBrand && matchSearch
    })
  }, [selectedBrand, searchTerm])

  return (
    <div className="py-12 space-y-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#090d16] text-slate-800 dark:text-slate-100 transition-colors duration-200">
      {/* Header Banner */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-500/20 text-xs font-bold uppercase tracking-wider">
          <Layers className="w-4 h-4 text-amber-500" />
          <span>Yedek Parça & Tedarik</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Oto Kaporta & Plastik Yedek Parça
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          Renault, Dacia, Fiat ve diğer popüler markalar için tampon, panjur, far ayağı ve kaporta plastik aksamları. Uygunluk ve anlık stok bilgisi için tek tıkla iletişime geçin.
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white dark:bg-[#111827] p-6 rounded-3xl space-y-4 border border-slate-200 dark:border-slate-800 shadow-xs">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search input */}
          <div className="relative w-full md:max-w-md">
            <Search className="w-5 h-5 text-slate-400 dark:text-slate-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Marka veya parça ara (Örn: Megane, Duster, Tampon...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-slate-500 focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:border-amber-400 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-100 dark:focus:ring-amber-500/20 transition"
            />
          </div>

          {/* WhatsApp Direct inquiry info */}
          <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-500" />
            <span>Fiyat ve stok durumu günlük güncellenmektedir.</span>
          </div>
        </div>

        {/* Brand Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
          {BRANDS.map((brand) => (
            <button
              key={brand}
              onClick={() => setSelectedBrand(brand)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedBrand === brand
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold shadow-xs'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      {/* Parts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredParts.map((part, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-amber-300 dark:hover:border-amber-500/40 transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-500/20 text-xs font-bold">
                  {part.brand}
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">{part.category}</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white pt-1">{part.title}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{part.desc}</p>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800">
              <a
                href={`https://wa.me/905323533063?text=${encodeURIComponent(
                  `Merhaba Özkan Usta, ${part.brand} - ${part.title} için fiyat ve stok durumu öğrenmek istiyorum.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 hover:bg-emerald-600 dark:hover:bg-emerald-600 text-emerald-700 dark:text-emerald-300 hover:text-white border border-emerald-200 dark:border-emerald-500/30 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp'tan Fiyat Sor</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Part Request Box */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-amber-50 via-amber-100/50 to-white dark:from-[#1e293b] dark:via-[#1e2230] dark:to-[#0f172a] border border-amber-300 dark:border-amber-500/30 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-block px-3 py-1 rounded-full bg-amber-400 dark:bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider">
            ARADIĞINIZ PARÇAYI BULAMADINIZ MI?
          </div>
          <h3 className="text-2xl font-black text-slate-900 dark:text-white">Fotoğrafını WhatsApp'tan Gönderin</h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl">
            Aradığınız kaporta veya plastik parçanın fotoğrafını ve araç ruhsat modelini gönderin, stoklarımızdan veya anlaşmalı tedarikçilerimizden en uygun fiyatla temin edelim.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenQuote}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400 hover:from-sky-300 hover:via-cyan-200 hover:to-sky-300 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-xs transition hover:scale-105"
          >
            Talep Formu Aç
          </button>
          <a
            href="https://wa.me/905323533063?text=Merhaba%20Özkan%20Usta,%20aracım%20için%20yedek%20parça%20sormak%20istiyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition hover:scale-105 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
