import React from 'react';
import { View, Image, Text, StyleSheet, ScrollView, TextInput } from 'react-native';
import Swap from './Swap';
import { SIZES, TEXTS, WIDTH, icons, images } from '../../constants';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonCustom, InputCustom } from '../../CustomComponent';
import MainContainer from '../../components/MainContainer';

const SwapDetail = () => {
    return (
        <MainContainer noBackgroundFooter noBlurBackground>
            <View style={styles.wrapper}>
                {/* Info */}
                <LinearGradient
                    colors={['#502D9F10', '#08021C00']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 0, y: 0 }}
                    locations={[0.3191, 0.6809]}
                    style={styles.infoContainer}
                >
                    <Image source={images.tanbinh} />
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
                    <View style={{ width: 'auto' }}>
                        <Image style={{ flex: 1 }} source={images.map} />
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={{ padding: 10 }}>
                            <Text style={styles.mapTitle}>LOTTE Mart Tân Bình</Text>
                            <Text style={{ ...TEXTS.textRegular, ...styles.subHeading }}>
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
                    end={{ x: 1, y: 0 }}
                    locations={[0.3191, 0.6809]}
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
                            placeholderStyle="#536981"
                        />
                        <InputCustom
                            style={{ ...styles.input, height: 83, borderRadius: 13 }}
                            multiline
                            numberOfLines={4}
                            placeholder="Describe your experience"
                            placeholderStyle="#536981"
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
        marginTop: 10,
        paddingHorizontal: 20,
    },
    infoContainer: {
        // flex: 1,
        // width: 327,
        width: WIDTH.width100,
        maxWidth: WIDTH.width100,
        borderRadius: 10,
        marginBottom: 13,
        alignItems: 'center',
        paddingHorizontal: 22,
        paddingBottom: 10,
    },

    title: {
        fontSize: SIZES.medium,
        marginTop: 10,
    },

    name: {
        fontSize: 14,
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
        marginBottom: 10,
    },

    starImg: {
        width: 14,
        height: 14,
    },
    tagContent: {
        flexDirection: 'row',
        columnGap: 10,
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
        paddingHorizontal: 10,
        paddingVertical: 1,
    },
    mapContainer: {
        borderRadius: 10,
        marginHorizontal: 30,
        flexDirection: 'row',
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
        marginBottom: 10,
    },
    footer: {
        borderTopWidth: 1,
        borderColor: '#636363',
        borderStyle: 'solid',
    },
    footerTitle: {
        ...TEXTS.textRegular,
        fontSize: 15,
        marginLeft: 10,
        marginTop: 5,
        marginBottom: 10,
    },
    review: {
        marginTop: 40,
        alignItems: 'flex-start',
        borderRadius: 10,
        marginHorizontal: 10,
    },
    reviewHeader: {
        paddingHorizontal: 25,
        paddingTop: 10,
        paddingBottom: 20,
    },
    reviewBody: {
        borderTopWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ffdee333',
        rowGap: 13,
        padding: 15,
    },
    reviewTitle: {
        ...TEXTS.textRegular,
        fontSize: 14,
    },
    input: {
        backgroundColor: '#fff',
        ...TEXTS.textRegular,
        height: 38,
        fontSize: 14,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#EAEAEA',
        fontStyle: 'normal',
        color: '#000',
    },
});
export default SwapDetail;
