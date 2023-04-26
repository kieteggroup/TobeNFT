import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { MainContainer } from '../../components';
import { IconX } from '../../assets/imageSvg/ImageSVG';
import { ButtonCustom, InputCustom } from '../../CustomComponent';
import { BORDER, COLORS, SIZES, TEXTS, WIDTH, images } from '../../constants';
import useMultiplyWidthScale from '../../hooks/useMultiplyWidthScale';
import { useLanguage } from '../../contexts/LanguageContext';

const AuthCode = ({ navigation }) => {
    const { t } = useLanguage();

    return (
        <ImageBackground source={images.login} style={styles.wrapper}>
            <LinearGradient
                colors={[COLORS.bodyLight, COLORS.bodyTransp]}
                 start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                locations={[0.3392, 0.9986]}
                angle={295.36}
                style={styles.content}
            >
                <TouchableOpacity style={styles.close} onPress={() => navigation.goBack()}>
                    <IconX />
                </TouchableOpacity>
                <Text style={styles.text}>{t('authCode')}</Text>
                <InputCustom style={styles.input} radiusMax />
                <ButtonCustom  text={t('enabled') + ' 2FA'} buttonStyle={styles.button} />
            </LinearGradient>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 22,
    },
    content: {
        ...BORDER,
        borderWidth: 2,

        borderRadius: 18,
        width: 332,
        height: 169,
        paddingHorizontal: SIZES.large,
    },
    close: {
        position: 'absolute',
        right: 3,
        padding: 9,
    },
    text: {
        ...TEXTS.textBold,
        fontSize: SIZES.medium,
        marginTop: 15,
    },
    input: {
        backgroundColor: 'transparent',
        ...BORDER,
        borderColor: '#FFFFFF80',
        height: 40,
        fontSize: SIZES.xMedium,
        marginTop: 15,
        marginBottom: 28,
    },
    button: {
        height: 38.44,
        width: 153.12,
        marginBottom: 7,
    },
});
useMultiplyWidthScale(styles);
export default AuthCode;
