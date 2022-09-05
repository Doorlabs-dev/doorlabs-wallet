import { SectionList } from 'react-native';
import React from 'react';
import { Container, Spacer } from '@components/layout';
import useAccountTransactions from '@features/transactions/hooks/useAccountTransactions';
import { useRecoilValue } from 'recoil';
import selectedAccountState from '../selected-account.state';
import TransactionItem from '@features/transactions/components/TransactionItem';
import { getTransactionsBySection } from '../utils/getTransactionsBySection';
import { Text } from '@components/ui';
import colors from '@styles/colors';
import AndroidHeaderFix from '@components/layout/AndroidHeaderFix';

type Props = {};

const AccountActivityScreen = (props: Props) => {
  const selectedAccount = useRecoilValue(selectedAccountState);
  const { sortedTransactions } = useAccountTransactions({
    account: selectedAccount,
  });

  const transactionsSections = getTransactionsBySection(sortedTransactions);

  return (
    <Container center={false}>
      <AndroidHeaderFix />
      <SectionList
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <Spacer height={16} />}
        renderItem={({ item: tx }) => (
          <TransactionItem key={tx.hash} transaction={tx} />
        )}
        renderSectionHeader={({ section }) => (
          <>
            <Spacer height={16} />
            <Text color={colors.white} size={16} lineHeight={24} weight={500}>
              {section.title}
            </Text>
            <Spacer height={16} />
          </>
        )}
        stickyHeaderHiddenOnScroll={false}
        keyExtractor={(tx) => tx.hash}
        sections={transactionsSections}
        ListFooterComponent={() => <Spacer height={100} />}
      />
    </Container>
  );
};

export default AccountActivityScreen;
