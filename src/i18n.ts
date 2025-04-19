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
          "Home": "Home",
          "Footer": "All rights reserved",
          "Welcome to our Website": "Welcome to our Website",
          "Navbar": {
            "About Us": "About Us",
            "Appointment": "Appointment",
            "Cost Estimator": "Cost Estimator",
            "Gallery": "Gallery"
          },
          "About": {
            "About the Company": "About the Company",
            "Our Mission": "Our Mission",
            "Our Vision": "Our Vision"
          },
          "Appointment": {
            "Schedule an Appointment": "Schedule an Appointment",
            "Select a Date": "Select a Date",
            "Select a Time": "Select a Time",
            "Your Name": "Your Name",
            "Your Email": "Your Email",
            "Additional Comments": "Additional Comments",
            "Submit": "Submit"
          },
          "Cost Estimator": {
            "Get a Cost Estimate": "Get a Cost Estimate",
            "Select the Material": "Select the Material",
            "Select the Size": "Select the Size",
            "Enter the Quantity": "Enter the Quantity",
            "Calculate": "Calculate"
          },
          "Gallery": {
            "Our Work": "Our Work"
          }
        }
      },
      es: {
        translation: {
          "Home": "Inicio",
          "Footer": "Todos los derechos reservados",
          "Welcome to our Website": "Bienvenido a nuestro sitio web",
          "Navbar": {
            "About Us": "Sobre Nosotros",
            "Appointment": "Cita",
            "Cost Estimator": "Estimador de Costos",
            "Gallery": "Galería"
          },
          "About": {
            "About the Company": "Acerca de la Compañía",
            "Our Mission": "Nuestra Misión",
            "Our Vision": "Nuestra Visión"
          },
          "Appointment": {
            "Schedule an Appointment": "Agendar una Cita",
            "Select a Date": "Seleccionar una Fecha",
            "Select a Time": "Seleccionar una Hora",
            "Your Name": "Tu Nombre",
            "Your Email": "Tu Email",
            "Additional Comments": "Comentarios Adicionales",
            "Submit": "Enviar"
          },
          "Cost Estimator": {
            "Get a Cost Estimate": "Obtener un Estimado de Costo",
            "Select the Material": "Seleccionar el Material",
            "Select the Size": "Seleccionar el Tamaño",
            "Enter the Quantity": "Ingresar la Cantidad",
            "Calculate": "Calcular"
          },
          "Gallery": {
            "Our Work": "Nuestro Trabajo"
          }
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