import { StyleSheet, TextInput, View } from 'react-native';

import { COLORS, FONTS, SIZES, TEXTS, WIDTH } from '../constants';

const InputCustom = ({
    onChangeText,
    autoCapitalize,
    placeholder,
    keyboardType,
    value,
    showPass,
    placeholderStyle = '#fff',
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
            placeholderTextColor={placeholderStyle}
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
        borderRadius: 10,
        backgroundColor: '#FFFFFF33',
        paddingHorizontal: SIZES.small,
        // paddingVertical: 16,
        borderColor: '#ffffff29',
        fontSize: SIZES.small,
        ...TEXTS.textRegular,
    },
});

export default InputCustom;
