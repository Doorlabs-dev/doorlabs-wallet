import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenNames from '../screenNames';
import { TodoScreen } from '@components/ui';
import AccountTabs from './AccountTabs';
import AccountPrivateKeyScreen from '@features/account/screen/AccountPrivateKeyScreen';
import colors from '@styles/colors';

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
          headerTitle: 'Show Private Key',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTitleStyle: {
            color: colors.white,
            fontSize: 24,
            fontWeight: '500',
          },
          headerBackTitleVisible: false,
          headerTintColor: colors.white,
          headerTitleAlign: 'left',
        }}
        name={ACCOUNT_PRIVATE_KEY}
        component={AccountPrivateKeyScreen}
      />
    </Stack.Navigator>
  );
};
export default AccountStack;
