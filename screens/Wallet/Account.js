import React, { useEffect, useLayoutEffect } from 'react';
import { Text, View } from 'react-native';

import { MainContainer } from '../../components';
import AccountItem from '../../components/AccountItem';
import { COLORS, SIZES, images } from '../../constants';

const Account = () => {
    return (
        <MainContainer leftIcon={images.logongang} noContentBackGround>
            <Text style={{ color: COLORS.white, fontSize: SIZES.xLarge, fontWeight: 700, marginTop: 10 }}>Account</Text>
            <View style={{ rowGap: 20, width: '100%', marginTop: 30 }}>
                <AccountItem title="Wallet" />
                <AccountItem title="Profit" imgUsdt={false} imgToearnNow={false} />
                <AccountItem
                    title="Sales"
                    subtitleOne="Personal"
                    subtitleTwo="Total"
                    imgUsdt={true}
                    imgToearnNow={false}
                />
                <AccountItem
                    title="Now"
                    subtitleOne="Balance"
                    subtitleTwo="Earning"
                    imgUsdt={false}
                    imgToearnNow={true}
                />
                <AccountItem title="Interest" oneItem imgUsdt={false} />
                <AccountItem title="Bonus" subtitleOne="Personal" oneItem imgUsdt={false} />
            </View>
        </MainContainer>
    );
};

export default Account;
