import english from './en.json';
import vietnamese from './vi.json';
import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';

i18next.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    resources: {
        en: english,
        vi: vietnamese,
    },
    react: {
        useSuspense: false,
    },
    interpolation: {
        escapeValue: false, // react already safes from xss
    },
});
export default i18next;
