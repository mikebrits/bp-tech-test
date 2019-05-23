import React from 'react';
import { Container } from './Header.styled-components';
import IconButton from '../IconButton';
import SearchBar from '../SearchBar';
import { Divider } from '../UI/Divider';

const Header = ({}) => {
    return (
        <>
            <Divider />
            <Container>
                <IconButton name="bars" />
                <SearchBar />
                <IconButton name="ellipsis-h" />
            </Container>
            <Divider border />

        </>
    );
};

export default Header;
