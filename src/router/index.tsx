import useConnectListener from '@features/walletconnect/useConnectListener';
import useScreenLayoutAnimation from '@hooks/useScreenLayoutAnimation';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useMemo } from 'react';
import useAuthentication from '../features/auth/hooks/useAuthentication';
import SplashScreen from '../features/onboarding/screen/SplashScreen';
import MainStack from './MainStack';
import AuthStack from './AuthStack';
import OnboardingStack from './OnboardingStack';
import useSession from '@hooks/useSession';

const AppNavigation = () => {
  const {
    isCheckingAccount,
    isAccountAvailable,
    isAuthenticated,

    checkAccountAvailable,
  } = useAuthentication();

  useSession();
  useConnectListener();

  useEffect(() => {
    checkAccountAvailable();
  }, []);

  const MemoAuthStack = useMemo(() => AuthStack, []);

  const MemoMainStack = useMemo(() => MainStack, []);

  const Navigator = useMemo(() => {
    if (!isAccountAvailable) return useScreenLayoutAnimation(OnboardingStack);

    return isAuthenticated
      ? useScreenLayoutAnimation(MemoMainStack)
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
