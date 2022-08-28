import { SectionList } from 'react-native';
import React from 'react';
import { Container, SafeArea, Spacer } from '@components/layout';
import useAccountTransactions from '@features/transactions/hooks/useAccountTransactions';
import { useRecoilValue } from 'recoil';
import selectedAccountState from '../selected-account.state';
import TransactionItem from '@features/transactions/components/TransactionItem';
import { FlatList } from 'react-native-gesture-handler';
import { forOwn, groupBy } from 'lodash-es';
import { getTransactionsBySection } from '../utils/getTransactionsBySection';
import { Text } from '@components/ui';
import colors from '@styles/colors';

type Props = {};

const AccountActivityScreen = (props: Props) => {
  const selectedAccount = useRecoilValue(selectedAccountState);
  const { sortedTransactions } = useAccountTransactions({
    account: selectedAccount,
  });

  const transactionsSections = getTransactionsBySection(sortedTransactions);

  return (
    <SafeArea>
      <Container center={false}>
        <SectionList
          ItemSeparatorComponent={() => <Spacer height={16} />}
          contentContainerStyle={{ flex: 1 }}
          renderItem={({ item: tx }) => (
            <TransactionItem key={tx.hash} transaction={tx} />
          )}
          renderSectionHeader={({ section }) => (
            <>
              <Text color={colors.white} size={16} lineHeight={24} weight={500}>
                {section.title}
              </Text>
              <Spacer height={16} />
            </>
          )}
          keyExtractor={(tx) => tx.hash}
          sections={transactionsSections}
        />
      </Container>
    </SafeArea>
  );
};

export default AccountActivityScreen;
