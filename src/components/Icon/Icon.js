import React from 'react';

const Icon = ({ name, type = 'solid', size = 'inherit', color = 'inherit' }) => {
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
        <i
            style={{ fontSize: size, color }}
            className={`${types[type] || defaultType} fa-${name}`}
        />
    );
};

export default Icon;
