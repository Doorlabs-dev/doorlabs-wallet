import colors from '@styles/colors';
import React from 'react';
import { Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type Props = {
  children: React.ReactNode;
  extraHeight?: number;
};

const KeyboardScrollViewContainer = ({ children, extraHeight }: Props) => {
  return (
    <KeyboardAwareScrollView
      style={{ backgroundColor: colors.primary }}
      contentContainerStyle={{ flexGrow: 1 }}
      enableOnAndroid
      enableAutomaticScroll
      extraScrollHeight={Platform.OS == 'android' ? 20 : 50}
      extraHeight={extraHeight || 220}
    >
      {children}
    </KeyboardAwareScrollView>
  );
};

export default KeyboardScrollViewContainer;
