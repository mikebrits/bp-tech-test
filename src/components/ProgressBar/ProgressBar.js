import React from 'react';
import { Bar, Container } from './ProgressBar.styled-components';

const ProgressBar = ({ percentageComplete = 0 }) => {
    return (
        <Container>
            <Bar percentageComplete={percentageComplete} />
        </Container>
    );
};

export default ProgressBar;
