import { ActivityIndicator } from 'react-native';
import React from 'react';
import styled, { css } from 'styled-components/native';
import colors from '@styles/colors';
import Text from '../Text';

type Props = {
  label: string;
  onPress: () => void;
  loading?: boolean;
  textColor?: string;
  disabled?: boolean;
};

const Container = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  ${(props: { color: string }) => css`
    background-color: ${props.color || colors.buttonPrimary};
  `}
`;

const PrimaryButton = ({
  label,
  onPress,
  loading = false,
  textColor,
  disabled = false,
}: Props) => {
  return (
    <Container
      disabled={loading || disabled}
      activeOpacity={0.8}
      onPress={onPress}
      color={disabled ? colors.greyScale800 : colors.buttonPrimary}
    >
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

export default PrimaryButton;
