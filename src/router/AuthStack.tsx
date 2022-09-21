import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import ResetConfirmationScreen from '../features/recovery/screen/ResetConfirmationScreen';
import LoginScreen from '../features/auth/screen/LoginScreen';
import ScreenNames from './screenNames';
import colors from '@styles/colors';
import useHeaderTitle from '@hooks/useHeaderTitle';

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
  headerTitleAlign: 'left',
  headerTintColor: colors.white,
  animation: 'slide_from_right',
};

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultScreenOptions}>
      <Stack.Screen name={LOGIN} component={LoginScreen} />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: useHeaderTitle('Reset Wallet'),
        }}
        name={RESET_CONFIRMATION}
        component={ResetConfirmationScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
