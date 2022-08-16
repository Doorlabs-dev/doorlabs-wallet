import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../features/onboarding/screen/WelcomeScreen';
import NewWalletScreen from '../features/onboarding/screen/NewWalletScreen';
import InputSeedPhraseScreen from '../features/recovery/screen/InputSeedPhraseScreen';
import RestoreWalletScreen from '../features/recovery/screen/RestoreWalletScreen';

const Stack = createNativeStackNavigator();

const OnboardingStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen name="create-wallet-password" component={NewWalletScreen} />
      <Stack.Screen name="input-phrase" component={InputSeedPhraseScreen} />
      <Stack.Screen name="restore-wallet" component={RestoreWalletScreen} />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
