import { HeaderScreenLeft } from '../components/headerBar';
import { ForgotPassword, Login, NewPassword, SignUp } from '../screens/Auth';
import { Account, Deposit, EstateNFTs, HomeWallet, Transfer, WithDraw, AccountTwo } from '../screens/Wallet';
import { Card, CardDetail, HomeNFT, Marketplace, VirtualMachine } from '../screens/NFT';
import { Swap, SwapDetail } from '../screens/Swap';
import { ChangePassword, Setting, AuthCode, KYC } from '../screens/Setting';
import { MyNFT } from '../screens/NFT/MyNFT';

//Public router
const routerAuth = [
    { name: 'Login', component: Login },
    { name: 'SignUp', component: SignUp },
    { name: 'ForgotPassword', component: ForgotPassword },
    { name: 'NewPassword', component: NewPassword },
];
const routerWallet = [
    { name: 'HomeWallet', component: HomeWallet, headerLeft: <HeaderScreenLeft goHome /> },
    { name: 'Account', component: Account, headerLeft: <HeaderScreenLeft goHome /> },
    { name: 'EstateNFTs', component: EstateNFTs, headerLeft: <HeaderScreenLeft goBack /> },
    { name: 'Transfer', component: Transfer, headerLeft: <HeaderScreenLeft goBack /> },
    { name: 'Deposit', component: Deposit, headerLeft: <HeaderScreenLeft goBack /> },
    { name: 'WithDraw', component: WithDraw, headerLeft: <HeaderScreenLeft goBack /> },
    { name: 'AccountTwo', component: AccountTwo },
];

const routerNFT = [
    { name: 'HomeNFT', component: HomeNFT },
    { name: 'Marketplace', component: Marketplace },
    { name: 'Card', component: Card },
    { name: 'CardDetail', component: CardDetail },
    { name: 'VirtualMachine', component: VirtualMachine },
];

const routerMyNFT = [
    { name: 'MyNFT', component: MyNFT },
    
];

const routerSwap = [
    { name: 'Swap', component: Swap },
    { name: 'SwapDetail', component: SwapDetail },
];

const routerSetting = [
    { name: 'Setting', component: Setting },
    { name: 'ChangePassword', component: ChangePassword },
    { name: 'AuthCode', component: AuthCode },
    { name: 'KYC', component: KYC },
];
export { routerAuth, routerWallet, routerNFT, routerSwap, routerSetting, routerMyNFT };
