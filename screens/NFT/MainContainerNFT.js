import { View, FlatList, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { useState } from 'react';

import { COLORS, FONT, SIZES, WIDTH, images } from '../../constants';
import { ButtonCustom } from '../../CustomComponent';
import Marketplace from './Marketplace';
import Card from './Card';
import VirtualMachine from './VirtualMachine';

const nftType = ['NFT Marketplace', 'NFT Card', 'Virtual Machine'];

const MainContainerNFT = ({ children }) => {
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
                                renderItem={({ item }) => (
                                    <ButtonCustom
                                        key={item}
                                        text={item}
                                        onPress={() => setActiveType(item)}
                                        backgroundLinearGradient={
                                            activeType === item
                                                ? ['#F4007499', '#08021C00']
                                                : ['#FFFFFF1A', '#08021C00']
                                        }
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        locations={[0.3191, 0.6809]}
                                        buttonStyle={{
                                            width: 'auto',
                                            height: 35,
                                            borderWidth: activeType === item ? 1 : 0,
                                        }}
                                        buttonStyleText={{ fontFamily: FONT.regularRoboto, fontSize: 14 }}
                                    />
                                )}
                                keyExtractor={({ item }) => item}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    columnGap: SIZES.xSmall,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    paddingHorizontal: 20,
                                }}
                                style={{ marginTop: 14 }}
                            />
                            {displayTabContent()}
                        </>
                    )}
                </View>
                <View style={{ height: 100}}></View>
            </ImageBackground>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        width: WIDTH.width100,
    },
});
export default MainContainerNFT;
