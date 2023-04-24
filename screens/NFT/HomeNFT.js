import { View, FlatList, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { useEffect, useState } from 'react';

import { COLORS, FONTS, SIZES, WIDTH, images } from '../../constants';
import { ButtonCustom } from '../../CustomComponent';
import Marketplace from './Marketplace';
import Card from './Card';
import VirtualMachine from './VirtualMachine';

const nftType = ['NFT Marketplace', 'NFT Card', 'Virtual Machine'];

const HomeNFT = ({ children, route }) => {
    const [activeType, setActiveType] = useState('NFT Marketplace');

    const displayTabContent = () => {
        switch (activeType) {
            case 'NFT Marketplace':
                return <Marketplace />;
                break;
            case 'NFT Card':
                return <Card />;
                break;
            case 'Virtual Machine':
                return <VirtualMachine />;
                break;

            default:
                break;
        }
    };
    return (
        <ScrollView showsVerticalScrollIndicator={false} style={{ width: WIDTH.width100 }}>
            <ImageBackground source={images.technology} resizeMode="stretch" style={styles.wrapper}>
                <View style={styles.wrapper}>
                    {children ? (
                        children
                    ) : (
                        <>
                            <FlatList
                            
                                data={nftType}
                                renderItem={({ item, index }) => (
                                    <ButtonCustom
                                        key={index}
                                        text={item}
                                        onPress={() => setActiveType(item)}
                                        backgroundLinearGradient={
                                            activeType === item
                                                ? ['#F4007499', COLORS.bodyTransp]
                                                : ['#FFFFFF1A', COLORS.bodyTransp]
                                        }
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        locations={[0.3392, 0.9986]}
                                        buttonStyle={{
                                            width: 'auto',
                                            height: 35 * WIDTH.widthScale,
                                            borderWidth: activeType === item ? 1 : 0,
                                        }}
                                        buttonStyleText={{ fontFamily: FONTS.regularRoboto }}
                                    />
                                )}
                                 keyExtractor={(item, index) => `key-${index}`}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={styles.listType}
                            />
                            {displayTabContent()}
                        </>
                    )}
                </View>
                <View style={{ height: 94 * WIDTH.widthScale }}></View>
            </ImageBackground>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        width: WIDTH.width100,
    },
    listType: {
        columnGap: SIZES.xSmall,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: SIZES.large,
        marginTop: SIZES.xMedium,
    },
});
export default HomeNFT;
