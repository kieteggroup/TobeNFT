import { createContext, useContext, useState } from 'react';
import translations from '../languages/translations';

const LanguageContext = createContext();
export const LanguageProvider = ({ children }) => {
    const [locale, setLocale] = useState('en');

    const t = (key) => translations[locale][key] || key;

    const changeLocale = (newLocale) => {
        setLocale(newLocale);
    };

    return <LanguageContext.Provider value={{ t, changeLocale }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
    return useContext(LanguageContext);
};
