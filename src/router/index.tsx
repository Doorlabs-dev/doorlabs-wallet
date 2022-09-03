import { NavigationContainer } from '@react-navigation/native';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import React, { useCallback, useEffect } from 'react';
import useAuthentication from '../features/auth/hooks/useAuthentication';
import SplashScreen from '../features/onboarding/screen/SplashScreen';
import useAppState from '../hooks/useAppState';
import AppDrawer from './AppDrawer';
import AuthStack from './AuthStack';
import OnboardingStack from './OnboardingStack';

const AppNavigation = () => {
  const {
    isCheckingAccount,
    isAccountAvailable,
    isAuthenticated,
    setIsAuthenticated,
    checkAccountAvailable,
  } = useAuthentication();

  useAppState({
    onAppActive: () => {
      setIsAuthenticated(false);
    },
    onAppBackground: () => {},
  });

  useEffect(() => {
    checkAccountAvailable();
  }, []);

  const renderNavigator = useCallback(() => {
    if (!isAccountAvailable) return <OnboardingStack />;

    return isAuthenticated ? <AppDrawer /> : <AuthStack />;
  }, [isAccountAvailable, isAuthenticated]);

  if (isCheckingAccount) return <SplashScreen />;

  return <NavigationContainer>{renderNavigator()}</NavigationContainer>;
};

export default AppNavigation;
