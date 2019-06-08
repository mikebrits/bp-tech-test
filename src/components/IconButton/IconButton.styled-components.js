import styled from 'styled-components/macro';
import { getColor } from '../UI/Typography';

export const Container = styled.button`
    display: block;
    cursor: pointer;
    color: ${props => getColor(props)};
    background: transparent;
    border: 0;
    outline: 0;
    font-size: ${({ size }) => (size ? size + 'px' : 'inherit')};
`;
