import React from 'react';
import styled from 'styled-components/native';
import { Account } from '../account.model';
import { DefaultAvatar, Text, Title } from '../../../components/ui';
import { Row, Spacer } from '../../../components/layout';
import { TouchableOpacity } from 'react-native';
import IconCheck from '@assets/svg/icon_check.svg';
import generateAccountName from '@utils/generateAccountName';

type Props = {
  account: Account;
  onPress: () => void;
  selected?: boolean;
};

const AccountItemContainer = styled.View`
  border-radius: 8px;
  width: 100%;
  padding: 16px;
`;

const AccountItem = ({ account, onPress, selected = false }: Props) => {
  const address = account.address;
  const { name, symbol } = generateAccountName(account);
  return (
    <AccountItemContainer>
      <Row alignItems="center" justifyContent="space-between">
        <Row>
          <DefaultAvatar text={symbol} />
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
