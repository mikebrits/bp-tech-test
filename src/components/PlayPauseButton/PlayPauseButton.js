import React from 'react';
import { Button, Container } from './PlayPauseButton.styled-components';

const PlayPauseButton = ({ playing, onClick }) => {
    return (
        <Container>
            <Button>P</Button>
        </Container>
    );
};

export default PlayPauseButton;
