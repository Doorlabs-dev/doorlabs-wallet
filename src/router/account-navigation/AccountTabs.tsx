import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomTabBar, TodoScreen } from '../../components/ui';
import ScreenNames from '../screenNames';
import AccountScreen from '@features/account/screen/AccountScreen';
import AccountActivityScreen from '@features/account/screen/AccountActivityScreen';
import AccountScreenHeader from '@features/account/components/AccountScreenHeader';

import { SafeArea } from '@components/layout';

const Tabs = createBottomTabNavigator();

const { ACCOUNT_TOKENS, ACCOUNT_NFTS, ACCOUNT_ACTIVITY } = ScreenNames;

const AccountTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        header: () => <AccountScreenHeader />,
      }}
      tabBar={CustomTabBar}
    >
      <Tabs.Screen name={ACCOUNT_TOKENS} component={AccountScreen} />
      <Tabs.Screen name={ACCOUNT_NFTS} component={TodoScreen} />
      <Tabs.Screen name={ACCOUNT_ACTIVITY} component={AccountActivityScreen} />
    </Tabs.Navigator>
  );
};

export default AccountTabs;
