import { View, TouchableOpacity, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';

import { IconProfile, IconSetting, IconSwap, IconWallet } from '../assets/imageSvg/ImageSVG';
import { Login, SignUp } from '../screens/Auth';
import { FONT, icons } from '../constants';
import { ButtonCustom } from '../CustomComponent';
import { AuthNavigator, NFTNavigator, WalletNavigator, SwapNavigator } from '../navigations';
import Setting from '../screens/Setting/Setting';

// import MyTabBar from './MyTabBar';

const Tab = createBottomTabNavigator();

const MyTabBar = ({ state, descriptors, navigation }) => {
    return (
        <LinearGradient
            colors={['#F4007466', '#25135166']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
        >
            <View style={styles.container}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                            ? options.title
                            : route.name;

                    const isFocused = state.index === index;

                    const handleTabScreen = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const handleTabScreenPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    const widthFocus = isFocused ? { width: '35%' } : { flex: 1 };
                    const IconTab = options.tabBarIcon;
                    return (
                        <TouchableOpacity
                            key={index}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={handleTabScreen}
                            onLongPress={handleTabScreenPress}
                            style={{ ...styles.tabButton, ...widthFocus }}
                        >
                            {!isFocused ? (
                                IconTab()
                            ) : (
                                <ButtonCustom
                                    leftIcon={IconTab()}
                                    text={label}
                                    buttonStyleText={{ marginLeft: 14, fontSize: 14, fontFamily: FONT.regular }}
                                />
                            )}
                        </TouchableOpacity>
                    );
                })}
            </View>
        </LinearGradient>
    );
};

const ScreenBottomTab = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="WalletNavigator"
            tabBar={(props) => <MyTabBar {...props} />}
        >
            <Tab.Screen
                name="WalletNavigator"
                component={WalletNavigator}
                options={{
                    tabBarLabel: 'Wallet',
                    tabBarIcon: () => <IconWallet />,
                }}
            />
            <Tab.Screen
                name="NFT"
                component={NFTNavigator}
                options={{
                    tabBarIcon: () => <Image source={icons.iconNFT} />,
                }}
            />
            <Tab.Screen
                name="Swap"
                component={SwapNavigator}
                options={{
                    tabBarIcon: () => <IconSwap />,
                }}
            />
            <Tab.Screen
                name="Setting"
                component={Setting}
                options={{
                    tabBarIcon: () => <IconSetting />,
                }}
            />
        </Tab.Navigator>
    );
};

const styles = {
    gradient: {
        position: 'absolute',
        right: 20,
        left: 20,
        bottom: 20,
        alignItems: 'center',
        borderRadius: 50,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#6A318133',
    },
    container: {
        flexDirection: 'row',
        height: 50,
        paddingHorizontal: 10,
    },
    tabButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
};

export default ScreenBottomTab;
