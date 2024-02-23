export const changeEntireWebsiteLanguage = (i18n: { changeLanguage: (language: string) => void }, language: string) => {
    localStorage.setItem('lang', language);
    i18n.changeLanguage(language);
}

export const getFullLanguageName = (language: string) => {
    switch (language) {
        case 'en':
            return 'English';
        case 'de':
            return 'German';
        case 'fr':
            return 'French';
        case 'hi':
            return 'Hindi';
        case 'es':
            return 'Spanish';
        default:
            return 'English';
    }
}