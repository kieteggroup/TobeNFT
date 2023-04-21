import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routerNFT, routerSwap } from '../router/router';

import { HeaderScreenLeft, HeaderScreenRight } from '../components/headerBar';


const Stack = createNativeStackNavigator();

function SwapNavigator() {
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
            initialRouteName="Swap"
        >
         
            {routerSwap.map((screen) => (
            <Stack.Screen key={screen.name} name={screen.name} component={screen.component} />
            ))}
        </Stack.Navigator>
    );
}

export default SwapNavigator;
