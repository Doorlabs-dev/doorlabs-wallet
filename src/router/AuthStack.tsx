import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/auth';
import {
  InputSeedPhraseScreen,
  ResetConfirmationScreen,
  RestoreWalletScreen,
} from '../screens/recovery';

export type AuthStackParamList = {
  login: undefined;
  'input-phrase': undefined;
  'restore-wallet': {
    phrase: string;
  };
  'reset-confirmation': undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={LoginScreen} />
      <Stack.Screen name="input-phrase" component={InputSeedPhraseScreen} />
      <Stack.Screen name="restore-wallet" component={RestoreWalletScreen} />
      <Stack.Screen
        name="reset-confirmation"
        component={ResetConfirmationScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
