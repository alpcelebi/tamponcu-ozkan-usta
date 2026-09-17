import { useState } from 'react'
import { Car, ShieldCheck } from 'lucide-react'
import BeforeAfterSlider from './BeforeAfterSlider'

const projects = [
  {
    id: 'chery',
    tabTitle: 'Chery Tampon',
    mobileTitle: 'Chery',
    carModel: 'Chery Tiggo 8 Pro',
    service: 'Ön Tampon & Kaporta Restorasyonu',
    damage: 'Ağır Tampon Kırığı & Çizikler',
    result: 'Orijinal Form Korundu',
    beforeImage: '/img/cherry3.jpg',
    afterImage: '/img/cherry2.jpeg',
  },
  {
    id: 'golf',
    tabTitle: 'VW Golf Kaynak',
    mobileTitle: 'VW Golf',
    carModel: 'Volkswagen Golf 7',
    service: 'Plastik Tampon Kaynağı & Dolgu',
    damage: 'Tampon Çatlağı & Tırnak Kırığı',
    result: 'Yüksek Mukavemetli Kaynak',
    beforeImage: encodeURI('/plastikKaynak/Golf/WhatsApp Image 2024-03-28 at 12.53.20 PM (1).jpeg'),
    afterImage: encodeURI('/plastikKaynak/Golf/WhatsApp Image 2024-03-28 at 12.53.23 PM.jpeg'),
  },
  {
    id: 'mercedes',
    tabTitle: 'Mercedes Tampon',
    mobileTitle: 'Mercedes',
    carModel: 'Mercedes-Benz C-Serisi',
    service: 'Tampon Onarım & Panel Hizalama',
    damage: 'Ön Izgara Çevresi Kırığı',
    result: 'Milimetrik Montaj Uyumu',
    beforeImage: encodeURI('/plastikKaynak/mercedes/WhatsApp Image 2024-03-28 at 12.53.08 PM.jpeg'),
    afterImage: encodeURI('/plastikKaynak/mercedes/WhatsApp Image 2024-03-28 at 12.53.22 PM (1).jpeg'),
  },
]

export default function HeroShowcase() {
  const [activeTab, setActiveTab] = useState(0)
  const current = projects[activeTab]

  return (
    <div className="rounded-2xl sm:rounded-3xl bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-white/10 shadow-lg shadow-slate-200/50 dark:shadow-none overflow-hidden transition-all">
      {/* Project Selector Tabs (Minimalist Segmented Control) */}
      <div className="p-1.5 bg-slate-100/80 dark:bg-slate-900/80 border-b border-slate-200/80 dark:border-white/10 flex items-center justify-between gap-1">
        <div className="flex items-center gap-1 w-full">
          {projects.map((proj, idx) => {
            const isActive = activeTab === idx
            return (
              <button
                key={proj.id}
                onClick={() => setActiveTab(idx)}
                className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                  isActive
                    ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white font-bold shadow-xs border border-slate-200/60 dark:border-white/10'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-800/50'
                }`}
              >
                <Car className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-amber-500' : 'text-slate-400'}`} />
                <span className="truncate sm:hidden">{proj.mobileTitle}</span>
                <span className="truncate hidden sm:inline">{proj.tabTitle}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Main Interactive Slider Showcase */}
      <div className="p-2.5 sm:p-4">
        <BeforeAfterSlider
          key={current.id}
          beforeImage={current.beforeImage}
          afterImage={current.afterImage}
          beforeLabel="Hasarlı Hal"
          afterLabel="Onarılmış Hal"
          title={`${current.carModel} • ${current.service}`}
        />
      </div>

      {/* Project Info Footer (Minimal & Clean) */}
      <div className="px-3.5 sm:px-4 py-2.5 sm:py-3 bg-slate-50/80 dark:bg-slate-900/60 border-t border-slate-200/70 dark:border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div className="space-y-0.5">
          <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5 text-xs sm:text-sm">
            <span>{current.carModel}</span>
            <span className="text-slate-300 dark:text-slate-600">•</span>
            <span className="text-slate-500 dark:text-slate-400 font-normal text-[11px] sm:text-xs">{current.service}</span>
          </div>
          <div className="text-[11px] text-slate-600 dark:text-slate-400">
            <span className="text-amber-600 dark:text-amber-400 font-medium">{current.damage}</span>
            <span className="mx-1 text-slate-400">→</span>
            <span className="text-slate-700 dark:text-slate-300">{current.result}</span>
          </div>
        </div>

        <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 font-semibold text-[11px] shrink-0 self-start sm:self-auto">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>%70 Tasarruf</span>
        </div>
      </div>
    </div>
  )
}
