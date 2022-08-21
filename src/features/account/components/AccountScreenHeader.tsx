import React from 'react';
import { Text } from '@components/ui';
import { Row } from '@components/layout';
import IconBurger from '@assets/svg/icon_burger.svg';
import SelectNetworkDropdown from '@features/network/components/SelectNetworkDropdown';
import styled from 'styled-components/native';

type Props = {};

const Overlay = styled.View`
  z-index: 1000;
  padding: 0px 16px;
`;

const AccountScreenHeader = (props: Props) => {
  return (
    <Overlay>
      <Row alignItems="center" justifyContent="space-between">
        <IconBurger />
        <SelectNetworkDropdown />
      </Row>
    </Overlay>
  );
};

export default AccountScreenHeader;
