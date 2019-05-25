import React from 'react';
import { Container } from './StatusBar.styled-components';
import Icon from '../Icon';
import { Row } from '../UI/Pane';

const StatusBar = ({ status }) => {
    const colors = {
        Unassigned: '#e61b1b',
        Completed: '#05B905',
        Running: '#2E75EF',
        Paused: '#f5a835',
        Assigned: '#372994',
    };

    const icons = {
        Unassigned: 'exclamation-circle',
        Completed: 'check-circle',
        Running: 'play-circle',
        Paused: 'pause-circle',
        Assigned: 'user-circle',
    };
    return (
        <Container color={colors[status]}>
            <Row align="center">
                <Icon size={12} name={icons[status]} style={{ marginRight: 4, marginTop: 2 }} inverse />
                {status}
            </Row>
        </Container>
    );
};

export default StatusBar;
