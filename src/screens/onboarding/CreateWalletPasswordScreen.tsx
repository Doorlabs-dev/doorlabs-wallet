import React, { Fragment } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Alert } from 'react-native';
import { TextInput } from '../../components/form';
import { Container, Spacer } from '../../components/layout';
import { Button, Text, Title } from '../../components/ui';
import useAuthentication from '../../hooks/useAuthentication';
import useWalletPassword from '../../hooks/useWalletPassword';

const CreateWalletPasswordScreen = () => {
  const { control, handleSubmit, getValues } = useForm({
    defaultValues: {
      password: '',
      passwordConfirmation: '',
    },
    mode: 'onChange',
  });
  const { setPassword } = useWalletPassword();
  const { setIsAuthenticated, setIsAccountAvailable } = useAuthentication();

  const onConfirm = () => {
    handleSubmit(async ({ password }) => {
      await setPassword(password);
      setIsAuthenticated(true);
      setIsAccountAvailable(true);
    })();
  };

  const isSameValue = (value: string) => {
    return value === getValues().password;
  };

  return (
    <Container>
      <Title>Create your wallet password</Title>
      <Spacer height={32} />
      <Controller
        name="password"
        control={control}
        rules={{ required: true }}
        render={({ field: { value, onChange } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            secureTextEntry
            placeholder="Password"
          />
        )}
      />
      <Spacer height={32} />
      <Controller
        name="passwordConfirmation"
        control={control}
        rules={{ required: true, validate: isSameValue }}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <Fragment>
            <TextInput
              value={value}
              onChangeText={onChange}
              secureTextEntry
              placeholder="Password"
            />
            <Text color="red" size={12}>
              {error?.type == 'validate'
                ? 'Password confirmation is not correct'
                : null}
            </Text>
          </Fragment>
        )}
      />
      <Spacer height={32} />
      <Button onPress={onConfirm} width={300}>
        <Title size={20}>Confirm</Title>
      </Button>
    </Container>
  );
};

export default CreateWalletPasswordScreen;
