import themeSelector from '../../components/UI/Theme';

export const initialState = themeSelector();

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_THEME':
            return themeSelector(action.payload.theme);

        default:
            return state;
    }
};
