import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import Processes from './components/Processes';
import { ThemeProvider } from 'styled-components';
import Theme from './components/UI/Theme';

const store = createStore(rootReducer);

function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={Theme}>
                <div className="App">
                    <Processes />
                </div>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
