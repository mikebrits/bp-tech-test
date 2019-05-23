import styled from 'styled-components/macro';

export const Container = styled.div`
    display: block;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.inverse};
    padding: 4px;
`;
