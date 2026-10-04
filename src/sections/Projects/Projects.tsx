import { useLanguage } from '../../i18n/Language';
import { useState } from 'react';
import {
  projects,
  type Project,
  type ProjectCategory,
} from '../../data/projects';
import { ProjectDialog } from './ProjectDialog';
import { ProjectVisual } from './ProjectVisual';
import './projects.css';
const filters = ['Tümü', 'Web', 'Mobil', 'Full-stack'] as const;
export function Projects() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<'Tümü' | ProjectCategory>('Tümü');
  const visible = projects.filter(
    (project) =>
      filter === 'Tümü' ||
      (project.categories ?? [project.category]).includes(filter),
  );
  const showWebPair = filter === 'Web' || filter === 'Full-stack';
  const primary = visible.filter(
    (project) => showWebPair || filter === 'Mobil' || !project.additional,
  );
  const additional = visible.filter(
    (project) => filter === 'Tümü' && project.additional,
  );
  return (
    <section
      id="projects"
      className="projects-section"
      aria-labelledby="projects-title"
    >
      <div className="projects-inner">
        <div className="projects-heading">
          <div>
            <div className="eyebrow">{t('05 / PROJELERİM')}</div>
            <h2 id="projects-title">{t('Koddan deneyime.')}</h2>
            <p>{t('Web, mobil ve full-stack çalışmalarım.')}</p>
          </div>
          <div
            className="project-filters"
            role="group"
            aria-label={t('Proje kategorisi')}
          >
            {filters.map((category) => (
              <button
                key={t(category)}
                aria-pressed={filter === category}
                onClick={() => setFilter(category)}
              >
                {t(category)}
              </button>
            ))}
          </div>
        </div>
        <div
          className={`projects-grid ${filter !== 'Tümü' ? 'is-filtered' : ''} ${showWebPair ? 'web-project-pair' : ''}`}
        >
          {primary.map((project) => (
            <article
              key={project.id}
              className={`project-card ${showWebPair ? 'project-pair-card' : project.additional ? 'project-compact project-mobile-extra' : project.featured ? 'project-featured' : 'project-compact'} project-theme-${project.visual}`}
            >
              <div className="project-card-copy">
                <div className="project-category">
                  {String(projects.indexOf(project) + 1).padStart(2, '0')} /{' '}
                  {t(project.category).toUpperCase()}
                </div>
                <h3>{t(project.title)}</h3>
                <p>{t(project.description)}</p>
              </div>
              <ProjectVisual project={project} />
              <div className="project-card-footer">
                <ul
                  className="project-technologies"
                  aria-label={t('Kullanılan teknolojiler')}
                >
                  {(filter === 'Tümü' && project.category === 'Mobil'
                    ? ['React Native', 'TypeScript']
                    : project.technologies
                  ).map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <button
                    className="project-inspect"
                    onClick={() => setSelectedProject(project)}
                    aria-label={`${t(project.title)} — ${t('Projeyi incele')}`}
                  >
                    {t('Projeyi incele')}{' '}
                    <span className="project-link-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </button>
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noreferrer">
                      {t('Projeyi incele')}{' '}
                      <span className="project-link-arrow" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      className="project-github"
                      aria-label={`${t(project.title)} — GitHub`}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub{' '}
                      <span className="project-link-arrow" aria-hidden="true">
                        ↗
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        {visible.length === 0 && (
          <div className="projects-empty">
            {t('Bu kategorideki projeler yakında eklenecek.')}
          </div>
        )}
        {additional.length > 0 && (
          <div className="additional-projects">
            <div className="additional-project-list">
              <span>{t('DİĞER ÇALIŞMALAR')}</span>
              {additional.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                >
                  {t(project.title)}
                  <span className="project-link-arrow" aria-hidden="true">
                    ↗
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      {selectedProject && (
        <ProjectDialog
          key={selectedProject.id}
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
