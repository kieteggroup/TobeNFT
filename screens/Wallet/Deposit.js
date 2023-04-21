import { Image, StyleSheet, Pressable, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import { COLORS, FONTS, SIZES, TEXTS, WIDTH, icons, images } from '../../constants';
import { QrCode } from '../../assets/imageSvg/ImageSVG';
import { ButtonCustom } from '../../CustomComponent';
import { MainContainer } from '../../components';

const Deposit = () => {
    return (
        <MainContainer>
            <View style={styles.wrapper}>
                <View style={styles.card}>
                    <Pressable style={styles.itemCard}>
                        <LinearGradient
                            colors={['#F4007499', '#08021C00']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            locations={[0.3191, 0.6809]}
                            style={styles.itemCardText}
                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontFamily: FONTS.regularRoboto,
                                    color: COLORS.white,
                                    fontWeight: 400,
                                }}
                            >
                                NOW Token
                            </Text>
                        </LinearGradient>
                        <Image source={images.bnb} style={styles.itemCardImg} />
                    </Pressable>
                    <Pressable style={styles.itemCard}>
                        <LinearGradient
                            colors={['#FFFFFF1A', '#08021C00']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            locations={[0.3191, 0.6809]}
                            style={{ ...styles.itemCardText, borderWidth: 0 }}
                        >
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontFamily: FONTS.regularRoboto,
                                    color: COLORS.white,
                                    fontWeight: 400,
                                }}
                            >
                                USDT.BEP 20
                            </Text>
                        </LinearGradient>
                        <Image source={images.Usdt} style={styles.itemCardImg} />
                    </Pressable>
                </View>
                {/* Content QRCode */}
                <View style={styles.content}>
                    <Text style={styles.title}>Deposit BNB WALLET</Text>
                    <Text style={styles.subTitle}>Please send USDT.BEP20</Text>
                    <View style={styles.qrCodeContainer}>
                        <View style={styles.qrCode}>
                            <QrCode />
                        </View>
                        <Text style={styles.qrCodeText}>QR CODE</Text>
                        <Text style={styles.code}>bnb136ns6lfw4zs5hg4n85vdth</Text>
                    </View>
                    <View style={styles.qrCodeBtn}>
                        <ButtonCustom text="Copy Address" buttonStyle={styles.buttonQR} />
                        <ButtonCustom
                            text="Save OR Code"
                            backgroundColorBtn="#ffffff33"
                            buttonStyle={styles.buttonQR}
                        />
                    </View>
                </View>

                <Text style={styles.description}>
                    Your transaction will be completed once it is confirmed by the blockchain network.{'\n'}
                    Confirmation time can vary and depends on the fee transaction.
                </Text>
            </View>
        </MainContainer>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingHorizontal: 20,
        marginVertical: 30,
        alignItems: 'center',
    },

    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        columnGap: 12,
    },
    itemCard: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemCardImg: {
        position: 'absolute',
        left: 0,
        width: 50 * WIDTH.widthScale,
        height: 50 * WIDTH.widthScale,
    },
    itemCardText: {
        alignItems: 'flex-end',
        paddingHorizontal: SIZES.xSmall,
        justifyContent: 'center',
        width: 159 * WIDTH.widthScale,
        height: 35 * WIDTH.widthScale,
        borderWidth: 1,
        borderColor: '#6A3181',
        borderStyle: 'solid',
        borderRadius: 18,
        paddingLeft: 60,
    },
    content: {
        alignItems: 'center',
        marginTop: 35,
    },
    title: {
        ...TEXTS.textBold,
        fontSize: SIZES.xLarge,
    },
    subTitle: {
        ...TEXTS.textMedium,
        color: '#E30374',
        fontSize: SIZES.medium,
    },
    qrCodeContainer: {
        marginTop: 45,
        alignItems: 'center',
    },

    qrCodeText: {
        paddingTop: 17,
        ...TEXTS.textMedium,
        fontSize: 18,
    },
    code: {
        ...TEXTS.textRegular,
        fontSize: 18,
    },
    qrCodeBtn: {
        marginTop: 28,
        flexDirection: 'row',
        justifyContent: 'space-between',
        columnGap: 15,
    },
    buttonQR: {
        width: 150 * WIDTH.widthScale,
        height: 45 * WIDTH.widthScale,
        borderColor: '#FFFFFF29',
    },
    description: {
        marginTop: 20,
        ...TEXTS.textRegular,
    },
});
export default Deposit;
