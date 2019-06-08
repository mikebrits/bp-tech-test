import {useStateValue} from "../../state/context";

export const useTheme = () => {
    const [{general}, dispatch] = useStateValue();
    return [general.theme, (theme) => {dispatch({ type: 'SET_THEME', payload: { theme } });}]
};