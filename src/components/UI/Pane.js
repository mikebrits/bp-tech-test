import styled from 'styled-components/macro';

export const View = styled.div`
    padding: ${({ padding = 0 }) => padding + 'px'};
    height: ${({ fullHeight = false, height }) =>
        (fullHeight && '100vh') || (height ? height + 'px' : 'auto')};
    width: ${({ width }) => (width ? width + 'px' : 'auto')};
    max-width: 100%;
    flex: ${({ flexFill }) => (flexFill ? '1' : 'none')};
    overflow: ${({ overflow = 'visible' }) => overflow};
    display: ${({ display = 'block' }) => display};
`;

export const Row = styled(View)`
    display: flex;
    flex-flow: row;
    justify-content: ${({ justify = 'normal' }) => justify};
    align-items: ${({ align = 'normal' }) => align};
`;

export const Col = styled(Row)`
    flex-flow: column;
`;

export const Pane = styled.div`
    background: ${({ theme }) => theme.colors.paneBG};
`;

export const Card = styled(Pane)`
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
    border: 0.5px solid #979797;
    border-radius: ${({ theme }) => theme.borderRadius};
    overflow: hidden;
`;
