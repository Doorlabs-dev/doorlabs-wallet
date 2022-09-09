import { ActivityIndicator } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import colors from '@styles/colors';
import Text from '../Text';

type Props = {
  label: string;
  onPress: () => void;
  loading?: boolean;
  textColor?: string;
};

const Container = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: 8px;
  border-width: 1px;
  border-color: white;
`;

const OutlinedButton = ({
  label,
  onPress,
  loading = false,
  textColor,
}: Props) => {
  return (
    <Container disabled={loading} activeOpacity={0.8} onPress={onPress}>
      {loading ? (
        <ActivityIndicator color={colors.white} />
      ) : (
        <Text color={textColor} size={16} lineHeight={24} weight={500}>
          {label}
        </Text>
      )}
    </Container>
  );
};

export default OutlinedButton;
