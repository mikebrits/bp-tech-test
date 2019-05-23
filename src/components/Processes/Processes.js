import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from './Processes.styled-components';
import {getFilteredProcesses, getSearchTerm} from '../../selectors';
import Process from '../Process';

const useProcesses = searchTerm => {
    return useSelector(getFilteredProcesses(searchTerm));
};

const Processes = () => {
    const searchTerm = useSelector(getSearchTerm);
    // const dispatch = useDispatch();
    const processes = useProcesses(searchTerm);
    return (
        <Container>
                {processes.map((process, index) => <Process key={index} data={process} />)}
        </Container>
    );
};

export default Processes;
