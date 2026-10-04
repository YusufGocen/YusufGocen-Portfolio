import { useLanguage } from '../../i18n/Language';
import './experience.css';

const experiences = [
  {
    company: 'NeveraTech',
    role: 'Frontend Developer',
    period: 'Şub — Mar 2026',
    location: 'İstanbul · Uzaktan',
  },
  {
    company: 'Rast Mobile',
    role: 'Software Developer Intern',
    period: 'Eyl 2025 — Oca 2026',
    location: 'İstanbul · Ofisten',
  },
  {
    company: 'FLO Group',
    role: 'Intern',
    period: 'Ağu — Eyl 2025',
    location: 'İstanbul · Uzaktan',
  },
  {
    company: 'Smartiks Technology Solutions',
    role: 'Long-Term IT Intern',
    period: 'Eki 2024 — Haz 2025',
    location: 'İstanbul · Ofisten',
  },
];

function OrbitVisual() {
  return (
    <img
      className="experience-orbits"
      src={`${import.meta.env.BASE_URL}images/experience-orbits.png`}
      alt=""
      aria-hidden="true"
    />
  );
}

export function Experience() {
  const { t } = useLanguage();
  return (
    <section
      id="experience"
      className="experience-section"
      aria-labelledby="experience-title"
    >
      <div className="experience-inner">
        <div className="experience-intro">
          <p className="eyebrow">{t('03 / DENEYİM')}</p>
          <h2 id="experience-title">{t('Deneyim.')}</h2>
          <p className="experience-subtitle">
            {t('Web ve mobil geliştirme yolculuğum.')}
          </p>
          <OrbitVisual />
        </div>
        <ol className="experience-list">
          {experiences.map((experience, index) => (
            <li key={experience.company} className="experience-entry">
              <span className="experience-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="experience-detail">
                <div className="experience-heading">
                  <h3>{experience.company}</h3>
                  <span className="experience-period">
                    {t(experience.period)}
                  </span>
                </div>
                <p className="experience-role">{experience.role}</p>
                <p className="experience-location">{t(experience.location)}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
