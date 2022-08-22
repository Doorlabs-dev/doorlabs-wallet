import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CustomTabBar, TodoScreen } from '../../components/ui';
import ScreenNames from '../screenNames';
import AccountTokensStack from './AccountStack';
import AccountScreen from '@features/account/screen/AccountScreen';

const Tabs = createBottomTabNavigator();

const { ACCOUNT_TOKENS, ACCOUNT_NFTS, ACCOUNT_ACTIVITY } = ScreenNames;

const AccountTabs = () => {
  return (
    <Tabs.Navigator tabBar={CustomTabBar}>
      <Tabs.Screen
        options={{
          headerShown: false,
        }}
        name={ACCOUNT_TOKENS}
        component={AccountScreen}
      />
      <Tabs.Screen
        options={{
          headerShown: false,
        }}
        name={ACCOUNT_NFTS}
        component={TodoScreen}
      />
      <Tabs.Screen
        options={{
          headerShown: false,
        }}
        name={ACCOUNT_ACTIVITY}
        component={TodoScreen}
      />
    </Tabs.Navigator>
  );
};

export default AccountTabs;
