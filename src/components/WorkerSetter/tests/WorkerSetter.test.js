import React from 'react';
import ReactDOM from 'react-dom';
import WorkerSetter from '../WorkerSetter';

describe('WorkerSetter', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<WorkerSetter />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
