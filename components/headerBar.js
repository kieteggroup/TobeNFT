import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, icons } from '../constants';
import { useNavigation } from '@react-navigation/native';

const HeaderScreenLeft = ({ src, goBack, goHome }) => {
    // console.log(n);
    const navigation = useNavigation();

    const handelNavigator = () => {
        if (goBack) {
            return navigation.goBack();
        } else if (goHome) {
            return navigation.navigate('WalletNavigator');
        }
    };
    return (
        <TouchableOpacity onPress={() => handelNavigator()}>
            <Image source={src} />
        </TouchableOpacity>
    );
};
const HeaderScreenRight = ({ src }) => {
    return (
        <View style={styles.coinNow}>
            <Image source={icons.toearnnownho} />
            <Text style={styles.coinText}>1 986 086.06</Text>
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
    coinText: {
        color: COLORS.white,
        marginLeft: 10,
    },
});
export { HeaderScreenLeft, HeaderScreenRight };
