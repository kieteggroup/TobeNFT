import { Image, StyleSheet, Pressable, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { BORDER, COLORS, FONTS, SIZES, TEXTS, WIDTH, icons, images } from '../../constants';
import { QrCode } from '../../assets/imageSvg/ImageSVG';
import { ButtonCustom } from '../../CustomComponent';
import { MainContainer } from '../../components';
import useMultiplyWidthScale from '../../hooks/useMultiplyWidthScale';
import { useLanguage } from '../../contexts/LanguageContext';

const Deposit = () => {
    const { t } = useLanguage();

    return (
        <MainContainer>
            <View style={styles.wrapper}>
                <View style={styles.card}>
                    <View style={styles.itemCard}>
                        <LinearGradient
                            colors={['#F4007499', COLORS.bodyTransp]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            locations={[0.3392, 0.9986]}
                            style={styles.itemCardText}
                        >
                            <Text style={styles.token}>NOW Token</Text>
                        </LinearGradient>
                        <Image source={images.bnb} style={styles.itemCardImg} />
                    </View>
                    <Pressable style={styles.itemCard}>
                        <LinearGradient
                            colors={['#FFFFFF1A', COLORS.bodyTransp]}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            locations={[0.3392, 0.9986]}
                            style={{ ...styles.itemCardText, borderWidth: 0 }}
                        >
                            <Text style={styles.token}>USDT.BEP 20</Text>
                        </LinearGradient>
                        <Image source={images.Usdt} style={styles.itemCardImg} />
                    </Pressable>
                </View>
                {/* Content QRCode */}
                <View style={styles.content}>
                    <Text style={styles.title}>{t('titleDeposit')}</Text>
                    <Text style={styles.subTitle}>{t('subTitleDeposit')}</Text>
                    <View style={styles.qrCodeContainer}>
                        <View style={styles.qrCode}>
                            <QrCode />
                        </View>
                        <Text style={styles.qrCodeText}>QR CODE</Text>
                        <Text style={styles.code}>bnb136ns6lfw4zs5hg4n85vdth</Text>
                    </View>
                    <View style={styles.qrCodeBtn}>
                        <ButtonCustom text={t('btnCopyAddress')} buttonStyle={styles.buttonQR} />
                        <ButtonCustom
                            text={t('btnSaveQR')}
                            backgroundColorBtn="#ffffff33"
                            buttonStyle={styles.buttonQR}
                        />
                    </View>
                </View>

                <Text style={styles.description}>{t('depositDescription')}</Text>
            </View>
        </MainContainer>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingHorizontal: SIZES.large,
        marginVertical: 30,
        alignItems: 'center',
    },

    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        columnGap: SIZES.small,
    },
    itemCard: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemCardImg: {
        position: 'absolute',
        left: 0,
        width: 50,
        height: 50,
    },
    itemCardText: {
        alignItems: 'flex-end',
        paddingHorizontal: SIZES.xSmall,
        justifyContent: 'center',
        width: 159,
        height: 35,
        ...BORDER,
        borderColor: '#6A3181',
        borderRadius: 18,
        // paddingLeft: 60,
        paddingHorizontal: SIZES.small,
    },
    token: {
        fontSize: SIZES.medium,
        fontFamily: FONTS.regularRoboto,
        color: COLORS.white,
        fontWeight: '400',
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
        width: 150,
        height: 45,
        borderColor: '#FFFFFF29',
    },
    description: {
        marginTop: SIZES.large,
        ...TEXTS.textRegular,
    },
});
useMultiplyWidthScale(styles);
export default Deposit;
