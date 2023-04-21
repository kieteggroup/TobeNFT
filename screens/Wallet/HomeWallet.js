import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MainContainer } from '../../components';
import { IconDeposit, IconTransfer, IconWithdraw, LogoOnly, MultiHexagon } from '../../assets/imageSvg/ImageSVG';
import { SIZES, TEXTS, WIDTH, icons, images } from '../../constants';
import { ButtonCustom } from '../../CustomComponent';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const HomeWallet = ({ navigation }) => {
    return (
        <MainContainer>
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <MultiHexagon />
                    <View style={{ alignItems: 'center', position: 'absolute', top: 75 * WIDTH.widthScale }}>
                        <LogoOnly />
                        <Text style={{ fontSize: SIZES.xxLarge, ...TEXTS.textBold }}>1 986 086.06</Text>
                        <Text style={{ fontSize: SIZES.small, ...TEXTS.textRegular }}>
                            Available ~ <Text style={{ ...TEXTS.textMedium }}>$6900</Text>
                        </Text>
                        <ButtonCustom
                            text="Detail Balance"
                            backgroundColorBtn="#FFFFFF33"
                            onPress={() => navigation.navigate('Account')}
                            buttonStyle={styles.button}
                            buttonStyleText={{
                                fontSize: SIZES.small,
                                ...TEXTS.textRegular,
                            }}
                            rightIcon={
                                <LinearGradient
                                    colors={['#FFFFFF33', '#DDDDDD33', '#08021C00', '#FFFFFF33']}
                                    style={styles.iconContinue}
                                    locations={[0.3191, 0.6809]}
                                >
                                    <Image source={icons.continueicon} />
                                </LinearGradient>
                            }
                        />
                    </View>
                    <View style={styles.actionContainer}>
                        <TouchableOpacity style={styles.action} onPress={() => navigation.navigate('Deposit')}>
                            <LinearGradient colors={['#E80274', '#7D0D6A']} style={styles.actionIcon}>
                                <IconDeposit />
                            </LinearGradient>
                            <Text style={styles.actionText}>Deposit</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.action} onPress={() => navigation.navigate('WithDraw')}>
                            <LinearGradient colors={['#E80274', '#7D0D6A']} style={styles.actionIcon}>
                                <IconWithdraw />
                            </LinearGradient>
                            <Text style={styles.actionText}>Withdraw</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.action} onPress={() => navigation.navigate('Transfer')}>
                            <LinearGradient colors={['#E80274', '#7D0D6A']} style={styles.actionIcon}>
                                <IconTransfer />
                            </LinearGradient>
                            <Text style={styles.actionText}>Transfer</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginTop: 30 }}>
                    <Image source={images.Shutterstock} style={styles.img} />
                    <View style={{ padding: 16, position: 'absolute' }}>
                        <Text style={{ fontSize: SIZES.xLarge, ...TEXTS.textMedium }}>
                            Claim {'\n'}
                            <Text style={{ fontSize: SIZES.xxLarge, ...TEXTS.textBold }}>500 token</Text> {'\n'}
                            It’s free!
                        </Text>

                        <ButtonCustom
                            text="Start Earning NOW"
                            buttonStyle={styles.buttonStart}
                            onPress={() => navigation.navigate('EstateNFTs')}
                        />
                    </View>
                </View>

                <View style={styles.share}>
                    <Text style={{ fontSize: SIZES.medium, ...TEXTS.textMedium, flex: 1 }}>
                        Share your link NOW and Let’s grow together!
                    </Text>
                    <ButtonCustom
                        text="Get NOW"
                        onPress={() => navigation.navigate('Setting')}
                        backgroundLinearGradient={['#FFFFFF33', '#FFFFFF00']}
                        buttonStyle={{ ...styles.button, marginTop: 0, height: 30 * WIDTH.widthScale }}
                        buttonStyleText={{
                            fontSize: 14,
                            ...TEXTS.textRegular,
                        }}
                        containerStyle={{ flex: 0.5 }}
                        rightIcon={
                            <LinearGradient
                                colors={['#FFFFFF33', '#FFFFFF00', '#08021C00', '#FFFFFF33']}
                                style={{ ...styles.iconContinue, height: 30 * WIDTH.widthScale }}
                                locations={[0.3191, 0.6809]}
                            >
                                <Image source={icons.continueicon} />
                            </LinearGradient>
                        }
                    />
                </View>

                <View style={{ marginTop: 22, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={images.freepik} style={styles.img} />
                    <View style={{ padding: 16, position: 'absolute' }}>
                        <Text style={{ fontSize: SIZES.large, ...TEXTS.textBold }}>NFT Marketplace</Text>
                        <ButtonCustom
                            text="Go to Shop"
                            onPress={() => navigation.navigate('NFTNavigator')}
                            backgroundColorBtn="#FFFFFF33"
                            buttonStyle={styles.buttonShop}
                            buttonStyleText={{ fontSize: 14, ...TEXTS.textRegular }}
                        />
                    </View>
                </View>

                <View style={styles.postContainer}>
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('NFTNavigator', {
                                navigateTab: 'Virtual Machine',
                            })
                        }
                    >
                        <LinearGradient
                            colors={['#502D9F66', '#08021C00']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            locations={[0.3191, 0.6809]}
                            style={styles.postNFT}
                        >
                            <Image
                                source={images.to_earn02}
                                style={{ ...styles.postImage, left: 47 * WIDTH.widthScale }}
                            />
                            <View style={styles.postTextContent}>
                                <Text style={styles.postTitle} numberOfLines={2}>
                                    NFT Virtual Machine
                                </Text>
                                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                                    <Text style={styles.postText} numberOfLines={4}>
                                        Earn your NFT items and trade them on the marketplace to make money
                                    </Text>
                                    <LinearGradient
                                        colors={['#FFFFFF33', '#FFFFFF00', '#08021C00', '#FFFFFF33']}
                                        style={styles.iconContinue}
                                        locations={[0.3191, 0.6809]}
                                    >
                                        <Image source={icons.continueicon} />
                                    </LinearGradient>
                                </View>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate('NFTNavigator', {
                                navigateTab: 'NFT Card',
                            })
                        }
                    >
                        <LinearGradient
                            colors={['#502D9F66', '#08021C00']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            locations={[0.3191, 0.6809]}
                            style={styles.postNFT}
                        >
                            <Image source={images.to_earn01} style={styles.postImage} />
                            <View style={styles.postTextContent}>
                                <Text style={styles.postTitle}>NFT Card</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                                    <Text style={styles.postText} numberOfLines={4}>
                                        Earn your NFT items and trade them on the marketplace to make money
                                    </Text>
                                    <LinearGradient
                                        colors={['#FFFFFF33', '#FFFFFF00', '#08021C00', '#FFFFFF33']}
                                        style={styles.iconContinue}
                                        locations={[0.3191, 0.6809]}
                                    >
                                        <Image source={icons.continueicon} />
                                    </LinearGradient>
                                </View>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        </MainContainer>
    );
};
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        marginHorizontal: SIZES.large,
        alignItems: 'center',
    },
    header: {
        alignItems: 'center',
        height: 376 * WIDTH.widthScale,
    },
    actionIcon: {
        width: 48 * WIDTH.widthScale,
        height: 48 * WIDTH.widthScale,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#FFFFFF29',
    },
    iconContinue: {
        width: 26 * WIDTH.widthScale,
        height: 26 * WIDTH.widthScale,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        right: 0,
    },
    button: {
        height: 27 * WIDTH.widthScale,
        width: 117 * WIDTH.widthScale,
        justifyContent: 'flex-start',
        paddingHorizontal: 6,
        marginTop: 10,
    },
    buttonStart: {
        width: 176 * WIDTH.widthScale,
        height: 39 * WIDTH.widthScale,
        marginTop: 10,
    },
    buttonShop: { width: 133 * WIDTH.widthScale, height: 30 * WIDTH.widthScale, marginTop: 5 },

    actionContainer: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: -5 ,
        columnGap: 53,
    },
    action: {
        alignItems: 'center',
    },
    actionText: {
        fontSize: SIZES.medium,
        ...TEXTS.textRegular,
        marginTop: 7,
    },

    img: {
        width: 337 * WIDTH.widthScale,
        height: 183 * WIDTH.widthScale,
    },
    share: {
        marginTop: 24,
        backgroundColor: '#08021C80',
        height: 79 * WIDTH.widthScale,
        width: 337 * WIDTH.widthScale,
        borderRadius: 11,
        flexDirection: 'row',
        elevation: 1,
        paddingHorizontal: 12,
        alignItems: 'center',
    },
    postContainer: {
        marginTop: 56,
        flexDirection: 'row',
        columnGap: 22,
        marginBottom: 20,
    },
    postNFT: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#6A318133',
        borderRadius: 18,
        width: 153 * WIDTH.widthScale,
        height: 177 * WIDTH.widthScale,
    },
    postImage: {
        position: 'absolute',
        left: 65 * WIDTH.widthScale,
        bottom: 111 * WIDTH.widthScale,
    },
    postTextContent: {
        paddingLeft: 13,
        paddingRight: 7,
        paddingBottom: 7,
        flex: 1,
        justifyContent: 'flex-end',
    },
    postText: {
        fontSize: SIZES.xSmall,
        ...TEXTS.textRegular,
        width: 99 * WIDTH.widthScale,
    },
    postTitle: {
        fontSize: 14,
        ...TEXTS.textBold,
        width: 89 * WIDTH.widthScale,
        marginBottom: 7,
    },
});
export default HomeWallet;
