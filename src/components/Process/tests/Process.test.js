import React from 'react';
import ReactDOM from 'react-dom';
import Process from '../Process';
import { MAX_PROCESS_WORKERS } from '../../../constants';
import Theme from '../../../components/UI/Theme';
import { ThemeProvider } from 'styled-components';
import { shallow, mount } from 'enzyme';
import { ActiveWorkers } from '../../WorkerSetter/WorkerSetter.styled-components';
import {Name, Description} from "../Process.styled-components";
import sinon from 'sinon';

const data = {
    id: 123,
    maxWorkers: MAX_PROCESS_WORKERS,
    currentWorkers: 10,
    name: '',
    description: '',
    priority: 0,
    assigned: true,
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
    const defaultProcess = (extraData) =>  mount(<WrappedProcess data={{...data, ...extraData}} />);

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<WrappedProcess data={data} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the correct worker counts', () => {
        const workers = defaultProcess().find(ActiveWorkers);
        expect(workers).toHaveLength(1);
        expect(workers.text()).toBe(`${data.currentWorkers}/${data.maxWorkers}`);
    });

    it('should render the provided name and description', function() {
        expect(defaultProcess().find(Name).text()).toBe(data.name);
        expect(defaultProcess().find(Description).text()).toBe(data.description);
    });

    it('should call the onAssignWorker when the + button is clicked', function () {
        const onButtonClick = sinon.spy();
        const wrapper = mount(<WrappedProcess data={data} onAssignWorker={onButtonClick} />);
        const button = wrapper.find("#plus-worker-button").at(1);
        button.simulate('click');
        expect(onButtonClick.called).toBe(true);
    });

    it('should call the onRemoveWorker when the - button is clicked', function () {
        const onButtonClick = sinon.spy();
        const wrapper = mount(<WrappedProcess data={data} onRemoveWorker={onButtonClick} />);
        const button = wrapper.find("#minus-worker-button").at(1);
        button.simulate('click');
        expect(onButtonClick.called).toBe(true);
    });


});
