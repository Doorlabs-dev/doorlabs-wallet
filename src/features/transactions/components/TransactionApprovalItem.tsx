import React from 'react';
import { Call } from 'starknet';
import { ShortAddress, Text } from '@components/ui';
import colors from '@styles/colors';
import { Row, Spacer } from '@components/layout';

type Props = {
  transaction: Call;
};

const TransactionApprovalItem = ({ transaction }: Props) => {
  return (
    <>
      <Row justifyContent="space-between" alignItems="center">
        <Text color={colors.white} size={16} weight={500}>
          Contract
        </Text>
        <ShortAddress
          size={16}
          color={colors.white}
          address={transaction.contractAddress}
        />
      </Row>
      <Spacer height={16} />
      <Row justifyContent="space-between" alignItems="center">
        <Text color={colors.white} size={16} weight={500}>
          Method
        </Text>
        <Text>{transaction.entrypoint}</Text>
      </Row>
      <Spacer height={16} />
      <Row justifyContent="space-between" alignItems="flex-start">
        <Text color={colors.white} size={16} weight={500}>
          Detail
        </Text>
        <Spacer width={200} height={70}>
          <Text>{transaction.calldata?.toString()}</Text>
        </Spacer>
      </Row>
    </>
  );
};

export default TransactionApprovalItem;
