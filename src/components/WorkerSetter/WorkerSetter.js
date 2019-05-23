import React from 'react';
import { Container } from './WorkerSetter.styled-components';
import { Text } from '../UI/Typography';
import Icon from '../Icon';
import { Row } from '../UI/Pane';

const WorkerSetter = ({ activeWorkers, maxWorkers, onAssign, onRemove }) => {
    return (
        <Container>
            <Text>Workers Assigned</Text> <br />
            <Row justif="center" align="center">
                <div onClick={onRemove}>
                    <Icon size={8} name="minus-circle" />
                </div>
                {activeWorkers}/{maxWorkers}
                <div onClick={onAssign}>
                    <Icon size={8} name="plus-circle" onClick={onAssign} />
                </div>
            </Row>
        </Container>
    );
};

export default WorkerSetter;
