import React from 'react';
import ReactDOM from 'react-dom';
import Processes from '../Processes';

describe('Processes', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Processes />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
