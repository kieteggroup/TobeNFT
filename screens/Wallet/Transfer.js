import { StyleSheet, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { MainContainer, Table } from '../../components';
import { COLORS, SIZES, TEXTS, WIDTH, icons, images } from '../../constants';
import { ButtonCustom, InputCustom } from '../../CustomComponent';
import useMultiplyWidthScale from '../../hooks/useMultiplyWidthScale';

const Transfer = () => {
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
                    <Text style={styles.title}>Transfer</Text>
                    <View style={styles.form}>
                        <View style={styles.formGroup}>
                            <Text style={styles.formLabel}>Receiver</Text>
                            <InputCustom radiusMax style={styles.input} />
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.formLabel}>Choice</Text>
                            <InputCustom radiusMax style={styles.input} />
                            <View style={{ flexDirection: 'row', position: 'absolute', left: SIZES.xSmall, bottom: 7 }}>
                                <Image source={images.Usdt} style={styles.img} />
                                <Text style={styles.noteText}>USDT</Text>
                            </View>
                        </View>
                        <View style={styles.formGroup}>
                            <Text style={styles.formLabel}>Amount of USDT</Text>
                            <InputCustom radiusMax style={styles.input} />
                        </View>

                        <View style={styles.formNote}>
                            <Text style={styles.noteText}>
                                Max available:<Text style={styles.usdt}> 0 USDT</Text>
                            </Text>
                            <Text style={styles.noteText}>
                                The overhead fees are not fixed, subject to change depending on the state of the
                                blockchain networks
                            </Text>
                            <Text style={styles.noteText}>Estimated completion time: 2 minutes</Text>
                        </View>

                        <InputCustom radiusMax style={styles.input} placeholder="2FA" />

                        <ButtonCustom text="SEND" buttonStyle={styles.btnSend} />
                    </View>
                </LinearGradient>
                <View style={styles.history}>
                    <Table heading="History Transfer" />
                    <Table heading="History Receiver" />
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
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#6A318133',
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
        marginRight:  SIZES.xSmall,
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
