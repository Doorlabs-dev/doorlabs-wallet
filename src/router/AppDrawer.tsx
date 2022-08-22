import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabs from './MainTabs';
import AccountsListScreen from '../features/account/screen/AccountsListScreen';
import ScreenNames from './screenNames';
import { createDrawerNavigator } from '@react-navigation/drawer';
import colors from '@styles/colors';
import CustomDrawer from './components/CustomDrawer';
import SettingStack from './SettingStack';

const Drawer = createDrawerNavigator();

const { ACCOUNT_TABS, SETTING_STACK } = ScreenNames;

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        drawerType: 'front',
        drawerContentStyle: {
          backgroundColor: colors.greyScale800,
        },
      }}
    >
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name={ACCOUNT_TABS}
        component={MainTabs}
      />
      <Drawer.Screen
        options={
          {
            // headerShown: false,
          }
        }
        name={SETTING_STACK}
        component={SettingStack}
      />
    </Drawer.Navigator>
  );
};

export default AppDrawer;
