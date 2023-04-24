import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, ImageBackground, ScrollView, Linking } from 'react-native';
import CheckBox from 'react-native-check-box';
import { useNavigation } from '@react-navigation/native';

import { COLORS, FONTS, SIZES, TEXTS, WIDTH, icons, images } from '../../constants';
import { InputCustom, ButtonCustom } from './../../CustomComponent';
import useMultiplyWidthScale from '../../hooks/useMultiplyWidthScale';

const SignUp = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [showPass, setShowPass] = useState(false);

    const navigation = useNavigation();
    return (
        <ImageBackground source={images.signup} style={styles.wrapper}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: SIZES.large, alignItems: 'center', ...styles.wrapper }}>
                    <Text style={styles.title}>Sign Up</Text>
                    <View style={styles.form}>
                        <View style={styles.formGroup}>
                            <InputCustom
                                style={styles.input}
                                placeholder="Email address"
                                keyboardType="email-address"
                                value={email}
                                autoCapitalize="none"
                                onChangeText={setEmail}
                            />
                        </View>
                        <View style={styles.formGroup}>
                            <InputCustom
                                style={styles.input}
                                placeholder="Confirm Email address"
                                keyboardType="email-address"
                                value={email}
                                autoCapitalize="none"
                                onChangeText={setEmail}
                            />
                        </View>
                        <View style={styles.formGroup}>
                            <InputCustom
                                style={styles.input}
                                placeholder="Username"
                                keyboardType="email-address"
                                value={email}
                                autoCapitalize="none"
                                onChangeText={setEmail}
                            />
                        </View>
                        <View style={styles.formGroup}>
                            <InputCustom
                                style={{ paddingRight: 40 * WIDTH.widthScale }}
                                placeholder="Login password"
                                showPass={!showPass}
                                value={password}
                                onChangeText={setPassword}
                                placeholderTextColor="#fff"
                            />
                            <TouchableOpacity style={styles.showPass} onPress={() => setShowPass(!showPass)}>
                                <Image source={showPass ? icons.viewPass : icons.hiddenPass} style={styles.imgEye} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.formGroup}>
                            <InputCustom
                                style={{ paddingRight: 40 * WIDTH.widthScale }}
                                placeholder="Confirm Login password"
                                showPass={!showPass}
                                value={password}
                                onChangeText={setPassword}
                                placeholderTextColor="#fff"
                            />
                            <TouchableOpacity style={styles.showPass} onPress={() => setShowPass(!showPass)}>
                                <Image source={showPass ? icons.viewPass : icons.hiddenPass} style={styles.imgEye} />
                            </TouchableOpacity>
                        </View>

                        <View style={styles.formGroup}>
                            <InputCustom
                                style={styles.input}
                                placeholder="Country"
                                value={password}
                                onChangeText={setPassword}
                            />
                        </View>
                        <View style={styles.formGroup}>
                            <InputCustom
                                style={styles.input}
                                placeholder="Referral ID"
                                value={password}
                                onChangeText={setPassword}
                            />
                        </View>
                        <View style={styles.checkboxContainer}>
                            <CheckBox
                                leftText={'CheckBox'}
                                checkedCheckBoxColor="#fff"
                                checkBoxColor="#fff"
                                style={styles.checkbox}
                                isChecked={checkbox}
                                onClick={() => setCheckbox(!checkbox)}
                            />
                            <Text style={styles.textCheckbox}>
                                You agree with{' '}
                                <Text
                                    style={styles.textLink}
                                    onPress={() => Linking.openURL('https://toearnnow.com/auth/policy')}
                                >
                                    Terms of Service
                                </Text>{' '}
                                and{' '}
                                <Text
                                    style={styles.textLink}
                                    onPress={() => Linking.openURL('https://toearnnow.com/auth/policy')}
                                >
                                    Privacy Policy
                                </Text>{' '}
                                by To Earn Now
                            </Text>
                        </View>
                        <ButtonCustom buttonStyle={{ marginTop: 10 }} text="SIGN UP" />
                    </View>

                    <View style={styles.footer}>
                        <View style={styles.footerLeft}>
                            <Text style={styles.footerLeftTitle}>Or Sign Up with</Text>
                            <View style={styles.social}>
                                <TouchableOpacity onPress={() => Linking.openURL('https://google.com/')}>
                                    <Image source={icons.iconGoogle} style={styles.imgSocial} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => Linking.openURL('https://facebook.com/')}>
                                    <Image source={icons.iconFacebook} style={styles.imgSocial} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.footerRight}>
                            <Text style={styles.footerRightTitle}>Do you already have an account?</Text>
                            <Text style={styles.footerRightLogin} onPress={() => navigation.navigate('Login')}>
                                LOG IN NOW
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    title: {
        marginTop: 40,
        ...TEXTS.textMedium,
        fontSize: SIZES.xLarge,
    },
    form: {
        marginTop: 40,
        alignItems: 'center',
    },
    formGroup: {
        width: WIDTH.width100,
        marginBottom: SIZES.xMedium,
        justifyContent: 'center',
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
    checkboxContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        height: 54,
    },

    textCheckbox: {
        marginLeft: 15.87,
        width: 310,
        ...TEXTS.textRegular,
        fontSize: SIZES.small,
    },
    textLink: {
        ...TEXTS.textBold,
        color: COLORS.primary,
    },

    footer: {
        marginTop: SIZES.xLarge,
        width: WIDTH.width100,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footerLeft: {
        alignItems: 'center',
    },
    footerLeftTitle: {
        ...TEXTS.textRegular,
        fontSize: SIZES.small,
    },
    social: {
        flexDirection: 'row',
        marginTop: 10.05,
    },
    imgSocial: {
        width: 57,
        height: 56,
    },
    footerRight: {
        alignItems: 'center',
    },
    footerRightTitle: {
        ...TEXTS.textMedium,
        fontSize: SIZES.small,
    },
    footerRightLogin: {
        ...TEXTS.textBold,
        marginTop: 5,
        fontSize: SIZES.small,
        color: COLORS.primary,
    },
});
useMultiplyWidthScale(styles);
export default SignUp;
