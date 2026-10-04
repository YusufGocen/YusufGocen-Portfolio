import { useLanguage } from '../../i18n/Language';
import './contact.css';

function ExternalArrow() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 16 16 4M6 4h10v10" />
    </svg>
  );
}

export function Contact() {
  const { t } = useLanguage();
  return (
    <footer
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="contact-inner">
        <h2 className="eyebrow" id="contact-title">
          {t('06 / İLETİŞİM')}
        </h2>
        <div className="contact-columns">
          <div className="contact-column contact-reach">
            <h3>{t('Ulaş')}</h3>
            <p>{t('Doğrudan yaz:')}</p>
            <a className="contact-email" href="mailto:yusufgocenn0@gmail.com">
              yusufgocenn0@gmail.com
            </a>
            <p className="contact-location">{t('İstanbul, Türkiye')}</p>
          </div>
          <nav className="contact-column" aria-label={t('Alt menü')}>
            <h3>{t('Gezinti')}</h3>
            <div className="contact-navigation">
              <a href="#about">{t('Hakkımda')}</a>
              <a href="#experience">{t('Deneyim')}</a>
              <a href="#projects">{t('Projeler')}</a>
              <a href="#skills">{t('Teknik Yetkinlikler')}</a>
            </div>
          </nav>
          <div className="contact-column contact-social">
            <h3>{t('Sosyal')}</h3>
            <a
              href="https://www.linkedin.com/in/yusufgocen"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ExternalArrow />
            </a>
            <a
              href="https://github.com/YusufGocen"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ExternalArrow />
            </a>
            <a
              href={`${import.meta.env.BASE_URL}cv/Yusuf-Gocen-CV.pdf`}
              target="_blank"
              rel="noreferrer"
            >
              CV <ExternalArrow />
            </a>
          </div>
          <div className="contact-column contact-top">
            <h3>{t('Başa dön')}</h3>
            <a
              href="#home"
              className="back-to-top"
              aria-label={t('Sayfanın başına dön')}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 20V4m-7 7 7-7 7 7" />
              </svg>
            </a>
          </div>
        </div>
        <div className="contact-credits">
          <span>
            © {new Date().getFullYear()} Yusuf Göçen.{' '}
            {t('Tüm hakları saklıdır.')}
          </span>
        </div>
      </div>
      <div className="contact-signature" aria-hidden="true">
        <svg viewBox="0 0 1000 157" width="100%" aria-hidden="true">
          <defs>
            <linearGradient
              id="signature-gradient"
              x1="0"
              y1="0"
              x2="0"
              y2="180"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#eeeff1" />
              <stop offset="0.35" stopColor="#bfc2c8" />
              <stop offset="0.7" stopColor="#82858c" />
              <stop offset="1" stopColor="#41444a" />
            </linearGradient>
          </defs>
          <text
            x="0"
            y="140"
            fontSize="175"
            fontWeight="400"
            textLength="1012"
            lengthAdjust="spacing"
            fill="url(#signature-gradient)"
          >
            Yusuf Göçen
          </text>
        </svg>
      </div>
    </footer>
  );
}
