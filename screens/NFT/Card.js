import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { COLORS, FONTS, SIZES, TEXTS, WIDTH, images } from '../../constants';
import { ButtonCustom } from '../../CustomComponent';
import Table from '../../components/Table';
import HomeNFT from './HomeNFT';
import useMultiplyWidthScale from '../../hooks/useMultiplyWidthScale';

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
            <View style={{ paddingHorizontal: SIZES.large, alignItems: 'center' }}>
                <View style={styles.titleContent}>
                    <Text style={[ TEXTS.textBold,styles.title,]}>NFT CARD</Text>
                </View>
                <Text style={styles.subtitle}>Earn your NFT items and trade them on the marketplace to make money</Text>
            </View>
            <LinearGradient
                colors={[COLORS.bodyLight, COLORS.bodyTransp]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                locations={[0.3392, 0.9986]}
                style={styles.cardContainer}
            >
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    snapToInterval={100}
                    // pagingEnabled
                    contentContainerStyle={styles.listCard}
                    data={dataCard}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <View style={styles.card} key={item.name}>
                            <Image source={item.card} style={styles.img} />
                            <View style={{ position: 'absolute', right: SIZES.medium, top: 129 * WIDTH.widthScale }}>
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
                                locations={[0.3392, 0.9986]}
                                style={styles.line}
                            ></LinearGradient>
                        </View>
                    )}
                ></FlatList>
            </LinearGradient>

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
        marginTop: SIZES.xLarge,
        width: WIDTH.width100,
    },
    listCard: {
        paddingHorizontal: SIZES.large,
        paddingTop: 17,
        columnGap: SIZES.xMedium,
        flexDirection: 'row',
    },
    cardText: {
        marginTop: SIZES.xMedium,
        ...TEXTS.textBold,
        fontSize: SIZES.large,
    },
    img: {
        width: 308.3,
        height: 194.23,
    },
    button: {
        height: 27.75,
        width: 105.85,
        borderWidth: 0,
    },
    line: {
        height: 5,
        width: 103,
        borderRadius: 6.5,
        position: 'absolute',
        bottom: 0,
        left: 7,
    },
    history: {
        paddingHorizontal: 22,
        paddingTop: 22,
        width: WIDTH.width100,
    },
});

useMultiplyWidthScale(styles);

export default Card;
