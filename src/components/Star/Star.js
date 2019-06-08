import React from 'react';
import Icon from '../Icon';
import { useStateValue } from '../../state/context';

const Star = ({ enabled, size = 22, ...rest }) => {
    const [{ theme }] = useStateValue();
    return (
        <span data-cy="star">
            <Icon
                size={size}
                name="star"
                color={enabled ? theme.colors.star : theme.colors.starBG}
                {...rest}
            />
        </span>
    );
};

export default Star;
