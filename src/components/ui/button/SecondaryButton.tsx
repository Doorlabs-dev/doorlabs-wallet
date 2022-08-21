import { TouchableOpacity } from 'react-native';
import React from 'react';
import Text from '../Text';
import colors from '@styles/colors';
import styled from 'styled-components/native';

type Props = {
  title: string;
};

const Button = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  padding: 12px 20px;
`;

const SecondaryButton = ({ title }: Props) => {
  return (
    <Button style={{ width: '100%' }}>
      <Text size={16} lineHeight={24} color={colors.blue}>
        {title}
      </Text>
    </Button>
  );
};

export default SecondaryButton;
