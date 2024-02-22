// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translations
import translationEN from './locales/en/translation.json';

// Initialize i18next
i18n
    .use(initReactI18next) // bind react-i18next to i18next
    .init({
        resources: {
            en: {
                translation: translationEN
            },
            // fr: {
            //     translation: translationFR
            // }
        },
        lng: 'en', // default language
        fallbackLng: 'en', // fallback language
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
