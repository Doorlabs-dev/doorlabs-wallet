import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Row, Spacer } from '@components/layout';
import { DefaultAvatar, Text } from '@components/ui';
import IconDropdown from '@assets/svg/icon_dropdown.svg';
import formatAddress from '@utils/formatAddress';
import { Account } from '../account.model';
import generateAccountName from '@utils/generateAccountName';

type Props = {
  selectedAccount?: Account;
  onPress: () => void;
};

const DrawerAccountInfo = ({ selectedAccount, onPress }: Props) => {
  const { name, symbol } = generateAccountName(selectedAccount);
  return (
    <TouchableOpacity onPress={onPress}>
      <Row>
        <DefaultAvatar text={!!selectedAccount ? symbol : 'N/A'} />
        <Spacer width={16} />
        <View style={{ width: 180 }}>
          <Row justifyContent="space-between" alignItems="center">
            <Text size={18} lineHeight={30} weight={400}>
              {!!selectedAccount ? name : 'Select account'}
            </Text>
            <IconDropdown />
          </Row>
          {!!selectedAccount && (
            <>
              <Spacer height={5} />
              <Text size={14} lineHeight={20} weight={400}>
                {formatAddress(selectedAccount?.address)}
              </Text>
            </>
          )}
        </View>
      </Row>
    </TouchableOpacity>
  );
};

export default DrawerAccountInfo;
