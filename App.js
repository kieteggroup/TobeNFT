import { Image, SafeAreaView, StyleSheet, View, useColorScheme, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ScreenBottomTab } from './components';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import { FONT, TEXTS } from './constants';
import SwapNavigator from './navigations/SwapNavigator';

const Stack = createNativeStackNavigator();
// Định nghĩa kiểu mặc định cho thành phần Text
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.style = { ...TEXTS.textRegular,fontSize:14 };

function App() {
    const isDarkMode = useColorScheme() === 'light';
    const [fontsLoaded] = useFonts({
        IBMPlexSans_Regular: require('./assets/fonts/IBMPlexSans-Regular.ttf'),
        IBMPlexSans_Medium: require('./assets/fonts/IBMPlexSans-Medium.ttf'),
        IBMPlexSans_Bold: require('./assets/fonts/IBMPlexSans-Bold.ttf'),
        Roboto_Regular: require('./assets/fonts/Roboto-Regular.ttf'),
        Roboto_Bold: require('./assets/fonts/Roboto-Bold.ttf'),
    });
    if (!fontsLoaded) return null;
    return (
        <SafeAreaView style={styles.wrapper}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor="transparent"
                translucent
            />
            <NavigationContainer>
                <View style={styles.view}>
                    <Stack.Navigator
                        initialRouteName="ScreenBottomTab"
                        screenOptions={{
                            contentStyle: {
                                backgroundColor: '#08021C',
                            },
                            headerShown: false,
                        }}
                    >
                        <Stack.Screen name="ScreenBottomTab" component={ScreenBottomTab} />
                    </Stack.Navigator>
                </View>
            </NavigationContainer>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    view: {
        flex: 1,
    },
});
export default App;
