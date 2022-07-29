import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import HomeTabs from './HomeTabs';
import useBiometrics from '../hooks/useBiometrics';
import useAppState from '../hooks/useAppState';
import { Container } from '../components/layout';

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
      {/* <AuthStack /> */}
      <HomeTabs />
    </NavigationContainer>
  );
};

export default AppNavigation;
