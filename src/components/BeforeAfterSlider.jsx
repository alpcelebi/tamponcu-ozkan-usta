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
  const [containerWidth, setContainerWidth] = useState(0)
  const containerRef = useRef(null)

  // Track container pixel width dynamically for 100% accurate inner image scaling (no squishing on mobile)
  useEffect(() => {
    if (!containerRef.current) return
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width)
      }
    }
    updateWidth()

    const observer = new ResizeObserver(updateWidth)
    observer.observe(containerRef.current)
    window.addEventListener('resize', updateWidth)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updateWidth)
    }
  }, [])

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPos(percent)
  }, [])

  const handleMouseDown = (e) => {
    setIsDragging(true)
    handleMove(e.clientX)
  }

  const handleTouchStart = (e) => {
    setIsDragging(true)
    if (e.touches && e.touches[0]) {
      handleMove(e.touches[0].clientX)
    }
  }

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false)
    const handleMouseMove = (e) => {
      if (isDragging) {
        e.preventDefault()
        handleMove(e.clientX)
      }
    }
    const handleTouchMove = (e) => {
      if (isDragging && e.touches[0]) {
        handleMove(e.touches[0].clientX)
      }
    }

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
      window.addEventListener('touchmove', handleTouchMove, { passive: true })
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
    <div className="w-full flex flex-col items-center select-none">
      <div
        ref={containerRef}
        className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] max-h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden cursor-ew-resize border border-slate-200/90 dark:border-white/10 shadow-xl bg-slate-900 touch-none group"
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onClick={(e) => handleMove(e.clientX)}
      >
        {/* After Image (Background / Base Layer) */}
        <img
          src={afterImage}
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        />

        {/* Before Image (Clipped Layer - Width strictly locked to outer container size) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none select-none"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="absolute inset-0 h-full object-cover max-w-none select-none"
            style={{
              width: containerWidth > 0 ? `${containerWidth}px` : '100%',
              minWidth: containerWidth > 0 ? `${containerWidth}px` : '100%',
            }}
          />
        </div>

        {/* Before / After Badges (Minimalist Frosted Pills) */}
        <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-slate-950/80 text-white text-[10px] sm:text-[11px] font-semibold tracking-wide backdrop-blur-md border border-white/15 shadow-sm pointer-events-none select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
          <span>{beforeLabel}</span>
        </div>
        <div className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-slate-950/80 text-white text-[10px] sm:text-[11px] font-semibold tracking-wide backdrop-blur-md border border-white/15 shadow-sm pointer-events-none select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
          <span>{afterLabel}</span>
        </div>

        {/* Minimalist Interactive Divider Line */}
        <div
          className="absolute top-0 bottom-0 z-20 w-[2px] bg-white/90 shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Tactile Grab Handle */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-[0_2px_12px_rgba(0,0,0,0.35)] cursor-grab active:cursor-grabbing hover:scale-105 active:scale-95 transition-transform pointer-events-auto ring-2 ring-amber-400/40 border border-slate-200/80"
          >
            <ChevronsLeftRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-900 stroke-[2.5]" />
          </div>
        </div>
      </div>

      {/* Caption & Mobile Helper Hint */}
      <div className="mt-2.5 flex flex-col sm:flex-row sm:items-center justify-between w-full text-xs text-slate-500 dark:text-slate-400 px-1 gap-1">
        <span className="font-semibold text-slate-800 dark:text-slate-200 text-xs sm:text-sm">
          {title}
        </span>
        <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1">
          <span>‹ Ortadaki çizgiyi kaydırarak karşılaştırın ›</span>
        </span>
      </div>
    </div>
  )
}
