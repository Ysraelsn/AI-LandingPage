import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      /**Navbar**/
      Home: "HOME",
      Features: "FEATURES",
      Experience: "EXPERIENCE",
      Discover: "DISCOVER",
      /*Hero*/
      HeroHeading: "THE FUTURE STARTS HERE",
    },
  },
  es: {
    translation: {
      /**Navbar**/
      Home: "INICIO",
      Features: "CARACTERÍSTICAS",
      Experience: "EXPERIENCIA",
      Discover: "DESCUBRE",
      /*Hero*/
      HeroHeading: "EL FUTURO COMIENZA AQUÍ",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es", //
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
