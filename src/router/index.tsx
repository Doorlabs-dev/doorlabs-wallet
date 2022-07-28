import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import HomeTabs from './HomeTabs';
import useBiometrics from '../hooks/useBiometrics';
import useAppState from '../hooks/useAppState';

const AppNavigation = () => {
  const { biometricsRequired, setBiometricsRequired } = useBiometrics();
  useAppState({
    onAppActive: () => {
      setBiometricsRequired(true);
    },
    onAppBackground: () => {},
  });
  return (
    <NavigationContainer>
      {/* {biometricsRequired ? <AuthStack /> : <HomeTabs />} */}
      <HomeTabs />
    </NavigationContainer>
  );
};

export default AppNavigation;
