import React, { useEffect, useState } from "react";
import { Container, Spacer } from "../../../components/layout";
import useBiometrics from "../../../hooks/useBiometrics";
import { Button, Text, Title } from "../../../components/ui";
import { TextInput } from "../../../components/form";
import {
  ActivityIndicator,
  Alert,
  StyleSheet,
  Image,
  View,
  StatusBar,
} from "react-native";
import useWalletPassword from "../../../services/wallet_password";
import useAuthentication from "../hooks/useAuthentication";
import { Controller, useForm } from "react-hook-form";
import wallet from "../../../services/wallet";
import { colors } from "../../../styles";
import { useNavigation } from "@react-navigation/native";
import { ScreenNavigationProps } from "../../../router/navigation-props";
import ScreenNames from "../../../router/screenNames";

const LOGO = require("@assets/logo.png");

const LoginScreen = () => {
  const { authenticateBiometrics, isBiometricsAvailable } = useBiometrics();
  const { getWalletSavedPassword } = useWalletPassword();
  const { setIsAuthenticated } = useAuthentication();
  const [savedPassword, setSavedPassword] = useState<string | null>();
  const [isStarting, setIsStarting] = useState(false);
  const navigation = useNavigation<ScreenNavigationProps<any>>();

  const { control, handleSubmit } = useForm({
    defaultValues: { password: "" },
  });

  useEffect(() => {
    getWalletSavedPassword().then((value) => setSavedPassword(value));
  }, []);

  const onSubmit = () => {
    handleSubmit(async ({ password }) => {
      if (password !== savedPassword) return Alert.alert("Wrong password");

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
      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, value } }) => (
          <TextInput
            inputProps={{
              value,
              onChangeText: onChange,
              secureTextEntry: true,
            }}
            placeholder="Input your password"
            label="Password"
          />
        )}
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
      <Button onPress={onSubmit}>
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
    alignSelf: "center",
    marginTop: (StatusBar?.currentHeight || 46) + 28,
  },
  logo: {
    width: 126,
    aspectRatio: 1,
    borderRadius: 300,
  },
  tileWrap: {
    alignItems: "center",
    marginVertical: 24,
  },
});

export default LoginScreen;
