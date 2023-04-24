import { Image, SafeAreaView, StyleSheet, View, useColorScheme, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';

import { AuthNavigator } from './navigations';
import Welcome from './screens/Welcome';
import * as SplashScreen from 'expo-splash-screen';
import { ScreenBottomTab } from './components';

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();
import './languages/i18n';

function App() {
    const isDarkMode = useColorScheme() === 'light';
    const [fontsLoaded] = useFonts({
        IBMPlexSans_Regular: require('./assets/fonts/IBMPlexSans-Regular.ttf'),
        IBMPlexSans_Medium: require('./assets/fonts/IBMPlexSans-Medium.ttf'),
        IBMPlexSans_Bold: require('./assets/fonts/IBMPlexSans-Bold.ttf'),
        Roboto_Regular: require('./assets/fonts/Roboto-Regular.ttf'),
        Roboto_Bold: require('./assets/fonts/Roboto-Bold.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) return null;

    return (
        <SafeAreaView style={styles.wrapper} onLayout={onLayoutRootView}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor="transparent"
                translucent
            />
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Welcome"
                    screenOptions={{
                        contentStyle: {
                            backgroundColor: '#08021C',
                        },
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="Welcome" component={Welcome} />
                    <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
                    <Stack.Screen name="ScreenBottomTab" component={ScreenBottomTab} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
});
export default App;
