import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { COLORS, FONT, SIZES, TEXTS, WIDTH, images } from '../../constants';
import { LinearGradient } from 'expo-linear-gradient';
import { ButtonCustom } from '../../CustomComponent';

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
            <View style={{ paddingHorizontal: 20 ,alignItems:"center"}}>
                <View style={{ height: 52, marginTop: 23 }}>
                    <Text style={[styles.title,TEXTS.textBold]}>NFT CARD</Text>
                </View>
                <Text style={styles.subtitle}>Earn your NFT items and trade them on the marketplace to make money</Text>
            </View>
            <LinearGradient
                colors={['#502D9F66', '#08021C00']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                locations={[0.085, 1]}
                style={styles.cardContainer}
            >
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    snapToInterval={100}
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
                            <Image source={item.card} />
                            <View style={{ position: 'absolute', right: 16, top: 129 }}>
                                <ButtonCustom
                                    text="BUY NOW"
                                    buttonStyle={{ height: 28, width: 105.85, borderWidth: 0 }}
                                    buttonStyleText={{ fontSize: 14, fontFamily: FONT.bold }}
                                    backgroundLinearGradient={['#780D69', '#EC0174']}
                                    start={{ x: 0, y: 0 }}
                                    end={{ x: 1, y: 0 }}
                                    locations={[0.25, 0.75]}
                                />
                            </View>
                            <Text style={styles.cardText}>{item.name}</Text>
                            <LinearGradient
                                colors={['#502D9F', '#E30370']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                locations={[0.085, 1]}
                                style={{
                                    height: 5,
                                    width: 103,
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
                <View style={styles.history}>
                    <Text style={styles.historyHeading}>History Comission</Text>
                    <LinearGradient
                        colors={['#251351', '#1409314F']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        locations={[0.25, 0.75]}
                        style={styles.thead}
                    >
                        <Text numberOfLines={1}>#</Text>
                        <Text> Username</Text>
                        <Text numberOfLines={1}> Description ...</Text>
                    </LinearGradient>
                    <FlatList
                        data={[1, 2, 3, 4, 5]}
                        renderItem={({ item }) => (
                            <View style={styles.row}>
                                <Text style={styles.name}>{item}</Text>
                            </View>
                        )}
                        keyExtractor={(item) => item.id}
                        style={styles.container}
                    />
                </View>
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
        height: 280,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderStyle: 'solid',
        borderColor: '#6A318133',
        marginTop: 24,
        width: '100%',
    },
    card: {
        // flexDirection: 'c',
    },
    cardText: {
        fontSize: SIZES.large,
        marginTop: 14,
        ...TEXTS.textBold,

    },
    history: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#FFFFFF1A',
        borderRadius: 18,
        height: 320,
        backgroundColor: '#FFFFFF1A',
    },
    historyHeading: {
        ...TEXTS.textBold,
        fontFamily: FONT.boldRoboto,
        paddingVertical: 15,
        paddingLeft: 30,
    },
    thead: {
        height: 40.88,
        alignItems: 'center',
        // justifyContent: 'space-around',
        paddingHorizontal: 30,
        columnGap: 20,
        flexDirection: 'row',
        width: '100%',
        overflow: 'hidden',
        overlayColor: 'red',
    },
    row: {
        height: 37,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#FFFFFF1A',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30,
        columnGap: 20,
    },
});
export default Card;
