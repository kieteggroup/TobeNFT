import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { routerMyNFT, routerProfile, routerWallet } from '../router/router';
import { HeaderScreenRight } from '../components/headerBar';

const Stack = createNativeStackNavigator();

function WalletNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                contentStyle: {
                    backgroundColor: '#08021C',
                },
                headerStyle: { backgroundColor: '#08021C' },
                headerRight: () => <HeaderScreenRight />,
                headerTitle: '',
            }}
            initialRouteName="HomeWallet"
        >
            {routerWallet.map((screen) => (
                <Stack.Screen
                    name={screen.name}
                    component={screen.component}
                    options={{
                        headerLeft: () => screen.headerLeft || false,
                    }}
                />
            ))}
            {routerMyNFT.map((screen) => (
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

export default WalletNavigator;
