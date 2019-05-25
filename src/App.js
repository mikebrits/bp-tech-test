import React from 'react';

import { StateProvider } from './utils/context';
import ProcessApp from "./components/ProcessApp";



function App() {
    return (
        <StateProvider>
            <ProcessApp/>
        </StateProvider>
    );
}


export default App;
