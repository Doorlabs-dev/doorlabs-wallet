import { Dimensions } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../../styles';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Text from './Text';
import ScreenNames from '../../router/screenNames';

type Props = {};

const { width, height } = Dimensions.get('window');

const TabBarContainer = styled.View`
  background-color: ${colors.greyScale};
  width: ${width - 48}px;
  height: 74px;
  position: absolute;
  bottom: 34px;
  align-self: center;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

const CustomTabBar = (props: BottomTabBarProps) => {
  return (
    <TabBarContainer>
      {props.state.routes.map((route) => (
        <Text key={route.key} color={colors.white}>
          {route.name == ScreenNames.ACCOUNT_TOKENS ? 'Tokens' : ''}
        </Text>
      ))}
    </TabBarContainer>
  );
};

export default CustomTabBar;
