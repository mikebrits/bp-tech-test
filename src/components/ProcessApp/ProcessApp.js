import React from 'react';
import Header from '../Header';
import Processes from '../Processes';
import { ThemeProvider } from 'styled-components';
import { useStateValue } from '../../state/context';
import styled from 'styled-components/macro';

const ProcessApp = () => {
    const [{ theme }, dispatch] = useStateValue();
    return (
        <ThemeProvider theme={theme}>
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
