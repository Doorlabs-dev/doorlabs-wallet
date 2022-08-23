import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import styled, { css } from 'styled-components/native';
import colors from '@styles/colors';
import Text from '../Text';
import { Column, Container, Spacer } from '@components/layout';

type StyleProps = {
  size?: number;
};

const RoundView = styled.View`
  ${({ size = 40 }: StyleProps) => css`
    width: ${size}px;
    height: ${size}px;
    border-radius: 20px;
    background-color: ${colors.greyScale};
    justify-content: center;
    align-items: center;
  `}
`;

type Props = {
  size?: number;
  icon: JSX.Element;
  title?: string;
  onPress?: () => void;
};

const RoundButton = ({ size, icon, title, onPress }: Props) => {
  return (
    <Column alignItems="center">
      <TouchableOpacity onPress={() => onPress?.()} activeOpacity={0.8}>
        <RoundView size={size}>{icon}</RoundView>
      </TouchableOpacity>
      {!!title && (
        <>
          <Spacer height={8} />
          <Text size={16} lineHeight={24}>
            {title}
          </Text>
        </>
      )}
    </Column>
  );
};

export default RoundButton;
