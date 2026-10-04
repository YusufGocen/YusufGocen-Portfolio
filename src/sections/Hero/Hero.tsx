import { useLanguage } from '../../i18n/Language';
import { useEffect, useRef } from 'react';
import { Header } from '../../components/layout/Header';
import './hero.css';
export function Hero() {
  const { t } = useLanguage();
  const stage = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = stage.current;
    if (!element) return;
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    const update = () => {
      frame = 0;
      const distance = Math.max(1, element.offsetHeight - window.innerHeight);
      const progress = Math.min(
        1,
        Math.max(0, -element.getBoundingClientRect().top / distance),
      );
      element.style.setProperty(
        '--scroll-progress',
        String(media.matches ? 0 : progress),
      );
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    media.addEventListener('change', schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      media.removeEventListener('change', schedule);
    };
  }, []);
  return (
    <div className="hero-stage" ref={stage} id="home">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-art" aria-hidden="true" />
        <div className="hero-wash" aria-hidden="true" />
        <Header />
        <div className="hero-copy">
          <h1 id="hero-title">Yusuf Göçen</h1>
          <p className="hero-role">Software Developer</p>
          <p className="hero-description">
            {t('Fikirleri web ve mobil deneyimlere dönüştürüyorum.')}
          </p>
        </div>
        <footer className="hero-meta">
          <span>{t('İstanbul, Türkiye')}</span>
          <span className="hero-stack">
            React <i>·</i> React Native <i>·</i> Java <i>·</i> Spring Boot
          </span>
          <a href="#about" className="scroll-cue">
            {t('Kaydır')} <span aria-hidden="true">↓</span>
          </a>
        </footer>
      </section>
    </div>
  );
}
