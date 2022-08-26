import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import {
  ActivityIndicator,
  Alert,
  Image,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { TextInput } from '../../../components/form';
import { Container, Spacer } from '../../../components/layout';
import { Button, Text, Title } from '../../../components/ui';
import useBiometrics from '../../../hooks/useBiometrics';
import { ScreenNavigationProps } from '../../../router/navigation-props';
import ScreenNames from '../../../router/screenNames';
import wallet from '../../../services/wallet';
import useWalletPassword from '../../../services/wallet_password';
import { colors } from '../../../styles';
import useAuthentication from '../hooks/useAuthentication';

const LOGO = require('@assets/logo.png');

const LoginScreen = () => {
  const { authenticateBiometrics, isBiometricsAvailable } = useBiometrics();
  const { getWalletSavedPassword } = useWalletPassword();
  const { setIsAuthenticated } = useAuthentication();
  const [savedPassword, setSavedPassword] = useState<string | null>();
  const [isStarting, setIsStarting] = useState(false);
  const navigation = useNavigation<ScreenNavigationProps<any>>();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: { password: '' },
    mode: 'onChange',
  });

  useEffect(() => {
    getWalletSavedPassword().then((value) => setSavedPassword(value));
  }, []);

  const onSubmit = () => {
    handleSubmit(async ({ password }) => {
      if (password !== savedPassword) return Alert.alert('Wrong password');

      if (wallet.hasSession()) return setIsAuthenticated(true);

      setIsStarting(true);

      const success = await wallet.startSession(password);

      setIsStarting(false);
      if (success) return setIsAuthenticated(true);
    })();
  };

  if (isStarting)
    return (
      <Container>
        <ActivityIndicator size="large" color={colors.white} />
      </Container>
    );

  return (
    <Container center={false} alignItems="center">
      {/* LOGO */}
      <View style={styles.logoWrap}>
        <Image source={LOGO} style={styles.logo} />
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
      {/* {isBiometricsAvailable && (
        <Text
          onPress={() => authenticateBiometrics(() => setIsAuthenticated(true))}
        >
          Use Biometrics
        </Text>
      )} */}
      <Spacer height={12} />
      <Button onPress={onSubmit} width={'100%'}>
        <Title size={16}>Unlock</Title>
      </Button>
      <Spacer height={32} />
      <Text
        onPress={() => {
          navigation.navigate({ name: ScreenNames.RESET_CONFIRMATION });
        }}
      >
        Reset wallet
      </Text>
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
});

export default LoginScreen;
