import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    background: ${({ theme }) => theme.colors.primaryHighlight};
    color: ${({ theme }) => theme.colors.inverse};
    padding: 8px;
    margin-top: 14px;
    justify-content: center;
`;
