import React, { useEffect, useState } from 'react';
import { useIsFocused } from '@react-navigation/native';
import Toast from 'react-native-root-toast';
import { ActivityIndicator } from 'react-native';
import { Container, Spacer } from '../../../components/layout';
import { Button, Title } from '../../../components/ui';
import wallet from '../../../services/wallet';
import { colors } from '../../../styles';
import * as Clipboard from 'expo-clipboard';

const GetSeedPhraseScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [phrase, setPhrase] = useState('');
  const isFocused = useIsFocused();

  useEffect(() => {
    if (!isFocused) {
      reset();
    }
  }, [isFocused]);

  const reset = () => {
    setPhrase('');
    setIsLoading(false);
  };

  const getRecoveryPhrase = async () => {
    setIsLoading(true);
    try {
      if (wallet.hasSession()) {
        setTimeout(async () => {
          const phrase = await wallet.getSeedPhrase();
          setPhrase(phrase || '');

          setIsLoading(false);
        }, 0);
      }
    } catch (error) {
      setIsLoading(false);
    }
  };

  const onClick = async () => {
    if (phrase) {
      await Clipboard.setStringAsync(phrase);
      Toast.show('Copied');
    } else {
      getRecoveryPhrase();
    }
  };

  return (
    <Container>
      {!!phrase && (
        <Spacer width={300} height={80}>
          <Title textAlign="center" size={16}>
            {phrase}
          </Title>
        </Spacer>
      )}
      {isLoading && <ActivityIndicator color={colors.white} size="large" />}
      <Spacer height={16} />
      <Button onPress={onClick} width={300}>
        <Title size={20}>
          {phrase ? 'Copy to clipboard' : 'View recovery phrase'}
        </Title>
      </Button>
    </Container>
  );
};

export default GetSeedPhraseScreen;
