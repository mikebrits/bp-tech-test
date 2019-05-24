import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './Processes.styled-components';
import { getFilteredProcesses, getSearchTerm } from '../../selectors';
import Process from '../Process';
import Timer from '../UI/Timer';
import { tick } from '../../actions/Process.actions';

const useProcesses = searchTerm => {
    return useSelector(getFilteredProcesses(searchTerm));
};

const Processes = () => {
    const searchTerm = useSelector(getSearchTerm);
    const dispatch = useDispatch();
    const handleTick = () => dispatch(tick());

    const processes = useProcesses(searchTerm);
    return (
        <Container>
            <Timer onTick={handleTick} />
            {processes.length
                ? processes.map((process, index) => <Process key={index} data={process} />)
                : 'No matching processes found'}
        </Container>
    );
};

export default Processes;
