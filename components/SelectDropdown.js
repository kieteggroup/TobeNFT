import { View, Text, Image, StyleSheet, ScrollView, ImageBackground, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { SIZES, TEXTS, WIDTH, icons, images } from '../constants';
import { IconDropDown } from '../assets/imageSvg/ImageSVG';
import useMultiplyWidthScale from '../hooks/useMultiplyWidthScale';

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
                angle={295.36}
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
                <View style={styles.dropdownArea}>
                    {(data || []).map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.dataItem}
                            onPress={() => {
                                setIsSelect(!isSelect);
                                setSelectCurrency(item);
                            }}
                        >
                            <Image source={images.bnb} style={styles.img} />
                            <Text style={{ ...TEXTS.textRegular }}>{item}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            ) : // <FlatList
            //     data={data || []}
            //     renderItem={({ item }) => (

            //     )}
            //     style={styles.dropdownArea}
            // />
            null}
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    wrapper: {
        width: WIDTH.width100,
        zIndex: 999,
    },
    dropdown: {
        height: 38,
        borderRadius: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: SIZES.small,
    },
    dropdownText: {
        ...TEXTS.textRegular,
    },
    dropdownArea: {
        width: WIDTH.width100,
        height: 'auto',
        maxHeight: 300,
        borderRadius: SIZES.xSmall,

        backgroundColor: '#FFFFFF1A',
        alignSelf: 'center',
        position: 'absolute',
        top: 50,
        paddingHorizontal: SIZES.large,
    },
    dataItem: {
        width: WIDTH.width100,
        borderBottomWidth: 1,
        borderColor: '#FFFFFF1A',
        borderStyle: 'solid',
        alignItems: 'center',
        flexDirection: 'row',
        columnGap: SIZES.xSmall,
        paddingVertical: SIZES.xSmall,
        // backgroundColor:"#ccc"
    },
    img: {
        width: 30,
        height: 30,
    },
});
useMultiplyWidthScale(styles);
export default SelectDropdown;
