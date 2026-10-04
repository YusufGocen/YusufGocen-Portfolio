import { useLanguage } from '../../i18n/Language';
import type { Project } from '../../data/projects';

function Phone({
  variant,
  secondary = false,
}: {
  variant: 'focus' | 'tasks';
  secondary?: boolean;
}) {
  const { t } = useLanguage();
  return (
    <div className={`project-phone ${secondary ? 'phone-secondary' : ''}`}>
      <div className="project-phone-island" />
      <div className="phone-status">
        9:41 <span>••• ▰</span>
      </div>
      {variant === 'focus' ? (
        <div className={`focus-screen ${secondary ? 'focus-timer' : ''}`}>
          <small>{t(secondary ? 'ODAKLANMA' : 'KENDİNE BİR MOLA VER')}</small>
          {secondary ? (
            <>
              <strong>25:00</strong>
              <div className="timer-ring">
                <span>✦</span>
              </div>
              <div className="timer-play">▶</div>
              <p>{t('Bir adım daha ileri.')}</p>
            </>
          ) : (
            <>
              <h4>
                {t('Bugün neye')}
                <br />
                {t('odaklanıyoruz?')}
              </h4>
              <div className="focus-illustration">
                <div className="focus-sun" />
                <div className="focus-hill" />
                <span>☾</span>
              </div>
              <p>
                {t('Küçük adımlar.')}
                <br />
                {t('Büyük değişimler.')}
              </p>
            </>
          )}
        </div>
      ) : (
        <div className="tasks-screen">
          <small>{t(secondary ? 'HEDEFLER' : 'ÇALIŞMA ALANI')}</small>
          <h4>{t(secondary ? 'Bir adım ileri.' : 'Görevlerim')}</h4>
          <div className="task-progress">
            <span /> <span /> <span />
          </div>
          {(secondary
            ? ['Düzenli çalış', 'Yeni bir şey öğren', 'Kendine zaman ayır']
            : ['Portfolyo tasarımı', 'API entegrasyonu', 'Test senaryoları']
          ).map((task, i) => (
            <div className="phone-task" key={t(task)}>
              <span className="task-check">{i === 0 ? '✓' : '○'}</span>
              <span>
                {t(task)}
                <small>{t(['Tasarım', 'Geliştirme', 'Planlama'][i])}</small>
              </span>
            </div>
          ))}
          <div className="new-task">
            + {t(secondary ? 'Yeni hedef' : 'Yeni görev')}
          </div>
        </div>
      )}
      <div className="project-phone-home" />
    </div>
  );
}

export function ProjectVisual({ project }: { project: Project }) {
  const { t } = useLanguage();
  if (
    (project.visual === 'fateful' || project.visual === 'weather') &&
    project.image
  ) {
    const shots =
      project.visual === 'fateful'
        ? [
            { name: 'Giriş ekranı', theme: 'fateful-login' },
            { name: 'Karar DNA’sı', theme: 'fateful-dna' },
          ]
        : [
            { name: 'iOS hava durumu', theme: 'weather-ios' },
            { name: 'Android hava durumu', theme: 'weather-android' },
          ];
    return (
      <div
        className={`project-mobile-visual supplied-phone-pair pair-${project.visual}`}
      >
        {shots.map((shot) => (
          <a
            key={shot.theme}
            className={`supplied-phone ${shot.theme}`}
            href={project.image}
            target="_blank"
            rel="noreferrer"
            aria-label={`${t(project.title)} — ${t(shot.name)} ${t('görselini büyüt')}`}
          >
            <img src={project.image} alt={t(shot.name)} loading="lazy" />
          </a>
        ))}
      </div>
    );
  }
  if (project.additional && !project.screenshots?.length) {
    if (project.image)
      return (
        <a
          className="additional-project-image"
          href={project.image}
          target="_blank"
          rel="noreferrer"
          aria-label={`${t(project.title)} ${t('ekran görüntülerini büyüt')}`}
        >
          <img
            src={project.image}
            alt={`${t(project.title)} ${t('ekran görüntüleri')}`}
            loading="lazy"
          />
        </a>
      );
    return (
      <div
        className="forecast-preview"
        role="img"
        aria-label={t(
          'Fiyat tahmin projesi için temsili grafik; gerçek model çıktısı değildir',
        )}
      >
        <div className="forecast-caption">
          <span>{t('GEÇMİŞ → MODEL → TAHMİN')}</span>
          <span>AI</span>
        </div>
        <svg viewBox="0 0 400 170" aria-hidden="true">
          <defs>
            <linearGradient id="forecast-fill" x1="0" y1="0" x2="0" y2="1">
              <stop stopColor="#6dc5ff" stopOpacity=".3" />
              <stop offset="1" stopColor="#6dc5ff" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[35, 75, 115, 155].map((y) => (
            <path key={y} d={`M10 ${y}H390`} stroke="#d4e7ff22" />
          ))}
          <path
            d="M10 145L55 129L100 137L145 94L190 108L235 64L280 76L320 43L320 165H10Z"
            fill="url(#forecast-fill)"
          />
          <path
            d="M10 145L55 129L100 137L145 94L190 108L235 64L280 76L320 43"
            fill="none"
            stroke="#a2d8ff"
            strokeWidth="3"
          />
          <path
            d="M320 43L380 25"
            fill="none"
            stroke="#a2d8ff"
            strokeWidth="3"
            strokeDasharray="6 6"
          />
          <circle cx="320" cy="43" r="5" fill="#e2f4ff" />
        </svg>
        <small>{t('Temsili görsel · Proje ekranı eklenecek')}</small>
      </div>
    );
  }
  if (project.mobileMontage)
    return (
      <div className="project-mobile-visual task-montage-visual">
        {[
          { label: 'Görev panosu', className: 'task-board-shot' },
          { label: 'Görev detayı', className: 'task-detail-shot' },
        ].map((shot) => (
          <a
            className={`task-montage-phone ${shot.className}`}
            key={shot.className}
            href={project.mobileMontage}
            target="_blank"
            rel="noreferrer"
            aria-label={`${t(project.title)} — ${t(shot.label)} ${t('görselini büyüt')}`}
          >
            <img
              src={project.mobileMontage}
              alt={`${t(project.title)} — ${t(shot.label)}`}
              loading="lazy"
            />
          </a>
        ))}
      </div>
    );
  if (project.mobileScreens?.length)
    return (
      <div className="project-mobile-visual real-mobile-visual">
        {project.mobileScreens.map((screen, index) => (
          <a
            key={screen.src}
            className={`real-project-phone ${index ? 'real-phone-secondary' : ''}`}
            href={screen.src}
            target="_blank"
            rel="noreferrer"
            aria-label={`${t(project.title)} — ${t(screen.label)} ${t('görselini büyüt')}`}
          >
            <img src={screen.src} alt={t(screen.label)} loading="lazy" />
          </a>
        ))}
      </div>
    );
  if (project.screenshots?.length)
    return (
      <div className="project-screenshot-showcase">
        <div className="screenshot-stack">
          <div className="dashboard-orbit" aria-hidden="true" />
          {project.screenshots.map((shot, index) => (
            <a
              className={`screenshot-layer screenshot-layer-${index}`}
              href={shot.src}
              target="_blank"
              rel="noreferrer"
              key={shot.src}
              aria-label={`${t(project.title)} — ${t(shot.label)} ${t('görselini büyüt')}`}
            >
              <img
                src={shot.src}
                alt={`${t(project.title)} — ${t(shot.label)}`}
                loading="lazy"
              />
            </a>
          ))}
        </div>
        <div
          className="screenshot-gallery"
          aria-label={t('Proje ekran görüntüleri')}
        >
          {project.screenshots.map((shot) => (
            <a key={shot.src} href={shot.src} target="_blank" rel="noreferrer">
              {t(shot.label)} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>
    );
  if (project.image)
    return (
      <img
        className="project-image"
        src={project.image}
        alt={`${t(project.title)} ${t('ekran görüntüsü')}`}
        loading="lazy"
      />
    );
  if (project.visual === 'focus' || project.visual === 'tasks')
    return (
      <div
        className={`project-mobile-visual visual-${project.visual}`}
        aria-hidden="true"
      >
        <Phone variant={project.visual} />
        <Phone variant={project.visual} secondary />
      </div>
    );
  return (
    <div className="dashboard-scene" aria-hidden="true">
      <div className="dashboard-orbit" />
      <div className="dashboard-back back-left">
        <div className="mini-car" />
        <div className="mini-lines">
          <i />
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="dashboard-back back-right">
        <div className="mini-chart">
          {[35, 60, 45, 85, 70].map((h, i) => (
            <i key={i} style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="mini-donut" />
      </div>
      <div className="project-dashboard">
        <aside>
          <strong>
            ◈ <span>{t('OtoYönetim')}</span>
          </strong>
          {[
            'Ana Sayfa',
            'Araçlar',
            'Müşteriler',
            'Satışlar',
            'Servis',
            'Raporlar',
          ].map((item, i) => (
            <div key={t(item)} className={i === 0 ? 'dashboard-active' : ''}>
              <span>{['⌂', '▱', '◎', '↗', '⚙', '▥'][i]}</span>
              {t(item)}
            </div>
          ))}
        </aside>
        <div className="dashboard-body">
          <div className="dashboard-search">
            <span>{t('Araç, plaka veya müşteri ara…')}</span>
            <b>YG</b>
          </div>
          <div className="dashboard-stats">
            {[
              'Toplam Araç',
              'Müşteri Sayısı',
              'Bu Ay Satış',
              'Servisteki Araç',
            ].map((label, i) => (
              <div key={t(label)}>
                <span>{['▱', '◎', '↗', '⚙'][i]}</span>
                <p>
                  {t(label)}
                  <strong>{[24, 118, 7, 3][i]}</strong>
                </p>
              </div>
            ))}
          </div>
          <h4>
            {t('Araçlar')} <small>{t('Tümünü gör →')}</small>
          </h4>
          <div className="dashboard-cars">
            {['BMW 3 Serisi', 'Mercedes C Serisi', 'Audi A4'].map((car, i) => (
              <div key={car}>
                <div className={`mini-car car-${i}`} />
                <strong>{car}</strong>
                <small>{t("{t('2024 · Otomatik')}")}</small>
              </div>
            ))}
          </div>
          <h4>{t('Son Satışlar')}</h4>
          <div className="dashboard-table">
            <div>
              <span>{t('Tarih')}</span>
              <span>{t('Araç')}</span>
              <span>{t('Durum')}</span>
            </div>
            {['BMW 3 Serisi', 'Audi A4', 'Mercedes C Serisi'].map((car, i) => (
              <div key={car}>
                <span>
                  {12 - i} {t('Mart')} 2026
                </span>
                <span>{car}</span>
                <em>{t('Tamamlandı')}</em>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
