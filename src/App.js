import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

function App() {
    return (
        <Provider>
            <div className="App" />;
        </Provider>
    );
}

export default App;
