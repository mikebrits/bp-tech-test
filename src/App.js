import React from 'react';
import { StateProvider } from './state/context';
import ProcessApp from './components/ProcessApp';

// This is the highest level of the app.
// The State provider needs to give the theme to the theme provider
// So it is placed in the lower main component
function App() {
    return (
        <StateProvider>
            <ProcessApp />
        </StateProvider>
    );
}

export default App;
