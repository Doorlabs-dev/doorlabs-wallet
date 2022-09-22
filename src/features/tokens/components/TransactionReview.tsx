import { View } from 'react-native';
import React from 'react';
import { Column, Row, Spacer } from '@components/layout';
import { ShortAddress, Text } from '@components/ui';
import {
  SendNFTTransactionReview,
  SendTokenTransactionReview,
} from '@features/transactions/transactionReview.type';
import colors from '@styles/colors';

type Props = {
  transactionReview: SendTokenTransactionReview | SendNFTTransactionReview;
};

const TransactionReview = ({ transactionReview }: Props) => {
  if (transactionReview.type === 'send') {
    const { token, to, amount } = transactionReview;
    return (
      <Column>
        <Row justifyContent="space-between" alignItems="center">
          <Text size={16} color={colors.white} weight={500}>
            Send
          </Text>
          <Text size={16} color={colors.white}>
            {amount} {token?.symbol}
          </Text>
        </Row>
        <Spacer height={16} />
        <Row justifyContent="space-between" alignItems="center">
          <Text size={16} color={colors.white} weight={500}>
            To
          </Text>
          <ShortAddress size={16} address={to} color={colors.white} />
        </Row>
      </Column>
    );
  }

  const { to, tokenId } = transactionReview;

  return (
    <Column>
      <Row justifyContent="space-between" alignItems="center">
        <Text size={16} color={colors.white} weight={500}>
          Token ID
        </Text>
        <Text size={16} color={colors.white}>
          {tokenId}
        </Text>
      </Row>
      <Spacer height={16} />
      <Row justifyContent="space-between" alignItems="center">
        <Text size={16} color={colors.white}>
          To
        </Text>
        <ShortAddress size={16} address={to} color={colors.white} />
      </Row>
    </Column>
  );
};

export default TransactionReview;
