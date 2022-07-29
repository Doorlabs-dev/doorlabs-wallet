import 'node-libs-react-native/globals';
import 'react-native-polyfill-globals/auto';
import 'react-native-get-random-values';
import './shim';

import React, { Fragment } from 'react';
import { RecoilRoot } from 'recoil';
import AppNavigation from './src/router';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  return (
    <Fragment>
      <StatusBar style="light" />
      <RecoilRoot>
        <AppNavigation />
      </RecoilRoot>
    </Fragment>
  );
};

export default App;
