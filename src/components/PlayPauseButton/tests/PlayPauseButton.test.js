import React from 'react';
import ReactDOM from 'react-dom';
import PlayPauseButton from '../PlayPauseButton';

describe('PlayPauseButton', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<PlayPauseButton />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});
