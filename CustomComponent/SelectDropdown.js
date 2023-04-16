import { View, Text, Image, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { TEXTS, WIDTH, icons, images } from '../constants';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

const SelectDropdown = ({ data, placeholderStyle, dropdownStyle, icon }) => {
    const [selectCurrency, setSelectCurrency] = useState('Select a currency');
    const [isSelect, setIsSelect] = useState(false);
    return (
        <TouchableOpacity onPress={() => setIsSelect(!isSelect)} style={styles.wrapper}>
            <LinearGradient
                colors={['#FFFFFF13', '#8F79D939']}
                start={{ x: 0.6, y: 1 }}
                end={{ x: 1, y: 0 }}
                locations={[0.3191, 0.6809]}
                style={[styles.dropdown, dropdownStyle]}
            >
                <Text style={[styles.dropdownText, placeholderStyle]}>0.0</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ ...styles.dropdownText, marginRight: 15, ...placeholderStyle }}>
                        {selectCurrency}
                    </Text>
                    {isSelect ? (
                        <Image source={icon || icons.vector} style={{ transform: [{ rotate: '180deg' }] }} />
                    ) : (
                        <Image source={icon || icons.vector} style={{ marginTop: 5 }} />
                    )}
                </View>
            </LinearGradient>

            {isSelect ? (
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.dataItem}
                            onPress={() => {
                                setIsSelect(!isSelect);
                                setSelectCurrency(item);
                            }}
                        >
                            <Image source={icons.Toearnnow} style={{ width: 30, height: 30 }} />
                            <Text style={{ ...TEXTS.textRegular, fontSize: 14 }}>{item}</Text>
                        </TouchableOpacity>
                    )}
                    style={styles.dropdownArea}
                />
            ) : null}
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    wrapper: {
        width: WIDTH.width100,
        zIndex: 999,
    },
    dropdown: {
        height: 36,
        width: WIDTH.width100,
        borderRadius: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 12,
    },
    dropdownText: {
        ...TEXTS.textRegular,
        fontSize: 14,
    },
    dropdownArea: {
        width: WIDTH.width100,
        height: 'auto',
        maxHeight: 300,
        borderRadius: 10,
        // marginTop: 10,
        backgroundColor: '#FFFFFF1A',
        alignSelf: 'center',
        position: 'absolute',
        top: 50,
        paddingHorizontal: 20,
    },
    dataItem: {
        width: WIDTH.width100,
        borderBottomWidth: 1,
        borderColor: '#FFFFFF1A',
        borderStyle: 'solid',
        alignItems: 'center',
        flexDirection: 'row',
        columnGap: 10,
        paddingVertical: 10,
        // backgroundColor:"#ccc"
    },
});
export default SelectDropdown;
