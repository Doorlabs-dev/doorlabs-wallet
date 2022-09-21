import React from 'react';
import ScreenNames from './screenNames';
import { createDrawerNavigator } from '@react-navigation/drawer';
import colors from '@styles/colors';
import CustomDrawer from './components/CustomDrawer';
import SettingStack from './SettingStack';
import AccountStack from './account-navigation/AccountStack';
import useWalletConnect from '@features/walletconnect/useWalletConnect';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const { ACCOUNT_STACK, SETTING_STACK } = ScreenNames;

const AppDrawer = () => {
  useWalletConnect();

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
        name={ACCOUNT_STACK}
        component={AccountStack}
      />
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name={SETTING_STACK}
        component={SettingStack}
      />
    </Drawer.Navigator>
  );
};

const Main = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main" component={AppDrawer} />
    </Stack.Navigator>
  );
};

export default Main;
