import { ActivityIndicator, TouchableOpacity } from 'react-native';
import React from 'react';
import styled, { css } from 'styled-components/native';
import colors from '@styles/colors';
import Text from '../Text';
import { Column, Spacer } from '@components/layout';
import Animated, { ZoomIn, ZoomOut } from 'react-native-reanimated';

type StyleProps = {
  size?: number;
  color: string;
};

const RoundView = styled.View`
  ${({ size = 40, color }: StyleProps) => css`
    width: ${size}px;
    height: ${size}px;
    border-radius: 20px;
    background-color: ${color || colors.greyScale};
    justify-content: center;
    align-items: center;
  `}
`;

const Center = styled.View`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
`;

type Props = {
  size?: number;
  icon: JSX.Element;
  title?: string;
  color?: string;
  onPress?: () => void;
  loading?: boolean;
};

const RoundButton = ({
  size,
  icon,
  title,
  color,
  onPress,
  loading = false,
}: Props) => {
  if (loading) {
    return (
      <Center width={40} height={40}>
        <ActivityIndicator color={colors.white} size="small" />
      </Center>
    );
  }

  return (
    <Animated.View entering={ZoomIn} exiting={ZoomOut}>
      <Column alignItems="center">
        <TouchableOpacity
          disabled={loading}
          onPress={() => onPress?.()}
          activeOpacity={0.8}
        >
          <RoundView color={color} size={size}>
            {icon}
          </RoundView>
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
    </Animated.View>
  );
};

export default RoundButton;
