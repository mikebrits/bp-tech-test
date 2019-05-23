import React from 'react';
import { Container } from './Priority.styled-components';
import Icon from '../Icon';

const Priority = ({ rating }) => {
    return (
        <Container>
            <Icon name="star" />
            <Icon name="star" />
            <Icon name="star" />
        </Container>
    );
};

export default Priority;
