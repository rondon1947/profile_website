import React from 'react';
import {useTranslation} from "react-i18next";
import {changeEntireWebsiteLanguage} from "../../../utils/Footer.utils";

const Footer = () => {
    const {t, i18n} = useTranslation();

    const changeLanguage = (event: { target: { value: string; }; }) => {
        changeEntireWebsiteLanguage(i18n, event.target.value);
    }

    return (
        <div>
            <span>{t('Footer.change_lang')}{'       '}</span>
            <select value={localStorage.getItem('lang') || 'en'} onChange={changeLanguage}>
                <option value="en">{t('Common.English')}</option>
                <option value="de">{t('Common.German')}</option>
                <option value="fr">{t('Common.French')}</option>
                <option value="hi">{t('Common.Hindi')}</option>
                <option value="es">{t('Common.Spanish')}</option>
            </select>
        </div>
    );
};
export default Footer;