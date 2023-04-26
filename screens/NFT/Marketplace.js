import { View, Image, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import { BORDER, COLORS, FONTS, SIZES, TEXTS, WIDTH, icons, images } from '../../constants';
import { ButtonCustom, InputCustom } from '../../CustomComponent';
import useMultiplyWidthScale from '../../hooks/useMultiplyWidthScale';
import { useLanguage } from '../../contexts/LanguageContext';

const dataNFT = [
    {
        name: 'Juicy Burger',
        address: '158 Ludlow St, New York, NY 10002, United States',
        price: 1000,
    },
    {
        name: 'Juicy Burger',
        address: '158 Ludlow St, New York, NY 10002, United States',
        price: 1000,
    },
    {
        name: 'Juicy Burger',
        address: '158 Ludlow St, New York, NY 10002, United States',
        price: 1000,
    },
    {
        name: 'Juicy Burger',
        address: '158 Ludlow St, New York, NY 10002, United States',
        price: 1000,
    },
];
const Marketplace = () => {
    const navigation = useNavigation();
    const { t } = useLanguage();
    return (
        <View style={styles.wrapper}>
            {/* Title */}
            <View style={styles.contentTitle}>
                <View style={{ height: 52 * WIDTH.widthScale, marginTop: 23 * WIDTH.widthScale }}>
                    <Text style={styles.title}>{t('titleNFTMarketplace')}</Text>
                </View>
                <Text style={styles.subtitle}>{t('nftDescription')}</Text>
            </View>
            {/* Search */}
            <LinearGradient
                colors={[COLORS.bodyLight, COLORS.bodyTransp]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                locations={[0.085, 1]}
                style={styles.formSearch}
            >
                <InputCustom style={styles.input} placeholder={t('placeholderEnterKeyword')} radiusMax />
                <InputCustom style={styles.input} placeholder={t('placeholderNation')} radiusMax />
                <InputCustom style={styles.input} placeholder={t('placeholderProvince')} radiusMax />
                <InputCustom style={styles.input} placeholder={t('placeholderCategory')} radiusMax />
                <ButtonCustom
                    text={t('search')}
                    leftIcon={<Image source={icons.search} />}
                    buttonStyle={styles.buttonSearch}
                    buttonStyleText={{ fontFamily: FONTS.regular }}
                    backgroundLinearGradient={['#502D9F', '#F40074']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    locations={[0.085, 1]}
                />
            </LinearGradient>

            <View style={styles.listRestaurant}>
                {dataNFT.map((item, index) => (
                    <TouchableOpacity
                        style={styles.wrapperItem}
                        key={index}
                        onPress={() => navigation.navigate('CardDetail')}
                    >
                        <View style={styles.left}>
                            <Image style={styles.img} source={images.locationnho} />
                            <View style={styles.restaurant}>
                                <Text style={styles.textRestaurant}>{t('restaurant')}</Text>
                                <View style={styles.star}>
                                    <Image source={icons.saovang} />
                                    <Image source={icons.saovang} />
                                    <Image source={icons.saovang} />
                                    <Image source={icons.saovang} />
                                    <Image source={icons.saotrang} />
                                </View>
                            </View>
                        </View>

                        <View style={styles.right}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text numberOfLines={1} style={{ ...TEXTS.textRegular, fontSize: SIZES.small }}>
                                {item.address}
                            </Text>
                            <Text
                                style={{
                                    ...TEXTS.textBold,
                                    fontSize: SIZES.large,
                                }}
                            >
                                ${item.price}
                            </Text>
                            <ButtonCustom
                                text={t('buyNow')}
                                buttonStyle={styles.button}
                                buttonStyleText={{
                                    ...TEXTS.textBold,
                                }}
                                backgroundLinearGradient={['#780D69', '#EC0174']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                locations={[0.25, 0.75]}
                            />
                        </View>
                    </TouchableOpacity>
                ))}
            </View>

            {/* <FlatList
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.listRestaurant}
                data={dataNFT}
                renderItem={({ item, index }) => (
                
                )}
            /> */}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        marginTop: 23,
        paddingHorizontal: SIZES.large,
        width: WIDTH.width100,
    },
    contentTitle: {
        paddingHorizontal: SIZES.large,
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        ...TEXTS.textBold,
        fontSize: SIZES.xLarge,
        textTransform: 'uppercase',
    },
    subtitle: {
        ...TEXTS.textMedium,
        fontSize: SIZES.medium,
        textAlign: 'center',
        marginBottom: 27,
    },

    formSearch: {
        ...BORDER,
        borderRadius: 18,
        rowGap: 15,
        paddingHorizontal: SIZES.large,
        paddingTop: 25,
        width: WIDTH.width100,
        alignItems: 'center',
    },
    input: {
        height: 36,
        width: WIDTH.width100,
        ...TEXTS.textMedium,
    },
    buttonSearch: {
        borderWidth: 0,
        marginBottom: 16,
        width: 292,
    },
    listRestaurant: {
        marginTop: 29,
        rowGap: 23,
    },
    wrapperItem: {
        width: 331,
        height: 159,
        flexDirection: 'row',
        ...BORDER,
        borderColor: '#F4007433',
        borderRadius: 18,
        backgroundColor: '#140E2580',
    },
    restaurant: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#140E2580',
        height: 34,
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
    },
    img: {
        width: 160,
        height: WIDTH.width100,
        overflow: 'hidden',
    },
    textRestaurant: {
        ...TEXTS.textRegular,
        fontSize: SIZES.small,
    },
    star: {
        flexDirection: 'row',
    },
    right: {
        flex: 1,
        paddingHorizontal: SIZES.medium,
        alignItems: 'flex-start',
        rowGap: 5,
    },
    name: {
        ...TEXTS.textMedium,
        fontSize: SIZES.medium,
        marginTop: 23,
    },
    button: {
        height: 30,
        borderWidth: 0,
        marginTop: SIZES.small,
        width: 138,
    },
});
useMultiplyWidthScale(styles);
export default Marketplace;
