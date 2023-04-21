import { useState } from 'react';
import { View, ScrollView, Image, Text, FlatList, StyleSheet, TouchableOpacity,ImageBackground } from 'react-native';
import { images, icons, TEXTS, SIZES, WIDTH, COLORS } from '../../../constants';
import { ButtonCustom } from '../../../CustomComponent';
import MyLocation from './MyLocation';
import MyVirtualMachine from './MyVirtualMachine';
import MyCard from './MyCard';
import MyMarketPlace from './MyMarketPlace';

const myNFTType = ['My NFT Location', 'My NFT Virtual Machine', 'My NFT Card', 'NFT MARKETPLACE'];

const MyNFT = ({ title, renderItem }) => {
    const [activeType, setActiveType] = useState('My NFT Location');

    const displayTabContent = () => {
        switch (activeType) {
            case 'My NFT Location':
                return <MyLocation />;

            case 'My NFT Virtual Machine':
                return <MyVirtualMachine />;

            case 'My NFT Card':
                return <MyCard />;

            case 'NFT MARKETPLACE':
                return <MyMarketPlace />;

            default:
                break;
        }
    };

    return (
        <ImageBackground source={images.technology_left_blob} style={styles.wrapper}>
            <ScrollView contentContainerStyle={{ width: WIDTH.width100 }}>
                <FlatList
                    data={myNFTType}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.navBar}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => setActiveType(item)}>
                            <Text style={[styles.navBarItem, activeType === item && styles.navBarItemCheck]}>
                                {item}
                            </Text>
                        </TouchableOpacity>
                    )}
                />

                <ImageBackground style={styles.banner} source={images.freepik_4}>
                    <View style={styles.bannerContent}>
                        <Text style={styles.title}>{activeType}</Text>
                        <Text style={styles.description}>
                            Earn your NFT items and trade them on the marketplace to make money
                        </Text>
                    </View>
                </ImageBackground>
                <View style={styles.dataNFT}>
                    {[0].length > 0 ? (
                        displayTabContent()
                    ) : (
                        <>
                            <Image source={images.empty_data} />
                            <Text style={styles.title}>(Empty Data)</Text>
                        </>
                    )}
                </View>
            </ScrollView>
            <ButtonCustom
                text="Buy more"
                buttonStyle={styles.button}
                buttonStyleText={{ fontSize: 14, ...TEXTS.textBold }}
                backgroundLinearGradient={['#780D69', '#EC0174']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                locations={[0.25, 0.75]}
            />
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    navBar: {
        flexDirection: 'row',
        paddingHorizontal: 5,
        height: 25 * WIDTH.widthScale,
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: 10,
        width: WIDTH.width100,
    },
    navBarItem: {
        ...TEXTS.textBold,
        fontSize: SIZES.xSmall,
    },
    navBarItemCheck: {
        color: COLORS.primary,
    },
    banner: {
        width: WIDTH.width100,
        // alignItems: 'center',
        height:135* WIDTH.widthScale
    },
    bannerContent: {
        position: 'absolute',
        bottom: 10,
        width: WIDTH.width100,
        alignItems: 'center',
    },

    title: {
        ...TEXTS.textBold,
        fontSize: 15,
    },
    description: {
        ...TEXTS.textRegular,
        fontSize: SIZES.xSmall,
    },
    dataNFT: {
        marginTop: 30,
    },

    button: {
        position: 'absolute',
        width: 105.85 * WIDTH.widthScale,
        height: 27.75 * WIDTH.widthScale,
        right: 16.15,
        bottom: 110,
        borderWidth: 0,
    },
});
export default MyNFT;
