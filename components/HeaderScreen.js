import { Image, StyleSheet, Text, View } from 'react-native';
import { COLORS, icons } from '../constants';

const HeaderScreen = ({ src }) => {
    return (
        <View style={styles.wrapper}>
            <Image source={src} />
            <View style={styles.coinNow}>
                <Image source={icons.toearnnownho} />
                <Text style={styles.coinText}>1 986 086.06</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    wrapper: {
        height: 44,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30,
        paddingHorizontal: 20,
    },
    coinNow: {
        flexDirection: 'row',
        padding: 4,
        borderRadius: 50,
        backgroundColor: COLORS.body + 99,
    },
    coinText: {
        color: COLORS.white,
        marginLeft: 10,
    },
});
export default HeaderScreen;
