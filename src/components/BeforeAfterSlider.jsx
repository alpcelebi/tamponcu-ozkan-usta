import { useState, useRef, useCallback, useEffect } from 'react'
import { ChevronsLeftRight } from 'lucide-react'

export default function BeforeAfterSlider({
  beforeImage = '/img/cherry3.jpg',
  afterImage = '/img/cherry2.jpeg',
  beforeLabel = 'Öncesi (Hasarlı)',
  afterLabel = 'Sonrası (Onarılmış)',
  title = 'Chery Tiggo Ön Tampon & Kaporta Restorasyonu',
}) {
  const [sliderPos, setSliderPos] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef(null)

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPos(percent)
  }, [])

  const handleMouseDown = () => setIsDragging(true)
  const handleTouchStart = () => setIsDragging(true)

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false)
    const handleMouseMove = (e) => {
      if (isDragging) handleMove(e.clientX)
    }
    const handleTouchMove = (e) => {
      if (isDragging && e.touches[0]) handleMove(e.touches[0].clientX)
    }

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      window.addEventListener('touchmove', handleTouchMove)
      window.addEventListener('touchend', handleMouseUp)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleMouseUp)
    }
  }, [isDragging, handleMove])

  return (
    <div className="w-full flex flex-col items-center">
      <div
        ref={containerRef}
        className="relative w-full aspect-[16/10] md:aspect-[16/9] max-h-[520px] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-slate-200/90 dark:border-white/10 shadow-lg bg-slate-100 dark:bg-slate-900"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onClick={(e) => handleMove(e.clientX)}
      >
        {/* After Image (Background / Full Width) */}
        <img
          src={afterImage}
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* Before Image (Clipped / Foreground) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
          />
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full bg-red-600/95 text-white text-xs font-extrabold tracking-wider uppercase backdrop-blur-md shadow-md">
          {beforeLabel}
        </div>
        <div className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full bg-emerald-600/95 text-white text-xs font-extrabold tracking-wider uppercase backdrop-blur-md shadow-md">
          {afterLabel}
        </div>

        {/* Slider Divider Line */}
        <div
          className="absolute top-0 bottom-0 z-20 w-0.5 bg-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.6)] pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Draggable Handle Button */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-amber-500 text-amber-600 flex items-center justify-center shadow-lg cursor-grab active:cursor-grabbing transition-transform hover:scale-110 pointer-events-auto"
          >
            <ChevronsLeftRight className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Caption info under the slider */}
      <div className="mt-3 flex items-center justify-between w-full text-xs text-slate-500 dark:text-slate-400 px-2">
        <span className="font-semibold text-slate-700 dark:text-slate-200">💡 {title}</span>
        <span className="hidden sm:inline-block italic">Çizgiyi sağa-sola sürükleyerek değişimi inceleyin</span>
      </div>
    </div>
  )
}
