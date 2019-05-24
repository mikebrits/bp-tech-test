import React from 'react';
import { Button, Container } from './PlayPauseButton.styled-components';
import Icon from '../Icon';

const PlayPauseButton = ({ playing, onClick = () => {}, disabled }) => {
    const handlePlay = () => {
        if (!disabled) onClick();
    };
    return (
        <Container>
            <Button onClick={handlePlay} disabled={disabled}>
                <Icon size={10} name={playing ? 'pause' : 'play'} />
            </Button>
        </Container>
    );
};

export default PlayPauseButton;
