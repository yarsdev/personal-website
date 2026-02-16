import i18n from 'i18next';
import en from '../../assets/i18n/en.json';
import de from '../../assets/i18n/de.json';
import { initReactI18next } from 'react-i18next';

export const onLanguageChange = (language: string) => {
   i18n.changeLanguage(language);
};

export const initI18 = () => {
   i18n.use(initReactI18next).init({
      resources: {
         en: {
            translation: en,
         },
         de: {
            translation: de,
         },
      },
      lng: 'en',
      fallbackLng: 'en',

      interpolation: {
         escapeValue: false,
      },
   });
};
