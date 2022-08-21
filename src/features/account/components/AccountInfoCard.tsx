import { Dimensions } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import { ShortAddress, Text } from '@components/ui';
import { LinearGradient } from 'expo-linear-gradient';
import IconMore from '@assets/svg/icon_more.svg';
import { Row } from '@components/layout';

type Props = {};

const { width } = Dimensions.get('window');

const CardContainer = styled(LinearGradient)`
  width: ${width - 63}px;
  height: 156px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

const COLORS = ['#9CA2FF', '#252C90'];

const PositionedIcon = styled.View`
  position: absolute;
  top: 8px;
  bottom: 0px;
  right: -32px;
`;

const AccountInfoCard = (props: Props) => {
  return (
    <CardContainer start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={COLORS}>
      <Row justifyContent="center" alignItems="center">
        <Text size={20} lineHeight={30}>
          Account 2
        </Text>
        <PositionedIcon>
          <IconMore />
        </PositionedIcon>
      </Row>
      <Text size={28} lineHeight={38} weight={500}>
        $0.00
      </Text>
      <ShortAddress address="0x0206EeC09a5A758147FA91cD2A3C8F87eBe65467cE03fC4fc393b082D5F5D9d7" />
    </CardContainer>
  );
};

export default AccountInfoCard;
