import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { MainContainer } from '../../components';
import { COLORS, SIZES, TEXTS, WIDTH, icons, images } from '../../constants';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Account = ({ navigation }) => {
    return (
        <MainContainer leftIcon={images.logongang} noBackgroundFooter>
            <View style={styles.wrapper}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={icons.back} style={{ marginTop: 10 }} />
                </TouchableOpacity>
                <Text style={styles.title}>Account</Text>
                <View style={styles.content}>
                    <View style={styles.infoTokenContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('AccountTwo')}>
                            <LinearGradient
                                colors={['#361E70CC', '#08021C00']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.infoToken}
                            >
                                <Text style={styles.tokenHeading}>Wallet</Text>
                                <View style={styles.infoContent}>
                                    <View style={styles.info}>
                                        <Image source={images.bnb} style={styles.img} />
                                        <LinearGradient
                                            colors={['#502D9F66', '#08021C00']}
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 1, y: 1 }}
                                            locations={[0.3392, 0.9986]}
                                            style={styles.token}
                                        >
                                            <Text style={styles.tokenPrice}>1 986 086.06</Text>
                                        </LinearGradient>
                                    </View>
                                    <View style={styles.info}>
                                        <Image source={images.Usdt} style={styles.img} />
                                        <LinearGradient
                                            colors={['#502D9F66', '#08021C00']}
                                            start={{ x: 0, y: 0 }}
                                            end={{ x: 1, y: 1 }}
                                            locations={[0.3392, 0.9986]}
                                            style={styles.token}
                                        >
                                            <Text style={styles.tokenPrice}>1 986 086.06</Text>
                                        </LinearGradient>
                                    </View>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                        <LinearGradient
                            colors={['#361E70CC', '#08021C00']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.infoToken}
                        >
                            <Text style={styles.tokenHeading}>Commission</Text>
                            <View style={styles.infoContent}>
                                <View style={styles.info}>
                                    <Image source={images.bnb} style={styles.img} />
                                    <Text style={styles.tokenName}>Direct</Text>

                                    <LinearGradient
                                        colors={['#502D9F66', '#08021C00']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        locations={[0.3392, 0.9986]}
                                        style={styles.token}
                                    >
                                        <Text style={styles.tokenPrice}>1 986 086.06</Text>
                                    </LinearGradient>
                                </View>
                                <View style={styles.info}>
                                    <Image source={images.bnb} style={styles.img} />
                                    <Text style={styles.tokenName}>Indirect</Text>

                                    <LinearGradient
                                        colors={['#502D9F66', '#08021C00']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        locations={[0.3392, 0.9986]}
                                        style={styles.token}
                                    >
                                        <Text style={styles.tokenPrice}>1 986 086.06</Text>
                                    </LinearGradient>
                                </View>
                            </View>
                        </LinearGradient>
                        <LinearGradient
                            colors={['#361E70CC', '#08021C00']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.infoToken}
                        >
                            <Text style={styles.tokenHeading}>Balance</Text>
                            <View style={styles.infoContent}>
                                <View style={styles.info}>
                                    <Image source={images.bnb} style={styles.img} />
                                    <LinearGradient
                                        colors={['#502D9F66', '#08021C00']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        locations={[0.3392, 0.9986]}
                                        style={styles.token}
                                    >
                                        <Text style={styles.tokenPrice}>1 986 086.06</Text>
                                    </LinearGradient>
                                </View>
                                <View style={styles.info}>
                                    <Image source={images.bnb} style={styles.img} />
                                    <LinearGradient
                                        colors={['#502D9F66', '#08021C00']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        locations={[0.3392, 0.9986]}
                                        style={styles.token}
                                    >
                                        <Text style={styles.tokenPrice}>1 986 086.06</Text>
                                    </LinearGradient>
                                </View>
                            </View>
                        </LinearGradient>
                        <LinearGradient
                            colors={['#361E70CC', '#08021C00']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.infoToken}
                        >
                            <Text style={styles.tokenHeading}>Interest</Text>
                            <View style={styles.infoContent}>
                                <View style={styles.info}>
                                    <Image source={images.bnb} style={styles.img} />
                                    <LinearGradient
                                        colors={['#502D9F66', '#08021C00']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        locations={[0.3392, 0.9986]}
                                        style={styles.token}
                                    >
                                        <Text style={styles.tokenPrice}>1 986 086.06</Text>
                                    </LinearGradient>
                                </View>
                                <View style={styles.info}>
                                    <Image source={images.Usdt} style={styles.img} />
                                    <LinearGradient
                                        colors={['#502D9F66', '#08021C00']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        locations={[0.3392, 0.9986]}
                                        style={styles.token}
                                    >
                                        <Text style={styles.tokenPrice}>1 986 086.06</Text>
                                    </LinearGradient>
                                </View>
                            </View>
                        </LinearGradient>
                        <LinearGradient
                            colors={['#361E70CC', '#08021C00']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.infoToken}
                        >
                            <Text style={styles.tokenHeading}>Sale</Text>
                            <View style={styles.infoContent}>
                                <View style={styles.info}>
                                    <Image source={images.Usdt} style={styles.img} />
                                    <Text style={styles.tokenName}>Direct</Text>
                                    <LinearGradient
                                        colors={['#502D9F66', '#08021C00']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        locations={[0.3392, 0.9986]}
                                        style={styles.token}
                                    >
                                        <Text style={styles.tokenPrice}>1 986 086.06</Text>
                                    </LinearGradient>
                                </View>
                                <View style={styles.info}>
                                    <Image source={images.Usdt} style={styles.img} />
                                    <Text style={styles.tokenName}>System</Text>

                                    <LinearGradient
                                        colors={['#502D9F66', '#08021C00']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        locations={[0.3392, 0.9986]}
                                        style={styles.token}
                                    >
                                        <Text style={styles.tokenPrice}>1 986 086.06</Text>
                                    </LinearGradient>
                                </View>
                            </View>
                        </LinearGradient>
                        <LinearGradient
                            colors={['#361E70CC', '#08021C00']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={styles.infoToken}
                        >
                            <Text style={styles.tokenHeading}>NOW</Text>
                            <View style={styles.infoContent}>
                                <View style={{ ...styles.info, flexDirection: 'row' }}>
                                    <Image source={images.bnb} style={styles.img} />
                                    <LinearGradient
                                        colors={['#502D9F66', '#08021C00']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        locations={[0.3392, 0.9986]}
                                        style={{
                                            ...styles.token,
                                            width: 196 * WIDTH.widthScale,
                                            height: 27 * WIDTH.widthScale,
                                            marginTop: 0,
                                            marginLeft: 8,
                                        }}
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
        fontSize: SIZES.xLarge,
        ...TEXTS.textBold,
        textAlign: 'center',
    },
    infoTokenContainer: {
        width: WIDTH.width100,
        rowGap: 10,
        marginTop: 30,
    },
    infoToken: {
        width: 350 * WIDTH.widthScale,
        borderRadius: 20,
        padding: 10,
        alignItems: 'center',
    },
    tokenHeading: {
        fontSize: SIZES.large,
        ...TEXTS.textBold,
    },
    infoContent: {
        flexDirection: 'row',
        columnGap: 51,
    },
    info: {
        alignItems: 'center',
    },
    img: {
        width: 50 * WIDTH.widthScale,
        height: 50 * WIDTH.widthScale,
    },
    tokenName: {
        fontSize: 16,
        ...TEXTS.textRegular,
        marginBottom: 7,
    },
    token: {
        paddingHorizontal: 15,
        height: 22 * WIDTH.widthScale,
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
export default Account;
