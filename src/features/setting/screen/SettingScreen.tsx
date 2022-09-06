import React from 'react';
import { Container } from '@components/layout';
import SettingItem from '../components/SettingItem';
import { useNavigation } from '@react-navigation/native';
import { ScreenNavigationProps } from 'src/router/navigation-props';
import ScreenNames from '@router/screenNames';
import BiometricsSetting from '../components/BiometricsSetting';
import AndroidHeaderFix from '@components/layout/AndroidHeaderFix';

const SettingScreen = () => {
  const navigation = useNavigation<ScreenNavigationProps<any>>();
  return (
    <Container center={false}>
      <AndroidHeaderFix />
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
  );
};

export default SettingScreen;
