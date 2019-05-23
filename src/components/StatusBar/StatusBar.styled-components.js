import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    background: #005285;
    color: ${({ theme }) => theme.colors.inverse};
    padding: 8px;
    margin-top: 14px;
    text-align: center;
`;
