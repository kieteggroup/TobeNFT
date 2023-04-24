import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

import { ButtonCustom } from '../../CustomComponent';
import { COLORS, SIZES, TEXTS, WIDTH, icons, images } from '../../constants';
import { Children, useState } from 'react';
import { MainContainer, SelectDropdown } from '../../components';
import useMultiplyWidthScale from '../../hooks/useMultiplyWidthScale';

const currency = ['NOW', 'USDT', 'NOW (EARING)'];
const Swap = ({ navigation }) => {
    const [selectCurrency, setSelectCurrency] = useState('Select a currency');
    const [isSelect, setIsSelect] = useState(false);
    return (
        <MainContainer borderBackground>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Swap</Text>
                <Text style={styles.subtitle}>Trade tokens in an instant</Text>

                <SelectDropdown data={currency} />

                <Image source={icons.iconswap} style={styles.img} />
                <SelectDropdown data={currency} />

                <ButtonCustom
                    text="Swap"
                    containerStyle={{ marginTop: 27 * WIDTH.widthScale }}
                    buttonStyle={{ height: 39 * WIDTH.widthScale, width: 176 * WIDTH.widthScale }}
                    onPress={() => navigation.navigate('SwapDetail')}
                />
            </View>
        </MainContainer>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal : SIZES.large,
        paddingBottom: 30,
        width: WIDTH.width100,
    },
    title: {
        ...TEXTS.textBold,
        fontSize: SIZES.xLarge,
        marginTop: 160,
    },
    subtitle: {
        ...TEXTS.textRegular,
        fontSize: SIZES.large,
        marginBottom: SIZES.xxLarge,
    },
    img: {
        marginVertical:  SIZES.xSmall,
        alignSelf: 'center',
        width: 37.37,
        height: 37.37,
    },
});
useMultiplyWidthScale(styles);
export default Swap;
