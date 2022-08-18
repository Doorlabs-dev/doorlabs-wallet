import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InputSeedPhraseScreen from '../features/recovery/screen/InputSeedPhraseScreen';
import RestoreWalletScreen from '../features/recovery/screen/RestoreWalletScreen';
import ResetConfirmationScreen from '../features/recovery/screen/ResetConfirmationScreen';
import LoginScreen from '../features/auth/screen/LoginScreen';
import ScreenNames from './screenNames';

const { LOGIN, INPUT_PHRASE, RESTORE_WALLET, RESET_CONFIRMATION } = ScreenNames;

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={LOGIN} component={LoginScreen} />
      <Stack.Screen name={INPUT_PHRASE} component={InputSeedPhraseScreen} />
      <Stack.Screen name={RESTORE_WALLET} component={RestoreWalletScreen} />
      <Stack.Screen
        name={RESET_CONFIRMATION}
        component={ResetConfirmationScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
