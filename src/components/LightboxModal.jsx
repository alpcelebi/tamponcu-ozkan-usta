import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export default function LightboxModal({ images = [], currentIndex = 0, isOpen = false, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, onPrev, onNext])

  if (!isOpen || images.length === 0) return null

  const currentItem = images[currentIndex] || {}

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6 select-none">
        {/* Dark Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/95 backdrop-blur-md"
        />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 hover:text-accent transition shadow-lg"
          aria-label="Kapat"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              onPrev()
            }}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-accent hover:text-brand-bg transition shadow-lg"
            aria-label="Önceki Fotoğraf"
          >
            <ChevronLeft className="w-7 h-7" />
          </button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation()
              onNext()
            }}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-accent hover:text-brand-bg transition shadow-lg"
            aria-label="Sonraki Fotoğraf"
          >
            <ChevronRight className="w-7 h-7" />
          </button>
        )}

        {/* Main Content Box */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-5xl max-h-[88vh] z-10 flex flex-col items-center"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={currentItem.src}
            alt={currentItem.title || 'Galeri Fotoğrafı'}
            className="max-h-[75vh] w-auto max-w-full rounded-xl object-contain shadow-2xl border border-white/10"
          />

          {/* Caption */}
          <div className="mt-4 text-center">
            <h4 className="text-sm md:text-base font-bold text-accent">
              {currentItem.title || 'Atölye Çalışması'}
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              Fotoğraf {currentIndex + 1} / {images.length}
            </p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
