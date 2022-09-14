import { View, TouchableOpacity } from 'react-native';
import React from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import colors from '@styles/colors';
import { Row, Spacer } from '@components/layout';
import IconSetting from '@assets/svg/icon_setting.svg';
import IconLogout from '@assets/svg/icon_logout.svg';
import { Text } from '@components/ui';
import styled from 'styled-components/native';
import useAuthentication from '@features/auth/hooks/useAuthentication';
import useSelectedAccount from '@features/account/hooks/useSelectedAccount';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../screenNames';
import { ScreenNavigationProps } from '../navigation-props';
import AccountsListModal from '@features/account/components/AccountsListModal';
import useNetwork from '@features/network/hooks/useNetwork';
import useModal from '@hooks/useModal';
import DrawerAccountInfo from '@features/account/components/DrawerAccountInfo';

type Props = {};

type DrawerItemProps = {
  label: string;
  icon: JSX.Element;
  onPress: () => void;
};

const Container = styled.View`
  padding: 0px 16px;
`;

const Line = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${colors.white};
`;

const DrawerItem = ({ label, icon, onPress }: DrawerItemProps) => (
  <TouchableOpacity onPress={onPress}>
    <Row alignItems="center">
      {icon}
      <Spacer width={18} />
      <Text size={16} lineHeight={24} weight={400}>
        {label}
      </Text>
    </Row>
  </TouchableOpacity>
);

const CustomDrawer = (props: Props) => {
  const { setIsAuthenticated } = useAuthentication();
  const { selectedAccount } = useSelectedAccount();
  const navigation = useNavigation<ScreenNavigationProps<any>>();
  const { visible, open, close } = useModal();
  const { selectedNetwork } = useNetwork();

  return (
    <DrawerContentScrollView
      {...props}
      style={{
        backgroundColor: colors.greyScale800,
      }}
      contentContainerStyle={{}}
    >
      <Container>
        <DrawerAccountInfo
          selectedAccount={selectedAccount}
          onPress={() => open()}
        />
        <Spacer height={45} />
        <Line />
        <Spacer height={32} />
        <DrawerItem
          label="Settings"
          icon={<IconSetting />}
          onPress={() =>
            navigation.navigate({ name: ScreenNames.SETTING_STACK })
          }
        />
        <Spacer height={32} />
        <DrawerItem
          label="Logout"
          icon={<IconLogout />}
          onPress={() => setIsAuthenticated(false)}
        />
      </Container>
      <AccountsListModal
        visible={visible}
        onClose={close}
        networkId={selectedNetwork.id}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
