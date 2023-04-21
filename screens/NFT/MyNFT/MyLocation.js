import { View, ScrollView, Image, Text, FlatList, StyleSheet } from 'react-native';
import { images, icons, TEXTS, SIZES, WIDTH } from '../../../constants';
import { ButtonCustom } from '../../../CustomComponent';

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
                                text="SELL"
                                buttonStyle={styles.buttonSell}
                                buttonStyleText={{ fontSize: 14, ...TEXTS.textBold}}
                                backgroundLinearGradient={['#780D69', '#EC0174']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                locations={[0.25, 0.75]}
                            />
                        </View>
                    )}
                />
            ) : (
                <>
                    <Image source={images.empty_data} />
                    <Text style={styles.title}>(Empty Data)</Text>
                </>
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
        width: 147.22 * WIDTH.widthScale,
        height: 169 * WIDTH.widthScale,
        backgroundColor: '#08021CCC',
        borderRadius: 16,
        padding: 4,
        marginHorizontal: 18.78 / 2,
        marginBottom:18.78 / 2
    },
    img: {
        width: WIDTH.width100,
        borderRadius: 10,
        height: 89 * WIDTH.widthScale,
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
        width: 87 * WIDTH.widthScale,
        height: 19 * WIDTH.widthScale,
        marginTop: 8,
        borderWidth: 0,
    },
});
export default MyLocation;
