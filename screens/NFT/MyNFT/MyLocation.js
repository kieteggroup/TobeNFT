import { View, ScrollView, Image, Text, FlatList, StyleSheet } from 'react-native';

import { images, icons, TEXTS, SIZES, WIDTH } from '../../../constants';
import { ButtonCustom } from '../../../CustomComponent';
import { useLanguage } from '../../../contexts/LanguageContext';
import useMultiplyWidthScale from '../../../hooks/useMultiplyWidthScale';

const dataNFT = [
    {
        name: 'Minh Rita',
        address: '294 Khuông Việt, Phường phú trung,Quận Tân Phú, Hồ Chí Minh',
        img: images.tanbinh,
    },
    {
        name: 'Minh Rita',
        address: '294 Khuông Việt, Phường phú trung,Quận Tân Phú, Hồ Chí Minh',
        img: images.tanbinh,
    },
];
const MyLocation = () => {
    const { t } = useLanguage();

    return (
        <>
            {dataNFT.length > 0 ? (
                <FlatList
                    data={dataNFT}
                    numColumns={2}
                    keyExtractor={(item) => item.name}
                    contentContainerStyle={styles.listDataNFT}
                    renderItem={({ item }) => (
                        <View style={styles.productItem}>
                            <Image source={item.img} style={styles.img} />
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.address}>{item.address}</Text>
                            <View style={styles.start}>
                                <Image source={icons.saovang} />
                                <Image source={icons.saovang} />
                                <Image source={icons.saovang} />
                                <Image source={icons.saovang} />
                                <Image source={icons.saovang} />
                            </View>
                            <ButtonCustom
                                text={t('sell')}
                                buttonStyle={styles.buttonSell}
                                buttonStyleText={{ ...TEXTS.textBold }}
                                backgroundLinearGradient={['#780D69', '#EC0174']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                locations={[0.25, 0.75]}
                            />
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
    listDataNFT: {
        alignItems: 'center',
    },
    productItem: {
        alignItems: 'center',
        width: 147.22,
        height: 169,
        backgroundColor: '#08021CCC',
        borderRadius: SIZES.medium,
        padding: 4,
        marginHorizontal: 18.78 / 2,
        marginBottom: 18.78 / 2,
    },
    img: {
        width: WIDTH.width100,
        borderRadius: SIZES.xSmall,
        height: 89,
    },
    name: {
        ...TEXTS.textBold,
        fontSize: 13,
        textAlign: 'center',
    },
    address: {
        ...TEXTS.textBold,
        fontSize: 7,
        textAlign: 'center',
    },
    start: {
        flexDirection: 'row',
    },
    buttonSell: {
        width: 87,
        height: 19,
        marginTop: 8,
        borderWidth: 0,
    },
    empty_data: {
        width: 222,
        height: 148,
    },
});
useMultiplyWidthScale(styles)
export default MyLocation;
