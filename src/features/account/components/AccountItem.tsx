import React from 'react';
import styled from 'styled-components/native';
import { Account } from '../account.model';
import { DefaultAvatar, Text, Title } from '../../../components/ui';
import { Row, Spacer } from '../../../components/layout';
import { TouchableOpacity } from 'react-native';
import IconCheck from '@assets/svg/icon_check.svg';

type Props = {
  name: string;
  account: Account;
  onPress: () => void;
  selected?: boolean;
};

const AccountItemContainer = styled.View`
  border-radius: 8px;
  width: 100%;
  padding: 16px;
`;

const AccountItem = ({ name, account, onPress, selected = false }: Props) => {
  const address = account.address;

  return (
    <AccountItemContainer>
      <Row alignItems="center" justifyContent="space-between">
        <Row>
          <DefaultAvatar />
          <Spacer width={16} />
          <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
            <Title size={20}>{name}</Title>
            <Spacer height={8} />
            <Text>
              {address.substring(0, 6)} ...{' '}
              {address.substring(address.length - 4)}
            </Text>
          </TouchableOpacity>
        </Row>
        {selected ? <IconCheck /> : null}
      </Row>
    </AccountItemContainer>
  );
};

export default AccountItem;
