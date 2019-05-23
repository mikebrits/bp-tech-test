import React from 'react';
import { Button, Container } from './PlayPauseButton.styled-components';
import Icon from '../Icon';

const PlayPauseButton = ({ playing, onClick = () => {}, disabled }) => {
    return (
        <Container>
            <Button onClick={onClick} disabled={disabled}>
                <Icon size={10} name={playing ? 'pause' : 'play'} />
            </Button>
        </Container>
    );
};

export default PlayPauseButton;
