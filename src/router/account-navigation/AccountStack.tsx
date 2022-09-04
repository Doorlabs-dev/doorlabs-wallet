import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenNames from '../screenNames';
import AccountTabs from './AccountTabs';
import AccountPrivateKeyScreen from '@features/account/screen/AccountPrivateKeyScreen';
import colors from '@styles/colors';
import AccountReceiveScreen from '@features/account/screen/AccountReceiveScreen';
import SelectTokenScreen from '@features/tokens/screen/SelectTokenScreen';
import SendTokenScreen from '@features/tokens/screen/SendTokenScreen';
import AddTokenScreen from '@features/tokens/screen/AddTokenScreen';
import SendNftScreen from '@features/nft/screen/SendNftScreen';
import WebViewScreen from '@components/ui/WebViewScreen';

const Stack = createNativeStackNavigator();

const {
  ACCOUNT_TABS,
  ACCOUNT_PRIVATE_KEY,
  ACCOUNT_RECEIVE,
  TOKEN_SELECT_TOKENS,
  TOKEN_SEND,
  TOKEN_ADD_TOKEN,
  NFT_SEND_NFT,
  WEBVIEW,
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
        component={SendTokenScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Add tokens',
        }}
        name={TOKEN_ADD_TOKEN}
        component={AddTokenScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Send NFT',
        }}
        name={NFT_SEND_NFT}
        component={SendNftScreen}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={WEBVIEW}
        component={WebViewScreen}
      />
    </Stack.Navigator>
  );
};
export default AccountStack;
