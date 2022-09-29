import BiometricsLoginButton from '@features/biometrics/components/BiometricsLoginButton';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { Alert, StatusBar, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TextInput } from '../../../components/form';
import { Container, Spacer } from '../../../components/layout';
import { PrimaryButton, SecondaryButton, Title } from '../../../components/ui';
import { ScreenNavigationProps } from '../../../router/navigation-props';
import ScreenNames from '../../../router/screenNames';
import wallet from '../../../services/wallet';
import useWalletPassword from '../../../services/wallet_password';
import useAuthentication from '../hooks/useAuthentication';
import AppLogo from '@assets/svg/app_logo.svg';
import Toast from 'react-native-root-toast';

const LoginScreen = () => {
  const { getWalletSavedPassword } = useWalletPassword();
  const { setIsAuthenticated } = useAuthentication();
  const [isStarting, setIsStarting] = useState(false);
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const navigation = useNavigation<ScreenNavigationProps<any>>();

  const { control, handleSubmit, setValue } = useForm<FieldValues>({
    defaultValues: { password: '' },
    mode: 'onChange',
  });
  const insets = useSafeAreaInsets();

  const initializeWallet = async (password: string) => {
    if (wallet.hasSession()) return setIsAuthenticated(true);

    setIsStarting(true);

    const success = await wallet.startSession(password);

    setIsStarting(false);
    if (success) {
      setIsLoginSuccess(true);
    }
  };

  const loginWithPassword = async (password: string) => {
    try {
      const savedPassword = await getWalletSavedPassword();

      if (password !== savedPassword) throw Error('Login failed');

      await initializeWallet(password);
    } catch (error) {
      Toast.show(`${error}`, {
        position: Toast.positions.CENTER,
      });
    }
  };

  const loginWithBiometrics = async () => {
    try {
      const password = await getWalletSavedPassword();
      if (!password) throw Error('Login failed');

      await initializeWallet(password);
    } catch (error) {
      Toast.show(`${error}`, {
        position: Toast.positions.CENTER,
      });
    }
  };

  const onSubmit = () => {
    handleSubmit(async ({ password }) => loginWithPassword(password))();
  };

  useEffect(() => {
    if (isLoginSuccess) {
      setIsAuthenticated(true);
    }
  }, [isLoginSuccess]);

  return (
    <Container center={false} alignItems="center">
      <View style={styles.logoWrap}>
        <AppLogo />
      </View>
      <View style={styles.tileWrap}>
        <Title size={20}>Unlock your wallet to continue</Title>
      </View>
      <TextInput
        placeholder="Input your password"
        label="Password"
        name="password"
        control={control}
        rules={{ required: 'This field is required.' }}
        inputProps={{
          secureTextEntry: true,
        }}
      />
      <Spacer height={12} />
      <PrimaryButton loading={isStarting} onPress={onSubmit} label="Unlock" />
      <Spacer height={20} />
      <BiometricsLoginButton onSuccess={() => loginWithBiometrics()} />
      <Container />
      <SecondaryButton
        title="Reset wallet"
        onPress={() => {
          navigation.navigate({ name: ScreenNames.RESET_CONFIRMATION });
        }}
      />
      <Spacer height={insets.bottom} />
    </Container>
  );
};

const styles = StyleSheet.create({
  logoWrap: {
    alignSelf: 'center',
    marginTop: (StatusBar?.currentHeight || 46) + 28,
  },
  logo: {
    width: 126,
    aspectRatio: 1,
    borderRadius: 300,
  },
  tileWrap: {
    alignItems: 'center',
    marginVertical: 24,
  },
  biometrics: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 60,
  },
});

export default LoginScreen;
