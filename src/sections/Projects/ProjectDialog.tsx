import { useLanguage } from '../../i18n/Language';
import { useEffect, useRef, useState } from 'react';
import type { Project } from '../../data/projects';
import { ProjectVisual } from './ProjectVisual';
import './project-dialog.css';
interface GallerySlide {
  src: string;
  label: string;
  crop?: number;
  device?: 'weather-ios' | 'weather-android';
}
export function ProjectDialog({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const { t } = useLanguage();
  const dialog = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const screenshots =
    project.id === 'automotive' && project.screenshots
      ? [
          ...project.screenshots.filter((shot) => shot.src.endsWith('/login.png')),
          ...project.screenshots.filter((shot) => !shot.src.endsWith('/login.png')),
        ]
      : project.screenshots;
  const slides: GallerySlide[] =
    screenshots ??
    project.mobileScreens ??
    (project.mobileMontage
      ? [0, 1, 2, 3].map((i) => ({
          src: project.mobileMontage!,
          label: ['Karşılama', 'Görev panosu', 'Yeni görev', 'Görev detayı'][i],
          crop: i,
        }))
      : project.visual === 'weather' && project.image
        ? [
            {
              src: project.image,
              label: 'iPhone — iOS',
              device: 'weather-ios',
            },
            {
              src: project.image,
              label: 'Android cihaz',
              device: 'weather-android',
            },
          ]
        : project.image
          ? [{ src: project.image, label: project.title }]
          : []);
  const move = (direction: number) =>
    setIndex(
      (current) => (current + direction + slides.length) % slides.length,
    );
  useEffect(() => {
    const element = dialog.current!;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    element.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, []);
  const slide = slides[index];
  return (
    <dialog
      ref={dialog}
      className={`project-dialog ${['bist30', 'automotive', 'fateful-moment'].includes(project.id) ? 'project-dialog-condensed' : ''}`}
      aria-labelledby="project-dialog-title"
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          const rect = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
          )
            onClose();
        }
      }}
      onKeyDown={(event) => {
        if (slides.length > 1 && event.key === 'ArrowRight') {
          event.preventDefault();
          move(1);
        }
        if (slides.length > 1 && event.key === 'ArrowLeft') {
          event.preventDefault();
          move(-1);
        }
      }}
    >
      <button
        className="project-dialog-close"
        aria-label={t('Proje detayını kapat')}
        onClick={onClose}
        autoFocus
      >
        ×
      </button>
      <div className="project-dialog-layout">
        <div className={`project-dialog-gallery gallery-${project.visual}`}>
          <div className="dialog-gallery-top">
            <span>{t('PROJEYE YAKINDAN BAK')}</span>
            <span>
              {slides.length
                ? `${String(index + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`
                : t('ÖNİZLEME')}
            </span>
          </div>
          <div className="dialog-image-stage">
            {slide ? (
              slide.device ? (
                <div
                  className={`supplied-phone dialog-weather-device ${slide.device}`}
                  key={index}
                >
                  <img src={slide.src} alt={t(slide.label)} />
                </div>
              ) : slide.crop !== undefined ? (
                <div className="dialog-cropped-phone" key={index}>
                  <img
                    src={slide.src}
                    alt={t(slide.label)}
                    style={{
                      left: `${-[0, 111.5, 220.5, 329.25][slide.crop]}%`,
                    }}
                  />
                </div>
              ) : (
                <img
                  className={`dialog-project-image ${project.mobileScreens || project.visual === 'fateful' ? 'dialog-mobile-image' : ''} ${project.visual === 'fateful' && index >= 4 ? 'dialog-landscape-image' : ''}`}
                  key={index}
                  src={slide.src}
                  alt={t(slide.label)}
                />
              )
            ) : (
              <ProjectVisual project={project} />
            )}
          </div>
          <div className="dialog-gallery-controls">
            <button
              aria-label={t('Önceki görsel')}
              disabled={slides.length < 2}
              onClick={() => move(-1)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M19 12H5m6-6-6 6 6 6" />
              </svg>
            </button>
            <span aria-live="polite">
              {t(slide?.label ?? 'Ekran görüntüsü yakında eklenecek')}
            </span>
            <button
              aria-label={t('Sonraki görsel')}
              disabled={slides.length < 2}
              onClick={() => move(1)}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
        <div className="project-dialog-content">
          <div className="project-category">
            {(project.categories ?? [project.category])
              .map(t)
              .join(' / ')
              .toUpperCase()}
          </div>
          <h2 id="project-dialog-title">{t(project.title)}</h2>
          <div className="dialog-description">
            <span>{t('PROJE HAKKINDA')}</span>
            <p>{t(project.detailedDescription ?? project.description)}</p>
            {project.features && (
              <ul className="dialog-feature-list">
                {project.features.map((feature) => (
                  <li key={t(feature)}>{t(feature)}</li>
                ))}
              </ul>
            )}
          </div>
          {project.technologies.length > 0 && (
            <div className="dialog-technologies">
              <span>{t('TEKNOLOJİLER')}</span>
              <ul>
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          )}
          <div className="dialog-external-links">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                GitHub{' '}
                <span className="project-link-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noreferrer">
                {t('Canlı proje')}{' '}
                <span className="project-link-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            )}
          </div>
          <div className="dialog-signature">
            YUSUF GÖÇEN{' '}
            <span>
              {t('PORTFOLYO')} /{' '}
              {String(projectsIndex(project)).padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
    </dialog>
  );
}
function projectsIndex(project: Project) {
  return (
    [
      'automotive',
      'pawsfocus',
      'task-management',
      'bist30',
      'fateful-moment',
      'weather',
    ].indexOf(project.id) + 1
  );
}
