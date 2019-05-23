import React from 'react';
import { Button, Container } from './PlayPauseButton.styled-components';
import Icon from '../Icon';

const PlayPauseButton = ({ playing, onClick = () => {} }) => {
    return (
        <Container>
            <Button onClick={onClick}>
                <Icon size={10} name={playing ? 'pause' : 'play'} />
            </Button>
        </Container>
    );
};

export default PlayPauseButton;
