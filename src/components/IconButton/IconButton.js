import React from 'react';
import { Container } from './IconButton.styled-components';
import Icon from "../Icon";

const IconButton = (props) => {
    return <Container onClick={props.onClick || null}><Icon {...props} /></Container>;
};

export default IconButton;
