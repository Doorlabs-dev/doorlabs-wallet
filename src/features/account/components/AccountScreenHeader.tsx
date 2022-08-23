import React from 'react';
import { Row } from '@components/layout';
import IconBurger from '@assets/svg/icon_burger.svg';
import SelectNetworkDropdown from '@features/network/components/SelectNetworkDropdown';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProps } from 'src/router/navigation-props';

type Props = {};

const Overlay = styled.View`
  z-index: 1000;
  padding: 0px 16px;
`;

const Button = styled.TouchableOpacity`
  padding-right: 20px;
`;

const AccountScreenHeader = (props: Props) => {
  const navigation = useNavigation<ScreenNavigationProps<any>>();

  return (
    <Overlay>
      <Row alignItems="center" justifyContent="space-between">
        <Button onPress={navigation.openDrawer}>
          <IconBurger />
        </Button>
        <SelectNetworkDropdown />
      </Row>
    </Overlay>
  );
};

export default AccountScreenHeader;
