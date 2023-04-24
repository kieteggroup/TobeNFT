import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { BORDER, COLORS, FONTS, SIZES, TEXTS, WIDTH } from '../constants';
import useMultiplyWidthScale from '../hooks/useMultiplyWidthScale';
const ButtonCustom = ({
    onPress,
    text,
    buttonStyle,
    buttonStyleText,
    leftIcon,
    rightIcon,
    backgroundColorBtn,
    ref,
    backgroundLinearGradient,
    start = { x: 0, y: 0 },
    end = { x: 0, y: 1 },
    locations = [0, 1],
    containerStyle,
}) => {
    const backgroundDefault = [backgroundColorBtn || '#EA0274', backgroundColorBtn || '#7B0D6A'];
    return (
        <TouchableOpacity onPress={onPress} ref={ref} style={{ alignItems: 'center', ...containerStyle }}>
            <LinearGradient
                colors={backgroundLinearGradient || backgroundDefault}
                style={{ ...styles.button, ...buttonStyle }}
                start={start}
                end={end}
                locations={locations}
            >
                {leftIcon}
                <Text style={{ ...styles.buttonText, ...buttonStyleText }}>{text}</Text>
                {rightIcon}
            </LinearGradient>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        ...BORDER,
        borderColor: '#FFFFFF29',
        borderRadius: 74,
        alignItems: 'center',
        justifyContent: 'center',
        width: 259,
        height: 42,
        maxWidth: WIDTH.width100,
        flexDirection: 'row',
        overflow: 'hidden',
        paddingHorizontal: SIZES.small,
    },
    buttonText: {
        ...TEXTS.textMedium,
        fontSize: SIZES.medium,
    },
});
useMultiplyWidthScale(styles);
export default ButtonCustom;
