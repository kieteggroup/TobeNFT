import React, { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, ImageBackground } from 'react-native';

import { COLORS, FONTS, SIZES, TEXTS, WIDTH, icons, images } from '../../constants';
import { InputCustom, ButtonCustom } from '../../CustomComponent';
import Logo from '../../assets/imageSvg/ImageSVG';

const ForgotPassword = (props) => {
    const [email, setEmail] = useState('');
    return (
        <ImageBackground source={images.signup} style={styles.wrapper} resizeMode="stretch">
            <View style={styles.logo}>
                <Logo />
            </View>
            <Text style={styles.title}>Forgot password</Text>
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
                <ButtonCustom buttonStyle={{ marginTop: 7 }} text="Submit" />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 20,
    },
    logo: {
        marginTop: 36,
        // marginTop: 36,
    },
    title: {
        fontSize: SIZES.xLarge,
        ...TEXTS.textMedium,
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
});

export default ForgotPassword;
