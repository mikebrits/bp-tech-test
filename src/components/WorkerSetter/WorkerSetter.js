import React from 'react';
import { ActiveWorkers, Container } from './WorkerSetter.styled-components';
import { Text } from '../UI/Typography';
import { Row } from '../UI/Pane';
import IconButton from '../IconButton';

const WorkerSetter = ({ activeWorkers, maxWorkers, onAssign, onRemove }) => {
    return (
        <Container>
            <Text>Workers Assigned</Text> <br />
            <Row justify="center" align="center">
                <IconButton
                    highlight
                    onClick={onRemove}
                    size={12}
                    name="minus-circle"
                    style={{ margin: '-5px 12px 0 0' }}
                />
                <ActiveWorkers>
                    {activeWorkers}/{maxWorkers}
                </ActiveWorkers>
                <IconButton
                    highlight
                    onClick={onAssign}
                    size={12}
                    name="plus-circle"
                    style={{ margin: '-5px 0 0 12px' }}
                />
            </Row>
        </Container>
    );
};

export default WorkerSetter;
