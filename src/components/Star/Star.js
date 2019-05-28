import React from 'react';
import Icon from "../Icon";
import {useTheme} from "../UI/ThemeHooks";

const Star = ({ enabled, size = 22, ...rest }) => {
    const [theme] = useTheme();
    return<Icon
        size={size}
        name="star"
        color={enabled ? theme.colors.star : theme.colors.starBG}
        {...rest}
    />;
};

export default Star;
