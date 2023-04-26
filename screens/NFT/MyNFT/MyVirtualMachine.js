import { View, ScrollView, Image, Text, FlatList, StyleSheet } from 'react-native';

import { images, icons, TEXTS, SIZES, WIDTH, FONTS, BORDER } from '../../../constants';
import { ButtonCustom } from '../../../CustomComponent';
import useMultiplyWidthScale from '../../../hooks/useMultiplyWidthScale';
import { useLanguage } from '../../../contexts/LanguageContext';

const dataNFT = [
    {
        name: 'virtualSilver',
        price: 300,
        growth: '5%',
        img: images.virtualSilver,
    },
    {
        name: 'virtualGold',
        price: 500,
        growth: '10%',
        img: images.virtualGold,
    },
    {
        name: 'virtualPlatinum',
        price: 700,
        growth: '15%',
        img: images.virtualPlatinum,
    },
    {
        name: 'virtualVIP',
        price: 1000,
        growth: '20%',
        img: images.virtualVip,
    },
];
const MyVirtualMachine = () => {
    const { t } = useLanguage();

    return (
        <>
            {dataNFT.length > 0 ? (
                <FlatList
                    style={{ width: WIDTH.width100 }}
                    contentContainerStyle={styles.listData}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    snapToInterval={100}
                    data={dataNFT}
                    renderItem={({ item }) => (
                        <View style={styles.virtualItem}>
                            <Image source={item.img} style={styles.img} />
                            <View style={styles.info}>
                                <Text style={styles.name}>{t(item.name)}</Text>
                                <Text style={styles.price}>${item.price}</Text>
                                <Text style={styles.description}>
                                    36 {t('months')} - {t('growth')}: {item.growth}
                                </Text>

                                <ButtonCustom
                                    text={t('buyNow')}
                                    buttonStyle={{
                                        height: 30 * WIDTH.widthScale,
                                        width: 110 * WIDTH.widthScale,
                                        borderWidth: 0,
                                    }}
                                    buttonStyleText={{ fontFamily: FONTS.bold, textTransform: 'uppercase' }}
                                    backgroundLinearGradient={['#780D69', '#EC0174']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    locations={[0.25, 0.75]}
                                />
                            </View>
                        </View>
                    )}
                />
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
    listData: {
        paddingHorizontal: SIZES.large,
        paddingVertical: 5,
        columnGap: 18,
        marginTop: 40,
    },
    virtualItem: {
        flexDirection: 'row',
        backgroundColor: '#140E2582',
        borderRadius: 18,
        ...BORDER,
        borderColor: '#F4007433',
        // padding:10
        height: 169,
        width: 333,
        alignItems: 'center',
        justifyContent: 'space-around',
        shadowColor: '#FFFFFF66',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: SIZES.large,
    },
    info: {
        alignItems: 'center',
    },
    name: {
        ...TEXTS.textBold,
        fontSize: SIZES.medium,
    },
    price: {
        ...TEXTS.textBold,
        fontSize: SIZES.large,
    },
    img: {
        width: 85.51,
        height: 154.66,
    },
    description: {
        ...TEXTS.textRegular,
        marginTop: SIZES.xSmall,
        marginBottom: SIZES.medium,
    },
    empty_data: {
        width: 222,
        height: 148,
    },
});

useMultiplyWidthScale(styles);
export default MyVirtualMachine;
