import React from 'react';
import { Bar, Container, ProgressText } from './ProgressBar.styled-components';
import { Col, Row } from '../UI/Pane';
import { Text } from '../UI/Typography';
import {useLocale} from "../../i18n/LocaleHooks";

const ProgressBar = ({
    percentageComplete = 0,
    tasksInQueue = 0,
    tasksCompleted = 0,
    averageTaskTime = 0,
    timeRemaining = 0,
    showStats = false,
}) => {
    const [{process}] = useLocale();
    const stats = process.progressBar;
    const _ProgressText = ({ color = 'black', index = 5 }) => (
        <ProgressText index={index} color={color}>
            <Row>
                <Col padding={'0 16px 0 8'}>
                    <div>
                        <b>{stats.tasksInQueue}:</b> {tasksInQueue}
                    </div>
                    <div>
                        <b>{stats.tasksCompleted}:</b> {tasksCompleted}
                    </div>
                </Col>
                <Col>
                    <div>
                        <b>{stats.averageTaskTime}:</b> {averageTaskTime}{stats.seconds}
                    </div>
                    <div>
                        <b>{stats.timeRemaining}:</b> {timeRemaining}{stats.seconds}
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
