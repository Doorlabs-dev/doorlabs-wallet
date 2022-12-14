import React, { useEffect, useState } from 'react';
import { Container, SafeArea, Spacer } from '@components/layout';
import { PrimaryButton, Text } from '@components/ui';
import { TextInput } from '@components/form';
import useWalletPassword from '@services/wallet_password';
import { FieldValues, useForm } from 'react-hook-form';
import useSelectedAccount from '../hooks/useSelectedAccount';
import * as Clipboard from 'expo-clipboard';
import Toast from 'react-native-root-toast';
import colors from '@styles/colors';
import { View } from 'react-native';
import AndroidHeaderFix from '@components/layout/AndroidHeaderFix';

type Props = {};

const AccountPrivateKeyScreen = (props: Props) => {
  const [passed, setPassed] = useState(false);
  const [privKey, setPrivKey] = useState('');
  const { getWalletSavedPassword } = useWalletPassword();
  const { control, handleSubmit } = useForm<FieldValues>({
    defaultValues: {
      password: '',
    },
    mode: 'onChange',
  });
  const { exportPrivateKey } = useSelectedAccount();

  useEffect(() => {
    if (passed) {
      exportPrivateKey().then((value) => setPrivKey(value));
    }
  }, [passed]);

  const submit = () => {
    handleSubmit(async (value) => {
      const walletPassword = await getWalletSavedPassword();
      if (walletPassword === value.password) {
        setPassed(true);
      } else {
        Toast.show('Wrong password', {
          position: Toast.positions.CENTER,
        });
      }
    })();
  };

  const copyPrivKey = async () => {
    await Clipboard.setStringAsync(privKey);
    Toast.show('Copied');
  };

  return (
    <Container center={false} alignItems="center">
      <AndroidHeaderFix />
      <Spacer height={36} />
      {passed ? (
        <>
          <View style={{ alignSelf: 'flex-start' }}>
            <Text color={colors.greyScale600}>This is your private key</Text>
          </View>
          <Spacer height={16} />
          <Text>{privKey}</Text>
          <Spacer height={24} />
          <PrimaryButton
            label="Copy to clipboard"
            onPress={() => copyPrivKey()}
          />
        </>
      ) : (
        <>
          <TextInput
            control={control}
            name="password"
            rules={{ required: true }}
            inputProps={{
              secureTextEntry: true,
            }}
            label="Password"
            placeholder="Password"
          />
          <PrimaryButton label="Next" onPress={submit} />
        </>
      )}
    </Container>
  );
};

export default AccountPrivateKeyScreen;
