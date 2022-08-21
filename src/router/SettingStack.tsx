import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TodoScreen } from '@components/ui';
import ScreenNames from './screenNames';

type Props = {};

const Stack = createNativeStackNavigator();
const { SETTING_STACK } = ScreenNames;

const SettingStack = (props: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'settings'}
        options={{ headerShown: false }}
        component={TodoScreen}
      />
    </Stack.Navigator>
  );
};

export default SettingStack;
