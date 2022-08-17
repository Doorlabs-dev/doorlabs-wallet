import React, { Fragment } from 'react';
import { RecoilRoot } from 'recoil';
import AppNavigation from './src/router';
import { StatusBar } from 'expo-status-bar';
import { RootSiblingParent } from 'react-native-root-siblings';

const App = () => {
  return (
    <RootSiblingParent>
      <Fragment>
        <StatusBar style="light" />
        <RecoilRoot>
          <AppNavigation />
        </RecoilRoot>
      </Fragment>
    </RootSiblingParent>
  );
};

export default App;
