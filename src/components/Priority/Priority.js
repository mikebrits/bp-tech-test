import React from 'react';
import { Container } from './Priority.styled-components';
import Star from "../Star";

const Priority = ({ rating }) => {
    return (
        <Container>
            <Star enabled={rating >= 1} />
            <Star enabled={rating >= 2} />
            <Star enabled={rating >= 3} />
        </Container>
    );
};

export default Priority;
