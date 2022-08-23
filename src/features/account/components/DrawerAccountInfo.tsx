import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Row, Spacer } from '@components/layout';
import { DefaultAvatar, Text } from '@components/ui';
import IconDropdown from '@assets/svg/icon_dropdown.svg';
import { formatAddress } from '@utils/formatAddress';
import { Account } from '../account.model';

type Props = {
  selectedAccount?: Account;
  onPress: () => void;
};

const DrawerAccountInfo = ({ selectedAccount, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Row>
        <DefaultAvatar text={!!selectedAccount ? 'A1' : 'N/A'} />
        <Spacer width={16} />
        <View style={{ width: 150 }}>
          <Row justifyContent="space-between" alignItems="center">
            <Text size={20} lineHeight={30} weight={400}>
              {!!selectedAccount ? 'Account 1' : 'Select account'}
            </Text>
            <IconDropdown />
          </Row>
          <Spacer height={5} />
          <Text size={14} lineHeight={20} weight={400}>
            {formatAddress(selectedAccount?.address)}
          </Text>
        </View>
      </Row>
    </TouchableOpacity>
  );
};

export default DrawerAccountInfo;
