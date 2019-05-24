import React from 'react';
import styled from 'styled-components/macro';
import { getColor } from '../UI/Typography';

const Icon = ({ name, type = 'solid', size = 'inherit', color, pulse, style, ...rest }) => {
    const types = {
        solid: 'fas',
        light: 'fal',
        regular: 'far',
        far: 'far',
        fas: 'fas',
        fal: 'fal',
    };
    const defaultType = 'fas';

    return (
        <Container
            color={color}
            style={{ fontSize: size, ...style }}
            className={`${types[type] || defaultType} fa-${name} ${pulse && 'fa-pulse'}`}
            {...rest}
        />
    );
};

const Container = styled.i`
    color: ${({ color, ...props }) => color || getColor(props)};
`;

export default Icon;
