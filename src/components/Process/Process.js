import React from 'react';
import {
    Container,
    Details,
    Description,
    Actions,
    ActionsWrapper,
} from './Process.styled-components';
import { Text } from '../UI/Typography';
import ProgressBar from '../ProgressBar';
import { Col, Row } from '../UI/Pane';
import WorkerSetter from '../WorkerSetter';
import Priority from '../Priority';
import StatusBar from '../StatusBar';
import PlayPauseButton from '../PlayPauseButton';
import { Divider } from '../UI/Divider';

const Process = ({ data, onAssignWorker, onRemoveWorker, onRun, onSuspend, onSetPriority }) => {
    const {
        name,
        description,
        currentWorkers,
        maxWorkers,
        priority,
        status,
        assigned,
        running,
        percentageComplete,
    } = data;
    return (
        <Container>
            <Row>
                <Details>
                    <Text bold>{name}</Text>
                    <Divider border />
                    <Description>
                        <Text>{description}</Text>
                    </Description>
                    {(status === 'Running' || status === 'Paused') && (
                        <ProgressBar percentageComplete={percentageComplete} />
                    )}
                </Details>
                <Actions>
                    <PlayPauseButton
                        playing={running}
                        onClick={() => {
                            running ? onSuspend() : onRun();
                        }}
                    />
                    <ActionsWrapper>
                        <>
                            <WorkerSetter
                                activeWorkers={currentWorkers}
                                maxWorkers={maxWorkers}
                                onAssign={onAssignWorker}
                                onRemove={onRemoveWorker}
                            />
                            <Divider margin={4} />
                            <Priority rating={priority} />
                        </>
                        <StatusBar status={status} onSetPriority={onSetPriority} />
                    </ActionsWrapper>
                </Actions>
            </Row>
        </Container>
    );
};

export default Process;
