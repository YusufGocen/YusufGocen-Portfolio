import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import { english } from './en';
type Language = 'tr' | 'en';
const Context = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
  t: (text: string) => string;
} | null>(null);
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      return localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'tr';
    } catch {
      return 'tr';
    }
  });
  useEffect(() => {
    document.documentElement.lang = language;
    try {
      localStorage.setItem('portfolio-language', language);
    } catch {
      /* Storage can be unavailable. */
    }
  }, [language]);
  const t = (text: string) =>
    language === 'en' ? (english[text] ?? text) : text;
  return (
    <Context.Provider value={{ language, setLanguage, t }}>
      {children}
    </Context.Provider>
  );
}
export function useLanguage() {
  const value = useContext(Context);
  if (!value) throw new Error('LanguageProvider is required');
  return value;
}
