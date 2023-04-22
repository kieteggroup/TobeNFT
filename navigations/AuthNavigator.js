import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routerAuth } from '../router/router';

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
            initialRouteName="Login"
        >

            {routerAuth.map((screen) => (
                <Stack.Screen key={screen.name} name={screen.name} component={screen.component} />
            ))}
        </Stack.Navigator>
    );
}

export default WalletNavigator;
