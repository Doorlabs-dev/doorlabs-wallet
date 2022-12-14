import { Checkbox } from '@components/ui/Checkbox';
import BiometricsEnableSwitch from '@features/biometrics/components/BiometricsEnableSwitch';
import useBiometrics, { biometricsStore } from '@hooks/useBiometrics';
import { StackActions, useNavigation } from '@react-navigation/native';
import { ScreenNavigationProps } from '@router/navigation-props';
import ScreenNames from '@router/screenNames';
import { commonPasswordRules, minLengthErrorMessage } from '@utils/validator';
import React, { useEffect, useState } from 'react';
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import Toast from 'react-native-root-toast';
import { TextInput } from '../../../components/form';
import {
  Container,
  KeyboardScrollViewContainer,
  SafeArea,
  Spacer,
} from '../../../components/layout';
import { PrimaryButton, Text, Title } from '../../../components/ui';
import wallet from '../../../services/wallet';
import useWalletPassword from '../../../services/wallet_password';
import { colors } from '../../../styles';

const NewWalletScreen = () => {
  const { control, formState, handleSubmit, getValues, setValue } =
    useForm<FieldValues>({
      defaultValues: {
        password: '',
        passwordConfirmation: '',
        useFaceId: false,
        agreedPrivacy: false,
      },
      mode: 'onChange',
    });

  const { setWalletPassword } = useWalletPassword();

  const [isCreatingWallet, setIsCreatingWallet] = useState(false);
  const navigation = useNavigation<ScreenNavigationProps<any>>();

  const { authenticateBiometrics, supportedTypes, getAuthenticationTypeName } =
    useBiometrics();

  const validateBiometrics = async (useFaceId: boolean): Promise<boolean> => {
    if (!useFaceId) return true;

    const result = await authenticateBiometrics();

    await biometricsStore.set(result);

    return result;
  };

  useEffect(() => {
    if (isCreatingWallet) {
      navigation.setOptions({ headerBackVisible: false });
    } else {
      navigation.setOptions({ headerBackVisible: true });
    }
  }, [isCreatingWallet]);

  const onConfirm = () => {
    handleSubmit(async ({ password, useFaceId }) => {
      try {
        const biometricsSuccess = await validateBiometrics(useFaceId);

        if (!biometricsSuccess) {
          return;
        }

        setIsCreatingWallet(true);

        await setWalletPassword(password);
        const success = await wallet.startSession(password);

        if (!success) throw Error('Error creating wallet');

        navigation.dispatch(StackActions.replace(ScreenNames.SECURE_WALLET));
      } catch (e) {
        setIsCreatingWallet(false);
        Toast.show(`${e}`, {
          position: Toast.positions.CENTER,
        });
      }
    })();
  };

  const isSameValue = (value: string) => {
    return value !== getValues().password
      ? 'Password confirmation is not correct'
      : undefined;
  };

  if (isCreatingWallet) {
    return (
      <Container>
        <ActivityIndicator size={'large'} color={colors.white} />
        <Title textAlign="center">Creating wallet{'\n'}for you...????</Title>
      </Container>
    );
  }

  return (
    <KeyboardScrollViewContainer extraHeight={300}>
      <Spacer height={36} />
      <Container style={{ justifyContent: 'flex-start' }}>
        <Title textAlign="center" size={28}>
          New password for your wallet
        </Title>
        <Spacer height={24} />
        <TextInput
          name="password"
          placeholder="Password"
          label="Password"
          control={control}
          rules={commonPasswordRules}
          errorMessages={{
            minLength: minLengthErrorMessage,
          }}
          inputProps={{
            secureTextEntry: true,
          }}
        />
        <TextInput
          name="passwordConfirmation"
          placeholder="Password confirmation"
          label="Confirm password"
          control={control}
          rules={{
            ...commonPasswordRules,
            validate: isSameValue,
          }}
          errorMessages={{
            minLength: minLengthErrorMessage,
          }}
          inputProps={{
            secureTextEntry: true,
          }}
        />
        <Spacer height={16} />
        <PrimaryButton
          textColor={colors.white}
          label="Confirm"
          onPress={onConfirm}
          disabled={!formState.isValid}
        />
        <Spacer height={27} />
        <Controller
          control={control}
          name="useFaceId"
          render={({ field: { value } }) => (
            <BiometricsEnableSwitch
              supportedTypes={supportedTypes}
              enabled={value}
              onChange={(v) => setValue('useFaceId', v, { shouldDirty: true })}
              authType={getAuthenticationTypeName()}
            />
          )}
        />
        <Spacer height={27} />
        <View style={styles.privacyWrapper}>
          <Controller
            control={control}
            name="agreedPrivacy"
            rules={{ required: 'Need to accept the privacy!' }}
            render={({ field: { value } }) => (
              <Checkbox
                checked={value}
                onChange={() =>
                  setValue('agreedPrivacy', !value, {
                    shouldValidate: true,
                  })
                }
              />
            )}
          />
          <Text size={16} color="white" style={styles.privacyTxt}>
            I have read and agreed to the Terms and Conditions
          </Text>
        </View>
        <Spacer height={50} />
      </Container>
    </KeyboardScrollViewContainer>
  );
};

const styles = StyleSheet.create({
  faceIdSwitch: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginVertical: 28,
    alignItems: 'center',
  },
  privacyWrapper: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  privacyTxt: { flex: 1, marginLeft: 14 },
});

export default NewWalletScreen;
