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
          "home": {
            "title": "Welcome to Tattoo Studio",
            "description": "Transform your ideas into stunning tattoo art with our expert artists",
          },
          "welcome": "Welcome!",
          "about": "About Us",
          "appointment": "Appointment",
          "costEstimator": "Cost Estimator",
          "gallery": "Gallery",
        }
      },
      es: {
        translation: {
          "home": {
            "title": "Bienvenido a Tattoo Studio",
            "description": "Transforma tus ideas en arte tatuaje con nuestros expertos artistas",
          },
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