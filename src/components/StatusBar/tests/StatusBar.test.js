import React from 'react';
import ReactDOM from 'react-dom';
import StatusBar from '../StatusBar';

describe('StatusBar', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<StatusBar />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
