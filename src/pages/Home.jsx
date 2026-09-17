import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  Clock,
  Sparkles,
  BadgePercent,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Maximize2,
  Car,
  Wrench,
  Flame,
  Layers,
  Award,
  Zap,
  Check,
} from 'lucide-react'

import HeroShowcase from '../components/HeroShowcase'
import MetricsBar from '../components/MetricsBar'
import QualityAssurance from '../components/QualityAssurance'
import MasterProfile from '../components/MasterProfile'
import Testimonials from '../components/Testimonials'
import ContactCTA from '../components/ContactCTA'
import LightboxModal from '../components/LightboxModal'

const galleryData = [
  { src: '/img/cherry3.jpg', title: 'Chery Ön Tampon & Kaporta Hasarı (Öncesi)', category: 'chery' },
  { src: '/img/cherry2.jpeg', title: 'Chery Tampon & Kaporta Onarımı (Sonrası)', category: 'chery' },
  { src: '/img/img2.jpeg', title: 'Tampon Söküm ve Gövde Düzeltme', category: 'kaporta' },
  { src: '/img/img1.jpeg', title: 'Kaporta Yüzey ve Astar Hazırlığı', category: 'kaporta' },
  { src: '/img/img4.jpg', title: 'Atölye İçi Plastik Kaynak Çalışması', category: 'plastik' },
  { src: '/img/img6.jpg', title: 'Kaza Sonrası Panel Hizalama', category: 'kaporta' },
  { src: '/img/img8.jpg', title: 'Fırın Boya & Renk Eşleştirme', category: 'kaporta' },
  { src: '/img/img9.jpg', title: 'Tampon Çatlak Kaynak & Zımpara', category: 'plastik' },
  { src: '/img/img10.jpg', title: 'Gövde ve Çamurluk Restorasyonu', category: 'kaporta' },
  { src: '/img/img12.jpg', title: 'Komple Kaporta Teslimat Aşaması', category: 'kaporta' },
]

const services = [
  {
    title: 'Kaporta Onarım & Düzeltme',
    desc: 'Göçük düzeltme, derin çizik onarımı ve kaza sonrası şase/gövde doğrultma. Fabrika parça hatlarını koruyarak kusursuz işçilik.',
    img: '/img/img2.jpeg',
    link: '/kaporta',
    icon: <Car className="w-5 h-5 text-amber-500" />,
    badge: 'Usta İşçilik',
    bullets: [
      'Boyasız hassas göçük düzeltme',
      'Kaza sonrası panel ve şase doğrultma',
      'Fabrika orijinal sac formunu koruma',
    ],
  },
  {
    title: 'Plastik Tampon & Parça Kaynağı',
    desc: 'Kırık, çatlak tamponlar, far tırnakları ve radyatör kazanları garantili olarak onarılır. Sıfır parça masrafından %70 tasarruf edin.',
    img: '/img/img4.jpg',
    link: '/plastik-kaynak',
    icon: <Wrench className="w-5 h-5 text-amber-500" />,
    badge: 'Ekonomik & Dayanıklı',
    bullets: [
      'Hammaddeye uygun iç ve dış kaynak',
      'Kırık far ayağı ve ızgara tırnak tamiri',
      '%70 parça değişim tasarrufu',
    ],
  },
  {
    title: 'Fırın Boya & Lokal Boya',
    desc: 'Bilgisayarlı renk kodu analizi ile ton farkı olmadan lokal ve parça fırın boya. Güneş yanığı ve lekelere karşı garantili dayanıklılık.',
    img: '/img/img8.jpg',
    link: '/kaporta',
    icon: <Flame className="w-5 h-5 text-amber-500" />,
    badge: 'Birebir Renk Uyumu',
    bullets: [
      'Bilgisayarlı renk kodu eşleştirme',
      'Fırın ortamında tozsuz uygulama',
      'Solma ve vernik atmasına karşı garanti',
    ],
  },
  {
    title: 'Çıkma & Sıfır Yedek Parça',
    desc: 'Orijinal çıkma tampon, panjur, far ayağı, dodik ve kaporta parçaları. Uygun bütçeli, montaja hazır geniş stok imkanı.',
    img: '/img/img10.jpg',
    link: '/yedek-parca',
    icon: <Layers className="w-5 h-5 text-amber-500" />,
    badge: 'Geniş Stok',
    bullets: [
      'Orijinal çıkma tampon ve panjurlar',
      'Geniş marka ve model parça stoğu',
      'Montaja ve boyaya hazır teslimat',
    ],
  },
]

const reasons = [
  {
    icon: <Award className="w-6 h-6 text-amber-500" />,
    title: 'Resmi Ustalık Belgesi & 15+ Yıl',
    desc: 'Mersin Otoyol Sanayi Sitesi’nde 15 yılı aşkın süredir resmi ustalık belgesi ve onaylı yetkinlikle hizmet veriyoruz.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-amber-500" />,
    title: 'Orijinal Parça Koruma',
    desc: 'Yan sanayi uyumsuz parçalar yerine, aracınızın fabrikasyon orijinal parçalarını onararak değerini koruyoruz.',
  },
  {
    icon: <Wrench className="w-6 h-6 text-amber-500" />,
    title: 'Modern Ekipman & Kaynak',
    desc: 'Plastik hammaddeye özel elektrot tabancaları, lazerli doğrultma tezgâhı ve fırın boya altyapısıyla çalışıyoruz.',
  },
  {
    icon: <BadgePercent className="w-6 h-6 text-amber-500" />,
    title: 'Şeffaf Fiyat & Sürpriz Yok',
    desc: 'İşleme başlamadan önce net ücret belirlenir. İş bittiğinde asla beklenmedik ek masraflarla karşılaşmazsınız.',
  },
  {
    icon: <Clock className="w-6 h-6 text-amber-500" />,
    title: 'Aynı Gün & Zamanında Teslim',
    desc: 'Çoğu tampon kaynak ve lokal onarım işlemi aynı gün tamamlanır; randevulu işlerde söz verilen saatte teslim edilir.',
  },
  {
    icon: <Zap className="w-6 h-6 text-amber-500" />,
    title: 'Yazılı İşçilik Garantisi',
    desc: 'Yaptığımız her plastik kaynak, göçük düzeltme ve boya işleminin arkasındayız; dayanıklılık garantisi veriyoruz.',
  },
]

const steps = [
  {
    step: '01',
    title: 'Fotoğraf & Hasar Keşfi',
    desc: 'Aracınızın hasarlı kısmını WhatsApp’tan fotoğraf olarak gönderin veya atölyemize uğrayın. Ustanız hasarı anında incelesin.',
    tag: 'Hızlı Tespit',
  },
  {
    step: '02',
    title: 'Şeffaf Fiyat & Onay',
    desc: 'Gereksiz parça değişimine gitmeden en ekonomik ve sağlam çözüm planını, net ücreti ve teslim saatini sizinle paylaşalım.',
    tag: 'Sürprizsiz Masraf',
  },
  {
    step: '03',
    title: 'Titiz İşçilik & Teslimat',
    desc: 'Fabrikasyon standartlarında onarılan, kontrolleri yapılan ve temizlenen aracınızı işçilik garantisiyle teslim alın.',
    tag: 'Garantili Çözüm',
  },
]

const faqs = [
  {
    q: 'Onarım ne kadar sürer?',
    a: 'Çoğu lokal göçük, çizik ve tampon plastik kaynak işlemi aynı gün içerisinde tamamlanır. Kapsamlı kaporta ve fırın boya gerektiren onarımlar ise hasarın durumuna göre 1 ila 3 iş günü arasında teslim edilmektedir.',
  },
  {
    q: 'Boya uyumu nasıl sağlanır?',
    a: 'Aracınızın orijinal renk kodu ve yüzey dokusu özel formüllerle analiz edilir. Renk tonu ve vernik yapısı fırın ortamında birebir eşleştirilerek ton farkı oluşması engellenir.',
  },
  {
    q: 'Yaptığınız işlemlere garanti veriyor musunuz?',
    a: 'Evet! Atölyemizde yapılan tüm plastik kaynak, kaporta ve boya işlemlerinde işçilik garantisi veriyoruz. Detaylı garanti koşulları hasar tespiti sonrasında sizinle paylaşılır.',
  },
  {
    q: 'Fiyatlar nasıl belirleniyor?',
    a: 'Parça türü, hasarın derinliği, plastik kaynak ihtiyacı ve işçilik süresine göre tamamen şeffaf bir fiyatlandırma yapıyoruz. Aracınızı getirdiğinizde veya WhatsApp üzerinden hasar fotoğrafı gönderdiğinizde net ve sürprizsiz teklifimizi iletiyoruz.',
  },
  {
    q: 'Randevu almak gerekli mi?',
    a: 'Hızlı onarımlar ve hasar tespiti için önceden haber vererek ya da doğrudan atölyemize uğrayarak gelebilirsiniz. Yoğunluk durumuna göre aynı gün işleme başlayabilmemiz için gelmeden önce telefon veya WhatsApp ile bilgi vermeniz önerilir.',
  },
  {
    q: 'Ödeme seçenekleri nelerdir?',
    a: 'Nakit ve banka havalesi / EFT kabul ediyoruz. Ziraat Bankası ve diğer bankalar üzerinden ödemelerinizi kolayca gerçekleştirebilirsiniz.',
  },
]

export default function Home({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [activeImgIndex, setActiveImgIndex] = useState(0)
  const [openFaq, setOpenFaq] = useState(0)

  const filteredGallery = galleryData.filter((item) => {
    if (activeTab === 'all') return true
    return item.category === activeTab
  })

  const openLightbox = (index) => {
    setActiveImgIndex(index)
    setLightboxOpen(true)
  }

  return (
    <div className="space-y-16 sm:space-y-24 bg-slate-50 dark:bg-[#090d16] text-slate-800 dark:text-slate-100 transition-colors duration-200">
      {/* 1. HERO SECTION (DUAL THEME) */}
      <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/60 dark:from-[#0f172a] dark:via-[#0b1120] dark:to-[#090d16] border-b border-slate-200/80 dark:border-white/10">
        {/* Subtle Ambient Workshop Lighting Texture */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
          <img
            src="/img/hero_ambient_bg.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-center opacity-10 dark:opacity-20 mix-blend-multiply dark:mix-blend-screen filter saturate-125 transition-opacity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-white/80 dark:from-[#090d16] dark:via-transparent dark:to-[#0f172a]/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-transparent to-white/90 dark:from-[#0f172a]/95 dark:via-transparent dark:to-[#0b1120]/90" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col: Hero Pitch */}
            <div className="lg:col-span-7 space-y-6">
              {/* Minimalist Badge Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-slate-300 text-xs font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>Mersin Otoyol Otomotiv • 15+ Yıllık Usta Tecrübesi</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.12]">
                TAMPONCU <span className="text-amber-500">ÖZKAN</span> USTA
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
                Mersin'de araç kaporta, tampon onarımı, plastik kaynak ve fırın boyada garantili usta el işçiliği. Hasarlı parçalarınızı değiştirmeden orijinal formunda onararak %70 tasarruf sağlayın.
              </p>

              {/* Action Buttons (Minimalist, Balanced & Responsive) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                <button
                  onClick={onOpenQuote}
                  className="px-5 py-3.5 rounded-xl bg-gradient-to-r from-sky-400 via-cyan-300 to-sky-400 hover:from-sky-300 hover:via-cyan-200 hover:to-sky-300 text-slate-950 font-bold text-sm tracking-wide shadow-[0_2px_18px_rgba(56,189,248,0.35)] hover:shadow-[0_4px_24px_rgba(56,189,248,0.5)] border border-sky-100/90 transition-all duration-200 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-slate-950" />
                  <span>Hızlı Fiyat Teklifi Al</span>
                </button>

                <a
                  href="https://wa.me/905323533063?text=Merhaba%20Özkan%20Usta,%20aracımın%20hasar%20fotoğrafını%20iletiyorum.%20Fiyat%20öğrenebilir%20miyim?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp ile Hasar Gönder</span>
                </a>

                <a
                  href="tel:+905323533063"
                  className="px-5 py-3.5 rounded-xl bg-white dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/90 text-slate-800 dark:text-slate-100 font-bold text-sm border border-slate-200 dark:border-slate-700 shadow-xs transition-all flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95"
                >
                  <Phone className="w-4 h-4 text-amber-500" />
                  <span>0532 353 30 63</span>
                </a>
              </div>

              {/* Minimalist Unified Trust Strip */}
              <div className="pt-4 border-t border-slate-200/60 dark:border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-600 dark:text-slate-400 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Ustalık Garantisi</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Aynı Gün Teslim</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>%70 Tasarruf</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Birebir Renk Uyumu</span>
                </div>
              </div>
            </div>

            {/* Right Col: Interactive Multi-Project Showcase */}
            <div className="lg:col-span-5">
              <HeroShowcase />
            </div>
          </div>
        </div>
      </section>

      {/* 2. METRICS COUNTER BAR (REFERANS SİTE MİMARİSİ) */}
      <MetricsBar />

      {/* 3. SERVICES SECTION (HİZMETLERİMİZ) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300 text-xs font-bold tracking-wider uppercase border border-amber-200 dark:border-amber-500/20">
            HİZMETLERİMİZ
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Neler Yapıyoruz?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Modern araçların hassas kaporta ve plastik aksamlarına uygun özel teknikler ve garantili işçilik sunuyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-xl hover:border-amber-300 dark:hover:border-amber-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Card Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md text-slate-900 dark:text-white text-xs font-bold border border-slate-200 dark:border-slate-700 shadow-sm">
                    {service.badge}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-500/10 border border-amber-100 dark:border-amber-500/20">
                        {service.icon}
                      </div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  {/* Bullet points */}
                  <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-600 dark:text-slate-300">
                    {service.bullets.map((b, bi) => (
                      <div key={bi} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="p-6 pt-0">
                <Link
                  to={service.link}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 hover:bg-amber-400 dark:hover:bg-amber-400 hover:text-slate-950 text-slate-800 dark:text-slate-200 text-xs font-bold transition-all flex items-center justify-between group/link"
                >
                  <span>Detaylı Bilgi & Teklif</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE US (NEDEN ÖZKAN USTA? - 6 KURUMSAL SÜTUN) */}
      <section className="bg-slate-100/80 dark:bg-[#0b1120] border-y border-slate-200/80 dark:border-slate-800/80 py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-block px-3.5 py-1 rounded-full bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300 text-xs font-bold tracking-wider uppercase border border-amber-200 dark:border-amber-500/20">
              GÜVEN & ŞEFFAFLIK
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Neden Tamponcu Özkan Usta?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Mersin sanayisinde güvenilir, sözünde duran ve titiz işçiliğiyle tanınan atölyemizin avantajları:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200/90 dark:border-slate-800 shadow-xs hover:shadow-xl hover:border-amber-300 dark:hover:border-amber-500/40 transition-all duration-300 space-y-3 flex flex-col items-start group"
              >
                <div className="p-3.5 rounded-2xl bg-amber-50 dark:bg-amber-500/10 border border-amber-100 dark:border-amber-500/20 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. QUALITY ASSURANCE (GARANTİLİ ONARIM STANDARTLARI) */}
      <QualityAssurance onOpenQuote={onOpenQuote} />

      {/* 6. 3-STEP PROCESS (ONARIM SÜRECİMİZ) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-block px-3.5 py-1 rounded-full bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300 text-xs font-bold tracking-wider uppercase border border-amber-200 dark:border-amber-500/20">
            ADIM ADIM ÇÖZÜM
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Onarım Sürecimiz Nasıl İşler?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Hasar tespitinden anahtar teslimine kadar geçen şeffaf adımlarımız:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div
              key={s.step}
              className="relative p-8 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div className="text-6xl font-black text-slate-100 dark:text-slate-800/40 absolute -right-2 -top-2 select-none group-hover:text-amber-500/10 transition-colors">
                {s.step}
              </div>
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-amber-400 dark:bg-amber-500 text-slate-950 font-black flex items-center justify-center text-sm shadow-sm">
                    {s.step}
                  </div>
                  <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                    {s.tag}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">{s.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. MASTER PROFILE (USTAMIZI TANIYIN) */}
      <MasterProfile />

      {/* 8. CUSTOMER TESTIMONIALS (MÜŞTERİ DENEYİMLERİ) */}
      <Testimonials />

      {/* 9. FILTERABLE LIGHTBOX MINI GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-block px-3.5 py-1 rounded-full bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300 text-xs font-bold tracking-wider uppercase border border-amber-200 dark:border-amber-500/20 mb-2">
              GERÇEK İŞLERİMİZ
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Atölyemizden Kareler
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
              Fotoğrafları tam ekran ve detaylı incelemek için üzerlerine tıklayabilirsiniz.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'Tümü', key: 'all' },
              { label: 'Kaporta Onarım', key: 'kaporta' },
              { label: 'Plastik & Tampon', key: 'plastik' },
              { label: 'Chery Restorasyon', key: 'chery' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeTab === tab.key
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-bold shadow-xs'
                    : 'bg-white dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredGallery.map((item, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-400 shadow-xs hover:shadow-md cursor-pointer transition-all"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                <span className="text-[11px] font-bold text-amber-300 line-clamp-2">
                  {item.title}
                </span>
                <span className="text-[10px] text-white flex items-center gap-1 mt-1 font-medium">
                  <Maximize2 className="w-3 h-3" /> Büyüt
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. FAQ ACCORDION SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-block px-3.5 py-1 rounded-full bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300 text-xs font-bold tracking-wider uppercase border border-amber-200 dark:border-amber-500/20">
            SIKÇA SORULAN SORULAR
          </div>
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">Merak Edilenler</h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Fiyatlandırma, onarım süreleri ve garanti kapsamı hakkında detaylar:
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index
            return (
              <div
                key={index}
                className="rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 text-slate-900 dark:text-white font-bold text-sm sm:text-base hover:text-amber-600 dark:hover:text-amber-400 transition"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </section>

      {/* 11. BOTTOM ACTION CTA CARDS (REFERANS SİTE MİMARİSİ) */}
      <ContactCTA onOpenQuote={onOpenQuote} />

      {/* Lightbox Modal */}
      <LightboxModal
        images={filteredGallery}
        currentIndex={activeImgIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onPrev={() =>
          setActiveImgIndex((prev) => (prev === 0 ? filteredGallery.length - 1 : prev - 1))
        }
        onNext={() =>
          setActiveImgIndex((prev) => (prev === filteredGallery.length - 1 ? 0 : prev + 1))
        }
      />
    </div>
  )
}
