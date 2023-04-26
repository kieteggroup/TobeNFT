import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { BORDER, FONTS, SIZES, TEXTS, WIDTH } from '../constants';
import useMultiplyWidthScale from '../hooks/useMultiplyWidthScale';
import { useLanguage } from '../contexts/LanguageContext';

const Table = ({ heading, leftIcon, rightIcon }) => {
    const { t } = useLanguage();

    return (
        <View style={styles.table}>
            <View style={styles.header}>
                {leftIcon}
                <Text style={styles.historyHeading}> {heading} </Text>
                {rightIcon}
            </View>
            <LinearGradient
                colors={['#251351', '#1409314F']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                locations={[0.25, 0.75]}
                style={styles.thead}
            >
                <Text numberOfLines={1} style={styles.theadText}>
                    #
                </Text>
                <Text style={styles.theadText}>{t('placeholderUsername')}</Text>
                <Text numberOfLines={1} style={styles.theadText}>
                {t('description')} ...
                </Text>
            </LinearGradient>
            <FlatList
                data={[1, 2, 3, 4, 5]}
                renderItem={({ item }) => (
                    <View style={styles.row}>
                        <Text style={styles.name}>{item}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
                style={styles.container}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    table: {
        ...BORDER,
        borderColor: '#FFFFFF1A',
        borderRadius: 18,
        height: 320,
        width: 343,
        backgroundColor: '#FFFFFF1A',
        overflow: 'hidden',
        width: WIDTH.width100,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        paddingLeft: 30,
        paddingRight: 35,
    },
    historyHeading: {
        ...TEXTS.textBold,
        fontFamily: FONTS.boldRoboto,
        fontSize: SIZES.medium,
    },
    thead: {
        height: 40.88,
        alignItems: 'center',
        // justifyContent: 'space-around',
        paddingHorizontal: 30,
        columnGap: SIZES.large,
        flexDirection: 'row',
        width: WIDTH.width100,
    },
    theadText: {
        ...TEXTS.textRegular,
    },
    row: {
        height: 37,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#FFFFFF1A',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30,
        columnGap: SIZES.large,
    },
    name: {
        ...TEXTS.textBold,
        fontSize: SIZES.medium,
    },
});
useMultiplyWidthScale(styles);
export default Table;
