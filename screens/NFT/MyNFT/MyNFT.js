import { useState } from 'react';
import { View, ScrollView, Image, Text, FlatList, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

import { images, icons, TEXTS, SIZES, WIDTH, COLORS } from '../../../constants';
import { ButtonCustom } from '../../../CustomComponent';
import MyLocation from './MyLocation';
import MyVirtualMachine from './MyVirtualMachine';
import MyCard from './MyCard';
import MyMarketPlace from './MyMarketPlace';
import useMultiplyWidthScale from '../../../hooks/useMultiplyWidthScale';
import { useLanguage } from '../../../contexts/LanguageContext';

const myNFTType = ['titleMyNFTLocation', 'titleMyNFTVirtualMachine', 'titleMyNFTCard', 'titleMyNFTMarketplace'];

const MyNFT = ({ title, renderItem }) => {
    const [activeType, setActiveType] = useState('titleMyNFTLocation');
    const { t } = useLanguage();
    const displayTabContent = () => {
        switch (activeType) {
            case 'titleMyNFTLocation':
                return <MyLocation />;

            case 'titleMyNFTVirtualMachine':
                return <MyVirtualMachine />;

            case 'titleMyNFTCard':
                return <MyCard />;

            case 'titleMyNFTMarketplace':
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
                                {t(item)}
                            </Text>
                        </TouchableOpacity>
                    )}
                />

                <ImageBackground style={styles.banner} source={images.freepik_4}>
                    <View style={styles.bannerContent}>
                        <Text style={styles.title}>{t(activeType)}</Text>
                        <Text style={styles.description}>
                            {t('nftDescription')}
                        </Text>
                    </View>
                </ImageBackground>
                <View style={styles.dataNFT}>{displayTabContent()}</View>
            </ScrollView>
            <ButtonCustom
                text={t('buyMore')}
                buttonStyle={styles.button}
                buttonStyleText={{ ...TEXTS.textBold }}
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
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        columnGap: SIZES.xSmall,
        // width: WIDTH.width100,
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
        height: 135,
    },
    bannerContent: {
        position: 'absolute',
        bottom: SIZES.xSmall,
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
        width: 105.85,
        height: 27.75,
        right: 16.15,
        bottom: 110,
        borderWidth: 0,
    },
});

useMultiplyWidthScale(styles);
export default MyNFT;
