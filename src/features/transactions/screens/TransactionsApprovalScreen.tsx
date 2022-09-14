import React, { useState } from 'react';
import { Container, Row, Spacer } from '@components/layout';
import { Call } from 'starknet';
import { useRecoilValue } from 'recoil';
import selectedAccountState from '@features/account/selected-account.state';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { isArray } from 'lodash-es';
import colors from '@styles/colors';
import TransactionApprovalItem from '../components/TransactionApprovalItem';
import styled from 'styled-components/native';
import AccountReviewInfo from '@features/account/components/AccountReviewInfo';
import OutlinedButton from '@components/ui/button/OutlinedButton';
import { PrimaryButton } from '@components/ui';
import { ScreenNavigationProps } from '@router/navigation-props';
import { executeTransaction } from '@services/transaction/transactionExecution';

type Params = {
  'transaction-approval': {
    transactions: Call | Call[];
  };
};

const Section = styled.View`
  background-color: ${colors.greyScale800};
  border-radius: 12px;
  padding: 16px;
`;

const Flex = styled.View`
  flex: 1;
`;

const TransactionsApprovalScreen = () => {
  const selectedAccount = useRecoilValue(selectedAccountState);
  const route = useRoute<RouteProp<Params, 'transaction-approval'>>();
  const transactions = route?.params?.transactions || null;
  const navigation = useNavigation<ScreenNavigationProps<any>>();
  const [executing, setExecuting] = useState(false);

  const onReject = () => {
    navigation.goBack();
  };

  const onApprove = async () => {
    try {
      setExecuting(true);
      await executeTransaction({
        account: selectedAccount!,
        transactions: transactions,
      });
      setExecuting(false);
      navigation.goBack();
    } catch (error) {
      console.log(error);
      setExecuting(false);
    }
  };

  if (!transactions) return <Container />;

  return (
    <Container center={false}>
      <Spacer height={20} />
      <Section>
        <AccountReviewInfo account={selectedAccount} />
      </Section>
      <Spacer height={16} />
      {isArray(transactions) ? (
        transactions.map((tx, index) => (
          <React.Fragment key={index}>
            <Section>
              <TransactionApprovalItem transaction={tx} />
            </Section>
            <Spacer height={16} />
          </React.Fragment>
        ))
      ) : (
        <>
          <Section>
            <TransactionApprovalItem transaction={transactions} />
          </Section>
          <Spacer height={16} />
        </>
      )}
      <Row>
        <Flex>
          <OutlinedButton label="Reject" onPress={onReject} />
        </Flex>
        <Spacer width={16} />
        <Flex>
          <PrimaryButton
            loading={executing}
            label="Approve"
            onPress={onApprove}
          />
        </Flex>
      </Row>
    </Container>
  );
};

export default TransactionsApprovalScreen;
