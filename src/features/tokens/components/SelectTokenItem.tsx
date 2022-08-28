import React from 'react';
import { Row, Spacer } from '@components/layout';
import { Text } from '@components/ui';
import styled from 'styled-components/native';
import colors from '@styles/colors';
import IconEther from '@assets/svg/icon_ether.svg';
import { Token } from '@services/tokens/token.model';
import { Account } from '@features/account/account.model';
import formatEther from '@utils/formatEther';
import { View } from 'react-native';
import { useBalance } from '../hooks/useBalance';

const ItemContainer = styled.TouchableOpacity`
  background-color: ${colors.greyScale};
`;

const IconImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

type Props = {
  token?: Token;
  account?: Account;
  selected?: boolean;
  onPress?: () => void;
};

const SelectTokenItem = ({
  token,
  account,
  onPress,
  selected = false,
}: Props) => {
  const { data: tokenBalance } = useBalance(token?.address, account);

  return (
    <ItemContainer onPress={() => onPress?.()} activeOpacity={0.8}>
      <Row alignItems="center" justifyContent="space-between">
        <Row alignItems="center">
          {token?.symbol === 'ETH' ? (
            <IconEther />
          ) : token?.image ? (
            <IconImage source={{ uri: token?.image }} />
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
        {/* {selected ? <IconRadioSelected /> : <IconRadio />} */}
      </Row>
    </ItemContainer>
  );
};

export default SelectTokenItem;
