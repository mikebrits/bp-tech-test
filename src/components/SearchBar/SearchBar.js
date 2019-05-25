import React from 'react';
import { Container, Input } from './SearchBar.styled-components';
import Icon from '../Icon';
import { useStateValue } from '../../state/context';

const SearchBar = () => {
    const [{ searchTerm }, dispatch] = useStateValue();

    const handleChange = searchTerm => {
        dispatch({ type: 'SET_SEARCH_TERM', payload: { searchTerm } });
    };
    return (
        <Container>
            <Icon name="search" highlight />
            <Input
                value={searchTerm}
                onChange={e => handleChange(e.target.value)}
                placeholder="Search processes, workers or tags"
            />
        </Container>
    );
};

export default SearchBar;
