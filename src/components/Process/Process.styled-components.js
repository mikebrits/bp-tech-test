import styled from 'styled-components/macro';
import { Card } from '../UI/Pane';

export const Container = styled(Card)`
    width: 720px;
    margin: 16px 0;
`;

export const Details = styled.div`
    padding: 8px 16px;
    width: 80%;
`;

export const Description = styled.div`
    min-height: 40px;
`;

export const Actions = styled.div`
    width: 20%;
    border-left: ${({ theme }) => theme.borders.standard};
    position: relative;
`;
