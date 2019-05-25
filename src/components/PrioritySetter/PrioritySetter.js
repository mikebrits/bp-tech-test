import React, { useState } from 'react';
import { Container } from './PrioritySetter.styled-components';
import { Text } from '../UI/Typography';
import { Row } from '../UI/Pane';
import Star from '../Star';

const PrioritySetter = ({ onSetPriority }) => {
    const [highestPriority, setHighestPriority] = useState(0);
    return (
        <Container>
            <Text highlight margin={'0 0 8px 0'}>
                Set Priority
            </Text>
            <Row>
                <Star
                    enabled={highestPriority >= 1}
                    onClick={() => onSetPriority(1)}
                    onMouseEnter={() => {
                        setHighestPriority(1);
                    }}
                    onMouseLeave={() => {
                        setHighestPriority(0);
                    }}
                />
                <Star
                    enabled={highestPriority >= 2}
                    onClick={() => onSetPriority(2)}
                    onMouseEnter={() => {
                        setHighestPriority(2);
                    }}
                    onMouseLeave={() => {
                        setHighestPriority(0);
                    }}
                />
                <Star
                    enabled={highestPriority >= 3}
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
