import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenNames from './screenNames';
import colors from '@styles/colors';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';
import { ScreenNavigationProps } from './navigation-props';
import IconClose from '@assets/svg/icon_close.svg';
import SettingScreen from '@features/setting/screen/SettingScreen';
import GetSeedPhraseScreen from '@features/recovery/screen/GetSeedPhraseScreen';
import useHeaderTitle from '@hooks/useHeaderTitle';
import { Row, Spacer } from '@components/layout';

const Stack = createNativeStackNavigator();
const { ACCOUNT_STACK, RECOVERY_GET_PHRASE } = ScreenNames;

const SettingStack = () => {
  const navigation = useNavigation<ScreenNavigationProps<any>>();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: '500',
        },
        headerTintColor: colors.white,
        headerStyle: {
          backgroundColor: colors.primary,
        },
        headerBackTitle: '',
      }}
    >
      <Stack.Screen
        name={'settings'}
        options={{
          headerTitle: useHeaderTitle('Settings'),
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate({ name: ACCOUNT_STACK });
              }}
            >
              <Row alignItems="center">
                <IconClose />
                <Spacer width={16} />
              </Row>
            </TouchableOpacity>
          ),
        }}
        component={SettingScreen}
      />
      <Stack.Screen
        options={{
          headerTitle: useHeaderTitle('View Recovery Phrase'),
        }}
        name={RECOVERY_GET_PHRASE}
        component={GetSeedPhraseScreen}
      />
    </Stack.Navigator>
  );
};

export default SettingStack;
