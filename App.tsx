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
