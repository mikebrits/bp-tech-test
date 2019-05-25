import LightTheme from '../../components/UI/LightTheme';
import DarkTheme from '../../components/UI/DarkTheme';

export const initialState = LightTheme;

const themes = {
    light: LightTheme,
    dark: DarkTheme,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_THEME':
            return themes[action.payload.theme];

        default:
            return state;
    }
};
