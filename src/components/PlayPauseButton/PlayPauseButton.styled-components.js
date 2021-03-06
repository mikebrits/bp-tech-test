import styled from 'styled-components/macro';

export const Container = styled.div`
    position: absolute;
    left: -18px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    top: 0;
    bottom: 0;
`;

export const Button = styled.div`
    background: ${({ theme }) => theme.colors.paneBG};
    color: ${({ theme }) => theme.colors.primary};
    height: 36px;
    width: 36px;
    border-radius: 36px;
    border: ${({ theme }) => theme.borders.standard};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
    pointer-events: all;
`;
