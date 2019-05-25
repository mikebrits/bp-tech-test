import React from 'react';
import { Container } from './IconButton.styled-components';
import Icon from '../Icon';

const IconButton = ({ onClick, ...props }) => {
    return (
        <Container onClick={onClick} {...props}>
            <Icon {...props} />
        </Container>
    );
};

export default IconButton;
