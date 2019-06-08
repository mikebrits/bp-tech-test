import en from './en';
import jap from './jap';

const locales = {
    en,
    jap
};

const defaultLocale = 'en';

export default (locale = defaultLocale) => locales[locale];