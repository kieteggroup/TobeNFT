import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, ImageBackground, ScrollView, Linking } from 'react-native';
import CheckBox from 'react-native-check-box';
import { useNavigation } from '@react-navigation/native';

import { COLORS, FONTS, SIZES, TEXTS, WIDTH, icons, images } from '../../constants';
import { InputCustom, ButtonCustom } from './../../CustomComponent';

const SignUp = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [showPass, setShowPass] = useState(false);

    const navigation = useNavigation();
    return (
        <ImageBackground source={images.signup} style={styles.wrapper}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingHorizontal: 20, alignItems: 'center', ...styles.wrapper }}>
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
                                style={{ paddingRight: 40 }}
                                placeholder="Login password"
                                showPass={!showPass}
                                value={password}
                                onChangeText={setPassword}
                                placeholderTextColor="#fff"
                            />
                            <TouchableOpacity style={styles.showPass} onPress={() => setShowPass(!showPass)}>
                                <Image source={showPass ? icons.viewPass : icons.hiddenPass} />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.formGroup}>
                            <InputCustom
                                style={{ paddingRight: 40 }}
                                placeholder="Confirm Login password"
                                showPass={!showPass}
                                value={password}
                                onChangeText={setPassword}
                                placeholderTextColor="#fff"
                            />
                            <TouchableOpacity style={styles.showPass} onPress={() => setShowPass(!showPass)}>
                                <Image source={showPass ? icons.viewPass : icons.hiddenPass} />
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
                                    <Image source={icons.iconGoogle} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => Linking.openURL('https://facebook.com/')}>
                                    <Image source={icons.iconFacebook} />
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
        fontSize: SIZES.xLarge,
        ...TEXTS.textMedium,
    },
    form: {
        marginTop: 40,
        alignItems: 'center',
    },
    formGroup: {
        width: WIDTH.width100,
        marginBottom: 14,
        justifyContent: 'center',
    },

    showPass: {
        position: 'absolute',
        right: 0,
        padding: 10,
    },
    checkboxContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        height: 54 * WIDTH.widthScale,
    },

    textCheckbox: {
        marginLeft: 15.87,
        width: 310 * WIDTH.widthScale,
        fontSize: SIZES.small,
        ...TEXTS.textRegular,
    },
    textLink: {
        ...TEXTS.textBold,
        color: COLORS.primary,
    },

    footer: {
        marginTop: 24,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    footerLeft: {
        alignItems: 'center',
    },
    footerLeftTitle: {
        color: COLORS.white,
        fontSize: SIZES.small,
        fontFamily: FONTS.regular,
    },
    social: {
        flexDirection: 'row',
        marginTop: 10.05,
    },
    footerRight: {
        alignItems: 'center',
    },
    footerRightTitle: {
        color: COLORS.white,
        fontSize: SIZES.small,
        fontFamily: FONTS.medium,
        fontWeight: 500,
    },
    footerRightLogin: {
        color: COLORS.primary,
        fontFamily: FONTS.bold,
        fontWeight: 700,
        marginTop: 5,
    },
});

export default SignUp;
