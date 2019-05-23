import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 100%;
    height: 30px;
    position: relative;
    border-radius: ${({ theme }) => theme.borderRadius};
    background: #d0edff;
    margin-top: 8px;
`;

export const Bar = styled(Container)`
    ${({ percentageComplete, theme }) => `
    width: ${percentageComplete}%;
    background: ${theme.colors.primary}
  `};
`;
