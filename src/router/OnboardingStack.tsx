import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  CreateWalletPasswordScreen,
  WelcomeScreen,
} from '../screens/onboarding';

const Stack = createNativeStackNavigator();

const OnboardingStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen
        name="create-wallet-password"
        component={CreateWalletPasswordScreen}
      />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
