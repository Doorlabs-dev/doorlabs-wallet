import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import HomeTabs from './HomeTabs';
import { colors } from '../styles';
import { GetSeedPhraseScreen } from '../screens/setting';

const Drawer = createDrawerNavigator();

const MainDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
      )}
      screenOptions={{
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.primary,
          borderColor: 'transparent',
          borderBottomWidth: 0,
          shadowColor: 'transparent',
        },

        headerTitleStyle: {
          color: colors.white,
        },
        drawerStyle: {
          backgroundColor: colors.primary,
        },
        drawerItemStyle: {
          backgroundColor: colors.secondary,
        },
        drawerLabelStyle: {
          color: colors.white,
        },
      }}
    >
      <Drawer.Screen
        options={{ title: 'Home' }}
        name="home"
        component={HomeTabs}
      />
      <Drawer.Screen
        options={{ title: 'Show recovery phrase' }}
        name="show-recovery-phrase"
        component={GetSeedPhraseScreen}
      />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
