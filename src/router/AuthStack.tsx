import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/auth';
import {
  CreateWalletPasswordScreen,
  WelcomeScreen,
} from '../screens/onboarding';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="create-wallet-password"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="welcome" component={WelcomeScreen} />
      <Stack.Screen
        name="create-wallet-password"
        component={CreateWalletPasswordScreen}
      />
      <Stack.Screen name="login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
