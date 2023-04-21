import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { ButtonCustom } from '../../CustomComponent';
import { COLORS, SIZES, TEXTS, WIDTH, icons, images } from '../../constants';
import { LinearGradient } from 'expo-linear-gradient';
import { Children, useState } from 'react';
import { MainContainer, SelectDropdown } from '../../components';

const currency = ['NOW', 'USDT', 'NOW (EARING)'];
const Swap = ({ navigation }) => {
    const [selectCurrency, setSelectCurrency] = useState('Select a currency');
    const [isSelect, setIsSelect] = useState(false);
    return (
        <MainContainer blurBackground>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Swap</Text>
                <Text style={styles.subtitle}>Trade tokens in an instant</Text>

                <SelectDropdown data={currency} />

                <Image source={icons.iconswap} style={{ marginVertical: 10, alignSelf: 'center' }} />
                <SelectDropdown data={currency} />

                <ButtonCustom
                    text="Swap"
                    containerStyle={{ marginTop: 27 }}
                    buttonStyle={{ height: 39 * WIDTH.widthScale, width: 176 * WIDTH.widthScale }}
                    onPress={() => navigation.navigate('SwapDetail')}
                />
            </View>
        </MainContainer>
    );
};
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    wrapper: {
        paddingHorizontal: 20,
        paddingBottom: 30,
        width: WIDTH.width100,
    },
    title: {
        fontSize: SIZES.xLarge,
        ...TEXTS.textBold,
        marginTop: 160,
    },
    subtitle: {
        fontSize: SIZES.large,
        ...TEXTS.textRegular,
        marginBottom: SIZES.xxLarge,
    },
});
export default Swap;
