import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    Dimensions,
} from 'react-native';
import { ButtonCustom } from '../../CustomComponent';
import { COLORS, SIZES, TEXTS, WIDTH, icons, images } from '../../constants';
import { LinearGradient } from 'expo-linear-gradient';
import { Children, useState } from 'react';
import SelectDropdown from '../../CustomComponent/SelectDropdown';
import MainContainer from '../../components/MainContainer';

const currency = ['NOW', 'USDT', 'NOW (EARING)'];
const Swap = ({ children, noBackgroundFooter, noBlurBackground, navigation }) => {
    const [selectCurrency, setSelectCurrency] = useState('Select a currency');
    const [isSelect, setIsSelect] = useState(false);
    return (
        <MainContainer>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Swap</Text>
                <Text style={styles.subtitle}>Trade tokens in an instant</Text>

                <SelectDropdown data={currency} />

                <Image source={icons.iconswap} style={{ marginVertical: 10, alignSelf: 'center' }} />
                <SelectDropdown data={currency} />

                <ButtonCustom
                    text="Swap"
                    containerStyle={{ marginHorizontal: 100, marginTop: 27 }}
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
        width: WIDTH.width100,
        height: height - 185,
    },
    title: {
        fontSize: SIZES.xLarge,
        ...TEXTS.textBold,
        marginTop: 172,
    },
    subtitle: {
        fontSize: SIZES.large,
        ...TEXTS.textRegular,
        marginBottom: 32,
    },
});
export default Swap;
