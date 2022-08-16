import React from 'react';

import { AccountDetailScreen } from '../features/account';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeTabs = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="account-detail"
        component={AccountDetailScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeTabs;
