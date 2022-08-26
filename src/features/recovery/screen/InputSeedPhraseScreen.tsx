import { useNavigation } from '@react-navigation/native';
import { ethers } from 'ethers';
import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';
import { ActivityIndicator } from 'react-native';
import Toast from 'react-native-root-toast';
import { TextInput } from '../../../components/form';
import { Container, Spacer } from '../../../components/layout';
import { Button, Text, Title } from '../../../components/ui';
import { ScreenNavigationProps } from '../../../router/navigation-props';
import { colors } from '../../../styles';
import { useHeaderHeight } from '@react-navigation/elements';
import * as Clipboard from 'expo-clipboard';

const InputSeedPhraseScreen = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    getValues,
    setValue,
  } = useForm<FieldValues>({
    defaultValues: {
      password: '',
      passwordConfirmation: '',
      phrase: '',
    },
    mode: 'onChange',
  });
  const navigation = useNavigation<ScreenNavigationProps<{ phrase: string }>>();
  const [isValidating, setIsValidating] = useState(false);

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

  const onSubmit = () => {
    handleSubmit(async ({ phrase }) => {
      setIsValidating(true);
      const success = await validatePhrase(phrase);
      setIsValidating(false);
      if (!success) {
        return Toast.show('Invalid phrase');
      }

      navigation.navigate({
        name: 'restore-wallet',
        params: {
          phrase: phrase,
        },
      });
    })();
  };

  const onPaste = async () => {
    const txtClipboard = await Clipboard.getStringAsync();
    setValue('phrase', txtClipboard);
  };

  const headerHeight = useHeaderHeight();

  return (
    <Container center={false} alignItems={'center'}>
      <Spacer height={headerHeight} />
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
            height: 128,
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
      <Spacer height={24} />
      <Button onPress={onSubmit} width={'100%'}>
        {isValidating ? (
          <ActivityIndicator color={colors.white} />
        ) : (
          <Title size={20}>Next</Title>
        )}
      </Button>
    </Container>
  );
};

export default InputSeedPhraseScreen;
