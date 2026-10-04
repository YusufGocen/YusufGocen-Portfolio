import { useLanguage } from '../i18n/Language';
import { About } from '../sections/About/About';
import { Projects } from '../sections/Projects/Projects';
import { Experience } from '../sections/Experience/Experience';
import { Skills } from '../sections/Skills/Skills';
import { Contact } from '../sections/Contact/Contact';
import { Hero } from '../sections/Hero/Hero';
export function App() {
  const { t } = useLanguage();
  return (
    <>
      <a className="skip-link" href="#main">
        {t('İçeriğe geç')}
      </a>
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
