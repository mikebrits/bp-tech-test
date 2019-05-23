import React from 'react';
import { Container } from './WorkerSetter.styled-components';
import { Subheading, Text } from '../UI/Typography';
import Icon from '../Icon';
import { Row } from '../UI/Pane';

const WorkerSetter = ({ activeWorkers, maxWorkers }) => {
    return (
        <Container>
            <Text>Workers Assigned</Text> <br />
            <Row justif="center" align="center">
                <Icon size={8} name="minus-circle" />
                {activeWorkers}/{maxWorkers}
                <Icon size={8} name="plus-circle" />
            </Row>
        </Container>
    );
};

export default WorkerSetter;
