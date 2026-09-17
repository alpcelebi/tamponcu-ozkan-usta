import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Car, Wrench, Sparkles, MessageCircle, AlertCircle } from 'lucide-react'

const BRANDS = ['Renault', 'Fiat', 'Volkswagen', 'Chery', 'Dacia', 'Mercedes-Benz', 'Ford', 'Diğer']
const SERVICES = [
  'Plastik Tampon Kaynağı & Onarımı',
  'Boyasız Göçük Düzeltme (PDR)',
  'Lokal & Fırın Boya İşlemi',
  'Far Ayağı & Radyatör Kaynağı',
  'Ağır Kaporta Kaza Onarımı',
  'Yedek Parça Fiyat Sorgulama',
]

export default function QuoteModal({ isOpen, onClose }) {
  const [selectedBrand, setSelectedBrand] = useState('Renault')
  const [selectedService, setSelectedService] = useState('Plastik Tampon Kaynağı & Onarımı')
  const [modelYear, setModelYear] = useState('')
  const [note, setNote] = useState('')

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `Merhaba Özkan Usta, web sitenizden hasar teklifi için yazıyorum:
🚗 Marka: ${selectedBrand} ${modelYear ? `(${modelYear})` : ''}
🔧 İşlem: ${selectedService}
📝 Açıklama: ${note || 'Hasar fotoğrafını ileteceğim, yaklaşık fiyat ve süre bilgisi rica ederim.'}`

    const encoded = encodeURIComponent(message)
    window.open(`https://wa.me/905323533063?text=${encoded}`, '_blank')
    onClose()
  }

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/70 dark:bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-lg rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 z-10 overflow-hidden text-slate-800 dark:text-slate-100 transition-colors"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">Hızlı Hasar & Fiyat Teklifi</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Ustanızdan doğrudan süre ve fiyat yanıtı alın</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mt-5 space-y-4">
            {/* Marka Seçimi */}
            <div>
              <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Car className="w-4 h-4 text-amber-500" /> Aracınızın Markası
              </label>
              <div className="grid grid-cols-4 gap-2">
                {BRANDS.map((brand) => (
                  <button
                    type="button"
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className={`py-2 px-1 text-xs font-semibold rounded-xl border transition-all text-center truncate ${
                      selectedBrand === brand
                        ? 'bg-amber-400 dark:bg-amber-500 text-slate-950 font-black border-amber-500 shadow-xs'
                        : 'bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {brand}
                  </button>
                ))}
              </div>
            </div>

            {/* Model Yılı / Ek Bilgi */}
            <div>
              <input
                type="text"
                placeholder="Model & Yıl (Örn: Megane 4 - 2020)"
                value={modelYear}
                onChange={(e) => setModelYear(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-slate-500 focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:border-amber-400 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-100 dark:focus:ring-amber-500/20 transition"
              />
            </div>

            {/* İşlem Türü */}
            <div>
              <label className="block text-xs font-bold text-slate-600 dark:text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Wrench className="w-4 h-4 text-amber-500" /> İhtiyaç Duyulan İşlem
              </label>
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:border-amber-400 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-100 dark:focus:ring-amber-500/20 transition"
              >
                {SERVICES.map((s) => (
                  <option key={s} value={s} className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Ek Not / Açıklama */}
            <div>
              <textarea
                rows={2}
                placeholder="Hasar hakkında kısa not (örn: Arka tampon sol köşe çatlak, boya kalkması var...)"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-slate-500 focus:bg-white dark:focus:bg-slate-800 focus:outline-none focus:border-amber-400 dark:focus:border-amber-400 focus:ring-2 focus:ring-amber-100 dark:focus:ring-amber-500/20 transition resize-none"
              />
            </div>

            {/* Bilgi Kutusu */}
            <div className="p-3.5 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 flex items-start gap-2.5 text-xs text-amber-900 dark:text-amber-300">
              <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
              <span>
                Butona bastığınızda WhatsApp açılacak ve hasar fotoğrafını ekleyip doğrudan ustaya gönderebileceksiniz.
              </span>
            </div>

            {/* Gönder Butonu */}
            <button
              type="submit"
              className="w-full py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-extrabold flex items-center justify-center gap-2 shadow-md transition-all text-sm uppercase tracking-wider hover:scale-[1.02] active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp ile Teklif İste
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
