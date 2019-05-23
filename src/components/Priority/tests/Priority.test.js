import React from 'react';
import ReactDOM from 'react-dom';
import Priority from '../Priority';

describe('Priority', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Priority />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
