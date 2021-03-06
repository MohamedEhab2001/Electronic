import i18n from "i18next";
import {  initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';


i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs : ["en" , "ar"],
    fallbackLng: "en",
    detection : {
        order: [ 'localStorage' , 'cookie', 'htmlTag'],
        caches: ['localStorage', 'cookie'],
    },
    backend : {
        loadPath: '/assets/i18n/translations/{{lng}}.json',
    },
    react : {
        useSuspense : false
    }
  });
export default i18n;