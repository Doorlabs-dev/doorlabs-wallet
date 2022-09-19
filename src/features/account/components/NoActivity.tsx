import React from 'react';
import { Column } from '@components/layout';
import styled from 'styled-components/native';
import colors from '@styles/colors';
import { Text } from '@components/ui';

const Icon = styled.Image`
  width: 100px;
  height: 100px;
`;

const ICON_NO_ACTIVITY = require('@assets/images/icon_no_activity.png');

const NoActivity = () => {
  return (
    <Column alignItems="center">
      <Icon source={ICON_NO_ACTIVITY} />
      <Text size={16} lineHeight={24} color={colors.white}>
        You have no activities
      </Text>
    </Column>
  );
};

export default NoActivity;
