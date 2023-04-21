import React, { useState } from 'react';
import { Dimensions, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MainContainer } from '../../components';
import { IconX } from '../../assets/imageSvg/ImageSVG';
import { ButtonCustom, InputCustom } from '../../CustomComponent';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SIZES, TEXTS, WIDTH, icons, images } from '../../constants';
import { ImageBackground } from 'react-native';

const genderList = ['Male', 'Female', 'Other'];
const KYC = ({ navigation }) => {
    const [selectGender, setSelectGender] = useState('Male');
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
                <Text style={styles.text}>KYC</Text>
                <View style={styles.form}>
                    <InputCustom style={styles.input} radiusMax placeholder="Firstname" />
                    <InputCustom style={styles.input} radiusMax placeholder="Lastname" />
                    <InputCustom style={styles.input} radiusMax placeholder="Country" />
                    <InputCustom style={styles.input} radiusMax placeholder="Passport" />
                    <View style={styles.gender}>
                        {genderList.map((gender) => (
                            <TouchableOpacity style={styles.radioItem} onPress={() => setSelectGender(gender)}>
                                <View style={[styles.radio, gender === selectGender && styles.radioCheck]}></View>
                                <Text style={styles.radioText}>{gender}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles.upload}>
                        <LinearGradient colors={["#FFFFFF13","#8F79D939"]} style={styles.uploadItem}>
                            <Text  style={styles.radioText}>Upload a photo of ID card (Front)</Text>
                            <Image source={icons.plus}/>
                        </LinearGradient>
                        <LinearGradient colors={["#FFFFFF13","#8F79D939"]} style={styles.uploadItem}>
                            <Text  style={styles.radioText}>Upload a photo of ID card (Back)</Text>
                            <Image source={icons.plus}/>
                        </LinearGradient>
                        <LinearGradient colors={["#FFFFFF13","#8F79D939"]} style={styles.uploadItem}>
                            <Text  style={styles.radioText}>Upload a full face photo</Text>
                            <Image source={icons.plus}/>
                        </LinearGradient>
                    </View>
                    <ButtonCustom text="SEND" buttonStyle={styles.button} />
                </View>
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
    form: {
        marginTop: 15,
        rowGap: 11,
    },
    input: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#FFFFFF80',
        height: 40,
        fontSize: 14,
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
        columnGap: 20,
        marginTop:10
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
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#fff',
        borderRadius: 100,
        marginTop:2
    },
    radioCheck: {
        borderWidth: 0,
        backgroundColor: COLORS.primary,
    },
    radioText: {
        ...TEXTS.textRegular,
        fontSize: 14,
    },
    upload:{
        marginTop:15,
        rowGap:11
    },
uploadItem:{
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:18,
    height:36,
    borderRadius:18
},
});
export default KYC;
