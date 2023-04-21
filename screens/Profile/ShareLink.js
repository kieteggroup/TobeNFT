import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MainContainer } from '../../components';
import { COLORS, SIZES, TEXTS, WIDTH, icons, images } from '../../constants';
import { ButtonCustom, InputCustom } from '../../CustomComponent';
import { LinearGradient } from 'expo-linear-gradient';
import { RadialGradient, Stop } from 'react-native-svg';

const ShareLink = ({navigation}) => {
    return (
        <MainContainer blurBackground>
            <View style={styles.wrapper}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={icons.back} style={styles.back} />
                    </TouchableOpacity>
                    <Text style={styles.shareText}>Share your link NOW and Let's grow together!</Text>
                </View>
                <LinearGradient colors={['#F40074', '#200575']} style={styles.borderGradient}>
                    <View style={styles.linkBox}>
                        <Text style={styles.linkTitle}>My Referral Link</Text>
                        <View style={styles.copyContent}>
                            <Text style={styles.copyText}>https://toearnnow.com/auth/register/hongphan</Text>
                        </View>
                        <ButtonCustom
                            text="Copy referral Link"
                            backgroundLinearGradient={['#E50876', '#4A1A5B']}
                            start={{ x: -0.0276, y: 0.561 }}
                            end={{ x: 1, y: 1 }}
                            locations={[0.0, 1.0]}
                            buttonStyle={styles.button}
                        />

                        <View style={styles.shareSocial}>
                            <Text style={styles.shareSocialText}>Share</Text>
                            <Image source={images.fb} style={styles.imaShare} />
                            <Image source={images.twitter} style={styles.imaShare} />
                            <Image source={images.tele} style={styles.imaShare} />
                        </View>

                        <View style={styles.note}>
                            <Text style={styles.textNote}>Note:</Text>
                            <View style={styles.noteItem}>
                                <Image source={icons.toearnnownho} style={styles.imaShare} />
                                <Text style={{ ...styles.textNote, color: '#0FFF00' }}> Personal Revenue</Text>
                            </View>
                            <View style={styles.noteItem}>
                                <Image source={images.system} style={styles.imaShare} />
                                <Text style={{ ...styles.textNote, color: '#E7FF00' }}> Personal Revenue</Text>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
                <Image source={images.imgCopyLink} style={styles.imgFooter} />
            </View>
        </MainContainer>
    );
};

const styles = StyleSheet.create({
    wrapper: { flex: 1 },
    back: {
        padding: 8,
        margin: 8,
    },
    shareText: {
        ...TEXTS.textRegular,
        fontSize: 14,
        lineHeight: 52,
        marginLeft: 6,
    },
    borderGradient: {
        width: 333 * WIDTH.widthScale,
        padding: 1,
        borderRadius: 18,
        alignSelf: 'center',
        marginTop: 9,
    },
    linkBox: {
        width: WIDTH.width100,
        backgroundColor: '#4C2060',
        flex: 1,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 18,
        alignItems: 'center',
    },
    linkTitle: {
        ...TEXTS.textBold,
        fontSize: 14,
    },
    copyContent: {
        height: 41 * WIDTH.widthScale,
        width: 296.21 * WIDTH.widthScale,
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: COLORS.white,
        paddingHorizontal: 11,
        marginTop: 30,

        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#EAEAEA',
    },
    copyText: {
        ...TEXTS.textRegular,
        color: '#000000',
        fontSize: 10,
    },
    button: {
        marginTop: 15,
        height: 41 * WIDTH.widthScale,
        width: 145 * WIDTH.widthScale,
        borderRadius: 5,
        borderWidth: 0,
    },
    shareSocial: {
        flexDirection: 'row',
        columnGap: 5,
        marginTop: 15,
    },
    shareSocialText: {
        ...TEXTS.textRegular,
        fontSize: 13,
        marginRight: 4,
    },
    imaShare: {
        height: 18 * WIDTH.widthScale,
        width: 18 * WIDTH.widthScale,
    },
    note: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        alignItems: 'center',
        marginTop: 8,
    },
    noteItem: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 5,
    },
    textNote: {
        marginRight: 15,
        ...TEXTS.textRegular,
        fontSize: SIZES.xSmall,
    },
    imgFooter: {
        alignSelf: 'center',
        marginTop: 26,
        height: 196 * WIDTH.widthScale,
        width: 183 * WIDTH.widthScale,
    },
});

export default ShareLink;
