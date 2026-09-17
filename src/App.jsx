import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingActions from './components/FloatingActions'
import QuoteModal from './components/QuoteModal'

import Home from './pages/Home'
import Kaporta from './pages/Kaporta'
import PlastikKaynak from './pages/PlastikKaynak'
import YedekParca from './pages/YedekParca'
import About from './pages/About'

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)
  const location = useLocation()

  // Sayfa değiştiğinde en üste kaydır
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const handleOpenQuote = () => {
    setQuoteModalOpen(true)
  }

  const handleCloseQuote = () => {
    setQuoteModalOpen(false)
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950 transition-colors duration-200">
      {/* Top Navbar */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main Content View */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home onOpenQuote={handleOpenQuote} />} />
          <Route path="/kaporta" element={<Kaporta onOpenQuote={handleOpenQuote} />} />
          <Route path="/plastik-kaynak" element={<PlastikKaynak onOpenQuote={handleOpenQuote} />} />
          <Route path="/yedek-parca" element={<YedekParca onOpenQuote={handleOpenQuote} />} />
          <Route path="/hakkimizda" element={<About onOpenQuote={handleOpenQuote} />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingActions onOpenQuote={handleOpenQuote} />

      {/* Interactive Quick Quote Modal */}
      <QuoteModal isOpen={quoteModalOpen} onClose={handleCloseQuote} />
    </div>
  )
}
