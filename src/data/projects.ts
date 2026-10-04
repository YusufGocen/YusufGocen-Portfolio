export type ProjectCategory = 'Web' | 'Mobil' | 'Full-stack';
export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  categories?: ProjectCategory[];
  additional?: boolean;
  description: string;
  detailedDescription?: string;
  features?: string[];
  technologies: string[];
  visual: 'dashboard' | 'focus' | 'tasks' | 'forecast' | 'fateful' | 'weather';
  image?: string;
  mobileMontage?: string;
  mobileScreens?: { src: string; label: string }[];
  screenshots?: { src: string; label: string }[];
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}
// Proje içerikleri ve görselleri. Bağlantılar ve teknoloji bilgileri geldikçe tamamlanır.
export const projects: Project[] = [
  {
    id: 'automotive',
    githubUrl:
      'https://github.com/YusufGocen/otomotiv-bayi-yonetim-sistemi-backend',
    title: 'Otomotiv Bayi Yönetim Sistemi',
    category: 'Full-stack',
    categories: ['Full-stack', 'Web'],
    description:
      'Araç, bayi, müşteri ve satış süreçlerini bir araya getiren full-stack yönetim sistemi.',
    detailedDescription:
      'Bayi süreçlerini tek sistemde yöneten full-stack uygulama. React/TypeScript arayüzü, Java/Spring Boot backend ile REST API üzerinden çalışır.',
    features: [
      'Araç, bayi, müşteri, satış, hesap ve adres kayıtlarında CRUD işlemleri.',
      'Controller, Service ve Repository katmanlarından oluşan mimari.',
      'Spring Data JPA, Hibernate ve PostgreSQL ile ilişkisel veri yönetimi.',
      'Spring Security, JWT ve erişim/yenileme tokenlarıyla kimlik doğrulama.',
      'TCMB döviz kuru servisiyle çoklu para biriminde araç fiyatlandırma.',
      'Swagger/OpenAPI ile API dokümantasyonu.',
    ],
    technologies: ['React', 'TypeScript', 'Java', 'Spring Boot', 'PostgreSQL'],
    visual: 'dashboard',
    screenshots: [
      {
        src: `${import.meta.env.BASE_URL}images/projects/automotive/dashboard.png`,
        label: 'Dashboard',
      },
      {
        src: `${import.meta.env.BASE_URL}images/projects/automotive/vehicles.png`,
        label: 'Araçlar',
      },
      {
        src: `${import.meta.env.BASE_URL}images/projects/automotive/login.png`,
        label: 'Giriş ekranı',
      },
    ],
    featured: true,
  },
  {
    id: 'pawsfocus',
    githubUrl: 'https://github.com/YusufGocen/PawsFocus-PomodoroApp',
    title: 'PawsFocus',
    category: 'Mobil',
    description:
      'Kişiselleştirilebilir odak ve mola süreleriyle Pomodoro deneyimi.',
    detailedDescription:
      'React Native ve TypeScript ile iOS ve Android için geliştirdiğim Pomodoro uygulaması. Kişiselleştirilebilir odak ve mola sürelerini animasyonlar ve video destekli seanslarla birleştirerek çalışma rutinini destekler.',
    features: [
      'Kullanıcıya göre ayarlanabilen odak ve mola zamanlayıcıları.',
      'Animasyon ve video destekli odaklanma ve dinlenme seansları.',
      'Kullanıcı tercihlerinin seanslar arasında korunması.',
      'iOS ve Android üzerinde çalışan ortak mobil arayüz.',
    ],
    technologies: ['React Native', 'TypeScript', 'Expo', 'iOS', 'Android'],
    visual: 'focus',
    screenshots: [
      {
        src: `${import.meta.env.BASE_URL}images/projects/pawsfocus/welcome.png`,
        label: 'Paws & Focus',
      },
      {
        src: `${import.meta.env.BASE_URL}images/projects/pawsfocus/deep-focus.png`,
        label: 'Deep Focus',
      },
      {
        src: `${import.meta.env.BASE_URL}images/projects/pawsfocus/mindful-breaks.png`,
        label: 'Mindful Breaks',
      },
      {
        src: `${import.meta.env.BASE_URL}images/projects/pawsfocus/focus-time.png`,
        label: 'Odak süresi seçimi',
      },
      {
        src: `${import.meta.env.BASE_URL}images/projects/pawsfocus/break-time.png`,
        label: 'Mola süresi seçimi',
      },
      {
        src: `${import.meta.env.BASE_URL}images/projects/pawsfocus/great-work.png`,
        label: 'Great Work!',
      },
    ],
    mobileScreens: [
      {
        src: `${import.meta.env.BASE_URL}images/projects/pawsfocus/welcome.png`,
        label: 'Paws & Focus karşılama ekranı',
      },
      {
        src: `${import.meta.env.BASE_URL}images/projects/pawsfocus/great-work.png`,
        label: 'Great Work! — Odak seansı tamamlandı',
      },
    ],
  },
  {
    id: 'task-management',
    githubUrl: 'https://github.com/YusufGocen/TaskManagement',
    title: 'Task Management',
    category: 'Mobil',
    description: 'Kanban panoları ve sürükle-bırak ile görev takibi.',
    detailedDescription:
      'React Native ile geliştirdiğim Kanban tabanlı görev yönetimi uygulaması. Kullanıcılar görevlerini panolar üzerinde düzenleyebilir, durumlarını takip edebilir ve sürükle-bırak etkileşimiyle görev akışını yönetebilir.',
    features: [
      'Görev ve panolarda oluşturma, görüntüleme, güncelleme ve silme işlemleri.',
      'Akıcı sürükle-bırak etkileşimiyle görevlerin düzenlenmesi.',
      'AsyncStorage ile uygulama verilerinin cihazda saklanması.',
    ],
    technologies: ['React Native', 'TypeScript', 'Expo', 'iOS', 'Android'],
    visual: 'tasks',
    mobileMontage: `${import.meta.env.BASE_URL}images/projects/task-management/screens.png`,
  },
  {
    id: 'bist30',
    githubUrl:
      'https://github.com/YusufGocen/YapayZeka-HisseSenediFiyatTahmini',
    title: 'BIST 30 Fiyat Tahmin Sistemi',
    category: 'Full-stack',
    categories: ['Full-stack', 'Web'],
    additional: true,
    description:
      'BIST 30 hisseleri için modelleri karşılaştıran, ertesi günün kapanış fiyatını tahmin eden sistem.',
    detailedDescription:
      'Seçilen BIST 30 hissesi için beş model karşılaştırılır; en başarılı modelle ertesi günün kapanış fiyatı tahmin edilir.',
    features: [
      'Doğrusal/Bayes Regresyonu, Karar Ağacı, Gradient Boosting ve Sinir Ağı karşılaştırması.',
      'yfinance ve Yahoo Finance ile 2018’den itibaren geçmiş fiyat verileri.',
      'Pandas ve NumPy ile verilerin hazırlanması ve ön işlenmesi.',
      'Streamlit ile etkileşimli hisse seçimi ve analiz paneli.',
      'Matplotlib ile gerçek/tahmin fiyatları ve model performansı grafikleri.',
    ],
    technologies: ['Python', 'Machine Learning', 'Pandas', 'NumPy'],
    visual: 'forecast',
    screenshots: [
      {
        src: `${import.meta.env.BASE_URL}images/projects/bist30/stock-price.png`,
        label: 'Model performansı',
      },
      {
        src: `${import.meta.env.BASE_URL}images/projects/bist30/stock-analysis.png`,
        label: 'Hisse analizi',
      },
    ],
    image: `${import.meta.env.BASE_URL}images/projects/bist30/stock-price.png`,
  },
  {
    id: 'fateful-moment',
    githubUrl: 'https://github.com/YusufGocen/fateful-moment',
    title: 'Fateful Moment',
    category: 'Mobil',
    additional: true,
    description:
      'Tarihî senaryolarda karar ver, seçimlerini Karar DNA’sı profilinde keşfet.',
    detailedDescription:
      'Tarihî senaryolarda verilen kararları Karar DNA’sı profiline dönüştüren React Native/Expo uygulaması. Hesap ekranları dikey, simülasyonlar yatay kullanıma uygundur.',
    features: [
      'Karşılama, kayıt, giriş, form doğrulama ve şifre sıfırlama arayüzleri.',
      'Expo SecureStore ile cihazda güvenli hesap kaydı ve giriş.',
      'Senaryo listesi, özet ve üç karar sorusuyla simülasyon akışı.',
      'Her senaryoya özel İngilizce soru ve cevap içerikleri.',
      'Avatar, radar grafik, güçlü yönler ve kör noktalarla Karar DNA’sı.',
      'Oynat/duraklat ve parça geçişiyle uygulama içi müzik oynatıcı.',
    ],
    technologies: ['React Native', 'TypeScript', 'Expo', 'iOS', 'Android'],
    visual: 'fateful',
    screenshots: [
      {
        src: `${import.meta.env.BASE_URL}images/projects/fateful-moment/welcome.png`,
        label: 'Karşılama',
      },
      {
        src: `${import.meta.env.BASE_URL}images/projects/fateful-moment/sign-in.png`,
        label: 'E-posta ile giriş',
      },
      {
        src: `${import.meta.env.BASE_URL}images/projects/fateful-moment/sign-up.png`,
        label: 'Hesap oluşturma',
      },
      {
        src: `${import.meta.env.BASE_URL}images/projects/fateful-moment/reset-password.png`,
        label: 'Şifre sıfırlama',
      },
      {
        src: `${import.meta.env.BASE_URL}images/projects/fateful-moment/scenarios.png`,
        label: 'Senaryolar',
      },
      {
        src: `${import.meta.env.BASE_URL}images/projects/fateful-moment/decision-dna.png`,
        label: 'Karar DNA’sı',
      },
      {
        src: `${import.meta.env.BASE_URL}images/projects/fateful-moment/scenario-briefing.png`,
        label: 'Senaryo başlangıcı',
      },
      {
        src: `${import.meta.env.BASE_URL}images/projects/fateful-moment/decision.png`,
        label: 'Karar ekranı',
      },
    ],
    image: `${import.meta.env.BASE_URL}images/projects/fateful-moment/screens.png`,
  },
  {
    id: 'weather',
    githubUrl: 'https://github.com/YusufGocen/ReactNative-WeatherApp',
    title: 'Weather App',
    category: 'Mobil',
    additional: true,
    description:
      'iOS ve Android üzerinde çalışan, şehir bazlı hava durumunu ve beş günlük tahmini gösteren mobil uygulama.',
    technologies: ['React Native', 'TypeScript', 'Expo', 'iOS', 'Android'],
    visual: 'weather',
    image: `${import.meta.env.BASE_URL}images/projects/weather/screens.png`,
  },
];
