import React, { Fragment } from 'react';
import { RecoilRoot } from 'recoil';
import AppNavigation from './src/router';
import { StatusBar } from 'expo-status-bar';
import { RootSiblingParent } from 'react-native-root-siblings';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
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
