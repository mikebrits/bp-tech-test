import React from 'react';
import { Container } from './StatusBar.styled-components';
import Icon from '../Icon';
import { Row } from '../UI/Pane';
import {Text} from "../UI/Typography";
import {useLocale} from "../../i18n/LocaleHooks";

const StatusBar = ({ status }) => {
    const colors = {
        Unassigned: '#e61b1b',
        Completed: '#05B905',
        Running: '#2E75EF',
        Paused: '#f5a835',
        Assigned: '#372994',
    };

    const icons = {
        Unassigned: 'exclamation-circle',
        Completed: 'check-circle',
        Running: 'play-circle',
        Paused: 'pause-circle',
        Assigned: 'user-circle',
    };

    const [{process}] = useLocale();

    return (
        <Container color={colors[status]} data-cy="status-bar">
            <Row align="center">
                <Icon
                    size={'1.2em'}
                    name={icons[status]}
                    style={{ marginRight: 4, marginTop: 2 }}
                    inverse
                />
                <Text inverse>
                    {process.status[status]}
                </Text>
            </Row>
        </Container>
    );
};

export default StatusBar;
