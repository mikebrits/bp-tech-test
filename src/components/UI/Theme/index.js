// import BaseTheme from './BaseTheme';
import LightTheme from './LightTheme';
import DarkTheme from './DarkTheme';
// import deepmerge from '../../../utils/DeepMerge';

const themes = {
    light: LightTheme,
    dark: DarkTheme,
};

const defaultTheme = 'light';

export default (themeIndex = defaultTheme) => themes[themeIndex];
