import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import Processes from './components/Processes';
import { ThemeProvider } from 'styled-components';
import Theme from './components/UI/Theme';
import Header from './components/Header';
import styled from 'styled-components/macro';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__({
            // actionSanitizer,
            // stateSanitizer: state => ({...state, graph: {...state.graph, nodeRefs: 'Node refs'}})
        }),
);

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={Theme}>
                <Body>
                    <Header />
                    <Processes />
                </Body>
            </ThemeProvider>
        </Provider>
    );
}

const Body = styled.div`
    height: 100vh;
    overflow: scroll;
    background: ${({ theme }) => theme.colors.pageBG};
`;

export default App;
