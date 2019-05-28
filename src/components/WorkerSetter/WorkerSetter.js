import React from 'react';
import { ActiveWorkers, Container } from './WorkerSetter.styled-components';
import { Text } from '../UI/Typography';
import { Row } from '../UI/Pane';
import IconButton from '../IconButton';
import {useLocale} from "../../i18n/LocaleHooks";
import {Divider} from "../UI/Divider";

const WorkerSetter = ({ activeWorkers, maxWorkers, onAssign, onRemove }) => {
    const [{process}] = useLocale();
    return (
        <Container>
            <Text>{process.workers.label}</Text>
            <Divider margin='4'/>
            <Row justify="center" align="center">
                <IconButton
                    highlight
                    onClick={onRemove}

                    name="minus-circle"
                    style={{ margin: '-5px 12px 0 0' }}
                />
                <ActiveWorkers>
                    {activeWorkers}/{maxWorkers}
                </ActiveWorkers>
                <IconButton
                    highlight
                    onClick={onAssign}
                    name="plus-circle"
                    style={{ margin: '-5px 0 0 12px' }}
                />
            </Row>
        </Container>
    );
};

export default WorkerSetter;
