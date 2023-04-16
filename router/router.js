import { ForgotPassword, Login, NewPassword, SignUp } from '../screens/Auth';
import { Card, CardDetail, Marketplace, VirtualMachine } from '../screens/NFT';
import Swap from '../screens/Swap/Swap';
import { Account, Deposit, WithDraw } from '../screens/Wallet';

//Public router
const routerAuth = [
    { name: 'Login', component: Login },
    { name: 'SignUp', component: SignUp },
    { name: 'ForgotPassword', component: ForgotPassword },
    { name: 'NewPassword', component: NewPassword },
];
const routerWallet = [
    { name: 'Deposit', component: Deposit },
    { name: 'Account', component: Account },
    { name: 'WithDraw', component: WithDraw },
];
const routerNFT = [
    { name: 'Marketplace', component: Marketplace },
    { name: 'Card', component: Card },
    { name: 'CardDetail', component: CardDetail },
    { name: 'VirtualMachine', component: VirtualMachine },
];
const routerSwap = [{ name: 'Swap', component: Swap }];
export { routerAuth, routerWallet, routerNFT, routerSwap };
