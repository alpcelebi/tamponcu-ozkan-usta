import { useState } from 'react'
import { Car, ShieldCheck } from 'lucide-react'
import BeforeAfterSlider from './BeforeAfterSlider'

const projects = [
  {
    id: 'chery',
    tabTitle: 'Chery Tampon',
    carModel: 'Chery Tiggo 8 Pro',
    service: 'Ön Tampon & Kaporta Restorasyonu',
    damage: 'Ağır Tampon Kırığı & Çizikler',
    result: 'Orijinal Form Korundu',
    beforeImage: '/img/cherry3.jpg',
    afterImage: '/img/cherry2.jpeg',
    badge: 'Öncesi / Sonrası',
  },
  {
    id: 'golf',
    tabTitle: 'VW Golf Kaynak',
    carModel: 'Volkswagen Golf 7',
    service: 'Plastik Tampon Kaynağı & Dolgu',
    damage: 'Tampon Çatlağı & Tırnak Kırığı',
    result: 'Yüksek Mukavemetli Kaynak',
    beforeImage: encodeURI('/plastikKaynak/Golf/WhatsApp Image 2024-03-28 at 12.53.20 PM (1).jpeg'),
    afterImage: encodeURI('/plastikKaynak/Golf/WhatsApp Image 2024-03-28 at 12.53.23 PM.jpeg'),
    badge: 'Atölye İşçiliği',
  },
  {
    id: 'mercedes',
    tabTitle: 'Mercedes Tampon',
    carModel: 'Mercedes-Benz C-Serisi',
    service: 'Tampon Onarım & Panel Hizalama',
    damage: 'Ön Izgara Çevresi Kırığı',
    result: 'Milimetrik Montaj Uyumu',
    beforeImage: encodeURI('/plastikKaynak/mercedes/WhatsApp Image 2024-03-28 at 12.53.08 PM.jpeg'),
    afterImage: encodeURI('/plastikKaynak/mercedes/WhatsApp Image 2024-03-28 at 12.53.22 PM (1).jpeg'),
    badge: 'Garantili Onarım',
  },
]

export default function HeroShowcase() {
  const [activeTab, setActiveTab] = useState(0)
  const current = projects[activeTab]

  return (
    <div className="rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden transition-all">
      {/* Project Selector Tabs */}
      <div className="p-2 sm:p-2.5 bg-slate-50 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-1.5">
        <div className="flex items-center gap-1.5 w-full">
          {projects.map((proj, idx) => {
            const isActive = activeTab === idx
            return (
              <button
                key={proj.id}
                onClick={() => setActiveTab(idx)}
                className={`flex-1 py-2 px-2.5 sm:px-3.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/60 dark:hover:bg-slate-800'
                }`}
              >
                <Car className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{proj.tabTitle}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Main Interactive Slider Showcase */}
      <div className="p-3 sm:p-4">
        <BeforeAfterSlider
          key={current.id}
          beforeImage={current.beforeImage}
          afterImage={current.afterImage}
          beforeLabel="Hasarlı Hal"
          afterLabel="Onarılmış Hal"
          title={`${current.carModel} - ${current.service}`}
        />
      </div>

      {/* Project Info Footer */}
      <div className="px-4 py-3 bg-slate-50/90 dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div className="space-y-0.5">
          <div className="font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5">
            <span>{current.carModel}</span>
            <span className="text-amber-500">•</span>
            <span className="text-slate-500 dark:text-slate-400 font-normal">{current.service}</span>
          </div>
          <div className="text-[11px] text-slate-600 dark:text-slate-400">
            <span className="text-amber-600 dark:text-amber-400 font-semibold">{current.damage}</span> → {current.result}
          </div>
        </div>

        <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 font-bold text-[11px] shrink-0 self-start sm:self-auto">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>%70 Tasarruf</span>
        </div>
      </div>
    </div>
  )
}
