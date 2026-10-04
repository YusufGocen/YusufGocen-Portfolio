import { useLanguage } from '../../i18n/Language';
function WindowBar({ label }: { label: string }) {
  return (
    <div className="visual-bar">
      <span className="window-dots">
        <i />
        <i />
        <i />
      </span>
      <span>{label}</span>
    </div>
  );
}
function SystemIcon({ kind }: { kind: 'database' | 'server' | 'cloud' }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      {kind === 'database' ? (
        <>
          <ellipse cx="20" cy="10" rx="10" ry="4" />
          <path d="M10 10v20c0 6 20 6 20 0V10M10 20c0 6 20 6 20 0" />
        </>
      ) : kind === 'server' ? (
        <>
          <rect x="8" y="7" width="24" height="11" rx="3" />
          <rect x="8" y="22" width="24" height="11" rx="3" />
          <path d="M13 12h2m4 0h8M13 27h2m4 0h8" />
        </>
      ) : (
        <path d="M11 30a7 7 0 0 1-1-14 10 10 0 0 1 19-2 8 8 0 0 1 0 16Z" />
      )}
    </svg>
  );
}
export function DevelopmentVisual() {
  const { t } = useLanguage();
  return (
    <div
      className="development-visual"
      role="img"
      aria-label={t(
        'Web arayüzü, mobil uygulama ve backend katmanlarını birleştiren görsel',
      )}
    >
      <div className="visual-orbit">
        <i />
      </div>
      <div className="visual-ground" />
      <div className="visual-web glass-panel">
        <WindowBar label="WEB" />
        <div className="web-content">
          <div className="landscape">
            <i className="landscape-sun" />
            <i className="mountain mountain-back" />
            <i className="mountain mountain-front" />
          </div>
          <div className="web-lines">
            <i />
            <i />
            <i />
            <span />
          </div>
          <div className="web-bottom">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
      <div className="visual-mobile glass-panel">
        <div className="phone-island">
          <i />
        </div>
        <span className="phone-side-button phone-volume" />
        <span className="phone-side-button phone-power" />
        <span className="phone-home-indicator" />
        <span className="phone-label">{t('MOBİL')}</span>
        <div className="mobile-profile">
          <i />
          <div>
            <span />
            <span />
          </div>
        </div>
        <div className="mobile-feature" />
        <div className="mobile-lines">
          <i />
          <i />
          <i />
        </div>
        <div className="mobile-tabs">
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="visual-backend glass-panel">
        <WindowBar label="BACKEND" />
        <div className="system-nodes">
          {(['database', 'server', 'cloud'] as const).map((kind) => (
            <div className="system-node" key={kind}>
              <SystemIcon kind={kind} />
            </div>
          ))}
        </div>
      </div>
      <span className="visual-caption">
        Web <i>·</i> {t('Mobil')} <i>·</i> Backend
      </span>
    </div>
  );
}
