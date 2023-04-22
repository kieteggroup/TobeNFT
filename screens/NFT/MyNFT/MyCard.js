import { View, ScrollView, Image, Text, FlatList, StyleSheet } from 'react-native';
import { images, icons, TEXTS, SIZES, WIDTH, FONTS } from '../../../constants';
import { ButtonCustom } from '../../../CustomComponent';

const dataNFT = [
    {
        name: 'Classic NFT Card',
        card: images.cardclassic,
    },
    {
        name: 'Gold NFT Card',
        card: images.cardgold,
    },
];
const MyCard = () => {
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
                            <View style={{ position: 'absolute', right: 16, top: 129 * WIDTH.widthScale }}>
                                <ButtonCustom
                                    text="BUY NOW"
                                    buttonStyle={styles.button}
                                    buttonStyleText={{ fontFamily: FONTS.bold }}
                                    backgroundLinearGradient={['#780D69', '#EC0174']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 1 }}
                                    locations={[0.25, 0.75]}
                                />
                            </View>
                            <Text style={styles.cardText}>{item.name}</Text>
                        </View>
                    )}
                ></FlatList>
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
        paddingHorizontal: 20,
        paddingTop: 17,
        columnGap: 14,
        flexDirection: 'row',
    },
    image: {
        width: 308.3 * WIDTH.widthScale,
        height: 194.23 * WIDTH.widthScale,
    },
    button: {
        height: 28 * WIDTH.widthScale,
        width: 105.85 * WIDTH.widthScale,
        borderWidth: 0,
    },
    cardText: {
        fontSize: SIZES.large,
        marginTop: 14,
        ...TEXTS.textBold,
    },
    empty_data: {
        width: 222 * WIDTH.widthScale,
        height: 148 * WIDTH.widthScale,
    },
});
export default MyCard;
