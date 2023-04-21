import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routerProfile, routerSetting } from '../router/router';

import { HeaderScreenLeft, HeaderScreenRight } from '../components/headerBar';

const Stack = createNativeStackNavigator();

function SettingNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                // headerShown: false,
                contentStyle: {
                    backgroundColor: '#08021C',
                },
                headerStyle: { backgroundColor: '#08021C' },
                headerRight: () => <HeaderScreenRight />,
                headerTitle: '',
            }}
            initialRouteName="Setting"
        >
            {routerSetting.map((screen) => (
                <Stack.Screen
                    key={screen.name}
                    name={screen.name}
                    component={screen.component}
                    options={{
                        headerLeft: () => screen.headerLeft || false,
                    }}
                />
            ))}
            {routerProfile.map((screen) => (
                <Stack.Screen
                    key={screen.name}
                    name={screen.name}
                    component={screen.component}
                    options={{
                        headerLeft: () => screen.headerLeft || false,
                    }}
                />
            ))}
        </Stack.Navigator>
    );
}

export default SettingNavigator;
