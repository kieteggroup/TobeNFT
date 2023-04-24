import { View, ScrollView, Image, Text, FlatList, StyleSheet } from 'react-native';

import { images, icons, TEXTS, SIZES, WIDTH, FONTS } from '../../../constants';
import { ButtonCustom } from '../../../CustomComponent';
import useMultiplyWidthScale from '../../../hooks/useMultiplyWidthScale';

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
                            <View style={styles.buttonContent}>
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
        paddingHorizontal: SIZES.large,
        paddingTop: 17,
        columnGap: SIZES.xMedium,
        flexDirection: 'row',
    },
    image: {
        width: 308.3 ,
        height: 194.23 ,
    },
    buttonContent: {
        position: 'absolute',
        right: SIZES.medium,
        top: 129 ,
    },
    button: {
        height: 28 ,
        width: 105.85 ,
        borderWidth: 0,
    },
    cardText: {
        marginTop: SIZES.xMedium,
        ...TEXTS.textBold,
        fontSize: SIZES.large,
    },
    empty_data: {
        width: 222 ,
        height: 148 ,
    },
});
useMultiplyWidthScale(styles)
export default MyCard;
