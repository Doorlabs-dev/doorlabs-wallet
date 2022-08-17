import React from 'react';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import AccountScreen from '../features/account/screen/AccountScreen';
import { Dimensions, View } from 'react-native';
import { CustomTabBar } from '../components/ui';

const Tabs = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tabs.Navigator tabBar={CustomTabBar}>
      <Tabs.Screen
        options={{
          headerShown: false,
        }}
        name="account-detail"
        component={AccountScreen}
      />
    </Tabs.Navigator>
  );
};

export default MainTabs;
