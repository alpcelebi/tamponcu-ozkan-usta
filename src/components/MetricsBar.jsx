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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {metrics.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-white/95 dark:bg-[#111827]/95 backdrop-blur-xl border border-slate-200/90 dark:border-slate-800 shadow-lg hover:shadow-xl hover:border-amber-400/50 dark:hover:border-amber-500/40 transition-all duration-300 flex items-start gap-4 group"
          >
            <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-500/10 border border-amber-200/80 dark:border-amber-500/20 shrink-0 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight font-display">
                {item.value}
              </div>
              <div className="text-sm font-bold text-slate-800 dark:text-slate-200">
                {item.label}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
