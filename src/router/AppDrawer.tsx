import React from 'react';
import MainTabs from './account-navigation/AccountTabs';
import ScreenNames from './screenNames';
import { createDrawerNavigator } from '@react-navigation/drawer';
import colors from '@styles/colors';
import CustomDrawer from './components/CustomDrawer';
import SettingStack from './SettingStack';
import IconBurger from '@assets/svg/icon_burger.svg';
import { Row, Spacer } from '@components/layout';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { ScreenNavigationProps } from './navigation-props';
import AccountStack from './account-navigation/AccountStack';
import useModal from 'src/hooks/useModal';

const Drawer = createDrawerNavigator();

const { ACCOUNT_STACK, SETTING_STACK } = ScreenNames;

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        drawerType: 'front',
        drawerContentStyle: {
          backgroundColor: colors.greyScale800,
        },
      }}
    >
      <Drawer.Screen
        options={{
          headerShown: false,
        }}
        name={ACCOUNT_STACK}
        component={AccountStack}
      />
      <Drawer.Screen
        options={{
          headerStyle: {
            backgroundColor: colors.primary,
            shadowColor: 'transparent',
            elevation: 0,
          },
          headerTitleStyle: {
            color: colors.white,
          },
          headerTitle: 'Settings',
          headerLeft: () => {
            const navigation = useNavigation<ScreenNavigationProps<any>>();
            return (
              <TouchableOpacity onPress={navigation.openDrawer}>
                <Row>
                  <Spacer width={16} />
                  <IconBurger />
                </Row>
              </TouchableOpacity>
            );
          },
        }}
        name={SETTING_STACK}
        component={SettingStack}
      />
    </Drawer.Navigator>
  );
};

export default AppDrawer;
