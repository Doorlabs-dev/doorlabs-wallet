import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import useAppState from '../hooks/useAppState';
import OnboardingStack from './OnboardingStack';
import useAuthentication from '../hooks/useAuthentication';
import { SplashScreen } from '../screens/onboarding';
import MainDrawer from './MainDrawer';

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

  if (isCheckingAccount) return <SplashScreen />;

  return (
    <NavigationContainer>
      {isAccountAvailable ? (
        isAuthenticated ? (
          <MainDrawer />
        ) : (
          <AuthStack />
        )
      ) : (
        <OnboardingStack />
      )}
    </NavigationContainer>
  );
};

export default AppNavigation;
