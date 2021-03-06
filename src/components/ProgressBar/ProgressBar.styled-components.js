import styled from 'styled-components/macro';

export const Container = styled.div`
    width: 100%;
    height: 30px;
    position: relative;
    border-radius: ${({ theme }) => theme.borderRadius};
    background: ${({ theme }) => theme.colors.progressBG};
`;

export const Bar = styled(Container)`
    position: absolute;
    top: 0;
    bottom: 0;
    margin: 0;
    overflow: hidden;
    white-space: nowrap;
    transition: width ${({ percentageComplete }) => (percentageComplete === 100 ? 0 : 1)}s linear;
    ${({ percentageComplete, theme }) => `
    width: ${percentageComplete === 100 ? 0 : percentageComplete}%;
    background: ${theme.colors.primary}
  `};
`;

export const ProgressText = styled.div`
    position: absolute;
    //mix-blend-mode: difference;
    color: ${({ color }) => color};
    z-index: ${({ index = 0 }) => index};
    font-size: 10px;
    padding: 2px;
`;
