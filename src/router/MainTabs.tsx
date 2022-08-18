import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from '../features/account/screen/AccountScreen';
import { CustomTabBar } from '../components/ui';
import ScreenNames from './screenNames';

const Tabs = createBottomTabNavigator();

const { ACCOUNT_TOKENS } = ScreenNames;

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
    </Tabs.Navigator>
  );
};

export default MainTabs;
