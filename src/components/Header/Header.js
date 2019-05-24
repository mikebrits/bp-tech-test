import React from 'react';
import { Container } from './Header.styled-components';
import IconButton from '../IconButton';
import SearchBar from '../SearchBar';
import { Divider } from '../UI/Divider';

const Header = ({}) => {
    return (
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <Divider />
            <Container>
                <IconButton name="bars" color="#005285" />
                <SearchBar />
                <IconButton name="ellipsis-h" color="#005285" />
            </Container>
            <Divider border />
        </div>
    );
};

export default Header;
