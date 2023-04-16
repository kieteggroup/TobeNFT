import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { routerWallet } from '../router/router';

const Stack = createNativeStackNavigator();

function WalletNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: '#08021C',
                },
            }}
            initialRouteName="Deposit"
        >
            {routerWallet.map((screen) => (
                <Stack.Screen name={screen.name} component={screen.component} />
            ))}
        </Stack.Navigator>
    );
}

export default WalletNavigator;
