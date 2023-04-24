import { View, Text, Image, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { BORDER, COLORS, WIDTH, images } from '../constants';
// locations={[0.3191, 0.6809]}
const MainContainer = ({ children, noBackgroundFooter, borderBackground }) => {
    const border = borderBackground && { ...BORDER, borderWidth: 2 * WIDTH.widthScale };
    return (
        <ImageBackground style={styles.wrapper} source={images.technology}>
            <LinearGradient
                colors={[COLORS.bodyLight, COLORS.bodyTransp]}
                 start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                locations={[0.3392, 0.9986]}
                angle={295.36}
                style={{
                    ...styles.wrapper,
                    ...border
                }}
            >
                <ScrollView showsVerticalScrollIndicator={false} contentInsetAdjustmentBehavior="automatic">
                    {children}
                </ScrollView>
            </LinearGradient>

            <View
                style={{
                    height: 94 * WIDTH.widthScale,
                    backgroundColor: noBackgroundFooter ? COLORS.body : 'transparent',
                }}
            ></View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
});
export default MainContainer;
