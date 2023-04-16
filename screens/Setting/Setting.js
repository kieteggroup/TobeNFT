import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { MainContainer } from '../../components';
import { SIZES, TEXTS, icons } from '../../constants';
import { ButtonCustom } from '../../CustomComponent';

const Setting = () => {
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
                            <Text style={styles.text}>Pre-sale ICO SWB</Text>
                            <Image source={icons.continueicon} />
                        </View>
                    </View>

                    <View style={styles.button}>
                        <ButtonCustom text="Referral link" />
                        <ButtonCustom text="Referral code" />
                    </View>

                    <View style={styles.listSetting}>
                        <View style={styles.settingItem}>
                            <Text style={styles.text}>Pre-sale ICO SWB</Text>
                            <Image source={icons.continueicon} />
                        </View>
                        <View style={styles.settingItem}>
                            <Text style={styles.text}>Pre-sale ICO SWB</Text>
                            <Image source={icons.continueicon} />
                        </View>
                        <View style={styles.settingItem}>
                            <Text style={styles.text}>Pre-sale ICO SWB</Text>
                            <Image source={icons.continueicon} />
                        </View>
                        <View style={styles.settingItem}>
                            <Text style={styles.text}>Pre-sale ICO SWB</Text>
                            <Image source={icons.continueicon} />
                        </View>
                        <View style={styles.settingItem}>
                            <Text style={styles.text}>Pre-sale ICO SWB</Text>
                            <Image source={icons.continueicon} />
                        </View>
                        <View style={styles.settingItem}>
                            <Text style={styles.text}>Pre-sale ICO SWB</Text>
                            <Image source={icons.continueicon} />
                        </View>
                        <View style={styles.settingItem}>
                            <Text style={styles.text}>Pre-sale ICO SWB</Text>
                            <Image source={icons.continueicon} />
                        </View>
                        <View style={styles.settingItem}>
                            <Text style={styles.text}>Pre-sale ICO SWB</Text>
                            <Image source={icons.continueicon} />
                        </View>
                    </View>
                    <View style={styles.social}>
                        <View style={styles.socialitem}>
                            <Text style={styles.textSocial}>Pre-sale ICO SWB</Text>
                            <Image source={icons.continueicon} />
                        </View>
                        <View style={styles.socialitem}>
                            <Text style={styles.textSocial}>Pre-sale ICO SWB</Text>
                            <Image source={icons.continueicon} />
                        </View>
                        <View style={styles.socialitem}>
                            <Text style={styles.textSocial}>Pre-sale ICO SWB</Text>
                            <Image source={icons.continueicon} />
                        </View>
                        <View style={styles.socialitem}>
                            <Text style={styles.textSocial}>Pre-sale ICO SWB</Text>
                            <Image source={icons.continueicon} />
                        </View>
                        <View style={styles.socialitem}>
                            <Text style={styles.textSocial}>Pre-sale ICO SWB</Text>
                            <Image source={icons.continueicon} />
                        </View>
                    </View>
                    <View style={styles.header}>
                        <View style={styles.headerItem}>
                            <Text style={styles.text}>Pre-sale ICO SWB</Text>
                            <Image source={icons.continueicon} />
                        </View>
                        <View style={styles.headerItem}>
                            <Text style={styles.text}>Pre-sale ICO SWB</Text>
                            <Image source={icons.continueicon} />
                        </View>
                    </View>
                </View>
            </View>
        </MainContainer>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        marginVertical: 30,
        paddingHorizontal: 20,
        flex: 1,
    },
    main: {
        justifyContent: 'center',
        width: WIDTH.width100,
    },
    title: {
        fontSize: SIZES.xLarge,
        ...TEXTS.textBold,
    },
    header: {
        marginTop: 20,
        marginBottom: 40,
        paddingHorizontal: 30,
        columnGap: 30,
    },
    headerItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 18,
        ...TEXTS.textBold,
    },
    button: {
        flexDirection: 'row',
        columnGap: 27,
        marginBottom: 50,
    },
    listSetting: {
        marginBottom: 70,
    },
    settingItem: {
        height: 45,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderColor: '#FFFFFF',
        borderStyle: 'solid',
    },
    social: {},
    socialitem: {
        height: 45,
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#FFFFFF',
        borderStyle: 'solid',
    },
    textSocial: {
        fontSize: SIZES.small,
        marginLeft: 12,
    },
});

export default Setting;
