import { useLanguage } from '../../i18n/Language';
import { useState } from 'react';
export function Header() {
  const { t, language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  return (
    <header
      className="header"
      onKeyDown={(event) => {
        if (event.key === 'Escape') setOpen(false);
      }}
    >
      <a className="wordmark" href="#home">
        Yusuf Göçen
      </a>
      <button
        className="menu-toggle"
        type="button"
        aria-label={t(open ? 'Menüyü kapat' : 'Menüyü aç')}
        aria-expanded={open}
        aria-controls="hero-navigation"
        onClick={() => setOpen(!open)}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <path d={open ? 'M6 6l12 12M6 18 18 6' : 'M4 6h16M4 12h16M4 18h16'} />
        </svg>
      </button>
      <nav
        id="hero-navigation"
        aria-label={t('Ana menü')}
        className={open ? 'navigation is-open' : 'navigation'}
      >
        <a href="#about" onClick={() => setOpen(false)}>
          {t('Hakkımda')}
        </a>
        <a href="#experience" onClick={() => setOpen(false)}>
          {t('Deneyim')}
        </a>
        <a href="#skills" onClick={() => setOpen(false)}>
          {t('Yetkinlikler')}
        </a>
        <a href="#projects" onClick={() => setOpen(false)}>
          {t('Projeler')}
        </a>
        <a href="#contact" onClick={() => setOpen(false)}>
          {t('İletişim')}
        </a>
        <a
          className="nav-cv"
          href={`${import.meta.env.BASE_URL}cv/Yusuf-Gocen-CV.pdf`}
          target="_blank"
          rel="noreferrer"
        >
          CV
          <svg
            className="nav-cv-arrow"
            width="15"
            height="15"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M3 13 13 3M5 3h8v8" />
          </svg>
        </a>
        <div
          className="language-switch"
          role="group"
          aria-label={t('Site dili')}
        >
          <button
            type="button"
            className={`language-button${language === 'tr' ? ' is-active' : ''}`}
            aria-pressed={language === 'tr'}
            onClick={() => setLanguage('tr')}
            aria-label="Türkçe"
          >
            TR
          </button>
          <button
            type="button"
            className={`language-button${language === 'en' ? ' is-active' : ''}`}
            aria-pressed={language === 'en'}
            onClick={() => setLanguage('en')}
            aria-label="English"
          >
            EN
          </button>
        </div>
      </nav>
    </header>
  );
}
