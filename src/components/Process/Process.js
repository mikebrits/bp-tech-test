import React from 'react';
import { Container, Details, Description, Actions } from './Process.styled-components';
import { Heading, Subheading, Text } from '../UI/Typography';
import ProgressBar from '../ProgressBar';
import { Col, Row, View } from '../UI/Pane';
import WorkerSetter from '../WorkerSetter';
import Priority from '../Priority';
import StatusBar from '../StatusBar';
import PlayPauseButton from '../PlayPauseButton';

const Process = ({ data, onAssignWorker, onRemoveWorker }) => {
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
                    <PlayPauseButton playing={assigned} />
                    <Col padding="0 0 0 24" align="center">
                        <WorkerSetter
                            activeWorkers={currentWorkers}
                            maxWorkers={maxWorkers}
                            onAssign={onAssignWorker}
                            onRemove={onRemoveWorker}
                        />
                        <Priority rating={priority} />
                    </Col>
                    <StatusBar status={status} />
                </Actions>
            </Row>
        </Container>
    );
};

export default Process;
