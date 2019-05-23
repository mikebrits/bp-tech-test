import React from 'react';
import { Button, Container } from './PlayPauseButton.styled-components';
import Icon from '../Icon';

const PlayPauseButton = ({ playing, onClick = () => {} }) => {
    return (
        <Container>
            <Button>
                <Icon size={10} name={playing ? 'pause' : 'play'} onClick={onClick} />
            </Button>
        </Container>
    );
};

export default PlayPauseButton;
