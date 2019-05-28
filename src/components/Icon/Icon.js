import React from 'react';
import styled from 'styled-components/macro';
import { getColor } from '../UI/Typography';
import PropTypes from 'prop-types';

const Icon = ({ name, type = 'solid', size = 'inherit', color, pulse, spin, style, ...rest }) => {
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
            className={`${types[type] || defaultType} fa-${name} ${pulse && 'fa-pulse'} ${spin &&
                'fa-spin'}`}
            {...rest}
        />
    );
};

const Container = styled.i`
    color: ${({ color, ...props }) => color || getColor(props)};
`;

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.string,
    type: PropTypes.oneOf(['solid', 'regular', 'light', 'far', 'fas', 'fal']),
    color: PropTypes.string,
    pulse: PropTypes.bool,
    spin: PropTypes.bool
};

export default Icon;
