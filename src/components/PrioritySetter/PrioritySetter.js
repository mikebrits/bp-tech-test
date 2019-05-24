import React, { useState } from 'react';
import { Container } from './PrioritySetter.styled-components';
import { Text } from '../UI/Typography';
import IconButton from '../IconButton';
import { Row } from '../UI/Pane';

const PrioritySetter = ({ onSetPriority }) => {
    const [highestPriority, setHighestPriority] = useState(0);
    return (
        <Container>
            <Text highlight margin={'0 0 8px 0'}>Set Priority</Text>
            <Row>
                <IconButton
                    name="star"
                    size={22}
                    color={highestPriority >= 1 ? '#ffce2b' : '#ddd'}
                    onClick={() => onSetPriority(1)}
                    onMouseEnter={() => {
                        setHighestPriority(1);
                    }}
                    onMouseLeave={() => {
                        setHighestPriority(0);
                    }}
                />
                <IconButton
                    name="star"
                    size={22}
                    color={highestPriority >= 2 ? '#ffce2b' : '#ddd'}
                    onClick={() => onSetPriority(2)}
                    onMouseEnter={() => {
                        setHighestPriority(2);
                    }}
                    onMouseLeave={() => {
                        setHighestPriority(0);
                    }}
                />
                <IconButton
                    name="star"
                    size={22}
                    color={highestPriority >= 3 ? '#ffce2b' : '#ddd'}
                    onClick={() => onSetPriority(3)}
                    onMouseEnter={() => {
                        setHighestPriority(3);
                    }}
                    onMouseLeave={() => {
                        setHighestPriority(0);
                    }}
                />
            </Row>
        </Container>
    );
};

export default PrioritySetter;
