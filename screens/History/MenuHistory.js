import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MainContainer } from '../../components';
import { COLORS, SIZES, TEXTS, WIDTH } from '../../constants';
import { LinearGradient } from 'expo-linear-gradient';

const listMenu = [
    { name: 'Earning free', navigate: 'HistoryEarning' },
    { name: 'Earning Card', navigate: 'HistoryProfit' },
    { name: 'Commission referral', navigate: 'HistoryCommissionReferral' },
    { name: 'Commission Location', navigate: 'HistoryCommissionLocation' },
    { name: 'Commission Machine', navigate: 'HistoryCommissionMachine' },
];
const MenuHistory = ({ navigation }) => {
    const [selectHistory, setSelectHistory] = useState('Earning free');

    const handlerSelectMenu = (item) => {
        setSelectHistory(item.name);
        return navigation.navigate(item.navigate);
    };

    return (
        <MainContainer>
            <LinearGradient
                colors={['#502D9F66', '#08021C00']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                locations={[0.3392, 0.9986]}
                style={styles.wrapper}
            >
                {listMenu.map((item) => (
                    <TouchableOpacity style={styles.menu} onPress={() => handlerSelectMenu(item)}>
                        <Text style={[styles.text, selectHistory === item.name && styles.check]}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
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
        width: 332 * WIDTH.widthScale,
        height: 294 * WIDTH.widthScale,
        rowGap: 25,
        alignSelf: 'center',
        marginTop: 17.66,
        padding: 20,
    },

    text: {
        ...TEXTS.textBold,
        fontSize: SIZES.medium,
    },
    check: {
        color: COLORS.primary,
    },
});
export default MenuHistory;
