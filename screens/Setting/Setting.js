import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { MainContainer } from '../../components';
import { SIZES, TEXTS, WIDTH, icons, images } from '../../constants';
import { ButtonCustom } from '../../CustomComponent';
import { TouchableOpacity } from 'react-native';

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
        navigate: 'History',
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

                    <View style={styles.button}>
                        <ButtonCustom
                            text="Referral link"
                            backgroundColorBtn="#E8127C"
                            buttonStyle={{
                                width: 150,
                                height: 36,
                                borderRadius: 5,
                                borderWidth: 0,
                            }}
                        />
                        <ButtonCustom
                            text="Referral code"
                            backgroundColorBtn="#E8127C"
                            buttonStyle={{
                                width: 150,
                                height: 36,
                                borderRadius: 5,
                                borderWidth: 0,
                            }}
                        />
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
                        <View style={styles.headerItem}>
                            <Text style={styles.text}>Help Center</Text>
                            <Image source={icons.continueicon} />
                        </View>
                        <View style={styles.headerItem}>
                            <Text style={styles.text}>About US</Text>
                            <Image source={icons.continueicon} />
                        </View>
                    </View>

                    <ButtonCustom
                        text="LOGOUT"
                        buttonStyle={{
                            width: 332,
                            height: 39,
                        }}
                        buttonStyleText={{ fontSize: SIZES.xLarge, ...TEXTS.textRegular, fontWeight: 500 }}
                    />
                </View>
            </View>
        </MainContainer>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginVertical: 30,
        paddingHorizontal: 20,
        width: WIDTH.width100,
        height: WIDTH.width100,
    },
    main: {
        flex: 1,
    },
    title: {
        fontSize: SIZES.xLarge,
        ...TEXTS.textBold,
        alignSelf: 'center',
    },
    header: {
        marginTop: 20,
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
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        columnGap: 27,
        marginBottom: 50,
    },
    listSetting: {
        marginBottom: 70,
        paddingHorizontal: 30,
    },
    settingItem: {
        height: 45,
        borderBottomWidth: 1,
        borderColor: '#FFFFFF',
        borderStyle: 'solid',
    },
    social: {
        paddingHorizontal: 30,
        marginBottom: 10,
    },
    socialitem: {
        height: 45,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#FFFFFF',
        borderStyle: 'solid',
    },
    textSocial: {
        ...TEXTS.textRegular,

        marginLeft: 10,
    },
});

export default Setting;
