import React, { useState, useTransition } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Dimensions,
    ImageBackground,
    Image,
    ScrollView,
    FlatList,
} from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';

import { COLORS, FONTS, SIZES, TEXTS, WIDTH, icons, images } from '../../constants';
import { InputCustom, ButtonCustom } from './../../CustomComponent';
import Logo from '../../assets/imageSvg/ImageSVG';
import useMultiplyWidthScale from '../../hooks/useMultiplyWidthScale';
import { useTranslation } from 'react-i18next';

const Login = () => {
    const { t } = useTranslation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    const navigation = useNavigation();

    const handleLogin = () => {
        navigation.dispatch(StackActions.replace('ScreenBottomTab'));
    };
    return (
        <ImageBackground style={styles.wrapper} source={images.login} resizeMode="stretch">
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center' }}>
                <View style={styles.logo}>
                    <Logo />
                </View>

                <Text style={styles.title}>{t('titleAuth')}</Text>
                <View style={styles.form}>
                    <View style={styles.formGroup}>
                        <InputCustom
                            style={styles.input}
                            placeholder="Email address"
                            keyboardType="email-address"
                            value={email}
                            autoCapitalize="none"
                            onChangeText={setEmail}
                            placeholderTextColor="#fff"
                        />
                    </View>
                    <View style={styles.formGroup}>
                        <InputCustom
                            style={{ ...styles.input, paddingRight: 45 }}
                            placeholder="Password"
                            showPass={!showPass}
                            value={password}
                            onChangeText={setPassword}
                            placeholderTextColor="#fff"
                        />
                        <TouchableOpacity style={styles.showPass} onPress={() => setShowPass(!showPass)}>
                            <Image source={showPass ? icons.viewPass : icons.hiddenPass} style={styles.imgEye} />
                        </TouchableOpacity>
                    </View>
                    <ButtonCustom style={{ marginTop: 21.5 * WIDTH.widthScale }} text="Login" onPress={handleLogin} />
                </View>
                <Text style={styles.textForgot} onPress={() => navigation.navigate('ForgotPassword')}>
                    Forgot password?
                </Text>

                <View style={styles.noAccount}>
                    <Text style={styles.noAccountText}>
                        Don’t have an account?{' '}
                        <Text style={styles.sign} onPress={() => navigation.navigate('SignUp')}>
                            Sign Up
                        </Text>
                    </Text>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingHorizontal: SIZES.large,
    },
    logo: {
        marginTop: 36,
    },
    title: {
        ...TEXTS.textMedium,
        fontSize: SIZES.xLarge,
    },
    form: {
        alignItems: 'center',
        marginTop: 82,
    },
    formGroup: {
        marginBottom: 16.5,
        justifyContent: 'center',
        width: WIDTH.width100,
    },

    showPass: {
        position: 'absolute',
        right: 0,
        padding: SIZES.xSmall,
    },
    imgEye: {
        width: 19.09,
        height: 18,
    },
    textForgot: {
        ...TEXTS.textRegular,
        marginTop: 23,
    },
    noAccount: {
        marginTop: 195,
        marginBottom: 89,
        flex: 1,
        justifyContent: 'center',
    },
    noAccountText: {
        ...TEXTS.textMedium,
        fontSize: SIZES.medium,
        color: '#6F6D6D',
    },
    sign: {
        color: COLORS.white,
    },
});
useMultiplyWidthScale(styles);
export default Login;
