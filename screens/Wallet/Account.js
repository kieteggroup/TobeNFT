import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { MainContainer } from '../../components';
import { COLORS, SIZES, TEXTS, WIDTH, icons, images } from '../../constants';
import useMultiplyWidthScale from '../../hooks/useMultiplyWidthScale';
import { useLanguage } from '../../contexts/LanguageContext';

const Account = ({ navigation }) => {
    const { t } = useLanguage();

    return (
        <MainContainer leftIcon={images.logongang} noBackgroundFooter>
            <View style={styles.wrapper}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={icons.back} style={{ padding: 10 * WIDTH.widthScale,marginTop: 10 * WIDTH.widthScale }} />
                </TouchableOpacity>
                <Text style={styles.title}>{t('titleAccount')}</Text>
                <View style={styles.content}>
                    <View style={styles.infoTokenContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('AccountTwo')}>
                            <LinearGradient
                                colors={['#361E70CC', COLORS.bodyTransp]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.infoToken}
                            >
                                <Text style={styles.tokenHeading}>{t('bottomTabWallet')}</Text>
                                <View style={styles.infoContent}>
                                    <View style={styles.info}>
                                        <Image source={images.bnb} style={styles.img} />
                                        <LinearGradient
                                            colors={[COLORS.bodyLight, COLORS.bodyTransp]}
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 1, y: 1 }}
                                            ocations={[0.3392, 0.9986]}
                                            angle={295.36}
                                            style={styles.token}
                                        >
                                            <Text style={styles.tokenPrice}>1 986 086.06</Text>
                                        </LinearGradient>
                                    </View>
                                    <View style={styles.info}>
                                        <Image source={images.Usdt} style={styles.img} />
                                        <LinearGradient
                                            colors={[COLORS.bodyLight, COLORS.bodyTransp]}
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 1, y: 1 }}
                                            ocations={[0.3392, 0.9986]}
                                            angle={295.36}
                                            style={styles.token}
                                        >
                                            <Text style={styles.tokenPrice}>1 986 086.06</Text>
                                        </LinearGradient>
                                    </View>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                        <LinearGradient
                            colors={['#361E70CC', COLORS.bodyTransp]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.infoToken}
                        >
                            <Text style={styles.tokenHeading}>{t('headingCommissionAccount')}</Text>
                            <View style={styles.infoContent}>
                                <View style={styles.info}>
                                    <Image source={images.bnb} style={styles.img} />
                                    <Text style={styles.tokenName}>{t('directAccount')}</Text>

                                    <LinearGradient
                                        colors={[COLORS.bodyLight, COLORS.bodyTransp]}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        ocations={[0.3392, 0.9986]}
                                        angle={295.36}
                                        style={styles.token}
                                    >
                                        <Text style={styles.tokenPrice}>1 986 086.06</Text>
                                    </LinearGradient>
                                </View>
                                <View style={styles.info}>
                                    <Image source={images.bnb} style={styles.img} />
                                    <Text style={styles.tokenName}>{t('indirectAccount')}</Text>

                                    <LinearGradient
                                        colors={[COLORS.bodyLight, COLORS.bodyTransp]}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        ocations={[0.3392, 0.9986]}
                                        angle={295.36}
                                        style={styles.token}
                                    >
                                        <Text style={styles.tokenPrice}>1 986 086.06</Text>
                                    </LinearGradient>
                                </View>
                            </View>
                        </LinearGradient>
                        <LinearGradient
                            colors={['#361E70CC', COLORS.bodyTransp]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.infoToken}
                        >
                            <Text style={styles.tokenHeading}>{t('headingBalanceAccount')}</Text>
                            <View style={styles.infoContent}>
                                <View style={styles.info}>
                                    <Image source={images.bnb} style={styles.img} />
                                    <LinearGradient
                                        colors={[COLORS.bodyLight, COLORS.bodyTransp]}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        ocations={[0.3392, 0.9986]}
                                        angle={295.36}
                                        style={styles.token}
                                    >
                                        <Text style={styles.tokenPrice}>1 986 086.06</Text>
                                    </LinearGradient>
                                </View>
                                <View style={styles.info}>
                                    <Image source={images.bnb} style={styles.img} />
                                    <LinearGradient
                                        colors={[COLORS.bodyLight, COLORS.bodyTransp]}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        ocations={[0.3392, 0.9986]}
                                        angle={295.36}
                                        style={styles.token}
                                    >
                                        <Text style={styles.tokenPrice}>1 986 086.06</Text>
                                    </LinearGradient>
                                </View>
                            </View>
                        </LinearGradient>
                        <LinearGradient
                            colors={['#361E70CC', COLORS.bodyTransp]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.infoToken}
                        >
                            <Text style={styles.tokenHeading}>{t('indirectAccount')}</Text>
                            <View style={styles.infoContent}>
                                <View style={styles.info}>
                                    <Image source={images.bnb} style={styles.img} />
                                    <LinearGradient
                                        colors={[COLORS.bodyLight, COLORS.bodyTransp]}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        ocations={[0.3392, 0.9986]}
                                        angle={295.36}
                                        style={styles.token}
                                    >
                                        <Text style={styles.tokenPrice}>1 986 086.06</Text>
                                    </LinearGradient>
                                </View>
                                <View style={styles.info}>
                                    <Image source={images.Usdt} style={styles.img} />
                                    <LinearGradient
                                        colors={[COLORS.bodyLight, COLORS.bodyTransp]}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        ocations={[0.3392, 0.9986]}
                                        angle={295.36}
                                        style={styles.token}
                                    >
                                        <Text style={styles.tokenPrice}>1 986 086.06</Text>
                                    </LinearGradient>
                                </View>
                            </View>
                        </LinearGradient>
                        <LinearGradient
                            colors={['#361E70CC', COLORS.bodyTransp]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.infoToken}
                        >
                            <Text style={styles.tokenHeading}>{t('headingSaleAccount')}</Text>
                            <View style={styles.infoContent}>
                                <View style={styles.info}>
                                    <Image source={images.Usdt} style={styles.img} />
                                    <Text style={styles.tokenName}>{t('directAccount')}</Text>
                                    <LinearGradient
                                        colors={[COLORS.bodyLight, COLORS.bodyTransp]}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        ocations={[0.3392, 0.9986]}
                                        angle={295.36}
                                        style={styles.token}
                                    >
                                        <Text style={styles.tokenPrice}>1 986 086.06</Text>
                                    </LinearGradient>
                                </View>
                                <View style={styles.info}>
                                    <Image source={images.Usdt} style={styles.img} />
                                    <Text style={styles.tokenName}>{t('systemAccount')}</Text>

                                    <LinearGradient
                                        colors={[COLORS.bodyLight, COLORS.bodyTransp]}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        ocations={[0.3392, 0.9986]}
                                        angle={295.36}
                                        style={styles.token}
                                    >
                                        <Text style={styles.tokenPrice}>1 986 086.06</Text>
                                    </LinearGradient>
                                </View>
                            </View>
                        </LinearGradient>
                        <LinearGradient
                            colors={['#361E70CC', COLORS.bodyTransp]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.infoToken}
                        >
                            <Text style={styles.tokenHeading}>{t('headingNOWAccount')}</Text>
                            <View style={styles.infoContent}>
                                <View style={{ ...styles.info, flexDirection: 'row' }}>
                                    <Image source={images.bnb} style={styles.img} />
                                    <LinearGradient
                                        colors={[COLORS.bodyLight, COLORS.bodyTransp]}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        ocations={[0.3392, 0.9986]}
                                        angle={295.36}
                                        style={useMultiplyWidthScale({
                                            ...styles.token,
                                            width: 196,
                                            height: 27,
                                            marginTop: 0,
                                            marginLeft: 8,
                                        })}
                                    >
                                        <Text style={styles.tokenPrice}>1 986 086.06</Text>
                                    </LinearGradient>
                                </View>
                            </View>
                        </LinearGradient>
                    </View>
                </View>
            </View>
        </MainContainer>
    );
};
const styles = StyleSheet.create({
    wrapper: {
        width: WIDTH.width100,
        height: WIDTH.width100,
        paddingHorizontal: 13,
        marginBottom: 97,
    },
    content: {
        alignItems: 'center',
    },
    title: {
        ...TEXTS.textBold,
        fontSize: SIZES.xLarge,
        textAlign: 'center',
    },
    infoTokenContainer: {
        width: WIDTH.width100,
        rowGap: SIZES.xSmall,
        marginTop: 30,
    },
    infoToken: {
        width: 350,
        borderRadius: SIZES.large,
        padding: SIZES.xSmall,
        alignItems: 'center',
    },
    tokenHeading: {
        ...TEXTS.textBold,
        fontSize: SIZES.large,
    },
    infoContent: {
        flexDirection: 'row',
        columnGap: 51,
    },
    info: {
        alignItems: 'center',
    },
    img: {
        width: 50,
        height: 50,
    },
    tokenName: {
        ...TEXTS.textRegular,
        fontSize: SIZES.medium,
        marginBottom: 7,
    },
    token: {
        paddingHorizontal: 15,
        height: 22,
        justifyContent: 'center',
        borderRadius: 22.5,
        marginTop: 8,
    },
    tokenPrice: {
        fontSize: 13,
        ...TEXTS.textRegular,
        color: '#E4C1FE',
    },
});
useMultiplyWidthScale(styles);
export default Account;
