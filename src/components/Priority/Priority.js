import React from 'react';
import { Container } from './Priority.styled-components';
import Star from '../Star';
import PropTypes from 'prop-types';

const Priority = ({ rating = 0 }) => {
    return (
        <Container>
            <Star enabled={rating >= 1} />
            <Star enabled={rating >= 2} />
            <Star enabled={rating >= 3} />
        </Container>
    );
};

Priority.propTypes = {
    rating: PropTypes.number,
};

export default Priority;
