import styled from 'styled-components';
import { Card } from '../UI/Pane';
import { Text } from '../UI/Typography';

export const Container = styled(Card)`
    width: 720px;
    margin: 8px 0;
`;

export const Details = styled.div`
    padding: 8px 16px;
    width: 75%;
`;

export const Name = styled(Text)``;

export const Description = styled(Text)`
    min-height: 40px;
`;

export const Actions = styled.div`
    width: 25%;
    border-left: ${({ theme }) => theme.borders.standard};
    position: relative;
    padding-top: 16px;
`;

export const ActionsWrapper = styled.div`
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
    text-align: center;
`;
