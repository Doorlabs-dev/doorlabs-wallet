import { View, Text, Platform } from 'react-native';
import React from 'react';
import Spacer from './Spacer';
import { useHeaderHeight } from '@react-navigation/elements';

type Props = {};

const AndroidHeaderFix = (props: Props) => {
  return null;
  // const height = useHeaderHeight();
  // return <Spacer height={Platform.OS === 'android' ? height : 0} />;
};

export default AndroidHeaderFix;
