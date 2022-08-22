import React from 'react';
import styled from 'styled-components/native';
import { Account } from '../account.model';
import { DefaultAvatar, Text, Title } from '../../../components/ui';
import { Row, Spacer } from '../../../components/layout';
import useAccounts from '../hooks/useAccounts';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProps } from '../../../router/navigation-props';
import { TouchableOpacity } from 'react-native';

type Props = {
  account: Account;
};

const AccountItemContainer = styled.View`
  border-radius: 8px;
  width: 90%;
  padding: 16px;
`;

const AccountItem = ({ account }: Props) => {
  const address = account.address;
  const { selectAccount } = useAccounts();

  const onSelectAccount = async () => {
    await selectAccount(account);
  };

  return (
    <AccountItemContainer>
      <Row>
        <DefaultAvatar />
        <Spacer width={16} />
        <TouchableOpacity onPress={onSelectAccount} activeOpacity={0.8}>
          <Title size={20}>Account 1</Title>
          <Spacer height={8} />
          <Text>
            {address.substring(0, 6)} ...{' '}
            {address.substring(address.length - 4)}
          </Text>
        </TouchableOpacity>
      </Row>
    </AccountItemContainer>
  );
};

export default AccountItem;
