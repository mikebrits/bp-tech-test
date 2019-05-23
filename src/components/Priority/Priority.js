import React from 'react';
import { Container } from './Priority.styled-components';
import Icon from '../Icon';

const Priority = ({ rating }) => {
    return (
        <Container>
            <Icon name="star" color={rating >= 1 ? '#FFCE2B' : '#ddd'} />
            <Icon name="star" color={rating >= 2 ? '#FFCE2B' : '#ddd'}/>
            <Icon name="star" color={rating === 3 ? '#FFCE2B' : '#ddd'}/>
        </Container>
    );
};

export default Priority;
