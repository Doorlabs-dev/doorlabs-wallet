import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenNames from '../screenNames';
import { TodoScreen } from '@components/ui';
import AccountTabs from './AccountTabs';

const Stack = createNativeStackNavigator();

const { ACCOUNT_TABS, ACCOUNT_PRIVATE_KEY } = ScreenNames;

const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={ACCOUNT_TABS}
        component={AccountTabs}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={ACCOUNT_PRIVATE_KEY}
        component={TodoScreen}
      />
    </Stack.Navigator>
  );
};
export default AccountStack;
