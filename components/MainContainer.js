import { View, Text, Image, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { BORDER, COLORS, WIDTH, images } from '../constants';
// locations={[0.3191, 0.6809]}
const MainContainer = ({ children, noBackgroundFooter, blurBackground }) => {
    return (
        <ImageBackground style={styles.wrapper} source={images.technology}>
            {blurBackground ? (
                <LinearGradient
                    colors={[COLORS.bodyLight, COLORS.bodyTransp]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    locations={[0.3392, 0.9986]}
                    style={{
                        ...styles.wrapper,
                        ...BORDER,
                        borderWidth: 2 * WIDTH.widthScale,
                    }}
                >
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.scroll}
                        contentInsetAdjustmentBehavior="automatic"
                    >
                        {children}
                    </ScrollView>
                </LinearGradient>
            ) : (
                <View style={{ ...styles.wrapper }}>
                    <ScrollView showsVerticalScrollIndicator={false} contentInsetAdjustmentBehavior="automatic">
                        {children}
                    </ScrollView>
                </View>
            )}

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
