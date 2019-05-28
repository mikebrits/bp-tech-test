import React from 'react';
import Header from '../Header';
import Processes from '../Processes';
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components/macro';
import {useTheme} from "../UI/ThemeHooks";

const ProcessApp = () => {
    const [theme, setTheme] = useTheme();
    return (
        <ThemeProvider theme={theme}>
            <Body>
                <Header setTheme={setTheme} />
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
