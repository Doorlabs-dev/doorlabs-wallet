import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../features/onboarding/screen/WelcomeScreen';
import NewWalletScreen from '../features/onboarding/screen/NewWalletScreen';
import InputSeedPhraseScreen from '../features/recovery/screen/InputSeedPhraseScreen';
import RestoreWalletScreen from '../features/recovery/screen/RestoreWalletScreen';
import ScreenNames from './screenNames';
const { WELCOME, CREATE_WALLET_PASSWORD, INPUT_PHRASE, RESTORE_WALLET } =
  ScreenNames;

const Stack = createNativeStackNavigator();
const OnboardingStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={WELCOME} component={WelcomeScreen} />
      <Stack.Screen name={CREATE_WALLET_PASSWORD} component={NewWalletScreen} />
      <Stack.Screen name={INPUT_PHRASE} component={InputSeedPhraseScreen} />
      <Stack.Screen name={RESTORE_WALLET} component={RestoreWalletScreen} />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
