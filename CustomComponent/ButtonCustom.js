import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { COLORS, FONTS, SIZES, TEXTS, WIDTH } from '../constants';
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
    start,
    end,
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
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#FFFFFF29',
        borderRadius: 74,
        alignItems: 'center',
        justifyContent: 'center',
        width: 259 * WIDTH.widthScale,
        height: 42 * WIDTH.widthScale,
        maxWidth: '100%',
        flexDirection: 'row',
        overflow: 'hidden',
        paddingHorizontal: SIZES.small,
    },
    buttonText: {
        fontSize: SIZES.medium,
        ...TEXTS.textMedium,
    },
});

export default ButtonCustom;
