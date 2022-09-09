import { ethers } from 'ethers';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import Toast from 'react-native-root-toast';
import { TextInput } from '../../../components/form';
import {
  Container,
  KeyboardScrollViewContainer,
  Spacer,
} from '../../../components/layout';
import { Button, PrimaryButton, Title } from '../../../components/ui';
import * as Clipboard from 'expo-clipboard';
import useWalletPassword from '@services/wallet_password';
import useAuthentication from '@features/auth/hooks/useAuthentication';
import wallet from '@services/wallet';
import AndroidHeaderFix from '@components/layout/AndroidHeaderFix';
import { ActivityIndicator } from 'react-native';
import colors from '@styles/colors';
import RestoreSuccessPopup from './components/RestoreSuccessPopup';
import useModal from '@hooks/useModal';
import InvalidPhrasePopup from './components/InvalidPhrasePopup';

const InputSeedPhraseScreen = () => {
  const { control, handleSubmit, getValues, setValue } = useForm<FieldValues>({
    defaultValues: {
      password: '',
      passwordConfirmation: '',
      phrase: '',
    },
    mode: 'onTouched',
  });
  const [isValidating, setIsValidating] = useState(false);
  const [isRestoring, setIsRestoring] = useState(false);
  const {
    visible: restoreSuccessVisible,
    open: openRestoreSuccess,
    close: closeRestoreSuccess,
  } = useModal();
  const {
    visible: invalidPhraseVisible,
    open: openInvalidPhrase,
    close: closeInvalidPhrase,
  } = useModal();

  const validatePhrase = (phrase: string): Promise<boolean> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        try {
          ethers.Wallet.fromMnemonic(phrase);
          resolve(true);
        } catch (error) {
          resolve(false);
        }
      }, 0);
    });
  };

  const isSameValue = (value: string) => {
    return value !== getValues().password
      ? 'Password confirmation is not correct'
      : undefined;
  };

  const { setWalletPassword } = useWalletPassword();
  const { setIsAuthenticated, setIsAccountAvailable } = useAuthentication();

  const onSubmit = () => {
    handleSubmit(async ({ phrase, password }) => {
      setIsValidating(true);
      const success = await validatePhrase(phrase);
      if (!success) {
        setIsValidating(false);
        return openInvalidPhrase();
      }
      try {
        setIsRestoring(true);

        await setWalletPassword(password);
        await wallet.restoreSeedPhrase(phrase, password);
        openRestoreSuccess();
      } catch (error) {
        setIsRestoring(false);
        Toast.show(`${error}`, {
          position: Toast.positions.CENTER,
        });
      }
    })();
  };

  const onPaste = async () => {
    const txtClipboard = await Clipboard.getStringAsync();
    setValue('phrase', txtClipboard, { shouldValidate: true });
  };

  if (isRestoring) {
    return (
      <Container>
        <ActivityIndicator size={'large'} color={colors.white} />
        <Title textAlign="center">Bring your wallet home...😍</Title>
        <RestoreSuccessPopup
          visible={restoreSuccessVisible}
          onClose={() => {
            closeRestoreSuccess();
            setTimeout(() => {
              setIsAuthenticated(true);
              setIsAccountAvailable(true);
            }, 1000);
          }}
        />
      </Container>
    );
  }

  return (
    <KeyboardScrollViewContainer extraHeight={250}>
      <Container center={false} alignItems="center">
        <AndroidHeaderFix />
        <Spacer height={20} />
        <TextInput
          name="phrase"
          control={control}
          placeholder="Secret phrase"
          label="Typically 12 (sometimes 24) words separated by single spaces"
          rules={{ required: 'This field is required!' }}
          inputProps={{
            multiline: true,
            style: {
              height: 88,
            },
          }}
        >
          <Button
            width={80}
            height={40}
            onPress={onPaste}
            color="transparent"
            style={{ alignSelf: 'flex-end' }}
          >
            <Title size={16}>Paste</Title>
          </Button>
        </TextInput>
        <TextInput
          name="password"
          control={control}
          placeholder="Input your new password"
          label="New password"
          rules={{ required: 'This field is required!' }}
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
            required: 'This field is required!',
            validate: isSameValue,
          }}
          inputProps={{
            secureTextEntry: true,
          }}
        />
        <Spacer height={4} />
        <PrimaryButton label="Next" loading={isValidating} onPress={onSubmit} />
        <Spacer height={20} />
        <InvalidPhrasePopup
          visible={invalidPhraseVisible}
          onClose={closeInvalidPhrase}
        />
      </Container>
    </KeyboardScrollViewContainer>
  );
};

export default InputSeedPhraseScreen;
