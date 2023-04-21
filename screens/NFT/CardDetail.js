import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { MainContainer } from '../../components';
import { COLORS, FONTS, SIZES, TEXTS, WIDTH, icons, images } from '../../constants';
import { ButtonCustom, InputCustom } from '../../CustomComponent';
import { LinearGradient } from 'expo-linear-gradient';
import HomeNFT from './HomeNFT';

const CardDetail = () => {
    return (
        <HomeNFT>
            <View style={styles.wrapper}>
                <LinearGradient
                    colors={['#502D9F66', '#08021C00']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    locations={[0.085, 1]}
                    style={styles.card}
                >
                    <Image style={styles.img} source={images.anhlocation} resizeMode="cover" />
                    <View style={styles.body}>
                        <Text style={{ ...styles.restaurantText, ...TEXTS.textRegular, textAlign: 'right' }}>
                            Restaurant
                        </Text>
                        <View style={styles.nameStar}>
                            <Text style={[styles.name, TEXTS.textMedium]}>Juicy Burger</Text>
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
                        <Text style={(styles.restaurantText, TEXTS.textRegular)} numberOfLines={1}>
                            158 Ludlow St, New York, NY 10002, United States
                        </Text>
                        <Text style={styles.price}>$1000</Text>
                        <ButtonCustom
                            text="Buy now"
                            buttonStyle={{
                                width: WIDTH.width100,
                                height: 39 * WIDTH.widthScale,
                                borderWidth: 0,
                                marginVertical: 15,
                            }}
                            backgroundLinearGradient={['#780D69', '#EC0174']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            buttonStyleText={{ fontFamily: FONTS.bold, fontWeight: 700 }}
                        />
                        <View style={styles.description}>
                            <Text style={[styles.heading, TEXTS.textBold]}>ABOUT THIS LISTING</Text>
                            <Text style={[styles.subHeading, TEXTS.textRegular]}>
                                A gay & straight crowd camps out at this bi-level bar for piano sing-alongs, drag revues
                                & comedy.
                            </Text>
                        </View>
                        <View style={styles.description}>
                            <Text style={[styles.heading, TEXTS.textBold]}>NFT Machine</Text>
                            <Text style={[styles.subHeading, TEXTS.textRegular]}>{`(No NFT Machine)`}</Text>
                        </View>
                        <View style={styles.features}>
                            <Text style={[styles.heading, TEXTS.textBold]}>Features</Text>
                            <View style={styles.tagContent}>
                                <LinearGradient
                                    colors={['#502D9F66', '#08021C00']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    locations={[0.3191, 0.6809]}
                                    style={styles.tag}
                                >
                                    <Text style={[styles.tagText, TEXTS.textRegular]}>Take out</Text>
                                </LinearGradient>
                                <LinearGradient
                                    colors={['#502D9F66', '#08021C00']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    locations={[0.3191, 0.6809]}
                                    style={styles.tag}
                                >
                                    <Text style={[styles.tagText, TEXTS.textRegular]}>Delivery</Text>
                                </LinearGradient>
                                <LinearGradient
                                    colors={['#502d9f99', '#09031E15']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    locations={[0.3191, 0.6809]}
                                    style={styles.tag}
                                >
                                    <Text style={[styles.tagText, TEXTS.textRegular]}>Delivery</Text>
                                </LinearGradient>
                                <LinearGradient
                                    colors={['#502d9f99', '#09031E15']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    locations={[0.3191, 0.6809]}
                                    style={styles.tag}
                                >
                                    <Text style={[styles.tagText, TEXTS.textRegular]}>Take out</Text>
                                </LinearGradient>
                            </View>
                        </View>
                    </View>
                </LinearGradient>

                <View style={{ ...styles.card, alignItems: 'flex-start' }}>
                    <View style={styles.reviewHeader}>
                        <Text style={[styles.heading, TEXTS.textBold]}>Review</Text>
                        <Text style={[styles.subHeading, TEXTS.textRegular]}>There are no reviews yet</Text>
                    </View>
                    <View style={styles.reviewBody}>
                        <Text style={[styles.reviewTitle, TEXTS.textBold]}>Review your experience</Text>
                        <InputCustom
                            style={styles.input}
                            radiusMax
                            placeholder="Title of your review"
                            placeholderStyle="#536981"
                        />
                        <InputCustom
                            style={{ ...styles.input, height: 83 * WIDTH.widthScale, borderRadius: 13 }}
                            multiline
                            numberOfLines={4}
                            placeholder="Message"
                            placeholderStyle="#536981"
                        />
                        <ButtonCustom
                            text="Login or Register"
                            containerStyle={{ marginTop: 7, marginBottom: 4, paddingHorizontal: 45 }}
                            buttonStyle={{ width: 209 * WIDTH.widthScale }}
                        />
                    </View>
                </View>

                <View style={styles.card}>
                    <Image style={styles.img} source={images.anhlocation} />
                    <View style={styles.bodyAddress}>
                        <Text style={[styles.heading, TEXTS.textBold]}>Juicy Burger</Text>
                        <Text style={[styles.subHeading, TEXTS.textRegular]} numberOfLines={1}>
                            158 Ludlow St, New York, NY 10002, United States
                        </Text>
                        <Text style={[styles.subHeading, TEXTS.textRegular]} numberOfLines={1}>
                            mrjohn@gmail.com
                        </Text>
                        <Text style={[styles.subHeading, TEXTS.textRegular]} numberOfLines={1}>
                            +123456789
                        </Text>
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.footerTitle}>Opening Hours</Text>
                    </View>
                </View>
            </View>
        </HomeNFT>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        rowGap: 20,
        // padding: 16
        marginTop: 20,
    },
    card: {
        flex: 1,
        width: 327 * WIDTH.widthScale,
        maxWidth: WIDTH.width100,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#6a318133',
        borderRadius: 18,
        alignItems: 'center',
    },
    img: {
        width: 327 * WIDTH.widthScale,
        height: 321 * WIDTH.widthScale,
    },
    body: {
        padding: 20,
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
        color: COLORS.white,
        fontSize: SIZES.large,
        fontWeight: '700',
        fontFamily: FONTS.bold,
        marginTop: 7,
    },
    starImg: {
        width: 12 * WIDTH.widthScale,
        height: 12 * WIDTH.widthScale,
    },

    description: {
        marginBottom: 20,
    },
    heading: {
        fontSize: 14,
    },
    subHeading: {
        fontSize: 14,
        marginTop: 2,
    },
    tagContent: {
        gap: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flex: 1,
        marginTop: 10,
    },
    tag: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#6a318133',
        borderRadius: 32.5,
        width: 104 * WIDTH.widthScale,
        height: 37 * WIDTH.widthScale,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tagText: {
        fontSize: 14,
    },
    reviewHeader: {
        paddingHorizontal: 25,
        paddingTop: 10,
        paddingBottom: 20,
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
        height: 38 * WIDTH.widthScale,
        fontSize: 14,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#EAEAEA',
        fontStyle: 'normal',
    },
    bodyAddress: {
        paddingLeft: 21,
        paddingVertical: 23,
        width: WIDTH.width100,
    },
    footer: {
        paddingTop: 10,
        paddingBottom: 20,
        borderTopWidth: 1,
        borderColor: '#ffdee333',
        paddingHorizontal: 28,
        paddingTop: 16,
        paddingBottom: SIZES.xLarge,
        width: WIDTH.width100,
    },
    footerTitle: {
        fontSize: SIZES.large,
        ...TEXTS.textRegular,
        textAlign: 'left',
    },
});
export default CardDetail;
