import SecureWalletScreen from '@features/onboarding/screen/SecureWalletScreen';
import InputSeedPhraseScreen from '@features/recovery/screen/InputSeedPhraseScreen';
import VerifySeedPhraseScreen from '@features/recovery/screen/VerifySeedPhraseScreen';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import colors from '@styles/colors';
import React from 'react';
import NewWalletScreen from '../features/onboarding/screen/NewWalletScreen';
import WelcomeScreen from '../features/onboarding/screen/WelcomeScreen';
import RestoreWalletScreen from '../features/recovery/screen/RestoreWalletScreen';
import ScreenNames from './screenNames';
const {
  WELCOME,
  CREATE_WALLET_PASSWORD,
  SECURE_WALLET,
  INPUT_PHRASE,
  RESTORE_WALLET,
  RECOVERY_VERIFY_PHRASE,
} = ScreenNames;

const Stack = createNativeStackNavigator();

export const defaultScreenOptions: NativeStackNavigationOptions = {
  headerBackTitleVisible: false,
  gestureEnabled: false,
  headerShadowVisible: false,
  headerShown: false,
  headerTitleStyle: {
    color: colors.white,
    fontSize: 24,
  },
  headerTintColor: colors.white,
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTitleAlign: 'left',
};

const OnboardingStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name={WELCOME} component={WelcomeScreen} />
      <Stack.Screen
        options={{
          headerShown: true,
          title: '',
        }}
        name={CREATE_WALLET_PASSWORD}
        component={NewWalletScreen}
      />
      <Stack.Screen name={SECURE_WALLET} component={SecureWalletScreen} />
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'Show Recovery Phrase',
        }}
        name={RECOVERY_VERIFY_PHRASE}
        component={VerifySeedPhraseScreen}
      />
      <Stack.Screen
        name={INPUT_PHRASE}
        component={InputSeedPhraseScreen}
        options={{
          headerShown: true,
          headerTitle: 'Restore wallet',
        }}
      />
      <Stack.Screen name={RESTORE_WALLET} component={RestoreWalletScreen} />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
