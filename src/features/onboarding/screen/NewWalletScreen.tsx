import { Checkbox } from "@components/ui/Checkbox";
import React, { useState } from "react";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { ActivityIndicator, StyleSheet, Switch, View } from "react-native";
import Toast from "react-native-root-toast";
import { TextInput } from "../../../components/form";
import { Container, Spacer } from "../../../components/layout";
import { Button, Text, Title } from "../../../components/ui";
import { defaultNetwork } from "../../../services/network/default_networks";
import wallet from "../../../services/wallet";
import useWalletPassword from "../../../services/wallet_password";
import { colors } from "../../../styles";
import useAuthentication from "../../auth/hooks/useAuthentication";
import useWallet from "../../wallet/hooks/useWallet";

const NewWalletScreen = () => {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
    setValue,
  } = useForm<FieldValues>({
    defaultValues: {
      password: "",
      passwordConfirmation: "",
      useFaceId: false,
      agreedPrivacy: false,
    },
    mode: "onChange",
  });

  const { setWalletPassword } = useWalletPassword();
  const { setIsAuthenticated, setIsAccountAvailable } = useAuthentication();
  const [isCreatingWallet, setIsCreatingWallet] = useState(false);

  const onConfirm = () => {
    console.log("onconfirm", errors);

    handleSubmit(async ({ password }) => {
      try {
        setIsCreatingWallet(true);

        await setWalletPassword(password);
        const success = await wallet.startSession(password);

        if (!success) throw Error('Error creating wallet');

        setTimeout(() => {
          setIsAuthenticated(true);
          setIsAccountAvailable(true);
        }, 300);
      } catch (e) {
        setIsCreatingWallet(false);
        Toast.show(`${e}`);
      }
    })();
  };

  const isSameValue = (value: string) => {
    return value !== getValues().password
      ? "Password confirmation is not correct"
      : undefined;
  };

  if (isCreatingWallet) {
    return (
      <Container>
        <ActivityIndicator size={"large"} color={colors.white} />
        <Title textAlign="center">Creating wallet{"\n"}for you...🚀</Title>
      </Container>
    );
  }

  return (
    <Container style={{ justifyContent: "flex-start" }}>
      <Title textAlign="center" size={28}>
        New password for your wallet
      </Title>
      <Spacer height={24} />
      <TextInput
        name="password"
        placeholder="Password"
        label="Password"
        errors={errors}
        control={control}
        rules={{ required: "This field is required!" }}
        inputProps={{
          secureTextEntry: true,
        }}
      />
      <TextInput
        name="passwordConfirmation"
        placeholder="Password confirmation"
        label="Confirm password"
        errors={errors}
        control={control}
        rules={{
          required: "This field is required!",
          validate: isSameValue,
        }}
        inputProps={{
          secureTextEntry: true,
        }}
      />
      <Spacer height={32} />
      <Button onPress={onConfirm} width={"100%"}>
        <Title size={16}>Confirm</Title>
      </Button>
      <View style={styles.faceIdSwitch}>
        <Text size={16} color="white">
          Unlock with FaceID
        </Text>
        <Controller
          control={control}
          name="useFaceId"
          render={({ field: { value } }) => (
            <Switch
              value={value}
              onChange={() => setValue("useFaceId", !value)}
            />
          )}
        />
      </View>
      <View style={styles.privacyWrapper}>
        <Controller
          control={control}
          name="agreedPrivacy"
          rules={{ required: "Need to accept the privacy!" }}
          render={({ field: { value } }) => (
            <Checkbox
              checked={value}
              onChange={() => setValue("agreedPrivacy", !value)}
            />
          )}
        />
        <Text size={16} color="white" style={styles.privacyTxt}>
          I have read and agreed to the Terms and Conditions
        </Text>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  faceIdSwitch: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginVertical: 28,
    alignItems: "center",
  },
  privacyWrapper: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  privacyTxt: { flex: 1, marginLeft: 14 },
});

export default NewWalletScreen;
