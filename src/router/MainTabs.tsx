import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from '../features/account/screen/AccountScreen';
import { CustomTabBar, TodoScreen } from '../components/ui';
import ScreenNames from './screenNames';

const Tabs = createBottomTabNavigator();

const { ACCOUNT_TOKENS, ACCOUNT_NFTS, ACCOUNT_ACTIVITY } = ScreenNames;

const MainTabs = () => {
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

export default MainTabs;
