import React from 'react';
import { Row } from '@components/layout';
import IconBurger from '@assets/svg/icon_burger.svg';
import SelectNetworkDropdown from '@features/network/components/SelectNetworkDropdown';
import styled, { css } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProps } from 'src/router/navigation-props';
import colors from '@styles/colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {};

const Overlay = styled.View`
  ${(props: { top: number }) => css`
    padding: 0px 16px;
    padding-top: ${props.top}px;
    background-color: ${colors.primary};
    top: 0;
  `};
`;

const Button = styled.TouchableOpacity`
  padding-right: 20px;
`;

const AccountScreenHeader = (props: Props) => {
  const navigation = useNavigation<ScreenNavigationProps<any>>();
  const insets = useSafeAreaInsets();
  return (
    <Overlay top={insets.top}>
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
