import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { Container, ProcessWrapper } from './Processes.styled-components';
import {getFilteredProcesses, getProcesses} from '../../selectors';
import Process from '../Process';
import { Heading } from '../UI/Typography';

const useProcesses = (searchTerm) => {
    return useSelector(getFilteredProcesses(searchTerm));
};

const Processes = () => {
    const [searchTerm, setSearchTerm] = useState('');
    // const dispatch = useDispatch();
    const processes = useProcesses(searchTerm);
    return (
        <Container>

            <ProcessWrapper>
                Search: <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <Heading> Processes </Heading>
                {processes.map((process, index) => <Process key={index} data={process} />)}
            </ProcessWrapper>
        </Container>
    );
};

export default Processes;
