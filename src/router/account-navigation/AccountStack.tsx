import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenNames from '../screenNames';
import AccountTabs from './AccountTabs';
import AccountPrivateKeyScreen from '@features/account/screen/AccountPrivateKeyScreen';
import colors from '@styles/colors';
import SelectTokenScreen from '@features/tokens/screen/SelectTokenScreen';
import SendTokenScreen from '@features/tokens/screen/SendTokenScreen';
import AddTokenScreen from '@features/tokens/screen/AddTokenScreen';
import SendNftScreen from '@features/nft/screen/SendNftScreen';
import WebViewScreen from '@components/ui/WebViewScreen';
import ConnectDappScreen from '@features/walletconnect/screens/ConnectDappScreen';
import TransactionsApprovalScreen from '@features/transactions/screens/TransactionsApprovalScreen';
import VerifySeedPhraseScreen from '@features/recovery/screen/VerifySeedPhraseScreen';
import useHeaderTitle from '@hooks/useHeaderTitle';

const Stack = createNativeStackNavigator();

const {
  ACCOUNT_TABS,
  ACCOUNT_PRIVATE_KEY,
  TOKEN_SELECT_TOKENS,
  TOKEN_SEND,
  TOKEN_ADD_TOKEN,
  NFT_SEND_NFT,
  WEBVIEW,
  ACCOUNT_CONNECT_DAPP,
  ACCOUNT_TRANSACTION_APPROVAL,
  RECOVERY_VERIFY_PHRASE,
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
        animation: 'slide_from_right',
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
          headerTitle: useHeaderTitle('Show Private Key'),
        }}
        name={ACCOUNT_PRIVATE_KEY}
        component={AccountPrivateKeyScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: useHeaderTitle('Send'),
        }}
        name={TOKEN_SELECT_TOKENS}
        component={SelectTokenScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: useHeaderTitle('Send'),
        }}
        name={TOKEN_SEND}
        component={SendTokenScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: useHeaderTitle('Add tokens'),
        }}
        name={TOKEN_ADD_TOKEN}
        component={AddTokenScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: useHeaderTitle('Send NFT'),
        }}
        name={NFT_SEND_NFT}
        component={SendNftScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: '',
        }}
        name={WEBVIEW}
        component={WebViewScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: useHeaderTitle('Connect Dapp'),
        }}
        name={ACCOUNT_CONNECT_DAPP}
        component={ConnectDappScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: useHeaderTitle('Transaction Approval'),
        }}
        name={ACCOUNT_TRANSACTION_APPROVAL}
        component={TransactionsApprovalScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: useHeaderTitle('Show Recovery Phrase'),
        }}
        name={RECOVERY_VERIFY_PHRASE}
        component={VerifySeedPhraseScreen}
      />
    </Stack.Navigator>
  );
};
export default AccountStack;
