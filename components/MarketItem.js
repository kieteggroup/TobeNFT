import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';
import { ButtonCustom } from '../CustomComponent';
import { COLORS, SIZES, WIDTH, icons, images } from '../constants';

const MarketItem = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.left}>
                <Image style={styles.img} source={images.locationnho} />
                <View style={styles.restaurant}>
                    <Text>Restaurant</Text>
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
                <Text style={{ fontSize: SIZES.medium, color: COLORS.white, fontWeight: 700 }}>Juicy Burger</Text>
                <Text numberOfLines={1} style={{ fontSize: SIZES.small, color: COLORS.gray2 }}>
                    158 Ludlow St, New York, NY 10002, United States
                </Text>
                <Text style={{ fontSize: SIZES.large, color: COLORS.white, fontWeight: 700 }}>$1000</Text>
                <ButtonCustom
                    text="Buy now"
                    buttonStyle={{ height: 40, minWidth: '100%', borderWidth: 0 ,marginTop:10}}
                    backgroundLinearGradient={['#780D69', '#EC0174']}
                    start={{ x: 0.2, y: 0.5 }}
                    end={{ x: 1, y: 0 }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: WIDTH.width100,
        flexDirection: 'row',
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#F4007433',
        borderRadius: 17,
    },
    restaurant: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00000040',
        height: '25%',
        borderTopLeftRadius: 17,
        borderTopRightRadius: 17,
    },
    star: {
        flexDirection: 'row',
    },
    right: {
        flex: 1,
        padding: 10,
        alignItems: 'flex-start',
        rowGap:5
    },
});
export default MarketItem;
