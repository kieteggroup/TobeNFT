import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { MainContainer } from '../../components';
import { BORDER, COLORS, SIZES, TEXTS, WIDTH } from '../../constants';
import useMultiplyWidthScale from '../../hooks/useMultiplyWidthScale';
import { useLanguage } from '../../contexts/LanguageContext';

const listMenu = [
    { name: 'earningFree', navigate: 'HistoryEarning' },
    { name: 'earningCard', navigate: 'HistoryProfit' },
    { name: 'commissionReferral', navigate: 'HistoryCommissionReferral' },
    { name: 'commissionLocation', navigate: 'HistoryCommissionLocation' },
    { name: 'commissionMachine', navigate: 'HistoryCommissionMachine' },
];
const MenuHistory = ({ navigation }) => {
    const [selectHistory, setSelectHistory] = useState('earningFree');
    const { t } = useLanguage();

    const handlerSelectMenu = (item) => {
        setSelectHistory(item.name);
        return navigation.navigate(item.navigate);
    };

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
                {listMenu.map((item) => (
                    <TouchableOpacity style={styles.menu} onPress={() => handlerSelectMenu(item)}>
                        <Text style={[styles.text, selectHistory === item.name && styles.check]}>{t(item.name)}</Text>
                    </TouchableOpacity>
                ))}
            </LinearGradient>
        </MainContainer>
    );
};
const styles = StyleSheet.create({
    wrapper: {
       ...BORDER,
        borderRadius: 18,
        width: 332,
        height: 294,
        rowGap: 25,
        alignSelf: 'center',
        marginTop: 17.66,
        padding: SIZES.large,
    },

    text: {
        ...TEXTS.textBold,
        fontSize: SIZES.medium,
    },
    check: {
        color: COLORS.primary,
    },
});
useMultiplyWidthScale(styles);
export default MenuHistory;
