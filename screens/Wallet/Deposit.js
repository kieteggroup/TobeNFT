import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useLayoutEffect } from 'react';
import { Image, StyleSheet, Pressable } from 'react-native';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { COLORS, SIZES, icons, images } from '../../constants';
import { QrCode } from '../../assets/imageSvg/ImageSVG';
import { ButtonCustom } from '../../CustomComponent';
import { MainContainer } from '../../components';
import { useNavigation } from '@react-navigation/native';

const Deposit = ({ navigation }) => {
    return (
        <MainContainer leftIcon={icons.back}>
            <View style={styles.card}>
                <Pressable style={styles.itemCard} onPress={() => navigation.navigate('Account')}>
                    <LinearGradient
                        colors={['#E80274', '#581971']}
                        start={{ x: 0.1, y: 1 }}
                        end={{ x: 1, y: 1 }}
                        style={styles.itemCardText}
                    >
                        <Text style={{ textAlign: 'right', color: COLORS.white }}>NOW Token</Text>
                    </LinearGradient>
                    <Image source={icons.Toearnnow} style={styles.itemCardImg} />
                </Pressable>
                <Pressable style={styles.itemCard} onPress={() => navigation.navigate('WithDraw')}>
                        <LinearGradient
                            colors={['#502d9f99', '#08021c00']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            style={styles.itemCardText}
                        >
                            <Text style={{ textAlign: 'right', color: COLORS.white }}>USDT. BEP 20</Text>
                        </LinearGradient>
                    <Image source={icons.Usdt} style={styles.itemCardImg} />
                </Pressable>
            </View>
            {/* Content QRCode */}
            <View style={styles.content}>
                <Text style={styles.title}>Deposit BNB WALLET</Text>
                <Text style={styles.subTitle}>Please send USDT.BEP20</Text>
                <View style={styles.qrCodeContainer}>
                    <View style={styles.qrCode}>
                        <QrCode />
                    </View>
                    <Text style={styles.qrCodeText}>QR CODE</Text>
                    <Text style={styles.code}>0x8c6f0a9cfa13a221c6b00021e3d</Text>
                </View>
                <View style={styles.qrCodeBtn}>
                    <ButtonCustom text="Copy Address" buttonStyle={{ width: 150 }} />
                    <ButtonCustom text="Save OR Code" backgroundColorBtn="#ffffff33" buttonStyle={{ width: 150 }} />
                </View>
            </View>

            <Text style={styles.description}>
                Your transaction will be completed once it is confirmed by the blockchain network.{'\n'}
                Confirmation time can vary and depends on the fee transaction.
            </Text>
        </MainContainer>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        width: '100%',
        height: '100%',
    },

    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 30,
    },
    itemCard: {
        flexDirection: 'row',
        alignItems: 'center',
        // columnGap: 10,
    },
    itemCardImg: {
        position: 'absolute',
        left: 0,
    },
    itemCardText: {
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 50,
        width: 150,
    },
    content: {
        alignItems: 'center',
        marginTop: 30,
    },
    title: {
        color: COLORS.white,
        fontWeight: 700,
        fontSize: SIZES.xLarge,
    },
    subTitle: {
        color: COLORS.primary,
        fontWeight: 700,
        fontSize: SIZES.medium,
    },
    qrCodeContainer: {
        marginTop: 30,
        alignItems: 'center',
    },

    qrCodeText: {
        paddingTop: 10,
        paddingBottom: 5,
        color: COLORS.white,
        fontWeight: 700,
        fontSize: SIZES.medium,
    },
    code: {
        color: COLORS.white,
        fontWeight: 700,
        fontSize: SIZES.medium,
    },
    qrCodeBtn: {
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        columnGap: 15,
    },
    description: {
        color: COLORS.gray2,
        marginVertical: 20,
    },
});
export default Deposit;
