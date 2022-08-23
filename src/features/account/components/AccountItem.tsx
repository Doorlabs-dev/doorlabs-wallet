import React from 'react';
import styled from 'styled-components/native';
import { Account } from '../account.model';
import { DefaultAvatar, Text, Title } from '../../../components/ui';
import { Row, Spacer } from '../../../components/layout';
import { TouchableOpacity } from 'react-native';

type Props = {
  account: Account;
  onPress: () => void;
};

const AccountItemContainer = styled.View`
  border-radius: 8px;
  width: 90%;
  padding: 16px;
`;

const AccountItem = ({ account, onPress }: Props) => {
  const address = account.address;

  return (
    <AccountItemContainer>
      <Row>
        <DefaultAvatar />
        <Spacer width={16} />
        <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
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
