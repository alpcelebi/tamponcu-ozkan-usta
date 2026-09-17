import { useState } from 'react'
import {
  Car,
  CheckCircle2,
  Phone,
  MessageCircle,
  Sparkles,
  Maximize2,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import LightboxModal from '../components/LightboxModal'

const kaportaPhotos = [
  { src: '/img/img1.jpeg', title: 'Kaporta Yüzey ve Astar Hazırlığı' },
  { src: '/img/img6.jpg', title: 'Kaza Sonrası Gövde Hizalama' },
  { src: '/img/img9.jpg', title: 'Çamurluk ve Marşpiyel Onarımı' },
  { src: '/img/img10.jpg', title: 'Ağır Hasarlı Kaporta Restorasyonu' },
  { src: '/img/cherry3.jpg', title: 'Chery Ön Panel ve Kaporta Hasarı' },
  { src: '/img/cherry2.jpeg', title: 'Chery Ön Panel Tamir ve Boya Sonu' },
  { src: '/img/img11.jpg', title: 'Kapı ve Sac Doğrultma İşlemi' },
  { src: '/img/img12.jpg', title: 'Boya Öncesi Yüzey Zımparalama ve Macun' },
]

export default function Kaporta({ onOpenQuote }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleOpen = (idx) => {
    setCurrentIndex(idx)
    setLightboxOpen(true)
  }

  return (
    <div className="py-12 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-[#090d16] text-slate-800 dark:text-slate-100 transition-colors duration-200">
      {/* Header Banner */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-500/20 text-xs font-bold uppercase tracking-wider">
          <Car className="w-4 h-4 text-amber-500" />
          <span>Profesyonel Kaporta Atölyesi</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
          Kaporta Onarım & Göçük Düzeltme
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
          Mersin'de en son teknoloji ekipmanlar ve usta el işçiliğiyle aracınızın çizik, göçük ve kaza hasarlarını orijinale en yakın şekilde onarıyoruz. Değer kaybını minimuma indiriyoruz.
        </p>
      </div>

      {/* Before / After Showcase for Kaporta */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-md p-6 sm:p-8 rounded-3xl">
        <div className="lg:col-span-6 space-y-4">
          <div className="inline-block px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/20 text-xs font-bold tracking-wider uppercase">
            ÖNCESİ & SONRASI KARŞILAŞTIRMA
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
            Hasarlı Gövdeyi İlk Günkü Haline Getiriyoruz
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Chery Tiggo ve yeni nesil araçların kaporta ve plastik aksamlarında uyguladığımız onarımlarla, parçayı değiştirmeden fabrikasyon formunda teslim ediyoruz.
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium pt-2">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Orijinal boya korumalı göçük düzeltme (PDR)</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Gövde ve şasede milimetrik lazer ayarı</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Fabrikasyon renk koduna birebir uyumlu fırın boya</span>
            </li>
          </ul>

          <div className="pt-2 flex flex-wrap gap-3">
            <button
              onClick={onOpenQuote}
              className="px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-xs transition hover:scale-105"
            >
              Fiyat Teklifi Al
            </button>
            <a
              href="tel:+905323533063"
              className="px-5 py-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-50 dark:hover:bg-slate-700 transition flex items-center gap-2 shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" /> 0532 353 30 63
            </a>
          </div>
        </div>

        <div className="lg:col-span-6">
          <BeforeAfterSlider
            beforeImage="/img/cherry3.jpg"
            afterImage="/img/cherry2.jpeg"
            title="Chery Tiggo Ön Tampon ve Kaporta Onarımı"
          />
        </div>
      </div>

      {/* Services Breakdown Grid */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Kaporta Hizmetlerimiz</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Boyasız Göçük Düzeltme (PDR)',
              desc: 'Dolu ve otopark sürtmelerinde fabrika boyasına zarar vermeden özel masaj ve vakum çubuklarıyla düzeltme.',
              icon: <Sparkles className="w-6 h-6 text-amber-500" />,
            },
            {
              title: 'Lokal & Parça Fırın Boya',
              desc: 'Bilgisayarlı spektrometre renk tespiti ile ton farkı olmadan lokal ve tam parça boyama işlemi.',
              icon: <Wrench className="w-6 h-6 text-amber-500" />,
            },
            {
              title: 'Şase & Panel Doğrultma',
              desc: 'Kazalarda içeri göçen travers, direk ve çamurluk hatlarının orijinal açılarına getirilmesi.',
              icon: <Car className="w-6 h-6 text-amber-500" />,
            },
            {
              title: 'Derin Çizik ve Taş İzi Onarımı',
              desc: 'Vernik ve astar seviyesindeki derin çiziklerin özel rötuş ve pasta cila teknikleriyle giderilmesi.',
              icon: <ShieldCheck className="w-6 h-6 text-amber-500" />,
            },
            {
              title: 'Chery ve SUV Araç Onarımı',
              desc: 'Yeni nesil Chery, SUV ve crossover araçların özel sac yapısına uygun tezgahlarda doğrultma.',
              icon: <Car className="w-6 h-6 text-amber-500" />,
            },
            {
              title: 'İşçilik ve Renk Garantisi',
              desc: 'Yapılan her kaporta ve boya işleminde çatlama ve kabarmalara karşı usta garantisi.',
              icon: <CheckCircle2 className="w-6 h-6 text-amber-500" />,
            },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-amber-300 dark:hover:border-amber-500/40 transition-all space-y-3">
              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-100 dark:border-amber-500/20 w-fit">
                {item.icon}
              </div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">{item.title}</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Real Kaporta Photos Gallery with Lightbox */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Kaporta Atölyesi Fotoğraf Galerisi</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Büyütmek için fotoğraflara tıklayabilirsiniz</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {kaportaPhotos.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleOpen(idx)}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-400 shadow-xs hover:shadow-md cursor-pointer transition-all"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                <span className="text-xs font-bold text-amber-300">{item.title}</span>
                <span className="text-[10px] text-white flex items-center gap-1 mt-1">
                  <Maximize2 className="w-3 h-3" /> Büyüt
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-amber-50 via-amber-100/50 to-white dark:from-[#1e293b] dark:via-[#1e2230] dark:to-[#0f172a] border border-amber-300 dark:border-amber-500/30 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-xl font-bold text-slate-900 dark:text-white">Kaportanızda Göçük veya Çizik mi Var?</h4>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            WhatsApp'tan hasar fotoğrafını gönderin, ustanız doğrudan fiyat teklifini iletsin.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenQuote}
            className="px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider shadow-xs transition hover:scale-105"
          >
            Teklif Al
          </button>
          <a
            href="https://wa.me/905323533063?text=Merhaba%20Özkan%20Usta,%20kaporta%20hasarım%20için%20yazıyorum."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition hover:scale-105 flex items-center gap-1.5"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        images={kaportaPhotos}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() => setCurrentIndex((prev) => (prev === 0 ? kaportaPhotos.length - 1 : prev - 1))}
        onNext={() => setCurrentIndex((prev) => (prev === kaportaPhotos.length - 1 ? 0 : prev + 1))}
      />
    </div>
  )
}
