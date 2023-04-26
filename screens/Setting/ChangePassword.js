import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { IconX } from '../../assets/imageSvg/ImageSVG';
import { ButtonCustom, InputCustom } from '../../CustomComponent';
import { BORDER, COLORS, SIZES, TEXTS, WIDTH, images } from '../../constants';
import useMultiplyWidthScale from '../../hooks/useMultiplyWidthScale';
import { useLanguage } from '../../contexts/LanguageContext';

const ChangePassword = ({ navigation }) => {
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
                <Text style={styles.text}>{t('changePass')}</Text>
                <View style={styles.form}>
                    <InputCustom style={styles.input} radiusMax placeholder={t('oldPass')} />
                    <InputCustom style={styles.input} radiusMax placeholder={t('newPass')} />
                    <InputCustom style={styles.input} radiusMax placeholder={t('retypePass')} />
                    <ButtonCustom
                        text={t('accept')}
                        buttonStyle={styles.button}
                        onPress={() => navigation.navigate('AuthCode')}
                    />
                </View>
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
        height: 292,
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
    form: {
        marginTop: 15,
        rowGap: 11,
    },
    input: {
        backgroundColor: 'transparent',
        ...BORDER,
        borderColor: '#FFFFFF80',
        height: 40,
        fontSize: SIZES.xMedium,
    },
    button: {
        height: 38.44,
        width: 153.12,
        marginBottom: 7,
        marginTop: 9,
    },
});

useMultiplyWidthScale(styles);
export default ChangePassword;
