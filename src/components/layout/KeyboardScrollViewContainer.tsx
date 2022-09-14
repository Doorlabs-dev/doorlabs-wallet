import React from 'react';
import colors from '@styles/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

type Props = {
  children: React.ReactNode;
  extraHeight?: number;
  extraScrollHeight?: number;
};

const KeyboardScrollViewContainer = ({
  children,
  extraHeight,
  extraScrollHeight = 50,
}: Props) => {
  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="handled"
      style={{ backgroundColor: colors.primary }}
      contentContainerStyle={{ flexGrow: 1 }}
      enableOnAndroid
      enableAutomaticScroll
      extraScrollHeight={extraScrollHeight}
      extraHeight={extraHeight || 220}
    >
      {children}
    </KeyboardAwareScrollView>
  );
};

export default KeyboardScrollViewContainer;
