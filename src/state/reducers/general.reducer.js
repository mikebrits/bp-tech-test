import themeSelector from '../../components/UI/Theme';
import localSelector from '../../i18n';
export const initialState = {
    theme: themeSelector(),
    locale: localSelector(),
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOCALE':
            return {
                ...state,
                locale: localSelector(action.payload.locale),
            };
        case 'SET_THEME':
            return {
                ...state,
                theme: themeSelector(action.payload.theme),
            };

        default:
            return state;
    }
};
