import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { BORDER, COLORS, FONTS, SIZES, TEXTS, WIDTH, images } from '../../constants';
import { ButtonCustom } from '../../CustomComponent';
import Table from '../../components/Table';
import useMultiplyWidthScale from '../../hooks/useMultiplyWidthScale';
import { useLanguage } from '../../contexts/LanguageContext';

const dataVirtual = [
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

const VirtualMachine = () => {
    const { t } = useLanguage();
    return (
        <View style={styles.wrapper}>
            {/* Title */}
            <View style={{ paddingHorizontal: SIZES.large, alignItems: 'center' }}>
                <View style={styles.titleContent}>
                    <Text style={styles.title}>{t('titleNFTVirtualMachine')}</Text>
                </View>
                <Text style={styles.subtitle}>{t('nftDescription')}</Text>
            </View>
            {/* List Virtual */}

            <View style={styles.listData}>
                {dataVirtual.map((item, index) => (
                    <View key={index} style={styles.virtualItem}>
                        <Image source={item.img} style={styles.img} />
                        <View style={styles.info}>
                            <Text style={styles.name}>{t(item.name)}</Text>
                            <Text style={styles.price}>${item.price}</Text>
                            <Text style={styles.description}>
                                36 {t('months')} - {t('growth')}: {item.growth}
                            </Text>
                            <ButtonCustom
                                text={t('buyNow')}
                                buttonStyle={styles.btnNow}
                                buttonStyleText={{ fontFamily: FONTS.bold, textTransform: 'uppercase' }}
                                backgroundLinearGradient={['#780D69', '#EC0174']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                locations={[0.25, 0.75]}
                            />
                        </View>
                    </View>
                ))}
            </View>
            {/* <FlatList
                style={{ width: WIDTH.width100, marginTop: 40 }}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.large,
                    rowGap: 30,
                }}
                data={dataVirtual}
                renderItem={({ item }) => (
                    
                )}
            /> */}

            <View style={styles.history}>
                <Table heading="History Commission" />
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
    listData: {
        paddingHorizontal: SIZES.large,
        rowGap: 30,
        width: WIDTH.width100,
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
        // elevation: 5,
    },
    img: {
        width: 85.51,
        height: 154.66,
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
    description: {
        ...TEXTS.textRegular,
        marginTop: SIZES.xSmall,
        marginBottom: SIZES.medium,
    },
    btnNow: {
        height: 29.21,
        width: 109.04,
        borderWidth: 0,
    },
    history: {
        paddingHorizontal: 22,
        paddingTop: 22,
        width: WIDTH.width100,
    },
});
useMultiplyWidthScale(styles);
export default VirtualMachine;
