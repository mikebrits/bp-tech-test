import React from 'react';
import ReactDOM from 'react-dom';
import Process from '../Process';
import { MAX_PROCESS_WORKERS } from '../../../constants';
import Theme from '../../../components/UI/Theme';
import { ThemeProvider } from 'styled-components';
import { shallow } from 'enzyme';

const defaultProcessState = {
    id: 123,
    maxWorkers: MAX_PROCESS_WORKERS,
    currentWorkers: 10,
    name: '',
    description: '',
    priority: 0,
    assigned: false,
    status: 'Unassigned',
    startTime: null,
    tasks: [],
    running: false,
    totalTime: 10,
    computationRemaining: 80,
    percentageComplete: 20,
    timeRemaining: 8,
    icon: 'cog',
};

const WrappedProcess = props => {
    return (
        <ThemeProvider theme={Theme}>
            <Process {...props} />
        </ThemeProvider>
    );
};

describe('Process Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<WrappedProcess data={defaultProcessState} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders with enzyme', () => {
        const process = shallow(<WrappedProcess data={defaultProcessState}/>);

    });
});
