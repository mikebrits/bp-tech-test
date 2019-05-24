import styled from 'styled-components';

export const Divider = styled.div`
    height: 1px;
    margin: ${({ margin = 8 }) => `${margin}px 0`};
    border-bottom: ${({ theme, border = false, color }) =>
        `${border ? '1px' : '0'} solid ${color || theme.colors.border}`};
    display: block;
`;
