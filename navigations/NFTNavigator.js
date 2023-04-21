import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { routerMyNFT, routerNFT } from '../router/router';

import { HeaderScreenLeft, HeaderScreenRight } from '../components/headerBar';
import { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator();

function NFTNavigator({ route }) {
    const param = route?.params;
    const [activeType, setActiveType] = useState(param?.navigateTab);

    useEffect(() => {
        setActiveType(param?.navigateTab);
    }, [param?.navigateTab]);

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
            initialRouteName="HomeNFT"
        >
            {routerNFT.map((screen) => (
                <Stack.Screen
                    key={screen.name}
                    name={screen.name}
                    component={screen.component}
                    initialParams={{ navigateTab: activeType }}

                />
            ))}
            {routerMyNFT.map((screen) => (
                <Stack.Screen
                    key={screen.name}
                    name={screen.name}
                    component={screen.component}
                />
            ))}
        </Stack.Navigator>
    );
}

export default NFTNavigator;
