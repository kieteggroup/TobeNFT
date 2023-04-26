import { StyleSheet, View, Text } from 'react-native';
import { useState } from 'react';

import { MainContainer } from '../../components';
import { COLORS, SIZES, TEXTS, WIDTH, images } from '../../constants';
import { ButtonCustom, InputCustom } from '../../CustomComponent';
import useMultiplyWidthScale from '../../hooks/useMultiplyWidthScale';
import { useLanguage } from '../../contexts/LanguageContext';

const WithDraw = () => {
    const [is2FA, setIs2FA] = useState(false);

    const { t } = useLanguage();
    return (
        <MainContainer>
            <View style={styles.wrapper}>
                <Text style={styles.title}>{t('titleWithdraw')}</Text>
                <View style={styles.form}>
                    <InputCustom radiusMax style={styles.input} placeholder={t('noteWallet')} />
                    <InputCustom radiusMax style={styles.input} placeholder="USDT" />
                    <InputCustom radiusMax style={styles.input} placeholder={t('placeholderAmount')} />
                    <View style={styles.formNote}>
                        <Text style={styles.noteText}>
                            {t('maxAvailable')}:<Text style={styles.usdt}> 0 USDT</Text>
                        </Text>
                        <Text style={styles.noteText}>{t('depositWithdraw')}</Text>
                    </View>
                    {is2FA ? (
                        <InputCustom radiusMax style={styles.input} placeholder="2FA" />
                    ) : (
                        <ButtonCustom
                            text={t('enabled') + ' 2FA'}
                            buttonStyle={styles.button2FA}
                            onPress={() => setIs2FA(!is2FA)}
                            buttonStyleText={{ fontSize: 11 * WIDTH.widthScale }}
                        />
                    )}

                    <ButtonCustom
                        text={t('titleWithdraw')}
                        backgroundLinearGradient={!is2FA && ['#AAAAAA', '#A9A9A952']}
                        buttonStyle={styles.btnWithdraw}
                    />
                </View>
            </View>
        </MainContainer>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: SIZES.large,
        marginVertical: 36,
    },
    title: {
        marginTop: 6,
        ...TEXTS.textBold,
        fontSize: SIZES.xLarge,
    },
    form: {
        marginTop: 15,
        rowGap: 18,
        width: WIDTH.width100,
    },
    input: {
        height: 36,
        fontSize: SIZES.xMedium,
    },

    formNote: {
        marginTop: SIZES.xSmall,
    },
    noteText: {
        ...TEXTS.textRegular,
    },
    button2FA: {
        width: 98,
        marginTop: 4,
        marginBottom: 2,
        height: 25,
    },
    btnWithdraw: {
        width: 176,
        marginTop: 4,
        marginBottom: 2,
    },
    usdt: {
        ...TEXTS.textBold,
        color: COLORS.primary,
    },
});
useMultiplyWidthScale(styles);
export default WithDraw;
