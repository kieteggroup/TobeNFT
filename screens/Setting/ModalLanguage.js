import React, { useState } from 'react';
import { Text } from 'react-native';
import { Modal, TouchableOpacity } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { COLORS, SIZES, TEXTS, WIDTH } from '../../constants';
import { style } from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
import { useLanguage } from '../../contexts/LanguageContext';
import useMultiplyWidthScale from '../../hooks/useMultiplyWidthScale';
import { ButtonCustom } from '../../CustomComponent';

const ModalLanguage = ({ isOpen, onClose }) => {
    const [modalOpen, setModalOpen] = useState(isOpen);
    const [locale, setLocale] = useState('en');
    const { t, changeLocale } = useLanguage();

    const handleLanguage = () => {
        changeLocale(locale);
        onClose();
    };
    const options = [
        { name: 'Việt Nam', value: 'vi' },
        { name: 'English', value: 'en' },
    ];

    // if (!isOpen) return null;
    return (
        <Modal visible={isOpen} animationType="slide" transparent onRequestClose={() => onClose()}>
            <View style={styles.wrapper}>
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <Text style={styles.titleModal}>Select Language</Text>
                        <View style={styles.languageContent}>
                            {options.map((item) => (
                                <TouchableOpacity
                                    key={item.value}
                                    style={styles.language}
                                    onPress={() => setLocale(item.value)}
                                >
                                    <Text style={[styles.text, locale === item.value && styles.select]}>
                                        {item.name}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <View style={styles.contentBtn}>
                            <ButtonCustom text="Cancel" buttonStyle={styles.btnApply} onPress={() => onClose()} />
                            <ButtonCustom text="Apply" buttonStyle={styles.btnApply} onPress={handleLanguage} />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        height: 250,
        width: '80%',
        backgroundColor: '#ccc',
        borderRadius: SIZES.xSmall,
    },
    modalContent: {
        padding: SIZES.large,
        alignItems: 'center',
    },
    close: {
        position: 'absolute',
        right: SIZES.xSmall,
        fontSize: 24,
        padding: SIZES.xSmall,
        fontWeight: 'bold',
        color: '#000',
    },
    titleModal: {
        ...TEXTS.textBold,
        fontSize: SIZES.large,
        color: '#000',
    },
    languageContent: {
        rowGap: SIZES.xSmall,
        marginTop: SIZES.large,
    },
    language: {
        padding: SIZES.xSmall,
    },
    text: {
        ...TEXTS.textRegular,
        color: '#000',
    },
    select: {
        color: COLORS.primary,
    },
    contentBtn: {
        marginTop: SIZES.xSmall,
        flexDirection: 'row',
        columnGap: 10,
    },
    btnApply: {
       width:100,
       borderRadius:10
    },
});

useMultiplyWidthScale(styles);
export default ModalLanguage;
