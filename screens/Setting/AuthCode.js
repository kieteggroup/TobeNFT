import React from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { MainContainer } from '../../components';
import { IconX } from '../../assets/imageSvg/ImageSVG';
import { ButtonCustom, InputCustom } from '../../CustomComponent';
import { SIZES, TEXTS, WIDTH, images } from '../../constants';

const AuthCode = ({ navigation }) => {
    return (
        <ImageBackground source={images.login} style={styles.wrapper}>
            <LinearGradient
                colors={['#502D9F66', '#08021C00']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                locations={[0.3392, 0.9986]}
                style={styles.content}
            >
                <TouchableOpacity style={styles.close} onPress={() => navigation.goBack()}>
                    <IconX />
                </TouchableOpacity>
                <Text style={styles.text}>Authenticator Code</Text>
                <InputCustom style={styles.input} radiusMax />
                <ButtonCustom text="Enabled 2FA" buttonStyle={styles.button} />
            </LinearGradient>
        </ImageBackground>
    );
};

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 22,
    },
    content: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#6A318133',
        borderRadius: 18,
        width: 332 * WIDTH.widthScale,
        height: 169 * WIDTH.widthScale,
        paddingHorizontal: 20,
    },
    close: {
        position: 'absolute',
        right: 3,
        padding: 9,
    },
    text: {
        fontSize: SIZES.medium,
        ...TEXTS.textBold,
        marginTop: 15,
    },
    input: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#FFFFFF80',
        height: 40 * WIDTH.widthScale,
        fontSize: 14,
        marginTop: 15,
        marginBottom: 28,
    },
    button: {
        height: 38.44 * WIDTH.widthScale,
        width: 153.12 * WIDTH.widthScale,
        marginBottom: 7,
    },
});
export default AuthCode;
