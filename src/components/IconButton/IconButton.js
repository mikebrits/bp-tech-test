import React from 'react';
import { Container } from './IconButton.styled-components';
import Icon from '../Icon';

const IconButton = React.forwardRef((props, ref) => {
    return (
        <div ref={ref}>
            <Container onClick={props.onClick || null}>
                <Icon {...props} />
            </Container>
        </div>
    );
});

export default IconButton;
