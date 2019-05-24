import React, { useState } from 'react';
import {
    Container,
    Details,
    Description,
    Actions,
    ActionsWrapper, Name,
} from './Process.styled-components';
import ProgressBar from '../ProgressBar';
import { Row } from '../UI/Pane';
import WorkerSetter from '../WorkerSetter';
import Priority from '../Priority';
import StatusBar from '../StatusBar';
import PlayPauseButton from '../PlayPauseButton';
import { Divider } from '../UI/Divider';
import IconButton from '../IconButton';
import Icon from "../Icon";

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
        timeRemaining,
        icon
    } = data;
    const [statsVisible, setStatsVisible] = useState(false);
    return (
        <Container>
            <Row>
                <Details>
                    <Icon name={icon} color="#c7c7c7"/>
                    <Name  bold margin={'0 0 0 10px'}>{name}</Name>
                    <Divider border />
                    <Description>
                        {description}
                    </Description>
                    {(status === 'Running' || status === 'Paused') && (
                        <Row align="center">
                            <IconButton
                                name="eye"
                                color={statsVisible ? '#0C75B7' : '#b1b1b1'}
                                size={22}
                                style={{ marginRight: 8 }}
                                onClick={() => {
                                    setStatsVisible(!statsVisible);
                                }}
                            />
                            <ProgressBar
                                percentageComplete={percentageComplete}
                                timeRemaining={timeRemaining}
                                showStats={statsVisible}
                            />
                        </Row>
                    )}
                </Details>
                <Actions>
                    <PlayPauseButton
                        disabled={!assigned}
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
