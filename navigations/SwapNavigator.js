import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routerNFT } from '../router/router';
import { icons } from '../constants';
import { Image } from 'react-native';
import { HeaderScreenLeft, HeaderScreenRight } from '../components/headerBar';
import MainContainerNFT from '../screens/NFT/MainContainerNFT';
import { CardDetail } from '../screens/NFT';
import Swap from '../screens/Swap/Swap';
import SwapDetail from '../screens/Swap/SwapDetail';

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
            <Stack.Screen name="Swap" component={Swap} />
            <Stack.Screen name="SwapDetail" component={SwapDetail} />
            {/* {routerNFT.map((screen) => (
            <Stack.Screen key={screen.name} name={screen.name} component={screen.component} />
            ))} */}
        </Stack.Navigator>
    );
}

export default SwapNavigator;
