import styled from 'styled-components';

export const getColor = ({ theme, primary, secondary, highlight, inverse }) => {
    switch (true) {
        case secondary:
            return theme.colors.secondaryText;
        case highlight:
            return theme.colors.textHighlight;
        case inverse:
            return theme.colors.inverse;
        case primary:
        default:
            return 'inherit';
    }
};

const getWeight = ({ theme, normal, medium, bold }) => {
    switch (true) {
        case normal:
            return theme.fontWeights.normal;
        case medium:
            return theme.fontWeights.medium;
        case bold:
            return theme.fontWeights.bold;
        default:
            return 'inherit';
    }
};

export const Heading = styled.h1`
    color: ${props => getColor(props)};
    margin: ${({ margin = '0 0 16px 0' }) => margin};
    font-size: ${({ theme }) => theme.fontSizes.h1};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
`;

export const Subheading = styled.h2`
    color: ${props => getColor(props)};
    margin: ${({ margin = '0 0 16px 0' }) => margin};
    font-size: ${({ theme }) => theme.fontSizes.h2};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
`;

export const Text = styled.span`
    color: ${props => getColor(props)};
    margin: ${({ margin = 0 }) => margin};
    font-size: ${({ theme, size }) => size || 'inherit'};
    font-weight: ${props => getWeight(props)};
`;

export const Small = styled(Text)`
    font-size: ${({ theme }) => theme.fontSizes.small};
`;
