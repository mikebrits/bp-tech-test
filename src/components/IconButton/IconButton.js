import React from 'react';
import { Container } from './IconButton.styled-components';
import Icon from '../Icon';
import PropTypes from 'prop-types';

const IconButton = ({ onClick, ...props }) => {
    return (
        <Container onClick={onClick} {...props}>
            <Icon {...props} />
        </Container>
    );
};

IconButton.propTypes = {
    onClick: PropTypes.func,
};

export default IconButton;
