import React from 'react';
import { Container, Input } from './SearchBar.styled-components';
import Icon from '../Icon';

const SearchBar = () => {
    
    return (
        <Container>
            <Icon name="search" highlight />
            <Input
                // value={searchTerm}
                // onChange={e => onChange(e.target.value)}
                placeholder="Search processes, workers or tags"
            />
        </Container>
    );
};

export default SearchBar;
