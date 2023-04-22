import { View, Text, Image, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { SIZES, TEXTS, WIDTH, icons, images } from '../constants';
import { IconDropDown } from '../assets/imageSvg/ImageSVG';

const SelectDropdown = ({ data, placeholderColor, dropdownStyle, backgroundStyle, iconColor }) => {
    const [selectCurrency, setSelectCurrency] = useState('Select a currency');
    const [isSelect, setIsSelect] = useState(false);
    return (
        <TouchableOpacity onPress={() => setIsSelect(!isSelect)} style={styles.wrapper}>
            <LinearGradient
                colors={[backgroundStyle || '#FFFFFF13', backgroundStyle || '#8F79D939']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                locations={[0.3392, 0.9986]}
                style={[styles.dropdown, dropdownStyle]}
            >
                <Text style={[styles.dropdownText, placeholderColor]}>0.0</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ ...styles.dropdownText, marginRight: 15, ...placeholderColor }}>
                        {selectCurrency}
                    </Text>
                    {isSelect ? (
                        <IconDropDown style={{ transform: [{ rotate: '180deg' }] }} color={iconColor} />
                    ) : (
                        <IconDropDown color={iconColor} />
                    )}
                </View>
            </LinearGradient>

            {isSelect ? (
                <FlatList
                    data={data || []}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.dataItem}
                            onPress={() => {
                                setIsSelect(!isSelect);
                                setSelectCurrency(item);
                            }}
                        >
                            <Image source={icons.bnb} style={{ width: 30, height: 30 }} />
                            <Text style={{ ...TEXTS.textRegular }}>{item}</Text>
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
        height: 38 * WIDTH.widthScale,
        borderRadius: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.small,
    },
    dropdownText: {
        ...TEXTS.textRegular,
        fontSize: 14,
    },
    dropdownArea: {
        width: WIDTH.width100,
        height: 'auto',
        maxHeight: 300 * WIDTH.widthScale,
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
        paddingVertical: SIZES.xSmall,
        // backgroundColor:"#ccc"
    },
});
export default SelectDropdown;
