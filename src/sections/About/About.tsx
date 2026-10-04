import { useLanguage } from '../../i18n/Language';
import { useEffect, useRef, useState } from 'react';
import { profile } from '../../data/profile';
import { DevelopmentVisual } from './DevelopmentVisual';
import './about.css';
export function About() {
  const { t } = useLanguage();
  const section = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = section.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <section
      ref={section}
      id="about"
      className={`about-section${visible ? ' is-visible' : ''}`}
      aria-labelledby="about-title"
    >
      <div className="about-inner">
        <span className="eyebrow about-reveal">{t('02 / HAKKIMDA')}</span>
        <h2 id="about-title" className="about-title about-reveal">
          {t('Merhaba, ben')} <span>Yusuf.</span>
        </h2>
        <div className="about-content">
          <div className="about-copy about-reveal">
            <p>{t(profile.introduction)}</p>
            <p>{t(profile.approach)}</p>
            <div className="education">
              <span className="education-label">{t('EĞİTİM')}</span>
              <h3>{t(profile.education.university)}</h3>
              <p>{t(profile.education.degree)}</p>
              <div className="education-meta">
                <span>{profile.education.period}</span>
                <span className="education-location">
                  <svg
                    viewBox="0 0 20 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path d="M10 22S3 14 3 9a7 7 0 0 1 14 0c0 5-7 13-7 13Z" />
                    <circle cx="10" cy="9" r="2.5" />
                  </svg>
                  {t(profile.location)}
                </span>
              </div>
            </div>
          </div>
          <div className="about-art about-reveal">
            <DevelopmentVisual />
          </div>
        </div>
        <div className="about-footer">SOFTWARE DEVELOPER</div>
      </div>
    </section>
  );
}
