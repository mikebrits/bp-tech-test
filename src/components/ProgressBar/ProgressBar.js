import React from 'react';
import { Bar, Container, ProgressText } from './ProgressBar.styled-components';
import { Col, Row } from '../UI/Pane';
import { Text } from '../UI/Typography';

const ProgressBar = ({
    percentageComplete = 0,
    tasksInQueue = 0,
    tasksCompleted = 0,
    averageTaskTime = 0,
    timeRemaining = 0,
    showStats = false,
}) => {
    const _ProgressText = ({ color = 'black', index = 5 }) => (
        <ProgressText index={index} color={color}>
            <Row>
                <Col padding={'0 16px 0 8'}>
                    <div>
                        <Text bold>Tasks in Queue:</Text> {tasksInQueue}
                    </div>
                    <div>
                        <Text bold>Tasks Completed:</Text> {tasksCompleted}
                    </div>
                </Col>
                <Col>
                    <div>
                        <Text bold>Average Task Time:</Text> {averageTaskTime}s
                    </div>
                    <div>
                        <Text bold>Time Remaining:</Text> {timeRemaining}s
                    </div>
                </Col>
            </Row>
        </ProgressText>
    );

    return (
        <Container>
            <Bar percentageComplete={percentageComplete}>
                {showStats && _ProgressText({ color: 'white', index: 6 })}
            </Bar>
            {showStats && _ProgressText({ color: 'black' })}
        </Container>
    );
};

export default ProgressBar;
