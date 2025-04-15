import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          "welcome": "Welcome!",
          "about": "About Us",
          "appointment": "Appointment",
          "costEstimator": "Cost Estimator",
          "gallery": "Gallery",
        }
      },
      es: {
        translation: {
          "welcome": "¡Bienvenido!",
          "about": "Sobre Nosotros",
          "appointment": "Cita",
          "costEstimator": "Estimador de Costos",
          "gallery": "Galería",
        }
      }
    },
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;