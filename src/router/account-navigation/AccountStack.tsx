import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenNames from '../screenNames';
import { TodoScreen } from '@components/ui';
import AccountTabs from './AccountTabs';
import AccountPrivateKeyScreen from '@features/account/screen/AccountPrivateKeyScreen';
import colors from '@styles/colors';
import AccountReceiveScreen from '@features/account/screen/AccountReceiveScreen';
import SelectTokenScreen from '@features/tokens/screen/SelectTokenScreen';

const Stack = createNativeStackNavigator();

const {
  ACCOUNT_TABS,
  ACCOUNT_PRIVATE_KEY,
  ACCOUNT_RECEIVE,
  TOKEN_SELECT_TOKENS,
  TOKEN_SEND,
} = ScreenNames;

const AccountStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerTitleStyle: {
          color: colors.white,
          fontSize: 20,
          fontWeight: '500',
        },
        headerBackTitleVisible: false,
        headerTintColor: colors.white,
      }}
    >
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
        }}
        name={ACCOUNT_PRIVATE_KEY}
        component={AccountPrivateKeyScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Receive',
        }}
        name={ACCOUNT_RECEIVE}
        component={AccountReceiveScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Send',
        }}
        name={TOKEN_SELECT_TOKENS}
        component={SelectTokenScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Send',
        }}
        name={TOKEN_SEND}
        component={TodoScreen}
      />
    </Stack.Navigator>
  );
};
export default AccountStack;
