import { FlatList, Image, ImageBackground, StyleSheet, View } from 'react-native';
import { COLORS, SIZES, TEXTS, WIDTH, images } from '../../constants';
import { MainContainer, SelectDropdown } from '../../components';
import { LinearGradient } from 'expo-linear-gradient';
import { Text } from 'react-native';
import { ButtonCustom, InputCustom } from '../../CustomComponent';
import { Hexagon, HexagonSelect } from '../../assets/imageSvg/ImageSVG';
import { useState } from 'react';

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
                    colors={['#502D9F66', '#08021C00']}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 0, y: 0 }}
                    locations={[0.3191, 0.6809]}
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
                        keyExtractor={({ item }) => item}
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
                                <Text style={{ fontSize: 20, ...TEXTS.textBold, marginTop: 16 }}>
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
                        style={{
                            height: 5 * WIDTH.widthScale,
                            width: 103 * WIDTH.widthScale,
                            borderRadius: 6.5,
                            position: 'absolute',
                            bottom: 0,
                            left: 28,
                        }}
                    ></LinearGradient>
                </ImageBackground>
                {!isMintNFT && (
                    <ButtonCustom
                        text="MINT NFT"
                        containerStyle={{ marginTop: 53, marginBottom: 100 }}
                        buttonStyle={{ width: 183 * WIDTH.widthScale }}
                        onPress={() => setIsMintNFT(true)}
                    />
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
                        <View style={{ ...styles.stageItem, marginTop: 50 }}>
                            <Text style={styles.mintTitle}>Highland Coffee</Text>
                            <Text style={styles.address}>12 Thach Lam, Tan Phu Dist</Text>
                            <View style={{ flexDirection: 'row', columnGap: 60 }}>
                                <Text style={styles.positionText}>Lat: 10.76530</Text>
                                <Text style={styles.positionText}>Lng: 106.67148</Text>
                            </View>
                        </View>

                        <View style={styles.form}>
                            <SelectDropdown
                                backgroundStyle={COLORS.white}
                                iconColor="#536981"
                                placeholderStyle={{ color: '#536981' }}
                            />
                            <SelectDropdown
                                backgroundStyle={COLORS.white}
                                iconColor="#536981"
                                placeholderStyle={{ color: '#536981' }}
                            />
                            <SelectDropdown
                                backgroundStyle={COLORS.white}
                                iconColor="#536981"
                                placeholderStyle={{ color: '#536981' }}
                            />
                            <InputCustom
                                placeholder="Features"
                                radiusMax
                                placeholderStyle="#536981"
                                style={styles.input}
                            />
                            <InputCustom
                                placeholder="Address"
                                radiusMax
                                placeholderStyle="#536981"
                                style={styles.input}
                            />
                            <InputCustom
                                placeholder="Description"
                                radiusMax
                                placeholderStyle="#536981"
                                style={{ ...styles.input, height: 61* WIDTH.widthScale }}
                            />
                            <LinearGradient
                                colors={['#502D9F66', '#8F79D966']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                locations={[0.3191, 0.6809]}
                                style={styles.ratio}
                            >
                                <Text style={styles.address}>
                                    1 Location NFT ={' '}
                                    <Text style={{ ...TEXTS.textBold, color: COLORS.primary }}>200</Text> USDT
                                </Text>
                            </LinearGradient>
                        </View>

                        <View style={styles.image}>
                            <View style={styles.imageItem}>
                                <Image source={images.mountain} />
                            </View>
                            <View style={styles.imageItem}>
                                <Image
                                    style={{ width: '100%', height: '100%', borderRadius: 8 }}
                                    source={images.tanbinh}
                                />
                            </View>
                            <View style={styles.imageItem}>
                                <Image
                                    style={{ width: '100%', height: '100%', borderRadius: 8 }}
                                    source={images.tanbinh}
                                />
                            </View>
                        </View>
                        <ButtonCustom
                            text="Buy NFT"
                            containerStyle={{ marginTop: 30, marginBottom: 12 }}
                            buttonStyle={{ width: 183 * WIDTH.widthScale }}
                        />
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
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#6A318133',
        width: WIDTH.width100,
        paddingTop: 21,
        paddingBottom: 41.4,
        height: 258 * WIDTH.widthScale,
    },
    title: {
        fontSize: SIZES.xLarge,
        ...TEXTS.textBold,
    },
    subTitle: {
        textAlign: 'center',
        width: 261 * WIDTH.widthScale,
        fontSize: SIZES.medium,
        ...TEXTS.textRegular,
        color: COLORS.primary,
    },
    progressContainer: {
        width: WIDTH.width100,
        padding: 20,
        rowGap: 22,
        alignItems: 'center',
    },
    progress: {
        height: 18 * WIDTH.widthScale,
        width: 332 * WIDTH.widthScale,
        borderRadius: 27.5,
        backgroundColor: '#FFFFFF4D',
        shadowColor: '#000',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 1,
        shadowRadius: 3,
    },
    progressBar: {
        position: 'absolute',
        height: '100%',
        borderRadius: 27.5,
    },
    progressText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 14,
        ...TEXTS.textRegular,
    },
    listStage: {
        flexDirection: 'row',
        columnGap: 20,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    stageItem: {
        alignItems: 'center',
    },
    mintNFTContainer: {
        alignItems: 'center',
        marginTop: 28,
        marginBottom: 12,
        paddingHorizontal: 18,
        width: WIDTH.width100,
    },
    mintTitle: {
        fontSize: SIZES.large,
        ...TEXTS.textBold,
    },
    mintSubTitle: {
        fontSize: SIZES.small,
        ...TEXTS.textRegular,
        textAlign: 'center',
    },
    address: {
        fontSize: SIZES.medium,
        ...TEXTS.textRegular,
    },
    positionText: {
        fontSize: SIZES.small,
        ...TEXTS.textBold,
    },
    form: {
        marginTop: 25,
        width: WIDTH.width100,
        rowGap: 12,
    },
    input: {
        height: 38 * WIDTH.widthScale,
        backgroundColor: COLORS.white,
        ...TEXTS.textRegular,
        fontSize: 14,
        color: '#000',
    },
    ratio: {
        // height: 38,
        borderRadius: 22,
        paddingVertical: SIZES.xSmall,
        paddingHorizontal: 20,
    },
    image: {
        flexDirection: 'row',
        columnGap: 10,
        marginTop: 25,
    },
    imageItem: {
        borderWidth: 1,
        borderColor: COLORS.white,
        borderStyle: 'solid',
        borderRadius: 9,
        alignItems: 'center',
        justifyContent: 'center',
        height: 63* WIDTH.widthScale,
        width: 63* WIDTH.widthScale,
    },
});
export default EstateNFTs;
