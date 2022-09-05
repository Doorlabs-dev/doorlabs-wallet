import useScreenLayoutAnimation from '@hooks/useScreenLayoutAnimation';
import { NavigationContainer } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';
import useAuthentication from '../features/auth/hooks/useAuthentication';
import SplashScreen from '../features/onboarding/screen/SplashScreen';
import useAppState from '../hooks/useAppState';
import AppDrawer from './AppDrawer';
import AuthStack from './AuthStack';
import OnboardingStack from './OnboardingStack';

const AnimatedAppDrawer = useScreenLayoutAnimation(AppDrawer);
const AnimatedAuthStack = useScreenLayoutAnimation(AuthStack);

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
    let navigator;
    if (!isAccountAvailable) {
      navigator = <OnboardingStack />;
    } else {
      navigator = isAuthenticated ? (
        <AnimatedAppDrawer />
      ) : (
        <AnimatedAuthStack />
      );
    }

    return navigator;
  }, [isAccountAvailable, isAuthenticated]);

  if (isCheckingAccount) return <SplashScreen />;

  return <NavigationContainer>{renderNavigator()}</NavigationContainer>;
};

export default AppNavigation;
