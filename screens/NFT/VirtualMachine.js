import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { COLORS, FONTS, SIZES, TEXTS, WIDTH, images } from '../../constants';
import { ButtonCustom } from '../../CustomComponent';
import Table from '../../components/Table';

const dataVirtual = [
    {
        name: 'Virtual Silver',
        price: 300,
        description: '36 months - Growth: 5%',
        img: images.virtualSilver,
    },
    {
        name: 'Virtual Gold',
        price: 500,
        description: '36 months - Growth: 10%',
        img: images.virtualGold,
    },
    {
        name: 'Virtual Platinum',
        price: 700,
        description: '36 months - Growth: 15%',
        img: images.virtualPlatinum,
    },
    {
        name: 'Virtual VIP',
        price: 1000,
        description: '36 months - Growth: 20%',
        img: images.virtualVip,
    },
];

const VirtualMachine = () => {
    return (
        <View style={styles.wrapper}>
            {/* Title */}
            <View style={{ paddingHorizontal: 20, alignItems: 'center' }}>
                <View style={{ height: 52, marginTop: 23 }}>
                    <Text style={styles.title}>VIRTUAL MACHINE</Text>
                </View>
                <Text style={styles.subtitle}>Earn your NFT items and trade them on the marketplace to make money</Text>
            </View>
            {/* List Virtual */}

            <FlatList
                style={{ width: WIDTH.width100, marginTop: 40 }}
                contentContainerStyle={{
                    paddingHorizontal: 20,
                    rowGap: 30,
                }}
                data={dataVirtual}
                renderItem={({ item }) => (
                    <View style={styles.virtualItem}>
                        <Image source={item.img} style={styles.img} />
                        <View style={styles.info}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.price}>${item.price}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                            <ButtonCustom
                                text="BUY NOW"
                                buttonStyle={{
                                    height: 29.21 * WIDTH.widthScale,
                                    width: 109.04 * WIDTH.widthScale,
                                    borderWidth: 0,
                                }}
                                buttonStyleText={{ fontFamily: FONTS.bold }}
                                backgroundLinearGradient={['#780D69', '#EC0174']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                locations={[0.25, 0.75]}
                            />
                        </View>
                    </View>
                )}
            />

            <View style={{ paddingHorizontal: 22, paddingTop: 22, width: WIDTH.width100 }}>
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
    title: {
        fontSize: SIZES.xLarge,
        ...TEXTS.textBold,
        alignItems: 'center',
    },
    subtitle: {
        fontSize: SIZES.medium,
        ...TEXTS.textRegular,
        textAlign: 'center',
    },

    virtualItem: {
        flexDirection: 'row',
        backgroundColor: '#140E2582',
        borderRadius: 18,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#F4007433',
        // padding:10
        height: 169 * WIDTH.widthScale,
        width: 333 * WIDTH.widthScale,
        alignItems: 'center',
        justifyContent: 'space-around',
        shadowColor: '#FFFFFF66',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 20,
        // elevation: 5,
    },
    img: {
        width: 85.51 * WIDTH.widthScale,
        height: 154.66 * WIDTH.widthScale,
    },
    info: {
        alignItems: 'center',
    },
    name: {
        fontSize: SIZES.medium,
        ...TEXTS.textBold,
    },
    price: {
        fontSize: SIZES.large,
        ...TEXTS.textBold,
    },
    description: {
        ...TEXTS.textRegular,
        marginTop: 10,
        marginBottom: 16,
    },
});
export default VirtualMachine;
