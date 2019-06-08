import { useStateValue } from '../state/context';

export const useLocale = () => {
    const [{ general }, dispatch] = useStateValue();
    return [
        general.locale,
        locale => {
            dispatch({ type: 'SET_LOCALE', payload: { locale } });
        },
    ];
};

