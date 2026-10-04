# Yusuf Göçen — Portfolio

React, TypeScript ve Vite ile geliştirilen kişisel portfolio sitesi. Türkçe ve İngilizce içerik, farklı ekran boyutlarına uyumlu tasarım ve proje detay galerileri içerir.

## Bölümler

- Giriş ve Hakkımda
- Deneyim
- Teknik yetkinlikler
- Filtrelenebilir projeler ve proje detayları
- İletişim, sosyal bağlantılar ve CV

## Yerel çalıştırma

Node.js 22.12 veya üzeri gerekir.

```bash
npm ci
npm run dev
```

## Production derlemesi

```bash
npm run build
npm run preview
```

Yayınlanmaya hazır dosyalar `dist/` klasöründe oluşturulur.

## Proje yapısı

- `src/sections/`: sayfa bölümleri ve stilleri
- `src/components/`: ortak bileşenler
- `src/data/`: profil ve proje içerikleri
- `src/i18n/`: dil yönetimi ve İngilizce çeviriler
- `src/styles/`: genel stiller
- `public/`: görseller, teknoloji logoları ve CV

## Yayınlama

Vercel veya Cloudflare Pages üzerinde GitHub deposundan yayınlanabilir.

| Ayar | Değer |
| --- | --- |
| Framework | Vite |
| Build command | `npm run build` |
| Output directory | `dist` |
| Root directory | Depo kökü |
| Node.js | 22.12+ |

`node_modules`, derleme çıktıları, yerel önizlemeler, yayın ZIP dosyaları ve deneme yedekleri Git deposuna dahil edilmez. Bağımlılıkların aynı sürümlerle kurulması için `package-lock.json` depoda tutulur.
