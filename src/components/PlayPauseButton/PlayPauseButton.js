import React from 'react';
import { Button, Container } from './PlayPauseButton.styled-components';
import Icon from '../Icon';
import {useTheme} from "../UI/ThemeHooks";

const PlayPauseButton = ({ playing, onClick = () => {}, disabled }) => {
    const [ theme ] = useTheme();
    const handlePlay = () => {
        if (!disabled) onClick();
    };
    return (
        <Container>
            <Button onClick={handlePlay} disabled={disabled}>
                <Icon
                    size={10}
                    name={playing ? 'pause' : 'play'}
                    color={disabled ? theme.colors.border : theme.colors.primary}
                />
            </Button>
        </Container>
    );
};

export default PlayPauseButton;
