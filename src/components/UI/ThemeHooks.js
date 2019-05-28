import {useStateValue} from "../../state/context";

export const useTheme = () => {
    const [{ theme }, dispatch] = useStateValue();
    return [theme, (theme) => {dispatch({ type: 'SET_THEME', payload: { theme } });}]
};