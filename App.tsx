import 'node-libs-react-native/globals';
import 'react-native-polyfill-globals/auto';
import 'react-native-get-random-values';
import './shim';

import React from 'react';
import { RecoilRoot } from 'recoil';
import AppNavigation from './src/router';

const App = () => {
  return (
    <RecoilRoot>
      <AppNavigation />
    </RecoilRoot>
  );
};

export default App;
