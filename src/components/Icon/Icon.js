import React from 'react';
import styled from 'styled-components/macro';
import {getColor} from "../UI/Typography";

const Icon = ({ name, type = 'solid', size = 'inherit', color, ...rest }) => {
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
            {...rest}
            color={color}
            style={{ fontSize: size }}
            className={`${types[type] || defaultType} fa-${name}`}
        />
    );
};

const Container = styled.i`
    color: ${({color, ...props}) => color || getColor(props)};
`;


export default Icon;
