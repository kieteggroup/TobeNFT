import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, ImageBackground, Image } from 'react-native';

import { COLORS, FONT, SIZES, WIDTH, icons, images } from '../../constants';
import { InputCustom, ButtonCustom } from '../../CustomComponent';

const { width, height } = Dimensions.get('window');
const NewPassword = (props) => {
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    return (
        <ImageBackground source={images.signup} style={styles.wrapper} resizeMode="stretch">
            <View style={styles.logo}>
                <Image source={icons.logoLogin} />
            </View>
            <Text style={styles.title}>Enter new password</Text>
            <View style={styles.form}>
                <View style={styles.formGroup}>
                    <InputCustom
                        style={{ ...styles.input, paddingRight: 40 }}
                        placeholder="Password"
                        showPass={!showPass}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity style={styles.showPass} onPress={() => setShowPass(!showPass)}>
                        <Image source={showPass ? icons.viewPass : icons.hiddenPass} />
                    </TouchableOpacity>
                </View>
                <View style={styles.formGroup}>
                    <InputCustom
                        style={{ ...styles.input, paddingRight: 40 }}
                        placeholder="Confirm password"
                        showPass={!showPass}
                        value={password}
                        onChangeText={setPassword}
                    />
                    <TouchableOpacity style={styles.showPass} onPress={() => setShowPass(!showPass)}>
                        <Image source={showPass ? icons.viewPass : icons.hiddenPass} />
                    </TouchableOpacity>
                </View>
                <ButtonCustom buttonStyle={{ marginTop: 8 }} text="Submit" />
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
        marginTop: 80,
        // marginTop: 36,
    },
    title: {
        color: COLORS.white,
        fontSize: SIZES.xLarge,
        fontWeight: 600,
        fontFamily: FONT.medium
    },
    form: {
        alignItems: 'center',
        marginTop: 82,
    },
    formGroup: {
        marginBottom: 13,
        justifyContent: 'center',
        width: WIDTH.width100,
    },

    showPass: {
        position: 'absolute',
        right: 0,
        padding: 10,
    },
});

export default NewPassword;
