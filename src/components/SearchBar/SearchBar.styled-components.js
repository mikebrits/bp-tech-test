import styled from 'styled-components/macro';

export const Container = styled.div`
    display: block;
`;

export  const Input = styled.input`
    border: 0;
    border-bottom: ${({theme}) => theme.borders.standard};
    width: 280px;
    padding: 4px;
    margin-left: 8px;
    font-size: 16px;
    outline: none;
`;
