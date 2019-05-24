import styled from 'styled-components/macro';
import { getColor } from '../UI/Typography';

export const Container = styled.div`
    display: block;
    cursor: pointer;
    color: ${props => getColor(props)};
`;
