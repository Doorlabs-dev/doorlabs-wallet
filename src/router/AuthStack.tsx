import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";

import InputSeedPhraseScreen from "../features/recovery/screen/InputSeedPhraseScreen";
import RestoreWalletScreen from "../features/recovery/screen/RestoreWalletScreen";
import ResetConfirmationScreen from "../features/recovery/screen/ResetConfirmationScreen";
import LoginScreen from "../features/auth/screen/LoginScreen";
import ScreenNames from "./screenNames";

const { LOGIN, INPUT_PHRASE, RESTORE_WALLET, RESET_CONFIRMATION } = ScreenNames;

const Stack = createNativeStackNavigator();

const defaultScreenOptions: NativeStackNavigationOptions = {
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

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name={LOGIN} component={LoginScreen} />
      <Stack.Screen
        name={INPUT_PHRASE}
        component={InputSeedPhraseScreen}
        options={{
          headerShown: true,
          headerTitle: "Restore wallet",
        }}
      />
      <Stack.Screen name={RESTORE_WALLET} component={RestoreWalletScreen} />
      <Stack.Screen
        name={RESET_CONFIRMATION}
        component={ResetConfirmationScreen}
        options={{ headerShown: true, headerTitle: "Reset wallet" }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
