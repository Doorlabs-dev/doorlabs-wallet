import InputSeedPhraseScreen from "@features/recovery/screen/InputSeedPhraseScreen";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import React from "react";
import NewWalletScreen from "../features/onboarding/screen/NewWalletScreen";
import WelcomeScreen from "../features/onboarding/screen/WelcomeScreen";
import RestoreWalletScreen from "../features/recovery/screen/RestoreWalletScreen";
import ScreenNames from "./screenNames";
const { WELCOME, CREATE_WALLET_PASSWORD, INPUT_PHRASE, RESTORE_WALLET } =
  ScreenNames;

const Stack = createNativeStackNavigator();

export const defaultScreenOptions: NativeStackNavigationOptions = {
  headerBackTitleVisible: false,
  gestureEnabled: true,
  headerTransparent: true,
  headerShadowVisible: false,
  headerShown: false,
  headerTitleStyle: {
    color: "white",
    fontSize: 24,
  },
  headerTitleAlign: "left",
};

const OnboardingStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name={WELCOME} component={WelcomeScreen} />
      <Stack.Screen name={CREATE_WALLET_PASSWORD} component={NewWalletScreen} />
      <Stack.Screen
        name={INPUT_PHRASE}
        component={InputSeedPhraseScreen}
        options={{
          headerShown: true,
          headerTitle: "Restore wallet",
        }}
      />
      <Stack.Screen name={RESTORE_WALLET} component={RestoreWalletScreen} />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
