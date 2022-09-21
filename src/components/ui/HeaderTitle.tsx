import { View } from 'react-native';
import React from 'react';
import Text from './Text';
import colors from '@styles/colors';

type Props = {};

const HeaderTitle = ({ title }: { title: string }) => {
  return (
    <View style={{ flex: 1 }}>
      <Text color={colors.white} size={24} lineHeight={36} weight={600}>
        {title}
      </Text>
    </View>
  );
};

export default HeaderTitle;
