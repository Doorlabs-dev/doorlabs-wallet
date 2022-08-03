import { useNavigation } from '@react-navigation/native';
import { ethers } from 'ethers';
import { Fragment, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ActivityIndicator, ToastAndroid } from 'react-native';
import { TextInput } from '../../components/form';
import { Container, Spacer } from '../../components/layout';
import { Button, Text, Title } from '../../components/ui';
import { ScreenNavigationProps } from '../../router/navigation-props';
import { colors } from '../../styles';

const InputSeedPhraseScreen = () => {
  const { control, handleSubmit } = useForm();
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

  const onSubmit = () => {
    handleSubmit(async ({ phrase }) => {
      setIsValidating(true);
      const success = await validatePhrase(phrase);
      setIsValidating(false);
      if (!success) {
        return ToastAndroid.show('Invalid phrase', 1000);
      }

      navigation.navigate({
        name: 'restore-wallet',
        params: {
          phrase: phrase,
        },
      });
    })();
  };

  return (
    <Container>
      <Title>Restore account</Title>
      <Spacer height={48} />
      <Controller
        name="phrase"
        control={control}
        rules={{ required: true }}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <Fragment>
            <TextInput
              value={value}
              multiline
              onChangeText={onChange}
              placeholder="Fill in your recovery phrase"
            />
            {error?.type === 'required' && (
              <Text color={colors.red}>Required</Text>
            )}
          </Fragment>
        )}
      />
      <Spacer height={32} />
      <Button onPress={onSubmit} width={300}>
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
