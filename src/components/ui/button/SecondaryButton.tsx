import { TouchableOpacity } from 'react-native';
import React from 'react';
import Text from '../Text';
import colors from '@styles/colors';
import styled from 'styled-components/native';

type Props = {
  title: string;
  onPress: () => void;
  color?: string;
};

const Button = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  padding: 12px 20px;
`;

const SecondaryButton = ({ title, onPress, color }: Props) => {
  return (
    <Button onPress={onPress} style={{ width: '100%' }}>
      <Text size={16} lineHeight={24} color={color || colors.blue}>
        {title}
      </Text>
    </Button>
  );
};

export default SecondaryButton;
