import React, { useState } from 'react';
import {
    Container,
    Details,
    Description,
    Actions,
    ActionsWrapper,
    Name,
} from './Process.styled-components';
import ProgressBar from '../ProgressBar';
import { Col, Row, View } from '../UI/Pane';
import WorkerSetter from '../WorkerSetter';
import Priority from '../Priority';
import StatusBar from '../StatusBar';
import PlayPauseButton from '../PlayPauseButton';
import { Divider } from '../UI/Divider';
import IconButton from '../IconButton';
import Icon from '../Icon';
import ActionsMenu from '../ActionsMenu';
import PropTypes from 'prop-types';

const Process = ({ data, onAssignWorker, onRemoveWorker, onRun, onSuspend, onAutoAssign }) => {
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
        icon,
    } = data;
    const [statsVisible, setStatsVisible] = useState(false);
    return (
        <Container data-cy="process">
            <Row>
                <Details>
                    <Row justify="space-between">
                        <View>
                            <Icon name={icon} color="#c7c7c7" />
                            <Name bold margin={'0 0 0 10px'}>
                                {name}
                            </Name>
                        </View>
                        <View>
                            <ActionsMenu onSetPriority={onAutoAssign} />
                        </View>
                    </Row>
                    <Divider border />
                    <Col justify="space-between">
                        <Description>{description}</Description>
                        {(status === 'Running' || status === 'Paused') && (
                            <Row align="center">
                                <IconButton
                                    name="eye"
                                    color={statsVisible ? '#0C75B7' : '#b1b1b1'}
                                    size="2em"
                                    style={{ marginRight: 8 }}
                                    onClick={() => {
                                        setStatsVisible(!statsVisible);
                                    }}
                                />
                                <ProgressBar
                                    key={status}
                                    percentageComplete={percentageComplete}
                                    timeRemaining={timeRemaining}
                                    showStats={statsVisible}
                                />
                            </Row>
                        )}
                    </Col>
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
                        <StatusBar status={status} />
                    </ActionsWrapper>
                </Actions>
            </Row>
        </Container>
    );
};

Process.propTypes ={
    data: PropTypes.shape({
        name : PropTypes.string.isRequired,
        description: PropTypes.string,
        currentWorkers: PropTypes.number,
        maxWorkers: PropTypes.number.isRequired,
        priority: PropTypes.number,
        status: PropTypes.oneOf(['Assigned', 'Unassigned', 'Running', 'Paused', 'Completed']),
        assigned: PropTypes.bool.isRequired,
        running: PropTypes.bool.isRequired,
        percentageComplete: PropTypes.number,
        timeRemaining: PropTypes.number,
        icon: PropTypes.string,
    }),
    onAssignWorker: PropTypes.func.isRequired,
    onRemoveWorker: PropTypes.func.isRequired,
    onRun: PropTypes.func.isRequired,
    onSuspend: PropTypes.func.isRequired,
    onAutoAssign: PropTypes.func.isRequired
};

export default Process;
