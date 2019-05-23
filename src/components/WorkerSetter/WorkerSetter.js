import React from 'react';
import { Container } from './WorkerSetter.styled-components';
import { Text } from '../UI/Typography';
import Icon from '../Icon';
import { Row } from '../UI/Pane';
import IconButton from '../IconButton';

const WorkerSetter = ({ activeWorkers, maxWorkers, onAssign, onRemove }) => {
    return (
        <Container>
            <Text>Workers Assigned</Text> <br />
            <Row justif="center" align="center">
                <IconButton onClick={onRemove} size={8} name="minus-circle" />
                {activeWorkers}/{maxWorkers}
                <IconButton onClick={onAssign} size={8} name="plus-circle" />
            </Row>
        </Container>
    );
};

export default WorkerSetter;
