import React from 'react';
import { Dimensions, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { ShortAddress, Text } from '@components/ui';
import { LinearGradient } from 'expo-linear-gradient';
import IconMore from '@assets/svg/icon_more.svg';
import { Row } from '@components/layout';

type Props = {
  address: string;
  onPress: () => void;
};

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

const AccountInfoCard = ({ address, onPress }: Props) => {
  return (
    <CardContainer start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={COLORS}>
      <TouchableOpacity onPress={onPress}>
        <Row justifyContent="center" alignItems="center">
          <Text size={20} lineHeight={30}>
            Account 1
          </Text>
          <PositionedIcon>
            <IconMore />
          </PositionedIcon>
        </Row>
      </TouchableOpacity>
      <Text size={28} lineHeight={38} weight={500}>
        $0.00
      </Text>
      <ShortAddress address={address} />
    </CardContainer>
  );
};

export default AccountInfoCard;
