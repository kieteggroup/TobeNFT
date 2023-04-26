import { StyleSheet, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { MainContainer, Table } from '../../components';
import { BORDER, COLORS, SIZES, TEXTS, WIDTH, icons, images } from '../../constants';
import { ButtonCustom, InputCustom } from '../../CustomComponent';
import useMultiplyWidthScale from '../../hooks/useMultiplyWidthScale';
import { useLanguage } from '../../contexts/LanguageContext';

const Transfer = () => {
    const { t } = useLanguage();

    return (
        <MainContainer>
            <View style={styles.wrapper}>
                <LinearGradient
                    colors={[COLORS.bodyLight, COLORS.bodyTransp]}
                    start={{ x: 1, y: 1 }}
                    end={{ x: 0, y: 0 }}
                    locations={[0.3392, 0.9986]}
                    style={styles.transfer}
                >
                    <Text style={styles.title}>{t('titleTransfer')}</Text>
                    <View style={styles.form}>
                        <View style={styles.formGroup}>
                            <Text style={styles.formLabel}>{t('receiver')}</Text>
                            <InputCustom radiusMax style={styles.input} />
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.formLabel}>{t('choice')}</Text>
                            <InputCustom radiusMax style={styles.input} />
                            <View
                                style={{
                                    flexDirection: 'row',
                                    position: 'absolute',
                                    left: SIZES.xSmall,
                                    bottom: 7 * WIDTH.widthScale,
                                }}
                            >
                                <Image source={images.Usdt} style={styles.img} />
                                <Text style={styles.noteText}>USDT</Text>
                            </View>
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.formLabel}>{t('placeholderAmount')}</Text>
                            <InputCustom radiusMax style={styles.input} />
                        </View>

                        <View style={styles.formNote}>
                            <Text style={styles.noteText}>
                                {t('maxAvailable')}:<Text style={styles.usdt}> 0 USDT</Text>
                            </Text>
                            <Text style={styles.noteText}>{t('depositWithdraw')}</Text>
                        </View>

                        <InputCustom radiusMax style={styles.input} placeholder="2FA" />

                        <ButtonCustom
                            text={t('send')}
                            buttonStyle={styles.btnSend}
                            buttonStyleText={{ textTransform: 'uppercase' }}
                        />
                    </View>
                </LinearGradient>
                <View style={styles.history}>
                    <Table heading={t('titleHistoryTransfer')} />
                    <Table heading={t('titleHistoryReceiver')} />
                </View>
            </View>
        </MainContainer>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
    },
    transfer: {
        alignItems: 'center',
        ...BORDER,
        borderWidth: 2,
        width: WIDTH.width100,
        paddingVertical: 36,
    },
    title: {
        marginTop: 6,
        ...TEXTS.textBold,
        fontSize: SIZES.xLarge,
    },
    form: {
        marginTop: 15,
        rowGap: SIZES.xSmall,
        paddingHorizontal: SIZES.large,
        width: WIDTH.width100,
    },
    formLabel: {
        ...TEXTS.textRegular,
        marginLeft: SIZES.xSmall,
        marginBottom: 5,
    },
    input: {
        height: 36,
        fontSize: SIZES.xMedium,
    },
    img: {
        width: 23,
        height: 23,
        marginRight: SIZES.xSmall,
    },
    formNote: {
        marginBottom: 15,
    },
    noteText: {
        ...TEXTS.textRegular,
    },
    usdt: {
        ...TEXTS.textBold,
        color: COLORS.primary,
    },
    history: {
        rowGap: 22,
        width: WIDTH.width100,
        padding: 22,
        paddingBottom: SIZES.xSmall,
    },
    btnSend: {
        width: 176,
        height: 39,
        marginTop: SIZES.xSmall,
    },
});

useMultiplyWidthScale(styles);
export default Transfer;
