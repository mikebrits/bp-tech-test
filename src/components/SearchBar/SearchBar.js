import React from 'react';
import { Container, Input } from './SearchBar.styled-components';
import { useDispatch, useSelector } from 'react-redux';
import Icon from '../Icon';
import { getSearchTerm } from '../../selectors';
import { updateSearchTerm } from '../../actions/general.actions';
import IconButton from '../IconButton';

const SearchBar = () => {
    const searchTerm = useSelector(getSearchTerm);
    const dispatch = useDispatch();
    const onChange = value => dispatch(updateSearchTerm(value));

    return (
        <Container>
            <Icon name="search" color="#005285" />
            <Input
                value={searchTerm}
                onChange={e => onChange(e.target.value)}
                placeholder="Search processes, workers or tags"
            />
        </Container>
    );
};

export default SearchBar;
