import React from 'react';
import { useSelector } from 'react-redux';
import { Container, ProcessWrapper } from './Processes.styled-components';
import { getProcesses } from '../../selectors';
import Process from '../Process';
import { Heading } from '../UI/Typography';

const useProcesses = () => {
    return useSelector(getProcesses);
};

const Processes = () => {
    // const dispatch = useDispatch();
    const processes = useProcesses();
    return (
        <Container>
            <ProcessWrapper>
                <Heading> Processes </Heading>
                {processes.map((process, index) => <Process key={index} data={process} />)}
            </ProcessWrapper>
        </Container>
    );
};

export default Processes;
