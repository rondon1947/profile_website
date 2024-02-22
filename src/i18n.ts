// i18n.js
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

// Import translations
import translationEN from './locales/en/translation.json';
import translationDE from './locales/de/translation.json';
import translationFR from './locales/fr/translation.json';
import translationHI from './locales/hi/translation.json';
import translationES from './locales/es/translation.json';

// Initialize i18next
i18n
    .use(initReactI18next) // bind react-i18next to i18next
    .init({
        resources: {
            en: {
                translation: translationEN
            },
            de: {
                translation: translationDE
            },
            fr: {
                translation: translationFR
            },
            hi: {
                translation: translationHI
            },
            es: {
                translation: translationES
            }
        },
        lng: localStorage.getItem('lang') || 'en', // default language
        fallbackLng: 'en', // fallback language
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
