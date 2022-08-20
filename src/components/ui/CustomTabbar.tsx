import { Dimensions } from 'react-native';
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

type TabBarItemProps = {
  active?: boolean;
  label: string;
  iconName: 'account-tokens' | 'account-nfts' | 'account-activity';
  onPress: () => void;
};

const Icons = {
  'account-tokens': IconToken,
  'account-nfts': IconNft,
  'account-activity': IconActivity,
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
    <TabBarItemContainer>
      <Icon fill={color} {...iconSize} />
      <Spacer height={5} />
      <Text color={color}>{label}</Text>
      <Spacer height={5} />
      {active ? <Dot /> : <Spacer height={4} />}
    </TabBarItemContainer>
  );
};

const CustomTabBar = (props: BottomTabBarProps) => {
  return (
    <TabBarContainer>
      <TabBarItem
        active
        iconName="account-tokens"
        label="Tokens"
        onPress={() => {}}
      />
      <TabBarItem iconName="account-nfts" label="NFTs" onPress={() => {}} />
      <TabBarItem
        iconName="account-activity"
        label="Activity"
        onPress={() => {}}
      />
    </TabBarContainer>
  );
};

export default CustomTabBar;
