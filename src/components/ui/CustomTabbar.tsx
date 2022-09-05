import { Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../../styles';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Text from './Text';
import ScreenNames from '../../router/screenNames';
import IconToken from '@assets/svg/icon_token.svg';
import IconNft from '@assets/svg/icon_ntf.svg';
import IconActivity from '@assets/svg/icon_activity.svg';
import { Spacer } from '@components/layout';
import Reanimated, { SlideInDown, SlideOutDown } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const iconSize = {
  width: 24,
  height: 24,
};

const TabBarContainer = styled.View`
  background-color: ${colors.greyScale};
  width: ${width - 82}px;
  height: 74px;
  padding: 8px 21px;
  position: absolute;
  bottom: 34px;
  align-self: center;
  border-radius: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 0;
`;

const TabBarItemContainer = styled.View`
  width: 68px;
  height: 58px;
  padding: 18px 0px;
  justify-content: center;
  align-items: center;
`;

const Dot = styled.View`
  width: 4px;
  height: 4px;
  border-radius: 4px;
  background-color: ${colors.white};
`;

const { ACCOUNT_TOKENS, ACCOUNT_NFTS, ACCOUNT_ACTIVITY } = ScreenNames;
type IconNames = 'account-tokens-stack' | 'account-nfts' | 'account-activity';

type TabBarItemProps = {
  active?: boolean;
  label: string;
  iconName: IconNames;
  onPress: () => void;
};

const Icons = {
  [ACCOUNT_TOKENS]: IconToken,
  [ACCOUNT_NFTS]: IconNft,
  [ACCOUNT_ACTIVITY]: IconActivity,
};

const LABELS = {
  [ACCOUNT_TOKENS]: 'Tokens',
  [ACCOUNT_NFTS]: 'NFTs',
  [ACCOUNT_ACTIVITY]: 'Activity',
};

const TabBarItem = ({
  active = false,
  iconName,
  label,
  onPress,
}: TabBarItemProps) => {
  const Icon = Icons[iconName];
  const color = active ? colors.white : colors.lightGreyScale;
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <TabBarItemContainer>
        <Icon fill={color} {...iconSize} />
        <Spacer height={5} />
        <Text color={color}>{label}</Text>
        <Spacer height={5} />
        {active ? <Dot /> : <Spacer height={4} />}
      </TabBarItemContainer>
    </TouchableOpacity>
  );
};

const CustomTabBar = (props: BottomTabBarProps) => {
  return (
    <Reanimated.View
      entering={SlideInDown.duration(500)}
      exiting={SlideOutDown.duration(500)}
    >
      <TabBarContainer>
        {props.state.routes.map((route, index) => (
          <TabBarItem
            key={route.key}
            active={index == props.state.index}
            iconName={route.name as IconNames}
            label={LABELS[route.name]}
            onPress={() => props.navigation.navigate(route.name)}
          />
        ))}
      </TabBarContainer>
    </Reanimated.View>
  );
};

export default CustomTabBar;
