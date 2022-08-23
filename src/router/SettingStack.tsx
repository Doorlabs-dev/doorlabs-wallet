import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TodoScreen } from '@components/ui';
import ScreenNames from './screenNames';
import IconBack from '@assets/svg/icon_back.svg';
import colors from '@styles/colors';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { ScreenNavigationProps } from './navigation-props';

const Stack = createNativeStackNavigator();
const { ACCOUNT_STACK } = ScreenNames;

const SettingStack = () => {
  const navigation = useNavigation<ScreenNavigationProps<any>>();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'settings'}
        options={{
          headerTitle: 'Settings',
          headerTitleStyle: {
            fontSize: 24,
            fontWeight: '500',
          },
          headerTintColor: colors.white,
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate({ name: ACCOUNT_STACK });
              }}
            >
              <IconBack />
            </TouchableOpacity>
          ),
        }}
        component={TodoScreen}
      />
    </Stack.Navigator>
  );
};

export default SettingStack;
