import { HeaderScreenLeft } from '../components/headerBar';
import { ForgotPassword, Login, NewPassword, SignUp } from '../screens/Auth';
import { Account, Deposit, EstateNFTs, HomeWallet, Transfer, WithDraw, AccountTwo } from '../screens/Wallet';
import { Card, CardDetail, HomeNFT, Marketplace, VirtualMachine } from '../screens/NFT';
import { Swap, SwapDetail } from '../screens/Swap';
import { ChangePassword, Setting, AuthCode, KYC } from '../screens/Setting';
import { MyNFT } from '../screens/NFT/MyNFT';
import { Contact, ShareLink } from '../screens/Profile';
import { HistoryEarning, MenuHistory } from '../screens/History';
import HistoryCommissionReferral from '../screens/History/HistoryCommissionReferral';
import HistoryCommissionLocation from '../screens/History/HistoryCommissionLocation';
import HistoryCommissionMachine from '../screens/History/HistoryCommissionMachine';
import HistoryProfit from '../screens/History/HistoryProfit';

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

const routerMyNFT = [{ name: 'MyNFT', component: MyNFT, headerLeft: <HeaderScreenLeft goBack /> }];

const routerSwap = [
    { name: 'Swap', component: Swap },
    { name: 'SwapDetail', component: SwapDetail },
];

const routerSetting = [
    { name: 'Setting', component: Setting },
    { name: 'ChangePassword', component: ChangePassword, showHeader: false },
    { name: 'AuthCode', component: AuthCode, showHeader: false },
    { name: 'KYC', component: KYC, showHeader: false },

    { name: 'MenuHistory', component: MenuHistory, headerLeft: <HeaderScreenLeft goBack /> },
    { name: 'HistoryEarning', component: HistoryEarning, headerLeft: <HeaderScreenLeft goBack /> },
    { name: 'HistoryProfit', component: HistoryProfit, headerLeft: <HeaderScreenLeft goBack /> },
    {
        name: 'HistoryCommissionReferral',
        component: HistoryCommissionReferral,
        headerLeft: <HeaderScreenLeft goBack />,
    },
    {
        name: 'HistoryCommissionLocation',
        component: HistoryCommissionLocation,
        headerLeft: <HeaderScreenLeft goBack />,
    },
    { name: 'HistoryCommissionMachine', component: HistoryCommissionMachine, headerLeft: <HeaderScreenLeft goBack /> },
];
const routerProfile = [
    { name: 'Contact', component: Contact },
    { name: 'ShareLink', component: ShareLink },
];
export { routerAuth, routerWallet, routerNFT, routerSwap, routerSetting, routerMyNFT, routerProfile };
