import React from 'react';
import { Container } from './StatusBar.styled-components';

const StatusBar = ({ status, onArchive, onAutoAssign, onSchedule, onSelectWorkers }) => {
    return <Container>{status}</Container>;
};

export default StatusBar;
