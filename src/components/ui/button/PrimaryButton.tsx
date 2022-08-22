import { TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import colors from '@styles/colors';
import Text from '../Text';

type Props = {
  label: string;
  onPress: () => void;
};

const { width } = Dimensions.get('window');

const Container = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.buttonPrimary};
  border-radius: 8px;
`;

const PrimaryButton = ({ label, onPress }: Props) => {
  return (
    <Container activeOpacity={0.8} onPress={onPress}>
      <Text size={16} lineHeight={24} weight={500}>
        {label}
      </Text>
    </Container>
  );
};

export default PrimaryButton;
