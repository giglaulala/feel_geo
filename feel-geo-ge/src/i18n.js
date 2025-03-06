import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "./locales/en/translation.json";
import geTranslation from "./locales/ge/translation.json";

i18n
  .use(LanguageDetector) // Detects user's language
  .use(initReactI18next) // Connects i18next with React
  .init({
    resources: {
      en: { translation: enTranslation },
      ge: { translation: geTranslation },
    },
    fallbackLng: "en", // Default language
    detection: {
      order: ["localStorage", "navigator"], // Detect language from localStorage or browser
      caches: ["localStorage"], // Save language choice in localStorage
    },
    interpolation: {
      escapeValue: false, // React already escapes content
    },
  });

export default i18n;
