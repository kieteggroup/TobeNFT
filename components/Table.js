import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { FONTS, SIZES, TEXTS, WIDTH } from '../constants';
import { LinearGradient } from 'expo-linear-gradient';

const Table = ({ heading, leftIcon, rightIcon }) => {
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
                <Text style={styles.theadText}> Username</Text>
                <Text numberOfLines={1} style={styles.theadText}>
                    Description ...
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
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#FFFFFF1A',
        borderRadius: 18,
        height: 320 * WIDTH.widthScale,
        width: 343 * WIDTH.widthScale,
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
        height: 40.88 * WIDTH.widthScale,
        alignItems: 'center',
        // justifyContent: 'space-around',
        paddingHorizontal: 30,
        columnGap: 20,
        flexDirection: 'row',
        width: WIDTH.width100,
    },
    theadText: {
        ...TEXTS.textRegular,
        fontSize: 14,
    },
    row: {
        height: 37 * WIDTH.widthScale,
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: '#FFFFFF1A',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30,
        columnGap: 20,
    },
    name: {
        fontSize: SIZES.medium,
        ...TEXTS.textBold,
    },
});
export default Table;
