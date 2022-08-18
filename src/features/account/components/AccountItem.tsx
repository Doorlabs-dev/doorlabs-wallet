import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../../../styles';
import { Account } from '../account.model';
import { Text, Title } from '../../../components/ui';
import { Spacer } from '../../../components/layout';
import useAccounts from '../hooks/useAccounts';
import { StackActions, useNavigation } from '@react-navigation/native';
import { ScreenNavigationProps } from '../../../router/navigation-props';
import { TouchableOpacity } from 'react-native';
import ScreenNames from '../../../router/screenNames';

type Props = {
  account: Account;
};

const AccountItemContainer = styled.View`
  background-color: ${colors.greyScale};
  border-radius: 8px;
  width: 90%;
  padding: 16px;
`;

const AccountItem = ({ account }: Props) => {
  const address = account.address;
  const { selectAccount } = useAccounts();
  const navigation = useNavigation<ScreenNavigationProps<any>>();

  const onSelectAccount = async () => {
    await selectAccount(account);
    setTimeout(() => {
      navigation.dispatch(StackActions.replace(ScreenNames.ACCOUNT_TABS));
    }, 0);
  };

  return (
    <AccountItemContainer>
      <TouchableOpacity onPress={onSelectAccount} activeOpacity={0.8}>
        <Title size={20}>Account 1</Title>
        <Spacer height={8} />
        <Text>
          {address.substring(0, 6)} ... {address.substring(address.length - 4)}
        </Text>
      </TouchableOpacity>
    </AccountItemContainer>
  );
};

export default AccountItem;
