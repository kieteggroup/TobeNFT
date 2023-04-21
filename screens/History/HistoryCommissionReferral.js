import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MainContainer } from '../../components';
import { COLORS, SIZES, TEXTS, WIDTH } from '../../constants';
import { LinearGradient } from 'expo-linear-gradient';

const HistoryCommissionReferral = () => {
    return (
        <MainContainer>
            <LinearGradient
                colors={['#502D9F66', '#08021C00']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                locations={[0.3392, 0.9986]}
                style={styles.wrapper}
            >
                <Text style={styles.title}>History Commission Referral</Text>
                <View style={styles.thead}>
                    <Text style={styles.text}>#</Text>
                    <Text style={styles.text}>Amount</Text>
                    <Text style={styles.text}>Content</Text>
                    <Text style={styles.text}>Time</Text>
                    <Text style={styles.text}>Empty data...</Text>
                </View>
                <View style={styles.row}></View>
            </LinearGradient>
        </MainContainer>
    );
};
const styles = StyleSheet.create({
    wrapper: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#6A318133',
        borderRadius: 18,
        width: WIDTH.width100,
        height: 294 * WIDTH.widthScale,
        alignSelf: 'center',
        marginTop: 17.66,
        paddingHorizontal: 20,
        overflow:"hidden"
    },

    title: {
        ...TEXTS.textBold,
        fontSize: SIZES.medium,
        marginTop: 10,
    },

    thead: {
        flexDirection: 'row',
        // columnGap: 40,
        height: 23 * WIDTH.widthScale,
        marginTop: 20,
        justifyContent:'space-evenly',
      
    },
    text: {
        ...TEXTS.textBold,
        fontSize: 13,
    },
    row: {
        flex: 1,
    },
});
export default HistoryCommissionReferral;
