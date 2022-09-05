import colors from '@styles/colors';
import React from 'react';
import Reanimated, { FadeIn, FadeOut } from 'react-native-reanimated';

const useScreenLayoutAnimation = (component: (props: any) => JSX.Element) => {
  const Component = component;

  return (props: any) => (
    <Reanimated.View
      style={{ flex: 1, backgroundColor: colors.primary }}
      entering={FadeIn.duration(500)}
      exiting={FadeOut.duration(500)}
    >
      <Component {...props} />
    </Reanimated.View>
  );
};

export default useScreenLayoutAnimation;
