import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { COLORS, FONT, SIZES, TEXTS } from '../constants';
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
    const backgroundDefault = [backgroundColorBtn || '#E80274', backgroundColorBtn || '#7D0D6A'];
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
        width: 259,
        height: 42,
        maxWidth: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingHorizontal: 12,
    },
    buttonText: {
        fontSize: SIZES.medium,
        ...TEXTS.textMedium,
    },
});

export default ButtonCustom;
