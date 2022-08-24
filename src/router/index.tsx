import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
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

  if (isCheckingAccount) return <SplashScreen />;

  return (
    <NavigationContainer>
      {isAccountAvailable ? (
        isAuthenticated ? (
          <AppDrawer />
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
