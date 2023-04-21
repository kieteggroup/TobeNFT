import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTS, SIZES, TEXTS, WIDTH, images } from '../../constants';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonCustom } from '../../CustomComponent';
import Table from '../../components/Table';
import HomeNFT from './HomeNFT';

const dataCard = [
    {
        name: 'Classic NFT Card',
        card: images.cardclassic,
    },
    {
        name: 'Gold NFT Card',
        card: images.cardgold,
    },
];

const Card = () => {
    return (
        <View style={styles.wrapper}>
            {/* Title */}
            <View style={{ paddingHorizontal: 20, alignItems: 'center' }}>
                <View style={{ height: 52, marginTop: 23 }}>
                    <Text style={[styles.title, TEXTS.textBold]}>NFT CARD</Text>
                </View>
                <Text style={styles.subtitle}>Earn your NFT items and trade them on the marketplace to make money</Text>
            </View>
            <LinearGradient
                colors={['#502D9F66', '#08021C00']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                locations={[0.3191, 0.6809]}
                style={styles.cardContainer}
            >
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    snapToInterval={100}
                    // pagingEnabled
                    contentContainerStyle={{
                        paddingHorizontal: 20,
                        paddingTop: 17,
                        columnGap: 14,
                        flexDirection: 'row',
                    }}
                    data={dataCard}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <View style={styles.card} key={item.name}>
                            <Image source={item.card} style={styles.img} />
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
                            <LinearGradient
                                colors={['#502D9F', '#E30370']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                locations={[0.3191, 0.6809]}
                                style={{
                                    height: 5 * WIDTH.widthScale,
                                    width: 103 * WIDTH.widthScale,
                                    borderRadius: 6.5,
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 7,
                                }}
                            ></LinearGradient>
                        </View>
                    )}
                ></FlatList>
            </LinearGradient>

            <View style={{ paddingHorizontal: 22, paddingTop: 22, width: WIDTH.width100 }}>
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
    title: {
        fontSize: SIZES.xLarge,
        alignItems: 'center',
    },
    subtitle: {
        ...TEXTS.textRegular,
        fontSize: SIZES.medium,
        textAlign: 'center',
    },
    cardContainer: {
        height: 280 * WIDTH.widthScale,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderStyle: 'solid',
        borderColor: '#6A318133',
        marginTop: SIZES.xLarge,
        width: WIDTH.width100,
    },
    card: {},
    cardText: {
        fontSize: SIZES.large,
        marginTop: 14,
        ...TEXTS.textBold,
    },
    img: {
        width: 308.3 * WIDTH.widthScale,
        height: 194.23 * WIDTH.widthScale,
    },
    button: {
        height: 27.75 * WIDTH.widthScale,
        width: 105.85 * WIDTH.widthScale,
        borderWidth: 0,
    },
});
export default Card;
