import { View, ScrollView, Image, Text, FlatList, StyleSheet } from 'react-native';

import { images, icons, TEXTS, SIZES, WIDTH, FONTS } from '../../../constants';
import { ButtonCustom } from '../../../CustomComponent';
import useMultiplyWidthScale from '../../../hooks/useMultiplyWidthScale';
import { useLanguage } from '../../../contexts/LanguageContext';
import { IconDropDown } from '../../../assets/imageSvg/ImageSVG';

const dataNFT = [
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
const MyCard = () => {
    const { t } = useLanguage();

    return (
        <>
            {dataNFT.length > 0 ? (
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    snapToInterval={100}
                    // pagingEnabled
                    contentContainerStyle={styles.dataList}
                    data={dataNFT}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <View style={styles.card} key={item.name}>
                            <Image source={item.card} style={styles.image} />
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
                            <View style={styles.buttonContent}>
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
                        </View>
                    )}
                ></FlatList>
            ) : (
                <View style={{ alignItems: 'center' }}>
                    <Image source={images.empty_data} style={styles.empty_data} />
                    <Text style={styles.title}>({t('empty')})</Text>
                </View>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    dataList: {
        paddingHorizontal: SIZES.large,
        paddingTop: 17,
        columnGap: SIZES.xMedium,
        flexDirection: 'row',
    },
    image: {
        width: 308.3,
        height: 194.23,
    },
    buttonContent: {
        position: 'absolute',
        right: SIZES.medium,
        top: 129,
    },
    button: {
        height: 28,
        width: 105.85,
        borderWidth: 0,
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
    cardText: {
        marginTop: SIZES.xMedium,
        ...TEXTS.textBold,
        fontSize: SIZES.large,
    },
    empty_data: {
        width: 222,
        height: 148,
    },
});
useMultiplyWidthScale(styles);
export default MyCard;
