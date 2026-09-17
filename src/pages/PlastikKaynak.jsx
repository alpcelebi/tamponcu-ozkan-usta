import { useState } from 'react'
import {
  Wrench,
  CheckCircle2,
  Phone,
  MessageCircle,
  Sparkles,
  Maximize2,
  ShieldCheck,
  Zap,
  TrendingDown,
} from 'lucide-react'
import LightboxModal from '../components/LightboxModal'

const golfPhotos = [
  { src: encodeURI('/plastikKaynak/Golf/WhatsApp Image 2024-03-28 at 12.53.20 PM (1).jpeg'), title: 'VW Golf Tampon Kırık Kaynağı - Aşama 1' },
  { src: encodeURI('/plastikKaynak/Golf/WhatsApp Image 2024-03-28 at 12.53.20 PM.jpeg'), title: 'VW Golf Tampon İç Destek Kaynağı' },
  { src: encodeURI('/plastikKaynak/Golf/WhatsApp Image 2024-03-28 at 12.53.21 PM.jpeg'), title: 'VW Golf Tampon Yüzey Tesviyesi' },
  { src: encodeURI('/plastikKaynak/Golf/WhatsApp Image 2024-03-28 at 12.53.22 PM.jpeg'), title: 'VW Golf Tampon Dolgu ve Zımpara' },
  { src: encodeURI('/plastikKaynak/Golf/WhatsApp Image 2024-03-28 at 12.53.23 PM.jpeg'), title: 'VW Golf Tampon Son Hat Kontrolü' },
]

const mercedesPhotos = [
  { src: encodeURI('/plastikKaynak/mercedes/WhatsApp Image 2024-03-28 at 12.53.08 PM.jpeg'), title: 'Mercedes Ön Tampon Çatlak İncelemesi' },
  { src: encodeURI('/plastikKaynak/mercedes/WhatsApp Image 2024-03-28 at 12.53.13 PM (1).jpeg'), title: 'Mercedes Tampon Yüksek Mukavemet Kaynağı' },
  { src: encodeURI('/plastikKaynak/mercedes/WhatsApp Image 2024-03-28 at 12.53.13 PM.jpeg'), title: 'Mercedes Tampon Izgara Bağlantı Kaynağı' },
  { src: encodeURI('/plastikKaynak/mercedes/WhatsApp Image 2024-03-28 at 12.53.19 PM.jpeg'), title: 'Mercedes Tampon Dış Yüzey Tesviyesi' },
  { src: encodeURI('/plastikKaynak/mercedes/WhatsApp Image 2024-03-28 at 12.53.20 PM (2).jpeg'), title: 'Mercedes Tampon Hat ve Form Düzeltme' },
  { src: encodeURI('/plastikKaynak/mercedes/WhatsApp Image 2024-03-28 at 12.53.22 PM (1).jpeg'), title: 'Mercedes Tampon Montaja Hazır Son Hali' },
]

const radyatorPhotos = [
  { src: '/plastikKaynak/PlastikRadyatör/IMG_20230925_140735.jpg', title: 'Plastik Radyatör Kazan Çatlak Onarımı' },
  { src: '/plastikKaynak/PlastikRadyatör/IMG_20230925_140740.jpg', title: 'Radyatör Basınç Kanalı Kaynağı' },
  { src: '/plastikKaynak/PlastikRadyatör/IMG_20230925_142502.jpg', title: 'Radyatör Kazan Sızdırmazlık Testi' },
  { src: '/plastikKaynak/PlastikRadyatör/IMG_20230925_142506.jpg', title: 'Tamamlanan Plastik Radyatör Kaynağı' },
]

export default function PlastikKaynak({ onOpenQuote }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImages, setLightboxImages] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const openCategoryLightbox = (images, index) => {
    setLightboxImages(images)
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#090d16] text-slate-800 dark:text-slate-100 transition-colors duration-200">
      {/* Header Banner */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-500/20 text-xs font-bold uppercase tracking-wider">
          <Wrench className="w-4 h-4 text-amber-500" />
          <span>Plastik Kaynak & Tampon Uzmanı</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Garantili Plastik Kaynak & Tampon Onarımı
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          Kırılmış veya çatlamış tamponları çöpe atmak yerine, yüksek ısı ve özel hammadde elektrotlarıyla moleküler seviyede kaynatıp ilk günkü mukavemetine kavuşturuyoruz.
        </p>
      </div>

      {/* Cost Saving & Advantage Box */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-amber-300/80 dark:border-amber-500/30 shadow-xs space-y-2">
          <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 w-fit">
            <TrendingDown className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">%70'e Varan Tasarruf</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Yeni tampon veya parça fiyatları binlerce lirayı bulurken, kaynak yöntemiyle çok daha uygun bütçeyle aynı dayanıklılığı elde edersiniz.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
          <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 w-fit">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Orijinal Parça Kalır</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Yan sanayi parçaların montaj boşluğu ve uyumsuzluk sorununu yaşamazsınız. Aracınızın fabrikasyon orijinal parçası yerinde kalır.
          </p>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs space-y-2">
          <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 w-fit">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">Hızlı & Aynı Gün Teslim</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Parça siparişi ve kargo bekleme derdi olmadan, çoğu tampon ve plastik aksam işlemi aynı gün içinde hazır hale getirilir.
          </p>
        </div>
      </div>

      {/* 1. SECTION: Volkswagen Golf Tampon Kaynağı */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">GERÇEK İŞLEM AŞAMALARI</div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Volkswagen Golf Plastik Kaynak Çalışması</h2>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400">5 Fotoğraf • İncelemek için tıklayın</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {golfPhotos.map((photo, i) => (
            <div
              key={i}
              onClick={() => openCategoryLightbox(golfPhotos, i)}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-400 shadow-xs hover:shadow-md cursor-pointer transition-all"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2.5">
                <span className="text-[11px] font-bold text-amber-300">{photo.title}</span>
                <span className="text-[10px] text-white flex items-center gap-1 mt-0.5">
                  <Maximize2 className="w-3 h-3" /> Büyüt
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2. SECTION: Mercedes Plastik Tampon Kaynağı */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">PREMİUM ARAÇ ONARIMI</div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Mercedes-Benz Plastik Tampon Kaynağı</h2>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400">6 Fotoğraf • İncelemek için tıklayın</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {mercedesPhotos.map((photo, i) => (
            <div
              key={i}
              onClick={() => openCategoryLightbox(mercedesPhotos, i)}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-400 shadow-xs hover:shadow-md cursor-pointer transition-all"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2.5">
                <span className="text-[11px] font-bold text-amber-300">{photo.title}</span>
                <span className="text-[10px] text-white flex items-center gap-1 mt-0.5">
                  <Maximize2 className="w-3 h-3" /> Büyüt
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. SECTION: Plastik Radyatör & Far Ayağı Onarımı */}
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-3 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="text-amber-600 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">BASINÇ VE SIZDIRMAZLIK GARANTİLİ</div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Plastik Radyatör & Far Ayağı Kaynağı</h2>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400">4 Fotoğraf • İncelemek için tıklayın</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {radyatorPhotos.map((photo, i) => (
            <div
              key={i}
              onClick={() => openCategoryLightbox(radyatorPhotos, i)}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-400 shadow-xs hover:shadow-md cursor-pointer transition-all"
            >
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-2.5">
                <span className="text-xs font-bold text-amber-300">{photo.title}</span>
                <span className="text-[10px] text-white flex items-center gap-1 mt-1">
                  <Maximize2 className="w-3 h-3" /> Büyüt
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hangi Parçaları Kaynatıyoruz Bilgilendirme */}
      <div className="bg-white dark:bg-[#111827] p-6 sm:p-8 rounded-3xl space-y-4 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Hangi Parçalara Plastik Kaynak Yapılır?</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
          {[
            'Ön ve Arka Tamponlar',
            'Far ve Stop Ayakları / Tırnakları',
            'Radyatör Su & Yağ Kazanları',
            'Hava Filtre Kazanları',
            'Yan Aynalar ve Kapakları',
            'Marşpiyel ve Çamurluk Davlumbazları',
          ].map((item, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium">
              <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Call to action */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-amber-50 via-amber-100/50 to-white dark:from-[#1e293b] dark:via-[#1e2230] dark:to-[#0f172a] border border-amber-300 dark:border-amber-500/30 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-xl font-bold text-slate-900 dark:text-white">Kırık Tampon veya Far Ayağı mı Var?</h4>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Fotoğrafını WhatsApp'tan atın, dakikalar içinde fiyat ve onarım süresini bildirelim.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenQuote}
            className="px-5 py-3 rounded-xl bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400 hover:from-sky-300 hover:via-cyan-200 hover:to-sky-300 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-xs transition hover:scale-105"
          >
            Fiyat Teklifi Al
          </button>
          <a
            href="https://wa.me/905323533063?text=Merhaba%20Özkan%20Usta,%20plastik%20kaynak%20hasarım%20için%20yazıyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition hover:scale-105 flex items-center gap-1.5"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      </div>

      {/* Lightbox */}
      <LightboxModal
        images={lightboxImages}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setCurrentIndex((prev) => (prev === 0 ? lightboxImages.length - 1 : prev - 1))}
        onNext={() => setCurrentIndex((prev) => (prev === lightboxImages.length - 1 ? 0 : prev + 1))}
      />
    </div>
  )
}
