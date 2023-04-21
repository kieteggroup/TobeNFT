import { Dimensions } from 'react-native';

const WIDTH = {
    width100: '100%',
    widthScale: Dimensions.get('window').width / 376,
};
const COLORS = {
    primary: '#E80274',
    body: '#08021C',
    white: '#fff',
};

const FONTS = {
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
        fontFamily: FONTS.regular,
        fontWeight: '400',
    },

    textBold: {
        color: COLORS.white,
        fontFamily: FONTS.bold,
        fontWeight: '700',
    },

    textMedium: {
        color: COLORS.white,
        fontFamily: FONTS.medium,
        fontWeight: '600',
    },
};

export { COLORS, FONTS, SIZES, TEXTS, WIDTH };
