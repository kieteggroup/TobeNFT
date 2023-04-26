import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { COLORS, FONTS, SIZES, TEXTS, WIDTH, images } from '../../constants';
import { ButtonCustom } from '../../CustomComponent';
import Table from '../../components/Table';
import HomeNFT from './HomeNFT';
import useMultiplyWidthScale from '../../hooks/useMultiplyWidthScale';
import { IconDropDown } from '../../assets/imageSvg/ImageSVG';
import { useLanguage } from '../../contexts/LanguageContext';

const dataCard = [
    {
        typeCard: 'classic',
        name: 'classicCard',
        card: images.cardclassic,
        price: 500,
        monthly: 11,
    },
    {
        typeCard: 'gol',
        name: 'golCard',
        card: images.cardgold,
        price: 3000,
        monthly: 14,
    },
];
const Card = () => {
    const { t } = useLanguage();

    return (
        <View style={styles.wrapper}>
            {/* Title */}
            <View style={{ paddingHorizontal: SIZES.large, alignItems: 'center' }}>
                <View style={styles.titleContent}>
                    <Text style={styles.title}>{t('titleNFTCard')}</Text>
                </View>
                <Text style={styles.subtitle}>{t('nftDescription')}</Text>
            </View>
            <LinearGradient
                colors={[COLORS.bodyLight, COLORS.bodyTransp]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                locations={[0.3392, 0.9986]}
                angle={295.36}
                style={styles.cardContainer}
            >
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    snapToInterval={100}
                    // pagingEnabled
                    contentContainerStyle={styles.listCard}
                    data={dataCard}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <View style={styles.card} key={item.name}>
                            <Image source={item.card} style={styles.img} />

                            <View style={styles.infoCard}>
                                <View style={{ rowGap: 3 * WIDTH.widthScale }}>
                                    <Text style={styles.typeCard}>{t(item.typeCard)}</Text>
                                    <Text style={styles.typeCard}>${item.price}</Text>
                                </View>
                                <View style={{ rowGap: 7 * WIDTH.widthScale }}>
                                    <Text style={styles.monthly}>
                                        <IconDropDown style={styles.iconDown} />
                                        {'  '}
                                        {item.monthly}% / {t('monthly')}
                                    </Text>
                                    <Text style={styles.monthly}>
                                        <IconDropDown style={styles.iconDown} />
                                        {'  '}
                                        24 {t('months')}
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.buttonPosition}>
                                <ButtonCustom
                                    text={t('buyNow')}
                                    buttonStyle={styles.button}
                                    buttonStyleText={{ fontFamily: FONTS.bold, textTransform: 'uppercase' }}
                                    backgroundLinearGradient={['#780D69', '#EC0174']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    locations={[0.25, 0.75]}
                                />
                            </View>
                            <Text style={styles.cardText}>{t(item.name)}</Text>
                            <LinearGradient
                                colors={['#502D9F', '#E30370']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                locations={[0.3392, 0.9986]}
                                style={styles.line}
                            ></LinearGradient>
                        </View>
                    )}
                ></FlatList>
            </LinearGradient>

            <View style={styles.history}>
                <Table heading={t('titleHistoryCommission')} />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        marginTop: 45,
        width: WIDTH.width100,
    },
    titleContent: {
        height: 52,
        marginTop: 23,
    },
    title: {
        ...TEXTS.textBold,
        fontSize: SIZES.xLarge,
        alignItems: 'center',
        textTransform: 'uppercase',
    },
    subtitle: {
        ...TEXTS.textRegular,
        fontSize: SIZES.medium,
        textAlign: 'center',
    },
    cardContainer: {
        height: 280,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderStyle: 'solid',
        borderColor: '#6A318133',
        marginTop: SIZES.xLarge,
        width: WIDTH.width100,
    },
    listCard: {
        paddingHorizontal: SIZES.large,
        paddingTop: 17,
        columnGap: SIZES.xMedium,
        flexDirection: 'row',
    },
    cardText: {
        marginTop: SIZES.xMedium,
        ...TEXTS.textBold,
        fontSize: SIZES.large,
    },
    img: {
        width: 308.3,
        height: 194.23,
    },
    infoCard: {
        position: 'absolute',
        top: 19,
        flexDirection: 'row',
        justifyContent: 'space-between',
        right: 17.47,
        left: 30,
    },
    typeCard: {
        ...TEXTS.textBold,
        fontSize: SIZES.large,
    },
    monthly: {
        ...TEXTS.textRegular,
        fontSize: SIZES.small,
        alignItems: 'center',
    },
    iconDown: {
        transform: [{ rotate: '-90deg' }],
        width: 6,
        height: 6,
    },
    buttonPosition: {
        position: 'absolute',
        right: SIZES.medium,
        top: 129,
    },

    button: {
        height: 27.75,
        width: 105.85,
        borderWidth: 0,
    },
    line: {
        height: 5,
        width: 103,
        borderRadius: 6.5,
        position: 'absolute',
        bottom: 0,
        left: 7,
    },
    history: {
        paddingHorizontal: 22,
        paddingTop: 22,
        width: WIDTH.width100,
    },
});

useMultiplyWidthScale(styles);

export default Card;
