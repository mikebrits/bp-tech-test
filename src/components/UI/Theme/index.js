// import BaseTheme from './BaseTheme';
import LightTheme from './LightTheme';
import DarkTheme from './DarkTheme';
// import deepmerge from '../../../utils/DeepMerge';

const themes = {
    light: LightTheme,
    dark: DarkTheme,
};

const defaultTheme = LightTheme;

export default themeIndex => themes[themeIndex] || defaultTheme;
