import { StyleSheet, View, Text } from 'react-native';
import { useState } from 'react';

import { MainContainer } from '../../components';
import { COLORS, SIZES, TEXTS, WIDTH, images } from '../../constants';
import { ButtonCustom, InputCustom } from '../../CustomComponent';

const WithDraw = () => {
    const [is2FA, setIs2FA] = useState(false);
    return (
        <MainContainer>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Withdraw</Text>
                <View style={styles.form}>
                    <InputCustom
                        radiusMax
                        style={{ height: 36, fontSize: 14 }}
                        placeholder="Wallet USDT.BEP20 - Note *"
                    />
                    <InputCustom radiusMax style={{ height: 36, fontSize: 14 }} placeholder="USDT" />
                    <InputCustom radiusMax style={{ height: 36, fontSize: 14 }} placeholder="Amount of USDT.BEP20" />
                    <View style={styles.formNote}>
                        <Text style={styles.noteText}>
                            Max available:<Text style={styles.usdt}> 0 USDT</Text>
                        </Text>
                        <Text style={styles.noteText}>
                            The overhead fees are not fixed, subject to change depending on the state of the blockchain
                            networks
                        </Text>
                        <Text style={styles.noteText}>Estimated completion time: 2 minutes</Text>
                    </View>
                    {is2FA ? (
                        <InputCustom radiusMax style={{ height: 36, fontSize: 14 }} placeholder="2FA" />
                    ) : (
                        <ButtonCustom
                            text="Enabled 2FA"
                            buttonStyle={{ width: 98, marginTop: 4, marginBottom: 2, height: 25 }}
                            onPress={() => setIs2FA(!is2FA)}
                            buttonStyleText={{ fontSize: 11 }}
                        />
                    )}

                    <ButtonCustom
                        text="Withdraw"
                        backgroundLinearGradient={!is2FA && ['#AAAAAA', '#A9A9A952']}
                        buttonStyle={{ width: 176, marginTop: 4, marginBottom: 2 }}
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
        marginHorizontal: 20,
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
        width:WIDTH.width100
    },
    formNote: {
        marginTop: 10,
    },
    noteText: {
        ...TEXTS.textRegular,
        fontSize: 14,
    },
    usdt: {
        ...TEXTS.textBold,
        color: COLORS.primary,
    },
});
export default WithDraw;
