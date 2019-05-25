import React from 'react';
import ReactDOM from 'react-dom';
import ProcessApp from '../ProcessApp';

describe('ProcessApp', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ProcessApp />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
