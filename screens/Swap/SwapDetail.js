import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import Swap from './Swap';
import { SIZES, TEXTS, WIDTH, icons, images } from '../../constants';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonCustom, InputCustom } from '../../CustomComponent';
import MainContainer from '../../components/MainContainer';

const SwapDetail = () => {
    return (
        <MainContainer noBackgroundFooter>
            <View style={styles.wrapper}>
                {/* Info */}
                <LinearGradient
                    colors={['#502D9F10', '#08021C00']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 0, y: 0 }}
                    locations={[0.3392, 0.9986]}
                    style={styles.infoContainer}
                >
                    <Image source={images.tanbinh} style={styles.img} />
                    <Text style={[styles.title, TEXTS.textBold]}>LOTTE Mart Tân Bình</Text>
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text style={[styles.name, TEXTS.textMedium]}>Coffee shop</Text>

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
                        <Text style={{ ...TEXTS.textRegular, fontSize: SIZES.small }}>Owner: Kimanhhp09</Text>

                        <Text style={[styles.name, TEXTS.textBold]}>ABOUT THIS LISTING</Text>
                        <Text style={[TEXTS.textRegular, styles.subHeading]}>
                            A gay & straight crowd camps out at this bi-level bar for piano sing-alongs, drag revues &
                            comedy.
                        </Text>

                        <Text style={[styles.name, TEXTS.textBold]}>NFT Machine</Text>
                        <Text style={[TEXTS.textRegular, styles.subHeading]}>{`(No NFT Machine)`}</Text>

                        <View style={styles.features}>
                            <Text style={[styles.name, TEXTS.textBold]}>Features</Text>
                            <View style={styles.tagContent}>
                                <Text style={[styles.tagText, TEXTS.textRegular]}>Take out</Text>
                                <Text style={[styles.tagText, TEXTS.textRegular]}>Delivery</Text>
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
                    <Image style={{ height: WIDTH.width100 }} source={images.map} />
                    <View style={{ width: '50%' }}>
                        <View style={{ padding: 10 }}>
                            <Text style={styles.mapTitle}>LOTTE Mart Tân Bình</Text>
                            <Text style={{ ...TEXTS.textRegular, ...styles.subHeading, flexWrap: 'wrap' }}>
                                Tân Bình 20 Đ. Cộng Hòa, Phường 4, Tân Bình, Thành phố Hồ Chí Minh, Việt Nam
                            </Text>
                            <Text style={[TEXTS.textRegular]}>null</Text>
                        </View>
                        <View style={styles.footer}>
                            <Text style={styles.footerTitle}>Opening Hours</Text>
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
                        <Text style={[styles.name, TEXTS.textBold]}>Review</Text>
                        <Text style={[TEXTS.textRegular, styles.subHeading]}>There are no reviews yet</Text>
                    </View>
                    <View style={styles.reviewBody}>
                        <Text style={[styles.reviewTitle]}>Review your experience</Text>
                        <InputCustom
                            style={styles.input}
                            radiusMax
                            placeholder="Beautiful place!"
                            placeholderColor="#536981"
                        />
                        <InputCustom
                            style={{ ...styles.input, height: 83* WIDTH.widthScale, borderRadius: 13 }}
                            multiline
                            numberOfLines={4}
                            placeholder="Describe your experience"
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
                            text="SEND REVIEW"
                            containerStyle={{ marginTop: 5 }}
                            buttonStyle={{ width: 'auto' }}
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
        width: 361 * WIDTH.widthScale,
        // height: 439 * WIDTH.widthScale,
        // width: WIDTH.width100,
        maxWidth: WIDTH.width100,
        borderRadius: SIZES.xSmall,
        marginBottom: 13,
        alignItems: 'center',
        paddingHorizontal: 22,
        paddingBottom: SIZES.xSmall,
    },
    img: {
        width: 317 * WIDTH.widthScale,
        height: 243 * WIDTH.widthScale,
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
    owner: {
        fontSize: SIZES.small,
    },
    start: {
        flexDirection: 'row',
        marginBottom: SIZES.xSmall,
    },

    starImg: {
        width: 14,
        height: 14,
    },
    tagContent: {
        flexDirection: 'row',
        columnGap: SIZES.xSmall,
        marginTop: 6,
    },
    tagText: {
        fontSize: SIZES.small,
        backgroundColor: '#471A77',
        borderWidth: 1,
        borderColor: '#4F1D79',
        borderStyle: 'solid',
        borderRadius: 4,
        // height: 14,
        // width: 50,
        paddingHorizontal: SIZES.xSmall,
        paddingVertical: 1,
    },
    mapContainer: {
        borderRadius: SIZES.xSmall,
        width: 143 * WIDTH.widthScale,
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
        height: 38* WIDTH.widthScale,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#EAEAEA',
        fontStyle: 'normal',
        color: '#000',
    },
});
export default SwapDetail;
