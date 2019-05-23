import React from 'react';
import { Container } from './WorkerSetter.styled-components';
import { Subheading } from '../UI/Typography';

const WorkerSetter = ({ activeWorkers, maxWorkers }) => {
    return (
        <Container>
            <Subheading>Workers Assigned</Subheading>
            <button>-</button>
            {activeWorkers} / {maxWorkers}
            <button>+</button>
        </Container>
    );
};

export default WorkerSetter;
