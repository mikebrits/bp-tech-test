import React from 'react';
import { Container, Input } from './SearchBar.styled-components';
import Icon from '../Icon';
import { useStateValue } from '../../state/context';
import {useLocale} from "../../i18n/LocaleHooks";

const SearchBar = () => {
    const [{ searchTerm }, dispatch] = useStateValue();
    const [locale] = useLocale();

    const handleChange = searchTerm => {
        dispatch({ type: 'SET_SEARCH_TERM', payload: { searchTerm } });
    };
    return (
        <Container>
            <label htmlFor="search">
                <Icon name="search" highlight id="search-label" size="1.4em" />

                <Input
                    aria-labelledby="search-label"
                    value={searchTerm}
                    onChange={e => handleChange(e.target.value)}
                    placeholder={locale.header.search.placeholder}
                    label="Search"
                    name="search"
                    id="search"
                />
            </label>
        </Container>
    );
};

export default SearchBar;
