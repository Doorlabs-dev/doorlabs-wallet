import { ActivityIndicator, View } from 'react-native';
import React, { useMemo } from 'react';
import { Call } from 'starknet';
import { getTokenInfo } from '@services/tokens';
import { Account } from '@features/account/account.model';
import { useBalance } from '../hooks/useBalance';
import useFeeEstimation from '../hooks/useFeeEstimation';
import { Text } from '@components/ui';
import { Row, Spacer } from '@components/layout';
import colors from '@styles/colors';
import { utils } from 'ethers';
import styled from 'styled-components/native';

const Container = styled.View`
  background-color: ${colors.greyScale800};
  border-radius: 12px;
  padding: 16px;
`;

type Props = {
  account?: Account;
  call: Call | Call[];
  render?: (isEnough: boolean) => React.ReactNode;
};

const FeeEstimation = ({ account, call, render }: Props) => {
  const feeToken = getTokenInfo('ETH', account?.networkId);

  const { data: balance, error } = useBalance(feeToken?.address, account);
  // fee as hex
  const {
    fee,
    error: feeError,
    isValidating: isFetchingFee,
  } = useFeeEstimation(account, call);

  const isEnough = useMemo(() => {
    if (!!balance && !!fee) {
      return balance.gte(fee);
    }
    return false;
  }, [balance, fee]);

  return (
    <>
      <Container>
        <Row alignItems="center" justifyContent="space-between">
          <View>
            <Text size={16} color={colors.white}>
              Network fee
            </Text>
          </View>
          {isFetchingFee ? (
            <ActivityIndicator size="small" color={colors.white} />
          ) : (
            <Text size={16} color={colors.white}>
              {utils.formatEther(fee || 0)} {feeToken?.symbol}
            </Text>
          )}
        </Row>
        {!isEnough && !isFetchingFee && (
          <>
            <Spacer height={8} />
            <Text color={colors.red}>Not enough ETH for transaction</Text>
          </>
        )}
      </Container>
      {render?.(isEnough && !isFetchingFee)}
    </>
  );
};

export default FeeEstimation;
