export interface WeeklyProject {
  id: number;
  week: number;
  title: string;
  category: 'Full-Stack' | 'Frontend & UI' | 'Dashboard & Veri' | 'Mobil Web' | 'Yapay Zeka' | 'Araçlar & Utility';
  shortDesc: string;
  fullDesc: string;
  techStack: string[];
  features: string[];
  status: 'completed' | 'in-progress' | 'planned';
  demoUrl: string;
  githubUrl: string;
  date: string;
  difficulty: 'Temel' | 'Orta' | 'İleri' | 'Uzman';
  colorGradient: string;
}

export const INITIAL_WEEKS_DATA: WeeklyProject[] = [
  {
    id: 1,
    week: 1,
    title: "TaskFlow: Akıllı Görev ve Kanban Panosu",
    category: "Frontend & UI",
    shortDesc: "Sürükle-bırak destekli, etiketleme ve önceliklendirme özellikli minimalist görev yönetim panosu.",
    fullDesc: "Modern iş akışları için optimize edilmiş, yerel depolama senkronizasyonlu, sütun bazlı sürükle ve bırak mimarisine sahip reaktif görev organizatörü.",
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Motion"],
    features: ["Sürükle & bırak Kanban sütunları", "Öncelik filtreleme & renk kodlaması", "Yerel depolama desteği"],
    status: "completed",
    demoUrl: "https://taskflow-demo.tatoglu.dev",
    githubUrl: "https://github.com/huseyintatoglu/hafta-01-taskflow",
    date: "Hafta 1 · Mart 2026",
    difficulty: "Temel",
    colorGradient: "from-blue-900 to-indigo-950"
  },
  {
    id: 2,
    week: 2,
    title: "Aura Weather: Mikro-İklim & Radar Portalı",
    category: "Dashboard & Veri",
    shortDesc: "Konum tabanlı anlık hava durumu, 7 günlük tahmin ve dinamik SVG hava animasyonları.",
    fullDesc: "Hava durumu API'leri ile entegre, anlık yağış radarı simülasyonu, UV indeksi ve rüzgar hızı grafikleri sunan görsel iklim monitörü.",
    techStack: ["React", "Chart.js", "OpenWeather API", "Tailwind"],
    features: ["Saatlik ve haftalık sıcaklık grafiği", "Şehir arama & otomatik coğrafi konum", "Görsel hava partikül efektleri"],
    status: "completed",
    demoUrl: "https://auraweather.tatoglu.dev",
    githubUrl: "https://github.com/huseyintatoglu/hafta-02-aura-weather",
    date: "Hafta 2 · Mart 2026",
    difficulty: "Orta",
    colorGradient: "from-slate-900 to-blue-950"
  },
  {
    id: 3,
    week: 3,
    title: "Zenith Commerce: Modern E-Ticaret Arayüzü",
    category: "Frontend & UI",
    shortDesc: "Filtrelenebilir ürün kataloğu, anlık sepet çekmecesi ve simüle edilmiş ödeme süreci.",
    fullDesc: "Lüks marka kimliğine uygun, varyant seçimi, dinamik kupon hesaplayıcı ve ultra hızlı filtreleme mekanizmalarıyla donatılmış alışveriş deneyimi.",
    techStack: ["Next.js", "TypeScript", "Zustand", "Stripe Checkout"],
    features: ["Anlık sepet hesaplama ve kupon sistemi", "Detaylı ürün galeri ve yakınlaştırma", "Kategori ve fiyat aralığı filtreleme"],
    status: "completed",
    demoUrl: "https://zenith-commerce.tatoglu.dev",
    githubUrl: "https://github.com/huseyintatoglu/hafta-03-zenith-commerce",
    date: "Hafta 3 · Mart 2026",
    difficulty: "İleri",
    colorGradient: "from-amber-950/40 to-blue-950"
  },
  {
    id: 4,
    week: 4,
    title: "CryptoPulse: Kripto Para Analiz & Takip Terminali",
    category: "Dashboard & Veri",
    shortDesc: "Canlı piyasa verileri, mum grafikleri ve portföy kâr/zarar simülatörü.",
    fullDesc: "Finansal veri akışları için optimize edilmiş, WebSocket fiyat güncellemeleri ve kişisel izleme listesi barındıran borsa panosu.",
    techStack: ["React", "CoinGecko API", "TradingView Lightweight", "Tailwind"],
    features: ["Canlı fiyat akışı ve piyasa hacmi", "Etkileşimli mum ve çizgi grafikleri", "Kişisel portföy kâr hesaplayıcı"],
    status: "completed",
    demoUrl: "https://cryptopulse.tatoglu.dev",
    githubUrl: "https://github.com/huseyintatoglu/hafta-04-cryptopulse",
    date: "Hafta 4 · Nisan 2026",
    difficulty: "İleri",
    colorGradient: "from-blue-950 to-slate-900"
  },
  {
    id: 5,
    week: 5,
    title: "NoteCraft: Zengin Markdown ve Düşünce Defteri",
    category: "Araçlar & Utility",
    shortDesc: "Bölünmüş ekran canlı Markdown önizleme, etiket hiyerarşisi ve PDF dışa aktarma.",
    fullDesc: "Yazarlar ve yazılımcılar için dikkat dağıtmayan odak modu, sözdizimi vurgulama ve dosya ağacı yönetimi içeren dokümantasyon aracı.",
    techStack: ["React", "Markdown-it", "PrismJS", "Lucide React"],
    features: ["Çift panelli canlı önizleme", "Kod blokları için syntax highlighting", "Tek tıkla PDF ve Markdown indirme"],
    status: "completed",
    demoUrl: "https://notecraft.tatoglu.dev",
    githubUrl: "https://github.com/huseyintatoglu/hafta-05-notecraft",
    date: "Hafta 5 · Nisan 2026",
    difficulty: "Orta",
    colorGradient: "from-slate-950 to-indigo-950"
  },
  {
    id: 6,
    week: 6,
    title: "SoundWave: Web Audio Müzik ve Beat Çalar",
    category: "Frontend & UI",
    shortDesc: "Web Audio API ile çalışan görselleştirici, çalma listesi ve mikser katmanları.",
    fullDesc: "HTML5 Canvas tabanlı dinamik frekans spektrum görselleştiricisi, 8 bant ekolayzır ve lofi radyo akışı.",
    techStack: ["React", "Web Audio API", "HTML5 Canvas", "Tailwind"],
    features: ["Gerçek zamanlı ses spektrum dalgaları", "Özelleştirilebilir 8-bant ekolayzır", "Arka planda kesintisiz müzik çalma"],
    status: "completed",
    demoUrl: "https://soundwave.tatoglu.dev",
    githubUrl: "https://github.com/huseyintatoglu/hafta-06-soundwave",
    date: "Hafta 6 · Nisan 2026",
    difficulty: "İleri",
    colorGradient: "from-blue-900 to-amber-950/50"
  },
  {
    id: 7,
    week: 7,
    title: "FitPulse: Haftalık Egzersiz ve Kalori Takipçisi",
    category: "Mobil Web",
    shortDesc: "Mobil odaklı antrenman günlüğü, set/tekrar sayacı ve su tüketim hatırlatıcısı.",
    fullDesc: "PWA desteği ile telefon ana ekranına eklenebilen, offline çalışan ve haftalık gelişim hedeflerini özetleyen spor asistanı.",
    techStack: ["React", "IndexedDB", "PWA", "Tailwind CSS"],
    features: ["Özelleştirilebilir antrenman şablonları", "Setler arası dinlenme zamanlayıcısı", "Haftalık kalori ve makro grafikleri"],
    status: "completed",
    demoUrl: "https://fitpulse.tatoglu.dev",
    githubUrl: "https://github.com/huseyintatoglu/hafta-07-fitpulse",
    date: "Hafta 7 · Nisan 2026",
    difficulty: "Orta",
    colorGradient: "from-slate-900 to-blue-950"
  },
  {
    id: 8,
    week: 8,
    title: "ChefTable: Restoranlar İçin Dijital Menü & QR Sipariş",
    category: "Full-Stack",
    shortDesc: "Masa numarasına özel QR sipariş, mutfak panosu ve alerjen filtreli menü arayüzü.",
    fullDesc: "Restoran işletmeleri için garson çağırma, sipariş takip durumu ve çok dilli dijital menü platformu.",
    techStack: ["React", "Node.js", "Socket.io", "Tailwind"],
    features: ["Masa bazlı anlık sepetleme", "Mutfak ekranına anlık düşen bildirimler", "Vejetaryen/Glutensiz akıllı filtreler"],
    status: "completed",
    demoUrl: "https://cheftable.tatoglu.dev",
    githubUrl: "https://github.com/huseyintatoglu/hafta-08-cheftable",
    date: "Hafta 8 · Mayıs 2026",
    difficulty: "İleri",
    colorGradient: "from-amber-900/30 to-blue-950"
  },
  {
    id: 9,
    week: 9,
    title: "PixelMorph: SVG ve Görsel Dönüştürme Araç Kiti",
    category: "Araçlar & Utility",
    shortDesc: "Tarayıcı içi görsel sıkıştırma, SVG optimizasyonu ve CSS renk paleti çıkarıcı.",
    fullDesc: "Sunucuya dosya göndermeden tarayıcı Web Worker katmanında çalışan, gizlilik odaklı grafik ve renk üretim laboratuvarı.",
    techStack: ["React", "Web Workers", "Canvas API", "Tailwind"],
    features: ["Kayıpsız PNG/WebP sıkıştırma", "Yüklenen görselden dominant renk paleti çıkarma", "SVG kod temizleyici ve küçültücü"],
    status: "completed",
    demoUrl: "https://pixelmorph.tatoglu.dev",
    githubUrl: "https://github.com/huseyintatoglu/hafta-09-pixelmorph",
    date: "Hafta 9 · Mayıs 2026",
    difficulty: "Orta",
    colorGradient: "from-indigo-950 to-blue-900"
  },
  {
    id: 10,
    week: 10,
    title: "DevSnippet: Yazılımcılar İçin Kod Parçacığı Deposu",
    category: "Frontend & UI",
    shortDesc: "Çoklu dil destekli kod kütüphanesi, etiketleme ve tek tıkla kopyalama paneli.",
    fullDesc: "Sık kullanılan algoritma, hook ve CSS parçacıklarını etiketleyip saklayabileceğiniz, JSON formatında yedeklenebilen geliştirici kütüphanesi.",
    techStack: ["React 19", "PrismJS", "Lucide React", "Tailwind"],
    features: ["30+ programlama dili sözdizimi desteği", "Hızlı arama ve favorilere ekleme", "Gist ve yerel dosya dışa aktarımı"],
    status: "completed",
    demoUrl: "https://devsnippet.tatoglu.dev",
    githubUrl: "https://github.com/huseyintatoglu/hafta-10-devsnippet",
    date: "Hafta 10 · Mayıs 2026",
    difficulty: "Temel",
    colorGradient: "from-blue-950 to-slate-900"
  },
  {
    id: 11,
    week: 11,
    title: "OmniChat: Gerçek Zamanlı Çok Odalı Sohbet Odaları",
    category: "Full-Stack",
    shortDesc: "WebSocket tabanlı anlık mesajlaşma, yazıyor göstergesi ve dosya paylaşımı.",
    fullDesc: "Grup kanalları, uçtan uca hızlı mesaj iletimi, okundu bilgisi ve emoji tepkileri barındıran modern mesajlaşma platformu.",
    techStack: ["React", "WebSockets", "Tailwind", "Express"],
    features: ["Anlık mesajlaşma ve bildirim sesleri", "Özel oda oluşturma ve şifreleme", "Aktif kullanıcı listesi ve durum göstergesi"],
    status: "completed",
    demoUrl: "https://omnichat.tatoglu.dev",
    githubUrl: "https://github.com/huseyintatoglu/hafta-11-omnichat",
    date: "Hafta 11 · Mayıs 2026",
    difficulty: "İleri",
    colorGradient: "from-blue-900 to-amber-950/40"
  },
  {
    id: 12,
    week: 12,
    title: "FinWise: Kişisel Gelir-Gider & Bütçe Yönetimi",
    category: "Dashboard & Veri",
    shortDesc: "Aylık tasarruf hedefleri, kategori dağılım pastası ve fatura hatırlatıcı.",
    fullDesc: "Gider kalemlerini görselleştiren interaktif grafikler, tekrarlayan abonelik takibi ve CSV bütçe dışa aktarımı.",
    techStack: ["React", "Recharts", "LocalStorage API", "Tailwind"],
    features: ["Gelir-gider pasta ve çubuk grafikleri", "Aylık harcama limiti uyarı sistemi", "Abonelik ve fatura takvimi"],
    status: "completed",
    demoUrl: "https://finwise.tatoglu.dev",
    githubUrl: "https://github.com/huseyintatoglu/hafta-12-finwise",
    date: "Hafta 12 · Haziran 2026",
    difficulty: "Orta",
    colorGradient: "from-slate-950 to-blue-950"
  },
  {
    id: 13,
    week: 13,
    title: "Lumina Studio: CSS Grid & Flexbox Görsel Oluşturucu",
    category: "Araçlar & Utility",
    shortDesc: "Etkileşimli CSS şablon tasarımcısı, otomatik temiz CSS kodu üretimi.",
    fullDesc: "Karmaşık CSS Grid ve Flexbox düzenlerini fare ile görsel olarak çizip tek tıkla React ve saf CSS kodunu kopyalayabileceğiniz tasarım stüdyosu.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Monaco Editor"],
    features: ["Sürükle-bırak hücre bölme ve boyutlandırma", "Anlık CSS ve Tailwind sınıf üretimi", "Önceden tanımlı popüler layout şablonları"],
    status: "completed",
    demoUrl: "https://luminastudio.tatoglu.dev",
    githubUrl: "https://github.com/huseyintatoglu/hafta-13-lumina-studio",
    date: "Hafta 13 · Haziran 2026",
    difficulty: "İleri",
    colorGradient: "from-blue-950 to-indigo-950"
  },
  {
    id: 14,
    week: 14,
    title: "HabitForge: 66 Günlük Alışkanlık ve Zinciri Kırma",
    category: "Mobil Web",
    shortDesc: "Jerry Seinfeld 'zinciri kırma' metodolojisine dayalı alışkanlık inşa aracı.",
    fullDesc: "Günlük başarı kutucukları, ısı haritası (GitHub stili) ve motive edici rozet sistemiyle alışkanlık takibi.",
    techStack: ["React", "Framer Motion", "Tailwind", "Canvas Confetti"],
    features: ["Yıllık GitHub tarzı aktivite ısı haritası", "Zincir kırılma uyarıları ve seri sayaçları", "Alışkanlık tamamlama tebrik animasyonları"],
    status: "completed",
    demoUrl: "https://habitforge.tatoglu.dev",
    githubUrl: "https://github.com/huseyintatoglu/hafta-14-habitforge",
    date: "Hafta 14 · Haziran 2026",
    difficulty: "Temel",
    colorGradient: "from-amber-950/30 to-blue-900"
  },
  {
    id: 15,
    week: 15,
    title: "ResumeArchitect: İnteraktif CV & Portfolyo Oluşturucu",
    category: "Araçlar & Utility",
    shortDesc: "ATS dostu modern CV şablonları, anlık A4 baskı ve PDF dönüştürücü.",
    fullDesc: "Yazılımcılar ve tasarımcılar için tipografik olarak kusursuz, çok dilli ve özelleştirilebilir bloklara sahip özgeçmiş editörü.",
    techStack: ["React", "Tailwind CSS", "Print Stylesheets", "Lucide"],
    features: ["5 farklı profesyonel şablon seçeneği", "Bölümleri yeniden sıralama ve gizleme", "Doğrudan A4 PDF formatında kaydetme"],
    status: "completed",
    demoUrl: "https://resumearchitect.tatoglu.dev",
    githubUrl: "https://github.com/huseyintatoglu/hafta-15-resumearchitect",
    date: "Hafta 15 · Haziran 2026",
    difficulty: "Orta",
    colorGradient: "from-blue-950 to-slate-900"
  },
  {
    id: 16,
    week: 16,
    title: "QuizMaster: Gerçek Zamanlı Bilgi Yarışması & Trivia",
    category: "Frontend & UI",
    shortDesc: "Geri sayım sayacı, skor tablosu, ses efektleri ve kategori bazlı testler.",
    fullDesc: "Arkadaşlarla yarışabileceğiniz, genel kültür, sinema ve yazılım sorularından oluşan eğlenceli trivia motoru.",
    techStack: ["React", "Howler.js", "Motion", "Tailwind CSS"],
    features: ["Zaman karşı yarış sayaç mekanizması", "Dinamik puan hesaplama ve sıralama", "Görsel ve sesli geri bildirimler"],
    status: "completed",
    demoUrl: "https://quizmaster.tatoglu.dev",
    githubUrl: "https://github.com/huseyintatoglu/hafta-16-quizmaster",
    date: "Hafta 16 · Temmuz 2026",
    difficulty: "Temel",
    colorGradient: "from-blue-900 to-indigo-950"
  },
  {
    id: 17,
    week: 17,
    title: "PromptCraft: Yapay Zeka Komut Tasarımcısı & Kütüphanesi",
    category: "Yapay Zeka",
    shortDesc: "LLM modelleri için optimize edilmiş prompt şablonları ve değişken enjektörü.",
    fullDesc: "Yapay zeka asistanları için rol, ton, format parametrelerini birleştirip ideal prompt üreten verimlilik aracı.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Clipboard API"],
    features: ["Değişken tanımlı dinamik şablonlar", "Hazır prompt kütüphanesi kategorileri", "Token sayısı yaklaşık tahmini"],
    status: "completed",
    demoUrl: "https://promptcraft.tatoglu.dev",
    githubUrl: "https://github.com/huseyintatoglu/hafta-17-promptcraft",
    date: "Hafta 17 · Temmuz 2026",
    difficulty: "Orta",
    colorGradient: "from-amber-950/40 to-blue-950"
  },
  {
    id: 18,
    week: 18,
    title: "FocusFlow: Pomodoro Zamanlayıcı & Beyaz Gürültü",
    category: "Araçlar & Utility",
    shortDesc: "25/5 çalışma döngüleri, yağmur/şömine arka plan sesleri ve odak istatistikleri.",
    fullDesc: "Gözü yormayan minimalist koyu tema arayüz, ambient ses mikseri ve günlük odaklanma süresi kayıt paneli.",
    techStack: ["React", "Web Audio API", "LocalStorage", "Tailwind"],
    features: ["Özelleştirilebilir çalışma ve mola süreleri", "Kombine edilebilir doğa ve lofi sesleri", "Günlük verimlilik ve odak istatistikleri"],
    status: "completed",
    demoUrl: "https://focusflow.tatoglu.dev",
    githubUrl: "https://github.com/huseyintatoglu/hafta-18-focusflow",
    date: "Hafta 18 · Temmuz 2026",
    difficulty: "Temel",
    colorGradient: "from-slate-950 to-blue-900"
  },
  {
    id: 19,
    week: 19,
    title: "GeoVoyage: Dünya Şehirleri Keşif & Gezi Rehberi",
    category: "Frontend & UI",
    shortDesc: "Etkileşimli harita, popüler mekanlar, bütçe tahminleri ve seyahat rotası.",
    fullDesc: "Dünyanın 100+ şehri için gezilecek yerler, para birimi çevirici ve kişiselleştirilmiş seyahat planlayıcısı.",
    techStack: ["React", "Mapbox GL / Leaflet", "Unsplash API", "Tailwind"],
    features: ["Harita üzerinde pinleme ve rota çizimi", "Günlük tahmini bütçe hesaplayıcı", "Gezilecek yerler fotoğraf galerisi"],
    status: "completed",
    demoUrl: "https://geovoyage.tatoglu.dev",
    githubUrl: "https://github.com/huseyintatoglu/hafta-19-geovoyage",
    date: "Hafta 19 · Temmuz 2026",
    difficulty: "İleri",
    colorGradient: "from-blue-950 to-indigo-950"
  },
  {
    id: 20,
    week: 20,
    title: "LinkVault: Çoklu Biyografi & Akıllı Link Ağacı",
    category: "Mobil Web",
    shortDesc: "Sosyal medya için tek link profili, tıklama analitiği ve tema özelleştirici.",
    fullDesc: "Instagram ve Twitter biyografilerine yönelik, sarı-lacivert veya özel temalarla anında üretilebilen link sayfası platformu.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "QRCode Generator"],
    features: ["Özelleştirilebilir buton renk ve animasyonları", "Tıklanma analitik sayacı", "Dinamik profil QR kod oluşturucu"],
    status: "completed",
    demoUrl: "https://linkvault.tatoglu.dev",
    githubUrl: "https://github.com/huseyintatoglu/hafta-20-linkvault",
    date: "Hafta 20 · Ağustos 2026",
    difficulty: "Temel",
    colorGradient: "from-blue-900 to-amber-950/40"
  },
  {
    id: 21,
    week: 21,
    title: "VibePoll: Anlık Oylama & Canlı Katılımcı Anketi",
    category: "Full-Stack",
    shortDesc: "Toplantı ve etkinlikler için QR kodla oylama ve anlık çubuk animasyonları.",
    fullDesc: "Sunum yapan konuşmacıların katılımcılardan gerçek zamanlı oy toplayıp sahnede canlı grafiklerle sunmasını sağlayan etkileşimli araç.",
    techStack: ["React", "Socket.io", "Tailwind", "Motion"],
    features: ["Katılımcı oy verir vermez güncellenen grafik", "Çoktan seçmeli ve kelime bulutu modları", "Mobil uyumlu anlık katılım arayüzü"],
    status: "completed",
    demoUrl: "https://vibepoll.tatoglu.dev",
    githubUrl: "https://github.com/huseyintatoglu/hafta-21-vibepoll",
    date: "Hafta 21 · Ağustos 2026",
    difficulty: "İleri",
    colorGradient: "from-indigo-950 to-blue-950"
  },
  {
    id: 22,
    week: 22,
    title: "CardioPulse: Sağlık Ölçümleri & EKG Dalga Simülatörü",
    category: "Dashboard & Veri",
    shortDesc: "Tıbbi parametre takibi, tansiyon grafiği ve Canvas EKG ritim animasyonu.",
    fullDesc: "Kullanıcıların kan basıncı, nabız ve kan şekeri kayıtlarını tutabileceği, hekime gösterilebilir rapor üreten sağlık paneli.",
    techStack: ["React", "HTML5 Canvas", "Chart.js", "Tailwind"],
    features: ["Gerçekçi EKG kalp atım ritmi simülasyonu", "Ölçüm risk seviyelerine göre renkli uyarılar", "Haftalık sağlık raporu özeti"],
    status: "completed",
    demoUrl: "https://cardiopulse.tatoglu.dev",
    githubUrl: "https://github.com/huseyintatoglu/hafta-22-cardiopulse",
    date: "Hafta 22 · Ağustos 2026",
    difficulty: "Orta",
    colorGradient: "from-slate-950 to-blue-900"
  },
  {
    id: 23,
    week: 23,
    title: "CodeArena: 2 Oyunculu Algoritma Hız Düellosu",
    category: "Frontend & UI",
    shortDesc: "İki yazılımcının aynı anda mini kod problemlerini çözdüğü hız platformu.",
    fullDesc: "Monaco kod editörü entegrasyonlu, otomatik test senaryoları çalıştıran ve kimin daha hızlı olduğunu ölçen yarışma oyunu.",
    techStack: ["React", "Monaco Editor", "Jest Runner Mock", "Tailwind"],
    features: ["Sol ve sağ ekran kod karşılaştırma", "Anlık çalışan birim test sonuçları", "Zaman ve bellek skoru derecelendirmesi"],
    status: "completed",
    demoUrl: "https://codearena.tatoglu.dev",
    githubUrl: "https://github.com/huseyintatoglu/hafta-23-codearena",
    date: "Hafta 23 · Ağustos 2026",
    difficulty: "Uzman",
    colorGradient: "from-blue-950 to-amber-950/50"
  },
  {
    id: 24,
    week: 24,
    title: "ColorPalette Studio: Yapay Zeka Renk Armonisi & UI Testi",
    category: "Araçlar & Utility",
    shortDesc: "Kontrast skoru (WCAG), renk körlüğü simülasyonu ve canlı UI önizleme.",
    fullDesc: "Tasarımcıların seçtiği renk paletini anında sahte bir buton, kart ve menü üzerinde canlı test edebildiği erişilebilirlik stüdyosu.",
    techStack: ["React", "Chroma-js", "Tailwind CSS", "Motion"],
    features: ["WCAG 2.1 AA/AAA kontrast oran hesaplayıcı", "Deuteranopi/Protanopi renk körlüğü filtresi", "Tailwind CSS config formatında dışa aktarma"],
    status: "completed",
    demoUrl: "https://colorpalette.tatoglu.dev",
    githubUrl: "https://github.com/huseyintatoglu/hafta-24-colorpalette",
    date: "Hafta 24 · Ağustos 2026",
    difficulty: "Orta",
    colorGradient: "from-blue-900 to-indigo-950"
  },
  {
    id: 25,
    week: 25,
    title: "DocuSignLite: Tarayıcı İçi PDF İmzalama & Kaşeleme",
    category: "Araçlar & Utility",
    shortDesc: "PDF yükleme, el yazısı imza çizimi ve mühür ekleme aracı.",
    fullDesc: "Tamamen istemci tarafında PDF-Lib kütüphanesi kullanarak gizliliği koruyan, imzalı dokümanı anında indiren iş aracı.",
    techStack: ["React", "PDF-Lib", "Canvas Signature Pad", "Tailwind"],
    features: ["Dokunmatik ve fare ile imza atma", "İmzayı PDF sayfalarında sürükleyip boyutlandırma", "Tarih ve onay kaşesi yerleştirme"],
    status: "in-progress",
    demoUrl: "https://docusignlite.tatoglu.dev",
    githubUrl: "https://github.com/huseyintatoglu/hafta-25-docusignlite",
    date: "Hafta 25 · Eylül 2026",
    difficulty: "İleri",
    colorGradient: "from-amber-950/40 to-blue-950"
  },
  {
    id: 26,
    week: 26,
    title: "StockVision: Yapay Zeka Destekli Borsa Örüntü Tanıma",
    category: "Dashboard & Veri",
    shortDesc: "Teknik analiz indikatörleri (RSI, MACD) ve yapay zeka formasyon tespiti.",
    fullDesc: "Hisse senedi ve endeks grafiklerinde omuz-baş-omuz, çift dip gibi teknik formasyonları otomatik saptayan finansal kontrol paneli.",
    techStack: ["React", "TradingView Lib", "Python API", "Tailwind"],
    features: ["10+ teknik gösterge katmanı", "Formasyon algılama uyarı sinyalleri", "Hisse karşılaştırma matrisi"],
    status: "in-progress",
    demoUrl: "https://stockvision.tatoglu.dev",
    githubUrl: "https://github.com/huseyintatoglu/hafta-26-stockvision",
    date: "Hafta 26 · Eylül 2026",
    difficulty: "Uzman",
    colorGradient: "from-blue-950 to-slate-900"
  },
  {
    id: 27,
    week: 27,
    title: "SmartReceipt: Fiş & Fatura OCR Masraf Ayrıştırıcı",
    category: "Yapay Zeka",
    shortDesc: "Fiş fotoğrafını tarayıp vergi, KDV ve toplam tutarı otomatik tablolayan sistem.",
    fullDesc: "Tesseract OCR ve LLM katmanı ile alışveriş fişlerini otomatik kategorize eden muhasebe asistanı.",
    techStack: ["React", "Tesseract.js", "Tailwind CSS", "Excel Export"],
    features: ["Görsel yükleyip saniyeler içinde metne çevirme", "KDV oranlarını ve işletme adını otomatik bulma", "Excel tablosu olarak indirme"],
    status: "in-progress",
    demoUrl: "https://smartreceipt.tatoglu.dev",
    githubUrl: "https://github.com/huseyintatoglu/hafta-27-smartreceipt",
    date: "Hafta 27 · Eylül 2026",
    difficulty: "İleri",
    colorGradient: "from-slate-950 to-blue-950"
  },
  {
    id: 28,
    week: 28,
    title: "NexusBoard: Ekipler İçin Sınırsız Sonsuz Beyaz Tahta",
    category: "Frontend & UI",
    shortDesc: "Zoom yapılabilir sonsuz tuval, yapışkan notlar ve çizim araçları.",
    fullDesc: "Miro tarzı sonsuz çalışma alanı, serbest çizim, şekiller, oklar ve metin kutuları barındıran beyin fırtınası tahtası.",
    techStack: ["React", "HTML5 Canvas / SVG", "Motion", "Tailwind"],
    features: ["Sonsuz kaydırma ve %10 - %500 zoom desteği", "Post-it yapışkan notlar ve serbest kalem", "PNG yüksek çözünürlüklü dışa aktarım"],
    status: "planned",
    demoUrl: "https://nexusboard.tatoglu.dev",
    githubUrl: "https://github.com/huseyintatoglu/hafta-28-nexusboard",
    date: "Hafta 28 · Ekim 2026",
    difficulty: "Uzman",
    colorGradient: "from-blue-900 to-indigo-950"
  },
  {
    id: 29,
    week: 29,
    title: "EchoPod: Sesli Notları Yapay Zeka ile Özetleme",
    category: "Yapay Zeka",
    shortDesc: "Mikrofondan ses kaydı alıp aksiyon maddeleri ve toplantı özeti çıkaran araç.",
    fullDesc: "Web Speech API ve AI özetleyicisi ile konuşmaları anında organize maddelere ve yapılacaklar listesine dönüştüren toplantı asistanı.",
    techStack: ["React", "Web Speech API", "Tailwind CSS", "Lucide"],
    features: ["Canlı konuşma-metin çevrimi", "Toplantı kararları ve eylem maddeleri tespiti", "Ses dosyasını yerel olarak indirme"],
    status: "planned",
    demoUrl: "https://echopod.tatoglu.dev",
    githubUrl: "https://github.com/huseyintatoglu/hafta-29-echopod",
    date: "Hafta 29 · Ekim 2026",
    difficulty: "İleri",
    colorGradient: "from-amber-950/40 to-blue-950"
  },
  {
    id: 30,
    week: 30,
    title: "OmniBuild 30: Büyük Final - Entegre Ekosistem & API Hub",
    category: "Full-Stack",
    shortDesc: "30 haftalık projelerin tümünü birbirine bağlayan merkez kontrol paneli.",
    fullDesc: "Hüseyin Tatoğlu'nun 30 haftalık maratonunun zirvesi: Tüm mikro-uygulamaları tek çatı altında toplayan, metrikleri canlı gösteren mega portal.",
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "Motion", "REST API"],
    features: ["30 uygulamanın ortak kimlik ve veri köprüsü", "Global arama motoru ve API entegrasyonu", "İnteraktif portfolyo sergi modu"],
    status: "planned",
    demoUrl: "https://omnibuild30.tatoglu.dev",
    githubUrl: "https://github.com/huseyintatoglu/hafta-30-omnibuild",
    date: "Hafta 30 · Ekim 2026",
    difficulty: "Uzman",
    colorGradient: "from-amber-500/20 via-blue-900 to-slate-950"
  }
];

const STORAGE_KEY = 'huseyin_tatoglu_weeks_data_v1';

export function loadWeeksData(): WeeklyProject[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length === 30) {
        return parsed;
      }
    }
  } catch (e) {
    console.error('Failed to load weeks data from localStorage', e);
  }
  return INITIAL_WEEKS_DATA;
}

export function saveWeeksData(data: WeeklyProject[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.error('Failed to save weeks data to localStorage', e);
  }
}

export function resetWeeksData(): WeeklyProject[] {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error(e);
  }
  return INITIAL_WEEKS_DATA;
}
