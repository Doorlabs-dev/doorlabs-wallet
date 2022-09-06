import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import InputSeedPhraseScreen from '../features/recovery/screen/InputSeedPhraseScreen';
import RestoreWalletScreen from '../features/recovery/screen/RestoreWalletScreen';
import ResetConfirmationScreen from '../features/recovery/screen/ResetConfirmationScreen';
import LoginScreen from '../features/auth/screen/LoginScreen';
import ScreenNames from './screenNames';
import colors from '@styles/colors';

const { LOGIN, INPUT_PHRASE, RESTORE_WALLET, RESET_CONFIRMATION } = ScreenNames;

const Stack = createNativeStackNavigator();

const defaultScreenOptions: NativeStackNavigationOptions = {
  headerBackTitleVisible: false,
  gestureEnabled: true,
  headerTransparent: true,
  headerShadowVisible: false,
  headerShown: false,
  headerTitleStyle: {
    color: colors.white,
    fontSize: 24,
  },
  headerTintColor: colors.white,
  headerTitleAlign: 'left',
};

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name={LOGIN} component={LoginScreen} />
      <Stack.Screen
        name={INPUT_PHRASE}
        component={InputSeedPhraseScreen}
        options={{
          headerShown: true,
          headerTitle: 'Restore wallet',
          headerTintColor: colors.white,
        }}
      />
      <Stack.Screen name={RESTORE_WALLET} component={RestoreWalletScreen} />
      <Stack.Screen
        name={RESET_CONFIRMATION}
        component={ResetConfirmationScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
