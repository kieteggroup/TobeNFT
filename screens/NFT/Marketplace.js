import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

import { COLORS, FONT, SIZES, TEXTS, WIDTH, icons, images } from '../../constants';
import { ButtonCustom, InputCustom } from '../../CustomComponent';

const Marketplace = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.wrapper}>
            {/* Title */}
            <View style={{ paddingHorizontal: 20, alignItems: 'center' }}>
                <View style={{ height: 52, marginTop: 23 }}>
                    <Text style={styles.title}>NFT MARKETPLACE</Text>
                </View>
                <Text style={styles.subtitle}>Earn your NFT items and trade them on the marketplace to make money</Text>
            </View>
            {/* Search */}
            <LinearGradient
                colors={['#502D9F66', '#08021C00']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                locations={[0.085, 1]}
                style={styles.formSearch}
            >
                <InputCustom style={styles.input} placeholder="Enter keyword" radiusMax />
                <InputCustom style={styles.input} placeholder="Nation" radiusMax />
                <InputCustom style={styles.input} placeholder="Province" radiusMax />
                <InputCustom style={styles.input} placeholder="Category" radiusMax />
                <ButtonCustom
                    text="Search"
                    leftIcon={<Image source={icons.search} />}
                    buttonStyle={{ borderWidth: 0, marginBottom: 16 }}
                    buttonStyleText={{ fontFamily: FONT.regular }}
                    backgroundLinearGradient={['#502D9F', '#F40074']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    locations={[0.085, 1]}
                />
            </LinearGradient>
            <View style={styles.listRestaurant}>
                {[1, 2, 3, 4, 5].map((item) => (
                    <TouchableOpacity
                        style={styles.wrapperItem}
                        key={item}
                        onPress={() => navigation.navigate('CardDetail')}
                    >
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
                                    marginTop: 23,
                                }}
                            >
                                Juicy Burger
                            </Text>
                            <Text numberOfLines={1} style={{ fontSize: SIZES.small, ...TEXTS.textRegular }}>
                                158 Ludlow St, New York, NY 10002, United States
                            </Text>
                            <Text
                                style={{
                                   ...TEXTS.textBold,
                                   fontSize: SIZES.large,
                                }}
                            >
                                $1000
                            </Text>
                            <ButtonCustom
                                text="Buy now"
                                buttonStyle={{
                                    height: 30,
                                    borderWidth: 0,
                                    marginTop: 12,
                                }}
                                buttonStyleText={{
                                    fontSize: 14,
                                    ...TEXTS.textBold,
                                }}
                                backgroundLinearGradient={['#780D69', '#EC0174']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                locations={[0.25, 0.75]}
                            />
                        </View>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        marginTop: 23,
        paddingHorizontal: 20,
        width: WIDTH.width100,
    },

    title: {
        fontSize: SIZES.xLarge,
        alignItems: 'center',
        ...TEXTS.textBold,
    },
    subtitle: {
        fontSize: SIZES.medium,
        ...TEXTS.textMedium,
        textAlign: 'center',
        marginBottom: 27,
    },

    formSearch: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#6a318133',
        borderRadius: 18,
        rowGap: 15,
        paddingHorizontal: 20,
        paddingTop: 25,
        width: WIDTH.width100,
        alignItems: 'center',
    },
    input: {
        fontSize: 14,
        height: 36,
        width: WIDTH.width100,
        ...TEXTS.textMedium,
    },
    listRestaurant: {
        marginTop: 29,
        rowGap: 23,
    },
    wrapperItem: {
        width: WIDTH.width100,
        flexDirection: 'row',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#F4007433',
        borderRadius: 18,
        backgroundColor: '#140E2580',
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
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
    },
    textRestaurant: {
        fontSize: SIZES.small,
        ...TEXTS.textRegular,
    },
    star: {
        flexDirection: 'row',
    },
    right: {
        flex: 1,
        paddingHorizontal: 16,
        alignItems: 'flex-start',
        rowGap: 5,
    },
});
export default Marketplace;
