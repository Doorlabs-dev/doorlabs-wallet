import React from 'react';
import { Container, SafeArea } from '@components/layout';
import SettingItem from '../components/SettingItem';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProps } from 'src/router/navigation-props';
import ScreenNames from '@router/screenNames';
import BiometricsSetting from '../components/BiometricsSetting';

const SettingScreen = () => {
  const navigation = useNavigation<ScreenNavigationProps<any>>();

  return (
    <SafeArea>
      <Container center={false}>
        <SettingItem
          title="Show recovery phrase"
          onPress={() =>
            navigation.navigate({
              name: ScreenNames.RECOVERY_GET_PHRASE,
            })
          }
        />
        <BiometricsSetting />
      </Container>
    </SafeArea>
  );
};

export default SettingScreen;
