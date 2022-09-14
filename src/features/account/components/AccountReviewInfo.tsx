import { Column, Row, Spacer } from '@components/layout';
import { ShortAddress, Text } from '@components/ui';
import colors from '@styles/colors';
import generateAccountName from '@utils/generateAccountName';
import React from 'react';
import { Account } from '../account.model';

type Props = {
  account?: Account;
};

const AccountReviewInfo = ({ account }: Props) => {
  return (
    <>
      <Row justifyContent="space-between">
        <Text color={colors.white} size={16} weight={500}>
          Account
        </Text>
        <Column alignItems="flex-end">
          <Text size={16}>{generateAccountName(account).name}</Text>
          <ShortAddress
            size={16}
            color={colors.white}
            address={account?.address || ''}
          />
        </Column>
      </Row>
      <Spacer height={16} />
      <Row justifyContent="space-between">
        <Text color={colors.white} size={16} weight={500}>
          Network
        </Text>
        <Text>{account?.network.name}</Text>
      </Row>
    </>
  );
};

export default AccountReviewInfo;
