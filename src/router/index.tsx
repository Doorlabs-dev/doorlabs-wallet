import useConnectListener from '@features/walletconnect/useConnectListener';
import useScreenLayoutAnimation from '@hooks/useScreenLayoutAnimation';
import { NavigationContainer } from '@react-navigation/native';
import React, { useCallback, useEffect, useMemo } from 'react';
import useAuthentication from '../features/auth/hooks/useAuthentication';
import SplashScreen from '../features/onboarding/screen/SplashScreen';
import useAppState from '../hooks/useAppState';
import AccountStack from './account-navigation/AccountStack';
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

  useConnectListener();

  useEffect(() => {
    checkAccountAvailable();
  }, []);

  const MemoAuthStack = useMemo(() => AuthStack, []);

  const MemoAppDrawer = useMemo(() => AppDrawer, []);

  const Navigator = useMemo(() => {
    if (!isAccountAvailable) return OnboardingStack;

    return isAuthenticated
      ? useScreenLayoutAnimation(MemoAppDrawer)
      : useScreenLayoutAnimation(MemoAuthStack);
  }, [isAccountAvailable, isAuthenticated]);

  if (isCheckingAccount) return <SplashScreen />;

  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
};

export default AppNavigation;
