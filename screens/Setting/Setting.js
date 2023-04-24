import React from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

import { MainContainer } from '../../components';
import { SIZES, TEXTS, WIDTH, icons, images } from '../../constants';
import { ButtonCustom } from '../../CustomComponent';
import useMultiplyWidthScale from '../../hooks/useMultiplyWidthScale';

const listSetting = [
    {
        name: 'Promotion',
        navigate: 'Promotion',
    },
    {
        name: 'Listing',
        navigate: 'Listing',
    },
    {
        name: 'History',
        navigate: 'MenuHistory',
    },
    {
        name: 'Security',
        navigate: 'Security',
    },
    {
        name: 'Security 12 Characters',
        navigate: 'SecurityCharacters',
    },
    {
        name: 'Security 2FA',
        navigate: 'Security2FA',
    },
    {
        name: 'Change Password',
        navigate: 'ChangePassword',
    },
    {
        name: 'KYC',
        navigate: 'KYC',
    },
    {
        name: 'Language',
        navigate: 'Language',
    },
];
const listSocial = [
    {
        name: 'Telegram',
        img: images.tele,
    },
    {
        name: 'Twitter',
        img: images.twitter,
    },
    {
        name: 'Reddit',
        img: images.reddit,
    },
    {
        name: 'Facebook',
        img: images.fb,
    },
    {
        name: 'Instagram',
        img: images.instagram,
    },
    {
        name: 'Youtube',
        img: images.youtube,
    },
];

const Setting = ({ navigation }) => {
    return (
        <MainContainer noBackgroundFooter>
            <View style={styles.wrapper}>
                <Image source={icons.quaylai} />
                <View style={styles.main}>
                    <Text style={styles.title}>SETTING</Text>
                    <View style={styles.header}>
                        <View style={styles.headerItem}>
                            <Text style={styles.text}>Pre-sale ICO SWB</Text>
                            <Image source={icons.continueicon} />
                        </View>
                        <View style={styles.headerItem}>
                            <Text style={styles.text}>Wellcome DEMO5</Text>
                            <Image source={icons.continueicon} />
                        </View>
                    </View>

                    <View style={styles.buttonContent}>
                        <ButtonCustom
                            text="Referral link"
                            backgroundColorBtn="#E8127C"
                            buttonStyle={styles.button}
                            onPress={() => navigation.navigate('ShareLink')}
                        />
                        <ButtonCustom text="Referral code" backgroundColorBtn="#E8127C" buttonStyle={styles.button} />
                    </View>

                    <View style={styles.listSetting}>
                        {listSetting.map((item) => (
                            <TouchableOpacity
                                style={[styles.headerItem, styles.settingItem]}
                                onPress={() => navigation.navigate(item.navigate)}
                            >
                                <Text style={styles.text}>{item.name}</Text>
                                <Image source={icons.continueicon} />
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles.social}>
                        {listSocial.map((social) => (
                            <View style={styles.socialitem}>
                                <Image source={social.img} />
                                <Text style={styles.textSocial}>{social.name}</Text>
                            </View>
                        ))}
                    </View>
                    <View style={styles.header}>
                        <TouchableOpacity style={styles.headerItem}>
                            <Text style={styles.text}>Help Center</Text>
                            <Image source={icons.continueicon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.headerItem} onPress={() => navigation.navigate('Contact')}>
                            <Text style={styles.text}>About US</Text>
                            <Image source={icons.continueicon} />
                        </TouchableOpacity>
                    </View>

                    <ButtonCustom
                        text="LOGOUT"
                        buttonStyle={{
                            width: 332 * WIDTH.widthScale,
                            height: 39 * WIDTH.widthScale,
                        }}
                        buttonStyleText={{  ...TEXTS.textMedium,fontSize: SIZES.xLarge,}}
                    />
                </View>
            </View>
        </MainContainer>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginVertical: 30,
        paddingHorizontal: SIZES.large,
        width: WIDTH.width100,
        height: WIDTH.width100,
    },
    main: {
        flex: 1,
    },
    title: {
        ...TEXTS.textBold,
        fontSize: SIZES.xLarge,
        alignSelf: 'center',
    },
    header: {
        marginTop: SIZES.large,
        marginBottom: 40,
        paddingHorizontal: 30,
        rowGap: 30,
    },
    headerItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        ...TEXTS.textRegular,
    },
    buttonContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        columnGap: 27,
        marginBottom: 50,
    },
    button: {
        width: 150,
        height: 36,
        borderRadius: 5,
        borderWidth: 0,
    },
    listSetting: {
        marginBottom: 70,
        paddingHorizontal: 30,
    },
    settingItem: {
        height: 47,
        borderBottomWidth: 1,
        borderColor: '#FFFFFF',
        borderStyle: 'solid',
    },
    social: {
        paddingHorizontal: 30,
        marginBottom: SIZES.xSmall,
    },
    socialitem: {
        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#FFFFFF',
        borderStyle: 'solid',
    },
    textSocial: {
        ...TEXTS.textRegular,

        marginLeft: SIZES.xSmall,
    },
});
useMultiplyWidthScale(styles);
export default Setting;
