import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, SIZES, icons, images } from '../constants';
import { IconToken, LogoHorizontal } from '../assets/imageSvg/ImageSVG';
import useMultiplyWidthScale from '../hooks/useMultiplyWidthScale';

const HeaderScreenLeft = ({ src, goBack, goHome }) => {
    const navigation = useNavigation();

    const handelNavigator = () => {
        if (goBack) {
            return navigation.goBack();
        } else if (goHome) {
            return navigation.navigate('HomeWallet');
        }

        return false;
    };
    return (
        <TouchableOpacity onPress={() => handelNavigator()}>
            {goHome && <LogoHorizontal />}
            {goBack && <Image source={icons.back} />}
        </TouchableOpacity>
    );
};
const HeaderScreenRight = ({ src }) => {
    return (
        <View style={styles.coinNow}>
            <IconToken />
            <Text style={styles.coinToken}>1 986 086.06</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    coinNow: {
        flexDirection: 'row',
        height: 26,
        width: 127,
        borderRadius: 50,
        backgroundColor: '#FFFFFF26',
        alignItems: 'center',
        justifyContent:"center"
    },
    tokenImg: {},
    coinToken: {
        color: COLORS.white,
        marginLeft: 7,
        fontSize: SIZES.xMedium,
    },
});

useMultiplyWidthScale(styles);
export { HeaderScreenLeft, HeaderScreenRight };
