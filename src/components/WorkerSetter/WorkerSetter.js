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
                    id="minus-worker-button"
                    highlight
                    onClick={onRemove}
                    size={8}
                    name="minus-circle"
                    style={{ margin: '-5px 15px 0 0' }}
                />
                <ActiveWorkers>
                    {activeWorkers}/{maxWorkers}
                </ActiveWorkers>
                <IconButton
                    id="plus-worker-button"
                    highlight
                    onClick={onAssign}
                    size={8}
                    name="plus-circle"
                    style={{ margin: '-5px 0 0 15px' }}
                />
            </Row>
        </Container>
    );
};

export default WorkerSetter;
