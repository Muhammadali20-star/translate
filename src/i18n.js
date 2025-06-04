import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en/translation.json'; // Import your translation files
import esTranslations from './locales/ru/translation.json';
import uzTranslations from './locales/uz/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations,
      },
      ru: {
        translation: esTranslations,
      },
      uz: {
        translation: uzTranslations,
      },
    },
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;