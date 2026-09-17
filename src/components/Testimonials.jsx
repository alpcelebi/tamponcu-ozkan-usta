import { Star, CheckCircle2, MessageSquareQuote } from 'lucide-react'

const reviews = [
  {
    name: 'Mehmet Yılmaz',
    district: 'Mersin, Yenişehir',
    car: 'Chery Tiggo 8 Pro',
    service: 'Ön Tampon Kaynağı & Fırın Boya',
    rating: 5,
    comment:
      'Yetkili servis tampon için komple değişim ve 40 bin TL masraf çıkardı. Özkan Usta sağ olsun kırık ve çatlak parçayı aynı gün orijinal gibi kaynattı, boyadı. Çizgiler sıfır oturdu, ton farkı hiç yok.',
    date: '1 hafta önce',
  },
  {
    name: 'Ahmet Demir',
    district: 'Mersin, Mezitli',
    car: 'Volkswagen Golf 7',
    service: 'Plastik Tampon & Far Ayağı Kaynağı',
    rating: 5,
    comment:
      'Kaldırıma vurup kırdığım ön tampon ve far tırnaklarını harika bir şekilde onardı. Far ayağını değiştirmeye gerek kalmadan kurtardı. İşinin ehli, sözünün eri bir usta.',
    date: '2 hafta önce',
  },
  {
    name: 'Serkan Öztürk',
    district: 'Mersin, Toroslar',
    car: 'Mercedes-Benz C200',
    service: 'Tampon Çatlak Onarımı & Panel Hizalama',
    rating: 5,
    comment:
      'Premium aracımın tamponunu tereddüt ederek götürdüm ama usta işçilik gerçekten kendini belli ediyor. Montaj boşlukları fabrikasyon gibi oturdu. Teşekkürler Özkan Usta.',
    date: '1 ay önce',
  },
  {
    name: 'Burak Kaya',
    district: 'Mersin, Akdeniz',
    car: 'Renault Megane 4',
    service: 'Kaporta Göçük & Çizik Onarımı',
    rating: 5,
    comment:
      'Sağ çamurluktaki göçük ve derin çizikler için gittim. Söz verdiği gibi ertesi gün öğlen tertemiz teslim etti. Fiyatı da piyasaya göre gayet makul.',
    date: '1 ay önce',
  },
  {
    name: 'Murat Şahin',
    district: 'Mersin, Tarsus',
    car: 'Fiat Egea Cross',
    service: 'Arka Tampon & Difüzör Onarımı',
    rating: 5,
    comment:
      'Geri manevrada kırılan tampon difüzörünü sıfır parça almadan tamir ettirdim. En az %70 tasarruf sağladım. Kesinlikle tavsiye ederim.',
    date: '2 ay önce',
  },
  {
    name: 'Emre Çelik',
    district: 'Mersin, Pozcu',
    car: 'Dacia Duster',
    service: 'Çamurluk Dodiği & Tampon Kaynağı',
    rating: 5,
    comment:
      'Plastik parçalarda Mersin’de tek geçerim. WhatsApp’tan fotoğraf attım, 10 dakikada net fiyat verdi, atölyeye gidince de ne dediyse o şekilde yaptı. Helal olsun.',
    date: '3 ay önce',
  },
]

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div className="inline-block px-3.5 py-1 rounded-full bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300 text-xs font-bold tracking-wider uppercase border border-amber-200 dark:border-amber-500/20">
          MÜŞTERİ DENEYİMLERİ
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Mersinli Araç Sahipleri <span className="text-amber-500">Ne Diyor?</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
          Atölyemizde onarılan araçların sahiplerinden gerçek geri bildirimler ve memnuniyet deneyimleri:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-xl hover:border-amber-300 dark:hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-3">
              {/* Star Rating & Quote Icon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <MessageSquareQuote className="w-6 h-6 text-slate-300 dark:text-slate-700 group-hover:text-amber-500/40 transition-colors" />
              </div>

              {/* Review Text */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                "{rev.comment}"
              </p>
            </div>

            {/* Reviewer Details & Car Tag */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                    <span>{rev.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  </h4>
                  <p className="text-[11px] text-slate-400">{rev.district}</p>
                </div>
                <span className="text-[10px] text-slate-400">{rev.date}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-[11px] text-amber-600 dark:text-amber-400 font-semibold border border-slate-200/80 dark:border-slate-700/60 w-fit">
                <span>{rev.car}</span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-500 dark:text-slate-400 font-normal">{rev.service}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
