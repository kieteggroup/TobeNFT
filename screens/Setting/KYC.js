import React, { useState } from 'react';
import { Dimensions, Image, Pressable, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { MainContainer } from '../../components';
import { IconX } from '../../assets/imageSvg/ImageSVG';
import { ButtonCustom, InputCustom } from '../../CustomComponent';
import { BORDER, COLORS, SIZES, TEXTS, WIDTH, icons, images } from '../../constants';
import useMultiplyWidthScale from '../../hooks/useMultiplyWidthScale';
import { useLanguage } from '../../contexts/LanguageContext';

const genderList = ['male', 'female', 'other'];
const KYC = ({ navigation }) => {
    const [selectGender, setSelectGender] = useState('male');
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
                <Text style={styles.text}>{t('kyc')}</Text>
                <View style={styles.form}>
                    <InputCustom style={styles.input} radiusMax placeholder={t('placeholderFirstname')} />
                    <InputCustom style={styles.input} radiusMax placeholder={t('placeholderLastname')} />
                    <InputCustom style={styles.input} radiusMax placeholder={t('placeholderCountry')} />
                    <InputCustom style={styles.input} radiusMax placeholder={t('placeholderPassport')} />
                    <View style={styles.gender}>
                        {genderList.map((gender) => (
                            <TouchableOpacity
                                key={gender}
                                style={styles.radioItem}
                                onPress={() => setSelectGender(gender)}
                            >
                                <View style={[styles.radio, gender === selectGender && styles.radioCheck]}></View>
                                <Text style={styles.radioText}>{t(gender)}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles.upload}>
                        <LinearGradient colors={['#FFFFFF13', '#8F79D939']} style={styles.uploadItem}>
                            <Text style={styles.radioText}>{t('uploadFront')}</Text>
                            <Image source={icons.plus} style={styles.plus} />
                        </LinearGradient>
                        <LinearGradient colors={['#FFFFFF13', '#8F79D939']} style={styles.uploadItem}>
                            <Text style={styles.radioText}>{t('uploadBack')}</Text>
                            <Image source={icons.plus} style={styles.plus} />
                        </LinearGradient>
                        <LinearGradient colors={['#FFFFFF13', '#8F79D939']} style={styles.uploadItem}>
                            <Text style={styles.radioText}>{t('uploadFace')}</Text>
                            <Image source={icons.plus} style={styles.plus} />
                        </LinearGradient>
                    </View>
                    <ButtonCustom
                        text={t('send')}
                        buttonStyle={styles.button}
                        buttonStyleText={{ textTransform: 'uppercase' }}
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
        // paddingHorizontal: 22,/
    },
    content: {
        ...BORDER,
        borderWidth: 2,
        borderRadius: 18,
        width: 332 ,
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
    plus: {
        width:SIZES.large,
        height: 21,
    },
    button: {
        height: 38.44,
        width: 153.12,
        marginBottom: 28.56,
        marginTop: 7,
    },

    // radio
    gender: {
        flexDirection: 'row',
        columnGap: SIZES.large,
        marginTop: SIZES.xSmall,
    },
    radioItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: 5,
    },
    radio: {
        width: 8,
        height: 8,
        ...BORDER,
        borderColor: '#fff',
        borderRadius: 100,
        marginTop: 2,
    },
    radioCheck: {
        borderWidth: 0,
        backgroundColor: COLORS.primary,
    },
    radioText: {
        ...TEXTS.textRegular,
        paddingRight: SIZES.xSmall,
    },
    upload: {
        marginTop: 15,
        rowGap: 11,
    },
    uploadItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 18,
        minHeight: 36,
        width: 289,
        borderRadius: 18,
        padding: 7,
    },
});
useMultiplyWidthScale(styles);
export default KYC;
