import React from 'react';
import { Container } from './StatusBar.styled-components';

const StatusBar = ({ status }) => {
    const colors = {
        Unassigned: 'red',
        Completed: 'green',
        Running: 'blue',
        Paused: 'orange'
    };
    return <Container color={colors[status]}>{status}</Container>;
};

export default StatusBar;
