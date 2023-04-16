import { Text, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'react-native-svg';

const MyTabBar = ({ state, descriptors, navigation }) => {
    return (
        <LinearGradient colors={['#E80274', '#7D0D6A']} style={styles.gradient}>
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
                                <LinearGradient colors={['#E80274', '#7D0D6A']} style={{ ...button }}>
                                    {IconTab()}
                                    <Text style={{ color: '#fff' }}>{label}</Text>
                                </LinearGradient>
                            )}
                        </TouchableOpacity>
                    );
                })}
            </View>
        </LinearGradient>
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
    },
    container: {
        flexDirection: 'row',
        height: 56,
        paddingHorizontal: 10,
    },
    tabButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
};
const button = {
    paddingHorizontal: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#ffffff29',
    borderRadius: 50,
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
    paddingVertical: 5,
    columnGap: 10,
    justifyContent: 'flex-start',
    // width: 100,
};
export default MyTabBar;
