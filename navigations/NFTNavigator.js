import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { routerNFT } from '../router/router';
import { icons } from '../constants';
import { Image } from 'react-native';
import { HeaderScreenLeft, HeaderScreenRight } from '../components/headerBar';
import MainContainerNFT from '../screens/NFT/MainContainerNFT';
import { CardDetail } from '../screens/NFT';

const Stack = createNativeStackNavigator();

function NFTNavigator() {
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
            initialRouteName="Marketplace"
        >
            <Stack.Screen name="MainContainerNFT" component={MainContainerNFT} />
            <Stack.Screen
                name="CardDetail"
                component={CardDetail}
                options={{
                    headerLeft: () => <HeaderScreenLeft src={icons.back} goBack />,
                }}
            />
            {/* {routerNFT.map((screen) => (
            <Stack.Screen key={screen.name} name={screen.name} component={screen.component} />
            ))} */}
        </Stack.Navigator>
    );
}

export default NFTNavigator;
