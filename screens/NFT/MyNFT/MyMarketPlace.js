import { View, ScrollView, Image, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { images, icons, TEXTS, SIZES, WIDTH, FONTS, BORDER } from '../../../constants';
import { ButtonCustom } from '../../../CustomComponent';
import useMultiplyWidthScale from '../../../hooks/useMultiplyWidthScale';

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
];
const MyMarketPlace = () => {
    return (
        <>
            {dataNFT.length > 0 ? (
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.dataList}
                    data={dataNFT}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={styles.wrapperItem} key={item}>
                            <View style={styles.left}>
                                <Image style={styles.img} source={images.locationnho} />
                                <View style={styles.restaurant}>
                                    <Text style={styles.textRestaurant}>Restaurant</Text>
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
                                <Text
                                    style={{
                                        ...TEXTS.textMedium,
                                        fontSize: SIZES.medium,
                                    }}
                                >
                                    {item.name}
                                </Text>
                                <Text numberOfLines={1} style={{ ...TEXTS.textRegular, fontSize: SIZES.small }}>
                                    {item.address}
                                </Text>
                                <Text
                                    style={{
                                        ...TEXTS.textBold,
                                        fontSize: SIZES.large,
                                    }}
                                >
                                    {item.price}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            ) : (
                <View style={{ alignItems: 'center' }}>
                    <Image source={images.empty_data} style={styles.empty_data} />
                    <Text style={styles.title}>(Empty Data)</Text>
                </View>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    dataList: {
        paddingHorizontal: 17,
        rowGap: SIZES.xSmall,
    },
    wrapperItem: {
        width: 331,
        height: 102,
        flexDirection: 'row',
        ...BORDER,
        borderColor: '#F4007433',
        borderRadius: 18,
        backgroundColor: '#140E2580',
    },

    img: {
        width: 101,
        height: WIDTH.width100,
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
        borderTopLeftRadius: SIZES.xMedium,
        borderTopRightRadius: SIZES.xMedium,
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
        paddingHorizontal: 15,
        alignItems: 'flex-start',
        rowGap: 5,
    },
    empty_data: {
        width: 222,
        height: 148,
    },
});
useMultiplyWidthScale(styles);
export default MyMarketPlace;
