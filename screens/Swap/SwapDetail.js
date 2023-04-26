import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { BORDER, COLORS, SIZES, TEXTS, WIDTH, icons, images } from '../../constants';
import { ButtonCustom, InputCustom } from '../../CustomComponent';
import MainContainer from '../../components/MainContainer';
import useMultiplyWidthScale from '../../hooks/useMultiplyWidthScale';
import { useLanguage } from '../../contexts/LanguageContext';

const SwapDetail = () => {
    const { t } = useLanguage();
    return (
        <MainContainer noBackgroundFooter>
            <View style={styles.wrapper}>
                {/* Info */}
                <LinearGradient
                    colors={['#502D9F10', COLORS.bodyTransp]}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 0, y: 0 }}
                    locations={[0.3392, 0.9986]}
                    style={styles.infoContainer}
                >
                    <Image source={images.tanbinh} style={styles.img} />
                    <Text style={[TEXTS.textBold, styles.title]}>LOTTE Mart Tân Bình</Text>
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text style={[TEXTS.textMedium, styles.name]}>Coffee shop</Text>

                        <View style={styles.start}>
                            <Image style={styles.starImg} source={icons.saovang} />
                            <Image style={styles.starImg} source={icons.saovang} />
                            <Image style={styles.starImg} source={icons.saovang} />
                            <Image style={styles.starImg} source={icons.saovang} />
                            <Image style={styles.starImg} source={icons.saovang} />
                        </View>

                        <Text style={(TEXTS.textRegular, styles.subHeading)} numberOfLines={1}>
                            Tân Bình 20 Đ. Cộng Hòa, Phường 4, Tân Bình, Thành phố Hồ Chí Minh, Việt Nam
                        </Text>
                        <Text style={{ ...TEXTS.textRegular, fontSize: SIZES.small }}>{t('owner')}: Kimanhhp09</Text>

                        <Text style={[TEXTS.textBold, styles.name]}>{t('aboutListing')}</Text>
                        <Text style={[TEXTS.textRegular, styles.subHeading]}>
                            A gay & straight crowd camps out at this bi-level bar for piano sing-alongs, drag revues &
                            comedy.
                        </Text>

                        <Text style={[TEXTS.textBold, styles.name]}>{t('nftMachine')}</Text>
                        <Text style={[TEXTS.textRegular, styles.subHeading]}>({t('noNFTMachine')})</Text>

                        <View style={styles.features}>
                            <Text style={[TEXTS.textBold, styles.name]}>{t('placeholderFeatures')}</Text>
                            <View style={styles.tagContent}>
                                <Text style={[TEXTS.textRegular, styles.tagText]}>WiFi</Text>
                                <Text style={[TEXTS.textRegular, styles.tagText]}>{t('delivery')}</Text>
                            </View>
                        </View>
                    </View>
                </LinearGradient>

                {/* Map */}

                <LinearGradient
                    colors={['#2A0F5730', '#290F5500']}
                    start={{ x: 0.5, y: 0.5 }}
                    end={{ x: 1, y: 1 }}
                    style={styles.mapContainer}
                >
                    <Image style={{ height: WIDTH.width100 ,width:161 *WIDTH.widthScale }} source={images.map} />
                    <View style={{ width: '50%' }}>
                        <View style={{ padding: SIZES.xSmall }}>
                            <Text style={styles.mapTitle}>LOTTE Mart Tân Bình</Text>
                            <Text style={{ ...TEXTS.textRegular, ...styles.subHeading, flexWrap: 'wrap' }}>
                                Tân Bình 20 Đ. Cộng Hòa, Phường 4, Tân Bình, Thành phố Hồ Chí Minh, Việt Nam
                            </Text>
                            <Text style={[TEXTS.textRegular]}>{t('null')}</Text>
                        </View>
                        <View style={styles.footer}>
                            <Text style={styles.footerTitle}>{t('openHours')}</Text>
                        </View>
                    </View>
                </LinearGradient>

                {/* Review */}
                <LinearGradient
                    colors={['#2A0F57', '#2A0F5790']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    locations={[0.3392, 0.9986]}
                    style={styles.review}
                >
                    <View style={styles.reviewHeader}>
                        <Text style={[TEXTS.textBold, styles.name]}>{t('review')}</Text>
                        <Text style={[TEXTS.textRegular, styles.subHeading]}>{t('noReview')}</Text>
                    </View>
                    <View style={styles.reviewBody}>
                        <Text style={[styles.reviewTitle]}>{t('yourReview')}</Text>
                        <InputCustom
                            style={styles.input}
                            radiusMax
                            placeholder={t('placeBeautiful')}
                            placeholderColor="#536981"
                        />
                        <InputCustom
                            style={{
                                ...styles.input,
                                height: 83 * WIDTH.widthScale,
                                borderRadius: 13 * WIDTH.widthScale,
                            }}
                            multiline
                            numberOfLines={4}
                            placeholder={t('experience')}
                            placeholderColor="#536981"
                        />
                        <View style={styles.start}>
                            <Image style={styles.starImg} source={icons.saovang} />
                            <Image style={styles.starImg} source={icons.saotrang} />
                            <Image style={styles.starImg} source={icons.saotrang} />
                            <Image style={styles.starImg} source={icons.saotrang} />
                            <Image style={styles.starImg} source={icons.saotrang} />
                        </View>
                        <ButtonCustom
                            text={t('sendReview')}
                            containerStyle={{ marginTop: 5 * WIDTH.widthScale }}
                            buttonStyle={{ width: 'auto' }}
                            buttonStyleText={{ textTransform: 'uppercase' }}
                        />
                    </View>
                </LinearGradient>
            </View>
        </MainContainer>
    );
};
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 50,
        marginTop: SIZES.xSmall,
        paddingHorizontal: SIZES.large,
    },
    infoContainer: {
        // flex: 1,
        width: 361,
        // height: 439 ,
        // width: WIDTH.width100,
        maxWidth: WIDTH.width100,
        borderRadius: SIZES.xSmall,
        marginBottom: 13,
        alignItems: 'center',
        paddingHorizontal: 22,
        paddingBottom: SIZES.xSmall,
    },
    img: {
        width: 317,
        height: 243,
    },
    title: {
        fontSize: SIZES.medium,
        marginTop: SIZES.xSmall,
    },

    name: {
        marginTop: 5,
    },
    subHeading: {
        fontSize: SIZES.small,
        color: '#989898',
    },

    start: {
        flexDirection: 'row',
        marginBottom: SIZES.xSmall,
    },

    starImg: {
        width: SIZES.xMedium,
        height: SIZES.xMedium,
    },
    tagContent: {
        flexDirection: 'row',
        columnGap: SIZES.xSmall,
        marginTop: 6,
    },
    tagText: {
        fontSize: SIZES.small,
        backgroundColor: '#471A77',
        ...BORDER,
        borderColor: '#4F1D79',
        borderRadius: 4,
        // height: SIZES.xMedium,
        // width: 50,
        paddingHorizontal: SIZES.xSmall,
        paddingVertical: 1,
    },
    mapContainer: {
        borderRadius: SIZES.xSmall,
        width: 143,
        flexDirection: 'row',
        width: WIDTH.width100,

        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 4,
            height: 0,
        },
        shadowOpacity: 0.4,
    },

    mapTitle: {
        ...TEXTS.textBold,
        fontSize: 13,
        marginBottom: SIZES.xSmall,
    },
    footer: {
        borderTopWidth: 1,
        borderColor: '#636363',
        borderStyle: 'solid',
    },
    footerTitle: {
        ...TEXTS.textRegular,
        fontSize: 15,
        marginLeft: SIZES.xSmall,
        marginTop: 5,
        marginBottom: SIZES.xSmall,
    },
    review: {
        marginTop: 40,
        alignItems: 'flex-start',
        borderRadius: SIZES.xSmall,
        marginHorizontal: SIZES.small,
        width: WIDTH.width100,
    },
    reviewHeader: {
        paddingHorizontal: 25,
        paddingTop: SIZES.xSmall,
        paddingBottom: SIZES.xSmall,
    },
    reviewBody: {
        borderTopWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ffdee333',
        rowGap: 13,
        padding: 15,
        width: WIDTH.width100,
    },
    reviewTitle: {
        ...TEXTS.textRegular,
    },
    input: {
        backgroundColor: '#fff',
        ...TEXTS.textRegular,
        height: 38,
        ...BORDER,
        borderColor: '#EAEAEA',
        fontStyle: 'normal',
        color: '#536981',
    },
});

useMultiplyWidthScale(styles);
export default SwapDetail;
