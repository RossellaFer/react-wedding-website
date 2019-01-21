//handling the translations
// import { translate, Trans } from "react-i18next";
import common_it from "../translations/it/common.json";
import common_en from "../translations/en/common.json";
import i18next from "i18next";
import LngDetector from "i18next-browser-languagedetector";

i18next.use(LngDetector).init({
  interpolation: { escapeValue: false }, // React already does escaping
  languages: ["en", "it"],
  fallbackLng: "en",
  resources: {
    en: {
      common: common_en // 'common' is our custom namespace
    },
    it: {
      common: common_it
    }
  }
});

export default i18next;
