import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import useAppState from '../hooks/useAppState';
import OnboardingStack from './OnboardingStack';
import useAuthentication from '../features/auth/hooks/useAuthentication';
import SplashScreen from '../features/onboarding/screen/SplashScreen';
import AppDrawer from './AppDrawer';

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
