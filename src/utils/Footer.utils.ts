export const changeEntireWebsiteLanguage = (i18n: { changeLanguage: (language: string) => void }, language: string) => {
    localStorage.setItem('lang', language);
    i18n.changeLanguage(language);
}