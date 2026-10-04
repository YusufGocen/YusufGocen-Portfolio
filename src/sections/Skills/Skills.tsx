import { useLanguage } from '../../i18n/Language';
import './skills.css';

const groups = [
  {
    title: 'Diller',
    items: [
      ['JavaScript', 'javascript'],
      ['TypeScript', 'typescript'],
      ['Java', 'java'],
      ['Python', 'python'],
      ['SQL', 'sql'],
    ],
  },
  {
    title: 'Web & Mobil',
    items: [
      ['React', 'react'],
      ['React Native', 'react'],
      ['Next.js', 'nextjs'],
      ['Redux', 'redux'],
      ['HTML / CSS', 'html5'],
      ['Tailwind CSS', 'tailwindcss'],
    ],
  },
  {
    title: 'Backend & Veri',
    items: [
      ['Spring Boot', 'spring'],
      ['PostgreSQL', 'postgresql'],
      ['Spring Security', 'shield'],
      ['REST API', 'api'],
      ['JWT', 'lock'],
    ],
  },
  {
    title: 'Araçlar & Geliştirme',
    items: [
      ['Git', 'git'],
      ['GitHub', 'github'],
      ['Postman', 'postman'],
      ['Swagger / OpenAPI', 'swagger'],
      ['Expo', 'expo'],
    ],
  },
];

function TechnologyIcon({ name }: { name: string }) {
  if (['shield', 'api', 'lock'].includes(name)) {
    return (
      <svg
        className="technology-icon"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {name === 'shield' ? (
          <>
            <path
              d="M16 3 27 7v8c0 7-6 11-11 14C11 26 5 22 5 15V7Z"
              fill="currentColor"
              fillOpacity=".12"
            />
            <path d="m10 15 4 4 8-9" />
          </>
        ) : name === 'lock' ? (
          <>
            <rect
              x="7"
              y="14"
              width="18"
              height="15"
              rx="3"
              fill="currentColor"
              fillOpacity=".15"
            />
            <path d="M10 14V9a6 6 0 0 1 12 0v5M16 20v4" />
          </>
        ) : (
          <>
            <path d="m10 9-7 7 7 7m12-14 7 7-7 7M18 5l-4 22" />
          </>
        )}
      </svg>
    );
  }
  return (
    <span
      className="technology-icon technology-logo"
      style={{
        maskImage: `url(${import.meta.env.BASE_URL}images/technologies/${name}.svg?v=2)`,
        WebkitMaskImage: `url(${import.meta.env.BASE_URL}images/technologies/${name}.svg?v=2)`,
      }}
      aria-hidden="true"
    />
  );
}

export function Skills() {
  const { t } = useLanguage();
  return (
    <section
      id="skills"
      className="skills-section"
      aria-labelledby="skills-title"
    >
      <div className="skills-inner">
        <div className="skills-intro">
          <p className="eyebrow">{t('04 / TEKNİK YETKİNLİKLER')}</p>
          <h2 id="skills-title">
            {t('Teknik')}
            <br />
            {t('altyapım')}
            <span>.</span>
          </h2>
          <p className="skills-subtitle">
            {t('Web, mobil ve backend geliştirmede kullandığım teknolojiler.')}
          </p>
          <span className="skills-accent" aria-hidden="true" />
        </div>
        <div className="skills-cards">
          {groups.map((group, index) => (
            <article className="skills-card" key={t(group.title)}>
              <div className="skills-card-heading">
                <h3>{t(group.title)}</h3>
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <ul className="skills-technologies" aria-label={t(group.title)}>
                {group.items.map(([label, icon]) => (
                  <li key={label}>
                    <TechnologyIcon name={icon} />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
