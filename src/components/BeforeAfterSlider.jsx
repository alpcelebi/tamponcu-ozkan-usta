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

        {/* Before / After Badges (Responsive sizing for mobile screens) */}
        <div className="absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 z-10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-red-600/90 text-white text-[10px] sm:text-xs font-black tracking-wider uppercase backdrop-blur-md shadow-md pointer-events-none select-none">
          {beforeLabel}
        </div>
        <div className="absolute top-2.5 right-2.5 sm:top-3.5 sm:right-3.5 z-10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-emerald-600/90 text-white text-[10px] sm:text-xs font-black tracking-wider uppercase backdrop-blur-md shadow-md pointer-events-none select-none">
          {afterLabel}
        </div>

        {/* Interactive Divider Line with Glowing Amber Accent */}
        <div
          className="absolute top-0 bottom-0 z-20 w-1 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-500 shadow-[0_0_14px_rgba(245,158,11,0.85)] pointer-events-none"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Tactile Grab Handle */}
          <div
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-amber-400 border-2 border-white dark:border-slate-950 text-slate-950 flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.4)] cursor-grab active:cursor-grabbing hover:scale-110 active:scale-95 transition-transform pointer-events-auto ring-4 ring-amber-400/25"
          >
            <ChevronsLeftRight className="w-4 h-4 sm:w-5 sm:h-5 text-slate-950 stroke-[2.5]" />
          </div>
        </div>
      </div>

      {/* Caption & Mobile Helper Hint */}
      <div className="mt-2.5 sm:mt-3 flex flex-col sm:flex-row sm:items-center justify-between w-full text-xs text-slate-500 dark:text-slate-400 px-1 gap-1">
        <span className="font-bold text-slate-800 dark:text-slate-200 text-xs sm:text-sm flex items-center gap-1.5">
          <span className="text-amber-500">⚡</span> {title}
        </span>
        <span className="text-[11px] sm:text-xs text-amber-600 dark:text-amber-400 font-semibold flex items-center gap-1">
          <span>👈 Kaydırarak Değişimi İnceleyin 👉</span>
        </span>
      </div>
    </div>
  )
}
