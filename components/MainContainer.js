import { View, Text, Image, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, WIDTH, images } from '../constants';
import { useEffect } from 'react';

const MainContainer = ({ children, noBackgroundFooter, noBlurBackground }) => {
    return (
        <ImageBackground style={styles.wrapper} source={images.technology}>
            {noBackgroundFooter ? (
                <View style={styles.main}>
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
                        {children}
                    </ScrollView>
                </View>
            ) : (
                <LinearGradient
                    colors={['#502D9F66', '#08021C00']}
                    start={{ x: 0.6, y: 1 }}
                    end={{ x: 1, y: 0 }}
                    locations={[0.3191, 0.6809]}
                    style={{ ...styles.main, borderWidth: 2, borderStyle: 'solid', borderColor: '#6A318133' }}
                >
                    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scroll}>
                        {children}
                    </ScrollView>
                </LinearGradient>
            )}

            <View style={{ height: 100, backgroundColor: noBackgroundFooter ? COLORS.body : 'transparent' }}></View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    main: {
        width: WIDTH.width100,
        flex: 1,
    },
    scroll: {
        alignItems: 'center',
        // paddingHorizontal: 20,
    },
});
export default MainContainer;
