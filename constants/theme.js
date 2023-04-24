import { Dimensions } from 'react-native';

const WIDTH = {
    width100: '100%',
    widthScale: Dimensions.get('window').width / 375,
};
const COLORS = {
    primary: '#E80274',
    body: '#08021C',
    bodyLight: '#502D9F66',
    bodyTransp: '#08021C00',
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
    xSmall: 10 * WIDTH.widthScale,
    small: 12 * WIDTH.widthScale,
    xMedium: 14 * WIDTH.widthScale,
    medium: 16 * WIDTH.widthScale,
    large: 20 * WIDTH.widthScale,
    xLarge: 24 * WIDTH.widthScale,
    xxLarge: 32 * WIDTH.widthScale,
};

// Muốn ghi đề fontSize thì fontSize phải nằm sao TEXTS này
const TEXTS = {
    textRegular: {
        color: COLORS.white,
        fontFamily: FONTS.regular,
        fontWeight: '400',
        fontSize: SIZES.xMedium,
    },

    textBold: {
        color: COLORS.white,
        fontFamily: FONTS.bold,
        fontWeight: '700',
        fontSize: SIZES.xMedium,
    },

    textMedium: {
        color: COLORS.white,
        fontFamily: FONTS.medium,
        fontWeight: '600',
        fontSize: SIZES.xMedium,
    },
};

const BORDER = {
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#6A318133',
};
export { COLORS, FONTS, SIZES, TEXTS, WIDTH, BORDER };
