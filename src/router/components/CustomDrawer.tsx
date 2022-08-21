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
import { formatAddress } from '@utils/formatAddress';
import IconDropdown from '@assets/svg/icon_dropdown.svg';
import { useNavigation } from '@react-navigation/native';
import ScreenNames from '../screenNames';
import { ScreenNavigationProps } from '../navigation-props';

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

const DefaultAvatar = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: ${colors.blue};
`;

const DrawerItem = ({ label, icon, onPress }: DrawerItemProps) => (
  <TouchableOpacity onPress={onPress}>
    <Row>
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

  return (
    <DrawerContentScrollView
      {...props}
      style={{
        backgroundColor: colors.greyScale800,
      }}
      contentContainerStyle={{}}
    >
      <Container>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate({ name: ScreenNames.ACCOUNT_TABS })
          }
        >
          <Row>
            <DefaultAvatar />
            <Spacer width={16} />
            <View style={{ width: 150 }}>
              <Row justifyContent="space-between" alignItems="center">
                <Text size={20} lineHeight={30} weight={400}>
                  Account 1
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
        <Spacer height={45} />
        <Line />
        <Spacer height={16} />
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
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
