import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { Language } from "src/types";

export default i18n;

export const i18nProducer: producer = ({ isReady = update.languages.isReady }) => {
  const path = "/locales/{{lng}}/{{ns}}.json";

  const i18nextOptions: any = {
    lng: Language.ENGLISH,
    ns: ["common"],
    defaultNS: "common",
    debug: true,
    backend: {
      loadPath: path,
    },
    fallbackLng: Language.ENGLISH,
  };

  i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init(i18nextOptions)
    .then((x: any) => {
      isReady.set(true);
    });
};
