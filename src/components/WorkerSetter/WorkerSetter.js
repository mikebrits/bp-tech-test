import React from 'react';
import { ActiveWorkers, Container } from './WorkerSetter.styled-components';
import { Text } from '../UI/Typography';
import { Row } from '../UI/Pane';
import IconButton from '../IconButton';
import {useLocale} from "../../i18n/LocaleHooks";
import {Divider} from "../UI/Divider";
import PropTypes from 'prop-types';

const WorkerSetter = ({ activeWorkers, maxWorkers, onAssign, onRemove }) => {
    const [{process}] = useLocale();
    return (
        <Container>
            <Text>{process.workers.label}</Text>
            <Divider margin='4'/>
            <Row justify="center" align="center">
                <IconButton
                    data-cy="minus-worker-button"
                    id="minus-worker-button"
                    highlight
                    onClick={onRemove}

                    name="minus-circle"
                    style={{ margin: '-5px 12px 0 0' }}
                />
                <ActiveWorkers data-cy="active-workers">
                    {activeWorkers}/{maxWorkers}
                </ActiveWorkers>
                <IconButton
                    id="plus-worker-button"
                    data-cy="plus-worker-button"
                    highlight
                    onClick={onAssign}
                    name="plus-circle"
                    style={{ margin: '-5px 0 0 12px' }}
                />
            </Row>
        </Container>
    );
};

WorkerSetter.propTypes = {
    activeWorkers: PropTypes.number.isRequired,
    maxWorkers: PropTypes.number.isRequired,
    onAssign: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
};

export default WorkerSetter;
