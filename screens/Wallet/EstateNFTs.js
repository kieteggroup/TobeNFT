import { useState } from 'react';
import { FlatList, Image, ImageBackground, StyleSheet, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { BORDER, COLORS, SIZES, TEXTS, WIDTH, images } from '../../constants';
import { MainContainer, SelectDropdown } from '../../components';
import { ButtonCustom, InputCustom } from '../../CustomComponent';
import { Hexagon, HexagonSelect } from '../../assets/imageSvg/ImageSVG';
import useMultiplyWidthScale from '../../hooks/useMultiplyWidthScale';

const listStage = [
    {
        month: 'November 2022',
        price: 200,
        maxPrice: 1000,
    },
    {
        month: 'January 2023',
        price: 300,
        maxPrice: 4000,
    },
    {
        month: 'March 2023',
        price: 500,
        maxPrice: 5000,
    },
    {
        month: 'April 2023',
        price: 800,
        maxPrice: 20000,
    },
    {
        month: 'July 2023',
        price: 1200,
        maxPrice: 20000,
    },
    {
        month: 'August 2023',
        price: 1600,
        maxPrice: 20000,
    },
    {
        month: 'January 2023',
        price: 2000,
        maxPrice: 30000,
    },
];
const EstateNFTs = () => {
    const [isMintNFT, setIsMintNFT] = useState(false);

    return (
        <MainContainer>
            <View style={styles.wrapper}>
                <LinearGradient
                    colors={[COLORS.bodyLight, COLORS.bodyTransp]}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 0, y: 0 }}
                    locations={[0.3392, 0.9986]}
                    style={styles.header}
                >
                    <Text style={styles.title}>Real Estate NFTs</Text>
                    <Text style={styles.subTitle}>
                        (to be sold as Real Estate NFT with exact longitude and latitude)
                    </Text>
                    <View style={styles.progressContainer}>
                        <View>
                            <View style={styles.progress}>
                                <LinearGradient
                                    colors={['#F40074', '#502D9F']}
                                    start={{ x: 1, y: 0 }}
                                    end={{ x: 0, y: 0 }}
                                    locations={[0.25, 0.75]}
                                    style={{ ...styles.progressBar, width: '20%' }}
                                ></LinearGradient>
                            </View>
                            <View style={styles.progressText}>
                                <Text style={styles.text}>2 days</Text>
                                <Text style={styles.text}>TOTAL: 60 days</Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.progress}>
                                <LinearGradient
                                    colors={['#F40074', '#502D9F']}
                                    start={{ x: 1, y: 0 }}
                                    end={{ x: 0, y: 0 }}
                                    locations={[0.25, 0.75]}
                                    style={{ ...styles.progressBar, width: '20%' }}
                                ></LinearGradient>
                            </View>
                            <View style={styles.progressText}>
                                <Text style={styles.text}>10 NFT</Text>
                                <Text style={styles.text}>MAX 1000</Text>
                            </View>
                        </View>
                    </View>
                </LinearGradient>

                <ImageBackground
                    source={images.mintNFT}
                    resizeMode="cover"
                    style={{ width: WIDTH.width100, height: 283 * WIDTH.widthScale }}
                >
                    <FlatList
                        data={listStage}
                         keyExtractor={(item, index) => `key-${index}`}
                        contentContainerStyle={styles.listStage}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <View style={styles.stageItem}>
                                {item.price === 200 ? <HexagonSelect /> : <Hexagon />}
                                <View
                                    style={{ position: 'absolute', top: 62 * WIDTH.widthScale, alignItems: 'center' }}
                                >
                                    <Text style={{ fontSize: 30, ...TEXTS.textBold }}>${item.price}</Text>
                                    <Text style={styles.text}>{item.month}</Text>
                                    <Text style={styles.text}>{item.maxPrice}</Text>
                                </View>
                                <Text
                                    style={{
                                        ...TEXTS.textBold,
                                        fontSize: SIZES.large,
                                        marginTop: 16 * WIDTH.widthScale,
                                    }}
                                >
                                    Stage 0{index + 1}
                                </Text>
                            </View>
                        )}
                    />
                    <LinearGradient
                        colors={['#502D9F', '#E30370']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        locations={[0.085, 1]}
                        style={styles.line}
                    ></LinearGradient>
                </ImageBackground>
                {!isMintNFT && (
                    <ButtonCustom text="MINT NFT" buttonStyle={styles.btnMint} onPress={() => setIsMintNFT(true)} />
                )}
                {/* MINT NFT */}
                {isMintNFT && (
                    <View style={styles.mintNFTContainer}>
                        <Text style={styles.mintTitle}>Mint a new location NFT</Text>
                        <Text style={styles.mintSubTitle}>
                            NFT are unique in terms of their traits, making them perfect for representing rare items
                            such as real properties. It cannot be divided, duplicated, or increased in quantity. There
                            can only be limited amount of each type. Thus, the value of each NFT to be increased for the
                            following timeline and maximum quantity sold whichever comes first.
                        </Text>
                        <View style={{ ...styles.stageItem, marginTop: 50 * WIDTH.widthScale }}>
                            <Text style={styles.mintTitle}>Highland Coffee</Text>
                            <Text style={styles.address}>12 Thach Lam, Tan Phu Dist</Text>
                            <View style={{ flexDirection: 'row', columnGap: 60 * WIDTH.widthScale }}>
                                <Text style={styles.positionText}>Lat: 10.76530</Text>
                                <Text style={styles.positionText}>Lng: 106.67148</Text>
                            </View>
                        </View>

                        <View style={styles.form}>
                            <SelectDropdown
                                backgroundStyle={COLORS.white}
                                iconColor="#536981"
                                placeholderColor={{ color: '#536981' }}
                                style={styles.input}
                            />
                            <SelectDropdown
                                backgroundStyle={COLORS.white}
                                iconColor="#536981"
                                placeholderColor={{ color: '#536981' }}
                                style={styles.input}
                            />
                            <SelectDropdown
                                backgroundStyle={COLORS.white}
                                iconColor="#536981"
                                placeholderColor={{ color: '#536981' }}
                                style={styles.input}
                            />
                            <InputCustom
                                placeholder="Features"
                                radiusMax
                                placeholderColor="#536981"
                                style={styles.input}
                            />
                            <InputCustom
                                placeholder="Address"
                                radiusMax
                                placeholderColor="#536981"
                                style={styles.input}
                            />
                            <InputCustom
                                placeholder="Description"
                                radiusMax
                                placeholderColor="#536981"
                                style={{ ...styles.input, height: 61 * WIDTH.widthScale }}
                            />
                            <LinearGradient
                                colors={[COLORS.bodyLight, '#8F79D966']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                locations={[0.3392, 0.9986]}
                                style={styles.ratio}
                            >
                                <Text style={styles.address}>
                                    1 Location NFT ={' '}
                                    <Text style={{ ...TEXTS.textBold, color: COLORS.primary }}>200</Text> USDT
                                </Text>
                            </LinearGradient>
                        </View>

                        <View style={styles.imageContent}>
                            <View style={styles.imageItem}>
                                <Image source={images.mountain} />
                            </View>
                            <View style={styles.imageItem}>
                                <Image style={styles.img} source={images.tanbinh} />
                            </View>
                            <View style={styles.imageItem}>
                                <Image style={styles.img} source={images.tanbinh} />
                            </View>
                        </View>
                        <ButtonCustom text="Buy NFT" buttonStyle={styles.button} />
                    </View>
                )}
            </View>
        </MainContainer>
    );
};
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        alignItems: 'center',
        ...BORDER,
        borderWidth: 2,
        width: WIDTH.width100,
        paddingTop: 21,
        paddingBottom: 41.4,
        height: 258,
    },
    title: {
        ...TEXTS.textBold,
        fontSize: SIZES.xLarge,
    },
    subTitle: {
        textAlign: 'center',
        width: 261,
        ...TEXTS.textRegular,
        fontSize: SIZES.medium,
        color: COLORS.primary,
    },
    progressContainer: {
        width: WIDTH.width100,
        padding: SIZES.large,
        rowGap: 22,
        alignItems: 'center',
    },
    progress: {
        height: 18,
        width: 332,
        borderRadius: 27.5,
        backgroundColor: '#FFFFFF4D',
        shadowColor: '#000',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 3,
    },
    progressBar: {
        position: 'absolute',
        height: WIDTH.width100,
        borderRadius: 27.5,
    },
    progressText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        ...TEXTS.textRegular,
    },
    listStage: {
        flexDirection: 'row',
        columnGap: SIZES.large,
        alignItems: 'center',
        paddingHorizontal: SIZES.large,
    },
    stageItem: {
        alignItems: 'center',
    },
    line: {
        height: 5,
        width: 103,
        borderRadius: 6.5,
        position: 'absolute',
        bottom: 0,
        left: 28,
    },

    btnMint: {
        width: 183,
        marginTop: 53,
        marginBottom: 100,
    },
    mintNFTContainer: {
        alignItems: 'center',
        marginTop: 28,
        marginBottom: SIZES.small,
        paddingHorizontal: 18,
        width: WIDTH.width100,
    },
    mintTitle: {
        ...TEXTS.textBold,
        fontSize: SIZES.large,
    },
    mintSubTitle: {
        ...TEXTS.textRegular,
        fontSize: SIZES.small,
        textAlign: 'center',
    },
    address: {
        ...TEXTS.textRegular,
        fontSize: SIZES.medium,
    },
    positionText: {
        ...TEXTS.textBold,
        fontSize: SIZES.small,
    },
    form: {
        marginTop: 25,
        width: WIDTH.width100,
        rowGap: SIZES.small,
        width: 337,
    },
    input: {
        height: 38,
        width: WIDTH.width100,
        backgroundColor: COLORS.white,
        ...TEXTS.textRegular,
        color: '#536981',
    },
    ratio: {
        // height: 38,
        borderRadius: 22,
        paddingVertical: SIZES.xSmall,
        paddingHorizontal: SIZES.large,
    },
    imageContent: {
        flexDirection: 'row',
        columnGap: SIZES.xSmall,
        marginTop: 25,
    },
    imageItem: {
        ...BORDER,
        borderColor: COLORS.white,
        borderRadius: 9,
        alignItems: 'center',
        justifyContent: 'center',
        height: 63,
        width: 63,
    },
    img: {
        width: WIDTH.width100,
        height: WIDTH.width100,
        borderRadius: 8,
    },
    button: {
        width: 183,
        marginTop: 30,
        marginBottom: SIZES.small,
    },
});
useMultiplyWidthScale(styles);
export default EstateNFTs;
