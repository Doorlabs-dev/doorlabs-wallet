import { View } from 'react-native';
import React from 'react';
import { Transaction } from '@services/transaction/transaction.type';
import { Text } from '@components/ui';
import styled from 'styled-components/native';
import colors from '@styles/colors';
import { Row, Spacer } from '@components/layout';
import IconTransactionDeploy from '@assets/svg/transaction/icon_transaction_deploy.svg';
import IconTransactionTransfer from '@assets/svg/transaction/icon_transaction_transfer.svg';

type Props = {
  transaction: Transaction;
};

const IconByType = {
  deploy: IconTransactionDeploy,
  transfer: IconTransactionTransfer,
};

const Container = styled.View`
  width: 100%;
  background-color: ${colors.greyScale700};
  padding: 24px 16px;
  border-radius: 12px;
`;

const TransactionItem = ({ transaction }: Props) => {
  const Icon = transaction.meta?.type
    ? IconByType[transaction.meta?.type]
    : IconTransactionDeploy;

  return (
    <Container>
      <Row alignItems="center">
        <Icon />
        <Spacer width={16} />
        <View>
          <Text color={colors.white} size={16} weight={600}>
            {transaction.meta?.title ?? 'Transaction'}
          </Text>
          {transaction?.meta?.subTitle ? (
            <Text
              color={colors.greyScale300}
              size={16}
              lineHeight={24}
              weight={400}
            >
              {transaction.meta?.subTitle ?? ''}
            </Text>
          ) : (
            <Text
              color={colors.greyScale300}
              size={16}
              lineHeight={24}
              weight={400}
            >
              {new Date(transaction.timestamp * 1000).toDateString()}
            </Text>
          )}
        </View>
      </Row>
    </Container>
  );
};

export default TransactionItem;
