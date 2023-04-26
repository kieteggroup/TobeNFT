import { useState } from 'react';
import translations from '../languages/translations';

const useChangeLanguage = () => {
    const [locale, setLocale] = useState('en');

    const t = (key) => translations[locale][key] || key;

    const changeLocale = (newLocale) => {
        setLocale(newLocale);
    };

    return { t, changeLocale };
};

export default useChangeLanguage;
