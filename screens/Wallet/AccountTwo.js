import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { MainContainer, Table } from '../../components';
import { COLORS, SIZES, TEXTS, WIDTH, icons, images } from '../../constants';
import { Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { IconDropDown } from '../../assets/imageSvg/ImageSVG';

const AccountTwo = ({ navigation }) => {
    return (
        <MainContainer leftIcon={images.logongang} noBackgroundFooter>
            <View style={styles.wrapper}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={icons.back} style={{ marginTop: 10 }} />
                </TouchableOpacity>
                <Text style={styles.title}>Account</Text>
                <View style={styles.content}>
                    {/* totalCoins */}
                    <View style={styles.totalCoins}>
                        <View style={styles.coinBox}>
                            <Image source={images.bnb} style={styles.boxImg} />
                            <Text style={styles.coin}>1 986 086.06</Text>
                            <LinearGradient
                                colors={['#F4007466', '#25135166']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                locations={[0.3392, 0.9986]}
                                style={styles.coinFooter}
                            >
                                <Text style={styles.text}>Total free earning coins</Text>
                            </LinearGradient>
                        </View>
                        <View style={styles.coinBox}>
                            <Image source={images.bnb} style={styles.boxImg} />
                            <Text style={styles.coin}>1 986 086.06</Text>
                            <LinearGradient
                                colors={['#F4007466', '#25135166']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                locations={[0.3392, 0.9986]}
                                style={styles.coinFooter}
                            >
                                <Text style={styles.text}>Total profit and commission coins</Text>
                            </LinearGradient>
                        </View>
                    </View>

                    {/* Total profit */}
                    <LinearGradient
                        colors={['#502D9F66', '#08021C00']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        locations={[0.3392, 0.9986]}
                        style={styles.totalProfitContainer}
                    >
                        <View style={styles.totalProfitInfo}>
                            <View style={styles.profitInfo}>
                                <LinearGradient
                                    colors={['#FFFFFF13', '#8F79D939']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    locations={[0.3392, 0.9986]}
                                    style={styles.profitCoin}
                                >
                                    <Text style={styles.coin}>1 986 086.06</Text>
                                </LinearGradient>
                                <Text style={styles.text}>System commission</Text>
                            </View>

                            <View style={styles.profitInfo}>
                                <LinearGradient
                                    colors={['#FFFFFF13', '#8F79D939']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    locations={[0.3392, 0.9986]}
                                    style={styles.profitCoin}
                                >
                                    <Text style={styles.coin}>1 986 086.06</Text>
                                </LinearGradient>
                                <Text style={styles.text}>Net profit</Text>
                            </View>

                            <View style={styles.profitInfo}>
                                <LinearGradient
                                    colors={['#FFFFFF13', '#8F79D939']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    locations={[0.3392, 0.9986]}
                                    style={styles.profitCoin}
                                >
                                    <Text style={styles.coin}>1 986 086.06</Text>
                                </LinearGradient>
                                <Text style={styles.text}>Personal sales</Text>
                            </View>

                            <View style={styles.profitInfo}>
                                <LinearGradient
                                    colors={['#FFFFFF13', '#8F79D939']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    locations={[0.3392, 0.9986]}
                                    style={styles.profitCoin}
                                >
                                    <Text style={styles.coin}>1 986 086.06</Text>
                                </LinearGradient>
                                <Text style={styles.text}>System sales</Text>
                            </View>

                            <View style={styles.line1}></View>
                            <View style={styles.line2}></View>
                        </View>

                        <LinearGradient
                            colors={['#FFD70566', '#502D9F66']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            locations={[0.3392, 0.9986]}
                            style={styles.profitFooter}
                        >
                            <LinearGradient
                                colors={['#FFFFFF13', '#8F79D939']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                locations={[0.3392, 0.9986]}
                                style={styles.totalProfit}
                            >
                                <View style={styles.total}>
                                    <Text style={styles.text}>System sales</Text>
                                    <Text style={styles.coin}>1 986 086.06</Text>
                                </View>
                                <Image
                                    source={images.bnb}
                                    style={{ position: 'absolute', left: 0, ...styles.boxImg }}
                                />
                            </LinearGradient>
                        </LinearGradient>
                    </LinearGradient>

                    <View style={styles.totalTable}>
                        <View style={styles.totalRow}>
                            <Text style={styles.text}>Total member</Text>
                            <Text style={styles.coin}>12 578 688</Text>
                        </View>
                        <LinearGradient
                            colors={['#251351', '#1409314F']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            locations={[0.3392, 0.6809]}
                            style={{ ...styles.totalRow, height: 40.88 * WIDTH.widthScale }}
                        >
                            <Text style={styles.text}>Total locations purchased</Text>
                            <Text style={styles.coin}>436 785</Text>
                        </LinearGradient>
                        <View style={styles.totalRow}>
                            <Text style={styles.text}>Total NFT card</Text>
                            <Text style={styles.coin}>12</Text>
                        </View>
                        <LinearGradient
                            colors={['#251351', '#1409314F']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            locations={[0.3392, 0.6809]}
                            style={{ ...styles.totalRow, height: 40.88 * WIDTH.widthScale }}
                        >
                            <Text style={styles.text}>Total Virtual Machine</Text>
                            <Text style={styles.coin}>97</Text>
                        </LinearGradient>
                        <View style={styles.totalRow}>
                            <Text style={styles.text}>Total locations earned</Text>
                            <Text style={styles.coin}>865</Text>
                        </View>
                    </View>

                    {/* History Commission */}
                    <View style={{ width: WIDTH.width100 }}>
                        <Table
                            heading="History Commission"
                            rightIcon={
                                <IconDropDown height="15" width="15" style={{ transform: [{ rotate: '-90deg' }] }} />
                            }
                        />
                    </View>
                </View>
            </View>
        </MainContainer>
    );
};
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        paddingHorizontal: 20,
        marginBottom: 17,
    },
    title: {
        fontSize: SIZES.xLarge,
        ...TEXTS.textBold,
        textAlign: 'center',
    },
    content: {
        alignItems: 'center',
        flex: 1,
        rowGap: 28,
        marginTop: 23,
    },
    totalCoins: {
        flexDirection: 'row',
        // alignItems: 'center',
        columnGap: 24,
    },
    coinBox: {
        width: 153 * WIDTH.widthScale,
        height: 178 * WIDTH.widthScale,
        alignItems: 'center',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#6A318133',
        borderRadius: 18,
        overflow: 'hidden',
    },
    boxImg: {
        marginTop: 15,
        marginBottom: 13.56,
        height: 42.44 * WIDTH.widthScale,
        width: 42.44 * WIDTH.widthScale,
    },
    coin: {
        fontSize: SIZES.medium,
        ...TEXTS.textBold,
    },
    text: {
        fontSize: SIZES.medium,
        ...TEXTS.textRegular,
        textAlign: 'center',
    },
    coinFooter: {
        height: 62 * WIDTH.widthScale,
        width: WIDTH.width100,
        justifyContent: 'center',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#6A318133',
        borderRadius: 15,

        marginTop: 'auto',
    },
    totalProfitContainer: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#6A318133',
        borderRadius: 18,
        width: 336 * WIDTH.widthScale,
        height: 316 * WIDTH.widthScale,
        overflow: 'hidden',
    },
    totalProfitInfo: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    profitInfo: {
        width: '50%',
        // paddingHorizontal: 10,
        height: 123.5 * WIDTH.widthScale,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profitCoin: {
        height: 36 * WIDTH.widthScale,
        width: 147 * WIDTH.widthScale,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 18,
        marginBottom: 5,
    },

    line1: {
        position: 'absolute',
        width: '100%',
        height: 1,
        backgroundColor: '#F9D6DE33',
        top: '50%',
    },
    line2: {
        position: 'absolute',
        width: 1,
        height: '100%',
        backgroundColor: '#F9D6DE33',
        left: '50%',
    },

    profitFooter: {
        flex: 1,
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    totalProfit: {
        flexDirection: 'row',
        width: WIDTH.width100,
        borderRadius: 18,
        alignItems: 'center',
        paddingRight: 13,
        paddingLeft: 55,
        width: 305 * WIDTH.widthScale,
        height: 36 * WIDTH.widthScale,
    },
    total: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: WIDTH.width100,
    },
    totalTable: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#FFFFFF1A',
        width: WIDTH.width100,
        borderRadius: 18,
        paddingVertical: 3,
        backgroundColor: '#FFFFFF1A',
        height: 193 * WIDTH.widthScale,
        width: 336 * WIDTH.widthScale,
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 18,

        height: 35 * WIDTH.widthScale,
    },
});
export default AccountTwo;
