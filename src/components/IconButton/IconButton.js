import React from 'react';
import { Container } from './IconButton.styled-components';
import Icon from '../Icon';

const IconButton = props => {
    return (
        <Container {...props}>
            <Icon {...props} />
        </Container>
    );
};

export default IconButton;
