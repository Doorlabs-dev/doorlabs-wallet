import React from 'react'

import { AccountDetailScreen, AccountCreating } from '../screens/account'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const HomeTabs = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="account-detail"
        // component={AccountDetailScreen}
        component={AccountCreating}
      />
    </Stack.Navigator>
  )
}

export default HomeTabs
