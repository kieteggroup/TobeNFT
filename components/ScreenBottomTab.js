import { View, TouchableOpacity, Text, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LinearGradient } from 'expo-linear-gradient';

import { IconNFT, IconProfile, IconSetting, IconSwap, IconWallet } from '../assets/imageSvg/ImageSVG';

import { BORDER, FONTS, SIZES, WIDTH, icons } from '../constants';
import { ButtonCustom } from '../CustomComponent';
import { NFTNavigator, WalletNavigator, SwapNavigator } from '../navigations';
import { useLanguage } from '../contexts/LanguageContext';

import SettingNavigator from '../navigations/SettingNavigator';

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

                    const widthFocus = isFocused ? { width: 115 * WIDTH.widthScale } : { flex: 1 };
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
                                    buttonStyleText={{ marginLeft: SIZES.xMedium, fontFamily: FONTS.regular }}
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
    const { t } = useLanguage();
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
            initialRouteName="Wallet"
            tabBar={(props) => <MyTabBar {...props} />}
        >
            <Tab.Screen
                name={t('bottomTabWallet')}
                component={WalletNavigator}
                options={{
                    tabBarIcon: () => <IconWallet />,
                }}
            />
            <Tab.Screen
                name={t('bottomTabNFT')}
                component={NFTNavigator}
                options={{
                    tabBarIcon: () => <IconNFT />,
                }}
            />
            <Tab.Screen
                name="SwapNavigator"
                component={SwapNavigator}
                options={{
                    tabBarLabel: t('bottomTabSwap'),
                    tabBarIcon: () => <IconSwap />,
                }}
            />
            <Tab.Screen
                name="SettingNavigator"
                component={SettingNavigator}
                options={{
                    tabBarLabel: t('bottomTabSetting'),
                    tabBarIcon: () => <IconSetting />,
                }}
            />
        </Tab.Navigator>
    );
};

const styles = {
    gradient: {
        position: 'absolute',
        right: SIZES.large,
        left: SIZES.large,
        bottom: SIZES.large,
        alignItems: 'center',
        borderRadius: 50,
        ...BORDER,
        borderWidth: 2,
    },
    container: {
        flexDirection: 'row',
        height: 50 * WIDTH.widthScale,
        paddingHorizontal: SIZES.xSmall,
    },
    tabButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
};

export default ScreenBottomTab;
