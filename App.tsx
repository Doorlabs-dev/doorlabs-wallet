import React, { Fragment, useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import AppNavigation from './src/router';
import { StatusBar } from 'expo-status-bar';
import { RootSiblingParent } from 'react-native-root-siblings';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaProvider>
      <RootSiblingParent>
        <Fragment>
          <StatusBar style="light" />
          <RecoilRoot>
            <AppNavigation />
          </RecoilRoot>
        </Fragment>
      </RootSiblingParent>
    </SafeAreaProvider>
  );
};

export default App;
