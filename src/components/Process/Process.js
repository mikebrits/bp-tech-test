import React from 'react';
import { Container, Details, Description, Actions } from './Process.styled-components';
import { Heading, Subheading, Text } from '../UI/Typography';
import ProgressBar from '../ProgressBar';
import { Row, View } from '../UI/Pane';
import WorkerSetter from '../WorkerSetter';
import Priority from '../Priority';
import StatusBar from '../StatusBar';
import PlayPauseButton from '../PlayPauseButton';

const Process = ({ data }) => {
    const { id, name, description, currentWorkers, maxWorkers, priority, status, assigned } = data;
    return (
        <Container>
            <Row>
                <Details>
                    <Text bold>{name}</Text>
                    <Description>
                        <Text>{description}</Text>
                    </Description>
                    <ProgressBar percentageComplete={67} />
                </Details>
                <Actions>
                    <PlayPauseButton playing={!assigned} />
                    <View padding="0 0 0 8">
                        <WorkerSetter activeWorkers={currentWorkers} maxWorkers={maxWorkers} />
                        <Priority rating={priority} />
                    </View>
                    <StatusBar status={status} />
                </Actions>
            </Row>
        </Container>
    );
};

export default Process;
