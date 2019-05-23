const primary = '#0C75B7';

export const colors = {
    primary,
    primaryHighlight: '#0c5182',
    primaryText: '#4A4A4A',
    secondaryText: '#949494',
    textHighlight: primary,
    inverse: '#FFFFFF',
    border: '#DDDDDD',
    pageBG: '#FAFAFA',
    paneBG: '#FFFFFF',
    paneBGAlt: primary,
};

export const fontSizes = {
    h1: '24px',
    h2: '20px',
    body: '15px',
    small: '12px',
};

export const fontWeights = {
    normal: '400',
    medium: '600',
    bold: '700',
};

export const fontFamily = "'Roboto', sans-serif;";

export const shadows = {
    standard: '0 2px 10px 0 rgba(0,0,0,0.1)',
};

export const borders = {
    standard: `1px solid ${colors.border}`,
    highlightThin: `1px solid ${colors.primary}`,
    highlight: `1px solid ${colors.primary}`,
    highlightThick: `3px solid ${colors.primary}`,
    highlightDashed: `1px dashed ${colors.primary}`,
    inverseThin: `1px solid ${colors.inverse}`,
    inverse: `2px solid ${colors.inverse}`,
    inverseThick: `3px solid ${colors.inverse}`,
    inverseDashed: `1px dashed ${colors.inverse}`,
    dashed: `1px dashed ${colors.border}`,
    input: `1px solid ${colors.border}`,
    alt: `1px solid ${colors.pageBG}`,
};

export const cards = {
    primary: `
        box-shadow: ${shadows};
        background-color: ${colors.paneBG};
    `,
    alt: `
        box-shadow: ${shadows};
        background-color: ${colors.primary};
    `,
};

export const borderRadius = '10px 10px 20px 10px;';

const theme = {
    colors,
    fontSizes,
    shadows,
    borders,
    cards,
    fontWeights,
    fontFamily,
    borderRadius,
};

export default theme;
