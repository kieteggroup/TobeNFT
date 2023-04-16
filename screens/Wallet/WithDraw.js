import { StyleSheet, View, Text } from 'react-native';

import { MainContainer } from '../../components';
import { COLORS, SIZES, images } from '../../constants';
import { ButtonCustom, InputCustom } from '../../CustomComponent';

const WithDraw = () => {
    return (
        <MainContainer leftIcon={images.logongang} >
            <Text style={styles.title}>Withdraw</Text>
            <View style={styles.form}>
                <InputCustom radiusMax style={{ height: 45 }} placeholder="Wallet USDT.BEP20 - Note *" />
                <InputCustom radiusMax style={{ height: 45 }} placeholder="USDT" />
                <InputCustom radiusMax style={{ height: 45 }} placeholder="Amount of USDT.BEP20" />
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
                <InputCustom radiusMax style={{ height: 45 }} placeholder="2FA" />

                <ButtonCustom text="Withdraw" buttonStyle={{ width: '60%', marginTop: 5, marginBottom: 20 }} />
            </View>
        </MainContainer>
    );
};

const styles = StyleSheet.create({
    title: {
        marginTop: 20,
        color: COLORS.white,
        fontSize: SIZES.xLarge,
        fontWeight: 700,
    },
    form: {
        marginTop: 40,
        width: '100%',
        rowGap: 20,
    },
    formNote: {
        marginVertical: 10,
    },
    noteText: {
        color: COLORS.white,
    },
    usdt: {
        color: COLORS.primary,
    },
});
export default WithDraw;
