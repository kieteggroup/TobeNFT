import { StyleSheet, TextInput, View } from 'react-native';

import { COLORS, FONTS, SIZES, TEXTS, WIDTH } from '../constants';

const InputCustom = ({
    onChangeText,
    autoCapitalize,
    placeholder,
    keyboardType,
    value,
    showPass,
    placeholderColor = '#fff',
    style,
    radiusMax,
    multiline,
    numberOfLines,
}) => {
    const radius = radiusMax && {
        borderRadius: 100,
    };
    return (
        <TextInput
            style={{ ...styles.input, ...style, ...radius }}
            placeholder={placeholder}
            secureTextEntry={showPass}
            value={value}
            onChangeText={onChangeText}
            placeholderTextColor={placeholderColor}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
            multiline={multiline}
            numberOfLines={numberOfLines}
        />
    );
};
const styles = StyleSheet.create({
    input: {
        width: 334 * WIDTH.widthScale,
        maxWidth: WIDTH.width100,
        height: 50 * WIDTH.widthScale,
        borderRadius: SIZES.xSmall,
        backgroundColor: '#FFFFFF33',
        paddingHorizontal: SIZES.small,
        // paddingVertical : SIZES.medium,
        borderColor: '#ffffff29',
        ...TEXTS.textRegular,
        fontSize: SIZES.small,
    },
});

export default InputCustom;
