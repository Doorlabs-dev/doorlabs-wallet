import { Dimensions, Image, View } from 'react-native';
import React from 'react';
import { Row, Spacer } from '@components/layout';
import { Text } from '@components/ui';
import styled from 'styled-components/native';
import colors from '@styles/colors';
import IconEther from '@assets/svg/icon_ether.svg';
import { useBalance } from '@features/account/hooks/useSelectedAccount';
import { Token } from '@services/tokens/token.model';
import { Account } from '@features/account/account.model';
import formatEther from '@utils/formatEther';

const { width } = Dimensions.get('window');

const ItemContainer = styled.View`
  width: ${width - 32}px;
  background-color: ${colors.greyScale};
  padding: 28px 16px;
  border-radius: 12px;
`;

type Props = {
  token?: Token;
  account?: Account;
};

const TokenItem = ({ token, account }: Props) => {
  const { data: tokenBalance, error } = useBalance(token?.address, account);
  console.log(error);
  return (
    <ItemContainer>
      <Row alignItems="center" justifyContent="space-between">
        <Row alignItems="center">
          {token?.symbol === 'ETH' ? (
            <IconEther />
          ) : token?.image ? (
            <Image source={{ uri: token?.image }} />
          ) : null}
          <Spacer width={16} />
          <View>
            <Text
              color={colors.whiteGrey}
              size={16}
              weight={400}
              lineHeight={24}
            >
              {token?.name}
            </Text>
            <Text color={colors.white} size={16} weight={500} lineHeight={24}>
              {formatEther(tokenBalance || 0)} {token?.symbol}
            </Text>
          </View>
        </Row>
        {/* <Text size={18} lineHeight={28} weight={500}>
          $0.0
        </Text> */}
      </Row>
    </ItemContainer>
  );
};

export default TokenItem;
