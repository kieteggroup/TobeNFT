import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { MainContainer, Table } from '../../components';
import { BORDER, COLORS, SIZES, TEXTS, WIDTH, icons, images } from '../../constants';
import { IconDropDown } from '../../assets/imageSvg/ImageSVG';
import useMultiplyWidthScale from '../../hooks/useMultiplyWidthScale';
import { useLanguage } from '../../contexts/LanguageContext';

const AccountTwo = ({ navigation }) => {
    const { t } = useLanguage();

    return (
        <MainContainer leftIcon={images.logongang} noBackgroundFooter>
            <View style={styles.wrapper}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={icons.back} style={{ padding: 10 * WIDTH.widthScale,marginTop: 10 * WIDTH.widthScale }} />

                </TouchableOpacity>
                <Text style={styles.title}>{t('titleAccount')}</Text>
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
                                <Text style={styles.text}>{t('totalFreeCoins')}</Text>
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
                                <Text style={styles.text}>{t('totalProfitAndCommission')}</Text>
                            </LinearGradient>
                        </View>
                    </View>

                    {/* Total profit */}
                    <LinearGradient
                        colors={[COLORS.bodyLight, COLORS.bodyTransp]}
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
                                <Text style={styles.text}>{t('systemCommission')}</Text>
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
                                <Text style={styles.text}>{t('netProfit')}</Text>
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
                                <Text style={styles.text}>{t('personalSales')}</Text>
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
                                <Text style={styles.text}>{t('systemSales')}</Text>
                            </View>

                            <View style={styles.line1}></View>
                            <View style={styles.line2}></View>
                        </View>

                        <LinearGradient
                            colors={['#FFD70566', COLORS.bodyLight]}
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
                                    <Text style={styles.text}>{t('totalProfit')}</Text>
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
                            <Text style={styles.text}>{t('totalNumber')}</Text>
                            <Text style={styles.coin}>12 578 688</Text>
                        </View>
                        <LinearGradient
                            colors={['#251351', '#1409314F']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            locations={[0.3392, 0.6809]}
                            style={{ ...styles.totalRow, height: 40.88 * WIDTH.widthScale }}
                        >
                            <Text style={styles.text}>{t('totalPurchased')}</Text>
                            <Text style={styles.coin}>436 785</Text>
                        </LinearGradient>
                        <View style={styles.totalRow}>
                            <Text style={styles.text}>{t('totalCard')}</Text>
                            <Text style={styles.coin}>12</Text>
                        </View>
                        <LinearGradient
                            colors={['#251351', '#1409314F']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            locations={[0.3392, 0.6809]}
                            style={{ ...styles.totalRow, height: 40.88 * WIDTH.widthScale }}
                        >
                            <Text style={styles.text}>{t('totalVirtualMachine')}</Text>
                            <Text style={styles.coin}>97</Text>
                        </LinearGradient>
                        <View style={styles.totalRow}>
                            <Text style={styles.text}>{t('totalEarned')}</Text>
                            <Text style={styles.coin}>865</Text>
                        </View>
                    </View>

                    {/* History Commission */}
                    <View style={{ width: WIDTH.width100 }}>
                        <Table
                            heading={t('titleHistoryCommission')}
                            rightIcon={<IconDropDown style={styles.iconDown} />}
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
        paddingHorizontal: SIZES.large,
        marginBottom: 17,
    },
    title: {
        ...TEXTS.textBold,
        fontSize: SIZES.xLarge,
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
        columnGap: SIZES.xLarge,
    },
    coinBox: {
        width: 153,
        height: 178,
        alignItems: 'center',
        ...BORDER,
        borderWidth: 2,
        borderRadius: 18,
        overflow: 'hidden',
    },
    boxImg: {
        marginTop: 15,
        marginBottom: 13.56,
        height: 42.44,
        width: 42.44,
    },
    coin: {
        ...TEXTS.textBold,
        fontSize: SIZES.medium,
    },
    text: {
        ...TEXTS.textRegular,
        fontSize: SIZES.medium,
        textAlign: 'center',
    },
    coinFooter: {
        height: 62,
        width: WIDTH.width100,
        justifyContent: 'center',
        ...BORDER,

        borderWidth: 2,
        borderRadius: 15,

        marginTop: 'auto',
    },
    totalProfitContainer: {
        ...BORDER,

        borderWidth: 2,
        borderRadius: 18,
        width: 336,
        height: 316,
        overflow: 'hidden',
    },
    totalProfitInfo: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    profitInfo: {
        width: '50%',
        // paddingHorizontal:  SIZES.xSmall
        height: 123.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    profitCoin: {
        height: 36,
        width: 147,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 18,
        marginBottom: 5,
    },

    line1: {
        position: 'absolute',
        width: WIDTH.width100,
        height: 1,
        backgroundColor: '#F9D6DE33',
        top: '50%',
    },
    line2: {
        position: 'absolute',
        width: 1,
        height: WIDTH.width100,
        backgroundColor: '#F9D6DE33',
        left: '50%',
    },

    profitFooter: {
        flex: 1,
        paddingHorizontal: SIZES.small,
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
        width: 305,
        height: 36,
    },
    total: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: WIDTH.width100,
    },
    totalTable: {
        ...BORDER,
        borderColor: '#FFFFFF1A',
        width: WIDTH.width100,
        borderRadius: 18,
        paddingVertical: 3,
        backgroundColor: '#FFFFFF1A',
        height: 193,
        width: 336,
    },
    totalRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 18,
        height: 35,
    },
    iconDown: {
        transform: [{ rotate: '-90deg' }],
        height: 15,
        width: 15,
    },
});
useMultiplyWidthScale(styles);
export default AccountTwo;
