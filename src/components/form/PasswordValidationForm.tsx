import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import TextInput from './TextInput';
import { PrimaryButton } from '@components/ui';
import useWalletPassword from '@services/wallet_password';
import { Spacer } from '@components/layout';
import Toast from 'react-native-root-toast';

type Props = {
  onPass?: () => void;
  onReject?: () => void;
};

const PasswordValidationForm = ({ onPass, onReject }: Props) => {
  const { control, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      password: '',
    },
  });
  const [isLoading, setIsLoading] = useState(false);
  const { getWalletSavedPassword } = useWalletPassword();

  const submit = () => {
    handleSubmit((formValues) => {
      setIsLoading(true);
      setTimeout(async () => {
        const walletPassword = await getWalletSavedPassword();
        if (formValues.password === walletPassword) {
          onPass?.();
        } else {
          onReject?.();
          Toast.show('Wrong password');
        }
        setIsLoading(false);
      }, 500);
    })();
  };

  return (
    <>
      <TextInput
        name="password"
        control={control}
        inputProps={{
          secureTextEntry: true,
        }}
        rules={{ required: true }}
        label="Password"
      />
      <PrimaryButton loading={isLoading} label="Next" onPress={submit} />
    </>
  );
};

export default PasswordValidationForm;
