import { LinearGradient } from 'expo-linear-gradient';
import React, { memo } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { COLORS, SIZES, TEXTS, icons } from '../constants';

const AccountItem = ({ title, subtitleOne, subtitleTwo, imgToearnNow = true, imgUsdt = true, oneItem }) => {
    return (
        <View style={styles.wrapper}>
            <LinearGradient
                style={styles.header}
                colors={['#08021C80', '#3e98c7']}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
            >
                <Text style={[styles.title,TEXTS.textBold]}>{title}</Text>
            </LinearGradient>
            <View style={styles.content}>
                <View style={styles.item}>
                    <View style={styles.priceNow}>
                        <Text style={styles.priceTextSub}>{subtitleOne && `(${subtitleOne})`}</Text>
                        <Text style={styles.priceText}>1 986 086.06</Text>
                    </View>
                    <Image source={imgUsdt ? icons.Usdt : icons.Toearnnow} style={styles.img} />
                </View>
                {!oneItem && (
                    <View style={styles.item}>
                        <View style={styles.priceNow}>
                            <Text style={styles.priceTextSub}>{subtitleTwo && `(${subtitleTwo})`}</Text>
                            <Text style={styles.priceText}>1 986 086.06</Text>
                        </View>
                        <Image source={imgToearnNow ? icons.Toearnnow : icons.Usdt} style={styles.img} />
                    </View>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        borderRadius: 15,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ffffff19',
        backgroundColor: '#ffffff05',
    },

    header: {
        height: 45,
        paddingHorizontal: 20,
        justifyContent: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    title: {
        fontSize: SIZES.large,
    },
    content: {
        borderTopWidth: 1,
        borderStyle: 'solid',
        borderColor: '#ffffff19',
        padding: 20,
        rowGap: 25,
    },
    item: {
        justifyContent: 'center',
    },
    priceNow: {
        backgroundColor: '#ffffff33',
        height: 40,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderRadius: 50,
        paddingLeft: 55,
    },
    priceText: {
        color: COLORS.white,
        fontWeight: '700',
        // fontSize: SIZES.large,
    },
    priceTextSub: {
        color: COLORS.white,
        // fontWeight: '00',
        fontSize: SIZES.small,
    },
    img: {
        position: 'absolute',
    },
});
export default memo(AccountItem);
