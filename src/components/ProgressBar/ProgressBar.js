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
                        <b>Tasks in Queue:</b> {tasksInQueue}
                    </div>
                    <div>
                        <b>Tasks Completed:</b> {tasksCompleted}
                    </div>
                </Col>
                <Col>
                    <div>
                        <b>Average Task Time:</b> {averageTaskTime}s
                    </div>
                    <div>
                        <b>Time Remaining:</b> {timeRemaining}s
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
