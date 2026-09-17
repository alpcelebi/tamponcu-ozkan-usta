import { Award, Car, ShieldCheck, Clock } from 'lucide-react'

const metrics = [
  {
    icon: <Award className="w-6 h-6 text-amber-500" />,
    value: '15+',
    label: 'Yıllık Tecrübe',
    desc: 'Mersin sanayisinde köklü ve güvenilir usta geçmişi',
  },
  {
    icon: <Car className="w-6 h-6 text-amber-500" />,
    value: '5.000+',
    label: 'Onarılan Araç & Parça',
    desc: 'Kusursuz teslim edilen kaporta ve plastik kaynak işi',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-amber-500" />,
    value: '%100',
    label: 'İşçilik Garantisi',
    desc: 'Yapılan her kaynak ve doğrultma işleminde tam güvence',
  },
  {
    icon: <Clock className="w-6 h-6 text-amber-500" />,
    value: '30 Dk',
    label: 'Hızlı Hasar Keşfi',
    desc: 'WhatsApp üzerinden fotoğrafla net ve sürprizsiz fiyat teklifi',
  },
]

export default function MetricsBar() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-8 relative z-20">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
        {metrics.map((item, idx) => (
          <div
            key={idx}
            className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/90 dark:bg-[#101726]/90 backdrop-blur-xl border border-slate-200/80 dark:border-white/5 shadow-sm hover:shadow-md hover:border-slate-300 dark:hover:border-white/15 transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 group"
          >
            <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-white/10 shrink-0 group-hover:scale-105 transition-transform">
              {item.icon}
            </div>
            <div className="space-y-0.5">
              <div className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight font-display">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                {item.label}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block leading-snug">
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
