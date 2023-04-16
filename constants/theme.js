const WIDTH = {
    width100: '100%',
};
const COLORS = {
    primary: '#E80274',
    body: '#08021C',
    secondary: '#444262',

    gray: '#83829A',
    gray2: '#C1C0C8',

    white: '#fff',
    lightWhite: '#FAFAFC',
};

const FONT = {
    regular: 'IBMPlexSans_Regular',
    medium: 'IBMPlexSans_Medium',
    bold: 'IBMPlexSans_Bold',
    regularRoboto: 'Roboto_Regular',
    boldRoboto: 'Roboto_Bold',
};

const SIZES = {
    xSmall: 10,
    small: 12,
    medium: 16,
    large: 20,
    xLarge: 24,
    xxLarge: 32,
};

const TEXTS = {
    textRegular: {
        color: COLORS.white,
        fontFamily: FONT.regular,
        fontWeight: '400',
    },

    textBold: {
        color: COLORS.white,
        fontFamily: FONT.bold,
        fontWeight: '700',
    },

    textMedium: {
        color: COLORS.white,
        fontFamily: FONT.medium,
        fontWeight: '600',
    },
};

export { COLORS, FONT, SIZES, TEXTS, WIDTH };
