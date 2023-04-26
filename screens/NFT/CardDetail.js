import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { MainContainer } from '../../components';
import { BORDER, COLORS, FONTS, SIZES, TEXTS, WIDTH, icons, images } from '../../constants';
import { ButtonCustom, InputCustom } from '../../CustomComponent';
import HomeNFT from './HomeNFT';
import useMultiplyWidthScale from '../../hooks/useMultiplyWidthScale';
import { useLanguage } from '../../contexts/LanguageContext';

const CardDetail = () => {
    const { t } = useLanguage();

    return (
        <HomeNFT>
            <View style={styles.wrapper}>
                <LinearGradient
                    colors={[COLORS.bodyLight, COLORS.bodyTransp]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    locations={[0.085, 1]}
                    style={styles.card}
                >
                    <Image style={styles.img} source={images.anhlocation} resizeMode="cover" />
                    <View style={styles.body}>
                        <Text style={{ ...TEXTS.textRegular, ...styles.restaurantText, textAlign: 'right' }}>
                            {t('restaurant')}
                        </Text>
                        <View style={styles.nameStar}>
                            <Text style={[TEXTS.textMedium, styles.name]}>Juicy Burger</Text>
                            <View style={styles.restaurant}>
                                <View style={styles.start}>
                                    <Image style={styles.starImg} source={icons.saovang} />
                                    <Image style={styles.starImg} source={icons.saovang} />
                                    <Image style={styles.starImg} source={icons.saovang} />
                                    <Image style={styles.starImg} source={icons.saovang} />
                                    <Image style={styles.starImg} source={icons.saotrang} />
                                </View>
                            </View>
                        </View>
                        <Text style={[TEXTS.textRegular, styles.restaurantText]} numberOfLines={1}>
                            158 Ludlow St, New York, NY 10002, United States
                        </Text>
                        <Text style={styles.price}>$1000</Text>
                        <ButtonCustom
                            text={t('buyNow')}
                            buttonStyle={styles.btnBuy}
                            backgroundLinearGradient={['#780D69', '#EC0174']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            buttonStyleText={{ fontFamily: FONTS.bold, fontWeight: 700 }}
                        />
                        <View style={styles.description}>
                            <Text style={[TEXTS.textBold, styles.heading]}>{t('aboutListing')}</Text>
                            <Text style={[TEXTS.textRegular, styles.subHeading]}>
                                A gay & straight crowd camps out at this bi-level bar for piano sing-alongs, drag revues
                                & comedy.
                            </Text>
                        </View>
                        <View style={styles.description}>
                            <Text style={[TEXTS.textBold, styles.heading]}>{t('nftMachine')}</Text>
                            <Text style={[TEXTS.textRegular, styles.subHeading]}>({t('noNFTMachine')})</Text>
                        </View>
                        <View style={styles.features}>
                            <Text style={[TEXTS.textBold, styles.heading]}>{t('placeholderFeatures')}</Text>
                            <View style={styles.tagContent}>
                                <LinearGradient
                                    colors={[COLORS.bodyLight, COLORS.bodyTransp]}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    locations={[0.3392, 0.9986]}
                                    style={styles.tag}
                                >
                                    <Text style={[TEXTS.textRegular, styles.tagText]}>{t('takeOut')}</Text>
                                </LinearGradient>
                                <LinearGradient
                                    colors={[COLORS.bodyLight, COLORS.bodyTransp]}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    locations={[0.3392, 0.9986]}
                                    style={styles.tag}
                                >
                                    <Text style={[TEXTS.textRegular, styles.tagText]}>{t('delivery')}</Text>
                                </LinearGradient>
                                <LinearGradient
                                    colors={['#502d9f99', '#09031E15']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    locations={[0.3392, 0.9986]}
                                    style={styles.tag}
                                >
                                    <Text style={[TEXTS.textRegular, styles.tagText]}>{t('delivery')}</Text>
                                </LinearGradient>
                                <LinearGradient
                                    colors={['#502d9f99', '#09031E15']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    locations={[0.3392, 0.9986]}
                                    style={styles.tag}
                                >
                                    <Text style={[TEXTS.textRegular, styles.tagText]}>{t('takeOut')}</Text>
                                </LinearGradient>
                            </View>
                        </View>
                    </View>
                </LinearGradient>

                <View style={{ ...styles.card, alignItems: 'flex-start' }}>
                    <View style={styles.reviewHeader}>
                        <Text style={[TEXTS.textBold, styles.heading]}>{t('review')}</Text>
                        <Text style={[TEXTS.textRegular, styles.subHeading]}>{t('noReview')}</Text>
                    </View>
                    <View style={styles.reviewBody}>
                        <Text style={[TEXTS.textBold, styles.reviewTitle]}>{t('yourReview')}</Text>
                        <InputCustom
                            style={styles.input}
                            radiusMax
                            placeholder={t('placeholderTitleReview')}
                            placeholderColor="#536981"
                        />
                        <InputCustom
                            style={{ ...styles.input, height: 83 * WIDTH.widthScale, borderRadius: 13 }}
                            multiline
                            numberOfLines={4}
                            placeholder={t('placeholderMessage')}
                            placeholderColor="#536981"
                        />
                        <ButtonCustom text={t('sendReview')} buttonStyle={styles.btnAuth} />
                    </View>
                </View>

                <View style={styles.card}>
                    <Image style={styles.img} source={images.anhlocation} />
                    <View style={styles.bodyAddress}>
                        <Text style={[TEXTS.textBold, styles.heading]}>Juicy Burger</Text>
                        <Text style={[TEXTS.textRegular, styles.subHeading]} numberOfLines={1}>
                            158 Ludlow St, New York, NY 10002, United States
                        </Text>
                        <Text style={[TEXTS.textRegular, styles.subHeading]} numberOfLines={1}>
                            mrjohn@gmail.com
                        </Text>
                        <Text style={[TEXTS.textRegular, styles.subHeading]} numberOfLines={1}>
                            +123456789
                        </Text>
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.footerTitle}>{t('openHours')}</Text>
                    </View>
                </View>
            </View>
        </HomeNFT>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        rowGap: SIZES.large,
        // padding: 16
        marginTop: SIZES.large,
    },
    card: {
        flex: 1,
        width: 327,
        maxWidth: WIDTH.width100,
        ...BORDER,
        borderWidth: 2,

        borderRadius: 18,
        alignItems: 'center',
    },
    img: {
        width: 327,
        height: 321,
    },
    body: {
        padding: SIZES.large,
    },
    restaurantText: {
        fontSize: SIZES.medium,
    },
    nameStar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    name: {
        fontSize: SIZES.large,
    },
    start: {
        flexDirection: 'row',
        columnGap: 5,
    },
    price: {
        ...TEXTS.textBold,
        fontSize: SIZES.large,
        marginTop: 7,
    },
    btnBuy: {
        width: WIDTH.width100,
        height: 39,
        borderWidth: 0,
        marginVertical: 15,
    },
    btnAuth: {
        // width: 209,
        width: 'auto',
        paddingHorizontal: SIZES.large,
        marginTop: 7,
        marginBottom: 4,
    },
    starImg: {
        width: SIZES.small,
        height: SIZES.small,
    },

    description: {
        marginBottom: SIZES.large,
    },

    subHeading: {
        marginTop: 2,
    },
    tagContent: {
        gap: SIZES.xSmall,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flex: 1,
        marginTop: SIZES.xSmall,
    },
    tag: {
        ...BORDER,
        borderWidth: 2,

        borderRadius: 32.5,
        // width: 104,
        paddingHorizontal:SIZES.xSmall,
        height: 37,
        alignItems: 'center',
        justifyContent: 'center',
    },

    reviewHeader: {
        paddingHorizontal: 25,
        paddingTop: SIZES.xSmall,
        paddingBottom: SIZES.large,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ffdee333',
        width: WIDTH.width100,
    },
    reviewBody: {
        alignItems: 'center',
        rowGap: 13,
        padding: 15,
        width: WIDTH.width100,
    },
    reviewTitle: {
        fontSize: SIZES.large,
    },
    input: {
        backgroundColor: '#fff',
        color: '#536981',
        ...TEXTS.textRegular,
        height: 38,
        ...BORDER,
        borderColor: '#EAEAEA',
        fontStyle: 'normal',
    },
    bodyAddress: {
        paddingLeft: 21,
        paddingVertical: 23,
        width: WIDTH.width100,
    },
    footer: {
        paddingTop: SIZES.xSmall,
        paddingBottom: SIZES.large,
        borderTopWidth: 1,
        borderColor: '#ffdee333',
        paddingHorizontal: 28,
        paddingTop: SIZES.medium,
        paddingBottom: SIZES.xLarge,
        width: WIDTH.width100,
    },
    footerTitle: {
        ...TEXTS.textRegular,
        fontSize: SIZES.large,
        textAlign: 'left',
    },
});
useMultiplyWidthScale(styles);

export default CardDetail;
