import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { COLORS, icons, images } from '../constants';
import { LogoHorizontal } from '../assets/imageSvg/ImageSVG';

const HeaderScreenLeft = ({ src, goBack, goHome }) => {
    // console.log(n);
    const navigation = useNavigation();

    const handelNavigator = () => {
        if (goBack) {
            return navigation.goBack();
        } else if (goHome) {
            return navigation.navigate('HomeWallet');
        }

        return false
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
            <Image source={icons.toearnnownho} />
            <Text style={styles.coinToken}>1 986 086.06</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    coinNow: {
        flexDirection: 'row',
        padding: 4,
        borderRadius: 50,
        // backgroundColor:"#fff"
    },
    coinToken: {
        color: COLORS.white,
        marginLeft: 10,
    },
});
export { HeaderScreenLeft, HeaderScreenRight };
