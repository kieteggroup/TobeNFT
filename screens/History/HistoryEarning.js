import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { MainContainer } from '../../components';
import { BORDER, COLORS, SIZES, TEXTS, WIDTH } from '../../constants';
import useMultiplyWidthScale from '../../hooks/useMultiplyWidthScale';

const HistoryEarning = () => {
    return (
        <MainContainer>
            <LinearGradient
                colors={[COLORS.bodyLight, COLORS.bodyTransp]}
                 start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                locations={[0.3392, 0.9986]}
                angle={295.36}
                style={styles.wrapper}
            >
                <Text style={styles.title}>History Earning</Text>
                <View style={styles.thead}>
                    <Text style={styles.text}>#</Text>
                    <Text style={styles.text}>Location</Text>
                    <Text style={styles.text}>Time</Text>
                    <Text style={styles.text}> Amount</Text>
                    <Text style={styles.text}>Time</Text>
                </View>
                <View style={styles.row}></View>
            </LinearGradient>
        </MainContainer>
    );
};
const styles = StyleSheet.create({
    wrapper: {
       ...BORDER,
        borderRadius: 18,
        width: WIDTH.width100,
        height: 294,
        alignSelf: 'center',
        marginTop: 17.66,
        paddingHorizontal: SIZES.large,
        overflow: 'hidden',
    },

    title: {
        ...TEXTS.textBold,
        fontSize: SIZES.medium,
        marginTop: SIZES.xSmall,
    },

    thead: {
        flexDirection: 'row',
        // columnGap: 40,
        height: 23,
        marginTop: SIZES.large,
        justifyContent: 'space-evenly',
    },
    text: {
        ...TEXTS.textBold,
        fontSize: 13,
    },
    row: {
        flex: 1,
    },
});
useMultiplyWidthScale(styles);
export default HistoryEarning;
