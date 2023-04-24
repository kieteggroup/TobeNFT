import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { BORDER, COLORS, FONTS, SIZES, TEXTS, WIDTH, images } from '../../constants';
import { ButtonCustom } from '../../CustomComponent';
import Table from '../../components/Table';
import useMultiplyWidthScale from '../../hooks/useMultiplyWidthScale';

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
            <View style={{ paddingHorizontal: SIZES.large, alignItems: 'center' }}>
                <View style={styles.titleContent}>
                    <Text style={styles.title}>VIRTUAL MACHINE</Text>
                </View>
                <Text style={styles.subtitle}>Earn your NFT items and trade them on the marketplace to make money</Text>
            </View>
            {/* List Virtual */}

            <View style={styles.listData}>
                {dataVirtual.map((item, index) => (
                    <View key={index} style={styles.virtualItem}>
                        <Image source={item.img} style={styles.img} />
                        <View style={styles.info}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.price}>${item.price}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                            <ButtonCustom
                                text="BUY NOW"
                                buttonStyle={styles.btnNow}
                                buttonStyleText={{ fontFamily: FONTS.bold }}
                                backgroundLinearGradient={['#780D69', '#EC0174']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                locations={[0.25, 0.75]}
                            />
                        </View>
                    </View>
                ))}
            </View>
            {/* <FlatList
                style={{ width: WIDTH.width100, marginTop: 40 }}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.large,
                    rowGap: 30,
                }}
                data={dataVirtual}
                renderItem={({ item }) => (
                    
                )}
            /> */}

            <View style={styles.history}>
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
    titleContent: {
        height: 52,
        marginTop: 23,
    },
    title: {
        ...TEXTS.textBold,
        fontSize: SIZES.xLarge,
        alignItems: 'center',
    },
    subtitle: {
        ...TEXTS.textRegular,
        fontSize: SIZES.medium,
        textAlign: 'center',
    },
    listData: {
        paddingHorizontal: SIZES.large,
        rowGap: 30,
        width: WIDTH.width100,
        marginTop: 40,
    },
    virtualItem: {
        flexDirection: 'row',
        backgroundColor: '#140E2582',
        borderRadius: 18,
        ...BORDER,
        borderColor: '#F4007433',
        // padding:10
        height: 169,
        width: 333,
        alignItems: 'center',
        justifyContent: 'space-around',
        shadowColor: '#FFFFFF66',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: SIZES.large,
        // elevation: 5,
    },
    img: {
        width: 85.51,
        height: 154.66,
    },
    info: {
        alignItems: 'center',
    },
    name: {
        ...TEXTS.textBold,
        fontSize: SIZES.medium,
    },
    price: {
        ...TEXTS.textBold,
        fontSize: SIZES.large,
    },
    description: {
        ...TEXTS.textRegular,
        marginTop: SIZES.xSmall,
        marginBottom: SIZES.medium,
    },
    btnNow: {
        height: 29.21,
        width: 109.04,
        borderWidth: 0,
    },
    history: {
        paddingHorizontal: 22,
        paddingTop: 22,
        width: WIDTH.width100,
    },
});
useMultiplyWidthScale(styles);
export default VirtualMachine;
