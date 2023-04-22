import { View, ScrollView, Image, Text, FlatList, StyleSheet } from 'react-native';

import { images, icons, TEXTS, SIZES, WIDTH, FONTS } from '../../../constants';
import { ButtonCustom } from '../../../CustomComponent';

const dataNFT = [
    {
        name: 'Virtual Silver',
        price: 300,
        description: '36 months - Growth: 5%',
        img: images.virtualSilver,
    },
    {
        name: 'Virtual Gold',
        price: 500,
        description: '36 months - Growth: 10%',
        img: images.virtualGold,
    },
    {
        name: 'Virtual Platinum',
        price: 700,
        description: '36 months - Growth: 15%',
        img: images.virtualPlatinum,
    },
    {
        name: 'Virtual VIP',
        price: 1000,
        description: '36 months - Growth: 20%',
        img: images.virtualVip,
    },
];
const MyVirtualMachine = () => {
    return (
        <>
            {dataNFT.length > 0 ? (
                <FlatList
                    style={{ width: WIDTH.width100, marginTop: 40 }}
                    contentContainerStyle={{
                        paddingHorizontal: 20,
                        paddingVertical: 5,
                        columnGap: 18,
                    }}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    snapToInterval={100}
                    data={dataNFT}
                    renderItem={({ item }) => (
                        <View style={styles.virtualItem}>
                            <Image source={item.img} style={styles.img}/>
                            <View style={styles.info}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.price}>${item.price}</Text>
                                <Text style={styles.description}>{item.description}</Text>
                                <ButtonCustom
                                    text="BUY NOW"
                                    buttonStyle={{ height: 30 * WIDTH.widthScale, width: 110 * WIDTH.widthScale, borderWidth: 0 }}
                                    buttonStyleText={{ fontFamily: FONTS.bold }}
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
                <View style={{alignItems:'center'}} >
                    <Image source={images.empty_data} style={styles.empty_data} />
                    <Text style={styles.title}>(Empty Data)</Text>
                </View>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    virtualItem: {
        flexDirection: 'row',
        backgroundColor: '#140E2582',
        borderRadius: 18,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#F4007433',
        // padding:10
        height: 169 * WIDTH.widthScale,
        width: 333 * WIDTH.widthScale,
        alignItems: 'center',
        justifyContent: 'space-around',
        shadowColor: '#FFFFFF66',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 20,
    },
    info: {
        alignItems: 'center',
    },
    name: {
        fontSize: SIZES.medium,
        ...TEXTS.textBold,
    },
    price: {
        fontSize: SIZES.large,
        ...TEXTS.textBold,
    },
    image: {
        width: 85.51 * WIDTH.widthScale,
        height: 154.66 * WIDTH.widthScale,
    },
    description: {
        ...TEXTS.textRegular,
        marginTop: 10,
        marginBottom: 16,
    },
    empty_data: {
        width: 222 * WIDTH.widthScale,
        height: 148 * WIDTH.widthScale,
    },
});
export default MyVirtualMachine;
