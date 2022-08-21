import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabs from './MainTabs';
import AccountsListScreen from '../features/account/screen/AccountsListScreen';
import ScreenNames from './screenNames';

const Stack = createNativeStackNavigator();
const { ACCOUNT_TABS, ACCOUNTS_LIST } = ScreenNames;
const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={ACCOUNT_TABS}
        component={MainTabs}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={ACCOUNTS_LIST}
        component={AccountsListScreen}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
