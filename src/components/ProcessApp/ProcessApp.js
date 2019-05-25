import React from 'react';
import LightTheme from '../UI/LightTheme';
import DarkTheme from '../UI/DarkTheme';
import Header from '../Header';
import Processes from '../Processes';
import { ThemeProvider } from 'styled-components';
import { useThemeValue } from '../../utils/context';
import styled from 'styled-components/macro';

const themes = {
    light: LightTheme,
    dark: DarkTheme,
};

const ProcessApp = () => {
    const [{ theme }, dispatch] = useThemeValue();
    console.log(theme);
    return (
        <ThemeProvider theme={themes[theme]}>
            <Body>
                <Header
                    setTheme={theme => {
                        dispatch({ type: 'SET_THEME', payload: { theme } });
                    }}
                />
                <Processes />
            </Body>
        </ThemeProvider>
    );
};

const Body = styled.div`
    height: 100vh;
    overflow: scroll;
    background: ${({ theme }) => theme.colors.pageBG};
`;

export default ProcessApp;
