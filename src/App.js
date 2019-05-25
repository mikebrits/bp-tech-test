import React from 'react';
import Processes from './components/Processes';
import { ThemeProvider } from 'styled-components';
import Theme from './components/UI/Theme';
import Header from './components/Header';
import styled from 'styled-components/macro';


function App() {
    return (

            <ThemeProvider theme={Theme}>
                <Body>
                    <Header />
                    <Processes />
                </Body>
            </ThemeProvider>
    );
}

const Body = styled.div`
    height: 100vh;
    overflow: scroll;
    background: ${({ theme }) => theme.colors.pageBG};
`;

export default App;
